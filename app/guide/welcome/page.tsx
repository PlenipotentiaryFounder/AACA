import type { Metadata } from "next";
import { Award, BookOpen, GraduationCap } from "lucide-react"; // Keep icons needed for tabs data

// Import the new Client Component
import WelcomeContent from '@/components/guide/welcome-content'; 
import GuidePageHeader from "@/components/guide/guide-page-header";

// --- Server Component Area ---

export const metadata: Metadata = {
  title: "Welcome to the Academy | AACA Student Pilot Guide",
  description:
    "Welcome to the American Airlines Cadet Academy - your journey to becoming an airline pilot starts here.",
};

// Define the types locally for prop validation in the Server Component
type PremiumTab = {
  value: string;
  label: string;
  icon: React.ReactNode;
};

interface PageLink {
    name: string;
    url: string;
}

// GuidePageHeader data
const chapter = "Chapter 1";
const title = "Welcome to the American Airlines Cadet Academy";
const description = "Your journey to becoming an airline pilot starts here. This guide will help you navigate the path from cadet to professional pilot.";
const topicBadges = ["Welcome", "Purpose", "Cadet Journey"];
const audioSrc = "/audioFiles/Guide/__Cleared for Takeoff_ Master the Art of Learning Anything (Even Flying)__.wav";
const trackTitle = "Cleared for Takeoff: Master the Art of Learning Anything (Even Flying)";
const subtitleSrc = "/audioFiles/Guide/__Cleared for Takeoff_ Master the Art of Learning Anything (Even Flying)__.vtt";
const backgroundImageSrc = "/images/student-pilot-studying-charts.jpg";

// --- Server Component Definition ---
export default function WelcomePage() {
  // Define tabs data here for the server component
  const tabs: PremiumTab[] = [
    {
      value: "welcome",
      label: "From One Cadet to Another",
      icon: <GraduationCap />, // Render icon component
    },
    {
      value: "purpose",
      label: "Purpose of This Guide",
      icon: <BookOpen />, // Render icon component
    },
    {
      value: "expectations",
      label: "What It Means to Be a Cadet",
      icon: <Award />, // Render icon component
    },
  ];

  // Define navigation links here
  const prevPage = null; // No previous page for the welcome section
  const nextPage: PageLink = {
      name: "Training Expectations",
      url: "/guide/training-expectations"
  };
  const nextTopicSegue = "Let's dive into what your training will look like day-to-day.";

  // Render with GuidePageHeader and Client Component
  return (
    <main className="min-h-screen">
      <div className="container max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8">
        {/* New GuidePageHeader Component */}
        <GuidePageHeader
          chapter={chapter}
          title={title}
          description={description}
          topicBadges={topicBadges}
          audioSrc={audioSrc}
          trackTitle={trackTitle}
          subtitleSrc={subtitleSrc}
          backgroundImageSrc={backgroundImageSrc}
        />
        
        {/* Render the Client Component, passing the data as props */}
        <WelcomeContent 
            tabs={tabs} 
            prevPage={prevPage} 
            nextPage={nextPage}
            nextTopicSegue={nextTopicSegue} 
        />
      </div>
    </main>
  );
}


