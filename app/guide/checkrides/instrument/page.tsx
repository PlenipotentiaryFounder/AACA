import type { Metadata } from "next"
import Link from "next/link"
import {
  ChevronRight,
  Gauge,
  FileText,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Brain,
  Lightbulb,
  Clock,
  Calendar,
  CloudSun,
  Compass,
  Radio,
  Shield,
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
  title: "Instrument Rating Checkride | AACA Student Pilot Guide",
  description:
    "Master your Instrument Rating checkride with proven strategies, preparation tips, and a comprehensive breakdown of what to expect.",
}

export default function InstrumentCheckridePage() {
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
            <BreadcrumbLink href="/checkrides/instrument">Instrument Rating</BreadcrumbLink>
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
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-indigo-900 text-white mb-12">
        <div className="absolute inset-0 bg-[url('/images/modern-cockpit-clouds.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 px-6 py-16 md:py-24 md:px-12 max-w-4xl">
          <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">Instrument Rating</Badge>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Mastering Your Instrument Checkride
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl">
            Flying with precision when you can't see outside
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-white text-indigo-700 hover:bg-white/90">
              Start Preparing
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Download Prep Checklist <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 -mb-12 -mr-12 opacity-20 md:opacity-30">
          <div className="w-full h-full bg-[url('/images/training/instrument.jpg')] bg-contain bg-no-repeat"></div>
        </div>
      </section>

      {/* Personal Note Alert */}
      <Alert className="bg-muted border-muted-foreground/20 mb-8">
        <AlertTitle className="flex items-center gap-2 text-lg font-display font-semibold">
          <FileText className="h-5 w-5" /> Personal Note from Your Instructor
        </AlertTitle>
        <AlertDescription className="text-base mt-2">
          The instrument rating is often considered the most challenging checkride for many pilots. It's not just about
          flying the airplane—it's about managing a complex system of procedures, communications, and navigation while
          maintaining precise control. But remember: this is also the rating that will transform you from a fair-weather
          pilot to someone who can safely navigate through the clouds with confidence.
        </AlertDescription>
      </Alert>

      {/* Main Content Tabs */}
      <section className="mb-16">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="oral-exam">Oral Exam</TabsTrigger>
            <TabsTrigger value="flight-test">Flight Test</TabsTrigger>
            <TabsTrigger value="common-mistakes">Common Mistakes</TabsTrigger>
            <TabsTrigger value="preparation">Preparation</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Gauge className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">Instrument Rating Checkride Overview</h2>
                  <p className="text-muted-foreground">Your gateway to all-weather flying</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="lead">
                  The Instrument Rating checkride is your ticket to flying in Instrument Meteorological Conditions
                  (IMC). It's a rigorous evaluation of your ability to safely navigate and control an aircraft solely by
                  reference to instruments, follow complex procedures, and make sound decisions when visibility is
                  limited.
                </p>

                <div className="bg-card rounded-lg p-6 border my-6">
                  <h3 className="text-xl font-display font-semibold mb-4">What Makes This Checkride Different?</h3>
                  <p>
                    Unlike your Private Pilot checkride, which tested your fundamental flying skills, the Instrument
                    Rating checkride evaluates your ability to:
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Fly with precision using only your instruments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Navigate complex departure, enroute, and approach procedures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Manage a high workload while maintaining situational awareness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Make sound decisions in challenging weather scenarios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Handle emergency situations when you can't see outside</span>
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
                        A comprehensive evaluation of your instrument knowledge, focusing on:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Instrument Flight Rules (IFR)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Weather theory and reports</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Instrument approach procedures</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Aircraft systems and instruments</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Emergency procedures</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Gauge className="h-5 w-5 text-primary" /> Flight Test (1.5–2 hours)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        A practical demonstration of your instrument flying skills, including:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Instrument departure procedures</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Enroute navigation and tracking</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Holding patterns</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Precision and non-precision approaches</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Missed approaches and partial panel operations</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">
                  Key Differences from Private Pilot Checkride
                </h3>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-lg mb-2">Higher Precision Standards</h4>
                      <p className="text-sm mb-0">
                        The ACS tolerances are tighter: ±10° heading, ±100 feet altitude, and ±10 knots airspeed.
                        Precision is critical when you can't see outside.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-2">Procedural Complexity</h4>
                      <p className="text-sm mb-0">
                        You'll need to demonstrate mastery of complex procedures like holds, approaches, and departure
                        procedures—often while managing communications and navigation simultaneously.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-2">Higher Workload</h4>
                      <p className="text-sm mb-0">
                        Expect to manage multiple tasks at once: flying the airplane, navigating, communicating, and
                        planning ahead—all while "under the hood."
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-2">More Scenario-Based</h4>
                      <p className="text-sm mb-0">
                        The examiner will present realistic IFR scenarios that test your decision-making in challenging
                        weather and system failure situations.
                      </p>
                    </div>
                  </div>
                </div>

                <Alert className="bg-primary/10 border-primary/20 mt-8">
                  <AlertTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" /> The Instrument Mindset
                  </AlertTitle>
                  <AlertDescription>
                    <p className="mt-2">
                      The key to passing your instrument checkride is developing the "instrument mindset"—a disciplined
                      approach to flying that relies on procedures, checklists, and constant cross-checking rather than
                      what you see outside.
                    </p>
                    <p className="mt-2 font-medium">
                      Trust your instruments, not your senses. Follow your procedures, not your instincts.
                    </p>
                    <p className="mt-2">
                      This mindset is what separates successful instrument pilots from those who struggle.
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
                  <h2 className="text-2xl font-display font-bold">The Instrument Oral Exam</h2>
                  <p className="text-muted-foreground">Demonstrating your instrument knowledge and decision-making</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="lead">
                  The oral portion of your instrument checkride is typically longer and more detailed than your private
                  pilot oral. Expect 2-3 hours of in-depth questioning about regulations, weather, procedures, and
                  systems—all with an emphasis on safety in the IFR environment.
                </p>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Key Knowledge Areas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <Card>
                    <CardHeader className="pb-2 bg-indigo-50 dark:bg-indigo-950/30 rounded-t-lg">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" /> IFR Regulations
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>IFR currency requirements (61.57)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Equipment requirements for IFR flight (91.205)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Alternate airport requirements (91.169)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Minimum fuel requirements for IFR</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>IFR clearances and ATC instructions</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2 bg-indigo-50 dark:bg-indigo-950/30 rounded-t-lg">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <CloudSun className="h-5 w-5 text-primary" /> Weather Theory & Reports
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Interpreting METARs, TAFs, and Area Forecasts</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Understanding AIRMETs, SIGMETs, and Convective SIGMETs</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Icing conditions and their effects</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Thunderstorm development and avoidance</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Weather minimums for different approach types</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2 bg-indigo-50 dark:bg-indigo-950/30 rounded-t-lg">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Compass className="h-5 w-5 text-primary" /> Navigation & Procedures
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Reading and interpreting approach plates</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Standard Terminal Arrival Routes (STARs)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Departure Procedures (DPs/ODPs/SIDs)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Holding pattern entries and procedures</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>IFR enroute charts and navigation</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2 bg-indigo-50 dark:bg-indigo-950/30 rounded-t-lg">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" /> Emergency Procedures
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Lost communications procedures</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Partial panel procedures</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Electrical system failures</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Unusual attitude recovery</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Declaring an emergency in IMC</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Common Oral Exam Scenarios</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <p className="mb-4">
                    Your examiner will likely present several scenarios to test your decision-making. Here are some
                    common ones to prepare for:
                  </p>
                  <div className="space-y-6">
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Go/No-Go Decision</h4>
                      <p className="mb-2">
                        You'll be given a weather briefing and aircraft information, then asked if you would make the
                        flight. Be prepared to justify your decision using regulations and risk management principles.
                      </p>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Lost Communications</h4>
                      <p className="mb-2">
                        The examiner will present a scenario where you lose communications during an IFR flight. You'll
                        need to explain your actions according to the regulations (91.185) and best practices.
                      </p>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Approach Minimums</h4>
                      <p className="mb-2">
                        You'll be given an approach plate and asked to determine the minimums for different scenarios
                        (e.g., inoperative equipment, different aircraft categories, circling vs. straight-in).
                      </p>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Alternate Requirements</h4>
                      <p className="mb-2">
                        The examiner will provide weather forecasts for your destination and potential alternates, then
                        ask you to determine if you need an alternate and which airports qualify.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Tips for the Oral Exam</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">1</span>
                    </div>
                    <div>
                      <span className="font-medium">Know your charts and plates inside out.</span> Be able to explain
                      every symbol, abbreviation, and number on an approach plate.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">2</span>
                    </div>
                    <div>
                      <span className="font-medium">Be methodical in your answers.</span> Use a structured approach when
                      explaining procedures or making decisions.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">3</span>
                    </div>
                    <div>
                      <span className="font-medium">Always prioritize safety.</span> When in doubt, choose the most
                      conservative option and explain why.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">4</span>
                    </div>
                    <div>
                      <span className="font-medium">Know where to find information.</span> It's okay to reference
                      materials during the oral—just know exactly where to look.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">5</span>
                    </div>
                    <div>
                      <span className="font-medium">Understand the "why" behind procedures.</span> Don't just
                      memorize—comprehend the reasoning behind IFR procedures.
                    </div>
                  </li>
                </ul>

                <Alert className="bg-primary/10 border-primary/20 mt-8">
                  <AlertTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" /> Remember This
                  </AlertTitle>
                  <AlertDescription>
                    <p className="mt-2">
                      The oral exam is not just about reciting facts—it's about demonstrating sound judgment in the IFR
                      environment.
                    </p>
                    <p className="mt-2">
                      Your examiner wants to see that you can think through complex situations methodically and make
                      safe decisions when visibility is limited and stakes are high.
                    </p>
                    <p className="mt-2 font-medium">
                      When in doubt, ask yourself: "What's the safest course of action here?"
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
                  <Gauge className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">The Instrument Flight Test</h2>
                  <p className="text-muted-foreground">Precision flying when you can't see outside</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="lead">
                  The flight portion of your instrument checkride will test your ability to control the aircraft
                  precisely by reference to instruments alone. You'll be wearing a view-limiting device (foggles or a
                  hood) for most of the flight, demonstrating your proficiency in a variety of instrument procedures.
                </p>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">What to Expect During the Flight</h3>
                <div className="bg-card rounded-lg p-6 border my-6">
                  <p className="mb-4">Your instrument flight test will typically follow this sequence:</p>
                  <ol className="space-y-4 mb-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">1</span>
                      </div>
                      <div>
                        <span className="font-medium">Preflight and Cockpit Preparation</span>
                        <p className="text-sm mt-1">
                          You'll demonstrate your preflight inspection with emphasis on IFR equipment, set up your
                          avionics, and brief the examiner on your instrument scan technique.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">2</span>
                      </div>
                      <div>
                        <span className="font-medium">ATC Clearance and Departure Procedure</span>
                        <p className="text-sm mt-1">
                          You'll receive and read back an IFR clearance, then execute a departure procedure (SID or ODP)
                          or vectors from ATC.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">3</span>
                      </div>
                      <div>
                        <span className="font-medium">Enroute Navigation</span>
                        <p className="text-sm mt-1">
                          You'll demonstrate your ability to navigate using VOR, GPS, or other navigation systems while
                          maintaining precise altitude and heading control.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">4</span>
                      </div>
                      <div>
                        <span className="font-medium">Holding Patterns</span>
                        <p className="text-sm mt-1">
                          You'll be asked to enter and maintain a holding pattern, demonstrating proper entry procedure
                          and timing.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">5</span>
                      </div>
                      <div>
                        <span className="font-medium">Approaches</span>
                        <p className="text-sm mt-1">You'll perform several types of approaches, typically including:</p>
                        <ul className="text-sm mt-1 space-y-1">
                          <li>• Precision approach (ILS)</li>
                          <li>• Non-precision approach (VOR, RNAV/GPS, LOC)</li>
                          <li>• Circling approach (if practical)</li>
                          <li>• Missed approach procedure</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">6</span>
                      </div>
                      <div>
                        <span className="font-medium">Partial Panel Operations</span>
                        <p className="text-sm mt-1">
                          You'll demonstrate your ability to fly with limited instruments, simulating a vacuum or
                          electrical failure.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">7</span>
                      </div>
                      <div>
                        <span className="font-medium">Recovery from Unusual Attitudes</span>
                        <p className="text-sm mt-1">
                          The examiner will place the aircraft in an unusual attitude, and you'll need to recover using
                          proper instrument references.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-medium">8</span>
                      </div>
                      <div>
                        <span className="font-medium">Landing</span>
                        <p className="text-sm mt-1">
                          You'll remove the view-limiting device at the appropriate point during the final approach and
                          complete a normal landing.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Performance Standards</h3>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
                  <p className="mb-4 font-medium">According to the Instrument Rating ACS, you must maintain:</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Altitude:</span> ±100 feet
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
                        <span className="font-medium">Course tracking:</span> ±¾ scale deflection of CDI
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">MDA/DA:</span> +100/-0 feet
                      </div>
                    </li>
                  </ul>
                  <p className="font-medium">
                    Remember: These are your maximum allowable deviations. Aim to be much more precise.
                  </p>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Tips for the Flight Test</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">1</span>
                    </div>
                    <div>
                      <span className="font-medium">Stay ahead of the aircraft.</span> Always be thinking about what's
                      coming next in the procedure.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">2</span>
                    </div>
                    <div>
                      <span className="font-medium">Use your checklists.</span> Don't try to memorize everything—use
                      your resources.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">3</span>
                    </div>
                    <div>
                      <span className="font-medium">Verbalize your actions.</span> Talk through what you're doing and
                      why—it helps the examiner understand your thought process.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">4</span>
                    </div>
                    <div>
                      <span className="font-medium">Make small, precise corrections.</span> Avoid large control inputs
                      that lead to overshooting your targets.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">5</span>
                    </div>
                    <div>
                      <span className="font-medium">Maintain a consistent instrument scan.</span> Don't fixate on any
                      single instrument.
                    </div>
                  </li>
                </ul>

                <Alert className="bg-primary/10 border-primary/20 mt-8">
                  <AlertTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" /> Pro Tip: The 3P Approach
                  </AlertTitle>
                  <AlertDescription>
                    <p className="mt-2">For each phase of flight, follow the 3P approach:</p>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="font-medium">Prepare:</span> Brief the procedure before executing it
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium">Perform:</span> Execute with precision and proper technique
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium">Progress:</span> Monitor your performance and make corrections as
                        needed
                      </li>
                    </ul>
                    <p className="mt-2 font-medium">
                      This structured approach will help you stay organized during the high workload of instrument
                      flying.
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
                  <h2 className="text-2xl font-display font-bold">Common Instrument Checkride Mistakes</h2>
                  <p className="text-muted-foreground">Pitfalls to avoid on your path to success</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="lead">
                  The instrument rating checkride has specific challenges that trip up many applicants. Being aware of
                  these common mistakes can help you avoid them and increase your chances of success.
                </p>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Oral Exam Mistakes</h3>
                <div className="space-y-6 my-6">
                  <div className="bg-card p-5 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" /> Not Understanding Approach Charts
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-red-500 dark:text-red-400 mb-1">Common Error:</p>
                        <p className="text-sm mb-3">
                          Unable to explain all elements of an approach plate, including minimums, missed approach
                          procedures, and notes.
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-green-600 dark:text-green-400 mb-1">How to Avoid:</p>
                        <p className="text-sm">
                          Practice "dissecting" approach plates. Be able to explain every symbol, number, and note.
                          Create a systematic way to brief an approach that covers all elements.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card p-5 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" /> Weak Weather Knowledge
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-red-500 dark:text-red-400 mb-1">Common Error:</p>
                        <p className="text-sm mb-3">
                          Inability to interpret weather products or make sound go/no-go decisions based on weather
                          information.
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-green-600 dark:text-green-400 mb-1">How to Avoid:</p>
                        <p className="text-sm">
                          Study aviation weather in depth. Practice interpreting METARs, TAFs, and prog charts daily.
                          Understand the implications of different weather phenomena on instrument flying.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card p-5 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" /> Confusion About IFR Regulations
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-red-500 dark:text-red-400 mb-1">Common Error:</p>
                        <p className="text-sm mb-3">
                          Misunderstanding alternate requirements, fuel requirements, or equipment requirements for IFR
                          flight.
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-green-600 dark:text-green-400 mb-1">How to Avoid:</p>
                        <p className="text-sm">
                          Create flashcards for key regulations (91.167, 91.169, 91.205(d), etc.). Practice applying
                          these regulations to different scenarios until they become second nature.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Flight Test Mistakes</h3>
                <div className="space-y-6 my-6">
                  <div className="bg-card p-5 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" /> Chasing the Needles
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-red-500 dark:text-red-400 mb-1">Common Error:</p>
                        <p className="text-sm mb-3">
                          Making large, abrupt corrections when course or glideslope indicators show deviation, leading
                          to overshooting and oscillations.
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-green-600 dark:text-green-400 mb-1">How to Avoid:</p>
                        <p className="text-sm">
                          Practice making small, smooth corrections. Remember the "half-standard-rate turn" rule for
                          minor course corrections. Anticipate corrections before large deviations occur.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card p-5 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" /> Poor Instrument Scan
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-red-500 dark:text-red-400 mb-1">Common Error:</p>
                        <p className="text-sm mb-3">
                          Fixating on one instrument (usually the attitude indicator) while neglecting others, leading
                          to altitude, heading, or airspeed deviations.
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-green-600 dark:text-green-400 mb-1">How to Avoid:</p>
                        <p className="text-sm">
                          Develop a consistent cross-check pattern. Practice the "control and performance" method:
                          attitude indicator first, then performance instruments (altimeter, VSI, airspeed, heading).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card p-5 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" /> Getting Behind the Aircraft
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-red-500 dark:text-red-400 mb-1">Common Error:</p>
                        <p className="text-sm mb-3">
                          Failing to prepare for upcoming procedures, resulting in rushed setup, missed radio calls, or
                          improper configuration.
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-green-600 dark:text-green-400 mb-1">How to Avoid:</p>
                        <p className="text-sm">
                          Always think "one step ahead." Brief approaches before beginning them. Use the "5T" checklist
                          (Turn, Time, Twist, Throttle, Talk) at each phase of the approach.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card p-5 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" /> Improper Holding Pattern Entries
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-red-500 dark:text-red-400 mb-1">Common Error:</p>
                        <p className="text-sm mb-3">
                          Choosing the wrong entry procedure (direct, parallel, teardrop) or executing it incorrectly.
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-green-600 dark:text-green-400 mb-1">How to Avoid:</p>
                        <p className="text-sm">
                          Master the holding pattern entry selection process. Visualize the hold from above and
                          determine which sector you're approaching from. Practice all three entry types until they're
                          automatic.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-display font-semibold mt-8 mb-4">Mental/Procedural Mistakes</h3>
                <div className="space-y-6 my-6">
                  <div className="bg-card p-5 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" /> Task Saturation
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-red-500 dark:text-red-400 mb-1">Common Error:</p>
                        <p className="text-sm mb-3">
                          Becoming overwhelmed by multiple tasks (flying, navigating, communicating), leading to missed
                          steps or deteriorating aircraft control.
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-green-600 dark:text-green-400 mb-1">How to Avoid:</p>
                        <p className="text-sm">
                          Prioritize: Aviate, Navigate, Communicate—in that order. Use checklists and flows to manage
                          workload. Practice complex scenarios to build capacity for multitasking.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card p-5 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" /> Poor Radio Communications
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-red-500 dark:text-red-400 mb-1">Common Error:</p>
                        <p className="text-sm mb-3">
                          Stumbling through readbacks, missing instructions, or using improper phraseology.
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-green-600 dark:text-green-400 mb-1">How to Avoid:</p>
                        <p className="text-sm">
                          Practice IFR communications daily. Listen to LiveATC. Write down complex clearances before
                          reading them back. Use standard phraseology and keep transmissions concise.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card p-5 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" /> Forgetting to Monitor Systems
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-red-500 dark:text-red-400 mb-1">Common Error:</p>
                        <p className="text-sm mb-3">
                          Focusing so much on flying that you neglect to monitor fuel, engine instruments, or navigation
                          equipment status.
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-green-600 dark:text-green-400 mb-1">How to Avoid:</p>
                        <p className="text-sm">
                          Incorporate systems checks into your scan. Set a timer to remind you to check fuel and engine
                          instruments regularly. Develop a flow pattern that includes all critical systems.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Alert className="bg-primary/10 border-primary/20 mt-8">
                  <AlertTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" /> Remember This
                  </AlertTitle>
                  <AlertDescription>
                    <p className="mt-2">
                      Most instrument checkride failures aren't due to a lack of flying skill—they're due to procedural
                      errors, poor preparation, or task saturation.
                    </p>
                    <p className="mt-2">
                      The key to success is thorough preparation, systematic procedures, and staying ahead of the
                      aircraft.
                    </p>
                    <p className="mt-2 font-medium">
                      When you make a mistake (and everyone does), acknowledge it, correct it, and move on. Don't let
                      one error cascade into multiple problems.
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
                  <h2 className="text-2xl font-display font-bold">Instrument Checkride Preparation Timeline</h2>
                  <p className="text-muted-foreground">Your roadmap to success</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="lead">
                  Proper preparation for your instrument checkride should begin well in advance. This timeline will help
                  you organize your study and practice to ensure you're fully prepared on the big day.
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
                        <p className="font-medium">Begin studying the Instrument ACS thoroughly.</p>
                        <p className="text-sm text-muted-foreground">
                          Understand the standards for each task and element. This is your roadmap to success.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Create a study schedule for remaining topics.</p>
                        <p className="text-sm text-muted-foreground">
                          Focus on your weak areas first. Allocate specific days for regulations, weather, procedures,
                          etc.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Practice chair flying complex procedures.</p>
                        <p className="text-sm text-muted-foreground">
                          Mentally rehearse approaches, holds, and emergency procedures daily.
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
                        <p className="font-medium">Begin organizing your documents.</p>
                        <p className="text-sm text-muted-foreground">
                          Gather logbooks, knowledge test results, ID, medical certificate, and aircraft documents.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Practice interpreting weather products daily.</p>
                        <p className="text-sm text-muted-foreground">
                          Pull real weather briefings and practice making go/no-go decisions.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Focus on approach chart proficiency.</p>
                        <p className="text-sm text-muted-foreground">
                          Practice briefing different types of approaches until you can do it smoothly and completely.
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
                        <p className="font-medium">Review aircraft systems in detail.</p>
                        <p className="text-sm text-muted-foreground">
                          Focus on instrument systems, autopilot, navigation equipment, and emergency procedures.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Practice partial panel procedures.</p>
                        <p className="text-sm text-muted-foreground">
                          Ensure you're comfortable flying with limited instruments in case of system failures.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Organize your flight bag and materials.</p>
                        <p className="text-sm text-muted-foreground">
                          Ensure you have all charts, approach plates, flight computer, and other necessary tools.
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
                          Being well-rested is crucial for the mental demands of an instrument checkride.
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
                          Begin thinking about how the forecast conditions might affect your checkride.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Prepare your flight plan.</p>
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
                        <p className="font-medium">Arrive early.</p>
                        <p className="text-sm text-muted-foreground">
                          Give yourself plenty of time to set up and mentally prepare.
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
                          Pay special attention to instrument systems and required IFR equipment.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Stay calm and confident.</p>
                        <p className="text-sm text-muted-foreground">
                          Remember: You wouldn't be here if your instructor didn't think you were ready.
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
                          <div>Instrument Flying Handbook (FAA-H-8083-15)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Instrument Procedures Handbook (FAA-H-8083-16)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Instrument Rating Airman Certification Standards</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>FAR/AIM (current edition)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Aircraft POH/AFM</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Radio className="h-5 w-5 text-primary" /> Online Resources
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>LiveATC.net (for radio communication practice)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Aviation Weather Center (aviationweather.gov)</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>Instrument Proficiency Check Guidance</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>FAA Safety Team (FAASTeam) resources</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>AACA Instrument Rating Study Guide</div>
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
                      The instrument rating is challenging, but it's also incredibly rewarding. It will transform you
                      from a fair-weather pilot to an all-weather aviator.
                    </p>
                    <p className="mt-2">
                      Remember that your examiner isn't looking for perfection—they're looking for safety, good
                      judgment, and the ability to recognize and correct your mistakes.
                    </p>
                    <p className="mt-2 font-medium">
                      Trust your training, stay calm, and fly with precision. You've got this!
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
      <section className="rounded-3xl bg-gradient-to-r from-indigo-700 to-indigo-900 text-white overflow-hidden">
        <div className="px-6 py-12 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready for Your Instrument Checkride?</h2>
            <p className="text-white/80 text-lg mb-6">
              Get access to one-on-one prep sessions, mock orals, and in-depth resources to help you walk into your
              instrument checkride with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-indigo-700 hover:bg-white/90">
                Schedule Prep Session
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Download Prep Checklist <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative w-64 h-64 animate-float">
              <div className="w-full h-full bg-[url('/images/garmin-glass-cockpit-display.jpg')] bg-contain bg-no-repeat"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

