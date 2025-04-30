"use client"; // Keep client directive if AudioPlayer is used directly

import React from 'react';
import Image from 'next/image'; // Keep if background images are an option
import Link from 'next/link';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AudioPlayer from "@/components/guide/audio-player"; // Import AudioPlayer

// Define type for optional header buttons (can be shared or redefined)
interface HeaderButtonProps {
  text: string;
  href: string;
  variant: "default" | "outline" | "secondary" | "ghost" | "link"; 
  icon?: React.ReactNode; 
}

// Define props for the GuidePageHeader component
interface GuidePageHeaderProps {
  chapter: string;
  title: string;
  description: string;
  topicBadges?: string[]; // Optional array of topic strings
  audioSrc: string;
  trackTitle: string;
  subtitleSrc?: string;
  headerButtons?: HeaderButtonProps[];
  backgroundImageSrc?: string; // Optional background image
}

const GuidePageHeader: React.FC<GuidePageHeaderProps> = ({
  chapter,
  title,
  description,
  topicBadges,
  audioSrc,
  trackTitle,
  subtitleSrc,
  headerButtons,
  backgroundImageSrc
}) => {
  return (
    <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-aa-blue to-aa-navy text-white mb-12">
      {/* Optional Background Image */}
      {backgroundImageSrc && (
        <div className="absolute inset-0 opacity-10"> {/* Reduced opacity */}
          <Image
            src={backgroundImageSrc}
            alt="" // Alt text can be generic or passed as prop if needed
            layout="fill" // Use fill layout for absolute positioning
            objectFit="cover"
            priority // Consider adding priority if it's LCP
          />
        </div>
      )}
      
      {/* Inner container for main content + audio */}
      <div className="relative z-10 p-8 md:p-12 md:flex md:items-start md:justify-between md:gap-8">
        {/* Text Content Area */}
        <div className="max-w-4xl mb-8 md:mb-0">
          <Badge variant="outline" className="mb-4 text-white border-white/40">
            {chapter}
          </Badge>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-6">
            {description}
          </p>
          {/* Render Topic Badges if provided */}
          {topicBadges && topicBadges.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {topicBadges.map((badgeText, index) => (
                <Badge key={index} variant="secondary" className="bg-white/20 hover:bg-white/30">
                  {badgeText}
                </Badge>
              ))}
            </div>
          )}
        </div>
        {/* Audio Player Area */}
        <div className="flex-shrink-0">
          <AudioPlayer 
            audioSrc={audioSrc}
            trackTitle={trackTitle} 
            subtitleSrc={subtitleSrc}
          />
        </div>
      </div>
      {/* Optional Header Buttons Area */}
      {headerButtons && headerButtons.length > 0 && (
        <div className="absolute z-10 bottom-8 right-8 flex flex-col items-end gap-2">
          {headerButtons.map((button, index) => (
            <Button 
              key={index} 
              variant={button.variant} 
              size="sm" 
              className={button.variant === 'outline' ? 'border-white/50 text-white/90 hover:bg-white/10' : 'bg-white/90 text-aa-navy hover:bg-white'}
              asChild
            >
              <Link href={button.href}>
                {button.text}
                {button.icon && <span className="ml-2">{button.icon}</span>}
              </Link>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default GuidePageHeader; 