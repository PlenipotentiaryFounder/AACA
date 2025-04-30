"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Plane,
  ChevronLeft,
  ChevronRight,
  CornerDownRight,
  Radio,
  Wind,
  Compass,
  AlertTriangle,
  BookOpen,
  ExternalLink,
  Download,
  Share2,
  Bookmark,
  Printer,
  ArrowUp,
  CornerUpRight,
  Headphones,
  RotateCcw,
  Eye,
  Info,
  Move,
  LogIn,
  LogOut,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs as InnerTabs, TabsContent as InnerTabsContent, TabsList as InnerTabsList, TabsTrigger as InnerTabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PremiumTabs } from "@/components/premium-tabs"
import { FundamentalsNavigation } from "@/components/fundamentals-navigation"
import { usePathname } from 'next/navigation'

export default function TrafficPatternsPage() {
  const pathname = usePathname()
  const [currentTab, setCurrentTab] = useState("fundamentals")

  const tabs = [
    { value: 'intro', label: 'Introduction', icon: <Info className="h-4 w-4" /> },
    { value: 'fundamentals', label: 'Fundamentals', icon: <Move className="h-4 w-4" /> },
    { value: 'entries-departures', label: 'Entries & Departures', icon: <LogIn className="h-4 w-4" /> },
    { value: 'comms', label: 'Communications', icon: <Radio className="h-4 w-4" /> },
    { value: 'errors', label: 'Common Errors', icon: <AlertTriangle className="h-4 w-4" /> }
  ]

  const prevPage = { name: "Weather Basics", url: "/fundamentals/weather" };
  const nextPage = { name: "Sectional Charts", url: "/fundamentals/sectional-charts" };

  return (
    <main className="min-h-screen">
      <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="space-y-8">
          <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-aa-navy to-aa-blue text-white">
            <div className="absolute inset-0 bg-[url('/images/airport-runway-sunset.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
            <div className="relative z-10 px-6 py-12 md:py-16 md:px-10">
              <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">
                Training Fundamentals
              </Badge>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">Traffic Patterns</h1>
              <p className="text-xl text-white/80 mb-6 max-w-2xl">Mastering Airport Traffic Flow and Procedures</p>
              <div className="flex flex-wrap gap-4">
                <Button size="sm" className="bg-white text-aa-navy hover:bg-white/90">
                  Download Guide
                </Button>
                <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/20">
                  Share <Share2 className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 -mb-6 -mr-6 opacity-20 md:opacity-30">
              <div className="w-full h-full bg-[url('/images/cessna-172-in-flight-side-view.jpg')] bg-contain bg-no-repeat"></div>
            </div>
          </section>

          <PremiumTabs
            tabs={tabs}
            currentValue={currentTab}
            onChange={setCurrentTab}
            defaultValue="fundamentals"
            title="Traffic Pattern Topics"
          />

          <div className="pt-8">
            {currentTab === 'intro' && (
              <section className="prose prose-lg dark:prose-invert max-w-none">
                <p className="lead">
                  The airport traffic pattern is a standardized path that aircraft follow when taking off or landing.
                  Mastering traffic patterns is essential for safe and efficient airport operations, especially at
                  non-towered airports where pilots must maintain separation without ATC guidance.
                </p>

                <p>
                  Whether you're a student pilot learning the basics or an experienced pilot refreshing your knowledge,
                  understanding traffic pattern procedures is fundamental to your flight training and ongoing safety as
                  a pilot.
                </p>

                <div className="bg-muted rounded-xl p-6 my-6 border-l-4 border-primary">
                  <h3 className="text-xl font-semibold mb-3">Why Traffic Patterns Matter</h3>
                  <p className="mb-0">Traffic patterns serve several important purposes:</p>
                  <ul className="mt-2 mb-0 list-disc pl-6">
                    <li>Establish a predictable flow of traffic around airports</li>
                    <li>Enhance safety by standardizing aircraft movements</li>
                    <li>Provide a systematic approach for takeoffs and landings</li>
                    <li>Allow pilots to properly configure their aircraft for landing</li>
                    <li>Create a consistent framework for communication between pilots</li>
                  </ul>
                </div>
                <p>Let's break down the components and procedures.</p>
              </section>
            )}

            {currentTab === 'fundamentals' && (
              <section>
                <h2 className="font-display text-2xl font-semibold mb-6">Traffic Pattern Fundamentals</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  A standard traffic pattern consists of specific legs or segments that guide aircraft from takeoff to
                  landing or from approach to departure. Understanding these segments is crucial for safe pattern
                  operations.
                </p>

                <div className="bg-card rounded-xl border p-8 mb-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-4">Standard Traffic Pattern Legs</h3>
                      <p className="mb-4">The standard traffic pattern consists of five key segments:</p>
                      <ol className="list-decimal pl-6 space-y-3">
                        <li>
                          <strong>Upwind Leg</strong>
                          <p className="text-sm mt-1">
                            The flight path parallel to the landing runway in the direction of landing
                          </p>
                        </li>
                        <li>
                          <strong>Crosswind Leg</strong>
                          <p className="text-sm mt-1">
                            The flight path at right angles to the landing runway off its takeoff end
                          </p>
                        </li>
                        <li>
                          <strong>Downwind Leg</strong>
                          <p className="text-sm mt-1">
                            The flight path parallel to the landing runway in the opposite direction of landing
                          </p>
                        </li>
                        <li>
                          <strong>Base Leg</strong>
                          <p className="text-sm mt-1">
                            The flight path at right angles to the landing runway off its approach end
                          </p>
                        </li>
                        <li>
                          <strong>Final Approach</strong>
                          <p className="text-sm mt-1">
                            The flight path in the direction of landing along the extended runway centerline
                          </p>
                        </li>
                      </ol>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4 flex items-center justify-center">
                      <div className="w-full h-64 bg-[url('/images/traffic-pattern-diagram.png')] bg-contain bg-center bg-no-repeat"></div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="hover-card-effect">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <RotateCcw className="h-4 w-4 text-primary" />
                        </div>
                        <CardTitle>Pattern Direction</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm">
                        Traffic patterns can be either left-hand (standard) or right-hand (non-standard).
                      </p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>
                          <strong>Left-hand pattern:</strong> All turns are made to the left
                        </li>
                        <li>
                          <strong>Right-hand pattern:</strong> All turns are made to the right
                        </li>
                        <li>
                          Right-hand patterns are typically used when obstacles, noise abatement, or other factors make
                          left patterns impractical
                        </li>
                        <li>Pattern direction is published in the Chart Supplement (A/FD)</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="hover-card-effect">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <ArrowUp className="h-4 w-4 text-primary" />
                        </div>
                        <CardTitle>Pattern Altitude</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm">Standard traffic pattern altitudes vary by aircraft type.</p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>
                          <strong>Piston-powered aircraft:</strong> 1,000 feet AGL
                        </li>
                        <li>
                          <strong>Turbine-powered aircraft:</strong> 1,500 feet AGL
                        </li>
                        <li>
                          <strong>Large/heavy aircraft:</strong> May use higher altitudes
                        </li>
                        <li>Pattern altitudes may be adjusted for local conditions</li>
                        <li>Always verify the published pattern altitude for each airport</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="hover-card-effect">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Wind className="h-4 w-4 text-primary" />
                        </div>
                        <CardTitle>Wind Considerations</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm">
                        Wind significantly impacts ground track in the traffic pattern.
                      </p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Correct for wind drift on all legs to maintain proper path over ground</li>
                        <li>Wind affects groundspeed, altering turn timing and base leg length</li>
                        <li>Always be aware of wind direction and velocity</li>
                        <li>Use windsock or ATIS/AWOS for wind information</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>
            )}

            {currentTab === 'entries-departures' && (
              <section>
                <h2 className="font-display text-2xl font-semibold mb-6">Pattern Entries and Departures</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Knowing how to properly enter and exit the traffic pattern is crucial for safety and sequencing with
                  other aircraft.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="hover-card-effect">
                    <CardHeader>
                      <CardTitle>Entering the Traffic Pattern</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        The recommended method is to enter the pattern at a 45° angle to the downwind leg, abeam the
                        midpoint of the runway, at pattern altitude.
                      </p>
                      <ol className="list-decimal pl-6 space-y-2 text-sm mb-4">
                        <li>Fly towards the airport, remaining clear of the pattern</li>
                        <li>Determine wind direction and active runway</li>
                        <li>Maneuver to intercept the 45° entry leg</li>
                        <li>Descend to pattern altitude before entering</li>
                        <li>Announce intentions on CTAF (if non-towered)</li>
                        <li>Yield to aircraft already established in the pattern</li>
                      </ol>
                      <div className="bg-muted/30 rounded-lg p-4 flex items-center justify-center">
                        <div className="w-full h-48 bg-[url('/images/traffic-pattern-entry.png')] bg-contain bg-center bg-no-repeat"></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover-card-effect">
                    <CardHeader>
                      <CardTitle>Departing the Traffic Pattern</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Departures typically involve continuing straight out on the upwind leg or turning 45° away
                        from the pattern after reaching a safe altitude.
                      </p>
                      <ol className="list-decimal pl-6 space-y-2 text-sm mb-4">
                        <li>
                          <strong>Straight-Out Departure:</strong> Continue climbing on the extended runway centerline.
                        </li>
                        <li>
                          <strong>45° Departure:</strong> Turn 45° (usually left for standard patterns) off the upwind
                          or crosswind leg once clear of pattern traffic.
                        </li>
                        <li>Climb to a safe altitude before turning on course</li>
                        <li>Announce departure intentions on CTAF</li>
                        <li>Follow any published noise abatement procedures</li>
                      </ol>
                      <div className="bg-muted/30 rounded-lg p-4 flex items-center justify-center">
                        <div className="w-full h-48 bg-[url('/images/traffic-pattern-departure.png')] bg-contain bg-center bg-no-repeat"></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/30">
                  <h4 className="font-semibold text-yellow-700 dark:text-yellow-400 mb-2">Important Considerations</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-yellow-800 dark:text-yellow-300">
                    <li>Always check local procedures (Chart Supplement, airport diagrams)</li>
                    <li>Maintain situational awareness - scan constantly for traffic</li>
                    <li>Communicate intentions clearly, especially at non-towered fields</li>
                    <li>Avoid overflying the airport or conflicting with established traffic</li>
                  </ul>
                </div>
              </section>
            )}

            {currentTab === 'comms' && (
              <section>
                <h2 className="font-display text-2xl font-semibold mb-6">Pattern Communications</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Clear and concise communication is vital in the traffic pattern, especially at non-towered airports
                  where pilots rely on self-announcements.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="hover-card-effect">
                    <CardHeader>
                      <CardTitle>Towered Airports</CardTitle>
                      <CardDescription>Operations under direct ATC control</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm">
                        At airports with an operating control tower, ATC provides instructions for pattern entry,
                        sequencing, and departure.
                      </p>
                      <ul className="list-disc pl-5 text-sm space-y-2">
                        <li>Establish communication with the tower before entering Class D airspace</li>
                        <li>Follow all ATC instructions explicitly</li>
                        <li>Expect clearances for takeoff, landing, and pattern legs</li>
                        <li>Read back clearances and instructions as required</li>
                        <li>Request pattern work (touch-and-gos) if desired</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover-card-effect">
                    <CardHeader>
                      <CardTitle>Non-Towered Airports (CTAF)</CardTitle>
                      <CardDescription>Pilot self-announcement procedures</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm">
                        At non-towered airports, pilots use the Common Traffic Advisory Frequency (CTAF) to announce
                        their position and intentions.
                      </p>
                      <ul className="list-disc pl-5 text-sm space-y-2">
                        <li>Announce when approaching the airport (10 miles out)</li>
                        <li>Announce entering each leg of the pattern (downwind, base, final)</li>
                        <li>Announce taking the runway for departure</li>
                        <li>Announce clear of the runway after landing</li>
                        <li>Listen carefully for other traffic making announcements</li>
                        <li>Phraseology: "[Airport Name] Traffic, [Aircraft Type] [Call Sign], [Position], [Intentions],
                          [Airport Name]"</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 bg-primary/5 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Example CTAF Calls (Non-Towered)</h3>
                  <div className="space-y-3 text-sm">
                    <p>
                      <strong className="font-medium">Approaching:</strong> "Podunk Traffic, Cessna 12345, 10 miles
                      south, 3500, landing Podunk."
                    </p>
                    <p>
                      <strong className="font-medium">Entering Downwind:</strong> "Podunk Traffic, Cessna 12345, entering
                      left downwind runway 18, Podunk."
                    </p>
                    <p>
                      <strong className="font-medium">Turning Base:</strong> "Podunk Traffic, Cessna 12345, turning left
                      base runway 18, Podunk."
                    </p>
                    <p>
                      <strong className="font-medium">Turning Final:</strong> "Podunk Traffic, Cessna 12345, turning final
                      runway 18, touch-and-go, Podunk."
                    </p>
                    <p>
                      <strong className="font-medium">Departing:</strong> "Podunk Traffic, Cessna 12345, departing runway
                      18, straight out departure, Podunk."
                    </p>
                  </div>
                </div>
              </section>
            )}

            {currentTab === 'errors' && (
              <section>
                <h2 className="font-display text-2xl font-semibold mb-6">Common Traffic Pattern Errors</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Awareness of common mistakes can help you avoid them and operate more safely in the pattern.
                </p>
                <Accordion type="multiple" className="w-full space-y-3">
                  <AccordionItem value="entry">
                    <AccordionTrigger className="font-medium bg-card border rounded-lg px-4 py-3 hover:bg-muted/50 data-[state=open]:bg-muted/50 transition-colors">
                      Incorrect Pattern Entry
                    </AccordionTrigger>
                    <AccordionContent className="p-4 text-sm bg-card border border-t-0 rounded-b-lg">
                      Entering too close, too high, or conflicting with existing traffic. Always use the standard 45°
                      entry at pattern altitude.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="altitude">
                    <AccordionTrigger className="font-medium bg-card border rounded-lg px-4 py-3 hover:bg-muted/50 data-[state=open]:bg-muted/50 transition-colors">
                      Failure to Maintain Pattern Altitude
                    </AccordionTrigger>
                    <AccordionContent className="p-4 text-sm bg-card border border-t-0 rounded-b-lg">
                      Climbing or descending significantly while on downwind or base legs. Maintain assigned or
                      standard pattern altitude until descending on final.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="spacing">
                    <AccordionTrigger className="font-medium bg-card border rounded-lg px-4 py-3 hover:bg-muted/50 data-[state=open]:bg-muted/50 transition-colors">
                      Improper Spacing / Sequencing
                    </AccordionTrigger>
                    <AccordionContent className="p-4 text-sm bg-card border border-t-0 rounded-b-lg">
                      Following too closely, cutting off other aircraft, or failing to extend downwind when necessary
                      for spacing.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="wind">
                    <AccordionTrigger className="font-medium bg-card border rounded-lg px-4 py-3 hover:bg-muted/50 data-[state=open]:bg-muted/50 transition-colors">
                      Failure to Correct for Wind Drift
                    </AccordionTrigger>
                    <AccordionContent className="p-4 text-sm bg-card border border-t-0 rounded-b-lg">
                      Allowing wind to push the aircraft too far from or too close to the runway on downwind and base
                      legs.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="turns">
                    <AccordionTrigger className="font-medium bg-card border rounded-lg px-4 py-3 hover:bg-muted/50 data-[state=open]:bg-muted/50 transition-colors">
                      Uncoordinated Turns
                    </AccordionTrigger>
                    <AccordionContent className="p-4 text-sm bg-card border border-t-0 rounded-b-lg">
                      Skidding or slipping during turns, especially base-to-final, which increases stall/spin risk at
                      low altitude.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="comm-errors">
                    <AccordionTrigger className="font-medium bg-card border rounded-lg px-4 py-3 hover:bg-muted/50 data-[state=open]:bg-muted/50 transition-colors">
                      Poor Communication (Non-Towered)
                    </AccordionTrigger>
                    <AccordionContent className="p-4 text-sm bg-card border border-t-0 rounded-b-lg">
                      Failing to make position reports, using non-standard phraseology, or not listening for other
                      traffic on CTAF.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="incursion">
                    <AccordionTrigger className="font-medium bg-card border rounded-lg px-4 py-3 hover:bg-muted/50 data-[state=open]:bg-muted/50 transition-colors">
                      Runway Incursions
                    </AccordionTrigger>
                    <AccordionContent className="p-4 text-sm bg-card border border-t-0 rounded-b-lg">
                      Entering or crossing a runway without clearance (towered) or ensuring it's clear
                      (non-towered).
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-8 bg-red-500/10 p-6 rounded-lg border border-red-500/30">
                  <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Mitigation Strategies</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-red-800 dark:text-red-300">
                    <li>Thorough preflight briefing and airport familiarization</li>
                    <li>Maintain sterile cockpit below 1,000 feet AGL in the pattern</li>
                    <li>Actively scan for traffic throughout pattern operations</li>
                    <li>Use checklists consistently (e.g., GUMPS check before landing)</li>
                    <li>Practice pattern work regularly with an instructor</li>
                    <li>Don't rush! Fly the pattern smoothly and deliberately</li>
                  </ul>
                </div>
              </section>
            )}
          </div>

          <FundamentalsNavigation
            prevPage={prevPage}
            nextPage={nextPage}
            currentPageUrl={pathname}
          />
        </div>
      </div>
    </main>
  )
}

