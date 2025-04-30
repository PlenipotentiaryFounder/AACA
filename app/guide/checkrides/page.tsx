import type { Metadata } from "next"
import React from "react"
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  FileText,
  Gauge,
  HeartPulse,
  Lightbulb,
  Plane,
  Shield,
  AlertTriangle,
  ArrowRight,
  Brain,
  UserCheck,
  Layers,
  UserCog,
  Users,
  PlaneTakeoff,
  MessageSquareQuote,
} from "lucide-react"
import CheckridesContent from "@/components/guide/checkrides-content"
import GuidePageHeader from "@/components/guide/guide-page-header"

export const metadata: Metadata = {
  title: "Checkrides | AACA Student Pilot Guide",
  description:
    "Master your FAA checkrides with proven strategies, mindset techniques, and insider preparation tips from the American Airlines Cadet Academy.",
}

type Tab = {
  value: string;
  label: string;
  iconName: string;
}

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

const tabs: Tab[] = [
  {
    value: "what-is-checkride",
    label: "What is a Checkride?",
    iconName: "FileText",
  },
  {
    value: "the-acs",
    label: "The ACS",
    iconName: "BookOpen",
  },
  {
    value: "the-oral-exam",
    label: "The Oral Exam",
    iconName: "Brain",
  },
  {
    value: "the-flight-portion",
    label: "The Flight Portion",
    iconName: "Plane",
  },
  {
    value: "common-failures",
    label: "Common Failures",
    iconName: "AlertTriangle",
  },
  {
    value: "dpe-expectations",
    label: "DPE Expectations",
    iconName: "UserCheck",
  },
  {
    value: "checkride-day-mindset",
    label: "Checkride Day Mindset",
    iconName: "HeartPulse",
  },
  {
    value: "after-the-checkride",
    label: "After the Checkride",
    iconName: "Award",
  },
]

// Updated to match sidebar navigation order
const prevPage: PageLink = {
  name: "Knowledge Tests",
  url: "/guide/knowledge-tests",
}

const nextPage: PageLink = {
  name: "Professional Pilot",
  url: "/guide/professional-pilot",
}

const nextTopicSegue = "With your checkrides completed, let's explore what it means to be a professional pilot."

// GuidePageHeader data
const chapter = "Chapter 8";
const title = "Passing Your Checkrides";
const description = "The final hurdle—mastering the moment that counts";
const topicBadges = ["Preparation Tips", "Oral Exam", "Flight Test", "Common Mistakes", "DPE Expectations"];
const audioSrc = "/audioFiles/Guide/Soar Beyond Memorization_ Your American Airlines Cadet Flight Plan.wav";
const trackTitle = "Mastering Your FAA Checkrides";
const subtitleSrc = "/audioFiles/Guide/Soar Beyond Memorization_ Your American Airlines Cadet Flight Plan.vtt";
const backgroundImageSrc = "/images/cessna-in-flight-blue-sky.jpg";

// Define button data for quick navigation to specific checkride types
const headerButtonsData: HeaderButtonProps[] = [
  {
    text: "Private Pilot",
    href: "/guide/checkrides/private",
    variant: "secondary",
  },
  {
    text: "Instrument Rating",
    href: "/guide/checkrides/instrument",
    variant: "secondary",
  },
  {
    text: "Commercial Pilot",
    href: "/guide/checkrides/commercial",
    variant: "secondary",
  },
  {
    text: "CFI",
    href: "/guide/checkrides/cfi",
    variant: "secondary",
  },
  {
    text: "CFII",
    href: "/guide/checkrides/cfii",
    variant: "secondary",
  },
];

export default function CheckridesPage() {
  return (
    <main className="min-h-screen">
      <div className="container max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8">
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
        <CheckridesContent
          tabs={tabs}
          prevPage={prevPage}
          nextPage={nextPage}
          nextTopicSegue={nextTopicSegue}
        />
      </div>
    </main>
  )
}

