"use client";

import { useState } from "react";
import Image from "next/image"
import {
  BookOpen,
  Brain,
  Calendar,
  CheckCircle,
  Clock,
  Compass,
  Lightbulb,
  ListChecks,
  Smartphone,
  Target,
  Headphones,
  AlertTriangle,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { PremiumTabs } from "@/components/premium-tabs";
import { GuideNavigation } from "@/components/guide-navigation";

type PremiumTab = {
  value: string;
  label: string;
  icon: React.ReactNode;
};

interface PageLink {
  name: string;
  url: string;
}

export default function LearningFundamentals() {
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

  const prevPage: PageLink = {
    name: "FAQ",
    url: "/guide/faq"
  };
  const nextPage: PageLink = {
      name: "Flight Training Strategies",
      url: "/guide/flight-training"
  };
  const nextTopicSegue = "Discover effective strategies for your flight lessons.";

  const [currentTab, setCurrentTab] = useState(tabs[0].value);

  return (
    <div className="container mx-auto px-4 py-6 md:py-10">
      {/* Hero Section */}
      <div className="relative mb-10 rounded-xl bg-gradient-to-r from-aa-blue to-aa-navy p-8 text-white">
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-10">
          <div className="relative h-full w-full">
            <Image
              src="/images/student-studying-aviation-books.jpg"
              alt="Learning illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="max-w-3xl">
          <Badge variant="outline" className="mb-4 border-white text-white">
            AACA Fundamentals
          </Badge>
          <h1 className="font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Learning Fundamentals
          </h1>
          <p className="mt-4 text-lg opacity-90">
            Master the art of learning to accelerate your pilot training journey. Discover proven techniques,
            strategies, and tools to optimize your study habits and retain critical aviation knowledge.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="space-y-8">
        <PremiumTabs 
          tabs={tabs} 
          defaultValue={tabs[0].value} 
          currentValue={currentTab} 
          onChange={setCurrentTab}
          title="Learning Fundamentals"
        />
        
        {currentTab === 'styles' && (
          <div className="space-y-8 pt-6">
            <div className="grid gap-6 md:grid-cols-2">
               {/* ... Understanding Your Learning Style ... */} 
            </div>
            <div className="grid gap-6 md:grid-cols-3">
               {/* ... Style Cards ... */} 
            </div>
             <div className="rounded-xl border bg-muted/50 p-6">
               {/* ... Adapting Your Learning Style ... */} 
            </div>
          </div>
        )}

        {currentTab === 'techniques' && (
           <div className="space-y-8 pt-6">
            <div className="grid gap-6 md:grid-cols-2">
               {/* ... Effective Study Techniques ... */} 
            </div>
            <Card>
               {/* ... Top 5 Techniques Table ... */} 
            </Card>
            <div className="rounded-xl border bg-muted/50 p-6">
               {/* ... Implementing Techniques ... */} 
            </div>
          </div>
        )}

        {currentTab === 'memory' && (
          <div className="space-y-8 pt-6">
            <div className="grid gap-6 md:grid-cols-2">
               {/* ... Boosting Memory Retention ... */} 
            </div>
             <div className="grid gap-6 md:grid-cols-3">
               {/* ... Memory Technique Cards ... */} 
            </div>
             <div className="rounded-xl border bg-muted/50 p-6">
               {/* ... Combining Methods ... */} 
            </div>
          </div>
        )}

        {currentTab === 'overload' && (
           <div className="space-y-8 pt-6">
            <div className="grid gap-6 md:grid-cols-2">
               {/* ... Managing Information Overload ... */} 
            </div>
             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
               {/* ... Strategy Cards ... */} 
            </div>
            <Alert className="border-red-500 bg-red-50 text-red-700">
               {/* ... Recognizing Burnout ... */} 
            </Alert>
          </div>
        )}

        {currentTab === 'technology' && (
           <div className="space-y-8 pt-6">
            <div className="grid gap-6 md:grid-cols-2">
               {/* ... Leveraging Technology ... */} 
            </div>
            <Card>
               {/* ... Recommended Tech Table ... */} 
            </Card>
             <Alert className="border-aa-blue bg-aa-blue/10">
               {/* ... Balancing Tech ... */} 
            </Alert>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="mt-12 rounded-xl bg-gradient-to-r from-aa-blue to-aa-navy p-8 text-white">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold">Create Your Study Plan</h2>
            <p className="mt-2 opacity-90">
              Ready to apply these learning fundamentals to your training? Use our interactive study planner to create a
              personalized learning roadmap tailored to your training phase and learning style.
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-aa-navy">
              Launch Study Planner
            </Button>
          </div>
        </div>
      </div>

      {/* Add GuideNavigation at the end */}
      <GuideNavigation 
        prevPage={prevPage ?? undefined} 
        nextPage={nextPage ?? undefined} 
        nextTopicSegue={nextTopicSegue} 
      />
    </div>
  );
}

