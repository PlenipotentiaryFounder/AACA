"use client"

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Rewind, FastForward, MessageSquareText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

// Define the structure for a parsed subtitle cue
interface SubtitleCue {
  start: number;
  end: number;
  text: string;
}

interface AudioPlayerProps {
  audioSrc: string;
  trackTitle: string;
  subtitleSrc?: string; // Optional path to VTT file
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc, trackTitle, subtitleSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [cues, setCues] = useState<SubtitleCue[]>([]);
  const [currentSubtitle, setCurrentSubtitle] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState(false); // State for expansion
  const [showSubtitles, setShowSubtitles] = useState(true); // State for subtitle visibility
  const audioRef = useRef<HTMLAudioElement>(null);

  // --- VTT Parsing Logic --- 
  const parseVTT = (vttContent: string): SubtitleCue[] => {
    const lines = vttContent.trim().split(/\r?\n/);
    const parsedCues: SubtitleCue[] = [];
    let i = 0;

    // Skip WEBVTT header if present
    if (lines[0].startsWith('WEBVTT')) {
      i++;
      // Skip potential empty lines or comments after header
      while (i < lines.length && (!lines[i].includes('-->') || lines[i].trim() === '')) {
          i++;
      }
    }

    const timeStringToSeconds = (timeString: string): number => {
        const parts = timeString.split(':');
        let seconds = 0;
        if (parts.length === 3) { // HH:MM:SS.ms
            seconds += parseFloat(parts[0]) * 3600;
            seconds += parseFloat(parts[1]) * 60;
            seconds += parseFloat(parts[2]);
        } else if (parts.length === 2) { // MM:SS.ms
            seconds += parseFloat(parts[0]) * 60;
            seconds += parseFloat(parts[1]);
        }
        return seconds;
    };

    while (i < lines.length) {
      // Skip potential cue identifier line (optional)
      if (!lines[i].includes('-->') && lines[i].trim() !== '') {
          i++;
      }

      // Time line
      if (i < lines.length && lines[i].includes('-->')) {
        const timeLine = lines[i];
        const [startStr, endStr] = timeLine.split(' --> ').map(s => s.trim().split(' ')[0]); // Handle potential settings after timestamp
        const start = timeStringToSeconds(startStr);
        const end = timeStringToSeconds(endStr);
        i++;

        // Text lines
        let text = '';
        while (i < lines.length && lines[i].trim() !== '') {
          text += (text ? '\n' : '') + lines[i].trim();
          i++;
        }

        if (!isNaN(start) && !isNaN(end) && text) {
            parsedCues.push({ start, end, text });
        }
      }

      // Skip empty lines between cues
      while (i < lines.length && lines[i].trim() === '') {
        i++;
      }
    }

    return parsedCues;
  };

  useEffect(() => {
    if (!subtitleSrc) {
        setCues([]);
        setCurrentSubtitle("");
        return;
    }

    const fetchAndParseSubtitles = async () => {
      try {
        const response = await fetch(subtitleSrc);
        if (!response.ok) {
          throw new Error(`Failed to fetch VTT: ${response.statusText}`);
        }
        const vttText = await response.text();
        const parsedCues = parseVTT(vttText);
        setCues(parsedCues);
      } catch (error) {
        console.error("Error loading or parsing subtitles:", error);
        setCues([]); // Clear cues on error
      }
    };

    fetchAndParseSubtitles();

  }, [subtitleSrc]); // Re-run when subtitleSrc changes
  // --- End VTT Parsing Logic ---

  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  }, []);

  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current) {
      const time = audioRef.current.currentTime;
      setCurrentTime(time);

      // Update subtitle
      const activeCue = cues.find(cue => time >= cue.start && time <= cue.end);
      setCurrentSubtitle(activeCue ? activeCue.text : "");
    }
  }, [cues]); // Add cues as dependency

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
        // Reset state when audioSrc changes
        setIsPlaying(false);
        setCurrentTime(0);
        setDuration(0);
        // Reset subtitle state as well
        setCurrentSubtitle("");
        audio.src = audioSrc; // Update source

        // Add event listeners
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('ended', () => setIsPlaying(false));

        // Cleanup function
        return () => {
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            // No need to remove 'ended' listener specifically if element is removed
        };
    }
  }, [audioSrc, handleLoadedMetadata, handleTimeUpdate]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Ensure audio loads metadata before playing if needed, especially after src change
        if (audioRef.current.readyState >= 2) { // HAVE_CURRENT_DATA or more
             audioRef.current.play().catch(error => console.error("Error playing audio:", error));
        } else {
            // Wait for metadata before playing
            audioRef.current.addEventListener('canplay', () => {
                 audioRef.current?.play().catch(error => console.error("Error playing audio:", error));
            }, { once: true })
        }
        // Expand when playing starts
        if (!isExpanded) {
            setIsExpanded(true);
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
        const seekTime = value[0];
        audioRef.current.currentTime = seekTime;
        setCurrentTime(seekTime);
        // Update subtitle immediately on seek
        const activeCue = cues.find(cue => seekTime >= cue.start && seekTime <= cue.end);
        setCurrentSubtitle(activeCue ? activeCue.text : "");
    }
  };

  const handleRewind = () => {
    if (audioRef.current) {
        const newTime = Math.max(0, audioRef.current.currentTime - 10);
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
        // Update subtitle immediately on seek
        const activeCue = cues.find(cue => newTime >= cue.start && newTime <= cue.end);
        setCurrentSubtitle(activeCue ? activeCue.text : "");
    }
  };

  const handleFastForward = () => {
    if (audioRef.current) {
        const newTime = Math.min(duration, audioRef.current.currentTime + 10);
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
        // Update subtitle immediately on seek
        const activeCue = cues.find(cue => newTime >= cue.start && newTime <= cue.end);
        setCurrentSubtitle(activeCue ? activeCue.text : "");
    }
  };

  const formatTime = (timeInSeconds: number): string => {
    if (isNaN(timeInSeconds) || timeInSeconds === Infinity) return '0:00'; // Handle invalid duration
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    // Removed fixed min-height to allow collapse
    // Removed bottom padding
    <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 w-full md:w-96 border border-white/10 shadow-xl flex flex-col">
      <audio ref={audioRef} src={audioSrc} preload="metadata" />
      <div className="flex items-center justify-between mb-2">
        <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">AACA Deep Dive</p>
            <p className="text-sm font-medium text-white truncate" title={trackTitle}>{trackTitle}</p>
        </div>
        <div className="flex items-center gap-1"> {/* Reduced gap slightly */} 
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 h-8 w-8" onClick={handleRewind} aria-label="Rewind 10 seconds"> {/* Smaller buttons */} 
            <Rewind className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 h-9 w-9" onClick={togglePlayPause} aria-label={isPlaying ? "Pause" : "Play"}> {/* Slightly larger play button */} 
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 h-8 w-8" onClick={handleFastForward} aria-label="Fast-forward 10 seconds"> {/* Smaller buttons */} 
            <FastForward className="h-4 w-4" />
          </Button>
          {/* CC Button */} 
          {subtitleSrc && (
            <Button 
              variant="ghost" 
              size="icon" 
              className={`text-white hover:bg-white/20 h-8 w-8 ${showSubtitles ? 'bg-white/10' : ''}`} 
              onClick={() => setShowSubtitles(!showSubtitles)} 
              aria-label={showSubtitles ? "Hide Subtitles" : "Show Subtitles"}
            >
              <MessageSquareText className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      {/* Collapsible section for progress and subtitles */}
      <div 
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
          {/* Progress Bar Area - moved inside collapsible div */}
          <div className="flex items-center gap-2 mb-3"> 
            <span className="text-xs text-gray-300 w-10 text-center">{formatTime(currentTime)}</span>
            <Slider
              value={duration ? [currentTime] : [0]} // Ensure value doesn't exceed max before duration loads
              max={duration || 1} // Set max to 1 initially to avoid potential issues
              step={0.1} // Finer step for smoother seeking
              onValueChange={handleSeek}
              className="flex-grow [&>span:first-child]:h-1 [&>span:first-child>span]:bg-white"
              aria-label="Audio progress"
              disabled={!duration} // Disable slider until duration is known
            />
            <span className="text-xs text-gray-300 w-10 text-center">{formatTime(duration)}</span>
          </div>
          {/* Subtitle Display Area - moved inside collapsible div, added subtitle toggle logic */}
          <div 
            className={`transition-all duration-500 ease-in-out overflow-hidden ${showSubtitles ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
          >
              <div className="flex-grow flex items-center justify-center text-center min-h-[60px] h-20 bg-black/15 rounded p-3 overflow-hidden relative">
                {/* Applying key and transition for fade effect */}
                <p 
                  key={currentSubtitle} // Add key to trigger animation on change
                  className="text-base text-white/95 leading-snug animate-fade-in transition-opacity duration-500 ease-in-out" // Increased text size, added animation class
                >
                  {currentSubtitle || "\u00A0"} {/* Use non-breaking space for placeholder */}
                </p>
              </div>
          </div>
      </div>
    </div>
  );
};

// Add Tailwind config for fade-in animation (if not already present globally)
/* 
Add this to your tailwind.config.js keyframes:
keyframes: {
  'fade-in': {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
},
and this to animation:
animation: {
  'fade-in': 'fade-in 0.5s ease-in-out',
},
*/

export default AudioPlayer; 