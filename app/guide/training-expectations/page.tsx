import type { Metadata } from "next"
import Link from "next/link"
import React from 'react' // Import React for JSX in tabs definition
// Only keep imports needed by the Server Component (page layout, hero, data definitions)
import {
  ChevronRight,
  // Remove client-only icons: Clock, Plane, Award, BarChart, Calendar, Users, Gauge, Layers, Milestone, School, CheckCircle2, AlertTriangle, ArrowRight, Lightbulb, BookOpen, Heart, ShieldCheck
  Layers,
  Milestone,
  Calendar,
  Clock,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SidebarInset } from "@/components/ui/sidebar"

// Import the newly created Client Component
import TrainingExpectationsContent from "@/components/guide/training-expectations-content"
// Import the GuidePageHeader
import GuidePageHeader from "@/components/guide/guide-page-header"

// Metadata export remains
export const metadata: Metadata = {
  title: "Training Expectations | AACA Student Pilot Guide",
  description:
    "What to expect during your training at the American Airlines Cadet Academy - timeline, structure, and daily life.",
}

// Define types/data needed by both Server and Client (passed as props)
type PremiumTab = {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const tabs: PremiumTab[] = [
  {
    value: "overview",
    label: "Training Structure",
    icon: <Layers />,
  },
  {
    value: "stages",
    label: "Training Stages",
    icon: <Milestone />,
  },
  {
    value: "timeline",
    label: "13-Month Plan",
    icon: <Calendar />,
  },
  {
    value: "daily",
    label: "Daily Life",
    icon: <Clock />,
  },
  {
    value: "community",
    label: "Cadet Community",
    icon: <Users />,
  },
];

interface PageLink {
    name: string;
    url: string;
}

// GuidePageHeader data
const chapter = "Chapter 2";
const title = "What to Expect in Training";
const description = "A comprehensive overview of your journey from cadet to professional pilot.";
const topicBadges = ["Training Structure", "Timeline", "Daily Life", "Cadet Community"];
const audioSrc = "/audioFiles/Guide/Train Smarter, Fly Better_ Unlock Your American Airlines Cadet Academy Potential.wav";
const trackTitle = "Train Smarter, Fly Better: Unlock Your American Airlines Cadet Academy Potential";
const subtitleSrc = "/audioFiles/Guide/Train Smarter, Fly Better_ Unlock Your American Airlines Cadet Academy Potential.vtt";
const backgroundImageSrc = "/images/multiple-aircraft-on-ramp.jpg";
const headerButtonsData = [
  {
    text: "Start Your Journey",
    href: "#overview",
    variant: "default" as const
  },
  {
    text: "Explore Timeline",
    href: "#timeline",
    variant: "outline" as const,
    icon: <ChevronRight className="ml-2 h-4 w-4" />
  }
];

// Server Component Definition
export default function TrainingExpectationsPage() {
  // Define props needed by the client component
  const prevPage: PageLink | null = { name: "Welcome", url: "/guide/welcome" }; 
  const nextPage: PageLink | null = { name: "Flight Training", url: "/guide/flight-training" };
  const nextTopicSegue = "Having covered the expectations, let's explore the specifics of Flight Training and how to maximize your learning in the cockpit and on the ground.";

  return (
    <div className="py-8 px-4 md:px-6 lg:px-8">
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
      
      <TrainingExpectationsContent 
         tabs={tabs} 
         prevPage={prevPage} 
         nextPage={nextPage} 
         nextTopicSegue={nextTopicSegue} 
      />
      
    </div>
  )
}

