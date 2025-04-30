import type { Metadata } from "next";
import React from "react";
import ProfessionalPilotContent from "@/components/guide/professional-pilot-content";
import { Users, Handshake, HelpingHand, Lightbulb } from "lucide-react"; // Import icons for tabs
import GuidePageHeader from "@/components/guide/guide-page-header";

export const metadata: Metadata = {
  title: "Professional Pilot Development | AACA Guide",
  description: "Learn about professionalism, networking, community involvement, and continuous learning as an AACA cadet preparing for a pilot career.",
};

// Define type for PageLink locally (can be shared in types/index.ts later)
interface PageLink {
    name: string;
    url: string;
}

// Define type for PremiumTab locally
type PremiumTab = {
  value: string;
  label: string;
  icon?: React.ReactNode;
};

interface HeaderButtonProps {
  text: string;
  href: string;
  variant: "default" | "outline" | "secondary" | "ghost" | "link";
  icon?: React.ReactNode;
}

export default function ProfessionalPilotPage() {

  // Define the tabs data for the PremiumTabs component
  const tabs: PremiumTab[] = [
    {
      value: "professionalism",
      label: "Being Professional",
      icon: <Users className="h-5 w-5" /> // Example icon
    },
    {
      value: "networking",
      label: "Networking",
      icon: <Handshake className="h-5 w-5" /> // Example icon
    },
    {
      value: "community",
      label: "Aviation Community",
      icon: <HelpingHand className="h-5 w-5" /> // Example icon
    },
    {
      value: "learning",
      label: "Continuous Learning",
      icon: <Lightbulb className="h-5 w-5" /> // Example icon
    },
  ];

  // Updated navigation links to match sidebar order
  const prevPage: PageLink = {
    name: "Checkrides",
    url: "/guide/checkrides",
  };
  const nextPage: PageLink = {
    name: "Pro Tips",
    url: "/guide/pro-tips",
  };
  const nextTopicSegue = "Next, let's explore some professional tips that will help you excel in your aviation career.";

  // GuidePageHeader data
  const chapter = "Chapter 9";
  const title = "Professional Pilot Development";
  const description = "Your journey from cadet to career aviator begins with professionalism";
  const topicBadges = ["Professionalism", "Networking", "Aviation Community", "Continuous Learning"];
  const audioSrc = "/audioFiles/Guide/Your_Leadership_Legacy___Building_Your_Pilot_Career_from_Day_One.wav";
  const trackTitle = "Building Your Pilot Career from Day One";
  const subtitleSrc = "/audioFiles/Guide/Your_Leadership_Legacy___Building_Your_Pilot_Career_from_Day_One.vtt";
  const backgroundImageSrc = "/images/professional_pilots.jpg";
  const headerButtonsData: HeaderButtonProps[] = [];

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
        <ProfessionalPilotContent 
          tabs={tabs}
          prevPage={prevPage}
          nextPage={nextPage}
          nextTopicSegue={nextTopicSegue}
        />
      </div>
    </main>
  );
}

