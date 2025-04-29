import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset } from "@/components/ui/sidebar"
import { MainHeader } from "@/components/main-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Map,
  Compass,
  Cloud,
  Plane,
  Calculator,
  Fuel,
  AlertTriangle,
  RotateCw,
  FileText,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  BookOpen,
  Download,
  Share2,
  Bookmark,
  Printer,
  MapPin,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"

export default function CrossCountryPlanningPage() {
  return (
    <main className="min-h-screen">
      <AppSidebar />
      <SidebarInset>
        <MainHeader />

        <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hero Section */}
              <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-aa-navy to-aa-blue text-white">
                <div className="absolute inset-0 bg-[url('/images/pilot-planning-route-on-chart.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
                <div className="relative z-10 px-6 py-12 md:py-16 md:px-10">
                  <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">
                    Training Fundamentals
                  </Badge>
                  <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                    Cross-Country Planning
                  </h1>
                  <p className="text-xl text-white/80 mb-6 max-w-2xl">
                    The Art and Science of Planning Flights Beyond the Local Area
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="sm" className="bg-white text-aa-navy hover:bg-white/90">
                      Navigation Log Example <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/20">
                      Share <Share2 className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 -mb-6 -mr-6 opacity-20 md:opacity-30">
                  <div className="w-full h-full bg-[url('/images/e6b-flight-computer-closeup.jpg')] bg-contain bg-no-repeat"></div>
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
                  Flying beyond your local practice area opens up a world of new destinations and challenges.
                  Cross-country flight planning is the systematic process of preparing for these flights, ensuring safety,
                  efficiency, and compliance with regulations.
                </p>

                <p>
                  Unlike local flights, cross-country trips involve navigating over longer distances, potentially
                  encountering changing weather, unfamiliar terrain, and different airspace classes. Thorough planning is
                  not just recommended—it's essential.
                </p>

                <div className="bg-muted rounded-xl p-6 my-6 border-l-4 border-primary">
                  <h3 className="text-xl font-semibold mb-3">Why Cross-Country Planning Matters</h3>
                  <p className="mb-0">Effective planning helps you:</p>
                  <ul className="mt-2 mb-0">
                    <li>Choose the safest and most efficient route</li>
                    <li>Accurately calculate fuel requirements and ensure adequate reserves</li>
                    <li>Anticipate and prepare for weather changes</li>
                    <li>Understand performance limitations and takeoff/landing distances</li>
                    <li>Comply with airspace regulations and avoid violations</li>
                    <li>Maintain situational awareness throughout the flight</li>
                    <li>Develop contingency plans for unexpected events</li>
                  </ul>
                </div>
              </section>

              {/* The Planning Process */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-6">The Cross-Country Planning Process</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  A systematic approach ensures all critical aspects are considered before takeoff.
                </p>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="hover-card-effect">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Map className="h-4 w-4 text-primary" />
                        </div>
                        <CardTitle>Route Selection</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Determine the optimal path considering terrain, airspace, weather, and navigation aids. Select
                        prominent checkpoints for pilotage.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover-card-effect">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Cloud className="h-4 w-4 text-primary" />
                        </div>
                        <CardTitle>Weather Analysis</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Obtain a thorough weather briefing (METARs, TAFs, Winds Aloft, AIRMETs, SIGMETs) for the entire
                        route and timeframe.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover-card-effect">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Plane className="h-4 w-4 text-primary" />
                        </div>
                        <CardTitle>Performance</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Calculate takeoff/landing distances, climb performance, and cruise performance based on density
                        altitude and aircraft weight.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover-card-effect">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Calculator className="h-4 w-4 text-primary" />
                        </div>
                        <CardTitle>Weight & Balance</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Ensure the aircraft remains within weight limits and the center of gravity (CG) is within the
                        approved range for the entire flight.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover-card-effect">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <FileText className="h-4 w-4 text-primary" />
                        </div>
                        <CardTitle>Navigation Log</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Prepare a detailed log with checkpoints, courses, distances, estimated times, headings, and fuel
                        calculations for each leg.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover-card-effect">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Fuel className="h-4 w-4 text-primary" />
                        </div>
                        <CardTitle>Fuel Planning</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Calculate fuel required for climb, cruise, descent, and reserves (FAA minimums + personal
                        minimums). Plan fuel stops if needed.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-yellow-700 dark:text-yellow-400 mb-1">Contingency Planning</h4>
                  <p className="text-sm">
                    Always identify suitable alternate airports along the route in case of weather deterioration,
                    mechanical issues, or other unforeseen circumstances. Know diversion procedures.
                  </p>
                </div>
              </section>

              {/* Essential Tools */}
              <section className="bg-card rounded-2xl border p-8">
                <h2 className="font-display text-2xl font-semibold mb-6">Essential Tools for Planning</h2>
                <p className="text-lg mb-6">
                  Accurate planning requires the right tools. While digital aids are common, proficiency with manual
                  tools is fundamental.
                </p>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <Card className="hover-card-effect">
                    <CardHeader className="pb-2">
                      <CardTitle>Sectional Charts</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        The foundation of VFR planning. Shows terrain, airports, airspace, navaids, obstacles. Always
                        use current charts.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover-card-effect">
                    <CardHeader className="pb-2">
                      <CardTitle>Plotter</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Used to measure true course between points on the chart and measure distances accurately.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover-card-effect">
                    <CardHeader className="pb-2">
                      <CardTitle>E6B Flight Computer</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Mechanical or electronic tool for calculating wind correction, groundspeed, time, fuel burn,
                        density altitude, etc.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover-card-effect">
                    <CardHeader className="pb-2">
                      <CardTitle>Electronic Flight Bag (EFB)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Apps like ForeFlight or Garmin Pilot streamline planning but require understanding of underlying
                        principles. Have backups.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Additional resources include the Chart Supplement (A/FD), Pilot's Operating Handbook (POH)/Aircraft
                  Flight Manual (AFM), and weather briefing sources.
                </p>
              </section>

              {/* Key Calculations */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-6">Key Calculations</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Precise calculations are the heart of cross-country planning. Master these using your plotter and E6B.
                </p>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="course">
                    <AccordionTrigger className="text-lg font-medium">1. True Course & Magnetic Course</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">
                        <strong>True Course (TC):</strong> The course measured on the chart relative to true north. Use
                        your plotter to measure the angle of your route line against lines of longitude.
                      </p>
                      <p className="mb-2">
                        <strong>Magnetic Variation (VAR):</strong> The angular difference between true north and magnetic
                        north, found on sectional charts (isogonic lines). East variation is subtracted, West variation
                        is added ("East is Least, West is Best").
                      </p>
                      <p className="mb-2">
                        <strong>Magnetic Course (MC):</strong> True Course adjusted for magnetic variation (MC = TC ±
                        VAR). This is the course relative to magnetic north.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="wind">
                    <AccordionTrigger className="text-lg font-medium">2. Wind Correction Angle & Magnetic Heading</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">
                        <strong>Wind Correction Angle (WCA):</strong> The angle you must adjust your heading into the
                        wind to maintain your desired Magnetic Course. Calculated using the wind side of the E6B based on
                        winds aloft, true airspeed, and magnetic course.
                      </p>
                      <p className="mb-2">
                        <strong>Magnetic Heading (MH):</strong> Magnetic Course adjusted for the Wind Correction Angle
                        (MH = MC ± WCA). This is the direction the aircraft's nose must point relative to magnetic north.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="groundspeed">
                    <AccordionTrigger className="text-lg font-medium">3. Groundspeed (GS)</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">
                        <strong>Groundspeed (GS):</strong> The aircraft's actual speed over the ground. Calculated using
                        the wind side of the E6B simultaneously with WCA. It accounts for the headwind or tailwind
                        component.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="time">
                    <AccordionTrigger className="text-lg font-medium">
                      4. Estimated Time Enroute (ETE)
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">
                        <strong>Distance:</strong> Measure the leg distance on the sectional chart using your plotter.
                      </p>
                      <p className="mb-2">
                        <strong>Estimated Time Enroute (ETE):</strong> Calculated using the formula Time = Distance /
                        Groundspeed. Use the calculator side of the E6B for quick calculation (align GS on the outer
                        scale with the rate arrow, find distance on outer scale, read ETE on inner scale).
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="fuel">
                    <AccordionTrigger className="text-lg font-medium">5. Fuel Consumption</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">
                        <strong>Fuel Burn Rate:</strong> Determined from the POH/AFM performance charts for your planned
                        cruise power setting and altitude.
                      </p>
                      <p className="mb-2">
                        <strong>Fuel Required for Leg:</strong> Calculated using Fuel = Fuel Burn Rate × ETE. Use the
                        calculator side of the E6B.
                      </p>
                      <p className="mb-2">
                        <strong>Total Fuel Required:</strong> Sum the fuel for all legs, plus fuel for taxi, takeoff,
                        climb, and required reserves (FAA: +30 min day VFR, +45 min night VFR). Always add a personal
                        buffer.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

              {/* Navigation Log */}
              <section className="bg-card rounded-2xl border p-8">
                <h2 className="font-display text-2xl font-semibold mb-6">The Navigation Log (Nav Log)</h2>
                <p className="text-lg mb-6">
                  The nav log is your flight plan written down—a detailed, leg-by-leg summary of your calculations and
                  plan. It's your primary reference tool in the cockpit.
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border p-1">Leg</th>
                        <th className="border p-1">Checkpoint</th>
                        <th className="border p-1">Altitude</th>
                        <th className="border p-1">TC</th>
                        <th className="border p-1">WCA</th>
                        <th className="border p-1">TH</th>
                        <th className="border p-1">VAR</th>
                        <th className="border p-1">MH</th>
                        <th className="border p-1">Dist</th>
                        <th className="border p-1">GS</th>
                        <th className="border p-1">ETE</th>
                        <th className="border p-1">Fuel Gal</th>
                        <th className="border p-1">Est Time</th>
                        <th className="border p-1">Act Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-1">1</td>
                        <td className="border p-1">KDTO → Pecan</td>
                        <td className="border p-1">3500'</td>
                        <td className="border p-1">275°</td>
                        <td className="border p-1">+5°</td>
                        <td className="border p-1">280°</td>
                        <td className="border p-1">5°E</td>
                        <td className="border p-1">275°</td>
                        <td className="border p-1">15</td>
                        <td className="border p-1">105</td>
                        <td className="border p-1">0:09</td>
                        <td className="border p-1">1.5</td>
                        <td className="border p-1">10:09</td>
                        <td className="border p-1"></td>
                      </tr>
                      <tr>
                        <td className="border p-1">2</td>
                        <td className="border p-1">Pecan → KMWL</td>
                        <td className="border p-1">3500'</td>
                        <td className="border p-1">260°</td>
                        <td className="border p-1">+6°</td>
                        <td className="border p-1">266°</td>
                        <td className="border p-1">6°E</td>
                        <td className="border p-1">260°</td>
                        <td className="border p-1">45</td>
                        <td className="border p-1">108</td>
                        <td className="border p-1">0:25</td>
                        <td className="border p-1">4.2</td>
                        <td className="border p-1">10:34</td>
                        <td className="border p-1"></td>
                      </tr>
                      {/* Add more rows as needed */}
                    </tbody>
                  </table>
                </div>
                <Alert>
                  <FileText className="h-4 w-4" />
                  <AlertTitle>Using the Nav Log In-Flight</AlertTitle>
                  <AlertDescription>
                    Record actual times over checkpoints. Compare actual vs. estimated times to calculate actual
                    groundspeed and update ETEs for subsequent legs. Monitor fuel burn against plan.
                  </AlertDescription>
                </Alert>
              </section>

              {/* Flight Plan Filing */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-6">Flight Plan Filing, Activation & Closing</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  While optional for VFR, filing a flight plan provides search and rescue protection and demonstrates
                  professionalism.
                </p>
                <div className="grid gap-6 md:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Filing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        File online (e.g., 1800wxbrief.com), via EFB app, or by phone with Flight Service (1-800-WX-BRIEF).
                        Include aircraft details, route, altitudes, ETE, fuel, pilot info, etc.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Activation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        You MUST activate your flight plan after takeoff. Contact Flight Service via radio (check frequencies
                        on chart/supplement) or phone. ATC does NOT automatically activate VFR flight plans.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Closing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        You MUST close your flight plan upon arrival. Contact Flight Service via radio or phone. If you
                        don't close within 30 minutes of your ETA, search and rescue procedures begin.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <Alert variant="destructive" className="mt-6">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Critical Safety Item</AlertTitle>
                  <AlertDescription>
                    Failure to activate means no SAR protection. Failure to close triggers unnecessary SAR efforts.
                    Always activate and close your VFR flight plan!
                  </AlertDescription>
                </Alert>
              </section>

              {/* Diversion Planning & Lost Procedures */}
              <section className="bg-card rounded-2xl border p-8">
                <h2 className="font-display text-2xl font-semibold mb-6">Diversion Planning & Lost Procedures</h2>
                <p className="text-lg mb-6">
                  Even the best plans can change. Know how to divert and what to do if you become disoriented.
                </p>
                <Tabs defaultValue="diversion" className="w-full">
                  <TabsList className="grid grid-cols-2 mb-6">
                    <TabsTrigger value="diversion">Diversion Planning</TabsTrigger>
                    <TabsTrigger value="lost">Lost Procedures</TabsTrigger>
                  </TabsList>
                  <TabsContent value="diversion">
                    <h3 className="font-semibold mb-2">Planning for Diversions</h3>
                    <ul className="list-disc pl-6 space-y-1 text-sm mb-4">
                      <li>Identify potential alternate airports during preflight planning.</li>
                      <li>Consider alternates with suitable runways, services, and instrument approaches (if IFR capable).</li>
                      <li>Know how to quickly estimate course, distance, time, and fuel to an alternate in-flight.</li>
                      <li>Practice diversion procedures with your instructor.</li>
                    </ul>
                    <h3 className="font-semibold mb-2">Executing a Diversion</h3>
                    <ol className="list-decimal pl-6 space-y-1 text-sm">
                      <li>Make the decision to divert early.</li>
                      <li>Turn towards the general direction of the alternate airport immediately.</li>
                      <li>Determine precise course and estimate distance, time, and fuel required.</li>
                      <li>Advise ATC (if using flight following) or announce intentions on appropriate frequency.</li>
                      <li>Navigate to the alternate airport.</li>
                    </ol>
                  </TabsContent>
                  <TabsContent value="lost">
                    <h3 className="font-semibold mb-2">The "Five Cs" if Lost</h3>
                    <ol className="list-decimal pl-6 space-y-2 text-sm">
                      <li>
                        <strong>Climb:</strong> Gain altitude for better visibility, radio reception, and terrain clearance.
                      </li>
                      <li>
                        <strong>Communicate:</strong> Contact ATC (nearest facility or 121.5 MHz) or Flight Service. State
                        you are lost. Use your transponder (squawk 7700 if necessary).
                      </li>
                      <li>
                        <strong>Confess:</strong> Tell ATC you are lost. Don't be embarrassed; they are there to help.
                      </li>
                      <li>
                        <strong>Comply:</strong> Follow ATC instructions precisely. They can provide radar vectors or other
                        assistance.
                      </li>
                      <li>
                        <strong>Conserve:</strong> Reduce power to conserve fuel while you get oriented or receive help.
                      </li>
                    </ol>
                    <p className="text-sm mt-4">
                      Use VORs, GPS, or visual landmarks to re-orient yourself if possible, but prioritize communication.
                    </p>
                  </TabsContent>
                </Tabs>
              </section>

              {/* Common Errors & Best Practices */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-6">Common Errors & Best Practices</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-red-600">Common Errors</h3>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li>Inadequate weather briefing / ignoring adverse weather</li>
                      <li>Calculation errors (WCA, GS, fuel)</li>
                      <li>Poor checkpoint selection / getting lost</li>
                      <li>Not updating nav log in flight / deviating significantly from plan</li>
                      <li>Insufficient fuel reserves / poor fuel management</li>
                      <li>Forgetting to activate or close flight plan</li>
                      <li>Ignoring weight and balance or performance limitations</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-green-600">Best Practices</h3>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li>Get a thorough standard weather briefing</li>
                      <li>Double-check all calculations</li>
                      <li>Use clear, prominent checkpoints</li>
                      <li>Continuously monitor progress and update nav log</li>
                      <li>Plan conservative fuel reserves (e.g., 1 hour)</li>
                      <li>Set reminders to activate/close flight plan</li>
                      <li>Always perform W&B and performance calculations</li>
                      <li>Use flight following services</li>
                      <li>Have paper charts as backup to EFBs</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-6 border-t">
                  <Link href="/fundamentals/airspace">
                    <Button variant="outline" className="flex items-center">
                      <ChevronLeft className="mr-2 h-4 w-4" /> Airspace
                    </Button>
                  </Link>
                {/* Link to next section or back to Fundamentals overview */}
                <Link href="/fundamentals">
                    <Button>
                        Back to Fundamentals <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Table of Contents */}
              <div className="sticky top-24 rounded-xl border bg-card p-6">
                <h3 className="font-display text-lg font-semibold mb-4">In This Section</h3>
                <nav className="space-y-1">
                  {/* Add links to section IDs later */}
                  <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-muted">
                    Planning Process
                  </a>
                  <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-muted">
                    Essential Tools
                  </a>
                  <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-muted">
                    Key Calculations
                  </a>
                  <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-muted">
                    Navigation Log
                  </a>
                  <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-muted">
                    Flight Plan Filing
                  </a>
                  <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-muted">
                    Diversion & Lost Procedures
                  </a>
                  <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-muted">
                    Common Errors & Best Practices
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
                    FAA Resources (AC 61-84B)
                  </Button>
                </div>
              </div>

              {/* Related Content */}
              <div className="rounded-xl border bg-card p-6">
                <h3 className="font-display text-lg font-semibold mb-4">Related Content</h3>
                <div className="space-y-4">
                   <div className="flex items-start gap-3 group">
                    <div className="rounded-md bg-primary/10 p-2 text-primary">
                      <Compass className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium group-hover:text-primary transition-colors">
                        <Link href="/fundamentals/navigation">Navigation Methods</Link>
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Pilotage, Dead Reckoning, VOR, GPS
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <div className="rounded-md bg-primary/10 p-2 text-primary">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium group-hover:text-primary transition-colors">
                        <Link href="/fundamentals/sectional-charts">Sectional Charts</Link>
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Interpreting symbols, terrain, and airspace
                      </p>
                    </div>
                  </div>
                   <div className="flex items-start gap-3 group">
                    <div className="rounded-md bg-primary/10 p-2 text-primary">
                      <Cloud className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium group-hover:text-primary transition-colors">
                        <Link href="/fundamentals/weather">Aviation Weather</Link>
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Understanding reports, forecasts, and hazards
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Quiz Placeholder */}
              <div className="rounded-xl border bg-card p-6">
                <h3 className="font-display text-lg font-semibold mb-4">Test Your Knowledge</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Check your understanding of cross-country planning principles.
                </p>
                <Button className="w-full" disabled>Quiz Coming Soon</Button>
              </div>

              {/* Download Resources Placeholder */}
              <div className="rounded-xl border bg-card p-6">
                <h3 className="font-display text-lg font-semibold mb-4">Resources</h3>
                 <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Blank Nav Log Template</span>
                    </div>
                    <Button variant="ghost" size="sm" disabled>Download</Button>
                  </div>
                   <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">VFR Flight Plan Form</span>
                    </div>
                    <Button variant="ghost" size="sm" disabled>Download</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </main>
  )
}
