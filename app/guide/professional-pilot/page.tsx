import type { Metadata } from "next";
import ProfessionalPilotContent from "@/components/guide/professional-pilot-content";
import { Users, Handshake, HelpingHand, Lightbulb } from "lucide-react"; // Import icons for tabs

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

  // Define navigation links based on directory structure
  const prevPage: PageLink | null = {
    name: "Pro Tips",
    url: "/guide/pro-tips",
  };
  const nextPage: PageLink | null = {
    name: "Mental Resilience",
    url: "/guide/mental-resilience",
  };
  const nextTopicSegue = "Next, we shift focus from external interactions to internal fortitude.";

  return (
      <ProfessionalPilotContent 
          tabs={tabs}
          prevPage={prevPage}
          nextPage={nextPage}
          nextTopicSegue={nextTopicSegue}
      />
  );
}

