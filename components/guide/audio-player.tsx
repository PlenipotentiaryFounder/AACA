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
  speaker?: string; // Added speaker field
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
  const [currentCue, setCurrentCue] = useState<SubtitleCue | null>(null); // Changed to store the whole cue object
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSubtitles, setShowSubtitles] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // --- VTT Parsing Logic --- 
  const parseVTT = useCallback((vttContent: string): SubtitleCue[] => {
    const lines = vttContent.trim().split(/\r?\n/);
    const parsedCues: SubtitleCue[] = [];
    let i = 0;

    // Skip WEBVTT header
    if (lines[0].startsWith('WEBVTT')) {
      i++;
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
    
    // Regex to capture speaker tag like <v Speaker Name> at the beginning of a line
    const speakerRegex = /^<v\s+([^>]+)>(.*)/;

    while (i < lines.length) {
      // Skip identifier line
      if (!lines[i].includes('-->') && lines[i].trim() !== '') {
          i++;
      }

      // Time line
      if (i < lines.length && lines[i].includes('-->')) {
        const timeLine = lines[i];
        // Handle potential settings after timestamp
        const [startStr, endStr] = timeLine.split(' --> ').map(s => s.trim().split(' ')[0]); 
        const start = timeStringToSeconds(startStr);
        const end = timeStringToSeconds(endStr);
        i++;

        // Text lines
        let textContent = '';
        let speaker: string | undefined = undefined;
        let firstLine = true;

        while (i < lines.length && lines[i].trim() !== '') {
          let currentLine = lines[i].trim();
          // Check only the first line of the cue text for speaker tag
          if (firstLine) {
              const match = currentLine.match(speakerRegex);
              if (match && match[1] && match[2]) {
                  speaker = match[1].trim(); // Extracted speaker name
                  currentLine = match[2].trim(); // Remaining text for the line
              }
              firstLine = false;
          }
          textContent += (textContent ? '\n' : '') + currentLine;
          i++;
        }

        if (!isNaN(start) && !isNaN(end) && textContent) {
            parsedCues.push({ start, end, text: textContent, speaker }); // Add speaker if found
        }
      }

      // Skip empty lines
      while (i < lines.length && lines[i].trim() === '') {
        i++;
      }
    }
    // console.log("Parsed Cues:", parsedCues); // Optional: for debugging
    return parsedCues;
  }, []); // No dependencies needed for parseVTT itself

  useEffect(() => {
    if (!subtitleSrc) {
        setCues([]);
        setCurrentCue(null); // Reset current cue
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
        setCues([]);
        setCurrentCue(null); // Reset current cue on error
      }
    };

    fetchAndParseSubtitles();

  }, [subtitleSrc, parseVTT]); // Include parseVTT in dependency array
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

      // Update current cue object
      const activeCue = cues.find(cue => time >= cue.start && time <= cue.end);
      setCurrentCue(activeCue || null); // Set the whole cue object or null
    }
  }, [cues]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
        setIsPlaying(false);
        setCurrentTime(0);
        setDuration(0);
        setCurrentCue(null); // Reset current cue
        audio.src = audioSrc;

        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('ended', () => setIsPlaying(false));

        return () => {
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audio.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }
  }, [audioSrc, handleLoadedMetadata, handleTimeUpdate]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        if (audioRef.current.readyState >= 2) {
             audioRef.current.play().catch(error => console.error("Error playing audio:", error));
        } else {
            audioRef.current.addEventListener('canplay', () => {
                 audioRef.current?.play().catch(error => console.error("Error playing audio:", error));
            }, { once: true })
        }
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
        // Update cue immediately on seek
        const activeCue = cues.find(cue => seekTime >= cue.start && seekTime <= cue.end);
        setCurrentCue(activeCue || null);
    }
  };

  const handleRewind = () => {
    if (audioRef.current) {
        const newTime = Math.max(0, audioRef.current.currentTime - 10);
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
        // Update cue immediately on seek
        const activeCue = cues.find(cue => newTime >= cue.start && newTime <= cue.end);
        setCurrentCue(activeCue || null);
    }
  };

  const handleFastForward = () => {
    if (audioRef.current) {
        const newTime = Math.min(duration, audioRef.current.currentTime + 10);
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
        // Update cue immediately on seek
        const activeCue = cues.find(cue => newTime >= cue.start && newTime <= cue.end);
        setCurrentCue(activeCue || null);
    }
  };

  const formatTime = (timeInSeconds: number): string => {
    if (isNaN(timeInSeconds) || timeInSeconds === Infinity) return '0:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Function to get speaker color class
  const getSpeakerClass = (speaker?: string): string => {
      if (speaker === 'Amelia') return 'text-fuchsia-400';
      if (speaker === 'Mr. Wright') return 'text-lime-400';
      return 'text-white/95'; // Default color if no speaker or unknown speaker
  };

  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 w-full md:w-96 border border-white/10 shadow-xl flex flex-col">
      <audio ref={audioRef} src={audioSrc} preload="metadata" />
      <div className="flex items-center justify-between mb-2">
        <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">AACA Deep Dive</p>
            <p className="text-sm font-medium text-white" title={trackTitle}>{trackTitle}</p>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 h-8 w-8" onClick={handleRewind} aria-label="Rewind 10 seconds">
            <Rewind className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 h-9 w-9" onClick={togglePlayPause} aria-label={isPlaying ? "Pause" : "Play"}>
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 h-8 w-8" onClick={handleFastForward} aria-label="Fast-forward 10 seconds">
            <FastForward className="h-4 w-4" />
          </Button>
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
      <div 
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
          <div className="flex items-center gap-2 mb-3"> 
            <span className="text-xs text-gray-300 w-10 text-center">{formatTime(currentTime)}</span>
            <Slider
              value={duration ? [currentTime] : [0]}
              max={duration || 1}
              step={0.1}
              onValueChange={handleSeek}
              className="flex-grow [&>span:first-child]:h-1 [&>span:first-child>span]:bg-white"
              aria-label="Audio progress"
              disabled={!duration}
            />
            <span className="text-xs text-gray-300 w-10 text-center">{formatTime(duration)}</span>
          </div>
          <div 
            className={`transition-all duration-500 ease-in-out overflow-hidden ${showSubtitles ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
          >
              <div className="flex-grow flex items-center justify-center text-center min-h-[60px] h-auto bg-black/15 rounded p-3 overflow-hidden relative">
                {currentCue ? (
                    <p 
                      key={`${currentCue.start}-${currentCue.speaker || 'nospeaker'}`}
                      className="text-base text-white/95 leading-snug animate-fade-in transition-opacity duration-500 ease-in-out whitespace-pre-wrap"
                    >
                      {currentCue.speaker && (
                        <span className={`font-semibold mr-2 ${getSpeakerClass(currentCue.speaker)}`}>
                          {currentCue.speaker}:
                        </span>
                      )}
                      {currentCue.text.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                           {line}
                           {index < currentCue.text.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                  ) : (
                    <p className="text-base text-white/95 leading-snug">
                      {"\u00A0"}
                    </p>
                  )}
              </div>
          </div>
      </div>
    </div>
  );
};

export default AudioPlayer; 