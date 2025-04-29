import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  FileText,
  Lightbulb,
  Plane,
  Shield,
  AlertTriangle,
  Brain,
  UserCheck,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: "Private Pilot Checkride | AACA Student Pilot Guide",
  description:
    "Master your Private Pilot checkride with proven strategies, preparation tips, and a comprehensive breakdown of what to expect.",
}

export default function PrivatePilotCheckridePage() {
  return (
    <div className="container max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link
          href="/checkrides"
          className="flex items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Checkrides
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 text-white mb-12">
        <div className="absolute inset-0 bg-[url('/images/small-aircraft-flying-perspective.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 px-6 py-16 md:py-24 md:px-12 max-w-4xl">
          <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">Private Pilot Checkride</Badge>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Earning Your Wings
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl">
            Your complete guide to passing the Private Pilot checkride with confidence
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-white/90">
              Download Checkride Prep Guide
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Schedule Mock Checkride <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 -mb-12 -mr-12 opacity-20 md:opacity-30">
          <div className="w-full h-full bg-[url('/images/training/ppl.jpg')] bg-contain bg-no-repeat"></div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="mb-12">
        <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <UserCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold">Private Pilot Checkride Overview</h2>
              <p className="text-muted-foreground">Your first major milestone as a pilot</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="lead">
              The Private Pilot checkride is your first major evaluation as a pilot. It's where you demonstrate that you
              have the knowledge, skills, and decision-making abilities to safely operate as pilot-in-command.
            </p>

            <div className="bg-card rounded-lg p-6 border my-6">
              <h3 className="text-xl font-display font-semibold mb-4">What You Need to Know</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Checkride Structure</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>Oral exam (2-3 hours)</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>Flight test (1.5-2 hours)</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>Based on Private Pilot ACS</div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Prerequisites</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>Minimum 40 hours flight time</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>Passed FAA Knowledge Test</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>Instructor endorsement</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="mb-16">
        <Tabs defaultValue="oral-exam" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="oral-exam">Oral Exam</TabsTrigger>
            <TabsTrigger value="flight-test">Flight Test</TabsTrigger>
            <TabsTrigger value="common-mistakes">Common Mistakes</TabsTrigger>
            <TabsTrigger value="preparation">Preparation Tips</TabsTrigger>
          </TabsList>

          {/* Oral Exam Tab */}
          <TabsContent value="oral-exam" className="space-y-6">
            <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">The Oral Exam</h2>
                  <p className="text-muted-foreground">Demonstrating your knowledge and decision-making</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p>
                  The oral exam is where your DPE will assess your knowledge of aviation concepts, regulations, and
                  decision-making. This typically lasts 2-3 hours and covers all the knowledge areas in the Private
                  Pilot ACS.
                </p>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Key Focus Areas</h3>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" /> Regulations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Pilot privileges and limitations</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Currency requirements</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Required documents</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Part 91 operating rules</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" /> Risk Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>PAVE model application</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Weather decision-making</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Personal minimums</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Scenario-based decisions</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Plane className="h-5 w-5 text-primary" /> Aircraft Systems
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Powerplant and systems</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Flight instruments</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Aircraft performance</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Weight and balance</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" /> Navigation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Sectional chart interpretation</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Flight planning</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Airspace requirements</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Cross-country procedures</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Sample Oral Exam Questions</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <p className="mb-4">Here are some typical questions you might face in your oral exam:</p>
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="font-medium mb-2">Regulations:</p>
                      <ul className="space-y-2">
                        <li>"What documents must you have with you to fly as PIC?"</li>
                        <li>"What are the requirements for night flight with passengers?"</li>
                        <li>"When do you need to have a flight review?"</li>
                      </ul>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <p className="font-medium mb-2">Weather:</p>
                      <ul className="space-y-2">
                        <li>"Looking at this TAF, would you fly today? Why or why not?"</li>
                        <li>"What are the VFR weather minimums for Class C airspace?"</li>
                        <li>"How would you determine if there's a risk of carburetor icing today?"</li>
                      </ul>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <p className="font-medium mb-2">Aircraft Systems:</p>
                      <ul className="space-y-2">
                        <li>"Explain how the fuel system works in your aircraft."</li>
                        <li>"What would you do if you suspected a vacuum pump failure?"</li>
                        <li>"How does your aircraft's electrical system work?"</li>
                      </ul>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <p className="font-medium mb-2">Scenario-Based:</p>
                      <ul className="space-y-2">
                        <li>
                          "You're on a cross-country and notice the oil pressure is dropping slowly. What would you do?"
                        </li>
                        <li>
                          "You're approaching your destination and ATC tells you to expect a 45-minute delay. You have 1
                          hour of fuel remaining. What are your options?"
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Alert className="bg-primary/10 border-primary/20 mt-8">
                  <AlertTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" /> Pro Tip: The Oral Exam Strategy
                  </AlertTitle>
                  <AlertDescription>
                    <p className="mt-2">
                      Don't just memorize answers—understand the why behind everything. If you don't know something, be
                      honest and explain how you would find the answer.
                    </p>
                    <p className="mt-2">
                      Remember: The DPE wants to see that you can make safe decisions and know where to find information
                      when you need it.
                    </p>
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </TabsContent>

          {/* Flight Test Tab */}
          <TabsContent value="flight-test" className="space-y-6">
            <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Plane className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">The Flight Test</h2>
                  <p className="text-muted-foreground">Demonstrating your flying skills and decision-making</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p>
                  The flight portion of your checkride is where you demonstrate your ability to safely operate the
                  aircraft through various maneuvers and scenarios. This typically lasts 1.5-2 hours and covers all the
                  flight tasks in the Private Pilot ACS.
                </p>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">What to Expect</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <p className="mb-4">Your flight test will typically include:</p>
                  <ol className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">1</span>
                      </div>
                      <div>
                        <span className="font-medium">Preflight Procedures</span>
                        <p className="mt-1">
                          Thorough preflight inspection, cockpit management, engine start, and taxi procedures.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">2</span>
                      </div>
                      <div>
                        <span className="font-medium">Airport Operations</span>
                        <p className="mt-1">
                          Radio communications, traffic pattern operations, and runway incursion avoidance.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">3</span>
                      </div>
                      <div>
                        <span className="font-medium">Takeoffs, Landings, and Go-Arounds</span>
                        <p className="mt-1">Normal, crosswind, short-field, and soft-field techniques.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">4</span>
                      </div>
                      <div>
                        <span className="font-medium">Performance Maneuvers</span>
                        <p className="mt-1">Steep turns, ground reference maneuvers.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">5</span>
                      </div>
                      <div>
                        <span className="font-medium">Navigation</span>
                        <p className="mt-1">Pilotage, dead reckoning, diversion to an alternate.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">6</span>
                      </div>
                      <div>
                        <span className="font-medium">Slow Flight and Stalls</span>
                        <p className="mt-1">Maneuvering during slow flight, power-off and power-on stalls.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">7</span>
                      </div>
                      <div>
                        <span className="font-medium">Basic Instrument Maneuvers</span>
                        <p className="mt-1">
                          Straight-and-level flight, constant airspeed climbs and descents, turns to headings, recovery
                          from unusual flight attitudes.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">8</span>
                      </div>
                      <div>
                        <span className="font-medium">Emergency Operations</span>
                        <p className="mt-1">Emergency approach and landing, systems and equipment malfunctions.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">9</span>
                      </div>
                      <div>
                        <span className="font-medium">Postflight Procedures</span>
                        <p className="mt-1">After-landing, parking, and securing the aircraft.</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">ACS Standards You Must Meet</h3>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
                  <p className="mb-4">For each maneuver, you'll need to meet these standards:</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Altitude: ±100 feet</span> (except during slow flight: ±50 feet)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Heading: ±10 degrees</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Airspeed: ±10 knots</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Bank Angles: ±5 degrees</span> (for steep turns: ±10 degrees)
                      </div>
                    </li>
                  </ul>
                  <p className="font-medium">
                    Remember: The DPE is looking for safe, consistent performance—not perfection.
                  </p>
                </div>

                <Alert className="bg-primary/10 border-primary/20 mt-8">
                  <AlertTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" /> Pro Tip: The Flight Test Strategy
                  </AlertTitle>
                  <AlertDescription>
                    <p className="mt-2">
                      Fly the airplane first, talk second. If you're struggling with a maneuver, focus on flying safely
                      and then explain what happened.
                    </p>
                    <p className="mt-2">
                      Use your checklists and flows consistently. Verbalize what you're doing to show the DPE your
                      thought process.
                    </p>
                    <p className="mt-2 font-medium">
                      Remember: The DPE is evaluating your ability to be a safe pilot-in-command, not just your ability
                      to perform maneuvers.
                    </p>
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </TabsContent>

          {/* Common Mistakes Tab */}
          <TabsContent value="common-mistakes" className="space-y-6">
            <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">Common Private Pilot Checkride Mistakes</h2>
                  <p className="text-muted-foreground">Learn from others to avoid these pitfalls</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p>
                  Even well-prepared students can make mistakes during their checkride. Being aware of these common
                  errors can help you avoid them and increase your chances of success.
                </p>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Oral Exam Mistakes</h3>
                <div className="space-y-4 mb-8">
                  <div className="bg-card p-5 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" /> Overthinking Simple Questions
                    </h4>
                    <p className="mb-2">
                      <span className="font-medium">What happens:</span> The DPE asks a straightforward question, but
                      you assume it's a trick and give an overly complicated answer.
                    </p>
                    <p className="mb-0">
                      <span className="font-medium">How to avoid it:</span> Answer the question that was asked. If the
                      DPE wants more detail, they'll ask for it. Keep it simple and direct.
                    </p>
                  </div>

                  <div className="bg-card p-5 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" /> Not Knowing Where to Find Information
                    </h4>
                    <p className="mb-2">
                      <span className="font-medium">What happens:</span> You can't answer a question and don't know
                      which reference to check.
                    </p>
                    <p className="mb-0">
                      <span className="font-medium">How to avoid it:</span> Know your resources. Be familiar with the
                      POH, FAR/AIM, ACs, and other references. It's okay to say "I don't know the exact answer, but I
                      would look it up in [specific resource]."
                    </p>
                  </div>

                  <div className="bg-card p-5 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" /> Poor Risk Management Decisions
                    </h4>
                    <p className="mb-2">
                      <span className="font-medium">What happens:</span> When presented with a scenario, you make
                      decisions that demonstrate poor judgment or risk assessment.
                    </p>
                    <p className="mb-0">
                      <span className="font-medium">How to avoid it:</span> Always prioritize safety. Use structured
                      decision-making tools like PAVE or IMSAFE. Explain your thought process clearly.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Flight Test Mistakes</h3>
                <div className="space-y-4">
                  <div className="bg-card p-5 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" /> Poor Checklist Usage
                    </h4>
                    <p className="mb-2">
                      <span className="font-medium">What happens:</span> Rushing through or skipping checklists due to
                      nerves.
                    </p>
                    <p className="mb-0">
                      <span className="font-medium">How to avoid it:</span> Slow down. Use checklists methodically and
                      verbalize what you're doing. This shows discipline and attention to detail.
                    </p>
                  </div>

                  <div className="bg-card p-5 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" /> Inadequate Clearing Turns
                    </h4>
                    <p className="mb-2">
                      <span className="font-medium">What happens:</span> Rushing into maneuvers without properly
                      clearing the area.
                    </p>
                    <p className="mb-0">
                      <span className="font-medium">How to avoid it:</span> Make deliberate, thorough clearing turns
                      before each maneuver. Verbalize "Clear left, clear right, clear above and below."
                    </p>
                  </div>

                  <div className="bg-card p-5 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" /> Fixating on Minor Errors
                    </h4>
                    <p className="mb-2">
                      <span className="font-medium">What happens:</span> Making a small mistake and letting it affect
                      the rest of your performance.
                    </p>
                    <p className="mb-0">
                      <span className="font-medium">How to avoid it:</span> Acknowledge mistakes briefly, correct them,
                      and move on. Don't dwell on errors—focus on flying safely.
                    </p>
                  </div>

                  <div className="bg-card p-5 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" /> Poor Radio Communications
                    </h4>
                    <p className="mb-2">
                      <span className="font-medium">What happens:</span> Stumbling over radio calls or using incorrect
                      phraseology.
                    </p>
                    <p className="mb-0">
                      <span className="font-medium">How to avoid it:</span> Practice radio calls extensively before your
                      checkride. If you make a mistake, correct it and move on. Clear, concise communication is key.
                    </p>
                  </div>
                </div>

                <Alert className="bg-primary/10 border-primary/20 mt-8">
                  <AlertTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" /> Remember: It's About Recovery
                  </AlertTitle>
                  <AlertDescription>
                    <p className="mt-2">Everyone makes mistakes—even on checkrides. What matters is how you recover.</p>
                    <p className="mt-2">
                      If something doesn't go as planned, take a breath, stabilize the aircraft, and try again if the
                      DPE allows. Your ability to recognize and correct errors is just as important as avoiding them in
                      the first place.
                    </p>
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </TabsContent>

          {/* Preparation Tips Tab */}
          <TabsContent value="preparation" className="space-y-6">
            <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">Private Pilot Checkride Preparation</h2>
                  <p className="text-muted-foreground">Your roadmap to success</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p>
                  Proper preparation is the key to checkride success. Here's a comprehensive guide to help you prepare
                  effectively for your Private Pilot checkride.
                </p>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">One Month Before</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <ol className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">1</span>
                      </div>
                      <div>
                        <span className="font-medium">Review the ACS thoroughly</span>
                        <p className="mt-1">Understand exactly what you'll be tested on and to what standards.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">2</span>
                      </div>
                      <div>
                        <span className="font-medium">Create a study schedule</span>
                        <p className="mt-1">Break down the material into manageable chunks and study consistently.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">3</span>
                      </div>
                      <div>
                        <span className="font-medium">Organize your materials</span>
                        <p className="mt-1">
                          Gather your logbook, knowledge test results, ID, medical certificate, and aircraft documents.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">4</span>
                      </div>
                      <div>
                        <span className="font-medium">Schedule practice flights</span>
                        <p className="mt-1">Focus on areas where you need improvement.</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Two Weeks Before</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <ol className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">1</span>
                      </div>
                      <div>
                        <span className="font-medium">Take a mock checkride with your instructor</span>
                        <p className="mt-1">Simulate both the oral and flight portions to identify any weak areas.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">2</span>
                      </div>
                      <div>
                        <span className="font-medium">Review aircraft systems in detail</span>
                        <p className="mt-1">Know your POH inside and out, especially emergency procedures.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">3</span>
                      </div>
                      <div>
                        <span className="font-medium">Practice weight and balance calculations</span>
                        <p className="mt-1">Be able to do them quickly and accurately for various scenarios.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">4</span>
                      </div>
                      <div>
                        <span className="font-medium">Chair fly maneuvers</span>
                        <p className="mt-1">
                          Mentally rehearse each maneuver, including the setup, execution, and recovery.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">The Day Before</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <ol className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">1</span>
                      </div>
                      <div>
                        <span className="font-medium">Get a good night's sleep</span>
                        <p className="mt-1">Being well-rested is crucial for peak performance.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">2</span>
                      </div>
                      <div>
                        <span className="font-medium">Check the weather</span>
                        <p className="mt-1">Prepare a thorough weather briefing for your planned flight.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">3</span>
                      </div>
                      <div>
                        <span className="font-medium">Organize your documents</span>
                        <p className="mt-1">Have everything ready and easily accessible.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">4</span>
                      </div>
                      <div>
                        <span className="font-medium">Light review only</span>
                        <p className="mt-1">Don't cram new information. Just review key concepts and relax.</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Checkride Day</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <ol className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">1</span>
                      </div>
                      <div>
                        <span className="font-medium">Arrive early</span>
                        <p className="mt-1">Give yourself plenty of time to prepare and settle your nerves.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">2</span>
                      </div>
                      <div>
                        <span className="font-medium">Dress professionally</span>
                        <p className="mt-1">First impressions matter. Dress like a professional pilot.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">3</span>
                      </div>
                      <div>
                        <span className="font-medium">Stay hydrated and eat something light</span>
                        <p className="mt-1">Maintain your energy throughout the day.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">4</span>
                      </div>
                      <div>
                        <span className="font-medium">Take your time</span>
                        <p className="mt-1">
                          Don't rush through answers or procedures. Thoughtful and deliberate is better than fast and
                          sloppy.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                <Alert className="bg-primary/10 border-primary/20 mt-8">
                  <AlertTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" /> Final Thought: You've Got This
                  </AlertTitle>
                  <AlertDescription>
                    <p className="mt-2">
                      Remember, your instructor wouldn't have signed you off if you weren't ready. Trust your training,
                      stay calm, and fly the way you've been taught.
                    </p>
                    <p className="mt-2 font-medium">
                      This is your moment to shine. You've put in the work—now go show what you can do.
                    </p>
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Resources Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-display font-bold mb-6">Private Pilot Checkride Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Checkride Prep Guide</CardTitle>
              <CardDescription>Comprehensive study material</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Our detailed guide covers everything you need to know for your Private Pilot checkride, organized by ACS
                sections.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Download PDF</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mock Oral Exam Questions</CardTitle>
              <CardDescription>Practice with 200+ questions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Test your knowledge with our extensive collection of practice questions, including scenario-based
                problems.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Access Questions</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Maneuver Guides</CardTitle>
              <CardDescription>Step-by-step visual instructions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Detailed breakdowns of each required maneuver, with common mistakes and how to avoid them.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">View Guides</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Next Steps */}
      <section className="mb-12">
        <h2 className="text-2xl font-display font-bold mb-6">Explore Other Checkrides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/checkrides/instrument"
            className="block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
          >
            <Card className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Instrument Rating</CardTitle>
                <CardDescription>Mastering the clouds</CardDescription>
              </CardHeader>
              <CardFooter className="pt-2">
                <Button variant="ghost" className="w-full justify-between">
                  Learn More <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <Link
            href="/checkrides/commercial"
            className="block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
          >
            <Card className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Commercial Pilot</CardTitle>
                <CardDescription>Becoming a pro</CardDescription>
              </CardHeader>
              <CardFooter className="pt-2">
                <Button variant="ghost" className="w-full justify-between">
                  Learn More <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <Link
            href="/checkrides/cfi"
            className="block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
          >
            <Card className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Flight Instructor (CFI)</CardTitle>
                <CardDescription>Learning to teach</CardDescription>
              </CardHeader>
              <CardFooter className="pt-2">
                <Button variant="ghost" className="w-full justify-between">
                  Learn More <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}

