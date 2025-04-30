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

// Server Component Definition
export default function TrainingExpectationsPage() {
  // Define props needed by the client component
  const prevPage: PageLink | null = { name: "Welcome", url: "/guide/welcome" }; 
  const nextPage: PageLink | null = { name: "Flight Training", url: "/guide/flight-training" };
  const nextTopicSegue = "Having covered the expectations, let's explore the specifics of Flight Training and how to maximize your learning in the cockpit and on the ground.";

  return (
    <main className="min-h-screen">
      <div className="container max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8">
        {/* Hero Section (Server Component part) */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-aa-blue to-aa-navy text-white mb-12">
          {/* Ensure necessary icons/components for hero are imported above */}
          <div className="absolute inset-0 bg-[url('/images/multiple-aircraft-on-ramp.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
           <div className="relative z-10 px-6 py-16 md:py-24 md:px-12 max-w-4xl">
               <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">Chapter 2</Badge>
               <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                   What to Expect in Training
               </h1>
               <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl">
                   A comprehensive overview of your journey from cadet to professional pilot.
               </p>
               <div className="flex flex-wrap gap-4">
                   <Button size="lg" className="bg-white text-aa-navy hover:bg-white/90">
                       Start Your Journey
                   </Button>
                   <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                       Explore Timeline <ChevronRight className="ml-2 h-4 w-4" />
                   </Button>
               </div>
           </div>
           <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 -mb-12 -mr-12 opacity-20 md:opacity-30">
               <div className="w-full h-full bg-[url('/images/pilot-instructor-student-cockpit.jpg')] bg-contain bg-no-repeat"></div>
           </div>
        </section>
        
        {/* Render the imported Client Component, passing props */}
        <TrainingExpectationsContent 
           tabs={tabs} 
           prevPage={prevPage} 
           nextPage={nextPage} 
           nextTopicSegue={nextTopicSegue} 
        />
        
      </div>
    </main>
  )
}

