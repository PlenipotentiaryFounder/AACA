import type { Metadata } from "next"
import Link from "next/link"
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  Gauge,
  Lightbulb,
  Plane,
  School,
  Target,
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  Brain,
  Layers,
  ShieldCheck,
  Milestone,
  Users,
  Headphones,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset } from "@/components/ui/sidebar"
import { PremiumTabs } from "@/components/premium-tabs"
import { GuideNavigation } from "@/components/guide-navigation"

export const metadata: Metadata = {
  title: "FAA Knowledge Tests | AACA Student Pilot Guide",
  description:
    "Master your FAA knowledge exams with proven strategies and insider tips from the American Airlines Cadet Academy.",
}

type Tab = {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface PageLink {
    name: string;
    url: string;
}

"use client";

import { useState } from "react"
import { usePathname } from 'next/navigation'

interface KnowledgeTestsContentProps {
  tabs: Tab[];
  prevPage: PageLink | null;
  nextPage: PageLink | null;
  nextTopicSegue: string;
}

function KnowledgeTestsContent({ 
  tabs, 
  prevPage, 
  nextPage, 
  nextTopicSegue 
}: KnowledgeTestsContentProps) {
  const pathname = usePathname()
  const [currentTab, setCurrentTab] = useState(tabs[0].value);

  return (
    <div className="container max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-aa-blue to-aa-navy text-white mb-12">
        <div className="absolute inset-0 bg-[url('/images/ground_school.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 px-6 py-16 md:py-24 md:px-12 max-w-4xl">
          <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">Chapter 6</Badge>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            FAA Knowledge Tests
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl">
            Conquer the tests. Clear the way. Fly with confidence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-white text-aa-navy hover:bg-white/90">
              Start Preparing
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              View Test Resources <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
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
          Let's be honest—nobody gets into flight training because they love standardized testing. But here's the
          reality: if you don't take your knowledge exams seriously, they'll become the anchor that slows your whole
          program down. On the flip side, if you handle them early and effectively, they become a launchpad that makes
          everything easier—from checkrides to ground briefings to your own confidence in the cockpit.
        </AlertDescription>
      </Alert>

      <section className="mb-16">
        <PremiumTabs
          tabs={tabs}
          defaultValue={tabs[0].value}
          onChange={setCurrentTab}
          currentValue={currentTab}
          title="Knowledge Test Strategies"
        />

        <div className="pt-8">
          {currentTab === 'what-are-tests' && (
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold">What Are FAA Knowledge Tests?</h2>
                    <p className="text-muted-foreground">Understanding the first gate to every checkride</p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="lead">
                    The FAA doesn't call them "written tests" anymore, because they're not paper-and-pencil exams. They're
                    officially known as Knowledge Tests, and they're taken digitally at FAA-approved testing centers
                    around the country.
                  </p>
                  <p>
                    The name matters—because these tests aren't just about rote memory. They're meant to verify that you
                    actually understand key concepts about flight, safety, navigation, weather, aircraft systems, and FAA
                    regulations.
                  </p>
                  <p className="font-medium">
                    They're designed to make sure you won't be a danger to yourself or others in the air. So yeah—they're
                    a big deal.
                  </p>

                  <h3 className="text-xl font-display font-semibold mt-8 mb-4">How FAA Knowledge Tests Work</h3>
                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Target className="h-5 w-5 text-primary" /> Test Format
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-medium">Location:</span> FAA-approved PSI testing center
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-medium">Endorsement:</span> Required from instructor
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-medium">Format:</span> Digital, multiple-choice with three options
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-medium">Time Limit:</span> 2.5-3 hours (most finish in under 1)
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-medium">Passing Score:</span> 70% (but aim for 90%+)
                            </div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-primary" /> What You're Tested On
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div>ACS/PTS standards for your rating</div>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div>FAA handbooks (PHAK, AFH, IFH, etc.)</div>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div>Regulations (Parts 61, 91, 141)</div>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div>Aeronautical charts and flight planning</div>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div>Weather interpretation</div>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div>Flight instruments and systems</div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className="text-xl font-display font-semibold mt-8 mb-4">Why These Tests Matter</h3>
                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <div className="bg-card rounded-lg p-5 border">
                      <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <Gauge className="h-5 w-5 text-primary" /> Checkride Prerequisite
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        This one's simple: If you haven't passed your Knowledge Test, you're not eligible for the
                        checkride. Full stop.
                      </p>
                      <p>
                        Each stage of your training—Private, Instrument, Commercial, CFI—has its own knowledge test, and
                        you must pass each one before progressing. That means the test isn't optional, and it definitely
                        isn't something you can "deal with later."
                      </p>
                    </div>

                    <div className="bg-card rounded-lg p-5 border">
                      <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <Target className="h-5 w-5 text-primary" /> Checkride Experience
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        The examiner is required by the FAA to review every question you missed on your Knowledge Test
                        during the oral portion of your checkride.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">70% score (18 missed):</span> 18 guaranteed topics for deeper
                            questioning
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">98% score (1-2 missed):</span> More focused, streamlined oral
                            exam
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Alert className="bg-primary/10 border-primary/20 mt-8">
                    <AlertTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5" /> Final Thought
                    </AlertTitle>
                    <AlertDescription>
                      <p className="mt-2">
                        Treat the Knowledge Test like a runway—not a roadblock. It's not something to fear—it's something
                        to get ahead of.
                      </p>
                      <p className="mt-2">
                        It opens doors. It gives you momentum. And once it's done, it clears your head to focus on flying.
                      </p>
                      <p className="mt-2 font-medium">So don't wait. Don't drag your feet. Don't overthink it.</p>
                      <p className="mt-2 font-medium">Study smart, test early, and move forward with confidence.</p>
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </div>
          )}

          {currentTab === 'early-strategy' && (
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold">The Strategy: Get It Done Early & Move On</h2>
                    <p className="text-muted-foreground">Why delaying your written is the fastest way to fall behind</p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="lead">
                    I've seen this happen too many times. A cadet flies great, studies hard, and then… stalls out—because
                    they still haven't taken their knowledge test. Suddenly, checkride day gets pushed. Momentum drops.
                    They start forgetting things. All because they didn't knock it out early.
                  </p>
                  <p className="font-medium">
                    Getting the knowledge test done early isn't just smart—it's vital if you want to finish training on
                    time and with less stress.
                  </p>

                  <h3 className="text-xl font-display font-semibold mt-8 mb-4">
                    Ground School First—Then Take the Test ASAP
                  </h3>
                  <div className="bg-card rounded-lg p-6 border my-6">
                    <h4 className="text-lg font-semibold mb-4">The Ideal Rhythm:</h4>
                    <ol className="space-y-4 mb-4">
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-primary font-medium">1</span>
                        </div>
                        <div>
                          <span className="font-medium">Start your ground school.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-primary font-medium">2</span>
                        </div>
                        <div>
                          <span className="font-medium">Power through the material in 2–3 weeks.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-primary font-medium">3</span>
                        </div>
                        <div>
                          <span className="font-medium">Schedule your exam immediately after.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-primary font-medium">4</span>
                        </div>
                        <div>
                          <span className="font-medium">
                            Pass it. Celebrate (briefly). Then move on to flying full-time.
                          </span>
                        </div>
                      </li>
                    </ol>
                    <p>
                      Dragging out your ground school or pushing off your test just creates overlap, burnout, and
                      frustration. Trying to study for a knowledge test while flying full-time is like trying to change a
                      tire while driving down the highway.
                    </p>
                    <p className="font-medium mt-2">
                      Handle it early. Clear it off your plate. Then you'll be free to fully focus on what matters most:
                      flight proficiency.
                    </p>
                  </div>

                  <h3 className="text-xl font-display font-semibold mt-8 mb-4">Why Early Completion Pays Off</h3>
                  <div className="grid md:grid-cols-3 gap-6 my-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-primary" /> Better Pass Rates
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          Cadets who pass their knowledge tests early in each stage tend to pass their checkrides on the
                          first attempt.
                        </p>
                        <p>
                          Their heads are clear. They're not juggling last-minute studying or trying to cram theory the
                          night before a practical exam.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Clock className="h-5 w-5 text-primary" /> Avoid Bottlenecks
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          At many flight schools, your checkride timeline depends on when you pass your written.
                        </p>
                        <p>
                          DPEs can't even be scheduled until your knowledge test is complete. So if you wait too long,
                          you're not just delaying your test—you're delaying the next stage of your career.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Plane className="h-5 w-5 text-primary" /> Momentum is Everything
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          Flight training works best when you build on success. Early wins build confidence and keep you
                          moving.
                        </p>
                        <p>
                          Knocking out your knowledge test early gives you a huge mental boost and keeps you in rhythm.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className="text-xl font-display font-semibold mt-8 mb-4">The 2–3 Week Ground School Rule</h3>
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
                    <p className="mb-4">
                      You don't need months to get through ground school. Most structured courses can be finished in 20–40
                      hours.
                    </p>
                    <p className="mb-4">If you treat it like a job—even a part-time one—you can finish in:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>2–3 weeks if you study a couple hours a day</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Faster if you go all-in (weekend warriors, this is you)</span>
                      </li>
                    </ul>
                    <p className="font-medium">Whatever you do: Don't let it stretch out.</p>
                    <p>If you're still "almost done with ground school" after five weeks… you're already behind.</p>
                  </div>

                  <Alert className="bg-amber-500/10 border-amber-500/20 mt-8">
                    <AlertTitle className="flex items-center gap-2 text-amber-600">
                      <AlertTriangle className="h-5 w-5" /> But What If I'm Not Ready?
                    </AlertTitle>
                    <AlertDescription className="text-amber-700 dark:text-amber-400">
                      <p className="mt-2">
                        If you've gone through the course and still feel shaky, don't just guess your way through the
                        test—pause and review. Talk to your instructor. Ask for clarity. Hit the books again.
                      </p>
                      <p className="mt-2">
                        But still aim to test within days, not months, of finishing your ground course.
                      </p>
                      <p className="mt-2 font-medium">
                        Rule of Thumb: If you're more than 3 weeks past your final ground lesson and still haven't taken
                        the test, it's time to ask yourself why—and fix it.
                      </p>
                    </AlertDescription>
                  </Alert>

                  <Alert className="bg-primary/10 border-primary/20 mt-8">
                    <AlertTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5" /> Final Thought
                    </AlertTitle>
                    <AlertDescription>
                      <p className="mt-2">The knowledge test isn't a finish line. It's a springboard.</p>
                      <p className="mt-2">
                        It clears mental space. It speeds up your training. And it shows your instructor—and yourself—that
                        you're serious.
                      </p>
                      <p className="mt-2 font-medium">Get it done. Move on. And never look back.</p>
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </div>
          )}

          {currentTab === 'sheppard-air' && (
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold">
                      The Hack: Using Sheppard Air to Crush the Knowledge Test
                    </h2>
                    <p className="text-muted-foreground">Memorize it. Master it. Move on.</p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="lead">
                    I've used Sheppard Air for every knowledge test I could—and every time, I walked in confident and
                    walked out with a score in the 90s. It's not fancy. It doesn't try to "teach" you. But that's the
                    point: Sheppard Air is about passing the test, period.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-card rounded-xl border p-6">
                      <h3 className="text-xl font-display font-semibold mb-4">What Is Sheppard Air?</h3>
                      <p className="mb-4">It's a no-frills FAA test prep program designed specifically for one thing:</p>
                      <p className="font-medium text-lg text-center p-4 bg-primary/10 rounded-lg">
                        Helping you memorize every possible test question and answer.
                      </p>
                      <p className="mt-4 text-center">And guess what? That's exactly what you need.</p>
                    </div>

                    <div className="bg-card rounded-xl border p-6">
                      <h3 className="text-xl font-display font-semibold mb-4">Why It Works</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">Rote Memorization:</span> You'll see the same questions you'll
                            see on the test. Over and over. Until you can't get them wrong.
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">Strict Focus:</span> There's no fluff, no extra videos, no
                            wasted time. Just pure, targeted prep.
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">Proven Results:</span> Used by thousands of pilots—from cadets
                            to airline captains—with a near-flawless track record for passing.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-semibold mt-8 mb-4">How to Use It Right</h3>
                  <div className="bg-card rounded-lg p-6 border my-6">
                    <ol className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-primary font-medium">1</span>
                        </div>
                        <div>
                          <span className="font-medium">Buy the Program</span> (usually ~$45–$65 per test—it's worth every
                          penny).
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-primary font-medium">2</span>
                        </div>
                        <div>
                          <span className="font-medium">Follow the Study Strategy Exactly</span>—Sheppard gives you a
                          step-by-step system. Don't improvise.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-primary font-medium">3</span>
                        </div>
                        <div>
                          <span className="font-medium">Don't Mix It With Other Tools.</span> It's designed to work best
                          when used on its own.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-primary font-medium">4</span>
                        </div>
                        <div>
                          <span className="font-medium">Take the Test Soon After Finishing.</span> Don't let the info
                          fade—get in, get it done.
                        </div>
                      </li>
                    </ol>
                  </div>

                  <h3 className="text-xl font-display font-semibold mt-8 mb-4">When to Use It</h3>
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
                    <p className="mb-4 font-medium">Use Sheppard Air for:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Instrument Rating (IRA)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Commercial (CAX)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Flight Instructor (FIA, FOI)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Flight Instructor Instrument (FII)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Ground Instructor (AGI, IGI)</span>
                      </li>
                    </ul>
                    <div className="bg-amber-500/10 p-4 rounded-lg border border-amber-500/20">
                      <p className="font-medium text-amber-700 dark:text-amber-400 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" /> Note: Sheppard does not offer prep for the Private Pilot
                        Knowledge Test (we'll cover that next).
                      </p>
                    </div>
                  </div>

                  <Alert className="bg-primary/10 border-primary/20 mt-8">
                    <AlertTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5" /> Final Thought
                    </AlertTitle>
                    <AlertDescription>
                      <p className="mt-2">
                        You're not using Sheppard to understand the material—you're using it to clear the test. Once it's
                        out of the way, then you focus on deeper understanding through flying and application.
                      </p>
                      <p className="mt-2 font-medium">Don't overthink it.</p>
                      <p className="mt-2 font-medium">Buy it. Use it. Crush the test. Done.</p>
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </div>
          )}

          {currentTab === 'scoring' && (
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold">What Happens If You Don't Score 100%?</h2>
                    <p className="text-muted-foreground">Every missed question = more heat on your checkride</p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="lead">
                    When I took my Instrument Knowledge Test, I missed one question. Just one. And guess what my DPE
                    opened with? "Let's talk about that missed question on VOR reverse sensing…" It wasn't even hard—I
                    just misread it. But the DPE didn't care. His job was to dig in, and he did.
                  </p>
                  <p className="font-medium">
                    That's when I realized: on the checkride, every missed question becomes a target.
                  </p>

                  <div className="bg-card rounded-xl border p-6 my-8">
                    <h3 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
                      <AlertTriangle className="h-6 w-6 text-amber-500" /> The DPE Is Required to Review Every Missed
                      Question
                    </h3>
                    <p className="mb-4">This isn't optional—it's FAA regulation.</p>
                    <p className="mb-4">
                      When you show up to your checkride, the examiner will have your knowledge test report (AKTR) in
                      hand. And if you missed 8 questions? You've just given them 8 guaranteed topics to quiz you on
                      during your oral exam.
                    </p>
                    <p className="font-medium">You're literally feeding them the blueprint for where to press you.</p>
                  </div>

                  <h3 className="text-xl font-display font-semibold mt-8 mb-4">
                    Fewer Missed Questions = Smoother Checkride
                  </h3>
                  <div className="bg-card rounded-lg p-6 border my-6">
                    <p className="mb-4 font-medium">It's simple math:</p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                        <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">1 missed question</span> = quick follow-up
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
                        <AlertTriangle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">10 missed questions</span> = extended oral grilling
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                        <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">18+ missed questions</span> = they're digging through everything
                          you've ever learned
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 font-medium">
                      So yeah—while 70% technically passes, that's the bare minimum, and it will come back around later.
                    </p>
                    <p className="font-medium">Aim for the 90s. Not just for pride—but for peace.</p>
                  </div>

                  <Alert className="bg-primary/10 border-primary/20 mt-8">
                    <AlertTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5" /> Final Thought
                    </AlertTitle>
                    <AlertDescription>
                      <p className="mt-2">This isn't about perfection—it's about preparation.</p>
                      <p className="mt-2">
                        Look, nobody expects you to get 100% every time. But the fewer gaps you leave on that test, the
                        fewer vulnerabilities you walk into your checkride with.
                      </p>
                      <p className="mt-2 font-medium">Don't hand the examiner ammo.</p>
                      <p className="mt-2 font-medium">Control the narrative before it starts.</p>
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </div>
          )}

          {currentTab === 'private-pilot' && (
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Plane className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold">The Exception: The Private Pilot Knowledge Test</h2>
                    <p className="text-muted-foreground">The one test you can't use Sheppard Air for</p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <Alert className="bg-amber-500/10 border-amber-500/20 mb-6">
                    <AlertTitle className="flex items-center gap-2 text-amber-600">
                      <AlertTriangle className="h-5 w-5" /> Quick Tip
                    </AlertTitle>
                    <AlertDescription className="text-amber-700 dark:text-amber-400">
                      This is the only knowledge test you'll take without Sheppard Air—and that's important to know
                      upfront so you don't waste time searching for something that doesn't exist.
                    </AlertDescription>
                  </Alert>

                  <h3 className="text-xl font-display font-semibold mt-8 mb-4">Why It's Different</h3>
                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <div className="bg-card rounded-lg p-5 border">
                      <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle className="h-5 w-5 text-amber-500" />
                        <h4 className="text-lg font-semibold">No Sheppard Air Support</h4>
                      </div>
                      <p>Sheppard doesn't offer a prep course for the Private Pilot Knowledge Test.</p>
                    </div>

                    <div className="bg-card rounded-lg p-5 border">
                      <div className="flex items-center gap-2 mb-3">
                        <Brain className="h-5 w-5 text-primary" />
                        <h4 className="text-lg font-semibold">More Conceptual Questions</h4>
                      </div>
                      <p>
                        The questions tend to be worded more vaguely and require true understanding—not just memorization.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-semibold mt-8 mb-4">Best Tools for Prep</h3>
                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Sporty's Private Pilot Course</CardTitle>
                        <CardDescription>Great video and quiz content, close to actual test format</CardDescription>
                      </CardHeader>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">King Schools</CardTitle>
                        <CardDescription>
                          Slightly slower-paced but thorough and friendly for first-timers
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Flight Ready</CardTitle>
                        <CardDescription>Another solid option, especially if your school provides it</CardDescription>
                      </CardHeader>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">FAA Sample Tests</CardTitle>
                        <CardDescription>Free from the FAA website, mirrors the format and structure</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>

                  <Alert className="bg-primary/10 border-primary/20 mt-8">
                    <AlertTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5" /> Final Word
                    </AlertTitle>
                    <AlertDescription>
                      <p className="mt-2">
                        This test will demand a bit more thinking, but that's a good thing—it's the foundation of your
                        entire aviation education. Study hard, review your wrong answers, and aim high.
                      </p>
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </div>
          )}

          {currentTab === 'test-order' && (
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold">
                      Taking Tests in the Right Order – The Smart Strategy
                    </h2>
                    <p className="text-muted-foreground">Stack your exams. Maximize results. Get ahead.</p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="lead">
                    I'll be honest—when I first heard about "stacking" knowledge tests, I thought it was overkill. Why
                    take more tests than you have to? But once I understood how much overlap there was—and how those extra
                    exams could boost my resume, confidence, and credibility—I realized: this isn't about doing more. It's
                    about doing it smarter.
                  </p>

                  <h3 className="text-xl font-display font-semibold mt-8 mb-4">
                    Let's Break It Down: Must-Take vs. Smart-to-Take
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <div className="bg-card rounded-xl border p-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" /> Knowledge Tests You Must Take
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        These are required by the FAA to progress through training and qualify for your checkride:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">Private Pilot – PAR</span> (Required before your private
                            checkride)
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">Instrument Rating – IRA</span> (Required before your instrument
                            checkride)
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">Commercial Pilot – CAX</span> (Required before your commercial
                            checkride)
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">Flight Instructor – FIA & FOI</span> (Required before your CFI
                            checkride)
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">Flight Instructor Instrument – FII</span> (Required before CFII
                            checkride)
                          </div>
                        </li>
                      </ul>
                      <p className="mt-4">
                        Each of these requires an instructor endorsement, and you'll need to pass them before taking the
                        corresponding practical test (checkride). These are your non-negotiables.
                      </p>
                    </div>

                    <div className="bg-card rounded-xl border p-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" /> Knowledge Tests You Should Take
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        These tests aren't required—but taking them is a power move that separates the average cadet from
                        the career-minded professional.
                      </p>
                      <div className="space-y-4">
                        <div className="bg-muted p-4 rounded-lg">
                          <h5 className="font-medium mb-2">AGI – Advanced Ground Instructor</h5>
                          <ul className="space-y-1">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>Same question bank as FIA</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>Allows you to endorse students for knowledge tests</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>Adds "Advanced Ground Instructor" to your certs and resume</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-muted p-4 rounded-lg">
                          <h5 className="font-medium mb-2">IGI – Instrument Ground Instructor</h5>
                          <ul className="space-y-1">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>Same content as IRA and FII</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>Allows you to teach instrument ground school legally</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>Looks great if you plan to teach or mentor at a flight school</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-primary/10 p-3 rounded-lg mt-4">
                        <p className="text-sm font-medium flex items-center gap-2">
                          <Lightbulb className="h-4 w-4 text-primary" /> Pro Tip: You don't need a separate endorsement
                          for AGI or IGI. You can take these as soon as you're ready.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-semibold mt-8 mb-4">
                    Smart Pairings to Stack Tests Efficiently
                  </h3>
                  <div className="bg-card rounded-lg p-6 border my-6">
                    <p className="mb-4 font-medium">
                      If you're already studying for one of these, you're 80–90% ready for the others:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <h4 className="font-medium mb-3">IRA → FII → IGI</h4>
                        <p>Take your Instrument test (IRA), then FII right after, followed by IGI.</p>
                        <p className="mt-2">Minimal extra effort. Huge payoff.</p>
                      </div>

                      <div className="bg-primary/10 p-4 rounded-lg">
                        <h4 className="font-medium mb-3">CAX → FIA → AGI</h4>
                        <p>
                          Same strategy here: crush Commercial (CAX), roll right into Flight Instructor Airplane (FIA),
                          and then knock out AGI.
                        </p>
                        <p className="mt-2">It's basically the same test three times with small tweaks.</p>
                      </div>
                    </div>
                    <p className="mt-4 font-medium">
                      Stack them within days while it's still fresh. You'll save time, reduce study fatigue, and walk away
                      with more credentials than most CFIs ever bother to get.
                    </p>
                  </div>

                  <h3 className="text-xl font-display font-semibold mt-8 mb-4">Why These Extra Tests Matter</h3>
                  <div className="grid md:grid-cols-3 gap-4 my-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary" /> They Show Confidence
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>A cadet who takes initiative to earn more credentials stands out.</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Plane className="h-5 w-5 text-primary" /> They Open Doors
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>AGI and IGI give you more teaching privileges—even before you're done flying.</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <School className="h-5 w-5 text-primary" /> Gold Seal CFI
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>
                          They help you qualify for the FAA's Gold Seal CFI program—a badge of honor that says, "This
                          instructor knows their stuff."
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
                    <p className="font-medium mb-2">And here's the kicker:</p>
                    <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <Award className="h-6 w-6 text-amber-500" />
                      <p className="font-medium">
                        AGI + CFI + 10 students passing their knowledge tests under your instruction = Gold Seal CFI
                      </p>
                    </div>
                  </div>

                  <Alert className="bg-primary/10 border-primary/20 mt-8">
                    <AlertTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5" /> Final Thought
                    </AlertTitle>
                    <AlertDescription>
                      <p className="mt-2">You're already studying. You're already grinding.</p>
                      <p className="mt-2">So why not get the most out of it?</p>
                      <p className="mt-2 font-medium">Stack your exams.</p>
                      <p className="mt-2 font-medium">Add the ground instructor ratings.</p>
                      <p className="mt-2 font-medium">
                        And start building the kind of resume that speaks volumes before you even hit 1,500 hours.
                      </p>
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <GuideNavigation
        prevPage={prevPage ? { name: prevPage.name, url: prevPage.url } : undefined}
        nextPage={nextPage ? { name: nextPage.name, url: nextPage.url } : undefined}
        currentPageUrl={pathname}
        nextTopicSegue={nextTopicSegue}
      />
    </div>
  );
}

export default function KnowledgeTestsPage() {
  const tabs: Tab[] = [
    {
      value: "what-are-tests",
      label: "What Are Tests",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      value: "early-strategy",
      label: "Early Strategy",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      value: "sheppard-air",
      label: "Sheppard Air",
      icon: <Brain className="h-5 w-5" />,
    },
    {
      value: "scoring",
      label: "Scoring Impact",
      icon: <Target className="h-5 w-5" />,
    },
    {
      value: "private-pilot",
      label: "Private Pilot",
      icon: <Plane className="h-5 w-5" />,
    },
    {
      value: "test-order",
      label: "Test Order",
      icon: <Layers className="h-5 w-5" />,
    },
  ];

  const prevPage: PageLink | null = { name: "Flight Training", url: "/guide/flight-training" };
  const nextPage: PageLink | null = { name: "Checkrides", url: "/guide/checkrides" };
  const nextTopicSegue = "With knowledge tests mastered, the next hurdle is the practical exam. Let's move on to Checkrides, covering preparation, mindset, and common pitfalls to ensure you pass with confidence.";

  return (
    <main className="min-h-screen">
      <AppSidebar />
      <SidebarInset>
        <KnowledgeTestsContent
          tabs={tabs}
          prevPage={prevPage}
          nextPage={nextPage}
          nextTopicSegue={nextTopicSegue}
        />
      </SidebarInset>
    </main>
  );
}

