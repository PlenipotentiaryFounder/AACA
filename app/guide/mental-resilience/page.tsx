import type { Metadata } from "next"
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
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Mental Resilience | AACA Student Pilot Guide",
  description:
    "Strategies for managing stress, avoiding burnout, and building mental resilience during flight training.",
}

// --- Client Component --- 
"use client";

function MentalResilienceContent() {
  // All the original JSX content goes here
  return (
    <div className="container py-6 lg:py-10">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-10 sm:px-12 sm:py-16 mb-10 text-white">
        <div className="relative z-10 max-w-3xl">
          <h1 className="font-heading text-4xl font-bold tracking-tight lg:text-5xl mb-4">Mental Resilience</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Building the psychological strength to thrive during flight training and throughout your aviation career
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <Brain className="mr-1.5 h-4 w-4" />
              <span>Stress Management</span>
            </div>
            <div className="flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <Zap className="mr-1.5 h-4 w-4" />
              <span>Performance Psychology</span>
            </div>
            <div className="flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <Heart className="mr-1.5 h-4 w-4" />
              <span>Wellbeing</span>
            </div>
          </div>
        </div>

        {/* Abstract background elements */}
        <div className="absolute right-0 top-0 -mt-16 h-64 w-64 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 -mb-24 h-64 w-64 rounded-full bg-indigo-600 opacity-20 blur-3xl"></div>
      </div>

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

      {/* Main Content Tabs */}
      <Tabs defaultValue="managing-stress" className="space-y-8">
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Core Mental Resilience Topics</h2>
          <TabsList className="h-auto flex flex-wrap md:flex-nowrap p-1 md:h-11">
            <TabsTrigger
              value="managing-stress"
              className="flex items-center gap-2 h-9 md:h-8 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Brain className="h-4 w-4" />
              <span>Managing Stress</span>
            </TabsTrigger>
            <TabsTrigger
              value="avoiding-burnout"
              className="flex items-center gap-2 h-9 md:h-8 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Zap className="h-4 w-4" />
              <span>Avoiding Burnout</span>
            </TabsTrigger>
            <TabsTrigger
              value="impostor-syndrome"
              className="flex items-center gap-2 h-9 md:h-8 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Lightbulb className="h-4 w-4" />
              <span>Impostor Syndrome</span>
            </TabsTrigger>
            <TabsTrigger
              value="maslows-hierarchy"
              className="flex items-center gap-2 h-9 md:h-8 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Layers className="h-4 w-4" />
              <span>Maslow's Hierarchy</span>
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Managing Stress & Setbacks Tab */}
        <TabsContent value="managing-stress" className="space-y-6">
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
                      juggle perfection with performance.
                    </p>
                  </li>
                </ul>
                <p className="mt-4 text-muted-foreground italic">
                  The challenge is not to eliminate setbacks—but to manage your mindset when they occur.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium">Mental Tools for High-Performance Recovery</h3>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-medium">1. Deconstruct the Problem</AccordionTrigger>
                    <AccordionContent className="space-y-3 pb-6">
                      <p>Stress often feels bigger than it is. The solution is structure. Ask:</p>

                      <ul className="space-y-2 ml-6 list-disc">
                        <li>
                          What specifically isn't working? (Is it checklists? Confidence on radios? Study habits?)
                        </li>
                        <li>Is this a one-off, or a pattern?</li>
                        <li>What action can I take right now to address it?</li>
                      </ul>

                      <p className="font-medium text-primary">
                        Write it down. Review it with your CFI. Don't internalize—analyze.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-medium">
                      2. Break the Spiral with Small Wins
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3 pb-6">
                      <p>Psychological momentum is real. When motivation dips, find frictionless goals:</p>

                      <ul className="space-y-2 ml-6 list-disc">
                        <li>Re-fly a maneuver in the sim.</li>
                        <li>Review one ACS task, not ten.</li>
                        <li>Run a perfect preflight from memory.</li>
                      </ul>

                      <p className="font-medium text-primary">
                        Each win restores clarity and control—and gets you back on track.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-medium">3. Build a Support System Early</AccordionTrigger>
                    <AccordionContent className="space-y-3 pb-6">
                      <p>Most cadets wait until they're overwhelmed to seek support. Don't. Start from day one:</p>

                      <ul className="space-y-2 ml-6 list-disc">
                        <li>Connect with upperclassmen.</li>
                        <li>Form study groups.</li>
                        <li>Check in with peers weekly.</li>
                        <li>Lean on mentors and training advisors.</li>
                      </ul>

                      <p className="font-medium text-primary">
                        You'll be surprised how many cadets share the same doubts—and how quickly shared experience can
                        become shared strength.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-medium">
                      4. Normalize Failure Without Lowering Standards
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3 pb-6">
                      <p>
                        You're not here to get everything right the first time. You're here to improve. Missing a
                        maneuver, scoring low on a quiz, or even failing a stage check doesn't define you. What matters
                        is:
                      </p>

                      <ul className="space-y-2 ml-6 list-disc">
                        <li>Do you know why it happened?</li>
                        <li>Have you taken steps to correct it?</li>
                        <li>Can you articulate the lesson learned?</li>
                      </ul>

                      <p className="font-medium text-primary">
                        That's what instructors and examiners respect—and what the industry looks for long-term.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 p-6 border border-blue-100 dark:border-blue-900">
                <h3 className="text-xl font-medium mb-3">Mindset Is the System</h3>
                <p className="text-lg">
                  Stress isn't a signal to stop—it's a sign you've hit your current limit. With the right tools, that
                  limit becomes a threshold—not a wall.
                </p>
                <p className="mt-2 font-medium text-primary">
                  This is what separates students who get through training from those who grow through training.
                </p>
              </div>
            </div>

            {/* Sidebar Card */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Resources for managing training challenges.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-2">
                  <Button variant="outline" className="justify-start gap-2">
                    <BookOpen className="h-4 w-4" />
                    Read: Overcoming Plateaus
                  </Button>
                  <Button variant="outline" className="justify-start gap-2">
                    <Clock className="h-4 w-4" />
                    Schedule Mentor Session
                  </Button>
                  <Button variant="outline" className="justify-start gap-2">
                    <Compass className="h-4 w-4" />
                    Explore Wellbeing Resources
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Avoiding Burnout Tab */}
        <TabsContent value="avoiding-burnout" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold">Avoiding Burnout: The Long-Game Mentality</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  Burnout in flight training doesn't happen all at once—it builds slowly. You push through long weeks.
                  You stop sleeping well. You start flying just to check a box. You forget why you're here.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900 p-5">
                  <h3 className="text-lg font-medium mb-3 text-red-800 dark:text-red-300 flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-red-600 dark:text-red-400" />
                    Warning Signs of Burnout
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-4 w-4 rounded-full bg-red-200 dark:bg-red-800 flex items-center justify-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-red-600 dark:bg-red-400"></div>
                      </div>
                      <span className="text-sm">Loss of interest in flying</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-4 w-4 rounded-full bg-red-200 dark:bg-red-800 flex items-center justify-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-red-600 dark:bg-red-400"></div>
                      </div>
                      <span className="text-sm">Mental drain during ground school</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-4 w-4 rounded-full bg-red-200 dark:bg-red-800 flex items-center justify-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-red-600 dark:bg-red-400"></div>
                      </div>
                      <span className="text-sm">Simple mistakes in the airplane</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-4 w-4 rounded-full bg-red-200 dark:bg-red-800 flex items-center justify-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-red-600 dark:bg-red-400"></div>
                      </div>
                      <span className="text-sm">Feeling overwhelmed without solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-4 w-4 rounded-full bg-red-200 dark:bg-red-800 flex items-center justify-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-red-600 dark:bg-red-400"></div>
                      </div>
                      <span className="text-sm">More effort, less return</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-100 dark:border-green-900 p-5">
                  <h3 className="text-lg font-medium mb-3 text-green-800 dark:text-green-300 flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
                    Breaking Through Plateaus
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-4 w-4 rounded-full bg-green-200 dark:bg-green-800 flex items-center justify-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></div>
                      </div>
                      <span className="text-sm">Fly for fun to reset your mindset</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-4 w-4 rounded-full bg-green-200 dark:bg-green-800 flex items-center justify-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></div>
                      </div>
                      <span className="text-sm">Switch focus to a different skill</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-4 w-4 rounded-full bg-green-200 dark:bg-green-800 flex items-center justify-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></div>
                      </div>
                      <span className="text-sm">Debrief differently with your instructor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-4 w-4 rounded-full bg-green-200 dark:bg-green-800 flex items-center justify-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></div>
                      </div>
                      <span className="text-sm">Take strategic rest days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-4 w-4 rounded-full bg-green-200 dark:bg-green-800 flex items-center justify-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></div>
                      </div>
                      <span className="text-sm">Communicate openly with your CFI</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium">Build a Sustainable Routine</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="hover:shadow-md transition-all hover:-translate-y-1">
                    <CardHeader className="pb-2">
                      <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-2">
                        <Clock className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <CardTitle className="text-lg">Sleep Is Non-Negotiable</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        You cannot out-study a tired brain. Sleep drives retention, reaction time, and judgment.
                      </p>
                      <ul className="mt-3 space-y-1 text-sm ml-5 list-disc">
                        <li>Set a consistent sleep schedule.</li>
                        <li>Avoid caffeine late in the day.</li>
                        <li>Don't trade sleep for last-minute studying.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-md transition-all hover:-translate-y-1">
                    <CardHeader className="pb-2">
                      <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-2">
                        <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <CardTitle className="text-lg">Move Your Body</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Exercise sharpens your mind. Even 20–30 minutes of movement a day can clear mental fog and
                        improve mood.
                      </p>
                      <ul className="mt-3 space-y-1 text-sm ml-5 list-disc">
                        <li>Walk, run, stretch, lift—just move.</li>
                        <li>Exercise improves sleep quality too.</li>
                        <li>Use movement to break up study sessions.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-md transition-all hover:-translate-y-1">
                    <CardHeader className="pb-2">
                      <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-2">
                        <Heart className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <CardTitle className="text-lg">Don't Neglect Joy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Hobbies, nature, music, cooking, family, laughter—these aren't distractions, they're essential.
                      </p>
                      <ul className="mt-3 space-y-1 text-sm ml-5 list-disc">
                        <li>Schedule time for things you enjoy.</li>
                        <li>Maintain connections outside aviation.</li>
                        <li>Find activities that fully disconnect you.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 p-6 border border-indigo-100 dark:border-indigo-900">
                <h3 className="text-xl font-medium mb-3">Burnout Is Preventable</h3>
                <p className="text-lg">
                  The airline industry doesn't just need skilled pilots—it needs durable ones. Pilots who can show up
                  with focus and composure, day after day.
                </p>
                <p className="mt-2 font-medium text-primary">
                  Flight training isn't about sprinting to the finish. It's about building the kind of consistency and
                  resilience that will serve you for decades.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                    Quick Reference
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm">Recognize burnout warning signs early</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm">Use strategic breaks to overcome plateaus</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm">Prioritize sleep, exercise, and joy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm">Build sustainable habits for the long term</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <Lightbulb className="h-5 w-5 mr-2 text-amber-500" />
                    Pro Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm italic">
                      "I schedule one 'fun flight' per month—no maneuvers, no training objectives. Just enjoying the
                      view and remembering why I love aviation."
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">— Commercial student</p>
                  </div>

                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm italic">
                      "The 'Pomodoro Technique' saved my studying: 25 minutes of focused work, 5 minute break. After 4
                      cycles, take a longer 30 minute break."
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">— Instrument student</p>
                  </div>
                </CardContent>
              </Card>

              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-indigo-600/90 z-10"></div>
                <div className="absolute inset-0 bg-[url('/images/sunset-flight-over-clouds.jpg')] bg-cover bg-center opacity-40"></div>
                <div className="relative z-20 p-6 text-white">
                  <h3 className="text-xl font-medium mb-3">Burnout Assessment</h3>
                  <p className="text-sm mb-4">
                    Take our confidential burnout assessment to gauge your current state and get personalized
                    recommendations.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50"
                  >
                    Take Assessment
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Impostor Syndrome Tab */}
        <TabsContent value="impostor-syndrome" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="h-4 w-4 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold">Recognizing & Overcoming Impostor Syndrome</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  It doesn't matter if you're brand new or nearing your commercial checkride—every cadet questions
                  themselves at some point.
                </p>
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-4">Common Impostor Thoughts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg bg-muted p-4 italic text-muted-foreground">
                    "Am I really good enough to be here?"
                  </div>
                  <div className="rounded-lg bg-muted p-4 italic text-muted-foreground">
                    "Did I just get lucky on that stage check?"
                  </div>
                  <div className="rounded-lg bg-muted p-4 italic text-muted-foreground">
                    "Everyone else seems more confident—am I falling behind?"
                  </div>
                  <div className="rounded-lg bg-muted p-4 italic text-muted-foreground">
                    "They're going to realize I don't belong here."
                  </div>
                </div>
                <p className="mt-4 font-medium">
                  This is impostor syndrome. And it's more common in aviation than people admit.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium">Why This Program Creates Impostor Syndrome</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-2">
                        <Star className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <CardTitle className="text-base">Selected from Thousands</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Being chosen from a competitive pool can make you feel like you have something to prove or that
                        you slipped through the cracks.
                      </p>
                      <p className="mt-3 text-sm font-medium text-primary">
                        You weren't chosen by accident. The process selected you for your potential.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-2">
                        <Compass className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <CardTitle className="text-base">Rarely Flying Solo</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Most of your flying is with a CFI watching your every move, making it hard to build true PIC
                        confidence.
                      </p>
                      <p className="mt-3 text-sm font-medium text-primary">
                        Every decision you make under supervision still builds PIC authority. Own your decisions.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-2">
                        <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <CardTitle className="text-base">Compressed Timelines</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Accelerated syllabi make you feel like you're sprinting, and any hiccup can make you feel like
                        you're falling apart.
                      </p>
                      <p className="mt-3 text-sm font-medium text-primary">
                        That's not failure. That's pressure—which builds precision if you learn to manage it.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Alert className="bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-900">
                <Shield className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <AlertTitle className="text-blue-800 dark:text-blue-300">How to Defeat Impostor Syndrome</AlertTitle>
                <AlertDescription className="text-blue-700 dark:text-blue-400">
                  Impostor syndrome isn't just in your head—it affects your performance. But with the right strategies,
                  you can overcome it.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-medium">
                      1. Measure Backward, Not Just Forward
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3 pb-6">
                      <p>
                        It's easy to feel inadequate if you're only looking at where you still need to go. Instead, stop
                        and look at how far you've already come.
                      </p>

                      <div className="rounded-lg bg-muted p-4">
                        <p className="text-sm">
                          <span className="font-medium">Then:</span> You didn't know how to preflight an airplane 3
                          months ago.
                        </p>
                        <p className="text-sm mt-2">
                          <span className="font-medium">Now:</span> You're briefing diversions, calling ATC, and
                          calculating weight and balance.
                        </p>
                        <p className="text-sm font-medium text-primary mt-2">That's growth. That's real.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-medium">2. Teach, Share, Mentor</AccordionTrigger>
                    <AccordionContent className="space-y-3 pb-6">
                      <p>
                        You don't have to be a CFI to help a peer. Explain something you learned last week. Talk through
                        an approach plate. Share your worst flight story and what you learned.
                      </p>

                      <p>Teaching proves two things:</p>

                      <ol className="space-y-1 ml-6 list-decimal">
                        <li>You know more than you think.</li>
                        <li>You're not alone in the struggle.</li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-medium">3. Communicate With Your CFI</AccordionTrigger>
                    <AccordionContent className="space-y-3 pb-6">
                      <p>
                        You may feel behind, but your instructor may see real progress. They're not looking for
                        perfection—they're watching how you handle pressure, recover from mistakes, and grow over time.
                      </p>

                      <p className="font-medium text-primary">If you're feeling doubt, talk about it. Don't hide it.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-medium">
                      4. Know What Airlines Actually Want
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3 pb-6">
                      <p>
                        Airlines don't want robots with perfect checkride scores. They want pilots who are self-aware,
                        coachable, and resilient. If you've struggled and grown from it, that's a green flag.
                      </p>

                      <div className="rounded-lg bg-muted p-4">
                        <p className="text-sm italic">Impostor syndrome tells you your setbacks make you weak.</p>
                        <p className="text-sm font-medium mt-2">
                          Reality? They're building your story—the one that proves you're ready for this industry.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 p-6 border border-purple-100 dark:border-purple-900">
                <h3 className="text-xl font-medium mb-3">The Truth About Confidence</h3>
                <p className="text-lg">
                  Confidence isn't some magical personality trait. It's built through repetition, reflection, and
                  recovery.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <span>Flying when it's hard.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <span>Admitting what you don't know.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <span>Learning how to improve—then doing it.</span>
                  </li>
                </ul>
                <p className="mt-4 font-medium text-primary">
                  If you're doing the work, you belong here. The uniform, the call sign, the epaulets—they don't make
                  you a pilot. The mindset does.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                    Quick Reference
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm">Look back at your progress, not just forward</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm">Share knowledge to reinforce your own learning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm">Be open with your instructor about doubts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm">Value resilience over perfection</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <Lightbulb className="h-5 w-5 mr-2 text-amber-500" />
                    Pro Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm italic">
                      "I keep a folder of positive feedback from instructors. On days when I feel like an impostor, I
                      read through it to remind myself that I'm making progress."
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">— Instrument student</p>
                  </div>

                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm italic">
                      "When I hear that voice saying 'you don't belong here,' I ask myself: 'Would I say this to another
                      cadet?' The answer is always no."
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">— Commercial student</p>
                  </div>
                </CardContent>
              </Card>

              <div className="rounded-xl overflow-hidden border">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 text-white">
                  <h3 className="font-medium">Impostor Syndrome Poll</h3>
                  <p className="text-sm text-purple-100">From a survey of 200 AACA cadets</p>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Have experienced impostor syndrome</span>
                        <span className="font-medium">87%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-purple-600 rounded-full" style={{ width: "87%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Felt it most during checkride prep</span>
                        <span className="font-medium">64%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-600 rounded-full" style={{ width: "64%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Said talking to peers helped most</span>
                        <span className="font-medium">72%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: "72%" }}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    You're not alone. This is a normal part of the journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Maslow's Hierarchy Tab */}
        <TabsContent value="maslows-hierarchy" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Layers className="h-4 w-4 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold">Maslow's Hierarchy of Needs in Flight Training</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  You can grind all day. You can memorize every V-speed and chair fly every maneuver. But if you're
                  sleep-deprived, stressed out, isolated, and living off gas station snacks—you're not training at full
                  capacity. Not even close.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-xl border p-6">
                <div className="relative z-10">
                  <h3 className="text-xl font-medium mb-4">Maslow's Hierarchy Applied to Flight Training</h3>
                  <p className="mb-6">
                    Maslow's Hierarchy of Needs explains this perfectly. It's a psychological model that lays out the
                    five layers of human motivation and performance—starting with basic survival and building all the
                    way to peak performance.
                  </p>

                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-400 via-amber-400 to-green-400"></div>

                    <div className="space-y-8 relative">
                      <div className="pl-10 relative">
                        <div className="absolute left-2 top-1 h-6 w-6 rounded-full bg-red-100 border-2 border-red-400 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        </div>
                        <h4 className="text-lg font-medium text-red-600 dark:text-red-400">1. Physiological Needs</h4>
                        <p className="mt-1">Sleep, nutrition, hydration, and physical wellbeing</p>
                      </div>

                      <div className="pl-10 relative">
                        <div className="absolute left-2 top-1 h-6 w-6 rounded-full bg-orange-100 border-2 border-orange-400 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                        </div>
                        <h4 className="text-lg font-medium text-orange-600 dark:text-orange-400">
                          2. Safety & Stability
                        </h4>
                        <p className="mt-1">Financial security, routine, predictability, and structure</p>
                      </div>

                      <div className="pl-10 relative">
                        <div className="absolute left-2 top-1 h-6 w-6 rounded-full bg-amber-100 border-2 border-amber-400 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                        </div>
                        <h4 className="text-lg font-medium text-amber-600 dark:text-amber-400">3. Love & Belonging</h4>
                        <p className="mt-1">Connection, support, community, and relationships</p>
                      </div>

                      <div className="pl-10 relative">
                        <div className="absolute left-2 top-1 h-6 w-6 rounded-full bg-blue-100 border-2 border-blue-400 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        </div>
                        <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400">4. Esteem</h4>
                        <p className="mt-1">Confidence, competence, recognition, and achievement</p>
                      </div>

                      <div className="pl-10 relative">
                        <div className="absolute left-2 top-1 h-6 w-6 rounded-full bg-green-100 border-2 border-green-400 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        </div>
                        <h4 className="text-lg font-medium text-green-600 dark:text-green-400">
                          5. Self-Actualization
                        </h4>
                        <p className="mt-1">Peak performance, mastery, and fulfilling your potential</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-medium">Meeting Your Needs at Each Level</h3>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-medium text-red-600 dark:text-red-400">
                      1. Physiological Needs – Fueling Your Brain & Body
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3 pb-6">
                      <p>
                        This is the foundation of everything. If you're not eating right, sleeping enough, and staying
                        hydrated, nothing else works. Your short-term memory tanks. Your reaction time slows down. You
                        start forgetting checklist items.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="rounded-lg bg-red-50 dark:bg-red-950/30 p-4 border border-red-100 dark:border-red-900">
                          <h4 className="font-medium mb-2">Warning Signs</h4>
                          <ul className="space-y-1 text-sm">
                            <li>Falling asleep during ground school</li>
                            <li>Struggling to concentrate during sims</li>
                            <li>Making simple mistakes in the airplane</li>
                          </ul>
                        </div>

                        <div className="rounded-lg bg-green-50 dark:bg-green-950/30 p-4 border border-green-100 dark:border-green-900">
                          <h4 className="font-medium mb-2">What To Do</h4>
                          <ul className="space-y-1 text-sm">
                            <li>
                              <span className="font-medium">Sleep:</span> Prioritize 7–8 hours per night
                            </li>
                            <li>
                              <span className="font-medium">Nutrition:</span> Whole foods and constant hydration
                            </li>
                            <li>
                              <span className="font-medium">Movement:</span> Even 15 minutes boosts focus
                            </li>
                          </ul>
                        </div>
                      </div>

                      <p className="text-sm italic mt-4">
                        Pro Tip: Track your performance. You'll start to notice—when you eat better, sleep better, and
                        hydrate—you fly better.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-medium text-orange-600 dark:text-orange-400">
                      2. Safety & Stability – Creating a Grounded Life
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3 pb-6">
                      <p>
                        This is about security, structure, and predictability. Without it, your brain stays in
                        fight-or-flight mode—which kills retention and makes learning feel overwhelming.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="rounded-lg bg-orange-50 dark:bg-orange-950/30 p-4 border border-orange-100 dark:border-orange-900">
                          <h4 className="font-medium mb-2">Warning Signs</h4>
                          <ul className="space-y-1 text-sm">
                            <li>Constant anxiety about money or scheduling</li>
                            <li>Feeling disoriented after relocating</li>
                            <li>Struggling to build a consistent routine</li>
                          </ul>
                        </div>

                        <div className="rounded-lg bg-green-50 dark:bg-green-950/30 p-4 border border-green-100 dark:border-green-900">
                          <h4 className="font-medium mb-2">What To Do</h4>
                          <ul className="space-y-1 text-sm">
                            <li>
                              <span className="font-medium">Build a routine:</span> Consistent wake times and study
                              blocks
                            </li>
                            <li>
                              <span className="font-medium">Control what you can:</span> Organize gear, know your
                              schedule
                            </li>
                            <li>
                              <span className="font-medium">Financial awareness:</span> Budget for all training costs
                            </li>
                          </ul>
                        </div>
                      </div>

                      <p className="text-sm italic mt-4">
                        Pro Tip: Stability doesn't mean perfection. It means creating enough predictability that your
                        brain isn't constantly scanning for danger.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-medium text-amber-600 dark:text-amber-400">
                      3. Love & Belonging – Training is a Team Sport
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3 pb-6">
                      <p>
                        You can't do this alone. You can try—but burnout, imposter syndrome, and isolation will catch up
                        eventually. This level is about connection, support, and community.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="rounded-lg bg-amber-50 dark:bg-amber-950/30 p-4 border border-amber-100 dark:border-amber-900">
                          <h4 className="font-medium mb-2">Warning Signs</h4>
                          <ul className="space-y-1 text-sm">
                            <li>Feeling like you're the only one struggling</li>
                            <li>Not knowing who to turn to after a bad lesson</li>
                            <li>Missing support from friends and family</li>
                          </ul>
                        </div>

                        <div className="rounded-lg bg-green-50 dark:bg-green-950/30 p-4 border border-green-100 dark:border-green-900">
                          <h4 className="font-medium mb-2">What To Do</h4>
                          <ul className="space-y-1 text-sm">
                            <li>
                              <span className="font-medium">Connect early:</span> Find classmates with similar study
                              styles
                            </li>
                            <li>
                              <span className="font-medium">Use resources:</span> CFIs, mentors, program directors
                            </li>
                            <li>
                              <span className="font-medium">Stay connected:</span> Schedule calls with loved ones
                            </li>
                          </ul>
                        </div>
                      </div>

                      <p className="text-sm italic mt-4">
                        Pro Tip: You don't need 20 friends—just one or two people who get it. Someone you can text after
                        a tough flight.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-medium text-blue-600 dark:text-blue-400">
                      4. Esteem – Confidence That's Earned
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3 pb-6">
                      <p>
                        This is the level where you start seeing yourself as a real pilot. Not just a student. Not just
                        someone trying to pass. A pilot who makes decisions, owns progress, and believes in their own
                        competence.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="rounded-lg bg-blue-50 dark:bg-blue-950/30 p-4 border border-blue-100 dark:border-blue-900">
                          <h4 className="font-medium mb-2">Warning Signs</h4>
                          <ul className="space-y-1 text-sm">
                            <li>Questioning if you're good enough despite passing</li>
                            <li>Shrinking in debriefs out of fear</li>
                            <li>Feeling like bad lessons prove you're not cut out</li>
                          </ul>
                        </div>

                        <div className="rounded-lg bg-green-50 dark:bg-green-950/30 p-4 border border-green-100 dark:border-green-900">
                          <h4 className="font-medium mb-2">What To Do</h4>
                          <ul className="space-y-1 text-sm">
                            <li>
                              <span className="font-medium">Track wins:</span> Keep a "victory log" of breakthroughs
                            </li>
                            <li>
                              <span className="font-medium">Teach others:</span> Share what you've learned
                            </li>
                            <li>
                              <span className="font-medium">Embrace ownership:</span> Own mistakes, then fix them
                            </li>
                          </ul>
                        </div>
                      </div>

                      <p className="text-sm italic mt-4">
                        Pro Tip: You'll know you've hit this level when setbacks don't derail you—they motivate you.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-lg font-medium text-green-600 dark:text-green-400">
                      5. Self-Actualization – Peak Learning, Peak Flying
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3 pb-6">
                      <p>
                        This is where it all comes together. When your basic needs are met and your mind is clear, you
                        enter the highest level of growth. You stop surviving and start thriving. You become curious
                        again. Engaged. Focused. Strategic.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="rounded-lg bg-green-50 dark:bg-green-950/30 p-4 border border-green-100 dark:border-green-900">
                          <h4 className="font-medium mb-2">What It Looks Like</h4>
                          <ul className="space-y-1 text-sm">
                            <li>Anticipating ATC calls before they happen</li>
                            <li>Analyzing mistakes like a coach, not a critic</li>
                            <li>Connecting aerodynamics, systems, and weather</li>
                            <li>Flying like it's not a checkride—just a mission</li>
                          </ul>
                        </div>

                        <div className="rounded-lg bg-green-50 dark:bg-green-950/30 p-4 border border-green-100 dark:border-green-900">
                          <h4 className="font-medium mb-2">How To Stay Here</h4>
                          <ul className="space-y-1 text-sm">
                            <li>Keep your habits dialed in consistently</li>
                            <li>Continue seeking feedback and growth</li>
                            <li>Keep your "why" front and center</li>
                          </ul>
                        </div>
                      </div>

                      <p className="text-sm italic mt-4">
                        Pro Tip: Self-actualization isn't a finish line. It's a state you return to when you're aligned,
                        healthy, and intentional.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 p-6 border border-blue-100 dark:border-blue-900">
                <h3 className="text-xl font-medium mb-3">Final Thought: Treat Yourself Like an Athlete</h3>
                <p className="text-lg">
                  Pilots are athletes of the brain. Your performance depends on how well you take care of the
                  system—you.
                </p>
                <p className="mt-2">
                  Maslow's pyramid isn't just a psychological theory. It's a blueprint. And when you meet your needs,
                  build your structure, and surround yourself with the right people, you'll find the rhythm that makes
                  everything click.
                </p>
                <p className="mt-2 font-medium text-primary">
                  You're not just learning to fly. You're learning how to be the kind of pilot who can lead, perform,
                  and thrive.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                    Quick Reference
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm">Physiological: Sleep, nutrition, hydration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm">Safety: Routine, structure, financial stability</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm">Belonging: Community, support, connection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm">Esteem: Confidence, competence, recognition</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm">Self-Actualization: Peak performance, mastery</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <Lightbulb className="h-5 w-5 mr-2 text-amber-500" />
                    Pro Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm italic">
                      "I use a 'pre-flight checklist' for myself before every training day: 8 hours sleep, protein
                      breakfast, 32oz water, 10 minutes of stretching."
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">— Commercial student</p>
                  </div>

                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm italic">
                      "Every Sunday, I meal prep for the week and plan my study schedule. The structure eliminates
                      decision fatigue and keeps me on track."
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">— Instrument student</p>
                  </div>
                </CardContent>
              </Card>

              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 to-blue-600/90 z-10"></div>
                <div className="absolute inset-0 bg-[url('/images/healthy-breakfast-spread.jpg')] bg-cover bg-center opacity-40"></div>
                <div className="relative z-20 p-6 text-white">
                  <h3 className="text-xl font-medium mb-3">Wellness Assessment</h3>
                  <p className="text-sm mb-4">
                    Take our confidential wellness assessment to identify which levels of Maslow's hierarchy need your
                    attention.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50"
                  >
                    Take Assessment
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Related Resources Section */}
      <div className="mt-16 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Related Resources</h2>
          <a href="#" className="text-sm font-medium text-primary hover:underline flex items-center">
            View All Resources
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-all hover:-translate-y-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Mental Performance Coaching</CardTitle>
              <CardDescription>One-on-one sessions with certified coaches</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Schedule a confidential session with our mental performance coaches to develop personalized strategies.
              </p>
              <div className="mt-4">
                <a href="#" className="text-sm font-medium text-primary hover:underline flex items-center">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-all hover:-translate-y-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Stress Management Workshop</CardTitle>
              <CardDescription>Monthly virtual sessions for all cadets</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Learn practical techniques for managing stress, anxiety, and pressure during flight training.
              </p>
              <div className="mt-4">
                <a href="#" className="text-sm font-medium text-primary hover:underline flex items-center">
                  Register
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-all hover:-translate-y-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Cadet Peer Support Network</CardTitle>
              <CardDescription>Connect with fellow cadets who understand</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Join our peer support network to share experiences, challenges, and solutions with other cadets.
              </p>
              <div className="mt-4">
                <a href="#" className="text-sm font-medium text-primary hover:underline flex items-center">
                  Join Network
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// --- Server Component --- 
export default function MentalResiliencePage() {
  return <MentalResilienceContent />;
}

