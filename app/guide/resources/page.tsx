import type { Metadata } from "next";
import React from 'react'; // Keep React for JSX in data
// Import icons needed ONLY for tabs data definition
import {
  BookText,
  BookOpen,
  Smartphone,
  Users,
  GraduationCap,
  FileText,
  ChevronRight
  // Remove icons only used within client content (Lightbulb, ExternalLink)
} from "lucide-react";

// Keep type definitions
type PremiumTab = {
  value: string;
  label: string;
  icon: React.ReactNode;
};

interface PageLink {
  name: string;
  url: string;
}

interface HeaderButtonProps {
  text: string;
  href: string;
  variant: "default" | "outline" | "secondary" | "ghost" | "link";
  icon?: React.ReactNode;
}

// Import the new client component
import ResourcesContent from '@/components/guide/resources-content';
// Import the GuidePageHeader component
import GuidePageHeader from "@/components/guide/guide-page-header";
// Import other components
import { Badge } from "@/components/ui/badge"; 
import { Button } from "@/components/ui/button"; 

// --- Server Component Area ---

// Keep Metadata
export const metadata: Metadata = {
  title: "Resources & Tools | AACA Student Pilot Guide", // Simplified title
  description:
    "Essential resources, tools, and references for your AACA journey.", // Simplified description
};

// Keep data definitions
const tabs: PremiumTab[] = [
    {
      value: "faa",
      label: "FAA Resources",
      icon: <BookText />,
    },
    {
      value: "study",
      label: "Study Materials",
      icon: <BookOpen />,
    },
    {
      value: "digital",
      label: "Digital Tools",
      icon: <Smartphone />,
    },
    {
      value: "support",
      label: "Support Resources",
      icon: <Users />,
    },
    {
      value: "test",
      label: "Test Prep",
      icon: <GraduationCap />,
    },
    {
      value: "acs",
      label: "ACS Guide",
      icon: <FileText />,
    },
];

const prevPage: PageLink = {
  name: "Learning Fundamentals", 
  url: "/guide/learning"
};
const nextPage: PageLink = {
    name: "Flight Training",
    url: "/guide/flight-training"
};
const nextTopicSegue = "With these resources at your disposal, let's move on to practical flight training strategies.";

// GuidePageHeader data
const chapter = "Chapter 4";
const title = "Essential Resources & Tools";
const description = "Your central hub for FAA documents, study aids, digital tools, and support networks.";
const topicBadges = ["FAA Resources", "Study Materials", "Digital Tools", "Support", "Test Prep", "ACS Guide"];
const audioSrc = "/audioFiles/Guide/American Airlines Cadet Academy_ Your Fast Track to the Flight Deck - Inside the Pilot Pathway.wav";
const trackTitle = "Resources & Tools for the Professional Pilot";
const subtitleSrc = "/audioFiles/Guide/American Airlines Cadet Academy_ Your Fast Track to the Flight Deck - Inside the Pilot Pathway.vtt";
const backgroundImageSrc = "/images/library-bookshelves.jpg";
const headerButtonsData: HeaderButtonProps[] = [
  {
    text: "Browse FAA Docs",
    href: "#faa",
    variant: "default"
  },
  {
    text: "Explore Study Tools",
    href: "#study",
    variant: "outline",
    icon: <ChevronRight className="h-4 w-4" />
  }
];

// --- Server Component Definition ---
export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <div className="container max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8">
        {/* Replace Hero section with GuidePageHeader */}
        <GuidePageHeader
          chapter={chapter}
          title={title}
          description={description}
          topicBadges={topicBadges}
          audioSrc={audioSrc}
          trackTitle={trackTitle}
          subtitleSrc={subtitleSrc}
          headerButtons={headerButtonsData}
          backgroundImageSrc={backgroundImageSrc}
        />
        
        {/* Render the Client Component, passing props */}
        <ResourcesContent 
           tabs={tabs} 
           prevPage={prevPage} 
           nextPage={nextPage} 
           nextTopicSegue={nextTopicSegue} 
        />
      </div>
    </main>
  );
}
