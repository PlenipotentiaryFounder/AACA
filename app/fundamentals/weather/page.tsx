"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset } from "@/components/ui/sidebar"
import { MainHeader } from "@/components/main-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  CloudSun,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Droplets,
  Wind,
  Thermometer,
  Eye,
  AlertTriangle,
  BookOpen,
  ExternalLink,
  Download,
  Share2,
  Bookmark,
  Printer,
  CloudRain,
  CloudFog,
  CloudLightning,
  Gauge,
  Globe,
  Smartphone,
  Info,
  FileText,
  Brain,
  CheckCircle2,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs as ReportTabs, TabsContent as ReportTabsContent, TabsList as ReportTabsList, TabsTrigger as ReportTabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Map, Plane } from "lucide-react"
import { PremiumTabs } from "@/components/premium-tabs"
import { FundamentalsNavigation } from "@/components/fundamentals-navigation"
import { usePathname } from 'next/navigation'

export default function WeatherBasicsPage() {
  const pathname = usePathname()
  const [currentTab, setCurrentTab] = useState("basics")

  const tabs = [
    { value: 'intro', label: 'Introduction', icon: <Info className="h-4 w-4" /> },
    { value: 'basics', label: 'Atmosphere Basics', icon: <CloudSun className="h-4 w-4" /> },
    { value: 'clouds-fog', label: 'Clouds & Fog', icon: <Cloud className="h-4 w-4" /> },
    { value: 'reports-forecasts', label: 'Reports & Forecasts', icon: <FileText className="h-4 w-4" /> },
    { value: 'hazards', label: 'Weather Hazards', icon: <AlertTriangle className="h-4 w-4" /> },
    { value: 'decision-making', label: 'Decision Making', icon: <Brain className="h-4 w-4" /> }
  ]

  const prevPage = { name: "Airspace Navigation", url: "/fundamentals/airspace" };
  const nextPage = { name: "Traffic Patterns", url: "/fundamentals/traffic-patterns" };

  return (
    <main className="min-h-screen">
      <AppSidebar />
      <SidebarInset>
        <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="space-y-8">
            <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-aa-navy to-aa-blue text-white">
              <div className="absolute inset-0 bg-[url('/images/dramatic-clouds-aerial.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
              <div className="relative z-10 px-6 py-12 md:py-16 md:px-10">
                <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">
                  Training Fundamentals
                </Badge>
                <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">Weather Basics</h1>
                <p className="text-xl text-white/80 mb-6 max-w-2xl">Understanding Aviation Weather for Safe Flight</p>
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
                <div className="w-full h-full bg-[url('/images/cumulus-clouds-blue-sky.jpg')] bg-contain bg-no-repeat"></div>
              </div>
            </section>

            <PremiumTabs
              tabs={tabs}
              currentValue={currentTab}
              onChange={setCurrentTab}
              defaultValue="basics"
              title="Weather Topics"
            />

            <div className="pt-8">
              {currentTab === 'intro' && (
                <section className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="lead">
                    Weather is one of the most critical factors affecting flight safety. As a pilot, your ability to
                    understand, interpret, and make decisions based on weather information can mean the difference between
                    a routine flight and a dangerous situation.
                  </p>

                  <p>
                    The atmosphere is dynamic and constantly changing. Learning to read these changes—both through formal
                    weather products and your own observations—is a fundamental skill that you'll use throughout your
                    flying career.
                  </p>

                  <div className="bg-muted rounded-xl p-6 my-6 border-l-4 border-primary">
                    <h3 className="text-xl font-semibold mb-3">Why Weather Knowledge Matters</h3>
                    <p className="mb-0">Understanding aviation weather helps you:</p>
                    <ul className="mt-2 mb-0 list-disc pl-6">
                      <li>Make informed go/no-go decisions</li>
                      <li>Plan safe and efficient routes</li>
                      <li>Avoid hazardous conditions</li>
                      <li>Recognize developing weather threats in flight</li>
                      <li>Understand the limitations of weather forecasts</li>
                    </ul>
                  </div>
                  <p>Let's explore the essential elements and phenomena.</p>
                </section>
              )}

              {currentTab === 'basics' && (
                <section>
                  <h2 className="font-display text-2xl font-semibold mb-6">The Atmosphere and Weather</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Weather is the state of the atmosphere at a given time and place. Understanding the basic elements of
                    weather is essential for interpreting aviation weather reports and forecasts.
                  </p>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="hover-card-effect">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Thermometer className="h-4 w-4 text-primary" />
                          </div>
                          <CardTitle>Temperature</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-sm">
                          The degree of heat in the air, measured in degrees Celsius for aviation.
                        </p>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          <li>Affects air density and aircraft performance</li>
                          <li>Creates pressure differences that drive wind</li>
                          <li>Influences cloud formation and precipitation</li>
                          <li>Can lead to carburetor icing in certain conditions</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="hover-card-effect">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Gauge className="h-4 w-4 text-primary" />
                          </div>
                          <CardTitle>Pressure</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-sm">
                          The force exerted by the weight of air, measured in inches of mercury (inHg) or hectopascals
                          (hPa).
                        </p>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          <li>Decreases with altitude</li>
                          <li>Affects altimeter readings</li>
                          <li>Creates pressure systems (highs and lows)</li>
                          <li>Pressure gradients drive wind patterns</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="hover-card-effect">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Wind className="h-4 w-4 text-primary" />
                          </div>
                          <CardTitle>Wind</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-sm">The horizontal movement of air, described by direction and speed.</p>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          <li>Affects takeoff, landing, and cruise performance</li>
                          <li>Can create turbulence and wind shear</li>
                          <li>Reported in degrees true (forecasts) or magnetic (ATIS/AWOS)</li>
                          <li>Speed typically reported in knots</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="hover-card-effect">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Droplets className="h-4 w-4 text-primary" />
                          </div>
                          <CardTitle>Humidity</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-sm">The amount of water vapor in the air.</p>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          <li>Affects air density and aircraft performance</li>
                          <li>Influences cloud formation and precipitation</li>
                          <li>Can lead to carburetor icing and reduced visibility</li>
                          <li>Measured as relative humidity or dew point</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="hover-card-effect">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <AlertTriangle className="h-4 w-4 text-primary" />
                          </div>
                          <CardTitle>Atmospheric Stability</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-sm">The atmosphere's tendency to resist or enhance vertical motion.</p>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          <li>
                            <strong>Stable air:</strong> Smooth conditions, poor visibility, stratus clouds
                          </li>
                          <li>
                            <strong>Unstable air:</strong> Turbulence, good visibility, cumulus clouds, storms
                          </li>
                          <li>Determined by temperature lapse rate</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="hover-card-effect">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Plane className="h-4 w-4 text-primary" />
                          </div>
                          <CardTitle>Density Altitude</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-sm">Pressure altitude corrected for non-standard temperature.</p>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          <li>High density altitude = Reduced aircraft performance</li>
                          <li>Increases with high temperature, high humidity, high altitude</li>
                          <li>Critical for takeoff/landing calculations</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>
              )}

              {currentTab === 'clouds-fog' && (
                <section>
                  <h2 className="font-display text-2xl font-semibold mb-6">Clouds and Fog</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Clouds are visible indicators of atmospheric conditions. Fog is essentially a cloud at ground level,
                    significantly impacting visibility.
                  </p>
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="hover-card-effect">
                      <CardHeader>
                        <CardTitle>Cloud Classification</CardTitle>
                        <CardDescription>Based on height and appearance</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                          <li>
                            <strong>High Clouds (Cirro-):</strong> Cirrus, Cirrostratus, Cirrocumulus (ice crystals)
                          </li>
                          <li>
                            <strong>Middle Clouds (Alto-):</strong> Altostratus, Altocumulus (water/ice)
                          </li>
                          <li>
                            <strong>Low Clouds (Strato-):</strong> Stratus, Stratocumulus, Nimbostratus (water)
                          </li>
                          <li>
                            <strong>Clouds with Vertical Development:</strong> Cumulus, Cumulonimbus (associated with
                            instability)
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="hover-card-effect">
                      <CardHeader>
                        <CardTitle>Types of Fog</CardTitle>
                        <CardDescription>Formation processes differ</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                          <li>
                            <strong>Radiation Fog:</strong> Forms on clear nights as ground cools.
                          </li>
                          <li>
                            <strong>Advection Fog:</strong> Warm, moist air moves over cool surface.
                          </li>
                          <li>
                            <strong>Upslope Fog:</strong> Moist air forced up cooling terrain.
                          </li>
                          <li>
                            <strong>Steam Fog:</strong> Cold air moves over warm water.
                          </li>
                          <li>
                            <strong>Precipitation Fog:</strong> Rain evaporates as it falls through cooler air.
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="mt-6 bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3 text-center">Impact on Flight</h4>
                    <p className="text-sm text-center text-muted-foreground">
                      Clouds and fog restrict visibility, potentially requiring instrument flight rules (IFR).
                      Certain cloud types indicate turbulence, icing, or precipitation. Fog can prevent takeoffs and
                      landings.
                    </p>
                  </div>
                </section>
              )}

              {currentTab === 'reports-forecasts' && (
                <section>
                  <h2 className="font-display text-2xl font-semibold mb-6">Weather Reports and Forecasts</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Pilots rely on various standardized weather products to assess current and future conditions.
                  </p>

                  <ReportTabs defaultValue="metar" className="w-full">
                    <ReportTabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mb-6">
                      <ReportTabsTrigger value="metar">METAR</ReportTabsTrigger>
                      <ReportTabsTrigger value="taf">TAF</ReportTabsTrigger>
                      <ReportTabsTrigger value="pirep">PIREP</ReportTabsTrigger>
                      <ReportTabsTrigger value="area">Area Forecast</ReportTabsTrigger>
                      <ReportTabsTrigger value="charts">Weather Charts</ReportTabsTrigger>
                    </ReportTabsList>

                    <ReportTabsContent value="metar" className="border rounded-xl p-6 bg-card">
                      <h3 className="font-display text-xl font-semibold mb-4">METAR (Aviation Routine Weather Report)</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="mb-4">
                            An observation of current surface weather reported in a standard international format.
                          </p>
                          <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Issued hourly (typically)</li>
                            <li>Includes wind, visibility, weather phenomena, sky condition, temperature/dew point, altimeter</li>
                            <li>May include remarks</li>
                            <li>Example: KDFW 011753Z 18010KT 10SM CLR 25/10 A3012 RMK AO2 SLP198</li>
                          </ul>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-4 flex items-center justify-center">
                          <pre className="text-xs overflow-x-auto bg-background p-3 rounded"><code>KDFW 011753Z 18010KT 10SM CLR 25/10 A3012 RMK AO2 SLP198</code></pre>
                        </div>
                      </div>
                    </ReportTabsContent>

                    <ReportTabsContent value="taf" className="border rounded-xl p-6 bg-card">
                      <h3 className="font-display text-xl font-semibold mb-4">TAF (Terminal Aerodrome Forecast)</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="mb-4">
                            Forecast of weather conditions expected within a 5 statute mile radius of an airport.
                          </p>
                          <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Valid for 24 or 30 hours</li>
                            <li>Issued 4 times daily</li>
                            <li>Includes expected wind, visibility, weather, sky condition</li>
                            <li>Uses specific codes for changes (FM, BECMG, TEMPO, PROB)</li>
                          </ul>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-4 flex items-center justify-center">
                          <pre className="text-xs overflow-x-auto bg-background p-3 rounded"><code>KDFW 011730Z 0118/0224 18012G18KT P6SM SCT040 BKN250 FM012300 19010KT P6SM SCT050...</code></pre>
                        </div>
                      </div>
                    </ReportTabsContent>

                    <ReportTabsContent value="pirep" className="border rounded-xl p-6 bg-card">
                      <h3 className="font-display text-xl font-semibold mb-4">PIREP (Pilot Weather Report)</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="mb-4">
                            Reports of actual weather conditions encountered by aircraft in flight.
                          </p>
                          <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Crucial for reporting unexpected or hazardous conditions</li>
                            <li>Includes location, time, altitude, aircraft type, weather phenomena (turbulence, icing, clouds)</li>
                            <li>Can be routine (UA) or urgent (UUA)</li>
                            <li>Valuable real-time information</li>
                          </ul>
                          <Button size="sm">Submit a PIREP</Button>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-4 flex items-center justify-center">
                          <p className="text-center italic text-muted-foreground">[Example PIREP Structure]</p>
                        </div>
                      </div>
                    </ReportTabsContent>

                    <ReportTabsContent value="area" className="border rounded-xl p-6 bg-card">
                      <h3 className="font-display text-xl font-semibold mb-4">Area Forecast (FA) - Now GFA</h3>
                      <p className="mb-4">
                         The traditional text-based Area Forecast (FA) has been replaced by the Graphical Forecasts for
                         Aviation (GFA). The GFA provides a more visual forecast of weather over a large area.
                      </p>
                      <div className="bg-muted/30 rounded-lg p-4 flex items-center justify-center">
                           <p className="text-center italic text-muted-foreground">[GFA Example Graphic]</p>
                      </div>
                    </ReportTabsContent>

                    <ReportTabsContent value="charts" className="border rounded-xl p-6 bg-card">
                      <h3 className="font-display text-xl font-semibold mb-4">Weather Charts</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="mb-4">
                            Various charts depict current and forecast weather graphically.
                          </p>
                          <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>
                              <strong>Surface Analysis Chart:</strong> Shows pressure systems, fronts, observations.
                            </li>
                            <li>
                              <strong>Radar Summary Chart:</strong> Displays precipitation areas and intensity.
                            </li>
                            <li>
                              <strong>Significant Weather Prog Charts:</strong> Forecasts significant weather (low/high
                              altitudes).
                            </li>
                            <li>
                              <strong>Winds/Temps Aloft Charts:</strong> Shows forecast winds/temps at various altitudes.
                            </li>
                          </ul>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-4 flex items-center justify-center">
                          <div className="w-full h-64 bg-[url('/images/aviation-weather-charts-collage.jpg')] bg-contain bg-center bg-no-repeat"></div>
                        </div>
                      </div>
                    </ReportTabsContent>
                  </ReportTabs>
                </section>
              )}

              {currentTab === 'hazards' && (
                <section>
                  <h2 className="font-display text-2xl font-semibold mb-6">Weather Hazards</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Certain weather phenomena pose significant hazards to flight operations. Understanding these hazards
                    and how to avoid them is critical for flight safety.
                  </p>
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="hover-card-effect overflow-hidden border-t-4 border-t-red-500">
                      <CardHeader className="pb-3 bg-red-500/5">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                            <CloudLightning className="h-5 w-5 text-red-500" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">Thunderstorms</CardTitle>
                            <CardDescription>Severe convective activity</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="mb-4 text-sm">
                          Thunderstorms combine multiple hazards: turbulence, lightning, hail, heavy precipitation, and
                          potential microbursts.
                        </p>
                        <div className="bg-muted/50 p-3 rounded-lg mb-4">
                          <h4 className="font-semibold text-sm mb-1">Avoidance Guidelines:</h4>
                          <ul className="list-disc pl-5 text-sm space-y-1">
                            <li>Avoid by at least 20 nautical miles</li>
                            <li>Never fly under or through a thunderstorm</li>
                            <li>Be cautious of embedded thunderstorms in cloud layers</li>
                            <li>Use onboard weather radar or ATC assistance</li>
                          </ul>
                        </div>
                        <p className="text-sm font-medium">
                          Remember: "The first rule of thunderstorms: Don't fly in or near them."
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="hover-card-effect overflow-hidden border-t-4 border-t-blue-500">
                      <CardHeader className="pb-3 bg-blue-500/5">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            <CloudRain className="h-5 w-5 text-blue-500" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">Icing</CardTitle>
                            <CardDescription>Accumulation of ice on aircraft surfaces</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="mb-4 text-sm">
                          Ice accumulation disrupts airflow, adds weight, and can affect control surfaces and engine
                          performance.
                        </p>
                        <div className="bg-muted/50 p-3 rounded-lg mb-4">
                          <h4 className="font-semibold text-sm mb-1">Types of Icing:</h4>
                          <ul className="list-disc pl-5 text-sm space-y-1">
                            <li>
                              <strong>Clear ice</strong> - Hard, heavy, transparent ice
                            </li>
                            <li>
                              <strong>Rime ice</strong> - Rough, milky, opaque ice
                            </li>
                            <li>
                              <strong>Mixed ice</strong> - Combination of clear and rime
                            </li>
                            <li>
                              <strong>Frost</strong> - Crystalline deposit formed on cold surfaces
                            </li>
                          </ul>
                        </div>
                        <p className="text-sm font-medium">
                          Most light aircraft are not certified for flight in known icing conditions.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="hover-card-effect overflow-hidden border-t-4 border-t-gray-500">
                      <CardHeader className="pb-3 bg-gray-500/5">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                            <CloudFog className="h-5 w-5 text-gray-500" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">Fog and Low Visibility</CardTitle>
                            <CardDescription>Reduced visual references</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="mb-4 text-sm">
                          Fog and low visibility conditions can make VFR flight dangerous or impossible.
                        </p>
                        <div className="bg-muted/50 p-3 rounded-lg mb-4">
                          <h4 className="font-semibold text-sm mb-1">Common Types of Fog:</h4>
                          <ul className="list-disc pl-5 text-sm space-y-1">
                            <li>
                              <strong>Radiation fog</strong> - Forms on clear, calm nights
                            </li>
                            <li>
                              <strong>Advection fog</strong> - Forms when warm, moist air moves over cooler surfaces
                            </li>
                            <li>
                              <strong>Upslope fog</strong> - Forms when air flows upward along sloping terrain
                            </li>
                            <li>
                              <strong>Steam fog</strong> - Forms when cold air moves over warm water
                            </li>
                          </ul>
                        </div>
                        <p className="text-sm font-medium">
                          Always check airport weather minimums and have alternate plans if fog is forecast.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="hover-card-effect overflow-hidden border-t-4 border-t-orange-500">
                      <CardHeader className="pb-3 bg-orange-500/5">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                            <Wind className="h-5 w-5 text-orange-500" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">Turbulence</CardTitle>
                            <CardDescription>Irregular atmospheric motion</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="mb-4 text-sm">
                          Turbulence can range from light chop to severe, potentially causing loss of control or
                          structural stress.
                        </p>
                        <div className="bg-muted/50 p-3 rounded-lg mb-4">
                          <h4 className="font-semibold text-sm mb-1">Causes of Turbulence:</h4>
                          <ul className="list-disc pl-5 text-sm space-y-1">
                            <li>Convective currents (thermals)</li>
                            <li>Mechanical (wind over terrain/buildings)</li>
                            <li>Wind shear (changes in wind speed/direction)</li>
                            <li>Wake turbulence (behind other aircraft)</li>
                            <li>Frontal activity</li>
                          </ul>
                        </div>
                        <p className="text-sm font-medium">
                          Use PIREPs and forecasts to anticipate turbulence. Reduce speed in turbulent conditions.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>
              )}

              {currentTab === 'decision-making' && (
                <section>
                  <h2 className="font-display text-2xl font-semibold mb-6">Weather Decision Making</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Obtaining weather information is only the first step. Making sound go/no-go and in-flight decisions
                    based on that information is crucial.
                  </p>
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="hover-card-effect">
                      <CardHeader>
                        <CardTitle>Preflight Weather Briefing</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-sm">
                          Always obtain a standard weather briefing before every flight. Sources include:
                        </p>
                        <ul className="list-disc pl-5 text-sm space-y-2 mb-4">
                          <li>
                            <strong>1-800-WX-BRIEF:</strong> Phone briefing with a specialist.
                          </li>
                          <li>
                            <strong>Online Services:</strong> Leidos Flight Service (1800wxbrief.com), ForeFlight, Garmin
                            Pilot.
                          </li>
                          <li>
                            <strong>AviationWeather.gov:</strong> Official NWS aviation weather source.
                          </li>
                        </ul>
                        <p className="text-sm font-medium">
A standard briefing includes adverse conditions, VFR recommendation, synopsis, current conditions, en route forecast, destination forecast, winds aloft, and NOTAMs.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="hover-card-effect">
                      <CardHeader>
                        <CardTitle>Go/No-Go Decision</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-sm">
                          Evaluate the complete weather picture against your personal minimums, aircraft capability, and
                          flight requirements.
                        </p>
                        <ul className="list-disc pl-5 text-sm space-y-2 mb-4">
                          <li>Are conditions forecast to improve or deteriorate?</li>
                          <li>Do you have alternate plans if weather worsens?</li>
                          <li>Are conditions within legal VFR minimums AND your personal minimums?</li>
                          <li>Consider density altitude, winds, turbulence, icing potential.</li>
                          <li>Avoid "get-there-itis" pressure.</li>
                        </ul>
                        <p className="text-sm font-medium text-red-600 dark:text-red-400">
                          The safest decision is often to delay or cancel.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="hover-card-effect md:col-span-2">
                      <CardHeader>
                        <CardTitle>In-Flight Weather Monitoring</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-sm">
                          Weather can change rapidly. Continuously monitor conditions en route:
                        </p>
                        <div className="grid gap-4 sm:grid-cols-3">
                          <div className="bg-muted/50 p-3 rounded-lg">
                            <h4 className="font-semibold text-sm mb-1">Visual Scanning</h4>
                            <p className="text-xs">Observe cloud formations, visibility changes, precipitation.</p>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg">
                            <h4 className="font-semibold text-sm mb-1">ATIS/AWOS/ASOS</h4>
                            <p className="text-xs">Get updated airport conditions along your route.</p>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg">
                            <h4 className="font-semibold text-sm mb-1">Flight Following / ATC</h4>
                            <p className="text-xs">Request updates and advisories from controllers.</p>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg">
                            <h4 className="font-semibold text-sm mb-1">PIREPs</h4>
                            <p className="text-xs">Listen for reports from other pilots.</p>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg">
                            <h4 className="font-semibold text-sm mb-1">ADS-B Weather (FIS-B)</h4>
                            <p className="text-xs">Use datalink weather if available (understand limitations).</p>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg">
                            <h4 className="font-semibold text-sm mb-1">Submit PIREPs</h4>
                            <p className="text-xs">Report unexpected conditions to help others.</p>
                          </div>
                        </div>
                        <p className="mt-4 text-sm font-medium">
                          Be prepared to divert or turn back if conditions deteriorate beyond your capability or minimums.
                        </p>
                      </CardContent>
                    </Card>
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
      </SidebarInset>
    </main>
  )
}

