import type { Metadata } from "next";
import {
  BookOpen,
  Brain,
  Lightbulb,
  AlertTriangle,
  Smartphone,
  // Keep other icons if they are used in tab definitions below
} from "lucide-react";

// Import the new Client Component
import LearningContent from '@/components/guide/learning-content';

// --- Server Component Area ---

export const metadata: Metadata = {
  title: "Learning Fundamentals | AACA Student Pilot Guide",
  description:
    "Master the art of learning to accelerate your pilot training journey. Discover proven techniques, strategies, and tools.",
};

// --- Type Definitions (needed for defining data below) ---
type PremiumTab = {
  value: string;
  label: string;
  icon: React.ReactNode;
};

interface PageLink {
  name: string;
  url: string;
}

// --- Server Component Definition ---
export default function LearningPage() {
  // Define static data that was previously inside the client component
  const tabs: PremiumTab[] = [
    {
      value: "styles",
      label: "Learning Styles",
      icon: <BookOpen />,
    },
    {
      value: "techniques",
      label: "Study Techniques",
      icon: <Lightbulb />,
    },
    {
      value: "memory",
      label: "Memory Methods",
      icon: <Brain />,
    },
    {
      value: "overload",
      label: "Managing Overload",
      icon: <AlertTriangle />,
    },
    {
      value: "technology",
      label: "Tech Tools",
      icon: <Smartphone />,
    },
  ];

  const prevPage: PageLink | null = {
    name: "FAQ",
    url: "/guide/faq"
  };
  const nextPage: PageLink | null = {
      name: "Flight Training Strategies",
      url: "/guide/flight-training"
  };
  const nextTopicSegue = "Discover effective strategies for your flight lessons.";

  // Render the Client Component, passing the data as props
  return (
      <LearningContent 
          tabs={tabs} 
          prevPage={prevPage} 
          nextPage={nextPage}
          nextTopicSegue={nextTopicSegue} 
          // userProgress={userProgressData} // Pass fetched user progress here later
      />
  );
}

