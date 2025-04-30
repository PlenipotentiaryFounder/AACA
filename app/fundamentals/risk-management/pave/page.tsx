import { SidebarInset } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  User,
  Plane,
  CloudSun,
  AlertOctagon,
  BookOpen,
  ExternalLink,
  Download,
  Share2,
  Bookmark,
  Printer,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function PaveModelPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-aa-navy to-aa-blue text-white">
              <div className="absolute inset-0 bg-[url('/images/pilot-reviewing-charts-cockpit.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
              <div className="relative z-10 px-6 py-12 md:py-16 md:px-10">
                <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">Risk Management</Badge>
                <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">The PAVE Model</h1>
                <p className="text-xl text-white/80 mb-6 max-w-2xl">
                  A Comprehensive Tool for Preflight Risk Assessment
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="sm" className="bg-white text-aa-navy hover:bg-white/90">
                    Download Checklist
                  </Button>
                  <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/20">
                    Share <Share2 className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 -mb-6 -mr-6 opacity-20 md:opacity-30">
                <div className="w-full h-full bg-[url('/images/compass-rose-on-map.jpg')] bg-contain bg-no-repeat"></div>
              </div>
            </section>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 justify-end">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Save to bookmarks</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Printer className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Print page</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Download className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Download as PDF</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            {/* Introduction */}
            <section className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead">
                Before you even think about turning the key, you need to ask yourself one thing:{" "}
                <strong>Should I be flying today?</strong>
              </p>

              <p>
                That's not a gut-check question—it's a calculated, methodical one. And the FAA gives us a framework to
                answer it: <span className="font-semibold text-primary">PAVE</span>.
              </p>

              <p>
                You'll see this term early in your ground school, but don't treat it like just another acronym. PAVE
                is the foundation of risk management in aviation, and it's a big deal for a reason. Not only is it
                rooted in the FAA's Aeronautical Decision-Making (ADM) model in the Pilot's Handbook of Aeronautical
                Knowledge (PHAK, Chapter 2), but it's also embedded into the Airman Certification Standards (ACS).
                Every checkride—from Private to Commercial—uses it as a lens for decision-making.
              </p>

              <div className="bg-muted rounded-xl p-6 my-6 border-l-4 border-primary">
                <h3 className="text-xl font-semibold mb-3">What is the PAVE Checklist?</h3>
                <p className="mb-2">
                  PAVE is a preflight tool to help pilots identify risk in four broad categories:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>P</strong> – Pilot
                  </li>
                  <li>
                    <strong>A</strong> – Aircraft
                  </li>
                  <li>
                    <strong>V</strong> – enVironment
                  </li>
                  <li>
                    <strong>E</strong> – External Pressures
                  </li>
                </ul>
                <p className="mt-2">
                  Each of these categories represents a unique area of risk. If one category is weak—or multiple
                  categories are marginal—the flight may not be safe. Your job is to recognize those hazards and
                  either mitigate them or make the call to cancel or delay the flight.
                </p>
              </div>
            </section>

            {/* PAVE Components */}
            <section className="space-y-6">
              <h2 className="font-display text-2xl font-semibold">The Four Components of PAVE</h2>

              <Card className="hover-card-effect overflow-hidden border-t-4 border-t-primary">
                <CardHeader className="pb-3 bg-primary/5">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">P – Pilot (Are YOU ready?)</CardTitle>
                      <CardDescription>Your physical and mental readiness to fly</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    This is about you. Not the plane. Not the weather. Not the destination. Just you.
                  </p>
                  <p className="mb-4">
                    The FAA gives us a secondary tool here called <strong className="text-primary">IMSAFE</strong>—a
                    personal health checklist:
                  </p>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-1">Illness</h4>
                      <p className="text-sm">Do you have any symptoms?</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-1">Medication</h4>
                      <p className="text-sm">Are you taking anything that might impair performance?</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-1">Stress</h4>
                      <p className="text-sm">Personal issues, finances, relationships—these things affect focus.</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-1">Alcohol</h4>
                      <p className="text-sm">The FAA says 8 hours bottle to throttle, but that's a minimum.</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-1">Fatigue</h4>
                      <p className="text-sm">Sleep deprivation is a killer. Literally.</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-1">Emotion</h4>
                      <p className="text-sm">Are you focused? Distracted? Mentally sharp?</p>
                    </div>
                  </div>
                  <p className="mt-4 font-medium">
                    Why it matters: A perfectly maintained aircraft and great weather won't help if the pilot isn't
                    100%. You're the final authority on whether or not you're safe to fly.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-card-effect overflow-hidden border-t-4 border-t-primary">
                <CardHeader className="pb-3 bg-primary/5">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Plane className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">A – Aircraft (Is the airplane ready?)</CardTitle>
                      <CardDescription>The airworthiness and capability of your aircraft</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4">This goes way beyond "does it start?"</p>
                  <p className="mb-4">You need to know:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>
                      <strong>Is it airworthy?</strong> (Has it had its inspections, ADs, and maintenance?)
                    </li>
                    <li>
                      <strong>Is it properly equipped?</strong> (Do you have the required instruments for VFR or IFR?)
                    </li>
                    <li>
                      <strong>Is it capable?</strong> (Can it handle the terrain, weather, and performance
                      requirements?)
                    </li>
                    <li>
                      <strong>Are YOU proficient in this specific aircraft?</strong>
                    </li>
                  </ul>
                  <div className="bg-muted/50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold mb-2">Required Documents Checklist</h4>
                    <p className="text-sm mb-2">
                      Check your <strong>SPARROW</strong> documents:
                    </p>
                    <ul className="text-sm list-disc pl-6 space-y-1">
                      <li>
                        <strong>S</strong>upplements
                      </li>
                      <li>
                        <strong>P</strong>lacards
                      </li>
                      <li>
                        <strong>A</strong>irworthiness Certificate
                      </li>
                      <li>
                        <strong>R</strong>egistration
                      </li>
                      <li>
                        <strong>R</strong>adio Operator's License
                      </li>
                      <li>
                        <strong>O</strong>perating Limitations
                      </li>
                      <li>
                        <strong>W</strong>eight & Balance data
                      </li>
                    </ul>
                  </div>
                  <p className="font-medium">
                    Why it matters: Don't just assume the dispatch team has it covered. As PIC, the buck stops with
                    you.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-card-effect overflow-hidden border-t-4 border-t-primary">
                <CardHeader className="pb-3 bg-primary/5">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <CloudSun className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">V – enVironment (What are the conditions?)</CardTitle>
                      <CardDescription>Weather, terrain, airports, and airspace considerations</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    Environment includes weather, terrain, airports, and airspace. This is where your planning skills
                    get tested.
                  </p>
                  <p className="mb-4">Think through:</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-1">METARs and TAFs</h4>
                      <p className="text-sm">
                        Are the ceilings and visibility within your personal and legal limits?
                      </p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-1">NOTAMs</h4>
                      <p className="text-sm">Is the runway closed? Are lights out?</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-1">Terrain and obstructions</h4>
                      <p className="text-sm">Any CFIT (Controlled Flight Into Terrain) risks?</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-1">Airspace</h4>
                      <p className="text-sm">Do you understand the classes and know if you'll be talking to ATC?</p>
                    </div>
                  </div>
                  <p className="mt-4 font-medium">
                    Why it matters: The environment can change fast. You need to be a step ahead of it before you
                    launch.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-card-effect overflow-hidden border-t-4 border-t-primary">
                <CardHeader className="pb-3 bg-primary/5">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <AlertOctagon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">E – External Pressures (What's pushing you?)</CardTitle>
                      <CardDescription>The influences that can affect your decision-making</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4">This might be the most dangerous category because it's the most invisible.</p>
                  <p className="mb-4">
                    External pressures are all the things outside the cockpit that make you feel like you have to go:
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-1">Passenger Expectations</h4>
                      <p className="text-sm">Passengers waiting at the airport or counting on you</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-1">Financial Considerations</h4>
                      <p className="text-sm">The cost of rescheduling a flight or losing deposits</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-1">Ego and Pride</h4>
                      <p className="text-sm">Impressing your instructor, check airman, or peers</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-1">Self-Imposed Goals</h4>
                      <p className="text-sm">Personal targets like logging hours or completing training</p>
                    </div>
                  </div>
                  <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg mt-4 border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-600 dark:text-red-400 mb-1">Warning</h4>
                    <p className="text-sm">
                      This is where pilots get into trouble. The desire to "make it work" can override good judgment.
                      External pressures can make you rationalize away real safety concerns. Recognize them early and
                      neutralize them.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Practical Application */}
            <section className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">Why PAVE Matters in Flight School—and Beyond</h2>

              <p>
                In every stage check and checkride, your examiner is thinking in terms of PAVE, even if they don't say
                it out loud. So when they ask, "How do you know you're ready to fly today?"—they're not looking for "I
                just feel good about it."
              </p>

              <p>They want you to walk through the checklist:</p>

              <div className="p-6 bg-muted rounded-xl italic border border-muted-foreground/20">
                "I've evaluated myself using IMSAFE. The aircraft is legal and airworthy per the logs. I've reviewed
                the forecast and NOTAMs, and I have alternate plans. I'm not feeling any pressure to make the flight
                happen—I've made a risk-based go/no-go decision."
              </div>

              <p className="font-medium text-lg">That's what a PIC sounds like.</p>
            </section>

            {/* Interactive Checklist */}
            <section className="bg-card rounded-2xl border p-8">
              <h2 className="font-display text-2xl font-semibold mb-6">Interactive PAVE Checklist</h2>
              <p className="text-muted-foreground mb-6">
                Use this interactive checklist before your next flight to assess your readiness.
              </p>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" /> Pilot
                  </h3>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-4">
                      Complete the IMSAFE checklist to assess your personal readiness.
                    </p>
                    <Button>Open IMSAFE Checklist</Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <Plane className="h-5 w-5 text-primary" /> Aircraft
                  </h3>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-4">
                      Verify aircraft airworthiness and performance capabilities.
                    </p>
                    <Button>Aircraft Checklist</Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <CloudSun className="h-5 w-5 text-primary" /> enVironment
                  </h3>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-4">
                      Assess weather, terrain, airports, and airspace.
                    </p>
                    <Button>Environment Assessment</Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <AlertOctagon className="h-5 w-5 text-primary" /> External Pressures
                  </h3>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-4">
                      Identify and mitigate external pressures affecting your decision-making.
                    </p>
                    <Button>Pressure Assessment</Button>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <Button className="bg-primary hover:bg-primary/90">Download Complete PAVE Checklist</Button>
              </div>
            </section>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-6 border-t">
              <Button variant="outline" className="flex items-center">
                <ChevronLeft className="mr-2 h-4 w-4" /> Back to Risk Management
              </Button>
              <Button className="flex items-center">
                The DECIDE Model <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Table of Contents */}
            <div className="sticky top-24 rounded-xl border bg-card p-6">
              <h3 className="font-display text-lg font-semibold mb-4">In This Section</h3>
              <nav className="space-y-1">
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm rounded-md bg-primary/10 text-primary font-medium"
                >
                  PAVE Model Overview
                </a>
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                >
                  Pilot Component
                </a>
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                >
                  Aircraft Component
                </a>
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                >
                  Environment Component
                </a>
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                >
                  External Pressures Component
                </a>
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                >
                  Practical Applications
                </a>
              </nav>

              <Separator className="my-4" />

              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Glossary Terms
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  FAA Resources
                </Button>
              </div>
            </div>

            {/* Related Content */}
            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-display text-lg font-semibold mb-4">Related Content</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="rounded-md bg-primary/10 p-2 text-primary">
                    <AlertTriangle className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium group-hover:text-primary transition-colors">
                      <a href="#">The DECIDE Model</a>
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      A systematic approach to aeronautical decision-making
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="rounded-md bg-primary/10 p-2 text-primary">
                    <User className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium group-hover:text-primary transition-colors">
                      <a href="#">IMSAFE Checklist</a>
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Detailed guide to assessing your personal fitness for flight
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="rounded-md bg-primary/10 p-2 text-primary">
                    <CloudSun className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium group-hover:text-primary transition-colors">
                      <a href="#">Weather Decision Making</a>
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      How to make safe go/no-go decisions based on weather conditions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Quiz */}
            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-display text-lg font-semibold mb-4">Test Your Knowledge</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Take this quick quiz to check your understanding of the PAVE model.
              </p>
              <Button className="w-full">Take Quiz</Button>
            </div>

            {/* Download Resources */}
            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-display text-lg font-semibold mb-4">Resources</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Download className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">PAVE Checklist PDF</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Download className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Risk Assessment Matrix</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Download className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">FAA Risk Management Handbook</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

