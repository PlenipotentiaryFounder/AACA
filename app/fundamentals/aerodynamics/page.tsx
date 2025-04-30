"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Plane,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  ArrowRight as ThrustIcon,
  Wind,
  Compass,
  BookOpen,
  ExternalLink,
  Download,
  Share2,
  Bookmark,
  Printer,
  RotateCw,
  Zap,
  Info,
  Shield,
  AlertTriangle,
  HelpCircle,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs as InnerTabs, TabsContent as InnerTabsContent, TabsList as InnerTabsList, TabsTrigger as InnerTabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PremiumTabs } from "@/components/premium-tabs"
import { FundamentalsNavigation } from "@/components/fundamentals-navigation"
import { usePathname } from 'next/navigation'

export default function AerodynamicsPage() {
  const pathname = usePathname()
  const [currentTab, setCurrentTab] = useState("four-forces")

  const tabs = [
    { value: 'intro', label: 'Introduction', icon: <HelpCircle className="h-4 w-4" /> },
    { value: 'four-forces', label: 'Four Forces', icon: <Wind className="h-4 w-4" /> },
    { value: 'axes-controls', label: 'Axes & Controls', icon: <RotateCw className="h-4 w-4" /> },
    { value: 'stability', label: 'Stability', icon: <Shield className="h-4 w-4" /> },
    { value: 'load-factor', label: 'Load Factor', icon: <Zap className="h-4 w-4" /> },
    { value: 'stalls-spins', label: 'Stalls & Spins', icon: <AlertTriangle className="h-4 w-4" /> }
  ]

  const prevPage = { name: "Risk Management", url: "/fundamentals/risk-management" };
  const nextPage = { name: "Airspace Navigation", url: "/fundamentals/airspace" };

  return (
    <main className="min-h-screen">
      <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="space-y-8">
          <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-aa-navy to-aa-blue text-white">
            <div className="absolute inset-0 bg-[url('/images/aircraft-wing-above-clouds.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
            <div className="relative z-10 px-6 py-12 md:py-16 md:px-10">
              <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">
                Training Fundamentals
              </Badge>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                Basic Aerodynamics
              </h1>
              <p className="text-xl text-white/80 mb-6 max-w-2xl">Understanding the Physics of Flight</p>
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
              <div className="w-full h-full bg-[url('/images/red-rv10-aircraft.jpg')] bg-contain bg-no-repeat"></div>
            </div>
          </section>

          <PremiumTabs
            tabs={tabs}
            currentValue={currentTab}
            onChange={setCurrentTab}
            defaultValue="four-forces"
            title="Aerodynamics Topics"
          />

          <div className="pt-8">
            {currentTab === 'intro' && (
              <section className="prose prose-lg dark:prose-invert max-w-none">
                <p className="lead">
                  Aerodynamics is the study of how air interacts with solid objects moving through it. For pilots,
                  understanding these principles isn't just academic—it's the foundation of flight safety and aircraft
                  control.
                </p>

                <p>
                  Whether you're executing a perfect landing, recovering from a stall, or maximizing your aircraft's
                  performance, a solid grasp of aerodynamics will make you a more confident, capable, and safe pilot.
                </p>

                <div className="bg-muted rounded-xl p-6 my-6 border-l-4 border-primary">
                  <h3 className="text-xl font-semibold mb-3">Why Aerodynamics Matters</h3>
                  <p className="mb-0">Understanding aerodynamics helps you:</p>
                  <ul className="mt-2 mb-0 list-disc pl-6">
                    <li>Predict how your aircraft will respond in different conditions</li>
                    <li>Recognize and avoid dangerous flight situations</li>
                    <li>Troubleshoot unexpected aircraft behavior</li>
                    <li>Maximize aircraft performance and efficiency</li>
                    <li>Make better decisions during critical phases of flight</li>
                  </ul>
                </div>
                 <p>Let's dive into the fundamental forces and principles that make flight possible.</p>
              </section>
            )}

            {currentTab === 'four-forces' && (
              <section>
                <h2 className="font-display text-2xl font-semibold mb-6">The Four Forces of Flight</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Every aircraft in flight is affected by four fundamental forces. Understanding how these forces
                  interact is essential for pilots.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="hover-card-effect overflow-hidden border-t-4 border-t-primary">
                    <CardHeader className="pb-3 bg-primary/5">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <ArrowUp className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">Lift</CardTitle>
                          <CardDescription>The upward force that opposes weight</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="mb-4">
                        Lift is generated primarily by the wings and is what allows an aircraft to overcome gravity and
                        fly. It's created by the difference in air pressure above and below the wing.
                      </p>
                      <div className="bg-muted/50 p-4 rounded-lg mb-4">
                        <h4 className="font-semibold mb-2">Key Factors Affecting Lift</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Airfoil shape and design</li>
                          <li>Angle of attack</li>
                          <li>Airspeed</li>
                          <li>Air density</li>
                          <li>Wing area</li>
                        </ul>
                      </div>
                      <p className="font-medium">
                        Remember: Lift increases with the square of airspeed, meaning doubling your airspeed quadruples
                        your lift (all else being equal).
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover-card-effect overflow-hidden border-t-4 border-t-primary">
                    <CardHeader className="pb-3 bg-primary/5">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <ArrowDown className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">Weight</CardTitle>
                          <CardDescription>The downward force of gravity</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="mb-4">
                        Weight is the force of gravity acting on the aircraft. It acts vertically downward through the
                        aircraft's center of gravity.
                      </p>
                      <div className="bg-muted/50 p-4 rounded-lg mb-4">
                        <h4 className="font-semibold mb-2">Important Weight Considerations</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Gross weight affects stall speed and performance</li>
                          <li>Weight distribution affects stability and control</li>
                          <li>Center of gravity location is critical for safe flight</li>
                          <li>Weight changes during flight (fuel burn)</li>
                        </ul>
                      </div>
                      <p className="font-medium">
                        For flight to occur, lift must equal or exceed weight. This balance determines whether an
                        aircraft climbs, descends, or maintains altitude.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover-card-effect overflow-hidden border-t-4 border-t-primary">
                    <CardHeader className="pb-3 bg-primary/5">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <ThrustIcon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">Thrust</CardTitle>
                          <CardDescription>The forward force that propels the aircraft</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="mb-4">
                        Thrust is the force that propels an aircraft forward through the air. It's generated by the
                        aircraft's engine and propeller or jet exhaust.
                      </p>
                      <div className="bg-muted/50 p-4 rounded-lg mb-4">
                        <h4 className="font-semibold mb-2">Thrust Characteristics</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Varies with throttle setting and engine power</li>
                          <li>Decreases with altitude (in normally aspirated engines)</li>
                          <li>Affected by propeller efficiency</li>
                          <li>Can create torque effects that affect aircraft control</li>
                        </ul>
                      </div>
                      <p className="font-medium">
                        The balance between thrust and drag determines whether an aircraft accelerates, decelerates, or
                        maintains a constant speed.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover-card-effect overflow-hidden border-t-4 border-t-primary">
                    <CardHeader className="pb-3 bg-primary/5">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Wind className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">Drag</CardTitle>
                          <CardDescription>The rearward force that opposes thrust</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="mb-4">
                        Drag is the resistance the aircraft encounters as it moves through the air. It acts parallel
                        to the relative wind and opposes thrust.
                      </p>
                      <div className="bg-muted/50 p-4 rounded-lg mb-4">
                        <h4 className="font-semibold mb-2">Types of Drag</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>
                            <strong>Parasite Drag:</strong> Increases with airspeed (form, interference, skin
                            friction)
                          </li>
                          <li>
                            <strong>Induced Drag:</strong> Decreases with airspeed (byproduct of lift)
                          </li>
                        </ul>
                      </div>
                      <p className="font-medium">
                        Total drag is lowest at a specific airspeed (L/D max), which is important for cruise
                        performance and glide range.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>
            )}

            {currentTab === 'axes-controls' && (
               <section>
                 <h2 className="font-display text-2xl font-semibold mb-6">Axes of Rotation and Control Surfaces</h2>
                 <p className="text-lg text-muted-foreground mb-6">
                   Aircraft control is achieved by manipulating flight control surfaces, which cause the aircraft to
                   rotate around its three axes.
                 </p>

                 <div className="bg-muted/30 rounded-lg p-6 flex items-center justify-center mb-8">
                   <p className="text-center text-muted-foreground italic">
                     [Diagram showing the three axes of rotation: Longitudinal (Roll), Lateral (Pitch), Vertical
                     (Yaw)]
                   </p>
                 </div>

                 <div className="grid gap-6 md:grid-cols-3">
                   <Card className="hover-card-effect">
                     <CardHeader>
                       <CardTitle>Longitudinal Axis (Roll)</CardTitle>
                     </CardHeader>
                     <CardContent>
                       <p className="mb-2">Runs from nose to tail.</p>
                       <ul className="list-disc pl-5 text-sm space-y-1">
                         <li>
                           <strong>Control Surface:</strong> Ailerons
                         </li>
                         <li>
                           <strong>Movement:</strong> Rolling (banking)
                         </li>
                         <li>
                           <strong>Pilot Input:</strong> Sideways movement of yoke/stick
                         </li>
                       </ul>
                     </CardContent>
                   </Card>

                   <Card className="hover-card-effect">
                     <CardHeader>
                       <CardTitle>Lateral Axis (Pitch)</CardTitle>
                     </CardHeader>
                     <CardContent>
                       <p className="mb-2">Runs from wingtip to wingtip.</p>
                       <ul className="list-disc pl-5 text-sm space-y-1">
                         <li>
                           <strong>Control Surface:</strong> Elevator (or Stabilator)
                         </li>
                         <li>
                           <strong>Movement:</strong> Pitching (nose up/down)
                         </li>
                         <li>
                           <strong>Pilot Input:</strong> Forward/backward movement of yoke/stick
                         </li>
                       </ul>
                     </CardContent>
                   </Card>

                   <Card className="hover-card-effect">
                     <CardHeader>
                       <CardTitle>Vertical Axis (Yaw)</CardTitle>
                     </CardHeader>
                     <CardContent>
                       <p className="mb-2">Runs vertically through the center of gravity.</p>
                       <ul className="list-disc pl-5 text-sm space-y-1">
                         <li>
                           <strong>Control Surface:</strong> Rudder
                         </li>
                         <li>
                           <strong>Movement:</strong> Yawing (nose left/right)
                         </li>
                         <li>
                           <strong>Pilot Input:</strong> Rudder pedals
                         </li>
                       </ul>
                     </CardContent>
                   </Card>
                 </div>

                 <div className="mt-8 bg-primary/5 p-6 rounded-lg">
                   <h3 className="font-semibold mb-3">Secondary and Trim Controls</h3>
                   <div className="grid gap-6 sm:grid-cols-2">
                     <div>
                       <h4 className="font-medium mb-1">Flaps</h4>
                       <p className="text-sm text-muted-foreground">
                         Increase lift and drag, allowing for steeper approaches and slower landing speeds.
                       </p>
                     </div>
                     <div>
                       <h4 className="font-medium mb-1">Trim Tabs</h4>
                       <p className="text-sm text-muted-foreground">
                         Small surfaces on control surfaces that reduce control pressures, making it easier to
                         maintain a desired attitude.
                       </p>
                     </div>
                   </div>
                 </div>
               </section>
            )}

             {currentTab === 'stability' && (
               <section>
                 <h2 className="font-display text-2xl font-semibold mb-6">Aircraft Stability</h2>
                 <p className="text-lg text-muted-foreground mb-6">
                   Stability is the inherent quality of an aircraft to correct for conditions that may disturb its
                   equilibrium and to return to or continue on the original flight path.
                 </p>
                 <div className="grid gap-6 md:grid-cols-2">
                   <div>
                     <h3 className="font-semibold mb-2">Static Stability</h3>
                     <p className="text-sm mb-3">
                       The initial tendency of the aircraft to return to its original position after being disturbed.
                     </p>
                     <ul className="list-disc pl-5 text-sm space-y-1">
                       <li>
                         <strong>Positive:</strong> Tendency to return to original position.
                       </li>
                       <li>
                         <strong>Neutral:</strong> Tendency to remain in the new position.
                       </li>
                       <li>
                         <strong>Negative:</strong> Tendency to continue moving away from the original position.
                       </li>
                     </ul>
                   </div>
                   <div>
                     <h3 className="font-semibold mb-2">Dynamic Stability</h3>
                     <p className="text-sm mb-3">
                       The overall tendency of the aircraft over time after being disturbed.
                     </p>
                     <ul className="list-disc pl-5 text-sm space-y-1">
                       <li>
                         <strong>Positive:</strong> Oscillations dampen out over time.
                       </li>
                       <li>
                         <strong>Neutral:</strong> Oscillations continue unchanged.
                       </li>
                       <li>
                         <strong>Negative:</strong> Oscillations become progressively worse.
                       </li>
                     </ul>
                   </div>
                 </div>
                 <div className="mt-6 bg-muted/30 p-6 rounded-lg">
                   <h4 className="font-semibold mb-3 text-center">Factors Affecting Stability</h4>
                   <p className="text-sm text-center text-muted-foreground">
                     Aircraft are designed with features like dihedral (upward angle of wings),
                     sweepback, and keel effect (fuselage shape) to enhance stability around different axes.
                     The location of the Center of Gravity (CG) relative to the Center of Lift/Pressure is crucial.
                   </p>
                 </div>
               </section>
             )}

             {currentTab === 'load-factor' && (
               <section>
                 <h2 className="font-display text-2xl font-semibold mb-6">Load Factor</h2>
                 <p className="text-lg text-muted-foreground mb-6">
                   Load factor is the ratio of the total load supported by the aircraft's wings to the actual weight of
                   the aircraft and its contents. It's often expressed in "G's".
                 </p>
                 <div className="grid gap-6 md:grid-cols-2">
                   <Card className="hover-card-effect">
                     <CardHeader>
                       <CardTitle>Understanding G's</CardTitle>
                     </CardHeader>
                     <CardContent>
                       <ul className="list-disc pl-5 space-y-2">
                         <li>
                           <strong>Straight-and-level flight:</strong> 1 G
                         </li>
                         <li>
                           <strong>60° bank turn:</strong> 2 Gs (You feel twice as heavy)
                         </li>
                         <li>
                           <strong>Steeper banks / abrupt maneuvers:</strong> Higher Gs
                         </li>
                       </ul>
                     </CardContent>
                   </Card>
                   <Card className="hover-card-effect">
                     <CardHeader>
                       <CardTitle>Effects of Load Factor</CardTitle>
                     </CardHeader>
                     <CardContent>
                       <ul className="list-disc pl-5 space-y-2">
                         <li>
                           <strong>Increases Stall Speed:</strong> Stall speed increases with the square root of the
                           load factor.
                         </li>
                         <li>
                           <strong>Structural Stress:</strong> Exceeding design load limits can damage the aircraft.
                         </li>
                       </ul>
                     </CardContent>
                   </Card>
                 </div>
                 <div className="mt-6 bg-red-500/10 p-6 rounded-lg border border-red-500/30">
                   <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Critical Concept: Load Factor and Stalls</h4>
                   <p className="text-sm text-red-800 dark:text-red-300">
                     An aircraft can be stalled at **any airspeed** and **any attitude** if the critical angle of attack
                     is exceeded. Increased load factor (like in a steep turn) requires more lift, achieved by
                     increasing the angle of attack. If the angle of attack becomes too great for the current conditions,
                     the aircraft will stall, even at high airspeeds.
                   </p>
                 </div>
               </section>
             )}

             {currentTab === 'stalls-spins' && (
               <section>
                 <h2 className="font-display text-2xl font-semibold mb-6">Stalls and Spins</h2>
                 <p className="text-lg text-muted-foreground mb-6">
                   A stall occurs when the wing exceeds its critical angle of attack, disrupting smooth airflow and
                   causing a rapid decrease in lift. A spin is an aggravated stall resulting in autorotation.
                 </p>
                 <div className="grid gap-6 md:grid-cols-2">
                   <Card className="hover-card-effect border-l-4 border-red-500">
                     <CardHeader>
                       <CardTitle>Stalls</CardTitle>
                     </CardHeader>
                     <CardContent>
                       <p className="mb-3 text-sm">
                         Caused by exceeding the critical angle of attack, regardless of airspeed or attitude.
                       </p>
                       <h4 className="font-medium mb-1 text-sm">Recognition:</h4>
                       <ul className="list-disc pl-5 text-sm space-y-1 mb-3">
                         <li>Mushy controls</li>
                         <li>Stall warning horn/light</li>
                         <li>Buffeting</li>
                       </ul>
                       <h4 className="font-medium mb-1 text-sm">Recovery (PARE):</h4>
                       <ul className="list-disc pl-5 text-sm space-y-1">
                         <li>
                           <strong>P</strong>ower: Full (as required)
                         </li>
                         <li>
                           <strong>A</strong>ilerons: Neutral
                         </li>
                         <li>
                           <strong>R</strong>udder: Opposite direction of yaw (if spinning)
                         </li>
                         <li>
                           <strong>E</strong>levator: Forward to break stall
                         </li>
                       </ul>
                     </CardContent>
                   </Card>
                   <Card className="hover-card-effect border-l-4 border-red-500">
                     <CardHeader>
                       <CardTitle>Spins</CardTitle>
                     </CardHeader>
                     <CardContent>
                       <p className="mb-3 text-sm">
                         An aggravated stall where one wing is stalled more deeply than the other, combined with yaw,
                         causing autorotation.
                       </p>
                       <h4 className="font-medium mb-1 text-sm">Conditions for Spin:</h4>
                       <ul className="list-disc pl-5 text-sm space-y-1 mb-3">
                         <li>Aircraft must be stalled</li>
                         <li>Yaw must be present</li>
                       </ul>
                       <h4 className="font-medium mb-1 text-sm">Recovery (PARE - Emphasis):</h4>
                       <ul className="list-disc pl-5 text-sm space-y-1">
                         <li>
                           <strong>P</strong>ower: Idle
                         </li>
                         <li>
                           <strong>A</strong>ilerons: Neutral
                         </li>
                         <li>
                           <strong>R</strong>udder: Full opposite direction of rotation
                         </li>
                         <li>
                           <strong>E</strong>levator: Briskly forward
                         </li>
                         <li>(Neutralize rudder after rotation stops, recover from dive)</li>
                       </ul>
                     </CardContent>
                   </Card>
                 </div>
                 <div className="mt-6 bg-blue-500/10 p-6 rounded-lg border border-blue-500/30">
                   <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Key Takeaway: Angle of Attack</h4>
                   <p className="text-sm text-blue-800 dark:text-blue-300">
                     Airspeed doesn't cause stalls; exceeding the critical angle of attack does. Always be aware of your
                     angle of attack, especially during slow flight, turns, and maneuvers with increased load factor.
                   </p>
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

