"use client";

// Imports moved from original page.tsx
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';
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
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
} from "@/components/ui/timeline";
// Removed AppSidebar, SidebarInset
import { PremiumTabs } from "@/components/premium-tabs";
import { GuideNavigation } from "@/components/guide-navigation";
import { Tabs, TabsContent } from "@/components/ui/tabs";

// Type definitions - Updated Tab type
type Tab = {
  value: string;
  label: string;
  iconName?: string; // Use iconName string
};

interface PageLink {
    name: string;
    url: string;
}

// Props interface
interface FlightTrainingContentProps {
  tabs: Tab[];
  prevPage: PageLink | null;
  nextPage: PageLink | null;
  nextTopicSegue: string;
}

// The main function moved from page.tsx
// It keeps the original conditional rendering logic for now.
export default function FlightTrainingContent({ 
  tabs, 
  prevPage, 
  nextPage, 
  nextTopicSegue 
}: FlightTrainingContentProps) {
  const pathname = usePathname()
  const [currentTab, setCurrentTab] = useState(tabs[0].value);

  // The original JSX goes here
  return (
    <div className="container mx-auto py-8 space-y-8">
       {/* Hero Section - Copied from original */}
       <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-aa-blue to-aa-navy text-white">
         {/* ... Hero Content ... */}
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

      {/* Alert - Copied from original */}
      <Alert className="bg-muted border-l-4 border-aa-blue">
         {/* ... Alert Content ... */}
         <AlertCircle className="h-5 w-5" />
        <AlertTitle className="font-display text-base">Personal Note from Your Instructor</AlertTitle>
        <AlertDescription>
          Some cadets think flight training is just about showing up, flying the lesson, and moving on. But the ones who
          truly excel—the ones who pass checkrides early, move fast through the program, and become sharp, confident
          aviators—are the ones who train deliberately. They maximize every minute on the ground, they practice without
          ever leaving the earth, and they study their mistakes with intention.
        </AlertDescription>
      </Alert>

      {/* Tabs Section - Refactored with Tabs/TabsContent, preserving original content */}
      <div className="space-y-6">
        <Tabs defaultValue={tabs[0].value} value={currentTab} onValueChange={setCurrentTab}>
            <PremiumTabs
              tabs={tabs}
              onChange={setCurrentTab}
              title="Flight Training Strategies"
              className="mb-6" 
            />

            {/* Content moved from conditional blocks into TabsContent */}
            <TabsContent value="chair-flying" className="pt-0">
               <div className="space-y-6">
                 {/* Original content for 'chair-flying' tab */}
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
                      <p className="text-muted-foreground">
                        Don't just think the radio calls—say them. Don't just mime the checklist—verbalize the items. Engaging
                        more senses locks the information in better and builds confidence for when you have to do it for
                        real.
                      </p>
                    </div>
                 </div>
              </div>
            </TabsContent>

            <TabsContent value="prepare" className="pt-0">
              <div className="space-y-6">
                 {/* Original content for 'prepare' tab */}
                <div className="flex flex-col gap-4">
                  <h2 className="font-display text-2xl font-semibold">Preparing for Each Flight Lesson</h2>
                   <p className="text-muted-foreground">
                    Showing up unprepared is the fastest way to waste time and money in flight training. Your CFI can tell
                    within minutes if you've done your homework. Be the cadet who arrives ready to maximize the lesson.
                  </p>
                  <h3 className="font-display text-xl font-medium mt-2">The Night Before / Morning Of Checklist:</h3>
                  <Timeline>
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot />
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <TimelineHeader>
                             <TimelineTitle>Review Previous Lesson Notes</TimelineTitle>
                            <TimelineDescription>What did you struggle with? What were the key takeaways?</TimelineDescription>
                          </TimelineHeader>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot />
                           <TimelineConnector />
                        </TimelineSeparator>
                         <TimelineContent>
                           <TimelineHeader>
                            <TimelineTitle>Read Ahead for the Next Lesson</TimelineTitle>
                             <TimelineDescription>Consult the syllabus. Understand the objectives, maneuvers, and completion standards (ACS/PTS).</TimelineDescription>
                           </TimelineHeader>
                         </TimelineContent>
                      </TimelineItem>
                       <TimelineItem>
                         <TimelineSeparator>
                           <TimelineDot />
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <TimelineHeader>
                            <TimelineTitle>Watch Relevant Videos / Read Handbooks</TimelineTitle>
                            <TimelineDescription>Use resources like Sporty's, King Schools, PHAK, AFH to understand the concepts.</TimelineDescription>
                          </TimelineHeader>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot />
                           <TimelineConnector />
                        </TimelineSeparator>
                         <TimelineContent>
                           <TimelineHeader>
                            <TimelineTitle>Chair Fly the Lesson</TimelineTitle>
                             <TimelineDescription>Mentally rehearse the procedures, maneuvers, and radio calls.</TimelineDescription>
                           </TimelineHeader>
                         </TimelineContent>
                      </TimelineItem>
                       <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot />
                          {/* No connector on last item */}
                        </TimelineSeparator>
                        <TimelineContent>
                          <TimelineHeader>
                             <TimelineTitle>Prepare Questions for Your CFI</TimelineTitle>
                            <TimelineDescription>Identify areas you need clarification on before the briefing.</TimelineDescription>
                          </TimelineHeader>
                        </TimelineContent>
                      </TimelineItem>
                    </Timeline>
                    <Alert variant="default" className="mt-4 bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800">
                      <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <AlertTitle className="text-blue-800 dark:text-blue-300">Know the Completion Standards</AlertTitle>
                      <AlertDescription className="text-blue-700 dark:text-blue-400">
                        Before you fly a maneuver, you should know the ACS/PTS standards cold. Altitude, airspeed, heading tolerances—know what "passing" looks like so you can aim for it.
                      </AlertDescription>
                    </Alert>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cfi-relationship" className="pt-0">
              <div className="space-y-6">
                 {/* Original content for 'cfi-relationship' tab */}
                <div className="flex flex-col gap-4">
                  <h2 className="font-display text-2xl font-semibold">Building a Strong CFI Relationship</h2>
                  <p className="text-muted-foreground">
                    Your Certified Flight Instructor (CFI) is more than just a teacher; they're your mentor, coach, and
                    primary guide through this demanding process. Building a positive, professional relationship is key to
                    your success.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <MessageSquare className="h-5 w-5 text-aa-blue" /> Be Honest & Communicate Openly
                        </CardTitle>
                      </CardHeader>
                       <CardContent>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>If you're struggling, say so. Don't hide weaknesses.</li>
                            <li>Ask questions, even if they seem basic.</li>
                             <li>Provide feedback on what teaching methods work for you.</li>
                          </ul>
                       </CardContent>
                    </Card>
                     <Card>
                       <CardHeader>
                         <CardTitle className="flex items-center gap-2">
                           <Clock className="h-5 w-5 text-aa-blue" /> Respect Their Time
                         </CardTitle>
                      </CardHeader>
                       <CardContent>
                         <ul className="list-disc pl-5 space-y-1">
                           <li>Show up prepared and on time (early!) for every lesson.</li>
                           <li>Have your questions ready for the brief.</li>
                            <li>Minimize non-essential chatter during flight time.</li>
                         </ul>
                       </CardContent>
                     </Card>
                     <Card>
                       <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-aa-blue" /> Be Coachable & Open to Feedback
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Listen actively during debriefs. Take notes.</li>
                           <li>Don't make excuses. Acknowledge mistakes and focus on correction.</li>
                          <li>Trust their expertise, even when it's challenging.</li>
                         </ul>
                       </CardContent>
                    </Card>
                     <Card>
                       <CardHeader>
                         <CardTitle className="flex items-center gap-2">
                          <Heart className="h-5 w-5 text-aa-blue" /> Show Enthusiasm & Professionalism
                        </CardTitle>
                      </CardHeader>
                       <CardContent>
                         <ul className="list-disc pl-5 space-y-1">
                            <li>Demonstrate your passion for learning to fly.</li>
                            <li>Maintain a positive attitude, even after tough lessons.</li>
                           <li>Treat training like the professional career path it is.</li>
                         </ul>
                       </CardContent>
                    </Card>
                   </div>
                   <Alert variant="destructive" className="mt-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Handling CFI Conflicts</AlertTitle>
                    <AlertDescription>
                      Personality clashes can happen. If you genuinely feel the instructional relationship isn't working despite your best efforts, don't suffer in silence. Talk to the AACA training management respectfully and professionally to discuss options. Switching instructors is sometimes necessary, but should be a last resort after attempting to resolve issues directly.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="backseating" className="pt-0">
              <div className="space-y-6">
                {/* Original content for 'backseating' tab */}
                 <div className="flex flex-col gap-4">
                   <h2 className="font-display text-2xl font-semibold">The Power of Backseating</h2>
                   <p className="text-muted-foreground">
                    One of the most underutilized learning tools available at AACA is sitting in on another cadet's flight lesson. It's free, it's insightful, and it can dramatically accelerate your own progress.
                  </p>
                  <h3 className="font-display text-xl font-medium mt-2">Why Backseating Works:</h3>
                   <div className="grid md:grid-cols-3 gap-4 mt-4">
                      <Card>
                       <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                             <Headphones className="h-5 w-5 text-aa-blue" /> Passive Learning
                           </CardTitle>
                         </CardHeader>
                         <CardContent>
                          <p>Absorb radio calls, procedures, and CFI instructions without the pressure of performing.</p>
                         </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Users className="h-5 w-5 text-aa-blue" /> Observe Mistakes
                          </CardTitle>
                        </CardHeader>
                         <CardContent>
                           <p>See common errors others make and learn how to avoid them yourself. Identify CFI correction techniques.</p>
                         </CardContent>
                       </Card>
                       <Card>
                         <CardHeader>
                           <CardTitle className="text-lg flex items-center gap-2">
                            <Compass className="h-5 w-5 text-aa-blue" /> Reinforce Concepts
                          </CardTitle>
                         </CardHeader>
                         <CardContent>
                          <p>Hearing explanations and seeing maneuvers performed reinforces your own ground school knowledge.</p>
                         </CardContent>
                      </Card>
                   </div>
                   <h3 className="font-display text-xl font-medium mt-4">How to Backseat Effectively:</h3>
                   <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Ask Permission:</strong> Always check with the CFI and the student pilot beforehand.</li>
                    <li><strong>Be Invisible:</strong> Stay quiet, minimize movement, and don't interrupt unless safety is compromised. You are an observer only.</li>
                    <li><strong>Listen Actively:</strong> Pay attention to ATC communication, CFI instructions, and student responses.</li>
                     <li><strong>Visualize Yourself Flying:</strong> Mentally perform the maneuvers and calls as if you were in the front seat.</li>
                    <li><strong>Take Notes (Subtly):</strong> Jot down key takeaways or questions to ask your *own* CFI later (not the CFI giving the lesson).</li>
                    <li><strong>Respect Privacy:</strong> Don't gossip about the student's performance afterward.</li>
                   </ul>
                  <Alert>
                     <Lightbulb className="h-4 w-4" />
                     <AlertTitle>Maximize the Opportunity</AlertTitle>
                     <AlertDescription>
                       Try to backseat lessons slightly ahead of where you are in the syllabus. Seeing what's coming next provides excellent context for your own preparation.
                     </AlertDescription>
                   </Alert>
                 </div>
              </div>
            </TabsContent>

            <TabsContent value="study-mistakes" className="pt-0">
               <div className="space-y-6">
                 {/* Original content for 'study-mistakes' tab */}
                 <div className="flex flex-col gap-4">
                   <h2 className="font-display text-2xl font-semibold">Learning from Your Mistakes</h2>
                    <p className="text-muted-foreground">
                    Flight training isn't about being perfect; it's about continuous improvement. Mistakes are inevitable, but how you analyze and learn from them determines your trajectory as a pilot.
                  </p>
                  <h3 className="font-display text-xl font-medium mt-2">The Debrief is Non-Negotiable:</h3>
                  <p>The post-flight debrief with your CFI is arguably the most critical part of the lesson. This is where learning is solidified.</p>
                   <ul className="list-disc pl-5 space-y-2 my-4">
                    <li><strong>Be Honest with Yourself:</strong> Acknowledge what went wrong without making excuses.</li>
                     <li><strong>Listen More Than You Talk:</strong> Absorb your CFI's feedback objectively.</li>
                     <li><strong>Ask Clarifying Questions:</strong> Ensure you understand *why* the mistake happened and *how* to correct it.</li>
                    <li><strong>Take Detailed Notes:</strong> Write down key points, corrections, and areas to focus on before the next flight.</li>
                    <li><strong>Connect to Standards:</strong> Discuss how the performance related to the ACS/PTS standards.</li>
                   </ul>
                   <div className="bg-muted p-4 rounded-lg">
                     <h4 className="font-display text-lg font-medium mb-2">Post-Debrief Action Plan:</h4>
                    <ol className="list-decimal pl-5 space-y-1">
                        <li>Review your notes immediately while the lesson is fresh.</li>
                        <li>Revisit relevant sections in handbooks or watch videos on the specific maneuver/concept.</li>
                        <li>Chair fly the maneuver correctly, focusing on the identified correction.</li>
                        <li>Brief yourself on the correction before your next flight.</li>
                     </ol>
                   </div>
                   <Alert variant="default" className="mt-4 bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
                     <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                     <AlertTitle className="text-green-800 dark:text-green-300">Embrace the Learning Process</AlertTitle>
                     <AlertDescription className="text-green-700 dark:text-green-400">
                       Every pilot makes mistakes. The best pilots are the ones who are masters at identifying, analyzing, and correcting them efficiently. View errors not as failures, but as valuable data points for improvement.
                     </AlertDescription>
                   </Alert>
                 </div>
              </div>
            </TabsContent>

        </Tabs>
      </div>

      {/* Guide Navigation - Copied from original */}
      <GuideNavigation
        prevPage={prevPage ? { name: prevPage.name, url: prevPage.url } : undefined}
        nextPage={nextPage ? { name: nextPage.name, url: nextPage.url } : undefined}
        nextTopicSegue={nextTopicSegue}
      />
    </div>
  );
} 