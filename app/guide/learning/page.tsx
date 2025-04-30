import type { Metadata } from "next";
import {
  BookOpen,
  Brain,
  Lightbulb,
  AlertTriangle,
  Smartphone,
  // Keep other icons if they are used in tab definitions below - NO LONGER NEEDED HERE
} from "lucide-react";
import GuidePageHeader from "@/components/guide/guide-page-header"; // Import the header
import LearningContent from '@/components/guide/learning-content'; // Keep the content import

// --- Server Component Area ---

// --- Type Definitions ---
// Removed Metadata definition as it's implicitly handled or should be re-added if needed elsewhere.

type TabDefinition = {
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

// --- Static Page Data ---
const chapter = "Chapter 4";
const title = "Learning Fundamentals";
const description = "Master the art of learning to accelerate your pilot training journey. Discover proven techniques, strategies, and tools.";
const topicBadges = ["Learning Styles", "Study Techniques", "Memory Methods", "Managing Overload", "Tech Tools"];
const audioSrc = "/audioFiles/Guide/__Cleared for Takeoff_ Master the Art of Learning Anything (Even Flying)__.wav";
const trackTitle = "Cleared for Takeoff: Master the Art of Learning Anything (Even Flying)";
const subtitleSrc = "/audioFiles/Guide/__Cleared for Takeoff_ Master the Art of Learning Anything (Even Flying)__.vtt";
const headerButtonsData: HeaderButtonProps[] = [];
const backgroundImageSrc = "/images/student-pilot-studying-charts.jpg";

const learningTabs: TabDefinition[] = [
    { value: "styles", label: "Learning Styles", iconName: "BookOpen" },
    { value: "techniques", label: "Study Techniques", iconName: "Lightbulb" },
    { value: "memory", label: "Memory Methods", iconName: "Brain" },
    { value: "overload", label: "Managing Overload", iconName: "AlertTriangle" },
    { value: "technology", label: "Tech Tools", iconName: "Smartphone" },
];

const prevPage: PageLink | null = {
  name: "Training Expectations",
  url: "/guide/training-expectations"
};
const nextPage: PageLink | null = {
    name: "Resources & Tools",
    url: "/guide/resources"
};
const nextTopicSegue = "Now that you understand how to learn effectively, let's explore the essential resources and tools to support your training.";

// --- Server Component Definition ---
export default function LearningPage() {
  // NOTE: Removed the potentially problematic comment line here
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
        <LearningContent
            tabs={learningTabs}
            prevPage={prevPage}
            nextPage={nextPage}
            nextTopicSegue={nextTopicSegue}
        />
      </div>
    </main>
  );
}

