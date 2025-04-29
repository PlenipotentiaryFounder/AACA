import type { Metadata } from "next"
import Link from "next/link"
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  FileText,
  Gauge,
  Lightbulb,
  Plane,
  Shield,
  AlertTriangle,
  ArrowRight,
  Brain,
  UserCheck,
  Users,
  ArrowLeft,
  Clock,
  Headphones,
  Briefcase,
  Clipboard,
  Laptop,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: "ATP Checkride | AACA Student Pilot Guide",
  description:
    "Master your Airline Transport Pilot checkride with proven strategies, simulator preparation tips, and professional standards from the American Airlines Cadet Academy.",
}

export default function ATPCheckridePage() {
  return (
    <div className="container max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/checkrides">
          <Button variant="ghost" className="flex items-center gap-2 pl-0 hover:pl-0 hover:bg-transparent">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Checkrides</span>
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-700 to-slate-900 text-white mb-12">
        <div className="absolute inset-0 bg-[url('/images/pilots-cockpit-sunset.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 px-6 py-16 md:py-24 md:px-12 max-w-4xl">
          <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">The Final Step</Badge>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Airline Transport Pilot Checkride
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl">
            The pinnacle of pilot certification—your gateway to the airline flight deck
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-white/90">
              Start ATP Preparation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              View ATP Resources <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 -mb-12 -mr-12 opacity-20 md:opacity-30">
          <div className="w-full h-full bg-[url('/images/glass-cockpit-city-view.jpg')] bg-contain bg-no-repeat"></div>
        </div>
      </section>

      {/* Personal Note Alert */}
      <Alert className="bg-muted border-muted-foreground/20 mb-8">
        <AlertTitle className="flex items-center gap-2 text-lg font-display font-semibold">
          <FileText className="h-5 w-5" /> Personal Note from Your Instructor
        </AlertTitle>
        <AlertDescription className="text-base mt-2">
          The ATP checkride represents the culmination of your journey from student to professional pilot. This isn't
          just another rating—it's the certification that qualifies you to serve as pilot-in-command of an airliner
          carrying hundreds of passengers. The standards are high because the stakes are high. But remember: if you've
          made it this far, you've already proven you have what it takes. Now it's time to demonstrate that you're ready
          for the responsibility of the left seat.
        </AlertDescription>
      </Alert>

      {/* Main Content Tabs */}
      <section className="mb-16">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="oral-exam">Oral Exam</TabsTrigger>
            <TabsTrigger value="simulator">Simulator Evaluation</TabsTrigger>
            <TabsTrigger value="professional-standards">Professional Standards</TabsTrigger>
            <TabsTrigger value="preparation">Preparation Timeline</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">What Is the ATP Checkride?</h2>
                  <p className="text-muted-foreground">The highest level of pilot certification</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="lead">
                  The Airline Transport Pilot (ATP) certificate is the highest level of pilot certification and is
                  required to serve as pilot-in-command (captain) of scheduled air carriers operating under FAR Part
                  121, as well as certain operations under Parts 135 and 91.
                </p>

                <p>
                  Unlike previous checkrides that were conducted in actual aircraft, your ATP checkride will typically
                  be conducted entirely in a full flight simulator (FFS) or flight training device (FTD) that represents
                  the aircraft you'll be flying professionally.
                </p>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">
                  What Makes the ATP Checkride Different?
                </h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <p className="mb-4">The ATP checkride differs from previous checkrides in several key ways:</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Professional Standards:</span> You're evaluated to airline captain
                        standards, not just on flying skills
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Crew Environment:</span> You'll typically be evaluated in a
                        multi-crew environment
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Complex Systems:</span> You'll need to demonstrate mastery of
                        complex aircraft systems
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Decision-Making:</span> Emphasis on command authority and judgment
                        in high-workload scenarios
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Simulator-Based:</span> Conducted in a full flight simulator
                        rather than an actual aircraft
                      </div>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">ATP Certificate Requirements</h3>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" /> Experience Requirements
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            1,500 total flight hours (reduced to 1,000 for military pilots, 1,250 for graduates with a
                            bachelor's degree in aviation, or 1,250 for graduates with an associate degree in aviation)
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>500 hours of cross-country flight time</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>100 hours of night flight time</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>75 hours of instrument flight time (actual or simulated)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>250 hours as pilot-in-command</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" /> Knowledge & Training Requirements
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Pass the ATP knowledge test</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Complete the ATP Certification Training Program (ATP CTP)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Hold a commercial pilot certificate with instrument rating</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Be at least 23 years old</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Hold a first-class medical certificate</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">
                  The ATP Certification Training Program (ATP CTP)
                </h3>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
                  <p className="mb-4">
                    Before you can take the ATP knowledge test, you must complete the ATP CTP, which includes:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>30 hours of classroom instruction</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>10 hours of training in a flight simulation training device (FSTD), including:</div>
                    </li>
                    <ul className="space-y-2 ml-8 mb-4">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <div>At least 6 hours in a Level C or D full flight simulator (FFS)</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <div>Up to 4 hours in a flight training device (FTD)</div>
                      </li>
                    </ul>
                  </ul>
                  <p className="font-medium">
                    The ATP CTP must be completed at an authorized training provider and covers topics such as:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>Aerodynamics</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>Automation</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>Adverse weather conditions</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>Air carrier operations</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>Transport aircraft performance</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>Crew resource management (CRM)</div>
                    </li>
                  </ul>
                </div>

                <Alert className="bg-primary/10 border-primary/20 mt-8">
                  <AlertTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" /> Key Insight: The ATP Is About Professional Standards
                  </AlertTitle>
                  <AlertDescription>
                    <p className="mt-2">
                      The ATP checkride evaluates more than just your ability to fly an aircraft—it assesses your
                      readiness to assume the responsibilities of an airline captain.
                    </p>
                    <p className="mt-2">
                      Examiners are looking for professional demeanor, sound judgment, effective crew resource
                      management, and the ability to operate safely within an airline environment.
                    </p>
                    <p className="mt-2 font-medium">
                      Remember: You're no longer being evaluated as a pilot who can fly well—you're being evaluated as a
                      captain who can lead well.
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
                  <h2 className="text-2xl font-display font-bold">The ATP Oral Examination</h2>
                  <p className="text-muted-foreground">Demonstrating captain-level knowledge and decision-making</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="lead">
                  The ATP oral exam evaluates your knowledge at the level expected of an airline captain. This isn't
                  just about reciting regulations—it's about demonstrating a deep understanding of transport category
                  aircraft operations, high-altitude aerodynamics, and the decision-making processes required in complex
                  operational environments.
                </p>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Key Areas of Focus</h3>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" /> Part 121 Operations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Understanding the regulatory framework for air carrier operations:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Operational control and dispatch requirements</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Crew duty and rest requirements</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Minimum equipment lists (MEL) and configuration deviation lists (CDL)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Weather minimums and alternate requirements</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Plane className="h-5 w-5 text-primary" /> Transport Aircraft Systems
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Demonstrating knowledge of complex aircraft systems:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Turbine engine operation and limitations</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Pressurization and environmental systems</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Electrical, hydraulic, and pneumatic systems</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Automation and flight management systems</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Gauge className="h-5 w-5 text-primary" /> High-Altitude Operations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Understanding the unique aspects of high-altitude flight:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>High-altitude aerodynamics and coffin corner</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Jet routes and RVSM airspace requirements</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Weather phenomena at high altitudes</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Physiological factors and emergency descent procedures</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" /> Crew Resource Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Demonstrating effective leadership and teamwork:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Task management and workload distribution</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Communication protocols and briefing techniques</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Decision-making models and threat and error management</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Leadership styles and crew coordination</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Scenario-Based Questions</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <p className="mb-4">
                    The ATP oral exam heavily emphasizes scenario-based questions that evaluate your decision-making
                    process. Here are examples of the types of scenarios you might encounter:
                  </p>
                  <div className="space-y-6">
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-500" /> Operational Decision-Making
                      </h4>
                      <p className="mb-2">
                        <span className="font-medium">Scenario:</span> "You're the captain of a Boeing 737 scheduled to
                        depart JFK for Chicago. The MEL shows the #2 generator is inoperative, and the forecast for
                        Chicago shows thunderstorms in the area at your estimated arrival time. What factors would you
                        consider in your go/no-go decision?"
                      </p>
                      <p className="mb-0">
                        <span className="font-medium">What they're looking for:</span> Your ability to integrate
                        technical knowledge, regulatory requirements, and risk management into a sound operational
                        decision.
                      </p>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-500" /> Emergency Management
                      </h4>
                      <p className="mb-2">
                        <span className="font-medium">Scenario:</span> "You're at FL350 over the Rocky Mountains when
                        you experience a rapid depressurization. Walk me through your immediate actions, considerations,
                        and decision-making process."
                      </p>
                      <p className="mb-0">
                        <span className="font-medium">What they're looking for:</span> Your knowledge of emergency
                        procedures, ability to prioritize actions, and consideration of all relevant factors (terrain,
                        oxygen requirements, passenger needs, etc.).
                      </p>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-500" /> Leadership and CRM
                      </h4>
                      <p className="mb-2">
                        <span className="font-medium">Scenario:</span> "Your first officer is making subtle but
                        consistent errors during the preflight and taxi. How would you address this situation?"
                      </p>
                      <p className="mb-0">
                        <span className="font-medium">What they're looking for:</span> Your leadership approach,
                        communication skills, and ability to maintain a positive cockpit environment while ensuring
                        safety.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Tips for the ATP Oral Exam</h3>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">1</span>
                      </div>
                      <div>
                        <span className="font-medium">Think like a captain, not a student.</span> Frame your answers
                        from the perspective of someone responsible for the entire operation, not just the flying.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">2</span>
                      </div>
                      <div>
                        <span className="font-medium">Use operational language.</span> Incorporate proper terminology
                        and phraseology used in airline operations to demonstrate your familiarity with the professional
                        environment.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">3</span>
                      </div>
                      <div>
                        <span className="font-medium">Demonstrate systems knowledge in context.</span> Don't just
                        describe how systems work—explain how they affect operations and decision-making.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">4</span>
                      </div>
                      <div>
                        <span className="font-medium">Reference company procedures.</span> Frame answers in terms of
                        following standard operating procedures and company policies.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">5</span>
                      </div>
                      <div>
                        <span className="font-medium">Show your decision-making process.</span> Explain not just what
                        you would do, but why you would do it, considering all relevant factors.
                      </div>
                    </li>
                  </ul>
                </div>

                <Alert className="bg-primary/10 border-primary/20 mt-8">
                  <AlertTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" /> Key Insight: It's About Command Authority
                  </AlertTitle>
                  <AlertDescription>
                    <p className="mt-2">
                      The examiner is evaluating whether you have the knowledge, judgment, and presence to command an
                      airliner.
                    </p>
                    <p className="mt-2">
                      Demonstrate confidence without arrogance, thoroughness without overthinking, and decisiveness
                      without recklessness.
                    </p>
                    <p className="mt-2 font-medium">
                      Remember: In the airline world, the captain is the final authority—show that you're ready for that
                      responsibility.
                    </p>
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </TabsContent>

          {/* Simulator Evaluation Tab */}
          <TabsContent value="simulator" className="space-y-6">
            <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Laptop className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">The Simulator Evaluation</h2>
                  <p className="text-muted-foreground">Demonstrating airline captain proficiency in the simulator</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="lead">
                  The ATP checkride flight portion is typically conducted entirely in a full flight simulator (FFS) that
                  represents a transport category aircraft. This allows for the evaluation of your skills in a realistic
                  airline environment, including scenarios that would be too dangerous to practice in an actual
                  aircraft.
                </p>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">What to Expect in the Simulator</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <p className="mb-4">The simulator portion of your ATP checkride will typically include:</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Normal Operations:</span> Standard operating procedures from
                        preflight to shutdown
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Instrument Procedures:</span> Precision and non-precision
                        approaches, often in challenging conditions
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Emergency Procedures:</span> Engine failures, system malfunctions,
                        and other abnormal situations
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Crew Resource Management:</span> Effective communication and
                        coordination with other crew members
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Decision-Making:</span> Scenarios that require sound judgment and
                        command authority
                      </div>
                    </li>
                  </ul>
                  <p className="font-medium">
                    The simulator evaluation is designed to be challenging and comprehensive, often lasting 3-4 hours.
                  </p>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Key Maneuvers and Procedures</h3>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Plane className="h-5 w-5 text-primary" /> Normal Operations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Preflight procedures and cockpit setup</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Normal takeoffs and landings</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Departure and arrival procedures</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Cruise operations and fuel management</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-primary" /> Emergency Procedures
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Engine failures at various phases of flight</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Rejected takeoffs and landings</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Rapid depressurization and emergency descent</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Multiple system failures and complex emergencies</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Gauge className="h-5 w-5 text-primary" /> Instrument Procedures
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Precision approaches (ILS, GLS)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Non-precision approaches (RNAV, VOR, LOC)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Circling approaches and visual maneuvers</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Missed approaches and holding procedures</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" /> CRM and Decision-Making
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Effective crew briefings and communication</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Workload management and task delegation</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Decision-making under pressure</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Threat and error management</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Common Simulator Scenarios</h3>
                <div className="bg-muted p-6 rounded-lg my-6">
                  <p className="mb-4">
                    Here are some typical scenarios you might encounter during your ATP simulator evaluation:
                  </p>
                  <div className="space-y-6">
                    <div className="bg-card p-4 rounded-lg border">
                      <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-500" /> Engine Failure After V1
                      </h4>
                      <p className="mb-2">
                        <span className="font-medium">Scenario:</span> Engine failure immediately after V1 during
                        takeoff, requiring you to continue the takeoff, perform the engine failure checklist, and return
                        for a single-engine approach and landing.
                      </p>
                      <p className="mb-0">
                        <span className="font-medium">What they're looking for:</span> Proper execution of memory items,
                        crew coordination, systems management, and single-engine flying skills.
                      </p>
                    </div>

                    <div className="bg-card p-4 rounded-lg border">
                      <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-500" /> Low-Visibility Approach with System
                        Failures
                      </h4>
                      <p className="mb-2">
                        <span className="font-medium">Scenario:</span> ILS approach to minimums with partial electrical
                        failure, requiring careful management of remaining systems and backup procedures.
                      </p>
                      <p className="mb-0">
                        <span className="font-medium">What they're looking for:</span> Systems knowledge, ability to fly
                        precisely while managing abnormal procedures, and decision-making regarding approach
                        continuation.
                      </p>
                    </div>

                    <div className="bg-card p-4 rounded-lg border">
                      <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-500" /> Rapid Depressurization at Cruise
                      </h4>
                      <p className="mb-2">
                        <span className="font-medium">Scenario:</span> Sudden depressurization at high altitude
                        requiring emergency descent, oxygen use, and diversion to an alternate airport.
                      </p>
                      <p className="mb-0">
                        <span className="font-medium">What they're looking for:</span> Immediate execution of memory
                        items, proper emergency descent technique, crew coordination during high workload, and diversion
                        decision-making.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Tips for Simulator Success</h3>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">1</span>
                      </div>
                      <div>
                        <span className="font-medium">Know your flows and callouts cold.</span> The simulator is not the
                        place to be figuring out procedures—they should be second nature.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">2</span>
                      </div>
                      <div>
                        <span className="font-medium">Verbalize your thought process.</span> Let the examiner know what
                        you're thinking, especially during abnormal situations.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">3</span>
                      </div>
                      <div>
                        <span className="font-medium">Maintain aircraft control first.</span> In any emergency, remember
                        the priority: Aviate, Navigate, Communicate.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">4</span>
                      </div>
                      <div>
                        <span className="font-medium">Use your resources.</span> Properly utilize checklists, QRH,
                        charts, and your crew members.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">5</span>
                      </div>
                      <div>
                        <span className="font-medium">Stay ahead of the aircraft.</span> Anticipate next steps and brief
                        your plans clearly.
                      </div>
                    </li>
                  </ul>
                </div>

                <Alert className="bg-primary/10 border-primary/20 mt-8">
                  <AlertTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" /> Key Insight: Simulator Fidelity
                  </AlertTitle>
                  <AlertDescription>
                    <p className="mt-2">
                      Modern full flight simulators provide an incredibly realistic experience, but they're not
                      identical to the actual aircraft.
                    </p>
                    <p className="mt-2">
                      Take time before your checkride to familiarize yourself with any simulator quirks or differences
                      from the actual aircraft.
                    </p>
                    <p className="mt-2 font-medium">
                      Remember: The simulator allows examiners to test your response to situations that would be too
                      dangerous to recreate in an actual aircraft—expect to be challenged!
                    </p>
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </TabsContent>

          {/* Professional Standards Tab */}
          <TabsContent value="professional-standards" className="space-y-6">
            <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clipboard className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">Professional Standards</h2>
                  <p className="text-muted-foreground">Meeting the expectations of an airline captain</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="lead">
                  The ATP checkride evaluates more than just your technical flying skills—it assesses whether you meet
                  the professional standards expected of an airline captain. This includes your demeanor, communication
                  style, leadership approach, and overall professionalism.
                </p>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">The Captain's Presence</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <p className="mb-4">As a captain, you're expected to demonstrate:</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Command Authority:</span> The ability to make decisions
                        confidently and take responsibility for the flight
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Professional Demeanor:</span> Calm, composed behavior even under
                        pressure
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Effective Communication:</span> Clear, concise, and assertive
                        communication with crew and ATC
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Leadership Skills:</span> The ability to lead the crew effectively
                        and create a positive cockpit environment
                      </div>
                    </li>
                  </ul>
                  <p className="font-medium">
                    These qualities are assessed throughout the checkride, from your initial briefing to the final
                    debrief.
                  </p>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Crew Resource Management (CRM)</h3>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" /> Effective Briefings
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Demonstrate your ability to conduct thorough, effective briefings:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Cover all relevant information concisely</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Set expectations and establish roles</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Encourage questions and input</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Address potential threats and contingencies</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Headphones className="h-5 w-5 text-primary" /> Communication Skills
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Demonstrate professional communication throughout the flight:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Use standard phraseology with ATC</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Maintain sterile cockpit when appropriate</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Provide clear instructions to crew members</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Close the loop with proper acknowledgments</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Brain className="h-5 w-5 text-primary" /> Decision-Making
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Demonstrate sound decision-making processes:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Gather all relevant information</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Consider multiple options</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Evaluate risks and benefits</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Make timely, decisive choices</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" /> Threat and Error Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Demonstrate proactive management of threats and errors:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Identify potential threats in advance</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Develop and communicate mitigation strategies</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Trap errors before they lead to undesired states</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Maintain situational awareness at all times</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Professional Appearance and Conduct</h3>
                <div className="bg-muted p-6 rounded-lg my-6">
                  <p className="mb-4">
                    Your appearance and conduct should reflect the professional standards of the airline industry:
                  </p>
                  <div className="space-y-6">
                    <div className="bg-card p-4 rounded-lg border">
                      <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" /> Professional Appearance
                      </h4>
                      <p className="mb-2">
                        <span className="font-medium">Expectations:</span> Dress professionally for your checkride,
                        typically in business attire or a pilot uniform if available. First impressions matter—your
                        appearance should reflect the professional role you're seeking.
                      </p>
                      <p className="mb-0">
                        <span className="font-medium">Why it matters:</span> Your appearance signals your understanding
                        of professional standards and respect for the evaluation process.
                      </p>
                    </div>

                    <div className="bg-card p-4 rounded-lg border">
                      <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" /> Punctuality and Preparation
                      </h4>
                      <p className="mb-2">
                        <span className="font-medium">Expectations:</span> Arrive early, with all required materials
                        organized and ready. Be thoroughly prepared for all aspects of the checkride.
                      </p>
                      <p className="mb-0">
                        <span className="font-medium">Why it matters:</span> Airlines operate on strict schedules, and
                        punctuality is a non-negotiable professional standard. Being prepared shows respect for the
                        examiner's time and demonstrates your readiness for the responsibilities of an airline captain.
                      </p>
                    </div>

                    <div className="bg-card p-4 rounded-lg border">
                      <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <UserCheck className="h-5 w-5 text-primary" /> Professional Attitude
                      </h4>
                      <p className="mb-2">
                        <span className="font-medium">Expectations:</span> Maintain a positive, receptive attitude
                        throughout the checkride. Be open to feedback, avoid defensiveness, and demonstrate humility
                        balanced with confidence.
                      </p>
                      <p className="mb-0">
                        <span className="font-medium">Why it matters:</span> Your attitude reflects your ability to work
                        within a team environment and your receptiveness to ongoing learning—both essential qualities
                        for airline pilots.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">
                  Tips for Demonstrating Professional Standards
                </h3>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">1</span>
                      </div>
                      <div>
                        <span className="font-medium">Act like a captain from the moment you walk in.</span> Your
                        evaluation begins before you enter the simulator—carry yourself with the confidence and
                        professionalism of a captain throughout the entire process.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">2</span>
                      </div>
                      <div>
                        <span className="font-medium">Demonstrate leadership without arrogance.</span> Balance
                        confidence with humility—be decisive but open to input from others.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">3</span>
                      </div>
                      <div>
                        <span className="font-medium">Maintain professionalism even when challenged.</span> Your
                        response to pressure and unexpected situations reveals your true professional character.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">4</span>
                      </div>
                      <div>
                        <span className="font-medium">Use proper terminology and phraseology.</span> Communicate like an
                        airline professional at all times.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">5</span>
                      </div>
                      <div>
                        <span className="font-medium">Own your mistakes.</span> If you make an error, acknowledge it
                        professionally, correct it, and move on—this demonstrates maturity and self-awareness.
                      </div>
                    </li>
                  </ul>
                </div>

                <Alert className="bg-primary/10 border-primary/20 mt-8">
                  <AlertTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" /> Key Insight: The Professional Standard Is Higher
                  </AlertTitle>
                  <AlertDescription>
                    <p className="mt-2">
                      The ATP checkride evaluates you against the standards of a professional airline captain, not just
                      a competent pilot.
                    </p>
                    <p className="mt-2">
                      Every aspect of your performance—from your communication style to your decision-making
                      process—should reflect the professionalism expected in the airline environment.
                    </p>
                    <p className="mt-2 font-medium">
                      Remember: You're not just demonstrating that you can fly the aircraft—you're showing that you're
                      ready to command it.
                    </p>
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </TabsContent>

          {/* Preparation Timeline Tab */}
          <TabsContent value="preparation" className="space-y-6">
            <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">ATP Preparation Timeline</h2>
                  <p className="text-muted-foreground">Your roadmap to ATP success</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="lead">
                  Preparing for your ATP checkride requires a structured approach. This timeline provides a framework
                  for your preparation, from months before to the day of your checkride.
                </p>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">3-6 Months Before</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Complete the ATP CTP course.</span> This is a prerequisite for
                        taking the ATP knowledge test.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Study for and take the ATP knowledge test.</span> Use commercial
                        study materials and focus on the areas covered in the ATP CTP.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Begin building your systems knowledge.</span> Start studying the
                        systems of the aircraft you'll be tested in.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Review Part 121 regulations.</span> Understand the regulatory
                        environment of airline operations.
                      </div>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">1-3 Months Before</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Deep dive into aircraft systems.</span> Master the systems,
                        limitations, and performance characteristics of your test aircraft.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Study standard operating procedures.</span> Learn the SOPs for the
                        aircraft and operator you'll be testing with.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Review emergency procedures.</span> Know all memory items and the
                        location of all checklist items.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Practice CRM concepts.</span> Study effective communication,
                        leadership, and decision-making techniques.
                      </div>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">2-4 Weeks Before</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Begin simulator preparation.</span> If possible, schedule practice
                        sessions in a similar simulator.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Chair fly procedures.</span> Practice flows, callouts, and
                        emergency procedures mentally.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Review approach plates and airport diagrams.</span> Familiarize
                        yourself with the airports you'll likely use in the checkride.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Study scenario-based questions.</span> Prepare for the types of
                        operational decisions you'll need to make.
                      </div>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">1 Week Before</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Final simulator sessions.</span> Focus on any weak areas
                        identified in your preparation.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Review oral exam topics.</span> Focus on operational scenarios and
                        decision-making.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Organize your materials.</span> Ensure all required documents and
                        study materials are in order.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Get adequate rest.</span> Begin adjusting your sleep schedule to
                        ensure you're well-rested for the checkride.
                      </div>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">The Day Before</h3>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Light review only.</span> Focus on memory items and key concepts,
                        but avoid cramming.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Prepare your materials.</span> Organize your documents, charts,
                        and any allowed reference materials.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Get a good night's sleep.</span> Ensure you're well-rested for the
                        checkride.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Set multiple alarms.</span> Ensure you'll arrive early for your
                        checkride.
                      </div>
                    </li>
                  </ul>
                  <p className="font-medium">
                    Avoid last-minute cramming—it typically increases anxiety without improving performance.
                  </p>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Checkride Day</h3>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Arrive early.</span> Give yourself plenty of time to get settled
                        and mentally prepared.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Dress professionally.</span> Present yourself as the airline
                        captain you're aspiring to be.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Stay hydrated and nourished.</span> Bring water and snacks for the
                        long day ahead.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Maintain a positive, professional attitude.</span> Your demeanor
                        is part of what's being evaluated.
                      </div>
                    </li>
                  </ul>
                  <p className="font-medium">Remember: You've prepared for this. Trust your training and knowledge.</p>
                </div>

                <Alert className="bg-primary/10 border-primary/20 mt-8">
                  <AlertTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" /> Final Thought: The Journey to ATP
                  </AlertTitle>
                  <AlertDescription>
                    <p className="mt-2">
                      The ATP certificate represents the culmination of your training journey—from student pilot to
                      airline captain.
                    </p>
                    <p className="mt-2">
                      This isn't just another checkride; it's the final verification that you're ready to assume the
                      responsibilities of command in commercial air transportation.
                    </p>
                    <p className="mt-2 font-medium">
                      Approach it with the seriousness it deserves, but also with the confidence that comes from knowing
                      you've earned your place in the left seat.
                    </p>
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="rounded-3xl bg-gradient-to-r from-slate-700 to-slate-900 text-white overflow-hidden">
        <div className="px-6 py-12 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready for the Final Step?</h2>
            <p className="text-white/80 text-lg mb-6">
              Get access to specialized ATP preparation resources, simulator practice sessions, and one-on-one coaching
              to ensure you're fully prepared for this career-defining checkride.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                Schedule ATP Prep Session
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                View ATP Resources <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative w-64 h-64 animate-float">
              <div className="w-full h-full bg-[url('/images/pilots-cockpit-golden-light.jpg')] bg-contain bg-no-repeat bg-center"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

