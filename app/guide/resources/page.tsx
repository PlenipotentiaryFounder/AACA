import type { Metadata } from "next";
import React from 'react'; // Keep React for JSX in data
// Import icons needed ONLY for tabs data definition
import {
  BookText,
  BookOpen,
  Smartphone,
  Users,
  GraduationCap,
  FileText,
  // Remove icons only used within client content (Lightbulb, ExternalLink)
} from "lucide-react";

// Keep type definitions
type PremiumTab = {
  value: string;
  label: string;
  icon: React.ReactNode;
};

interface PageLink {
  name: string;
  url: string;
}

// Import the new client component
import ResourcesContent from '@/components/guide/resources-content';
// Import Layout components
import { SidebarInset } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge"; // Keep if used in Hero
import { Button } from "@/components/ui/button"; // Keep if used in Hero
import { ChevronRight } from "lucide-react"; // Keep if used in Hero

// --- Server Component Area ---

// Keep Metadata
export const metadata: Metadata = {
  title: "Resources & Tools | AACA Student Pilot Guide", // Simplified title
  description:
    "Essential resources, tools, and references for your AACA journey.", // Simplified description
};

// Keep data definitions
const tabs: PremiumTab[] = [
    {
      value: "faa",
      label: "FAA Resources",
      icon: <BookText />,
    },
    {
      value: "study",
      label: "Study Materials",
      icon: <BookOpen />,
    },
    {
      value: "digital",
      label: "Digital Tools",
      icon: <Smartphone />,
    },
    {
      value: "support",
      label: "Support Resources",
      icon: <Users />,
    },
    {
      value: "test",
      label: "Test Prep",
      icon: <GraduationCap />,
    },
    {
      value: "acs",
      label: "ACS Guide",
      icon: <FileText />,
    },
];

const prevPage: PageLink = {
  name: "Flight Training", // Match Learning page format
  url: "/guide/flight-training"
};
const nextPage: PageLink = {
    name: "Professional Pilot Life",
    url: "/guide/professional-pilot"
};
const nextTopicSegue = "Let's look ahead to life after graduation.";

// --- Server Component Definition ---
export default function ResourcesPage() {
  // Removed client logic (useState, etc.)

  return (
    <main className="min-h-screen">
      <div className="container max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8">
        {/* Optional: Add Hero Section similar to other pages if desired */}
        {/* Example Hero: */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-800 text-white mb-12">
          <div className="absolute inset-0 bg-[url('/images/library-bookshelves.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div className="relative z-10 px-6 py-16 md:py-24 md:px-12 max-w-4xl">
              <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">Reference</Badge>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                  Essential Resources & Tools
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl">
                  Your central hub for FAA documents, study aids, digital tools, and support networks.
              </p>
              <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-white/90">
                      Browse FAA Docs
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                      Explore Study Tools <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
              </div>
          </div>
          {/* Optional decorative element */}
           {/* <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 -mb-12 -mr-12 opacity-20 md:opacity-30">
               <div className="w-full h-full bg-[url('/images/some-resource-icon.svg')] bg-contain bg-no-repeat"></div>
           </div> */}
        </section>
        
        {/* Render the Client Component, passing props */}
        <ResourcesContent 
           tabs={tabs} 
           prevPage={prevPage} 
           nextPage={nextPage} 
           nextTopicSegue={nextTopicSegue} 
        />
        
        {/* Removed original Tabs, CTA, Footer JSX */}
        
      </div>
    </main>
  );
}

// Removed the duplicate export default function ResourcesPage() definition
