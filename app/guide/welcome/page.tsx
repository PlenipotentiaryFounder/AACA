import type { Metadata } from "next";
import { Award, BookOpen, GraduationCap } from "lucide-react"; // Keep icons needed for tabs data

// Import the new Client Component
import WelcomeContent from '@/components/guide/welcome-content'; 

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

  // Render the Client Component, passing the data as props
  return (
      <WelcomeContent 
          tabs={tabs} 
          prevPage={prevPage} 
          nextPage={nextPage}
          nextTopicSegue={nextTopicSegue} 
      />
  );
}


