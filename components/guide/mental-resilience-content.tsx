"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

import { PremiumTabs } from "@/components/premium-tabs";
import { GuideNavigation } from "@/components/guide-navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Brain,
  Lightbulb,
  Zap,
  Layers,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Clock,
  Compass,
  Heart,
  Shield,
  Star,
  Target,
  LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"

// --- Types ---
type PremiumTab = {
  value: string;
  label: string;
  iconName?: string;
  mobileLabel?: string;
};

interface PageLink {
  name: string;
  url: string;
}

// --- Props Interface ---
interface MentalResilienceContentProps {
  tabs: PremiumTab[];
  prevPage: PageLink;
  nextPage: PageLink;
  nextTopicSegue: string;
}

// --- Component ---
export default function MentalResilienceContent({
  tabs,
  prevPage,
  nextPage,
  nextTopicSegue,
}: MentalResilienceContentProps) {
  const pathname = usePathname();
  const initialTab = pathname?.split("/").pop() || tabs[0]?.value || "managing-stress";
  const [currentTab, setCurrentTab] = useState<string>(initialTab);

  return (
    <div className="container py-6">
      {/* Remove Hero Section - Now handled by GuidePageHeader */}

      {/* Introduction Section */}
      <div className="mb-12 max-w-3xl">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-1 w-12 bg-primary rounded-full"></div>
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Why This Matters</p>
        </div>

        <p className="text-xl mb-4">
          Flight training demands more than technical skill—it requires emotional discipline. The ability to manage
          pressure, recover from setbacks, and stay mentally sharp is often the defining trait between those who finish
          strong and those who fall behind.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="flex flex-col items-center text-center p-4 rounded-lg border bg-card hover:shadow-md transition-all">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium mb-2">Cognitive Performance</h3>
            <p className="text-sm text-muted-foreground">
              Optimize your mental clarity, focus, and decision-making under pressure
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-lg border bg-card hover:shadow-md transition-all">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium mb-2">Emotional Regulation</h3>
            <p className="text-sm text-muted-foreground">
              Develop techniques to manage anxiety, frustration, and confidence issues
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-lg border bg-card hover:shadow-md transition-all">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium mb-2">Long-Term Resilience</h3>
            <p className="text-sm text-muted-foreground">
              Build sustainable habits that prevent burnout and support career longevity
            </p>
          </div>
        </div>
      </div>

      {/* Premium Tabs Implementation */}
      <div className="space-y-8">
        <PremiumTabs
          tabs={tabs}
          title="Core Mental Resilience Topics"
          defaultValue={initialTab}
          currentValue={currentTab}
          onChange={setCurrentTab}
        />

        {/* Conditional Content Rendering */}
        <div className="mt-8 space-y-6">
          {currentTab === "managing-stress" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Brain className="h-4 w-4 text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold">Managing Stress & Setbacks</h2>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Every cadet will face friction: failed flights, checkride delays, fatigue, financial concerns,
                    personal stress. These aren't exceptions—they're part of the process. What matters is how you adapt.
                  </p>
                </div>

                <Alert className="bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-900">
                  <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  <AlertTitle className="text-amber-800 dark:text-amber-300">Setbacks Will Happen</AlertTitle>
                  <AlertDescription className="text-amber-700 dark:text-amber-400">
                    When training doesn't go as planned, the first instinct is often to question yourself. "Am I behind?
                    Am I falling short?" But understanding the nature of setbacks is key to overcoming them.
                  </AlertDescription>
                </Alert>

                <div className="rounded-xl border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-medium mb-4">Why Setbacks Matter</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                      </div>
                      <p>
                        <span className="font-medium">Training isn't linear.</span> You may progress quickly one week,
                        then plateau the next. That's normal.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                      </div>
                      <p>
                        <span className="font-medium">Delays are inevitable.</span> Weather, maintenance, scheduling—all
                        outside your control.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                      </div>
                      <p>
                        <span className="font-medium">Mental pressure compounds.</span> Especially if you're trying to
                        "catch up" or feel you're not meeting expectations.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right sidebar content for Stress */}
               <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Stress Reduction Techniques</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>
                          <span className="font-medium">Box Breathing:</span> Inhale (4s), Hold (4s), Exhale (4s), Hold (4s).
                          Repeat.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>
                          <span className="font-medium">5-4-3-2-1 Grounding:</span> Name 5 things you see, 4 you feel, 3
                          you hear, 2 you smell, 1 you taste.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>
                          <span className="font-medium">Quick Walk:</span> Step away for 5-10 minutes. Physical movement
                          changes mental state.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>
                          <span className="font-medium">Positive Self-Talk Reframing:</span> Replace "I can't" with "How
                          can I?"
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                 <Card className="bg-muted/50">
                  <CardHeader>
                    <CardTitle>Key Takeaway</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="italic">
                      "Resilience isn't about avoiding stress; it's about recovering from it effectively and learning
                      from the experience."
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {currentTab === "avoiding-burnout" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
             {/* Main content area */}
               <div className="lg:col-span-2 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold">Avoiding Burnout: The Long Game</h2>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Flight training is a marathon, not a sprint. Pushing too hard for too long without recovery leads to
                    burnout—decreased performance, loss of motivation, and even physical symptoms.
                  </p>
                </div>

                 <Card className="overflow-hidden">
                   <CardHeader>
                    <CardTitle>Understanding Burnout</CardTitle>
                    <CardDescription>It's more than just being tired.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>Burnout typically involves three components:</p>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li>
                        <span className="font-medium">Emotional Exhaustion:</span> Feeling drained, unable to cope.
                      </li>
                      <li>
                        <span className="font-medium">Cynicism/Detachment:</span> Losing enjoyment, feeling disconnected
                        from training.
                      </li>
                      <li>
                        <span className="font-medium">Reduced Accomplishment:</span> Feeling ineffective, lacking
                        confidence in your abilities.
                      </li>
                    </ul>
                    <Alert variant="destructive" className="bg-red-50 dark:bg-red-950/50 border-red-200 dark:border-red-900">
                       <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" />
                      <AlertTitle className="text-red-800 dark:text-red-300">Warning Signs</AlertTitle>
                      <AlertDescription className="text-red-700 dark:text-red-400">
                        Watch for: chronic fatigue, irritability, difficulty concentrating, procrastination, decreased
                        performance, dreading flights/study.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
               </div>

               {/* Sidebar content for Burnout */}
               <div className="space-y-6">
                 <Card>
                  <CardHeader>
                    <CardTitle>Proactive Strategies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>
                          <span className="font-medium">Schedule Downtime:</span> Actively block off time for rest,
                          hobbies, social connection—non-negotiable.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>
                          <span className="font-medium">Prioritize Sleep:</span> Aim for 7-9 hours. Quality sleep is
                          critical for learning and emotional regulation.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>
                          <span className="font-medium">Maintain Healthy Habits:</span> Nutrition, exercise, hydration.
                          Body and mind are linked.
                        </span>
                      </li>
                       <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>
                          <span className="font-medium">Set Realistic Goals:</span> Break down large tasks. Celebrate small
                          wins.
                        </span>
                      </li>
                       <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>
                          <span className="font-medium">Seek Support:</span> Talk to instructors, mentors, fellow cadets,
                          or professionals if needed.
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                 <Card className="bg-muted/50">
                  <CardHeader>
                    <CardTitle>Remember</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="italic">
                      "Taking time to recharge isn't weakness, it's essential maintenance for peak performance."
                    </p>
                  </CardContent>
                </Card>
               </div>
             </div>
          )}

          {currentTab === "impostor-syndrome" && (
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
             {/* Main content area */}
               <div className="lg:col-span-2 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Lightbulb className="h-4 w-4 text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold">Battling Impostor Syndrome</h2>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Feeling like you don't belong, that your successes are just luck, and that you'll eventually be "found
                    out"? That's impostor syndrome, and it's incredibly common among high achievers—especially in demanding fields like aviation.
                  </p>
                </div>

                 <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>Recognizing the Signs</CardTitle>
                  </CardHeader>
                   <CardContent className="space-y-4">
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li>Downplaying your achievements ("I just got lucky on that checkride.")</li>
                      <li>Fearing failure intensely, seeing it as proof of inadequacy.</li>
                      <li>Overworking to compensate for perceived shortcomings.</li>
                      <li>Difficulty accepting praise or positive feedback.</li>
                      <li>Comparing yourself negatively to peers.</li>
                    </ul>
                     <Alert className="bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-900">
                      <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <AlertTitle className="text-blue-800 dark:text-blue-300">You Are Not Alone</AlertTitle>
                      <AlertDescription className="text-blue-700 dark:text-blue-400">
                        Many successful pilots, captains, and instructors have experienced these feelings. Acknowledging it is the first step.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                 </Card>
               </div>

               {/* Sidebar content for Impostor Syndrome */}
               <div className="space-y-6">
                 <Card>
                  <CardHeader>
                    <CardTitle>Countering the Narrative</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                       <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>
                          <span className="font-medium">Focus on Facts:</span> Objectively list your accomplishments,
                          passed checkrides, skills learned.
                        </span>
                      </li>
                       <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>
                          <span className="font-medium">Reframe Failure:</span> View mistakes as learning opportunities,
                          not evidence of inadequacy.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>
                          <span className="font-medium">Track Progress:</span> Keep a log of improvements, positive
                          feedback, and mastered skills.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>
                          <span className="font-medium">Talk About It:</span> Share your feelings with trusted peers,
                          mentors, or instructors. You'll likely find they relate.
                        </span>
                      </li>
                       <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>
                          <span className="font-medium">Accept Compliments:</span> Simply say "Thank you." Resist the urge
                          to deflect or minimize praise.
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                  <Card className="bg-muted/50">
                  <CardHeader>
                    <CardTitle>Perspective</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="italic">
                      "Feeling like an impostor often means you're pushing your boundaries and growing. Embrace the challenge."
                    </p>
                  </CardContent>
                </Card>
               </div>
             </div>
          )}

          {currentTab === "maslows-hierarchy" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
               {/* Main content area */}
               <div className="lg:col-span-2 space-y-6">
                 <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Layers className="h-4 w-4 text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold">Maslow's Hierarchy & Pilot Performance</h2>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Abraham Maslow's theory suggests human needs are hierarchical. Basic needs must be met before higher-level needs (like optimal learning and performance) can be fulfilled. This is highly relevant to flight training.
                  </p>
                </div>

                 <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>The Hierarchy in Flight Training</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Accordion type="single" collapsible defaultValue="item-1">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="font-medium">1. Physiological Needs</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2 text-sm">Basic survival: Food, water, sleep, shelter. Are you eating properly? Hydrating? Getting enough rest? Ignoring these sabotages everything else.</p>
                          <p className="text-xs text-muted-foreground">Example: Trying to study complex systems on 4 hours of sleep is inefficient and potentially unsafe before a flight.</p>
                        </AccordionContent>
                      </AccordionItem>
                       <AccordionItem value="item-2">
                        <AccordionTrigger className="font-medium">2. Safety Needs</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2 text-sm">Feeling secure: Physical safety (good aircraft maintenance, adherence to procedures), financial stability (managing training costs), health.</p>
                          <p className="text-xs text-muted-foreground">Example: Worrying constantly about finances can distract you significantly during critical phases of flight.</p>
                        </AccordionContent>
                      </AccordionItem>
                       <AccordionItem value="item-3">
                        <AccordionTrigger className="font-medium">3. Love & Belonging</AccordionTrigger>
                        <AccordionContent>
                           <p className="mb-2 text-sm">Social connection: Positive relationships with instructors, peers, family, friends. Feeling part of the training group.</p>
                           <p className="text-xs text-muted-foreground">Example: Isolating yourself can increase stress and prevent you from benefiting from peer support and shared learning.</p>
                        </AccordionContent>
                      </AccordionItem>
                       <AccordionItem value="item-4">
                        <AccordionTrigger className="font-medium">4. Esteem Needs</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2 text-sm">Feeling competent: Confidence in your skills, recognition from instructors/peers, self-respect.</p>
                           <p className="text-xs text-muted-foreground">Example: Constructive feedback helps build esteem; constant negative self-talk undermines it.</p>
                        </AccordionContent>
                      </AccordionItem>
                       <AccordionItem value="item-5">
                        <AccordionTrigger className="font-medium">5. Self-Actualization</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2 text-sm">Reaching potential: Optimal learning, problem-solving, creativity, peak performance. This is where you truly excel in training.</p>
                           <p className="text-xs text-muted-foreground">Example: You can only reach this level consistently if the lower-level needs are adequately met.</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                 </Card>
               </div>

               {/* Sidebar content for Maslow */}
               <div className="space-y-6">
                  <Card>
                  <CardHeader>
                    <CardTitle>Applying Maslow</CardTitle>
                    <CardDescription>Check your foundation regularly.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>
                          <span className="font-medium">Prioritize Basics:</span> Don't sacrifice sleep for study.
                          Maintain healthy routines.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>
                          <span className="font-medium">Address Safety Concerns:</span> Speak up about maintenance issues.
                          Manage financial stress proactively.
                        </span>
                      </li>
                       <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>
                          <span className="font-medium">Build Connections:</span> Engage with peers. Communicate openly
                          with instructors.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>
                          <span className="font-medium">Focus on Growth:</span> Acknowledge progress. Seek feedback for
                          improvement (builds esteem).
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-muted/50">
                  <CardHeader>
                    <CardTitle>Foundation First</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="italic">
                      "You can't build a strong house on a shaky foundation. Ensure your basic needs are met to unlock your full learning potential."
                    </p>
                  </CardContent>
                </Card>
               </div>
             </div>
          )}
        </div>
      </div>

      {/* Additional Resources Section */}
      <div className="mt-16 pt-10 border-t">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">Additional Resources & Next Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5 text-primary"/> Further Reading</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm list-disc pl-5">
                <li>FAA Pilot's Handbook of Aeronautical Knowledge (PHAK) - Chapter on Aeromedical Factors</li>
                <li>Articles on AOPA / EAA websites regarding pilot wellbeing</li>
                 <li>"Mindful Flying" by Dr. Michael Craig</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Compass className="h-5 w-5 text-primary"/> Related Guide Sections</CardTitle>
            </CardHeader>
            <CardContent>
               <ul className="space-y-2 text-sm">
                  <li><Button variant="link" className="p-0 h-auto justify-start font-normal">Training Expectations</Button></li>
                  <li><Button variant="link" className="p-0 h-auto justify-start font-normal">Checkride Preparation</Button></li>
                  <li><Button variant="link" className="p-0 h-auto justify-start font-normal">Professional Pilot Development</Button></li>
               </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-primary"/> Support Resources</CardTitle>
            </CardHeader>
             <CardContent>
               <p className="text-sm text-muted-foreground mb-3">Don't hesitate to reach out:</p>
               <ul className="space-y-2 text-sm list-disc pl-5">
                  <li>Your Assigned Instructor / Mentor</li>
                  <li>Flight School Management / Chief Pilot</li>
                  <li>AACA Student Support Services</li>
                   <li>Confidential Aviation Safety Reporting System (ASRS)</li>
               </ul>
            </CardContent>
          </Card>
        </div>
      </div>

       {/* Guide Navigation */}
      <GuideNavigation
        prevPage={{ name: prevPage.name, url: prevPage.url }}
        nextPage={{ name: nextPage.name, url: nextPage.url }}
        nextTopicSegue={nextTopicSegue}
      />
    </div>
  );
} 
