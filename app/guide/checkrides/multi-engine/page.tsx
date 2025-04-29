import type { Metadata } from "next"
import Link from "next/link"
import {
  ChevronRight,
  PlaneTakeoff,
  FileText,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  Brain,
  Lightbulb,
  Clock,
  Calendar,
  Plane,
  Gauge,
  Shield,
  Zap,
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
  title: "Multi-Engine Rating Checkride | AACA Student Pilot Guide",
  description:
    "Master your Multi-Engine Rating checkride with comprehensive preparation for asymmetric thrust operations, engine-out procedures, and systems knowledge.",
}

export default function MultiEngineCheckridePage() {
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
            <BreadcrumbLink href="/checkrides/multi-engine">Multi-Engine Rating</BreadcrumbLink>
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
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-600 to-amber-900 text-white mb-12">
        <div className="absolute inset-0 bg-[url('/images/twin-engine-sunset.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 px-6 py-16 md:py-24 md:px-12 max-w-4xl">
          <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">Multi-Engine Rating</Badge>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Multi-Engine Checkride
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl">Mastering the twin-engine challenge</p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-white text-amber-700 hover:bg-white/90">
              Start Preparing
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Download Prep Checklist <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 -mb-12 -mr-12 opacity-20 md:opacity-30">
          <div className="w-full h-full bg-[url('/images/multi-engine-training.jpg')] bg-contain bg-no-repeat"></div>
        </div>
      </section>

      {/* Personal Note Alert */}
      <Alert className="bg-muted border-muted-foreground/20 mb-8">
        <AlertTitle className="flex items-center gap-2 text-lg font-display font-semibold">
          <FileText className="h-5 w-5" /> Personal Note from Your Instructor
        </AlertTitle>
        <AlertDescription className="text-base mt-2">
          The Multi-Engine Rating checkride is a significant step in your aviation career. It's not just about learning
          to fly an aircraft with two engines—it's about developing the skills to handle the most critical emergency in
          aviation: an engine failure in a multi-engine aircraft. This checkride will test your ability to remain calm,
          make quick decisions, and safely manage an aircraft that suddenly becomes significantly more challenging to
          fly. Master these skills, and you'll be ready for the next level of your aviation journey.
        </AlertDescription>
      </Alert>

      {/* Main Content Tabs */}
      <section className="mb-16">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="oral-exam">Oral Exam</TabsTrigger>
            <TabsTrigger value="flight-test">Flight Test</TabsTrigger>
            <TabsTrigger value="engine-out">Engine-Out Ops</TabsTrigger>
            <TabsTrigger value="preparation">Preparation</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <PlaneTakeoff className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">Multi-Engine Rating Checkride Overview</h2>
                  <p className="text-muted-foreground">Your gateway to twin-engine flying</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="lead">
                  The Multi-Engine Rating checkride evaluates your ability to safely operate aircraft with more than one
                  engine. The focus is on handling asymmetric thrust during engine-out operations—one of the most
                  challenging scenarios in aviation.
                </p>

                <div className="bg-card rounded-lg p-6 border my-6">
                  <h3 className="text-xl font-display font-semibold mb-4">What Makes This Checkride Different?</h3>
                  <p>
                    The Multi-Engine Rating checkride is unique in its focus on emergency operations and systems
                    knowledge:
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Heavy emphasis on single-engine operations and emergencies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Deep understanding of multi-engine aerodynamics and performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Critical speed concepts (Vmc, Vyse, etc.) and their practical application</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Complex systems knowledge specific to multi-engine aircraft</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Quick decision-making under high workload conditions</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Checkride Structure</h3>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Brain className="h-5 w-5 text-primary" /> Oral Exam (1.5–2 hours)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        A comprehensive evaluation of your multi-engine knowledge, focusing on:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Multi-engine aerodynamics and performance</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Systems specific to multi-engine aircraft</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Engine-out procedures and emergency operations</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Critical speeds and their significance</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Weight and balance considerations</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Plane className="h-5 w-5 text-primary" /> Flight Test (1–1.5 hours)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        A demonstration of your multi-engine flying skills, including:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Normal and emergency procedures</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Engine failure during various phases of flight</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Single-engine maneuvering and approaches</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Vmc demonstration and recovery</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Precision control during asymmetric thrust</div>
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
                      <h4 className="font-medium text-lg mb-2">Focus on Engine-Out Operations</h4>
                      <p className="text-sm mb-0">
                        Unlike single-engine checkrides, the multi-engine checkride places heavy emphasis on your
                        ability to handle the aircraft safely with one engine inoperative.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-2">Critical Performance Calculations</h4>
                      <p className="text-sm mb-0">
                        You'll need to demonstrate a thorough understanding of multi-engine performance calculations,
                        including single-engine service ceiling, accelerate-stop distance, and more.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-2">Complex Systems Knowledge</h4>
                      <p className="text-sm mb-0">
                        Multi-engine aircraft typically have more complex systems, including dual electrical systems,
                        hydraulic systems, and propeller synchronization that you must understand in detail.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-2">Higher Workload Environment</h4>
                      <p className="text-sm mb-0">
                        The checkride evaluates your ability to manage a significantly higher workload, especially
                        during emergency scenarios when you must simultaneously fly the aircraft, troubleshoot, and
                        communicate.
                      </p>
                    </div>
                  </div>
                </div>

                <Alert className="bg-primary/10 border-primary/20 mt-8">
                  <AlertTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" /> The Multi-Engine Mindset
                  </AlertTitle>
                  <AlertDescription>
                    <p className="mt-2">
                      The key to passing your multi-engine checkride is developing the "engine-out mindset"—always being
                      prepared for an engine failure at any moment. This means constantly thinking about your options,
                      your aircraft's performance capabilities, and your decision-making process.
                    </p>
                    <p className="mt-2 font-medium">
                      Remember: In multi-engine flying, an engine failure is not just an emergency to be handled—it's a
                      scenario to be mastered.
                    </p>
                    <p className="mt-2">
                      This mindset shift from "hoping it doesn't happen" to "being ready when it happens" is what
                      examiners are looking for throughout your checkride.
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
                  <h2 className="text-2xl font-display font-bold">The Multi-Engine Oral Exam</h2>
                  <p className="text-muted-foreground">Demonstrating your multi-engine knowledge and decision-making</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="lead">
                  The multi-engine oral exam focuses heavily on systems knowledge, aerodynamics, and emergency
                  procedures. You'll need to demonstrate not just rote knowledge, but a deep understanding of how
                  multi-engine aircraft operate, especially during critical engine-out scenarios.
                </p>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Key Knowledge Areas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <Card>
                    <CardHeader className="pb-2 bg-amber-50 dark:bg-amber-950/30 rounded-t-lg">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Plane className="h-5 w-5 text-primary" /> Multi-Engine Aerodynamics
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Critical engine concept and identification</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>P-factor, spiraling slipstream, and torque effects</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Vmc (minimum control airspeed) factors and demonstration</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Vyse (best single-engine rate of climb speed)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Zero sideslip and its importance</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2 bg-amber-50 dark:bg-amber-950/30 rounded-t-lg">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Gauge className="h-5 w-5 text-primary" /> Systems Knowledge
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Dual electrical systems and load shedding</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Fuel system design and management</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Propeller feathering mechanisms and procedures</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Hydraulic systems (if applicable)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Engine fire detection and suppression</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2 bg-amber-50 dark:bg-amber-950/30 rounded-t-lg">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" /> Emergency Procedures
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Engine failure during various phases of flight</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Engine fire procedures</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Electrical system failures</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Propeller system malfunctions</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Vmc demonstration and recovery</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2 bg-amber-50 dark:bg-amber-950/30 rounded-t-lg">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Zap className="h-5 w-5 text-primary" /> Performance Calculations
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Single-engine service ceiling</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Accelerate-stop and accelerate-go distances</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Single-engine climb performance</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Weight and balance considerations</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Fuel planning with engine-out contingencies</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Common Oral Exam Scenarios</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <p className="mb-4">
                    Your examiner will likely present several scenarios to test your multi-engine decision-making. Here
                    are some common ones to prepare for:
                  </p>
                  <div className="space-y-6">
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Engine Failure After Takeoff</h4>
                      <p className="mb-2">
                        "You experience an engine failure shortly after takeoff at 400 feet AGL. Walk me through your
                        decision-making process and actions."
                      </p>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Single-Engine Approach and Landing</h4>
                      <p className="mb-2">
                        "You're 15 miles from your destination when you lose an engine. How would you approach the
                        situation, and what factors would influence your decisions about continuing to your destination
                        versus diverting?"
                      </p>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Engine Fire in Flight</h4>
                      <p className="mb-2">
                        "You detect an engine fire in cruise flight. What are your immediate actions, and how would you
                        handle the emergency?"
                      </p>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Takeoff Planning</h4>
                      <p className="mb-2">
                        "Given these weather conditions, aircraft weight, and runway length, would you attempt this
                        takeoff? What performance calculations would you make, and what would be your decision-making
                        process?"
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Tips for the Multi-Engine Oral Exam</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">1</span>
                    </div>
                    <div>
                      <span className="font-medium">Know your aircraft systems cold.</span> Understand how each system
                      works, how it's powered, and what happens if that power source fails.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">2</span>
                    </div>
                    <div>
                      <span className="font-medium">Master the critical speeds.</span> Know Vmc, Vyse, Vxse, and other
                      critical speeds by heart, including the factors that affect them.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">3</span>
                    </div>
                    <div>
                      <span className="font-medium">Understand the "why" behind procedures.</span> Don't just memorize
                      emergency checklists—understand the aerodynamic and systems reasons behind each step.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">4</span>
                    </div>
                    <div>
                      <span className="font-medium">Be decisive in emergency scenarios.</span> Multi-engine emergencies
                      often require quick, confident decisions. Demonstrate clear thinking and prioritization.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">5</span>
                    </div>
                    <div>
                      <span className="font-medium">Know your performance limitations.</span> Be able to calculate
                      single-engine performance numbers and understand how different factors affect them.
                    </div>
                  </li>
                </ul>

                <Alert className="bg-primary/10 border-primary/20 mt-8">
                  <AlertTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" /> Remember This
                  </AlertTitle>
                  <AlertDescription>
                    <p className="mt-2">
                      The multi-engine oral exam is testing your ability to think and make decisions as a pilot
                      operating a more complex aircraft, especially during emergencies.
                    </p>
                    <p className="mt-2">
                      Your examiner wants to see that you understand the unique challenges of multi-engine flying and
                      that you can apply your knowledge to real-world scenarios.
                    </p>
                    <p className="mt-2 font-medium">
                      When answering questions, always consider: "How would this situation be different in a
                      multi-engine aircraft compared to a single-engine aircraft?"
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
                  <h2 className="text-2xl font-display font-bold">The Multi-Engine Flight Test</h2>
                  <p className="text-muted-foreground">Demonstrating precision control with asymmetric thrust</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="lead">
                  The flight portion of your multi-engine checkride will test your ability to safely operate the
                  aircraft in both normal and single-engine conditions. You'll need to demonstrate precise aircraft
                  control, especially during the challenging scenarios of asymmetric thrust.
                </p>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">What to Expect During the Flight</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <p className="mb-4">Your multi-engine flight test will typically follow this sequence:</p>
                  <ol className="space-y-4 mb-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">1</span>
                      </div>
                      <div>
                        <span className="font-medium">Preflight and Systems Knowledge</span>
                        <p className="text-sm mt-1">
                          You'll demonstrate a thorough preflight inspection with emphasis on multi-engine systems,
                          including propellers, dual electrical systems, and engine controls.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">2</span>
                      </div>
                      <div>
                        <span className="font-medium">Normal Operations</span>
                        <p className="text-sm mt-1">
                          You'll perform normal takeoffs, climbs, and basic maneuvers to demonstrate your ability to
                          handle the multi-engine aircraft in normal conditions.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">3</span>
                      </div>
                      <div>
                        <span className="font-medium">Engine Failure Procedures</span>
                        <p className="text-sm mt-1">
                          The examiner will simulate engine failures during various phases of flight, including:
                        </p>
                        <ul className="text-sm mt-1 space-y-1">
                          <li>• Engine failure during cruise</li>
                          <li>• Engine failure during takeoff (at a safe altitude)</li>
                          <li>• Engine failure during approach and landing</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">4</span>
                      </div>
                      <div>
                        <span className="font-medium">Vmc Demonstration</span>
                        <p className="text-sm mt-1">
                          You'll demonstrate your understanding of minimum control airspeed (Vmc) by performing a Vmc
                          demonstration at a safe altitude, showing proper recovery techniques.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">5</span>
                      </div>
                      <div>
                        <span className="font-medium">Single-Engine Maneuvering</span>
                        <p className="text-sm mt-1">
                          With one engine simulated as inoperative, you'll perform various maneuvers including:
                        </p>
                        <ul className="text-sm mt-1 space-y-1">
                          <li>• Climbs at Vyse (best single-engine rate of climb speed)</li>
                          <li>• Turns and configuration changes</li>
                          <li>• Maintaining altitude in level flight</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">6</span>
                      </div>
                      <div>
                        <span className="font-medium">Single-Engine Approach and Landing</span>
                        <p className="text-sm mt-1">
                          You'll perform an approach and landing with one engine simulated as inoperative, demonstrating
                          proper procedures and aircraft control throughout.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">7</span>
                      </div>
                      <div>
                        <span className="font-medium">Emergency Procedures</span>
                        <p className="text-sm mt-1">
                          You'll demonstrate your response to various emergency scenarios, such as engine fires,
                          electrical failures, or propeller malfunctions.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Performance Standards</h3>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
                  <p className="mb-4 font-medium">According to the Multi-Engine ACS, you must maintain:</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Altitude:</span> ±100 feet (normal operations), ±200 feet
                        (engine-out operations)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Heading:</span> ±10 degrees (normal operations), ±20 degrees
                        (engine-out operations)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Airspeed:</span> ±10 knots, with special emphasis on maintaining
                        Vyse ±5 knots during engine-out operations
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Bank angle:</span> Appropriate for the maneuver, with emphasis on
                        proper bank angle during engine-out turns
                      </div>
                    </li>
                  </ul>
                  <p className="font-medium">
                    Beyond these technical standards, the examiner will be looking for smooth, coordinated control
                    inputs, proper use of checklists, and sound decision-making throughout the flight.
                  </p>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Tips for the Multi-Engine Flight Test</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">1</span>
                    </div>
                    <div>
                      <span className="font-medium">Maintain positive aircraft control at all times.</span> This is
                      especially critical during engine-out operations when asymmetric thrust creates significant
                      control challenges.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">2</span>
                    </div>
                    <div>
                      <span className="font-medium">Use proper single-engine techniques.</span> Remember "dead foot,
                      dead engine" and maintain the proper rudder input to counteract asymmetric thrust.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">3</span>
                    </div>
                    <div>
                      <span className="font-medium">Follow checklists methodically.</span> Multi-engine emergency
                      procedures are often more complex and require careful attention to sequence and timing.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">4</span>
                    </div>
                    <div>
                      <span className="font-medium">Maintain situational awareness.</span> Don't fixate on the failed
                      engine—remember to fly the airplane first, navigate second, and communicate third.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">5</span>
                    </div>
                    <div>
                      <span className="font-medium">Verbalize your actions.</span> Explain what you're doing and why,
                      especially during emergency procedures, to demonstrate your understanding.
                    </div>
                  </li>
                </ul>

                <Alert className="bg-primary/10 border-primary/20 mt-8">
                  <AlertTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" /> Pro Tip: The Engine-Out Mindset
                  </AlertTitle>
                  <AlertDescription>
                    <p className="mt-2">
                      During your multi-engine checkride, approach every phase of flight with the question: "What would
                      I do if an engine failed right now?" This mindset keeps you prepared for the examiner's simulated
                      failures.
                    </p>
                    <p className="mt-2">
                      Remember that in multi-engine flying, an engine failure is not just an emergency—it's an expected
                      scenario that you should be prepared to handle professionally and precisely.
                    </p>
                    <p className="mt-2 font-medium">
                      The key is to make the transition from normal flight to single-engine operations smooth,
                      controlled, and deliberate. This demonstrates that you're truly ready for the responsibilities of
                      multi-engine flight.
                    </p>
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </TabsContent>

          {/* Engine-Out Operations Tab */}
          <TabsContent value="engine-out" className="space-y-6">
            <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">Engine-Out Operations</h2>
                  <p className="text-muted-foreground">Mastering the critical emergency in multi-engine flying</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="lead">
                  Engine-out operations are the heart of multi-engine flying and the primary focus of your checkride.
                  Understanding the aerodynamics, procedures, and performance implications of losing an engine is
                  essential for safe multi-engine operations.
                </p>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">
                  Critical Concepts in Engine-Out Operations
                </h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Vmc (Minimum Control Airspeed)</h4>
                      <p className="mb-2">
                        Vmc is the minimum airspeed at which directional control can be maintained with one engine
                        inoperative (critical engine), maximum power on the operating engine, up to 5° bank toward the
                        operating engine, and the landing gear and flaps retracted.
                      </p>
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="font-medium mb-2">Factors that affect Vmc:</p>
                        <ul className="space-y-1">
                          <li>• Weight (lower weight = higher Vmc)</li>
                          <li>• Density altitude (higher density altitude = lower Vmc)</li>
                          <li>• Bank angle (bank toward operating engine lowers Vmc)</li>
                          <li>• CG position (aft CG = higher Vmc)</li>
                          <li>• Windmilling vs. feathered propeller (windmilling = higher Vmc)</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">Critical Engine</h4>
                      <p className="mb-2">
                        On most conventional twin-engine aircraft, the left engine is critical. Failure of the critical
                        engine creates a more adverse yaw condition due to:
                      </p>
                      <ul className="space-y-1 mb-2">
                        <li>• P-factor (asymmetric propeller thrust)</li>
                        <li>• Spiraling slipstream effects</li>
                        <li>• Torque effect</li>
                        <li>• Propeller blade acceleration effect</li>
                      </ul>
                      <p>Understanding which engine is critical and why is essential for proper engine-out control.</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">Vyse (Best Single-Engine Rate of Climb Speed)</h4>
                      <p className="mb-2">
                        Vyse is the airspeed that provides the best rate of climb with one engine inoperative. This is a
                        critical speed to maintain during engine-out operations to maximize climb performance or
                        minimize descent rate.
                      </p>
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="font-medium mb-0">
                          Remember: Vyse is often depicted as a blue line on the airspeed indicator and is typically
                          higher than the best rate of climb speed (Vy) for normal operations.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">Zero Sideslip Condition</h4>
                      <p className="mb-2">
                        The zero sideslip condition is the optimal configuration for single-engine operations, providing
                        the lowest drag and best performance. It's achieved through:
                      </p>
                      <ul className="space-y-1">
                        <li>• Approximately 2-3° bank toward the operating engine</li>
                        <li>• Enough rudder pressure to maintain coordinated flight</li>
                        <li>• Proper power settings on the operating engine</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">
                  Engine Failure Procedures by Phase of Flight
                </h3>
                <div className="space-y-6 my-6">
                  <Card>
                    <CardHeader className="pb-2 bg-amber-50 dark:bg-amber-950/30 rounded-t-lg">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <PlaneTakeoff className="h-5 w-5 text-primary" /> Engine Failure During Takeoff
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Before Rotation (Reject Takeoff)</h4>
                          <ol className="space-y-1 text-sm">
                            <li>1. Retard both throttles immediately</li>
                            <li>2. Apply maximum braking</li>
                            <li>3. Maintain directional control</li>
                            <li>4. Activate emergency braking system if necessary</li>
                            <li>5. Exit aircraft if necessary</li>
                          </ol>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">
                            After Rotation, Below Safe Single-Engine Maneuvering Altitude
                          </h4>
                          <p className="text-sm mb-2">
                            This is one of the most critical scenarios. If an engine fails after liftoff but before
                            reaching a safe single-engine maneuvering altitude (typically 400-500 ft AGL):
                          </p>
                          <ol className="space-y-1 text-sm">
                            <li>1. Maintain control and pitch for best glide speed</li>
                            <li>2. Land straight ahead or with minimal turns</li>
                            <li>3. Accept landing on unsuitable terrain rather than attempting to turn back</li>
                          </ol>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">After Reaching Safe Single-Engine Maneuvering Altitude</h4>
                          <ol className="space-y-1 text-sm">
                            <li>1. Maintain directional control with rudder</li>
                            <li>2. Pitch for Vyse (blue line)</li>
                            <li>3. Identify: "Dead foot, dead engine"</li>
                            <li>4. Verify: Retard throttle to confirm failed engine</li>
                            <li>5. Feather: Feather the propeller on the failed engine</li>
                            <li>6. Secure: Complete engine shutdown checklist</li>
                            <li>7. Climb at Vyse, bank 2-3° toward operating engine</li>
                            <li>8. Return for landing or continue flight if performance allows</li>
                          </ol>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2 bg-amber-50 dark:bg-amber-950/30 rounded-t-lg">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Plane className="h-5 w-5 text-primary" /> Engine Failure During Cruise
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ol className="space-y-1">
                        <li>1. Maintain directional control with rudder</li>
                        <li>2. Pitch for Vyse if climb is needed, or cruise speed if altitude can be maintained</li>
                        <li>3. Identify the failed engine: "Dead foot, dead engine"</li>
                        <li>4. Verify by retarding the suspect throttle</li>
                        <li>5. Feather the propeller on the failed engine</li>
                        <li>6. Secure the failed engine using the appropriate checklist</li>
                        <li>7. Establish zero sideslip condition (2-3° bank toward operating engine)</li>
                        <li>8. Analyze the situation and make a diversion decision if necessary</li>
                        <li>9. Declare an emergency if appropriate</li>
                        <li>10. Plan for a single-engine approach and landing</li>
                      </ol>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2 bg-amber-50 dark:bg-amber-950/30 rounded-t-lg">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Gauge className="h-5 w-5 text-primary" /> Engine Failure During Approach and Landing
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <p>
                          Engine failures during approach and landing are generally less critical than during takeoff,
                          but still require proper procedures:
                        </p>
                        <ol className="space-y-1">
                          <li>1. Maintain directional control with rudder</li>
                          <li>2. Identify the failed engine</li>
                          <li>3. Verify by retarding the suspect throttle</li>
                          <li>4. Feather the propeller if time and altitude permit</li>
                          <li>5. Maintain approach speed (typically slightly higher than normal)</li>
                          <li>6. Use flaps judiciously (typically less than full flaps)</li>
                          <li>7. Maintain extra airspeed until landing is assured</li>
                          <li>8. Plan for a slightly flatter approach</li>
                          <li>9. Be prepared for reduced or no go-around capability</li>
                        </ol>
                        <div className="bg-muted p-4 rounded-lg">
                          <p className="font-medium mb-0">
                            Remember: During single-engine approaches, go-around capability may be limited or
                            non-existent. Commit to landing once the decision is made.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Vmc Demonstration</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <p className="mb-4">
                    The Vmc demonstration is a critical maneuver in your multi-engine checkride. It demonstrates your
                    understanding of minimum control airspeed and proper recovery techniques.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Setup:</h4>
                      <ol className="space-y-1">
                        <li>1. Altitude: At least 3,000-5,000 ft AGL</li>
                        <li>2. Airspeed: Slow to approximately 10 knots above Vmc</li>
                        <li>3. Configuration: Landing gear up, flaps up</li>
                        <li>4. Power: Idle on critical engine, maximum available on operating engine</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Execution:</h4>
                      <ol className="space-y-1">
                        <li>1. Maintain heading with rudder</li>
                        <li>2. Slowly reduce airspeed (approximately 1 knot per second)</li>
                        <li>3. Note increasing rudder pressure required to maintain heading</li>
                        <li>4. At first indication of loss of directional control, recover immediately</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Recovery:</h4>
                      <ol className="space-y-1">
                        <li>1. Reduce power on operating engine</li>
                        <li>2. Lower nose to accelerate above Vmc</li>
                        <li>3. Level wings</li>
                        <li>4. Once control is regained, slowly add power and climb</li>
                      </ol>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <p className="font-medium mb-2">Warning:</p>
                      <p className="mb-0">
                        Never allow a full Vmc demonstration to progress to an actual loss of control. At the first sign
                        of loss of directional control (rudder pedal bottomed out, heading deviation, or roll into the
                        inoperative engine), execute the recovery procedure immediately.
                      </p>
                    </div>
                  </div>
                </div>

                <Alert className="bg-primary/10 border-primary/20 mt-8">
                  <AlertTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" /> Pro Tips for Engine-Out Operations
                  </AlertTitle>
                  <AlertDescription>
                    <p className="mt-2">
                      <span className="font-medium">Memory aid: "IDENTIFY, VERIFY, FEATHER, SECURE"</span> - This helps
                      you remember the critical steps in engine failure management.
                    </p>
                    <p className="mt-2">
                      <span className="font-medium">"Dead foot, dead engine"</span> - The rudder pedal that feels "dead"
                      (not pushing back against your foot) corresponds to the failed engine.
                    </p>
                    <p className="mt-2">
                      <span className="font-medium">Bank angle matters</span> - A 2-3° bank toward the operating engine
                      reduces Vmc and improves performance in engine-out operations.
                    </p>
                    <p className="mt-2">
                      <span className="font-medium">Airspeed is critical</span> - Maintaining Vyse (blue line) gives you
                      the best single-engine climb performance. Falling below Vmc can lead to loss of control.
                    </p>
                    <p className="mt-2">
                      <span className="font-medium">Practice makes perfect</span> - The more you practice these
                      procedures (with an instructor), the more automatic they'll become when you need them.
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
                  <h2 className="text-2xl font-display font-bold">Multi-Engine Checkride Preparation Timeline</h2>
                  <p className="text-muted-foreground">Your roadmap to multi-engine success</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="lead">
                  Preparing for your multi-engine checkride requires focused study and practice on the unique aspects of
                  twin-engine operations. This timeline will help you organize your preparation to ensure you're fully
                  ready for the challenges of this important checkride.
                </p>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">One Month Before</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Master multi-engine aerodynamics and systems.</p>
                        <p className="text-sm text-muted-foreground">
                          Focus on understanding Vmc, Vyse, critical engine concepts, and the unique systems in your
                          multi-engine aircraft.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Study the Multi-Engine ACS thoroughly.</p>
                        <p className="text-sm text-muted-foreground">
                          Understand the standards for each task and element, noting the specific requirements for
                          engine-out operations.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Create a study schedule focused on multi-engine operations.</p>
                        <p className="text-sm text-muted-foreground">
                          Allocate specific time for systems, emergency procedures, performance calculations, and
                          aerodynamics.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Practice engine-out scenarios mentally.</p>
                        <p className="text-sm text-muted-foreground">
                          Chair-fly emergency procedures for engine failures during different phases of flight.
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
                          This should include both oral and flight portions to identify any weak areas, with special
                          focus on engine-out operations.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Review emergency checklists until they're second nature.</p>
                        <p className="text-sm text-muted-foreground">
                          Focus on engine failure, engine fire, electrical failure, and propeller malfunction
                          procedures.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Practice single-engine performance calculations.</p>
                        <p className="text-sm text-muted-foreground">
                          Work through various scenarios involving weight, altitude, temperature, and their effects on
                          single-engine performance.
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
                        <p className="font-medium">Focus on refining engine-out procedures.</p>
                        <p className="text-sm text-muted-foreground">
                          Practice your responses to engine failures during different phases of flight until they become
                          automatic.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Review aircraft systems in detail.</p>
                        <p className="text-sm text-muted-foreground">
                          Focus on electrical, fuel, hydraulic, and propeller systems specific to your multi-engine
                          aircraft.
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
                          Work through various engine-out scenarios and develop your decision-making process for each.
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
                          Being well-rested is crucial for the mental demands of a multi-engine checkride.
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
                          Focus on key multi-engine concepts, critical speeds, and emergency procedures.
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
                          Begin thinking about how the forecast conditions might affect your checkride, especially
                          single-engine operations.
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
                          First impressions matter. Give yourself plenty of time to prepare mentally.
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
                          Pay special attention to multi-engine specific items like propellers, dual electrical systems,
                          and engine controls.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Stay calm during simulated emergencies.</p>
                        <p className="text-sm text-muted-foreground">
                          Remember your training and follow procedures methodically when the examiner simulates engine
                          failures.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Fly with precision and confidence.</p>
                        <p className="text-sm text-muted-foreground">
                          Demonstrate that you can handle the aircraft safely in both normal and engine-out conditions.
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
                          <div>Multi-Engine Airman Certification Standards (ACS)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Multi-Engine Flying by Paul Craig</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>The Complete Multi-Engine Pilot by Bob Gardner</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>FAR/AIM (current edition)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Aircraft POH/AFM for your specific multi-engine aircraft</div>
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
                          <div>Multi-Engine Oral Exam Guide</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Engine-Out Procedure Flashcards</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Multi-Engine Performance Calculator Apps</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Multi-Engine Systems Diagrams</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>AACA Multi-Engine Study Guide</div>
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
                      The multi-engine rating is a significant step in your aviation career, opening doors to more
                      complex aircraft and operations.
                    </p>
                    <p className="mt-2">
                      Remember that the key to success is mastering engine-out operations. Your examiner wants to see
                      that you can handle the aircraft safely and confidently when an engine fails.
                    </p>
                    <p className="mt-2 font-medium">
                      Approach your checkride with confidence, knowing that you've prepared thoroughly for this
                      important milestone in your aviation journey.
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
            href="/checkrides/commercial"
            className="block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
          >
            <Card className="overflow-hidden h-full">
              <div className="bg-gradient-to-r from-green-600 to-green-800 p-3">
                <h3 className="text-lg font-display font-bold text-white">Commercial Pilot</h3>
              </div>
              <CardContent className="pt-3">
                <p className="text-sm text-muted-foreground">
                  Demonstrating professional-level skills and precision flying.
                </p>
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
      <section className="rounded-3xl bg-gradient-to-r from-amber-700 to-amber-900 text-white overflow-hidden">
        <div className="px-6 py-12 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready for Your Multi-Engine Checkride?</h2>
            <p className="text-white/80 text-lg mb-6">
              Get access to one-on-one prep sessions, mock orals, and in-depth resources to help you master engine-out
              operations and walk into your multi-engine checkride with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-amber-700 hover:bg-white/90">
                Schedule Prep Session
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Download Prep Checklist <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative w-64 h-64 animate-float">
              <div className="w-full h-full bg-[url('/images/twin-engine-on-runway.jpg')] bg-contain bg-no-repeat"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

