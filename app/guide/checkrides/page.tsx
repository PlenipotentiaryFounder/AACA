import type { Metadata } from "next"
import Link from "next/link"
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  FileText,
  Gauge,
  HeartPulse,
  Lightbulb,
  Plane,
  Shield,
  AlertTriangle,
  ArrowRight,
  Brain,
  UserCheck,
  Layers,
  UserCog,
  Users,
  PlaneTakeoff,
  MessageSquareQuote,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { PremiumTabs } from "@/components/ui/premium-tabs"
import { GuideNavigation } from "@/components/guide-navigation"
import { AppSidebar } from "@/components/guide/app-sidebar"
import { SidebarInset } from "@/components/guide/sidebar-inset"

export const metadata: Metadata = {
  title: "Checkrides | AACA Student Pilot Guide",
  description:
    "Master your FAA checkrides with proven strategies, mindset techniques, and insider preparation tips from the American Airlines Cadet Academy.",
}

type Tab = {
  value: string;
  label: string;
  icon: React.ElementType;
}

interface PageLink {
    title: string;
    href: string;
}

"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"

interface CheckridesContentProps {
  tabs: Tab[];
  prevPage: PageLink | null;
  nextPage: PageLink | null;
  nextTopicSegue: string;
}

function CheckridesContent({ 
  tabs, 
  prevPage, 
  nextPage, 
  nextTopicSegue 
}: CheckridesContentProps) {
  const [currentTab, setCurrentTab] = useState(tabs[0].value)
  const pathname = usePathname()

  return (
    <div className="container max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-aa-blue to-aa-navy text-white mb-12">
        <div className="absolute inset-0 bg-[url('/images/cessna-in-flight-blue-sky.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 px-6 py-16 md:py-24 md:px-12 max-w-4xl">
          <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">Chapter 7</Badge>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Passing Your Checkrides
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl">
            The final hurdle—mastering the moment that counts
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button size="lg" className="bg-white text-aa-navy hover:bg-white/90">
              Start Preparing
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              View Checkride Resources <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-medium mb-4">Jump to specific checkride:</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/checkrides/private">
                <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 border-none text-white">
                  Private Pilot
                </Button>
              </Link>
              <Link href="/checkrides/instrument">
                <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 border-none text-white">
                  Instrument
                </Button>
              </Link>
              <Link href="/checkrides/commercial">
                <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 border-none text-white">
                  Commercial
                </Button>
              </Link>
              <Link href="/checkrides/multi-engine">
                <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 border-none text-white">
                  Multi-Engine
                </Button>
              </Link>
              <Link href="/checkrides/cfi">
                <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 border-none text-white">
                  CFI
                </Button>
              </Link>
              <Link href="/checkrides/cfii">
                <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 border-none text-white">
                  CFII
                </Button>
              </Link>
              <Link href="/checkrides/atp">
                <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 border-none text-white">
                  ATP
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 -mb-12 -mr-12 opacity-20 md:opacity-30">
          <div className="w-full h-full bg-[url('/images/mock_oral.jpg')] bg-contain bg-no-repeat"></div>
        </div>
      </section>

      <Alert className="bg-muted border-muted-foreground/20 mb-8">
        <AlertTitle className="flex items-center gap-2 text-lg font-display font-semibold">
          <FileText className="h-5 w-5" /> Personal Note from Your Instructor
        </AlertTitle>
        <AlertDescription className="text-base mt-2">
          There's nothing quite like the feeling of waking up on checkride day. It's equal parts excitement and nerves,
          and that's completely normal. The goal of this chapter isn't just to help you pass—it's to help you walk in
          with calm confidence, knowing that you've already put in the work. Now it's just time to show it.
        </AlertDescription>
      </Alert>

      <section className="mb-16">
        <PremiumTabs
          tabs={tabs.map(tab => ({ ...tab, icon: <tab.icon className="h-4 w-4" /> }))}
          defaultValue={tabs[0].value}
          currentValue={currentTab}
          onChange={setCurrentTab}
          title="Checkride Preparation"
          className="mb-8"
        />

        {currentTab === "what-is-checkride" && (
          <div className="space-y-6">
            <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">What Is a Checkride & How Is It Conducted?</h2>
                  <p className="text-muted-foreground">Your ticket to the next level—earned, not given</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="lead">
                  An FAA checkride—officially called a Practical Test—is the final evaluation you must pass to earn each
                  pilot certificate or rating. It's where you prove that your training has paid off and that you can
                  meet the standards outlined in the Airman Certification Standards (ACS).
                </p>
                <p>You'll take a separate checkride for each major milestone in your training:</p>
                <ul className="space-y-1">
                  <li>Private Pilot</li>
                  <li>Instrument Rating</li>
                  <li>Commercial</li>
                  <li>CFI / CFII</li>
                  <li>Multi-Engine Add-On</li>
                </ul>
                <p className="font-medium">This is the moment when it all becomes real.</p>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">
                  Who Gives the Checkride? (Meet the DPE)
                </h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <p>
                    Your checkride will be conducted by a Designated Pilot Examiner (DPE)—a highly experienced pilot
                    appointed by the FAA to evaluate new applicants.
                  </p>
                  <div className="bg-primary/10 p-4 rounded-lg my-4">
                    <p className="font-medium mb-0">
                      They're not out to fail you. They're out to see if you meet the standard to be trusted with your
                      certificate.
                    </p>
                  </div>
                  <p>
                    DPEs are professionals. Many have decades of airline, military, or corporate experience. Think of
                    them as your first captain-level evaluation. That's the energy you should walk in with—calm,
                    competent, and collected.
                  </p>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">What Happens During a Checkride?</h3>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Brain className="h-5 w-5 text-primary" /> Oral Exam (1–3 hours)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        This is a deep dive into your knowledge, risk management, and decision-making.
                      </p>
                      <p className="mb-3">
                        The DPE will ask questions directly from the ACS, often with scenario-based twists:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>"Would you take this flight today? Why or why not?"</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>"What are the weather minimums for Class C airspace?"</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>"What would you do if you lost radio contact entering the Class D?"</div>
                        </li>
                      </ul>
                      <p className="mt-3">
                        They'll expect you to reference documents, charts, and the FAR/AIM if needed. You're not
                        expected to be a robot—you're expected to be a thinking pilot.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Plane className="h-5 w-5 text-primary" /> Flight Test (1–2 hours)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        This is where you put your knowledge into action. You'll fly a full mission profile—preflight to
                        shutdown—including:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Maneuvers to ACS standards</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Emergency procedures</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Normal and abnormal operations</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Scenario-based decisions and communication</div>
                        </li>
                      </ul>
                      <p className="mt-3">
                        The DPE may simulate diversions, system failures, or challenging conditions. But again—they're
                        not looking for perfection. They're looking for safety, judgment, and control.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">What the DPE Is Really Looking For</h3>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
                  <p className="font-medium mb-4 text-primary flex items-center gap-2">
                    <UserCheck className="h-5 w-5" /> Core Expectations:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Safety and Risk Management:</strong> Can you make safe decisions, even when things
                        don't go as planned?
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>ACS Proficiency:</strong> Can you consistently perform maneuvers and procedures to
                        the published standards?
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>System Knowledge & Understanding:</strong> Do you grasp the 'why' behind the rules
                        and procedures, not just rote memorization?
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Pilot-in-Command Authority:</strong> Are you acting like a PIC, taking charge and
                        managing the flight responsibly?
                      </div>
                    </li>
                  </ul>
                  <p className="mt-4">
                    It's not about perfection. It's about demonstrating that you're a safe, competent pilot ready
                    for the privileges of the certificate or rating you seek.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentTab === "managing-stress" && (
          <div className="space-y-6">
            <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-rose-500/10 flex items-center justify-center">
                  <HeartPulse className="h-6 w-6 text-rose-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">Managing Checkride Stress & Nerves</h2>
                  <p className="text-muted-foreground">Turning anxiety into focused energy</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="lead">
                  Let's be real: Checkrides are stressful. A little bit of stress is actually good—it keeps you
                  sharp. Too much, however, can sabotage your performance. The key is to manage it effectively.
                </p>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Why Checkrides Feel So Intense</h3>
                <ul className="space-y-1">
                  <li>
                    <strong>High Stakes:</strong> Your next certificate is on the line.
                  </li>
                  <li>
                    <strong>Evaluation Pressure:</strong> You're being judged by an expert.
                  </li>
                  <li>
                    <strong>Uncertainty:</strong> You don't know exactly what scenarios the DPE will throw at you.
                  </li>
                  <li>
                    <strong>Fear of Failure:</strong> Nobody wants to repeat a checkride (or pay for it again!).
                  </li>
                </ul>
                <p className="font-medium">Recognizing these factors is the first step to managing them.</p>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Proven Stress-Reduction Techniques</h3>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Brain className="h-5 w-5 text-primary" /> Mental Preparation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong>Visualize Success:</strong> Regularly picture yourself performing well,
                            handling challenges calmly, and receiving your temporary certificate.
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong>Positive Self-Talk:</strong> Replace "What if I fail?" with "I am prepared,
                            I know this material, I can do this."
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong>Know the ACS Cold:</strong> Confidence comes from competence. Master every
                            task.
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Gauge className="h-5 w-5 text-primary" /> Physical & Practical Steps
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong>Get Good Sleep:</strong> Don't cram the night before. Rest is crucial.
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong>Eat Well & Hydrate:</strong> Avoid caffeine jitters or sugar crashes.
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong>Arrive Early & Organized:</strong> Reduce last-minute rushing. Have all your
                            documents ready.
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong>Deep Breathing:</strong> If you feel overwhelmed, take a few slow, deep
                            breaths to reset.
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">During the Checkride: Stay Present</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <p className="font-medium mb-3">Focus on one task at a time.</p>
                  <ul className="space-y-2">
                    <li>
                      Don't dwell on a minor mistake. Acknowledge it, correct if possible, and move on. The
                      DPE is evaluating your overall performance and recovery skills.
                    </li>
                    <li>Listen carefully to instructions. Ask for clarification if needed.</li>
                    <li>Verbalize your thought process, especially for risk management decisions.</li>
                    <li>Remember: It's okay to say "I need a moment to look that up."</li>
                  </ul>
                </div>

                <Alert variant="destructive" className="my-6">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Warning: The "Checkride Effect"</AlertTitle>
                  <AlertDescription>
                    It's common to make small errors under pressure that you wouldn't normally make. Don't let it
                    rattle you. Maintain composure and focus on the next task. A single deviation within
                    standards won't fail you; losing control or making unsafe decisions will.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
        )}

        {currentTab === "mindset" && (
          <div className="space-y-6">
            <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">Cultivating a Checkride Winner's Mindset</h2>
                  <p className="text-muted-foreground">Approach the day with confidence, not arrogance</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="lead">
                  Passing a checkride isn't just about stick-and-rudder skills or knowing regulations. It's
                  significantly influenced by your mindset. Walking in prepared, confident, and professional sets
                  the stage for success.
                </p>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Key Mindset Shifts for Checkride Day</h3>
                <div className="space-y-6 my-6">
                  <Card className="border-primary/30 bg-primary/5">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" /> From Student to Pilot-in-Command
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">
                        Shift your self-perception. You're not just a student hoping to pass; you are
                        demonstrating your readiness to act as PIC for the certificate sought.
                      </p>
                      <ul className="space-y-1">
                        <li>Take ownership of the flight from the start.</li>
                        <li>Make decisions assertively but safely.</li>
                        <li>Communicate clearly and professionally.</li>
                        <li>Don't wait to be told everything; anticipate needs.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <UserCog className="h-5 w-5 text-primary" /> View the DPE as a Colleague (A Senior One)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">
                        Respect their experience, but don't be intimidated. They were in your shoes once. Engage
                        with them professionally.
                      </p>
                      <ul className="space-y-1">
                        <li>Maintain good CRM, even though it's an evaluation.</li>
                        <li>Brief them clearly on your plan and intentions.</li>
                        <li>Answer questions directly and confidently. If unsure, say so and explain how you'd
                          find the answer.
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" /> Focus on Standards, Not Perfection
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">
                        The ACS defines the standard. Aim to meet or exceed it, but don't crumble if one maneuver
                        is slightly off but still within limits.
                      </p>
                      <ul className="space-y-1">
                        <li>Know the ACS tolerances for every task.</li>
                        <li>Strive for precision, but prioritize safety and control.</li>
                        <li>Acknowledge deviations quickly and correct smoothly.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-primary" /> Embrace Problem-Solving
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">
                        Checkrides often involve scenarios designed to test your judgment. See them as opportunities
                        to demonstrate competence, not traps.
                      </p>
                      <ul className="space-y-1">
                        <li>Think out loud – explain your risk assessment and decisions.</li>
                        <li>Use available resources (checklists, POH, ForeFlight, etc.).</li>
                        <li>Prioritize safety above all else.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">The Pre-Checkride Ritual</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <p className="font-medium mb-3">
                    Develop a routine for the 24 hours before your checkride:
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <strong>Organize Documents:</strong> Logbook, endorsements, ID, medical, knowledge test
                      report, IACRA application, aircraft documents, POH, charts, FAR/AIM, plotter, E6B.
                    </li>
                    <li>
                      <strong>Review Key Areas:</strong> Lightly review ACS, POH limitations, memory items, weather
                      briefing, flight plan.
                    </li>
                    <li>
                      <strong>Prepare the Aircraft:</strong> Ensure it's airworthy, clean, and fueled.
                    </li>
                    <li>
                      <strong>Visualize:</strong> Run through the oral and flight profile mentally.
                    </li>
                    <li>
                      <strong>Relax & Rest:</strong> Avoid heavy studying or flying the day before. Eat well, sleep
                      well.
                    </li>
                  </ul>
                </div>

                <p>
                  Walking into the checkride feeling prepared and adopting a professional, PIC mindset can make a
                  significant difference in both your performance and the DPE's perception of your readiness.
                </p>
              </div>
            </div>
          </div>
        )}

        {currentTab === "checkride-types" && (
          <div className="space-y-6">
            <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-indigo-500/10 flex items-center justify-center">
                  <Layers className="h-6 w-6 text-indigo-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">Overview of Key Checkrides</h2>
                  <p className="text-muted-foreground">Milestones on your journey to the flight deck</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="lead">
                  Each certificate and rating requires its own practical test, building upon previous knowledge and
                  skills. Here's a brief overview of the major checkrides you'll encounter:
                </p>
              </div>

              <div className="space-y-8 mt-8">
                <Card className="overflow-hidden">
                  <CardHeader className="bg-primary/5 border-b p-4">
                    <CardTitle className="text-xl flex items-center gap-3">
                      <Plane className="h-5 w-5 text-primary" /> Private Pilot (PPL)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      <strong>Focus:</strong> Foundational VFR flying skills, basic navigation, safety, and
                      decision-making.
                    </p>
                    <p className="mb-3">
                      <strong>Key Areas Tested (per PPL ACS):</strong>
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
                      <li>Preflight Preparation & Procedures</li>
                      <li>Airport Operations</li>
                      <li>Takeoffs, Landings, Go-Arounds</li>
                      <li>Performance Maneuvers (Steep Turns, Stalls)</li>
                      <li>Ground Reference Maneuvers</li>
                      <li>Navigation (Pilotage, Dead Reckoning)</li>
                      <li>Slow Flight & Stalls</li>
                      <li>Basic Instrument Maneuvers</li>
                      <li>Emergency Operations</li>
                      <li>Night Operations (if applicable)</li>
                      <li>Postflight Procedures</li>
                    </ul>
                    <p className="mt-4">
                      This is your first major hurdle, proving you can safely operate an aircraft solo under visual
                      conditions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <CardHeader className="bg-primary/5 border-b p-4">
                    <CardTitle className="text-xl flex items-center gap-3">
                      <Gauge className="h-5 w-5 text-primary" /> Instrument Rating (IR)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      <strong>Focus:</strong> Flying solely by reference to instruments (IFR), understanding the
                      IFR system, ATC procedures, and instrument approaches.
                    </p>
                    <p className="mb-3">
                      <strong>Key Areas Tested (per Instrument ACS):</strong>
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
                      <li>Preflight Preparation & Procedures (IFR specific)</li>
                      <li>Air Traffic Control Clearances & Procedures</li>
                      <li>Flight by Reference to Instruments</li>
                      <li>Navigation Systems (VOR, GPS, etc.)</li>
                      <li>Instrument Approach Procedures (Multiple types)</li>
                      <li>Holding Procedures</li>
                      <li>Emergency Operations (IFR specific)</li>
                      <li>Postflight Procedures</li>
                    </ul>
                    <p className="mt-4">
                      This rating significantly enhances your utility as a pilot, allowing flight in less-than-VFR
                      conditions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <CardHeader className="bg-primary/5 border-b p-4">
                    <CardTitle className="text-xl flex items-center gap-3">
                      <Award className="h-5 w-5 text-primary" /> Commercial Pilot (CPL)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      <strong>Focus:</strong> Higher performance standards, complex aircraft operations (if
                      applicable), commercial regulations, and demonstrating professionalism.
                    </p>
                    <p className="mb-3">
                      <strong>Key Areas Tested (per Commercial ACS):</strong>
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
                      <li>Preflight Preparation & Procedures (Commercial focus)</li>
                      <li>Complex Aircraft Operations (Retractable Gear, Flaps, Controllable Pitch Prop)</li>
                      <li>Airport Operations (Higher precision)</li>
                      <li>Performance Maneuvers (Chandelles, Lazy Eights)</li>
                      <li>Navigation (Higher standards, diversions)</li>
                      <li>Slow Flight & Stalls (Smoother, more precise)</li>
                      <li>Emergency Operations (System failures)</li>
                      <li>High Altitude Operations (If applicable)</li>
                      <li>Postflight Procedures</li>
                    </ul>
                    <p className="mt-4">
                      This certificate allows you to be paid for flying services (within regulatory limits) and demands
                      a higher level of skill and knowledge.
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <CardHeader className="bg-primary/5 border-b p-4">
                    <CardTitle className="text-xl flex items-center gap-3">
                      <PlaneTakeoff className="h-5 w-5 text-primary" /> Multi-Engine Land (MEL)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      <strong>Focus:</strong> Safely operating multi-engine aircraft, especially handling engine-out
                      scenarios (Vmc, drag factors, engine securing).
                    </p>
                    <p className="mb-3">
                      <strong>Key Areas Tested (per Multi-Engine Add-on ACS):</strong>
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
                      <li>Multi-Engine Aerodynamics (Vmc, critical engine)</li>
                      <li>Multi-Engine Systems & Performance</li>
                      <li>Normal Operations (Takeoffs, landings, maneuvers)</li>
                      <li>Engine Failure Before V1 / After Liftoff</li>
                      <li>Engine Inoperative Maneuvering (Ident, Verify, Feather)</li>
                      <li>Engine Inoperative Approaches & Landings</li>
                      <li>Drag Demonstration</li>
                      <li>Emergency Descent (Multi-Engine)</li>
                    </ul>
                    <p className="mt-4">
                      Crucial for airline careers, this rating focuses heavily on asymmetric thrust management and
                      system knowledge.
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <CardHeader className="bg-primary/5 border-b p-4">
                    <CardTitle className="text-xl flex items-center gap-3">
                      <Users className="h-5 w-5 text-primary" /> Certified Flight Instructor (CFI / CFII)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      <strong>Focus:</strong> Teaching ability, explaining complex topics clearly, analyzing student
                      errors, and demonstrating maneuvers from the right seat.
                    </p>
                    <p className="mb-3">
                      <strong>Key Areas Tested (per CFI/FOI ACS):</strong>
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
                      <li>Fundamentals of Instructing (FOI) - Often a separate knowledge test & oral focus</li>
                      <li>Technical Subject Areas (Teaching aerodynamics, weather, regs, etc.)</li>
                      <li>Preflight Lesson Planning</li>
                      <li>Preflight Procedures (Teaching a student)</li>
                      <li>Airport Operations (Teaching)</li>
                      <li>Takeoffs, Landings, Go-Arounds (Teaching & Demo)</li>
                      <li>Fundamentals of Flight (Teaching)</li>
                      <li>Performance Maneuvers (Teaching & Demo)</li>
                      <li>Ground Reference Maneuvers (Teaching & Demo)</li>
                      <li>Slow Flight, Stalls, Spins (Teaching & Demo)</li>
                      <li>Basic Instrument Maneuvers (Teaching - CFII adds full IFR teaching)</li>
                      <li>Emergency Operations (Teaching)</li>
                      <li>Postflight Procedures (Teaching debrief)</li>
                    </ul>
                    <p className="mt-4">
                      These checkrides are notoriously challenging, requiring you to not only know the material but
                      also effectively teach it and perform maneuvers to commercial standards while instructing.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Alert className="mt-8 bg-sky-100 border-sky-300 text-sky-800">
                <Plane className="h-4 w-4 !text-sky-700" />
                <AlertTitle className="text-sky-900">Note on ATP</AlertTitle>
                <AlertDescription className="text-sky-700">
                  The Airline Transport Pilot (ATP) certificate also requires a practical test, typically taken
                  in a simulator as part of an airline's training program after meeting experience requirements.
                  It focuses on advanced systems, airline operations, CRM, and handling complex failures.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        )}

        {currentTab === "final-thoughts" && (
          <div className="space-y-6">
            <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-teal-500/10 flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-teal-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">Final Thoughts & Encouragement</h2>
                  <p className="text-muted-foreground">You've got this – trust your training</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="lead">
                  The checkride is the culmination of countless hours of study, practice, and dedication. It's your
                  opportunity to demonstrate that you've earned the privileges of the certificate or rating you're
                  seeking. Remember these key points as you approach the big day:
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" /> Trust Your Preparation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Your instructor wouldn't sign you off if you weren't ready. You've passed stage checks,
                        mock orals, and countless training flights. You have the knowledge and skills.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Brain className="h-5 w-5 text-primary" /> It's a Demonstration, Not an Inquisition
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        The DPE wants to see you succeed. They are assessing your ability to meet the standard,
                        not trying to trick you. Show them what you know calmly and confidently.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <UserCheck className="h-5 w-5 text-primary" /> Act Like a PIC
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Take command from the moment you meet the DPE. Make safe, reasoned decisions. Use your
                        checklists and resources. Communicate effectively.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Layers className="h-5 w-5 text-primary" /> One Task at a Time
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Don't get overwhelmed. Focus on the current maneuver or question. If you make a mistake,
                        acknowledge it, correct if possible, and move on.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">If Things Don't Go Perfectly...</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <p className="font-medium mb-3">What if you get a Notice of Disapproval?</p>
                  <ul className="space-y-2">
                    <li>
                      It's not the end of the world. It happens. Listen carefully to the DPE's debrief to
                      understand exactly which ACS tasks were unsatisfactory.
                    </li>
                    <li>Work with your instructor to get additional training specifically on those areas.</li>
                    <li>Schedule a retest (usually only covering the failed items) once you're proficient.</li>
                    <li>
                      A disapproval is a learning opportunity. It doesn't define your potential as a pilot. Many
                      excellent airline pilots have a disapproval in their training record.
                    </li>
                  </ul>
                </div>

                <p className="font-medium text-xl mt-8">
                  You've trained hard for this moment. Walk in prepared, stay calm, fly safely, and demonstrate the
                  skills you've worked so diligently to acquire. Good luck!
                </p>

                <div className="mt-10 flex justify-center">
                  <Button size="lg" asChild>
                    <Link href="/resources/checkride-prep">
                      <BookOpen className="mr-2 h-5 w-5" /> Explore Checkride Prep Resources
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      
      <GuideNavigation
        prevPage={prevPage ? { name: prevPage.title, url: prevPage.href } : undefined}
        nextPage={nextPage ? { name: nextPage.title, url: nextPage.href } : undefined}
        currentPageUrl={pathname}
        nextTopicSegue={nextTopicSegue}
      />
    </div>
  );
}

export default function CheckridesPage() {
  const tabs: Tab[] = [
    { value: "what-is-checkride", label: "What is a Checkride", icon: FileText },
    { value: "managing-stress", label: "Managing Stress", icon: HeartPulse },
    { value: "mindset", label: "Winner's Mindset", icon: Award },
    { value: "checkride-types", label: "Checkride Types", icon: Layers },
    { value: "final-thoughts", label: "Final Thoughts", icon: Lightbulb },
  ];

  const prevPage: PageLink | null = {
    title: "Knowledge Tests",
    href: "/guide/knowledge-tests",
  };
  const nextPage: PageLink | null = {
    title: "Career Path",
    href: "/guide/career-path",
  };
  const nextTopicSegue = "Transitioning to a Professional Pilot Career";

  return (
    <AppSidebar>
      <SidebarInset>
        <CheckridesContent
          tabs={tabs}
          prevPage={prevPage}
          nextPage={nextPage}
          nextTopicSegue={nextTopicSegue}
        />
      </SidebarInset>
    </AppSidebar>
  );
}

