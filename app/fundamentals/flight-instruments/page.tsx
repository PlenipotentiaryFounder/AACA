import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { InfoIcon, AlertTriangle, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Flight Instruments | AACA Pilot Guide",
  description: "Understanding aircraft flight instruments, their functions, and proper interpretation for safe flying.",
}

export default function FlightInstrumentsPage() {
  return (
    <div className="py-6">
      <div className="space-y-8">
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-aa-navy to-aa-blue text-white">
          <div className="container mx-auto py-6 max-w-5xl">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Flight Instruments</h1>
                <p className="text-muted-foreground">Understanding the tools that help you fly safely and effectively</p>
              </div>

              <div className="grid gap-6">
                <Card className="border-l-4 border-l-blue-600 dark:border-l-blue-400">
                  <CardHeader>
                    <CardTitle>Introduction to Flight Instruments</CardTitle>
                    <CardDescription>The cockpit instruments that provide critical information during flight</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Flight instruments are the pilot's window into the aircraft's performance and position when visual
                      references are limited or unreliable. Understanding how to interpret these instruments correctly is
                      essential for safe flying, especially during instrument meteorological conditions (IMC).
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h3 className="font-semibold">Why Instruments Matter</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Provide objective flight data independent of sensory perception</li>
                          <li>Enable flight in reduced visibility conditions</li>
                          <li>Help maintain situational awareness</li>
                          <li>Allow for precise aircraft control and navigation</li>
                          <li>Provide early warning of developing problems</li>
                        </ul>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <h3 className="font-semibold mb-2">Instrument Categories</h3>
                        <div className="grid grid-cols-2 gap-2">
                          <Badge variant="outline" className="justify-center">
                            Pitot-Static
                          </Badge>
                          <Badge variant="outline" className="justify-center">
                            Gyroscopic
                          </Badge>
                          <Badge variant="outline" className="justify-center">
                            Magnetic
                          </Badge>
                          <Badge variant="outline" className="justify-center">
                            Engine
                          </Badge>
                          <Badge variant="outline" className="justify-center">
                            Navigation
                          </Badge>
                          <Badge variant="outline" className="justify-center">
                            Electronic
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Tabs defaultValue="primary" className="w-full">
                  <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="primary">Primary Instruments</TabsTrigger>
                    <TabsTrigger value="engine">Engine Instruments</TabsTrigger>
                    <TabsTrigger value="modern">Modern Systems</TabsTrigger>
                  </TabsList>

                  <TabsContent value="primary" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>The Six Pack</CardTitle>
                        <CardDescription>The six primary flight instruments found in most aircraft</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="aspect-video relative bg-muted rounded-lg overflow-hidden">
                          <div className="absolute inset-0 bg-[url('/images/analog-cockpit-instruments.jpg')] bg-cover bg-center"></div>
                        </div>

                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="asi">
                            <AccordionTrigger>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline">1</Badge>
                                <span>Airspeed Indicator (ASI)</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="space-y-2">
                              <p>
                                The airspeed indicator displays the aircraft's speed through the air in knots (KIAS) or miles
                                per hour (MPH).
                              </p>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-semibold mb-1">Key Markings</h4>
                                  <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>
                                      <span className="font-medium">White Arc:</span> Flap operating range
                                    </li>
                                    <li>
                                      <span className="font-medium">Green Arc:</span> Normal operating range
                                    </li>
                                    <li>
                                      <span className="font-medium">Yellow Arc:</span> Caution range (smooth air only)
                                    </li>
                                    <li>
                                      <span className="font-medium">Red Line:</span> Never exceed speed (VNE)
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-1">Common Errors</h4>
                                  <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Position error at high angles of attack</li>
                                    <li>Blockage of pitot tube or static port</li>
                                    <li>Altitude and temperature effects on indicated airspeed</li>
                                  </ul>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="ai">
                            <AccordionTrigger>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline">2</Badge>
                                <span>Attitude Indicator (AI)</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="space-y-2">
                              <p>
                                The attitude indicator shows the aircraft's position relative to the horizon, displaying both
                                pitch (nose up/down) and bank (roll left/right) attitudes.
                              </p>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-semibold mb-1">Key Features</h4>
                                  <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Artificial horizon line separates "sky" from "ground"</li>
                                    <li>Miniature aircraft represents your plane's position</li>
                                    <li>Bank angle indicators (10°, 20°, 30°, 60°)</li>
                                    <li>Pitch markers (typically in 5° increments)</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-1">Limitations</h4>
                                  <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Precession errors during prolonged turns</li>
                                    <li>Tumbling during extreme maneuvers</li>
                                    <li>Erroneous readings during acceleration/deceleration</li>
                                    <li>Requires 3-5 minutes for gyro to spin up</li>
                                  </ul>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="alt">
                            <AccordionTrigger>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline">3</Badge>
                                <span>Altimeter</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="space-y-2">
                              <p>
                                The altimeter displays the aircraft's altitude above mean sea level (MSL) by measuring
                                atmospheric pressure.
                              </p>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-semibold mb-1">Reading the Altimeter</h4>
                                  <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Long needle: 100s of feet</li>
                                    <li>Short needle: 1,000s of feet</li>
                                    <li>Shortest needle: 10,000s of feet</li>
                                    <li>Kollsman window: barometric setting</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-1">Altimeter Errors</h4>
                                  <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>
                                      <span className="font-medium">Scale Error:</span> Mechanical inaccuracies
                                    </li>
                                    <li>
                                      <span className="font-medium">Installation Error:</span> Static port location effects
                                    </li>
                                    <li>
                                      <span className="font-medium">Barometric Error:</span> "High to low, look out below"
                                    </li>
                                    <li>
                                      <span className="font-medium">Temperature Error:</span> "Cold weather, cold altimeter"
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="tc">
                            <AccordionTrigger>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline">4</Badge>
                                <span>Turn Coordinator</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="space-y-2">
                              <p>
                                The turn coordinator shows the rate of turn and provides an indication of coordination between
                                rudder and aileron inputs.
                              </p>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-semibold mb-1">Components</h4>
                                  <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Miniature aircraft that banks in the direction of turn</li>
                                    <li>Standard rate turn markers (2-minute turn)</li>
                                    <li>Inclinometer (slip/skid indicator or "ball")</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-1">Interpretation</h4>
                                  <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Standard rate turn: 3° per second</li>
                                    <li>"Step on the ball" to correct slip/skid</li>
                                    <li>Ball left = right rudder needed</li>
                                    <li>Ball right = left rudder needed</li>
                                  </ul>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="hi">
                            <AccordionTrigger>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline">5</Badge>
                                <span>Heading Indicator (HI)</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="space-y-2">
                              <p>
                                The heading indicator (directional gyro) shows the aircraft's magnetic heading with greater
                                stability and readability than a magnetic compass.
                              </p>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
    <div className="container mx-auto py-6 max-w-5xl">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Flight Instruments</h1>
          <p className="text-muted-foreground">Understanding the tools that help you fly safely and effectively</p>
        </div>

        <div className="grid gap-6">
          <Card className="border-l-4 border-l-blue-600 dark:border-l-blue-400">
            <CardHeader>
              <CardTitle>Introduction to Flight Instruments</CardTitle>
              <CardDescription>The cockpit instruments that provide critical information during flight</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Flight instruments are the pilot's window into the aircraft's performance and position when visual
                references are limited or unreliable. Understanding how to interpret these instruments correctly is
                essential for safe flying, especially during instrument meteorological conditions (IMC).
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Why Instruments Matter</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Provide objective flight data independent of sensory perception</li>
                    <li>Enable flight in reduced visibility conditions</li>
                    <li>Help maintain situational awareness</li>
                    <li>Allow for precise aircraft control and navigation</li>
                    <li>Provide early warning of developing problems</li>
                  </ul>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Instrument Categories</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Badge variant="outline" className="justify-center">
                      Pitot-Static
                    </Badge>
                    <Badge variant="outline" className="justify-center">
                      Gyroscopic
                    </Badge>
                    <Badge variant="outline" className="justify-center">
                      Magnetic
                    </Badge>
                    <Badge variant="outline" className="justify-center">
                      Engine
                    </Badge>
                    <Badge variant="outline" className="justify-center">
                      Navigation
                    </Badge>
                    <Badge variant="outline" className="justify-center">
                      Electronic
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="primary" className="w-full">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="primary">Primary Instruments</TabsTrigger>
              <TabsTrigger value="engine">Engine Instruments</TabsTrigger>
              <TabsTrigger value="modern">Modern Systems</TabsTrigger>
            </TabsList>

            <TabsContent value="primary" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>The Six Pack</CardTitle>
                  <CardDescription>The six primary flight instruments found in most aircraft</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="aspect-video relative bg-muted rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/analog-cockpit-instruments.jpg')] bg-cover bg-center"></div>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="asi">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">1</Badge>
                          <span>Airspeed Indicator (ASI)</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p>
                          The airspeed indicator displays the aircraft's speed through the air in knots (KIAS) or miles
                          per hour (MPH).
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-1">Key Markings</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>
                                <span className="font-medium">White Arc:</span> Flap operating range
                              </li>
                              <li>
                                <span className="font-medium">Green Arc:</span> Normal operating range
                              </li>
                              <li>
                                <span className="font-medium">Yellow Arc:</span> Caution range (smooth air only)
                              </li>
                              <li>
                                <span className="font-medium">Red Line:</span> Never exceed speed (VNE)
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Common Errors</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Position error at high angles of attack</li>
                              <li>Blockage of pitot tube or static port</li>
                              <li>Altitude and temperature effects on indicated airspeed</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="ai">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">2</Badge>
                          <span>Attitude Indicator (AI)</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p>
                          The attitude indicator shows the aircraft's position relative to the horizon, displaying both
                          pitch (nose up/down) and bank (roll left/right) attitudes.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-1">Key Features</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Artificial horizon line separates "sky" from "ground"</li>
                              <li>Miniature aircraft represents your plane's position</li>
                              <li>Bank angle indicators (10°, 20°, 30°, 60°)</li>
                              <li>Pitch markers (typically in 5° increments)</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Limitations</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Precession errors during prolonged turns</li>
                              <li>Tumbling during extreme maneuvers</li>
                              <li>Erroneous readings during acceleration/deceleration</li>
                              <li>Requires 3-5 minutes for gyro to spin up</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="alt">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">3</Badge>
                          <span>Altimeter</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p>
                          The altimeter displays the aircraft's altitude above mean sea level (MSL) by measuring
                          atmospheric pressure.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-1">Reading the Altimeter</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Long needle: 100s of feet</li>
                              <li>Short needle: 1,000s of feet</li>
                              <li>Shortest needle: 10,000s of feet</li>
                              <li>Kollsman window: barometric setting</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Altimeter Errors</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>
                                <span className="font-medium">Scale Error:</span> Mechanical inaccuracies
                              </li>
                              <li>
                                <span className="font-medium">Installation Error:</span> Static port location effects
                              </li>
                              <li>
                                <span className="font-medium">Barometric Error:</span> "High to low, look out below"
                              </li>
                              <li>
                                <span className="font-medium">Temperature Error:</span> "Cold weather, cold altimeter"
                              </li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="tc">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">4</Badge>
                          <span>Turn Coordinator</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p>
                          The turn coordinator shows the rate of turn and provides an indication of coordination between
                          rudder and aileron inputs.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-1">Components</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Miniature aircraft that banks in the direction of turn</li>
                              <li>Standard rate turn markers (2-minute turn)</li>
                              <li>Inclinometer (slip/skid indicator or "ball")</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Interpretation</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Standard rate turn: 3° per second</li>
                              <li>"Step on the ball" to correct slip/skid</li>
                              <li>Ball left = right rudder needed</li>
                              <li>Ball right = left rudder needed</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="hi">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">5</Badge>
                          <span>Heading Indicator (HI)</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p>
                          The heading indicator (directional gyro) shows the aircraft's magnetic heading with greater
                          stability and readability than a magnetic compass.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-1">Features</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>360° compass card</li>
                              <li>Lubber line indicating current heading</li>
                              <li>Adjustment knob for alignment with magnetic compass</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Limitations</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Precession error (1-3° every 15 minutes)</li>
                              <li>Must be reset periodically using magnetic compass</li>
                              <li>Reset only in straight and level, unaccelerated flight</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="vsi">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">6</Badge>
                          <span>Vertical Speed Indicator (VSI)</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p>The vertical speed indicator shows the rate of climb or descent in feet per minute (fpm).</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-1">Reading the VSI</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Positive values = climb</li>
                              <li>Negative values = descent</li>
                              <li>Zero = level flight</li>
                              <li>Typical ranges: ±2,000 fpm or ±4,000 fpm</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Characteristics</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>6-9 second lag in indication</li>
                              <li>Most accurate in stabilized climbs/descents</li>
                              <li>Sensitive to abrupt control movements</li>
                              <li>Cross-check with altimeter for accuracy</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Magnetic Compass</CardTitle>
                  <CardDescription>The oldest and most basic directional instrument</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The magnetic compass is a simple but essential backup instrument that indicates the aircraft's
                    heading relative to magnetic north. Unlike gyroscopic instruments, it requires no power source but
                    has several inherent errors and limitations.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="font-semibold">Compass Errors</h3>
                      <div className="space-y-2">
                        <div className="bg-muted p-3 rounded-lg">
                          <h4 className="font-medium">Variation</h4>
                          <p className="text-sm">
                            The difference between true north and magnetic north, varies by location and is shown on
                            sectional charts as isogonic lines.
                          </p>
                        </div>
                        <div className="bg-muted p-3 rounded-lg">
                          <h4 className="font-medium">Deviation</h4>
                          <p className="text-sm">
                            Error caused by magnetic interference from aircraft systems and components, compensated for
                            with a compass correction card.
                          </p>
                        </div>
                        <div className="bg-muted p-3 rounded-lg">
                          <h4 className="font-medium">Dip Errors</h4>
                          <p className="text-sm">
                            Errors that occur during acceleration, deceleration, and turns due to the vertical component
                            of Earth's magnetic field.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold">Compass Turning Errors</h3>
                      <Alert>
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle>Remember These Mnemonics</AlertTitle>
                        <AlertDescription>
                          <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li>
                              <span className="font-medium">ANDS</span> - Accelerate North, Decelerate South
                            </li>
                            <li>
                              <span className="font-medium">UNOS</span> - Undershoot North, Overshoot South
                            </li>
                          </ul>
                        </AlertDescription>
                      </Alert>
                      <div className="bg-muted p-3 rounded-lg">
                        <h4 className="font-medium">Northerly Turning Error</h4>
                        <p className="text-sm">
                          When turning from a northerly heading, the compass initially indicates a turn in the opposite
                          direction, then leads the actual turn.
                        </p>
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <h4 className="font-medium">Southerly Turning Error</h4>
                        <p className="text-sm">
                          When turning from a southerly heading, the compass lags behind the actual turn.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="engine" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Engine Instruments</CardTitle>
                  <CardDescription>Monitoring the health and performance of your aircraft's powerplant</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Primary Engine Gauges</h3>
                      <div className="space-y-3">
                        <div className="bg-muted p-3 rounded-lg">
                          <h4 className="font-medium">Tachometer</h4>
                          <p className="text-sm">
                            Displays engine RPM (revolutions per minute), indicating power output and ensuring operation
                            within limits.
                          </p>
                        </div>
                        <div className="bg-muted p-3 rounded-lg">
                          <h4 className="font-medium">Oil Pressure Gauge</h4>
                          <p className="text-sm">
                            Monitors oil pressure in the engine lubrication system. Low pressure may indicate oil
                            leakage or pump failure.
                          </p>
                        </div>
                        <div className="bg-muted p-3 rounded-lg">
                          <h4 className="font-medium">Oil Temperature Gauge</h4>
                          <p className="text-sm">
                            Displays oil temperature. High readings may indicate insufficient cooling or low oil
                            quantity.
                          </p>
                        </div>
                        <div className="bg-muted p-3 rounded-lg">
                          <h4 className="font-medium">Cylinder Head Temperature (CHT)</h4>
                          <p className="text-sm">
                            Measures temperature at the cylinder head to prevent overheating and ensure proper cooling.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold">Additional Engine Instruments</h3>
                      <div className="space-y-3">
                        <div className="bg-muted p-3 rounded-lg">
                          <h4 className="font-medium">Exhaust Gas Temperature (EGT)</h4>
                          <p className="text-sm">
                            Measures temperature of exhaust gases, used for mixture leaning and detecting combustion
                            issues.
                          </p>
                        </div>
                        <div className="bg-muted p-3 rounded-lg">
                          <h4 className="font-medium">Fuel Pressure Gauge</h4>
                          <p className="text-sm">
                            Monitors pressure in the fuel system to ensure adequate fuel flow to the engine.
                          </p>
                        </div>
                        <div className="bg-muted p-3 rounded-lg">
                          <h4 className="font-medium">Fuel Quantity Indicators</h4>
                          <p className="text-sm">
                            Display remaining fuel in each tank, though visual inspection is still recommended for
                            verification.
                          </p>
                        </div>
                        <div className="bg-muted p-3 rounded-lg">
                          <h4 className="font-medium">Manifold Pressure Gauge</h4>
                          <p className="text-sm">
                            In constant-speed propeller aircraft, shows the pressure in the intake manifold, indicating
                            engine power.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Critical Warning Signs</AlertTitle>
                    <AlertDescription>
                      <p className="mt-2">Always take immediate action if you observe:</p>
                      <ul className="list-disc pl-5 space-y-1 mt-1">
                        <li>Sudden drop in oil pressure</li>
                        <li>Rapid rise in oil temperature</li>
                        <li>Abnormal engine vibration or roughness</li>
                        <li>Unexpected decrease in fuel pressure</li>
                        <li>CHT or EGT readings outside normal operating range</li>
                      </ul>
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Engine Management Best Practices</CardTitle>
                  <CardDescription>Techniques for monitoring and operating your engine efficiently</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="font-semibold">Instrument Scan</h3>
                      <p>
                        Develop a regular scan pattern that includes engine instruments, especially during critical
                        phases of flight:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>After engine start</li>
                        <li>During run-up</li>
                        <li>Before takeoff</li>
                        <li>During climb</li>
                        <li>Every 15 minutes in cruise</li>
                        <li>Before and during descent</li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold">Leaning Procedures</h3>
                      <p>Proper mixture control improves engine efficiency and longevity:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Lean according to POH recommendations</li>
                        <li>Use EGT gauge when available</li>
                        <li>Typically lean to peak EGT, then enrich slightly</li>
                        <li>Always use full rich for takeoff and landing</li>
                        <li>Consider density altitude when leaning</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Power Settings Reference</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-muted-foreground/20">
                        <thead>
                          <tr>
                            <th className="px-3 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                              Phase
                            </th>
                            <th className="px-3 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                              Power Setting
                            </th>
                            <th className="px-3 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                              Mixture
                            </th>
                            <th className="px-3 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                              Notes
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-muted-foreground/20">
                          <tr>
                            <td className="px-3 py-2 text-sm">Takeoff</td>
                            <td className="px-3 py-2 text-sm">Full (100%)</td>
                            <td className="px-3 py-2 text-sm">Full Rich</td>
                            <td className="px-3 py-2 text-sm">Maximum performance</td>
                          </tr>
                          <tr>
                            <td className="px-3 py-2 text-sm">Climb</td>
                            <td className="px-3 py-2 text-sm">75-85%</td>
                            <td className="px-3 py-2 text-sm">Rich (lean at altitude)</td>
                            <td className="px-3 py-2 text-sm">Better cooling with higher airspeed</td>
                          </tr>
                          <tr>
                            <td className="px-3 py-2 text-sm">Cruise</td>
                            <td className="px-3 py-2 text-sm">65-75%</td>
                            <td className="px-3 py-2 text-sm">Leaned per POH</td>
                            <td className="px-3 py-2 text-sm">Best efficiency</td>
                          </tr>
                          <tr>
                            <td className="px-3 py-2 text-sm">Descent</td>
                            <td className="px-3 py-2 text-sm">Reduced</td>
                            <td className="px-3 py-2 text-sm">Enriched</td>
                            <td className="px-3 py-2 text-sm">Prevent shock cooling</td>
                          </tr>
                          <tr>
                            <td className="px-3 py-2 text-sm">Landing</td>
                            <td className="px-3 py-2 text-sm">As required</td>
                            <td className="px-3 py-2 text-sm">Full Rich</td>
                            <td className="px-3 py-2 text-sm">Ready for go-around</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="modern" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Glass Cockpit Systems</CardTitle>
                  <CardDescription>
                    Modern electronic flight instrument systems that replace traditional analog gauges
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="aspect-video relative bg-muted rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-muted-foreground">Glass Cockpit Display Image</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="font-semibold">Primary Flight Display (PFD)</h3>
                      <p>The PFD replaces the traditional six-pack with an integrated digital display showing:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Attitude indicator (AI)</li>
                        <li>Airspeed tape (with colored bands)</li>
                        <li>Altitude tape</li>
                        <li>Vertical speed indicator</li>
                        <li>Heading indicator</li>
                        <li>Turn coordinator information</li>
                        <li>Navigation information</li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold">Multi-Function Display (MFD)</h3>
                      <p>The MFD provides additional information and functionality:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Moving map navigation</li>
                        <li>Engine monitoring systems</li>
                        <li>Aircraft systems status</li>
                        <li>Traffic information</li>
                        <li>Weather data</li>
                        <li>Terrain awareness</li>
                        <li>Flight planning tools</li>
                      </ul>
                    </div>
                  </div>

                  <Alert>
                    <InfoIcon className="h-4 w-4" />
                    <AlertTitle>Common Glass Cockpit Systems</AlertTitle>
                    <AlertDescription>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="bg-muted p-2 rounded">
                          <h4 className="font-medium text-sm">Garmin G1000</h4>
                          <p className="text-xs">Popular integrated flight deck found in many GA aircraft</p>
                        </div>
                        <div className="bg-muted p-2 rounded">
                          <h4 className="font-medium text-sm">Avidyne Entegra</h4>
                          <p className="text-xs">Comprehensive glass cockpit system with intuitive interface</p>
                        </div>
                        <div className="bg-muted p-2 rounded">
                          <h4 className="font-medium text-sm">Dynon Skyview</h4>
                          <p className="text-xs">Common in experimental and light sport aircraft</p>
                        </div>
                        <div className="bg-muted p-2 rounded">
                          <h4 className="font-medium text-sm">Aspen Evolution</h4>
                          <p className="text-xs">Modular system that can replace individual instruments</p>
                        </div>
                      </div>
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-3">
                    <h3 className="font-semibold">Advantages and Challenges</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-muted p-3 rounded-lg">
                        <h4 className="font-medium">Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 mt-1 text-sm">
                          <li>Enhanced situational awareness</li>
                          <li>Integrated information display</li>
                          <li>Reduced pilot workload</li>
                          <li>Better reliability than mechanical instruments</li>
                          <li>Advanced warning systems</li>
                          <li>Automatic system monitoring</li>
                        </ul>
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <h4 className="font-medium">Challenges</h4>
                        <ul className="list-disc pl-5 space-y-1 mt-1 text-sm">
                          <li>Steeper learning curve</li>
                          <li>Mode awareness issues</li>
                          <li>Over-reliance on automation</li>
                          <li>Information overload</li>
                          <li>Power dependency</li>
                          <li>Higher maintenance costs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Transitioning to Glass Cockpits</CardTitle>
                  <CardDescription>Tips for pilots moving from analog to digital flight instruments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="font-semibold">Training Approach</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Start with system-specific training</li>
                        <li>Use computer-based training programs</li>
                        <li>Practice with simulators before actual flight</li>
                        <li>Focus on normal operations first, then abnormal</li>
                        <li>Learn how to access essential information quickly</li>
                        <li>Understand system limitations and failure modes</li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold">Scan Patterns</h3>
                      <p>Develop an efficient scan pattern for glass cockpits:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Focus on the attitude indicator as the primary reference</li>
                        <li>Scan airspeed and altitude tapes frequently</li>
                        <li>Cross-check heading and navigation information</li>
                        <li>Monitor engine parameters periodically</li>
                        <li>Avoid fixation on any single display element</li>
                        <li>Maintain awareness of mode changes and alerts</li>
                      </ul>
                    </div>
                  </div>

                  <Alert className="bg-green-50 dark:bg-green-950">
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <AlertTitle className="text-green-600 dark:text-green-400">Best Practices</AlertTitle>
                    <AlertDescription className="text-green-700 dark:text-green-300">
                      <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li>Always maintain basic flying skills with traditional instruments</li>
                        <li>Know how to access critical information with minimal button presses</li>
                        <li>Practice partial panel operations in case of display failures</li>
                        <li>Understand the backup systems and how to activate them</li>
                        <li>Keep software and databases updated</li>
                        <li>Use checklists specifically designed for glass cockpit operations</li>
                      </ul>
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>Instrument Scan Techniques</CardTitle>
              <CardDescription>
                Developing an effective instrument scan pattern for accurate flight information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                A proper instrument scan is essential for gathering accurate information about the aircraft's attitude
                and performance. Different scan patterns are appropriate for different phases of flight and levels of
                experience.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold">Basic Scan Patterns</h3>
                  <div className="space-y-2">
                    <div className="bg-muted p-3 rounded-lg">
                      <h4 className="font-medium">Primary-Radial Scan</h4>
                      <p className="text-sm">
                        Focus on the attitude indicator as the primary reference, then scan outward to other instruments
                        in a radial pattern.
                      </p>
                    </div>
                    <div className="bg-muted p-3 rounded-lg">
                      <h4 className="font-medium">Selected Radial Scan</h4>
                      <p className="text-sm">
                        Similar to primary-radial, but emphasizes specific instruments based on the current phase of
                        flight or maneuver.
                      </p>
                    </div>
                    <div className="bg-muted p-3 rounded-lg">
                      <h4 className="font-medium">Control and Performance Method</h4>
                      <p className="text-sm">
                        Divide instruments into control instruments (AI, TC, HI) and performance instruments (ASI, ALT,
                        VSI) and scan accordingly.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Scan Tips</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Spend 80-90% of scan time on primary instruments</li>
                    <li>Avoid fixating on any single instrument</li>
                    <li>Scan quickly but thoroughly</li>
                    <li>Cross-check information between instruments</li>
                    <li>Adapt scan pattern to flight conditions</li>
                    <li>Practice scan patterns on the ground</li>
                    <li>Verbalize instrument readings during practice</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Instrument Cross-Check Examples</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-sm mb-1">Straight and Level Flight</h4>
                    <ol className="list-decimal pl-5 space-y-1 text-sm">
                      <li>Attitude Indicator: Wings level, proper pitch</li>
                      <li>Heading Indicator: Maintaining desired heading</li>
                      <li>Altimeter: Maintaining desired altitude</li>
                      <li>Airspeed Indicator: Maintaining desired airspeed</li>
                      <li>Vertical Speed Indicator: Should read near zero</li>
                      <li>Turn Coordinator: Wings level, ball centered</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Standard Rate Turn</h4>
                    <ol className="list-decimal pl-5 space-y-1 text-sm">
                      <li>Turn Coordinator: Standard rate indication</li>
                      <li>Attitude Indicator: Proper bank angle (typically 15-20°)</li>
                      <li>Heading Indicator: Changing at 3° per second</li>
                      <li>Altimeter: Maintaining desired altitude</li>
                      <li>Airspeed Indicator: Maintaining desired airspeed</li>
                      <li>Turn Coordinator: Ball centered (coordinated turn)</li>
                    </ol>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Instrument Failures and Unusual Attitudes</CardTitle>
              <CardDescription>
                Recognizing and responding to instrument malfunctions and unusual aircraft attitudes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold">Recognizing Instrument Failures</h3>
                  <p>Instrument failures can be subtle. Look for these signs:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Contradictory information between instruments</li>
                    <li>Unusual or impossible readings</li>
                    <li>Sluggish or erratic instrument movement</li>
                    <li>Instruments "pegged" at their limits</li>
                    <li>Unusual aircraft behavior despite normal control inputs</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Common Instrument Failures</h3>
                  <div className="space-y-2">
                    <div className="bg-muted p-3 rounded-lg">
                      <h4 className="font-medium">Pitot-Static System Failures</h4>
                      <p className="text-sm">
                        Affects airspeed indicator, altimeter, and vertical speed indicator. Often caused by blockage of
                        pitot tube or static ports.
                      </p>
                    </div>
                    <div className="bg-muted p-3 rounded-lg">
                      <h4 className="font-medium">Gyroscopic Instrument Failures</h4>
                      <p className="text-sm">
                        Affects attitude indicator, heading indicator, and turn coordinator. May be caused by vacuum
                        pump failure or electrical issues.
                      </p>
                    </div>
                    <div className="bg-muted p-3 rounded-lg">
                      <h4 className="font-medium">Electrical System Failures</h4>
                      <p className="text-sm">
                        Can affect multiple instruments and avionics. Watch for dimming lights or fluctuating instrument
                        readings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Unusual Attitude Recovery</AlertTitle>
                <AlertDescription>
                  <div className="grid md:grid-cols-2 gap-4 mt-2">
                    <div>
                      <h4 className="font-medium">Nose High, Airspeed Decreasing</h4>
                      <ol className="list-decimal pl-5 space-y-1 text-sm mt-1">
                        <li>Apply forward pressure to lower the nose</li>
                        <li>Apply maximum power</li>
                        <li>Level the wings using coordinated aileron and rudder</li>
                        <li>Return to straight and level flight</li>
                        <li>Adjust power as needed</li>
                      </ol>
                    </div>
                    <div>
                      <h4 className="font-medium">Nose Low, Airspeed Increasing</h4>
                      <ol className="list-decimal pl-5 space-y-1 text-sm mt-1">
                        <li>Reduce power to idle</li>
                        <li>Level the wings using coordinated aileron and rudder</li>
                        <li>Gently raise the nose to level flight</li>
                        <li>Return to straight and level flight</li>
                        <li>Apply power as needed</li>
                      </ol>
                    </div>
                  </div>
                </AlertDescription>
              </Alert>

              <div className="space-y-3">
                <h3 className="font-semibold">Partial Panel Flying</h3>
                <p>
                  Partial panel flying refers to operating the aircraft with one or more instruments inoperative. This
                  skill is essential for handling instrument failures safely.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted p-3 rounded-lg">
                    <h4 className="font-medium">Without Attitude Indicator</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm mt-1">
                      <li>Use turn coordinator for bank information</li>
                      <li>Use altimeter and VSI for pitch information</li>
                      <li>Make small, controlled inputs</li>
                      <li>Maintain coordinated flight (centered ball)</li>
                      <li>Cross-check heading indicator for turns</li>
                    </ul>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <h4 className="font-medium">Without Airspeed Indicator</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm mt-1">
                      <li>Use known power settings and pitch attitudes</li>
                      <li>Listen to sound of airflow around aircraft</li>
                      <li>Monitor control responsiveness</li>
                      <li>Use GPS ground speed as rough reference</li>
                      <li>Maintain slightly higher than normal power</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600 dark:border-l-green-400">
            <CardHeader>
              <CardTitle>Practical Application</CardTitle>
              <CardDescription>Applying instrument knowledge to real-world flying scenarios</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold">Pre-Flight Instrument Checks</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Check pitot heat operation (if equipped)</li>
                    <li>Verify vacuum gauge readings within limits</li>
                    <li>Observe gyro instruments during engine start</li>
                    <li>Check for proper instrument movement during taxi</li>
                    <li>Verify altimeter setting and field elevation</li>
                    <li>Confirm heading indicator aligned with magnetic compass</li>
                    <li>Check all warning lights and annunciators</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">In-Flight Instrument Management</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Reset heading indicator every 15 minutes</li>
                    <li>Update altimeter setting when crossing reporting points</li>
                    <li>Monitor engine instruments regularly</li>
                    <li>Cross-check instruments for consistency</li>
                    <li>Be alert for unusual instrument indications</li>
                    <li>Practice partial panel skills periodically</li>
                    <li>Use appropriate scan technique for phase of flight</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Scenario-Based Training Exercise</h3>
                <p className="mb-3">
                  Practice these scenarios with an instructor to build proficiency in instrument interpretation and
                  response:
                </p>
                <div className="space-y-3">
                  <div className="bg-background p-3 rounded border">
                    <h4 className="font-medium">Scenario 1: Vacuum System Failure</h4>
                    <p className="text-sm mt-1">
                      While in cruise flight, your vacuum pump fails, affecting the attitude and heading indicators.
                      Practice maintaining control using the remaining instruments and navigating to the nearest
                      suitable airport.
                    </p>
                  </div>
                  <div className="bg-background p-3 rounded border">
                    <h4 className="font-medium">Scenario 2: Pitot-Static System Blockage</h4>
                    <p className="text-sm mt-1">
                      During climb, you encounter icing conditions that block the pitot tube. Practice recognizing the
                      failure through instrument cross-check and maintaining safe flight using power settings and
                      attitude references.
                    </p>
                  </div>
                  <div className="bg-background p-3 rounded border">
                    <h4 className="font-medium">Scenario 3: Electrical System Failure</h4>
                    <p className="text-sm mt-1">
                      At night, your electrical system begins to fail. Practice prioritizing remaining battery power,
                      using backup instruments, and planning a safe landing with minimal electrical equipment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <Link href="/fundamentals">
                  <Button variant="outline" className="mr-2">
                    Back to Fundamentals
                  </Button>
                </Link>
                <Link href="/quiz/flight-instruments">
                  <Button>Take Flight Instruments Quiz</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

