import Image from "next/image"
import Link from "next/link"
import {
  AlertCircle,
  BookOpen,
  Brain,
  CheckCircle2,
  Clock,
  Compass,
  Gauge,
  Headphones,
  MessageSquare,
  Plane,
  Users,
  ShieldCheck,
  Layers,
  Milestone,
  Calendar,
  ArrowRight,
  Lightbulb,
  Heart,
} from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineHeader,
  TimelineTitle,
  TimelineDescription,
} from "@/components/ui/timeline"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset } from "@/components/ui/sidebar"
import { PremiumTabs } from "@/components/premium-tabs"
import { GuideNavigation } from "@/components/guide-navigation"

// Server Component Area

// Define types needed for props
type Tab = {
  value: string;
  label: string;
  icon: React.ReactNode; // Assuming icons are rendered components
}

interface PageLink {
    name: string;
    url: string;
}

// Imports required by the Client Component must come BEFORE the directive
import { useState } from "react"
import { usePathname } from 'next/navigation'

// --- Client Component --- 
"use client";

// Props for the client component
interface FlightTrainingContentProps {
  tabs: Tab[];
  prevPage: PageLink | null;
  nextPage: PageLink | null;
  nextTopicSegue: string;
}

function FlightTrainingContent({ 
  tabs, 
  prevPage, 
  nextPage, 
  nextTopicSegue 
}: FlightTrainingContentProps) {
  const pathname = usePathname()
  const [currentTab, setCurrentTab] = useState(tabs[0].value);

  // The original JSX goes here, excluding the outer AppSidebar/SidebarInset
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-aa-blue to-aa-navy text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/two-pilots-in-cockpit-preflight.jpg"
            alt="Pilot training"
            width={1200}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 p-8 md:p-12 max-w-3xl">
          <Badge variant="outline" className="mb-4 text-white border-white/40">
            Chapter 5
          </Badge>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Maximizing Your Flight Training
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-6">
            Train smarter. Learn faster. Fly better. This chapter is about becoming the kind of cadet who excels through
            deliberate practice and strategic preparation.
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="bg-white/20 hover:bg-white/30">
              Chair Flying
            </Badge>
            <Badge variant="secondary" className="bg-white/20 hover:bg-white/30">
              Lesson Preparation
            </Badge>
            <Badge variant="secondary" className="bg-white/20 hover:bg-white/30">
              CFI Relationships
            </Badge>
            <Badge variant="secondary" className="bg-white/20 hover:bg-white/30">
              Backseating
            </Badge>
          </div>
        </div>
      </div>

      <Alert className="bg-muted border-l-4 border-aa-blue">
        <AlertCircle className="h-5 w-5" />
        <AlertTitle className="font-display text-base">Personal Note from Your Instructor</AlertTitle>
        <AlertDescription>
          Some cadets think flight training is just about showing up, flying the lesson, and moving on. But the ones who
          truly excel—the ones who pass checkrides early, move fast through the program, and become sharp, confident
          aviators—are the ones who train deliberately. They maximize every minute on the ground, they practice without
          ever leaving the earth, and they study their mistakes with intention.
        </AlertDescription>
      </Alert>

      <div className="space-y-6">
        <PremiumTabs
          tabs={tabs}
          defaultValue={tabs[0].value}
          onChange={setCurrentTab}
          currentValue={currentTab}
          title="Flight Training Strategies"
        />

        <div className="pt-6">
          {currentTab === 'chair-flying' && (
            <div className="space-y-6">
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold">Chair Flying & Mental Rehearsal</h2>
            <p className="text-muted-foreground">
              When I started chair flying, I'll admit—I felt kinda dumb. I was sitting in my room, making imaginary
              radio calls and moving my hands through checklist flows in the air. But within a few flights, it clicked.
              Everything got smoother. I wasn't just reacting—I was anticipating. That's when I realized: Chair flying
              isn't optional. It's essential.
            </p>

            <h3 className="font-display text-xl font-medium mt-2">
              Why Chair Flying is the Most Underrated Skill in Training
            </h3>
            <p>
              There's a reason airline pilots, military pilots, and CFIs all chair fly: it works. It's the most
              efficient way to build muscle memory, lock in procedures, and reduce stress in the cockpit.
            </p>
            <p>
              Before every flight, you should have flown it twice already—once in your head, once on paper or in your
              chair. That way, when you get in the airplane, you're not seeing it for the first time. You're rehearsing
              what you already know.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plane className="h-5 w-5 text-aa-blue" />
                    Use Cockpit Posters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Grab a cockpit poster of your aircraft</li>
                    <li>Set it up in your room or workspace</li>
                    <li>Use it to practice flows, checklists, and emergency procedures</li>
                  </ul>
                </CardContent>
                <CardFooter className="text-sm text-muted-foreground">
                  <strong>Pro Tip:</strong> Draw switches or tape outlines to make it more interactive. The more
                  realistic, the better.
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gauge className="h-5 w-5 text-aa-blue" />
                    Sit in the Plane or Simulator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Practice "touch drills" in the actual cockpit</li>
                    <li>Physically move your hands to each control</li>
                    <li>Go through full procedures from start to finish</li>
                  </ul>
                </CardContent>
                <CardFooter className="text-sm text-muted-foreground">
                  <strong>Pro Tip:</strong> Bring a checklist, set a timer, and rehearse a full start-up-to-shutdown
                  sequence.
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-aa-blue" />
                    Rehearse Checklist Flows
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Practice the flow pattern for each checklist</li>
                    <li>Move through the entire sequence in order</li>
                    <li>Verify using the written checklist afterward</li>
                  </ul>
                </CardContent>
                <CardFooter className="text-sm text-muted-foreground">
                  <strong>Key Point:</strong> Flows build muscle memory that checklists alone can't provide.
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-aa-blue" />
                    Visualize Maneuvers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Imagine performing each maneuver step-by-step</li>
                    <li>Focus on control inputs, sight pictures, and airspeeds</li>
                    <li>Visualize what you expect to see and feel</li>
                  </ul>
                </CardContent>
                <CardFooter className="text-sm text-muted-foreground">
                  <strong>Remember:</strong> Visualization builds both psychomotor skills and situational awareness.
                </CardFooter>
              </Card>
            </div>

            <div className="bg-muted p-4 rounded-lg mt-4">
              <h3 className="font-display text-lg font-medium mb-2">Say It Out Loud</h3>
              <p>
                Practice ATC calls, checklist flows, and maneuver callouts aloud. Speaking reinforces memory and builds
                    confidence.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Other tab contents... placeholder for brevity */} 
          {currentTab === 'lesson-prep' && <div>Lesson Preparation Content...</div>}
          {currentTab === 'cfi-relationship' && <div>Working with CFIs Content...</div>}
          {currentTab === 'backseating' && <div>Backseating Content...</div>}
          
        </div>
      </div>
      
      <GuideNavigation
        prevPage={prevPage ? { name: prevPage.name, url: prevPage.url } : undefined}
        nextPage={nextPage ? { name: nextPage.name, url: nextPage.url } : undefined}
        currentPageUrl={pathname}
        nextTopicSegue={nextTopicSegue}
      />
    </div>
  );
}

// --- Server Component --- 
export default function FlightTrainingPage() {
  // Define static data needed by the client component
  const tabs: Tab[] = [
    {
      value: "chair-flying",
      label: "Chair Flying",
      icon: <Brain className="h-5 w-5" />,
    },
    {
      value: "lesson-prep",
      label: "Lesson Preparation",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      value: "cfi-relationship",
      label: "Working with CFIs",
      icon: <Users className="h-5 w-5" />,
    },
    {
      value: "backseating",
      label: "Backseating",
      icon: <Headphones className="h-5 w-5" />,
    },
  ];

  const prevPage: PageLink | null = { name: "Training Expectations", url: "/guide/training-expectations" };
  const nextPage: PageLink | null = { name: "Knowledge Tests", url: "/guide/knowledge-tests" };
  const nextTopicSegue = "With flight training strategies covered, let's transition to mastering the Knowledge Tests. We'll cover study tactics and test-taking tips to ensure you ace your writtens.";

  // Render the client component, wrapped in any necessary layout components
  return (
    <main className="min-h-screen">
      <AppSidebar />
      <SidebarInset>
        <FlightTrainingContent
          tabs={tabs}
          prevPage={prevPage}
          nextPage={nextPage}
          nextTopicSegue={nextTopicSegue}
        />
      </SidebarInset>
    </main>
  );
}

