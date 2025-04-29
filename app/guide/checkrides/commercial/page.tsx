import type { Metadata } from "next"
import Link from "next/link"
import {
  ChevronRight,
  UserCog,
  FileText,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Brain,
  Lightbulb,
  Clock,
  Calendar,
  Plane,
  Briefcase,
  DollarSign,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "Commercial Pilot Checkride | AACA Student Pilot Guide",
  description:
    "Master your Commercial Pilot checkride with professional-level maneuvers, knowledge, and a comprehensive breakdown of what to expect.",
}

export default function CommercialCheckridePage() {
  return (
    <div className="container max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/checkrides">Checkrides</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/checkrides/commercial">Commercial Pilot</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-6">
        <Button variant="outline" asChild>
          <Link href="/checkrides" className="gap-2">
            <ChevronRight className="h-4 w-4 rotate-180" />
            Back to All Checkrides
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 to-green-900 text-white mb-12">
        <div className="absolute inset-0 bg-[url('/images/commercial-jet-clouds.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 px-6 py-16 md:py-24 md:px-12 max-w-4xl">
          <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">Commercial Pilot</Badge>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Commercial Pilot Checkride
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl">From capable aviator to professional pilot</p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-white text-green-700 hover:bg-white/90">
              Start Preparing
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Download Prep Checklist <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 -mb-12 -mr-12 opacity-20 md:opacity-30">
          <div className="w-full h-full bg-[url('/images/training/cpl.jpg')] bg-contain bg-no-repeat"></div>
        </div>
      </section>

      {/* Personal Note Alert */}
      <Alert className="bg-muted border-muted-foreground/20 mb-8">
        <AlertTitle className="flex items-center gap-2 text-lg font-display font-semibold">
          <FileText className="h-5 w-5" /> Personal Note from Your Instructor
        </AlertTitle>
        <AlertDescription className="text-base mt-2">
          The Commercial Pilot checkride marks your transition from recreational flying to professional aviation. This
          isn't just about flying with more precision—it's about demonstrating that you can operate an aircraft with the
          skill, judgment, and professionalism expected of someone who will be paid to fly. The standards are higher,
          the maneuvers are more challenging, but the reward is becoming part of an elite group of professional
          aviators.
        </AlertDescription>
      </Alert>

      {/* Main Content Tabs */}
      <section className="mb-16">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="oral-exam">Oral Exam</TabsTrigger>
            <TabsTrigger value="flight-test">Flight Test</TabsTrigger>
            <TabsTrigger value="maneuvers">Key Maneuvers</TabsTrigger>
            <TabsTrigger value="preparation">Preparation</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <UserCog className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">Commercial Pilot Checkride Overview</h2>
                  <p className="text-muted-foreground">Your gateway to professional flying</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="lead">
                  The Commercial Pilot checkride evaluates your ability to operate an aircraft at a professional level.
                  It's not just about flying with greater precision—it's about demonstrating the judgment, knowledge,
                  and skill expected of someone who will be paid to fly.
                </p>

                <div className="bg-card rounded-lg p-6 border my-6">
                  <h3 className="text-xl font-display font-semibold mb-4">What Makes This Checkride Different?</h3>
                  <p>
                    The Commercial Pilot checkride builds upon your Private Pilot and Instrument Rating skills, but with
                    significantly higher standards and expectations:
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Tighter performance tolerances for all maneuvers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Advanced maneuvers that demonstrate precise aircraft control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Deeper understanding of commercial operations and regulations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Professional decision-making and risk management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Smooth, coordinated, and efficient aircraft handling</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Checkride Structure</h3>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Brain className="h-5 w-5 text-primary" /> Oral Exam (2–3 hours)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        A comprehensive evaluation of your commercial knowledge, focusing on:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Commercial operations and limitations</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Advanced aircraft systems and performance</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Complex aircraft operations</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Commercial pilot privileges and limitations</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Advanced aerodynamics and maneuvers</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Plane className="h-5 w-5 text-primary" /> Flight Test (1.5–2 hours)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        A demonstration of your professional flying skills, including:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Commercial maneuvers (chandelles, lazy eights, etc.)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Precision takeoffs and landings</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Emergency procedures</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Complex aircraft operations</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Cross-country planning and execution</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">
                  Key Differences from Previous Checkrides
                </h3>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-lg mb-2">Higher Performance Standards</h4>
                      <p className="text-sm mb-0">
                        The ACS tolerances are tighter, and you're expected to fly with greater precision and
                        smoothness. Every maneuver should look polished and professional.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-2">Advanced Maneuvers</h4>
                      <p className="text-sm mb-0">
                        You'll need to demonstrate commercial maneuvers like chandelles, lazy eights, and eights on
                        pylons that require precise aircraft control and energy management.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-2">Complex Aircraft</h4>
                      <p className="text-sm mb-0">
                        Most commercial checkrides are conducted in complex aircraft with retractable landing gear,
                        flaps, and a controllable pitch propeller, requiring additional systems knowledge.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-2">Commercial Operations Focus</h4>
                      <p className="text-sm mb-0">
                        The oral exam will focus heavily on commercial operations, including regulations that govern
                        flying for compensation or hire (Part 119, 135, etc.).
                      </p>
                    </div>
                  </div>
                </div>

                <Alert className="bg-primary/10 border-primary/20 mt-8">
                  <AlertTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" /> The Commercial Pilot Mindset
                  </AlertTitle>
                  <AlertDescription>
                    <p className="mt-2">
                      The key to passing your commercial checkride is adopting the mindset of a professional pilot. This
                      means flying with precision, making sound decisions, and conducting yourself with the
                      professionalism expected in the aviation industry.
                    </p>
                    <p className="mt-2 font-medium">Fly like you're being paid to do it—because soon, you will be.</p>
                    <p className="mt-2">
                      This mindset shift from "recreational pilot" to "professional aviator" is what examiners are
                      looking for throughout your checkride.
                    </p>
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </TabsContent>

          {/* Oral Exam Tab */}
          <TabsContent value="oral-exam" className="space-y-6">
            <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">The Commercial Oral Exam</h2>
                  <p className="text-muted-foreground">Demonstrating professional knowledge and decision-making</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="lead">
                  The commercial oral exam dives deeper into regulations, aircraft systems, and operational
                  considerations than your previous checkrides. You'll need to demonstrate not just knowledge, but the
                  understanding and judgment expected of a professional pilot.
                </p>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Key Knowledge Areas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <Card>
                    <CardHeader className="pb-2 bg-green-50 dark:bg-green-950/30 rounded-t-lg">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" /> Commercial Operations
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Part 119 - Certification requirements</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Part 135 vs. Part 91 operations</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Commercial pilot privileges and limitations (61.133)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Common carriage vs. private carriage</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Compensation and hire restrictions</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2 bg-green-50 dark:bg-green-950/30 rounded-t-lg">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Plane className="h-5 w-5 text-primary" /> Aircraft Systems & Performance
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Complex aircraft systems (landing gear, constant-speed propeller)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Advanced performance calculations</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Weight and balance for commercial operations</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Aircraft loading and performance planning</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Aircraft maintenance requirements and MELs</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2 bg-green-50 dark:bg-green-950/30 rounded-t-lg">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" /> Professional Responsibilities
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Pilot-in-command authority and responsibility</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Operational control concepts</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Passenger briefing requirements</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Professional decision-making</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Crew resource management</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2 bg-green-50 dark:bg-green-950/30 rounded-t-lg">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-primary" /> Commercial Operations
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Types of commercial operations (banner towing, aerial photography, etc.)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Special use airspace considerations</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Commercial cross-country planning</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Waivers and authorizations</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Insurance and liability considerations</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Common Oral Exam Scenarios</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <p className="mb-4">
                    Your examiner will likely present several scenarios to test your commercial decision-making. Here
                    are some common ones to prepare for:
                  </p>
                  <div className="space-y-6">
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Commercial Operations Scenario</h4>
                      <p className="mb-2">
                        "A friend wants to hire you to fly them to a business meeting in your flying club's airplane.
                        Can you legally do this as a commercial pilot? What factors would you need to consider?"
                      </p>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Aircraft Performance Scenario</h4>
                      <p className="mb-2">
                        "You're planning a flight with three passengers and their luggage in a complex single-engine
                        aircraft. The temperature is high, and you'll be departing from a short runway at a
                        high-elevation airport. Walk me through your performance calculations and decision-making
                        process."
                      </p>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Systems Failure Scenario</h4>
                      <p className="mb-2">
                        "During a commercial flight, you notice the landing gear indicator shows the gear is not down
                        and locked. What steps would you take to troubleshoot and resolve this issue?"
                      </p>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Weather Decision Scenario</h4>
                      <p className="mb-2">
                        "You're scheduled to fly a paying customer on a sightseeing tour, but the weather is marginal.
                        How would you approach this situation, and what factors would influence your go/no-go decision?"
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Tips for the Commercial Oral Exam</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">1</span>
                    </div>
                    <div>
                      <span className="font-medium">Know the regulations cold.</span> Especially Parts 61, 91, and 119
                      as they relate to commercial operations.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">2</span>
                    </div>
                    <div>
                      <span className="font-medium">Understand the "why" behind commercial maneuvers.</span> Be able to
                      explain the aerodynamic principles and practical applications of each maneuver.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">3</span>
                    </div>
                    <div>
                      <span className="font-medium">Think like a professional.</span> Frame your answers in terms of
                      safety, efficiency, and professionalism.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">4</span>
                    </div>
                    <div>
                      <span className="font-medium">Be thorough with systems knowledge.</span> Know the complex aircraft
                      systems inside and out, especially landing gear, constant-speed propellers, and their associated
                      emergency procedures.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">5</span>
                    </div>
                    <div>
                      <span className="font-medium">Practice scenario-based responses.</span> Commercial pilots need to
                      demonstrate sound judgment in complex situations.
                    </div>
                  </li>
                </ul>

                <Alert className="bg-primary/10 border-primary/20 mt-8">
                  <AlertTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" /> Remember This
                  </AlertTitle>
                  <AlertDescription>
                    <p className="mt-2">
                      The commercial oral exam is testing your ability to think and make decisions as a professional
                      pilot.
                    </p>
                    <p className="mt-2">
                      Your examiner wants to see that you understand the responsibilities that come with flying for
                      compensation or hire, and that you can apply regulations and knowledge to real-world commercial
                      operations.
                    </p>
                    <p className="mt-2 font-medium">
                      When answering questions, always consider: "How would a professional pilot approach this
                      situation?"
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
                  <h2 className="text-2xl font-display font-bold">The Commercial Flight Test</h2>
                  <p className="text-muted-foreground">Demonstrating professional-level flying skills</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="lead">
                  The flight portion of your commercial checkride will test your ability to fly with professional
                  precision and smoothness. You'll need to demonstrate mastery of the aircraft through a series of
                  commercial maneuvers and operations that require a high level of skill and aircraft control.
                </p>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">What to Expect During the Flight</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <p className="mb-4">Your commercial flight test will typically follow this sequence:</p>
                  <ol className="space-y-4 mb-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">1</span>
                      </div>
                      <div>
                        <span className="font-medium">Preflight and Cockpit Preparation</span>
                        <p className="text-sm mt-1">
                          You'll demonstrate a thorough preflight inspection with emphasis on commercial operations,
                          including complex aircraft systems checks and a professional passenger briefing.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">2</span>
                      </div>
                      <div>
                        <span className="font-medium">Takeoff and Departure</span>
                        <p className="text-sm mt-1">
                          You'll perform various types of takeoffs, which may include normal, short-field, soft-field,
                          and crosswind takeoffs, demonstrating precise aircraft control from the start.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">3</span>
                      </div>
                      <div>
                        <span className="font-medium">Commercial Maneuvers</span>
                        <p className="text-sm mt-1">
                          You'll demonstrate a series of commercial maneuvers, which typically include:
                        </p>
                        <ul className="text-sm mt-1 space-y-1">
                          <li>• Chandelles</li>
                          <li>• Lazy eights</li>
                          <li>• Steep turns (50° bank)</li>
                          <li>• Steep spirals</li>
                          <li>• Eights on pylons</li>
                          <li>• Power-off 180° accuracy approach and landing</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">4</span>
                      </div>
                      <div>
                        <span className="font-medium">Slow Flight and Stalls</span>
                        <p className="text-sm mt-1">
                          You'll perform slow flight and various stall maneuvers with greater precision than in your
                          private checkride, including accelerated stalls and stalls from various flight configurations.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">5</span>
                      </div>
                      <div>
                        <span className="font-medium">Instrument Maneuvers</span>
                        <p className="text-sm mt-1">
                          You'll demonstrate basic instrument flying skills, including recovery from unusual attitudes
                          and maintaining control during simulated instrument conditions.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">6</span>
                      </div>
                      <div>
                        <span className="font-medium">Emergency Procedures</span>
                        <p className="text-sm mt-1">
                          You'll demonstrate emergency procedures specific to complex aircraft, such as landing gear
                          malfunctions, propeller issues, and systems failures.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">7</span>
                      </div>
                      <div>
                        <span className="font-medium">Landings</span>
                        <p className="text-sm mt-1">
                          You'll perform various types of landings, including normal, short-field, soft-field, and
                          crosswind landings, with an emphasis on precision and smoothness.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Performance Standards</h3>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
                  <p className="mb-4 font-medium">According to the Commercial Pilot ACS, you must maintain:</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Altitude:</span> ±100 feet (tighter than private standards)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Heading:</span> ±10 degrees
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Airspeed:</span> ±10 knots
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Ground track:</span> Precise tracking during ground reference
                        maneuvers
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Landings:</span> Within specified touchdown zones with appropriate
                        technique
                      </div>
                    </li>
                  </ul>
                  <p className="font-medium">
                    Beyond these technical standards, the examiner will be looking for smooth, coordinated control
                    inputs and professional decision-making throughout the flight.
                  </p>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Tips for the Commercial Flight Test</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">1</span>
                    </div>
                    <div>
                      <span className="font-medium">Fly with finesse.</span> Make all control inputs smooth and
                      deliberate. Avoid abrupt power or control changes.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">2</span>
                    </div>
                    <div>
                      <span className="font-medium">Maintain positive aircraft control at all times.</span> Never let
                      the aircraft "fly you" – especially during complex maneuvers.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">3</span>
                    </div>
                    <div>
                      <span className="font-medium">Verbalize your actions.</span> Explain what you're doing and why,
                      especially during complex procedures or emergency scenarios.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">4</span>
                    </div>
                    <div>
                      <span className="font-medium">Manage the aircraft's energy.</span> Commercial maneuvers require
                      precise energy management – understand when to add or reduce power, when to change configuration.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">5</span>
                    </div>
                    <div>
                      <span className="font-medium">Conduct yourself professionally.</span> From preflight to shutdown,
                      act like a professional pilot in every aspect of the flight.
                    </div>
                  </li>
                </ul>

                <Alert className="bg-primary/10 border-primary/20 mt-8">
                  <AlertTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" /> Pro Tip: The Polished Performance
                  </AlertTitle>
                  <AlertDescription>
                    <p className="mt-2">
                      Commercial flying is about precision and polish. Your examiner is looking for a pilot who can make
                      the airplane do exactly what they want it to do, when they want it to do it.
                    </p>
                    <p className="mt-2">
                      Think of it like the difference between a casual driver and a professional chauffeur. Both can get
                      from point A to point B, but the professional does it with a level of smoothness and precision
                      that elevates the experience.
                    </p>
                    <p className="mt-2 font-medium">
                      Every control input should be purposeful, every maneuver should be executed with confidence, and
                      every landing should be smooth and precise.
                    </p>
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </TabsContent>

          {/* Key Maneuvers Tab */}
          <TabsContent value="maneuvers" className="space-y-6">
            <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">Commercial Pilot Maneuvers</h2>
                  <p className="text-muted-foreground">Mastering the signature maneuvers of professional pilots</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="lead">
                  Commercial pilot maneuvers are designed to test your ability to control the aircraft with precision
                  throughout its performance envelope. These maneuvers require a deep understanding of aerodynamics,
                  energy management, and aircraft control.
                </p>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Chandelles</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h4 className="text-lg font-semibold mb-2">What It Is</h4>
                      <p className="mb-4">
                        A chandelle is a maximum performance 180° climbing turn that combines a climbing turn with a
                        constant change in pitch and roll rate to achieve maximum altitude gain while changing
                        direction.
                      </p>

                      <h4 className="text-lg font-semibold mb-2">Key Elements</h4>
                      <ul className="space-y-1 mb-4">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Begin at cruise airspeed, then initiate a coordinated climbing turn</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>First 90°: Maintain a constant bank angle while gradually increasing pitch</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Second 90°: Maintain pitch attitude while gradually decreasing bank angle</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            Complete the maneuver at minimum controllable airspeed, wings level, heading opposite of
                            entry
                          </div>
                        </li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-2">Common Errors</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <div>Improper coordination during the climbing turn</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <div>Inconsistent pitch or bank angle changes</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <div>Stalling or excessive airspeed loss</div>
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-1/3 flex items-center justify-center">
                      <div className="bg-muted rounded-lg p-4 w-full h-48 flex items-center justify-center">
                        <p className="text-center text-muted-foreground">Chandelle Diagram</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Lazy Eights</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h4 className="text-lg font-semibold mb-2">What It Is</h4>
                      <p className="mb-4">
                        Lazy eights are a series of 180° turns in opposite directions, creating a horizontal figure-8
                        pattern. The maneuver involves constantly changing pitch, bank, airspeed, and altitude
                        throughout.
                      </p>

                      <h4 className="text-lg font-semibold mb-2">Key Elements</h4>
                      <ul className="space-y-1 mb-4">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Begin at cruise airspeed, then start a gradual climbing turn</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>At 45° of turn, reach maximum pitch-up attitude</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>At 90° of turn, reach maximum bank angle with level pitch</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>At 135° of turn, reach maximum pitch-down attitude</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>At 180° of turn, return to level flight at entry altitude and airspeed</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Repeat in the opposite direction to complete the figure-8</div>
                        </li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-2">Common Errors</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <div>Uncoordinated use of flight controls</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <div>Inconsistent altitude at completion points</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <div>Improper timing of pitch and bank changes</div>
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-1/3 flex items-center justify-center">
                      <div className="bg-muted rounded-lg p-4 w-full h-48 flex items-center justify-center">
                        <p className="text-center text-muted-foreground">Lazy Eights Diagram</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Eights on Pylons</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h4 className="text-lg font-semibold mb-2">What It Is</h4>
                      <p className="mb-4">
                        Eights on pylons is a ground reference maneuver where you fly a figure-8 pattern around two
                        ground reference points (pylons), maintaining a line of sight to each pylon by adjusting the
                        bank angle.
                      </p>

                      <h4 className="text-lg font-semibold mb-2">Key Elements</h4>
                      <ul className="space-y-1 mb-4">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Select two ground reference points at an appropriate distance apart</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Enter at the pivotal altitude (determined by groundspeed)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Maintain a constant line of sight to each pylon by adjusting bank angle</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Use pitch to maintain the pivotal altitude as groundspeed changes</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Complete figure-8 patterns with smooth transitions between pylons</div>
                        </li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-2">Common Errors</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <div>Incorrect pivotal altitude</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <div>Losing sight of the pylon</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <div>Using rudder instead of adjusting bank angle to maintain line of sight</div>
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-1/3 flex items-center justify-center">
                      <div className="bg-muted rounded-lg p-4 w-full h-48 flex items-center justify-center">
                        <p className="text-center text-muted-foreground">Eights on Pylons Diagram</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">
                  Power-Off 180° Accuracy Approach and Landing
                </h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h4 className="text-lg font-semibold mb-2">What It Is</h4>
                      <p className="mb-4">
                        This maneuver simulates an engine failure in the traffic pattern. From abeam the landing point
                        at pattern altitude, you reduce power to idle and execute a 180° turn to land precisely on a
                        designated touchdown point.
                      </p>

                      <h4 className="text-lg font-semibold mb-2">Key Elements</h4>
                      <ul className="space-y-1 mb-4">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Begin at pattern altitude abeam the intended touchdown point</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Reduce power to idle and establish best glide speed</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Use flaps, slips, and turns as necessary to control glide path</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Touch down at the designated point with minimal floating</div>
                        </li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-2">Common Errors</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <div>Poor judgment of glide distance</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <div>Improper use of flaps or slips</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <div>Touching down beyond the designated point</div>
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-1/3 flex items-center justify-center">
                      <div className="bg-muted rounded-lg p-4 w-full h-48 flex items-center justify-center">
                        <p className="text-center text-muted-foreground">Power-Off 180° Approach Diagram</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Steep Spirals</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h4 className="text-lg font-semibold mb-2">What It Is</h4>
                      <p className="mb-4">
                        A steep spiral is a constant radius, descending turn around a ground reference point, typically
                        through three 360° turns while maintaining a constant airspeed and distance from the reference
                        point.
                      </p>

                      <h4 className="text-lg font-semibold mb-2">Key Elements</h4>
                      <ul className="space-y-1 mb-4">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Select a prominent ground reference point</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Enter downwind at an appropriate altitude</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Reduce power to idle and establish a glide at recommended airspeed</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Maintain a constant radius around the reference point by adjusting bank angle</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Complete three 360° turns, clearing the engine as appropriate</div>
                        </li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-2">Common Errors</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <div>Inconsistent radius around the reference point</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <div>Failure to maintain constant airspeed</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <div>Improper wind drift correction</div>
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-1/3 flex items-center justify-center">
                      <div className="bg-muted rounded-lg p-4 w-full h-48 flex items-center justify-center">
                        <p className="text-center text-muted-foreground">Steep Spirals Diagram</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Alert className="bg-primary/10 border-primary/20 mt-8">
                  <AlertTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" /> Mastering Commercial Maneuvers
                  </AlertTitle>
                  <AlertDescription>
                    <p className="mt-2">
                      Commercial maneuvers are designed to test your ability to fly with precision throughout the
                      aircraft's performance envelope. They require a deep understanding of aerodynamics, energy
                      management, and aircraft control.
                    </p>
                    <p className="mt-2">
                      The key to mastering these maneuvers is consistent practice with a focus on smoothness and
                      precision. Each maneuver should be practiced until it becomes second nature, allowing you to focus
                      on the finer points of execution during your checkride.
                    </p>
                    <p className="mt-2 font-medium">
                      Remember: These maneuvers aren't just checkride requirements—they're building blocks that develop
                      the precise aircraft control skills you'll need throughout your professional flying career.
                    </p>
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </TabsContent>

          {/* Preparation Tab */}
          <TabsContent value="preparation" className="space-y-6">
            <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">Commercial Checkride Preparation Timeline</h2>
                  <p className="text-muted-foreground">Your roadmap to professional pilot success</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="lead">
                  Preparing for your commercial checkride requires a structured approach that builds on your private and
                  instrument training. This timeline will help you organize your study and practice to ensure you're
                  fully prepared to demonstrate professional-level skills.
                </p>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">One Month Before</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Complete your knowledge test if you haven't already.</p>
                        <p className="text-sm text-muted-foreground">
                          Review your knowledge test results and understand any questions you missed.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Study the Commercial Pilot ACS thoroughly.</p>
                        <p className="text-sm text-muted-foreground">
                          Understand the standards for each task and element, noting the tighter tolerances compared to
                          private pilot standards.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Master complex aircraft systems.</p>
                        <p className="text-sm text-muted-foreground">
                          Understand the operation of retractable landing gear, constant-speed propellers, and other
                          complex aircraft systems in detail.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Begin practicing commercial maneuvers regularly.</p>
                        <p className="text-sm text-muted-foreground">
                          Focus on developing consistency in chandelles, lazy eights, eights on pylons, and other
                          commercial maneuvers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Two Weeks Before</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Schedule a mock checkride with an instructor.</p>
                        <p className="text-sm text-muted-foreground">
                          This should include both oral and flight portions to identify any weak areas.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Study commercial operations regulations in depth.</p>
                        <p className="text-sm text-muted-foreground">
                          Focus on Parts 61, 91, and 119, especially regarding commercial pilot privileges and
                          limitations.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Practice emergency procedures specific to complex aircraft.</p>
                        <p className="text-sm text-muted-foreground">
                          Focus on landing gear malfunctions, propeller issues, and electrical system failures.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Begin organizing your documents.</p>
                        <p className="text-sm text-muted-foreground">
                          Gather logbooks, knowledge test results, ID, medical certificate, and aircraft documents.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">One Week Before</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Confirm your checkride appointment.</p>
                        <p className="text-sm text-muted-foreground">
                          Double-check the time, location, and examiner's contact information.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Focus on polishing commercial maneuvers.</p>
                        <p className="text-sm text-muted-foreground">
                          Work on smoothness, precision, and consistency in all maneuvers.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Practice scenario-based decision making.</p>
                        <p className="text-sm text-muted-foreground">
                          Work through commercial operations scenarios with your instructor to develop professional
                          judgment.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Review aircraft performance calculations.</p>
                        <p className="text-sm text-muted-foreground">
                          Practice weight and balance, takeoff and landing performance, and cruise performance
                          calculations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">The Day Before</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Get a good night's sleep.</p>
                        <p className="text-sm text-muted-foreground">
                          Being well-rested is crucial for the mental demands of a commercial checkride.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Review your notes one last time.</p>
                        <p className="text-sm text-muted-foreground">
                          Focus on key regulations, procedures, and personal weak areas.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Check the weather forecast.</p>
                        <p className="text-sm text-muted-foreground">
                          Begin thinking about how the forecast conditions might affect your checkride and maneuvers.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Prepare your cross-country flight plan.</p>
                        <p className="text-sm text-muted-foreground">
                          Have a draft flight plan ready for the route your examiner might assign.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Double-check all documents.</p>
                        <p className="text-sm text-muted-foreground">
                          Ensure everything is signed, current, and organized for easy access.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Checkride Day</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Arrive early and dress professionally.</p>
                        <p className="text-sm text-muted-foreground">
                          First impressions matter. Dress and conduct yourself like a professional pilot.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Get a thorough weather briefing.</p>
                        <p className="text-sm text-muted-foreground">
                          Be prepared to discuss current conditions and how they affect your flight.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Conduct a thorough preflight.</p>
                        <p className="text-sm text-muted-foreground">
                          Pay special attention to complex aircraft systems and required equipment.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Fly with precision and professionalism.</p>
                        <p className="text-sm text-muted-foreground">
                          Remember that you're demonstrating not just flying skills, but the judgment and
                          decision-making of a professional pilot.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Essential Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" /> Study Materials
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Commercial Pilot Airman Certification Standards (ACS)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Airplane Flying Handbook (FAA-H-8083-3)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Aviation Weather (AC 00-6)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>FAR/AIM (current edition)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Complex Aircraft POH/AFM</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Plane className="h-5 w-5 text-primary" /> Practice Resources
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Commercial Maneuvers Guide</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Commercial Pilot Oral Exam Guide</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Complex Aircraft Systems Training</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Commercial Pilot Checkride Prep App</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>AACA Commercial Pilot Study Guide</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Alert className="bg-primary/10 border-primary/20 mt-8">
                  <AlertTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" /> Final Thought
                  </AlertTitle>
                  <AlertDescription>
                    <p className="mt-2">
                      The commercial pilot certificate is a significant milestone in your aviation career. It marks your
                      transition from recreational flying to professional aviation.
                    </p>
                    <p className="mt-2">
                      Remember that your examiner isn't just looking for technical proficiency—they're looking for
                      someone who thinks, acts, and flies like a professional pilot.
                    </p>
                    <p className="mt-2 font-medium">
                      Approach your checkride with confidence, precision, and professionalism, and you'll be well on
                      your way to a successful career in aviation.
                    </p>
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Explore Other Checkrides Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-display font-bold mb-6">Explore Other Checkrides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/checkrides/private"
            className="block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
          >
            <Card className="overflow-hidden h-full">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-3">
                <h3 className="text-lg font-display font-bold text-white">Private Pilot</h3>
              </div>
              <CardContent className="pt-3">
                <p className="text-sm text-muted-foreground">
                  Your first major checkride—demonstrating you're ready to be pilot in command.
                </p>
              </CardContent>
              <CardFooter className="bg-muted/30 pt-2 pb-2 flex justify-end">
                <ArrowRight className="h-4 w-4 text-primary" />
              </CardFooter>
            </Card>
          </Link>

          <Link
            href="/checkrides/instrument"
            className="block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
          >
            <Card className="overflow-hidden h-full">
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-3">
                <h3 className="text-lg font-display font-bold text-white">Instrument Rating</h3>
              </div>
              <CardContent className="pt-3">
                <p className="text-sm text-muted-foreground">
                  Flying with precision when you can't see outside the cockpit.
                </p>
              </CardContent>
              <CardFooter className="bg-muted/30 pt-2 pb-2 flex justify-end">
                <ArrowRight className="h-4 w-4 text-primary" />
              </CardFooter>
            </Card>
          </Link>

          <Link
            href="/checkrides/multi-engine"
            className="block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
          >
            <Card className="overflow-hidden h-full">
              <div className="bg-gradient-to-r from-amber-600 to-amber-800 p-3">
                <h3 className="text-lg font-display font-bold text-white">Multi-Engine</h3>
              </div>
              <CardContent className="pt-3">
                <p className="text-sm text-muted-foreground">Mastering asymmetric thrust and engine-out procedures.</p>
              </CardContent>
              <CardFooter className="bg-muted/30 pt-2 pb-2 flex justify-end">
                <ArrowRight className="h-4 w-4 text-primary" />
              </CardFooter>
            </Card>
          </Link>

          <Link
            href="/checkrides/cfi"
            className="block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
          >
            <Card className="overflow-hidden h-full">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-3">
                <h3 className="text-lg font-display font-bold text-white">CFI</h3>
              </div>
              <CardContent className="pt-3">
                <p className="text-sm text-muted-foreground">
                  Proving you can teach others to fly safely and effectively.
                </p>
              </CardContent>
              <CardFooter className="bg-muted/30 pt-2 pb-2 flex justify-end">
                <ArrowRight className="h-4 w-4 text-primary" />
              </CardFooter>
            </Card>
          </Link>

          <Link
            href="/checkrides/atp"
            className="block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
          >
            <Card className="overflow-hidden h-full">
              <div className="bg-gradient-to-r from-slate-600 to-slate-800 p-3">
                <h3 className="text-lg font-display font-bold text-white">ATP</h3>
              </div>
              <CardContent className="pt-3">
                <p className="text-sm text-muted-foreground">The final step to becoming an airline transport pilot.</p>
              </CardContent>
              <CardFooter className="bg-muted/30 pt-2 pb-2 flex justify-end">
                <ArrowRight className="h-4 w-4 text-primary" />
              </CardFooter>
            </Card>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-3xl bg-gradient-to-r from-green-700 to-green-900 text-white overflow-hidden">
        <div className="px-6 py-12 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready for Your Commercial Checkride?</h2>
            <p className="text-white/80 text-lg mb-6">
              Get access to one-on-one prep sessions, mock orals, and in-depth resources to help you walk into your
              commercial checkride with confidence and professionalism.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-green-700 hover:bg-white/90">
                Schedule Prep Session
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Download Prep Checklist <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative w-64 h-64 animate-float">
              <div className="w-full h-full bg-[url('/images/pilots-modern-cockpit-instruments.jpg')] bg-contain bg-no-repeat"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

