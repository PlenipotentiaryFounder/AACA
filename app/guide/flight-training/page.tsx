import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import GuidePageHeader from "@/components/guide/guide-page-header"
import FlightTrainingContent from "@/components/guide/flight-training-content"

// Server Component Area

// Define types needed for props
type Tab = {
  value: string;
  label: string;
  iconName: string;
}

interface PageLink {
    name: string;
    url: string;
}

// Define type for optional header buttons (could be imported if shared)
interface HeaderButtonProps {
  text: string;
  href: string;
  variant: "default" | "outline" | "secondary" | "ghost" | "link";
  icon?: React.ReactNode;
}

// Define static data for tabs, pages, audio, and header content
const tabs: Tab[] = [
  { value: "chair-flying", label: "Chair Flying", iconName: "Brain" },
  { value: "prepare", label: "Prepare", iconName: "BookOpen" },
  { value: "cfi-relationship", label: "CFI Relationship", iconName: "Users" },
  { value: "backseating", label: "Backseating", iconName: "Headphones" },
  { value: "study-mistakes", label: "Study Mistakes", iconName: "CheckCircle2" },
]

const prevPage: PageLink = {
  name: "Knowledge Tests",
  url: "/guide/knowledge-tests",
}

const nextPage: PageLink | null = {
  name: "Checkrides",
  url: "/guide/checkrides",
}

const nextTopicSegue = "With flight training strategies covered, let's move on to tackling your Checkrides.";

// Header specific data
const chapter = "Chapter 5";
const title = "Maximizing Your Flight Training";
const description = "Train smarter, learn faster, fly better. Explore strategies for deliberate practice and strategic preparation to excel as a cadet.";
const topicBadges = ["Chair Flying", "Lesson Preparation", "CFI Relationships", "Backseating"];
const audioSrc = "/audioFiles/Guide/Train Smarter, Fly Better_ Unlock Your American Airlines Cadet Academy Potential.wav";
const trackTitle = "Train Smarter, Fly Better";
const subtitleSrc = "/audioFiles/Guide/Train Smarter, Fly Better_ Unlock Your American Airlines Cadet Academy Potential.vtt";
const headerButtonsData: HeaderButtonProps[] = [];
const backgroundImageSrc = "/images/two-pilots-in-cockpit-preflight.jpg"; // Define background image source


// Main Server Component Export - Uses GuidePageHeader and FlightTrainingContent
export default function FlightTrainingPage() {
  return (
    <main className="min-h-screen">
      <div className="container max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8">
        {/* Render the reusable header */}
        <GuidePageHeader 
          chapter={chapter}
          title={title}
          description={description}
          topicBadges={topicBadges}
          audioSrc={audioSrc}
          trackTitle={trackTitle}
          subtitleSrc={subtitleSrc}
          headerButtons={headerButtonsData} // Pass empty array to hide buttons
          backgroundImageSrc={backgroundImageSrc} // Pass background image
        />
        
        {/* Render the main content (tabs, etc.) */}
        <FlightTrainingContent
          tabs={tabs}
          prevPage={prevPage}
          nextPage={nextPage}
          nextTopicSegue={nextTopicSegue}
        />
      </div>
    </main>
  )
}

