import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Brain, Zap, Lightbulb, Layers } from "lucide-react"
import MentalResilienceContent from "@/components/guide/mental-resilience-content"
import GuidePageHeader from "@/components/guide/guide-page-header"

// --- Types ---
type PremiumTab = {
  value: string;
  label: string;
  iconName: string;
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

// --- Static Data ---
const tabs: PremiumTab[] = [
  {
    value: "managing-stress",
    label: "Managing Stress",
    iconName: "Brain",
  },
  {
    value: "avoiding-burnout",
    label: "Avoiding Burnout",
    iconName: "Zap",
  },
  {
    value: "impostor-syndrome",
    label: "Impostor Syndrome",
    iconName: "Lightbulb",
  },
  {
    value: "maslows-hierarchy",
    label: "Maslow's Hierarchy",
    iconName: "Layers",
  },
];

// Updated to match format in other pages
const prevPage: PageLink = {
  name: "Flight Training",
  url: "/guide/flight-training",
};

const nextPage: PageLink = {
  name: "Knowledge Tests",
  url: "/guide/knowledge-tests",
};

const nextTopicSegue = "Now that you have the mental tools to succeed, let's prepare for your knowledge tests.";

// GuidePageHeader data
const chapter = "Chapter 6";
const title = "Mental Resilience";
const description = "Building the psychological strength to thrive during flight training and throughout your aviation career.";
const topicBadges = ["Stress Management", "Performance Psychology", "Wellbeing", "Avoiding Burnout"];
const audioSrc = "/audioFiles/Guide/Cockpit to Cubicle_ High-Stakes Lessons for Any Ambitious Journey (1).wav";
const trackTitle = "Mental Resilience for Pilots";
const subtitleSrc = "/audioFiles/Guide/Cockpit to Cubicle_ High-Stakes Lessons for Any Ambitious Journey (1).vtt";
const backgroundImageSrc = "/images/pilot-looking-out-cockpit-window.jpg";
const headerButtonsData: HeaderButtonProps[] = [];

// --- Metadata ---
export const metadata: Metadata = {
  title: "Mental Resilience | Cadet Guide",
  description: "Building the psychological strength to thrive during flight training.",
};

// --- Server Component ---
export default function MentalResiliencePage() {
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
        <MentalResilienceContent
          tabs={tabs}
          prevPage={prevPage}
          nextPage={nextPage}
          nextTopicSegue={nextTopicSegue}
        />
      </div>
    </main>
  );
}

