"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { PremiumTabs } from "@/components/premium-tabs";
import { FundamentalsNavigation } from "@/components/fundamentals-navigation";
import {
  Map,
  ChevronLeft,
  ChevronRight,
  Compass,
  Mountain,
  Radio,
  Plane,
  AlertTriangle,
  BookOpen,
  ExternalLink,
  Download,
  Share2,
  Bookmark,
  Printer,
  Building,
  Ruler,
  Layers,
  Eye,
  Zap,
  Locate,
  Navigation,
  MapPin,
  Smartphone,
  Globe,
  Target,
  Palette
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { usePathname } from 'next/navigation'

export default function SectionalChartsPage() {
  const pathname = usePathname()
  const [currentTab, setCurrentTab] = useState('introduction');

  const tabs = [
    { value: 'introduction', label: 'Introduction', icon: <BookOpen className="h-5 w-5" /> },
    { value: 'symbology', label: 'Symbology', icon: <Layers className="h-5 w-5" /> },
    { value: 'airportsNavaids', label: 'Airports & Navaids', icon: <Plane className="h-5 w-5" /> },
    { value: 'airspace', label: 'Airspace', icon: <Globe className="h-5 w-5" /> },
    { value: 'terrainObstacles', label: 'Terrain & Obstacles', icon: <Mountain className="h-5 w-5" /> },
    { value: 'practicalSkills', label: 'Practical Skills', icon: <Target className="h-5 w-5" /> },
    { value: 'digitalCharts', label: 'Digital Charts', icon: <Smartphone className="h-5 w-5" /> },
  ];

  const prevPage = { name: "Traffic Patterns", url: "/fundamentals/traffic-patterns" };
  const nextPage = { name: "Airspace", url: "/fundamentals/airspace" };

  return (
    <div className="py-8 px-4 md:px-6 lg:px-8">
      <GuidePageHeader
        chapter="Fundamentals"
        title="Sectional Chart Mastery"
      />

      <div className="space-y-8">
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-aa-navy to-aa-blue text-white">
          <div className="absolute inset-0 bg-[url('/images/sectional-chart-vfr.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div className="relative z-10 px-6 py-12 md:py-16 md:px-10">
            <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">
              Training Fundamentals
            </Badge>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">Sectional Charts</h1>
            <p className="text-xl text-white/80 mb-6 max-w-2xl">Mastering Aviation's Essential Navigation Tool</p>
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
            <div className="w-full h-full bg-[url('/images/vfr-plotter-sectional-chart.jpg')] bg-contain bg-no-repeat"></div>
          </div>
        </section>

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

        <PremiumTabs
          tabs={tabs}
          defaultValue="introduction"
          onChange={setCurrentTab}
          currentValue={currentTab}
          title="Sectional Chart Topics"
        />

        <div className="pt-6">
          {currentTab === 'introduction' && (
            <div className="space-y-8">
              <section className="prose prose-lg dark:prose-invert max-w-none">
                <p className="lead">
                  Sectional Aeronautical Charts, commonly known as "sectionals," are the primary navigational charts
                  used by VFR pilots. These charts provide a wealth of information essential for safe navigation,
                  including airports, airspace, terrain, obstacles, and navigational aids.
                </p>

                <p>
                  Learning to read and interpret sectional charts is a fundamental skill for every pilot. Whether you're
                  planning a cross-country flight or navigating in the local area, your ability to extract and
                  understand the information presented on these charts is critical to your safety and success as a
                  pilot.
                </p>

                <div className="bg-muted rounded-xl p-6 my-6 border-l-4 border-primary">
                  <h3 className="text-xl font-semibold mb-3">Why Sectional Charts Matter</h3>
                  <p className="mb-0">Sectional charts serve several important purposes:</p>
                  <ul className="mt-2 mb-0">
                    <li>Provide a visual representation of the airspace structure</li>
                    <li>Identify terrain and obstacles that may pose hazards</li>
                    <li>Show airports, navaids, and other important landmarks</li>
                    <li>Depict special use airspace and restricted areas</li>
                    <li>Serve as the foundation for flight planning and navigation</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-6">Sectional Chart Fundamentals</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Before diving into the specific symbols and features, it's important to understand the basic
                  characteristics of sectional charts and how they're organized.
                </p>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="hover-card-effect">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Ruler className="h-4 w-4 text-primary" />
                        </div>
                        <CardTitle>Scale and Coverage</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm">
                        Sectional charts are drawn at a scale of 1:500,000 (1 inch = 6.86 nautical miles).
                      </p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Each chart covers approximately 340 x 450 nautical miles</li>
                        <li>Charts are updated every 56 days (6 times per year)</li>
                        <li>Adjacent charts have overlap areas for continuity</li>
                        <li>Scale allows for detailed representation while covering large areas</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover-card-effect">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Compass className="h-4 w-4 text-primary" />
                        </div>
                        <CardTitle>Orientation and Grid</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm">Sectional charts are oriented with true north at the top.</p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Latitude and longitude lines form a grid across the chart</li>
                        <li>Latitude lines run east-west (horizontal)</li>
                        <li>Longitude lines run north-south (vertical)</li>
                        <li>Isogonic lines show magnetic variation</li>
                        <li>All headings on the chart are true, not magnetic</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover-card-effect">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Layers className="h-4 w-4 text-primary" />
                        </div>
                        <CardTitle>Chart Legend</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm">
                        Each sectional chart includes a comprehensive legend explaining all symbols.
                      </p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Located on the reverse side or as a separate panel</li>
                        <li>Explains all symbols, colors, and abbreviations</li>
                        <li>Includes airport data legend</li>
                        <li>Shows airspace class definitions</li>
                        <li>Provides conversion scales and other reference information</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 bg-yellow-50 dark:bg-yellow-950/20 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="font-semibold text-yellow-700 dark:text-yellow-400 mb-2">Chart Currency</h3>
                  <p className="mb-4">
                    Always use current charts for navigation. Flying with outdated charts can lead to serious safety
                    issues:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Airspace boundaries may have changed</li>
                    <li>New obstacles may not be depicted</li>
                    <li>Airport information may be outdated</li>
                    <li>Navigation frequencies may have changed</li>
                  </ul>
                  <p className="mt-4 font-medium">
                    The effective dates are printed on the front panel of each chart. Digital chart services
                    automatically update, but always verify you're using the current edition.
                  </p>
                </div>
              </section>
            </div>
          )}

          {currentTab === 'symbology' && (
            <section className="bg-card rounded-2xl border p-8">
              <h2 className="font-display text-2xl font-semibold mb-6">Chart Colors and Symbology</h2>
              <p className="text-lg mb-6">
                Sectional charts use a standardized system of colors and symbols to represent different features.
                Understanding this visual language is essential for effective chart reading.
              </p>

              <Tabs defaultValue="colors" className="w-full">
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="colors" className="flex items-center gap-2">
                    <Eye className="h-4 w-4" /> Chart Colors
                  </TabsTrigger>
                  <TabsTrigger value="cultural" className="flex items-center gap-2">
                    <Building className="h-4 w-4" /> Cultural Features
                  </TabsTrigger>
                  <TabsTrigger value="terrain" className="flex items-center gap-2">
                    <Mountain className="h-4 w-4" /> Terrain/Relief
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="colors">
                  <Card>
                    <CardHeader>
                      <CardTitle>Understanding Chart Colors</CardTitle>
                      <CardDescription>Colors provide context for terrain, water, and airspace.</CardDescription>
                    </CardHeader>
                    <CardContent className="prose prose-sm dark:prose-invert max-w-none">
                      <ul>
                        <li><strong>Blue:</strong> Water features (lakes, rivers, oceans). Dashed blue lines indicate drainage areas.</li>
                        <li><strong>Green:</strong> Wooded areas or forests.</li>
                        <li><strong>Brown:</strong> Contour lines representing elevation changes. Darker brown indicates higher terrain.</li>
                        <li><strong>Yellow:</strong> Built-up areas (cities, towns).</li>
                        <li><strong>Magenta:</strong> Used for various symbols including VOR compass roses, airways (Victor airways), Class E airspace floors starting at 700 ft AGL, and certain obstacles.</li>
                        <li><strong>White/Light Gray:</strong> Open terrain, farmland, or areas with sparse vegetation.</li>
                      </ul>
                      <p>Airspace boundaries are depicted using specific colored lines (e.g., solid blue for Class B, solid magenta for Class C).</p>
                      <div className="mt-4 p-4 rounded-md bg-background border">
                        <h4 className="font-semibold">Color Example: Elevation Tints</h4>
                        <p>Some charts use hypsometric tinting, where different elevation ranges are shown with varying shades of brown or green, providing a quick visual reference for terrain height.</p>
                        <div className="mt-4 aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                          Image: Elevation Tints Example
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="cultural">
                 <Card>
                   <CardHeader>
                     <CardTitle>Cultural and Man-Made Features</CardTitle>
                     <CardDescription>Symbols representing human development and infrastructure.</CardDescription>
                   </CardHeader>
                   <CardContent className="prose prose-sm dark:prose-invert max-w-none">
                     <ul>
                       <li><strong>Cities/Towns:</strong> Yellow shaded areas. Smaller towns may be marked with a small open circle.</li>
                       <li><strong>Roads:</strong> Thin gray lines (major roads may be slightly thicker).</li>
                       <li><strong>Railroads:</strong> Black lines with cross-ties (#####).</li>
                       <li><strong>Power Lines:</strong> Thin black lines often marked with "PWR LNS". High-tension lines may have lightning bolt symbols.</li>
                       <li><strong>Pipelines:</strong> Dashed black lines, sometimes labeled "Pipeline".</li>
                       <li><strong>Race Tracks / Stadiums:</strong> Depicted with specific outline shapes.</li>
                       <li><strong>Outdoor Theaters:</strong> Symbol looks like a small screen.</li>
                       <li><strong>Bridges / Viaducts:</strong> Shown crossing rivers or valleys.</li>
                     </ul>
                     <div className="mt-4 p-4 rounded-md bg-background border">
                        <h4 className="font-semibold">Symbol Example: Power Lines</h4>
                        <p>Look for thin black lines, often running parallel to roads or across open terrain, potentially marked with tower symbols or lightning bolts for high voltage.</p>
                        <div className="mt-4 aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                          Image: Power Line Symbology
                        </div>
                      </div>
                   </CardContent>
                 </Card>
                </TabsContent>
                <TabsContent value="terrain">
                 <Card>
                   <CardHeader>
                     <CardTitle>Terrain and Relief Features</CardTitle>
                     <CardDescription>Symbols indicating natural landscape characteristics and elevation.</CardDescription>
                   </CardHeader>
                   <CardContent className="prose prose-sm dark:prose-invert max-w-none">
                     <ul>
                       <li><strong>Contour Lines:</strong> Brown lines connecting points of equal elevation above sea level (MSL). Index contours (thicker lines) are labeled with elevation.</li>
                       <li><strong>Spot Elevations:</strong> Black dots with the elevation number next to them (e.g., • 1234). Indicates the MSL height of a specific point.</li>
                       <li><strong>Maximum Elevation Figure (MEF):</strong> Large blue numbers within each quadrangle (30 min lat/long box). Represents the highest elevation (terrain or obstacle) in that quad, rounded up to the nearest 100 feet. Format: `12⁵` (meaning 12,500 ft MSL).</li>
                       <li><strong>Mountain Peaks:</strong> May be shown with specific symbols or high spot elevations.</li>
                       <li><strong>Valleys / Depressions:</strong> Indicated by the spacing and shape of contour lines.</li>
                       <li><strong>Shorelines / Coastlines:</strong> Clearly depicted blue lines separating land and water.</li>
                       <li><strong>Sand Dunes / Salt Flats:</strong> May have specific patterns or labels.</li>
                     </ul>
                     <div className="mt-4 p-4 rounded-md bg-background border">
                        <h4 className="font-semibold">Key Feature: Maximum Elevation Figure (MEF)</h4>
                        <p>The MEF is critical for VFR altitude planning, ensuring terrain and obstacle clearance within a quadrangle. Always add a safety margin above the MEF.</p>
                        <div className="mt-4 aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                          Image: MEF Example
                        </div>
                     </div>
                   </CardContent>
                 </Card>
                </TabsContent>
              </Tabs>
            </section>
          )}

          {currentTab === 'airportsNavaids' && (
            <section className="space-y-8">
               <h2 className="font-display text-2xl font-semibold mb-6">Airports and Navigation Aids</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Identifying airports and understanding the available navigation aids are crucial components of using
                sectional charts effectively.
              </p>

              <div>
                <h3 className="font-semibold text-xl mb-4">Airport Symbols</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-base font-medium">Public Airports</CardTitle>
                      <Plane className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-muted-foreground mb-2">Airports open to the public.</p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li><strong>Circle with Runways:</strong> Hard surface runway(s) 1500-8069 ft. Blue if has control tower, magenta otherwise.</li>
                        <li><strong>Circle (No Runways):</strong> Hard surface runway(s) less than 1500 ft or unknown length.</li>
                        <li><strong>"R" within Circle:</strong> Private airport (not depicted unless significant landmark).</li>
                        <li><strong>Tick Marks around Circle:</strong> Fuel available and services.</li>
                        <li><strong>Star above Circle:</strong> Rotating beacon (operates sunset to sunrise).</li>
                      </ul>
                      <div className="mt-4 aspect-[16/9] bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg flex items-center justify-center">
                        <div className="text-center p-4">
                          <p className="font-semibold text-blue-800 dark:text-blue-300">Public Airport Symbols</p>
                          <p className="text-xs text-blue-600 dark:text-blue-400">(Blue/Magenta Circles, Ticks, Stars)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-base font-medium">Other Landing Areas</CardTitle>
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-muted-foreground mb-2">Non-standard or special use landing sites.</p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li><strong>H in Circle:</strong> Heliport (Blue if public, Magenta if private).</li>
                        <li><strong>Circle with Anchor:</strong> Seaplane Base (Blue if public, Magenta if private).</li>
                        <li><strong>F in Circle:</strong> Ultralight Flightpark.</li>
                        <li><strong>Glider Symbol:</strong> Glider Operations Area.</li>
                        <li><strong>Abandoned Airport:</strong> Circle with "X" through it. Use caution, may still be used unofficially.</li>
                      </ul>
                      <div className="mt-4 aspect-[16/9] bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg flex items-center justify-center">
                        <div className="text-center p-4">
                          <p className="font-semibold text-purple-800 dark:text-purple-300">Other Landing Symbols</p>
                          <p className="text-xs text-purple-600 dark:text-purple-400">(Heliports, Seaplane Bases, etc.)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                 <h3 className="font-semibold text-xl mb-4">Airport Data Block</h3>
                 <p className="mb-4">Adjacent to each airport symbol is a data block providing critical information:</p>
                 <Card className="overflow-hidden">
                   <CardContent className="p-6">
                     <pre className="text-xs bg-muted p-4 rounded overflow-x-auto">
                       {`AIRPORT NAME (IDENT)
CT - 118.3*   ASOS 128.175
1234 L 55 122.8`}
                     </pre>
                     <Accordion type="single" collapsible className="w-full mt-4">
                       <AccordionItem value="item-1">
                         <AccordionTrigger className="text-sm">Breakdown of Data</AccordionTrigger>
                         <AccordionContent className="text-sm">
                           <ul className="list-disc pl-5 space-y-1">
                             <li><strong>AIRPORT NAME (IDENT):</strong> Official name and 3-4 letter identifier.</li>
                             <li><strong>CT - 118.3*:</strong> Control Tower frequency. Star indicates part-time operation. "C" in circle indicates CTAF.</li>
                             <li><strong>ASOS/AWOS/ATIS Freq:</strong> Automated weather broadcast frequency.</li>
                             <li><strong>1234:</strong> Airport elevation in feet MSL.</li>
                             <li><strong>L:</strong> Lighting available (L* indicates pilot-controlled lighting). No "L" means no lighting.</li>
                             <li><strong>55:</strong> Length of the longest runway in hundreds of feet (e.g., 55 = 5500 ft).</li>
                             <li><strong>122.8:</strong> UNICOM frequency (if available) or CTAF if no tower.</li>
                             <li><strong>Other Info:</strong> May include VFR advisory freq (125.0), RP (Right Pattern), § (Special conditions in Chart Supplement).</li>
                           </ul>
                         </AccordionContent>
                       </AccordionItem>
                     </Accordion>
                   </CardContent>
                 </Card>
              </div>

              <div>
                 <h3 className="font-semibold text-xl mb-4">Navigation Aid Symbols</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                       <CardHeader>
                         <CardTitle>VOR / VORTAC / VOR-DME</CardTitle>
                       </CardHeader>
                       <CardContent>
                         <ul className="list-disc pl-5 text-sm space-y-2">
                           <li><strong>Symbol:</strong> Hexagon symbol, often surrounded by a compass rose (calibrated to magnetic north).</li>
                           <li><strong>VOR:</strong> Hexagon only.</li>
                           <li><strong>VOR-DME:</strong> Hexagon within a square. Provides distance measuring equipment (DME).</li>
                           <li><strong>VORTAC:</strong> Hexagon within a square with "spikes". Provides VOR azimuth, TACAN azimuth, and TACAN DME (usable by civil DME).</li>
                           <li><strong>Data Box:</strong> Name, Identifier (3 letters), Frequency, Morse code, any limitations. Blue box for VOR, Magenta for Low/Medium Frequency NDBs.</li>
                         </ul>
                       </CardContent>
                    </Card>
                    <Card>
                       <CardHeader>
                         <CardTitle>NDB & Other Aids</CardTitle>
                       </CardHeader>
                       <CardContent>
                          <ul className="list-disc pl-5 text-sm space-y-2">
                            <li><strong>NDB (Non-Directional Beacon):</strong> Magenta circle with dots around it. Data box shows name, frequency, identifier (2-3 letters), Morse code.</li>
                            <li><strong>Fixes / Intersections:</strong> Triangle symbol (compulsory reporting point) or empty triangle (non-compulsory). Named with 5 letters (e.g., KRAMR).</li>
                            <li><strong>GPS Waypoints:</strong> Star symbol. Named with 5 letters (often pronounceable).</li>
                            <li><strong>Airways (Victor):</strong> Faint blue lines connecting VORs. Labeled (e.g., V123). MEA (Minimum Enroute Altitude) shown.</li>
                          </ul>
                       </CardContent>
                    </Card>
                  </div>
              </div>
            </section>
          )}

          {currentTab === 'airspace' && (
            <section className="space-y-8">
              <h2 className="font-display text-2xl font-semibold mb-6">Airspace Depiction</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Sectional charts are essential for visualizing the complex structure of the National Airspace System
                (NAS). Understanding how different airspace classes are depicted is critical for VFR navigation and
                compliance.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Class B Airspace</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-2">Depicted by heavy solid blue lines.</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Multi-layered, often resembling an upside-down wedding cake.</li>
                      <li>Altitude limits shown in hundreds of feet MSL (e.g., `100/SFC` means 10,000 ft down to surface).</li>
                      <li>Requires explicit ATC clearance to enter.</li>
                      <li>Mode C transponder and two-way radio required.</li>
                    </ul>
                     <div className="mt-4 aspect-video rounded-lg overflow-hidden">
                        <img src="/images/sectional-chart-class-b-closeup.jpg" alt="Class B Airspace on Sectional Chart" className="w-full h-full object-cover"/>
                      </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Class C Airspace</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-2">Depicted by solid magenta lines.</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Typically two layers: surface area (5 NM radius, up to 4000 ft AGL) and shelf area (10 NM radius, 1200 ft AGL up to 4000 ft AGL).</li>
                      <li>Altitude limits shown (e.g., `45/15`).</li>
                      <li>Requires two-way radio communication established prior to entry.</li>
                      <li>Mode C transponder required within and above.</li>
                    </ul>
                    <div className="mt-4 aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground">Image: Class C Example</div>
                  </CardContent>
                </Card>

                 <Card>
                   <CardHeader>
                     <CardTitle>Class D Airspace</CardTitle>
                   </CardHeader>
                   <CardContent>
                     <p className="text-sm mb-2">Depicted by dashed blue lines.</p>
                     <ul className="list-disc pl-5 text-sm space-y-1">
                       <li>Generally a single cylinder, surface up to 2500 ft AGL (charted in MSL).</li>
                       <li>Ceiling shown in hundreds of feet MSL inside a blue box (e.g., `[28]`).</li>
                       <li>A `[-]` ceiling means up to but not including that altitude.</li>
                       <li>Requires two-way radio communication established prior to entry.</li>
                       <li>Reverts to Class E or G when tower closes (check Chart Supplement).</li>
                     </ul>
                     <div className="mt-4 aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground">Image: Class D Example</div>
                   </CardContent>
                 </Card>

                 <Card>
                   <CardHeader>
                     <CardTitle>Class E Airspace</CardTitle>
                   </CardHeader>
                   <CardContent>
                     <p className="text-sm mb-2">Various depictions based on floor altitude.</p>
                     <ul className="list-disc pl-5 text-sm space-y-1">
                       <li><strong>Surface Floor:</strong> Dashed magenta lines (like Class D, but magenta). Often around non-towered airports with instrument approaches.</li>
                       <li><strong>700 ft AGL Floor:</strong> Shaded magenta vignette. Indicates Class E starts at 700 ft AGL.</li>
                       <li><strong>1200 ft AGL Floor:</strong> Shaded blue vignette. Indicates Class E starts at 1200 ft AGL (often the default elsewhere).</li>
                       <li><strong>Other Floors:</strong> Blue segmented lines with specific altitudes shown.</li>
                       <li>Victor Airways are Class E (8 NM wide, 1200 ft AGL up to 17,999 ft MSL).</li>
                     </ul>
                     <div className="mt-4 aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground">Image: Class E Examples</div>
                   </CardContent>
                 </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Class G Airspace</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-2">Uncontrolled airspace, not explicitly depicted.</p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Exists where other controlled airspace (B, C, D, E) does not.</li>
                        <li>Typically extends from the surface up to the floor of overlying Class E airspace (often 700 or 1200 ft AGL, sometimes higher).</li>
                        <li>Can extend up to 14,500 ft MSL in some remote areas.</li>
                        <li>No specific VFR entry or equipment requirements (weather minimums still apply).</li>
                      </ul>
                      <div className="mt-4 aspect-video rounded-lg overflow-hidden">
                         <img src="/images/rural-airfield-hangar.jpg" alt="Rural airfield likely in Class G airspace" className="w-full h-full object-cover"/>
                      </div>
                    </CardContent>
                  </Card>

                <Card>
                   <CardHeader>
                     <CardTitle>Special Use Airspace (SUA)</CardTitle>
                   </CardHeader>
                   <CardContent>
                     <p className="text-sm mb-2">Areas with specific limitations or activities.</p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li><strong>Prohibited Area (P-###):</strong> Blue hashed border. Flight prohibited.</li>
                        <li><strong>Restricted Area (R-###):</strong> Blue hashed border. Flight restricted (need controlling agency permission). Often hazardous activities (e.g., artillery firing).</li>
                        <li><strong>Warning Area (W-###):</strong> Blue hashed border over water. Similar hazards to Restricted Areas.</li>
                        <li><strong>Military Operations Area (MOA):</strong> Magenta hashed border. High-speed military flight activity. VFR flight allowed but use extreme caution. Contact FSS for activity status.</li>
                        <li><strong>Alert Area (A-###):</strong> Magenta hashed border. High volume of pilot training or unusual aerial activity.</li>
                        <li><strong>Controlled Firing Area (CFA):</strong> Not depicted. Activities suspended when aircraft approach.</li>
                      </ul>
                      <div className="mt-4 aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground">Image: SUA Examples</div>
                   </CardContent>
                 </Card>
               </div>

               <Separator />

               <div>
                 <h3 className="font-semibold text-xl mb-4">Other Airspace Information</h3>
                 <ul className="list-disc pl-5 text-sm space-y-2">
                    <li><strong>Mode C Veil:</strong> Thin solid magenta circle around primary Class B airports (approx 30 NM radius). Mode C transponder required within from surface up to 10,000 ft MSL.</li>
                    <li><strong>TRSA (Terminal Radar Service Area):</strong> Gray circular lines. Participation not mandatory for VFR but recommended. Depicted on chart legend.</li>
                    <li><strong>National Security Areas (NSA):</strong> Depicted with thick dashed magenta lines and notes. Pilots requested to avoid flight at indicated altitudes.</li>
                    <li><strong>Air Defense Identification Zone (ADIZ):</strong> Magenta line with dots. Specific procedures required for crossing.</li>
                    <li><strong>VFR Flyways / Corridors:</strong> Recommended flight paths through complex airspace (like Class B). Depicted on VFR Terminal Area Charts (TACs).</li>
                    <li><strong>Parachute Jumping Areas:</strong> Parachute symbol.</li>
                  </ul>
               </div>
            </section>
          )}

          {currentTab === 'terrainObstacles' && (
             <section className="space-y-8">
               <h2 className="font-display text-2xl font-semibold mb-6">Topography and Obstacles</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Accurately interpreting terrain features and identifying potential obstructions is vital for safe VFR
                flight, especially in areas with significant elevation changes or man-made structures.
              </p>

              <div>
                <h3 className="font-semibold text-xl mb-4">Terrain Depiction</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Contour Lines</CardTitle>
                      <CardDescription>Lines connecting points of equal elevation (MSL).</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Basic contours are thin brown lines.</li>
                        <li>Index contours (every 4th or 5th line) are thicker and labeled with elevation.</li>
                        <li>Contour interval (elevation change between lines) varies; check chart legend (typically 500 ft).</li>
                        <li>Closely spaced lines indicate steep terrain.</li>
                        <li>Widely spaced lines indicate flatter terrain.</li>
                        <li>Hypsometric tinting (color shading for elevation ranges) may also be used.</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Spot Elevations & MEF</CardTitle>
                      <CardDescription>Specific height indicators.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li><strong>Spot Elevation:</strong> Black dot with MSL elevation (e.g., • 2150). Shows height of a specific point like a hilltop.</li>
                        <li><strong>Maximum Elevation Figure (MEF):</strong> Large blue numbers in each quadrangle (30' lat/long). Highest feature (terrain or obstacle) rounded up to nearest 100 ft. Example: `4⁵` means 4,500 ft MSL is the highest point in that quad. Crucial for minimum safe altitude planning.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                 <div className="mt-4 aspect-video bg-gradient-to-br from-green-100 to-yellow-100 dark:from-green-900/30 dark:to-yellow-800/30 rounded-lg flex items-center justify-center">
                   <div className="text-center p-4">
                     <p className="font-semibold text-green-800 dark:text-green-300">Visualizing Terrain</p>
                     <p className="text-xs text-green-600 dark:text-green-400">(Contours, Spot Elevations, MEF)</p>
                   </div>
                 </div>
              </div>

              <div>
                 <h3 className="font-semibold text-xl mb-4">Obstacle Depiction</h3>
                 <p className="mb-4">Man-made obstructions are depicted with specific symbols and height information.</p>
                 <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Obstacle Symbols</CardTitle>
                        <CardDescription>Identifying towers, buildings, etc.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          <li><strong>Basic Symbol:</strong> Black symbol indicating presence of an obstacle. Shape may vary (tower, building).</li>
                          <li><strong>Group Obstacles:</strong> Single symbol representing multiple structures.</li>
                          <li><strong>Lighting:</strong> Lightning bolt symbol indicates high-intensity lighting. Presence/absence of dot may indicate specific lighting types (check legend).</li>
                          <li><strong>UC:</strong> Under Construction.</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                       <CardHeader>
                         <CardTitle>Obstacle Height Data</CardTitle>
                         <CardDescription>Understanding altitude figures.</CardDescription>
                       </CardHeader>
                       <CardContent>
                         <ul className="list-disc pl-5 text-sm space-y-1">
                           <li><strong>Top Number (Bold):</strong> Elevation of the top of the obstacle in feet MSL.</li>
                           <li><strong>Bottom Number (Parentheses):</strong> Height of the obstacle above ground level (AGL).</li>
                           <li>Example: `1549 (310)` means top is 1549 ft MSL, structure is 310 ft tall.</li>
                           <li>Obstacles below 200 ft AGL are generally not charted unless near an airport.</li>
                           <li>Obstacles 1000 ft AGL and higher are always marked.</li>
                         </ul>
                       </CardContent>
                     </Card>
                  </div>
                   <div className="mt-4 aspect-video bg-gradient-to-br from-red-100 to-gray-100 dark:from-red-900/30 dark:to-gray-800/30 rounded-lg flex items-center justify-center">
                     <div className="text-center p-4">
                       <p className="font-semibold text-red-800 dark:text-red-300">Obstruction Markings</p>
                       <p className="text-xs text-red-600 dark:text-red-400">(Symbols, MSL/AGL Heights)</p>
                     </div>
                   </div>
                   <div className="mt-6 bg-red-50 dark:bg-red-950/20 p-6 rounded-lg border-l-4 border-red-500">
                      <h3 className="font-semibold text-red-700 dark:text-red-400 mb-2 flex items-center"><AlertTriangle className="h-5 w-5 mr-2" /> Obstacle Clearance</h3>
                      <p>Always maintain adequate clearance from charted obstacles. Remember:</p>
                      <ul className="list-disc pl-6 space-y-1 mt-2">
                         <li>MEFs provide clearance for a quadrangle, but individual obstacles require specific attention during route planning.</li>
                         <li>Add a safety buffer to all obstacle heights, especially at night or in reduced visibility.</li>
                         <li>Uncharted obstacles may exist, particularly temporary ones like cranes.</li>
                      </ul>
                   </div>
                </div>
             </section>
            )}

            {currentTab === 'practicalSkills' && (
              <div className="space-y-8">
                 <section>
                   <h2 className="font-display text-2xl font-semibold mb-6">Practical Chart Reading Skills</h2>
                   <p className="text-lg text-muted-foreground mb-6">
                    Knowing the symbols is one thing; applying that knowledge effectively in flight preparation and
                    execution is another. Develop these practical skills to become proficient with sectional charts.
                   </p>

                   <Accordion type="single" collapsible className="w-full mb-6">
                     <AccordionItem value="item-1">
                       <AccordionTrigger className="text-lg font-medium">Systematic Approach to Chart Reading</AccordionTrigger>
                       <AccordionContent>
                         <ol className="list-decimal pl-6 space-y-2 text-sm">
                           <li><strong>Orient Yourself:</strong> Determine your general location or intended route on the chart using latitude/longitude, VORs, or major landmarks.</li>
                           <li><strong>Check Chart Currency & Legend:</strong> Ensure you have the current chart edition. Briefly review the legend if unfamiliar with symbols.</li>
                           <li><strong>Identify Key Features Along Route:</strong> Trace your intended path. Note airports (departure, destination, alternates), navaids, significant terrain, and major landmarks.</li>
                           <li><strong>Analyze Airspace:</strong> Identify all airspace classes you will transit through or operate near. Note frequencies, entry requirements, and altitude restrictions. Check for Special Use Airspace (MOAs, Restricted Areas) and their status.</li>
                           <li><strong>Assess Terrain and Obstacles:</strong> Check MEFs along your route. Identify the highest terrain and obstacles near your path. Determine a safe cruising altitude considering VFR minimums and terrain/obstacle clearance (e.g., 1000 ft above highest obstacle within 4 NM, 2000 ft in mountainous areas).</li>
                           <li><strong>Note Frequencies:</strong> List necessary frequencies: ATIS/ASOS/AWOS, Tower, Ground, Approach/Departure (if applicable), VORs, FSS, enroute Flight Following.</li>
                           <li><strong>Review Airport Information:</strong> For departure and destination airports, check elevation, runway lengths/orientation, lighting, pattern altitude, and any special notes (§ symbol in data block refers to Chart Supplement).</li>
                         </ol>
                       </AccordionContent>
                     </AccordionItem>
                   </Accordion>

                   <div className="mb-6">
                      <h3 className="font-semibold text-xl mb-4">Essential Chart Reading Tools</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                         <Card className="text-center">
                            <CardHeader><CardTitle>Plotter</CardTitle></CardHeader>
                            <CardContent><Ruler className="mx-auto h-8 w-8 text-primary mb-2" /><p className="text-xs">Measures distances (NM/SM) and course lines (True/Magnetic).</p></CardContent>
                         </Card>
                         <Card className="text-center">
                            <CardHeader><CardTitle>E6B Flight Computer</CardTitle></CardHeader>
                            <CardContent><Compass className="mx-auto h-8 w-8 text-primary mb-2" /><p className="text-xs">Calculates wind correction, ground speed, fuel burn, density altitude, etc. (Manual or electronic).</p></CardContent>
                         </Card>
                         <Card className="text-center">
                            <CardHeader><CardTitle>Highlighter/Pen</CardTitle></CardHeader>
                            <CardContent><Eye className="mx-auto h-8 w-8 text-primary mb-2" /><p className="text-xs">Mark route, checkpoints, frequencies, key altitudes directly on the chart.</p></CardContent>
                         </Card>
                      </div>
                   </div>

                    <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg border-l-4 border-red-500 mb-6">
                      <h3 className="font-semibold text-red-700 dark:text-red-400 mb-2 flex items-center"><AlertTriangle className="h-5 w-5 mr-2" /> Common Chart Reading Mistakes</h3>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Using an expired chart.</li>
                        <li>Misinterpreting airspace boundaries or altitudes.</li>
                        <li>Ignoring MEFs or minimum safe altitudes.</li>
                        <li>Failing to identify obstacles along the route.</li>
                        <li>Confusing True vs. Magnetic headings (charts use True, aircraft use Magnetic).</li>
                        <li>Not checking the Chart Supplement for airport details or temporary restrictions (NOTAMs).</li>
                        <li>Poor landmark identification leading to disorientation.</li>
                      </ul>
                    </div>

                    <div>
                       <h3 className="font-semibold text-xl mb-4">Practice Scenarios</h3>
                       <p className="mb-4">Regular practice is key. Try these exercises:</p>
                       <Accordion type="multiple" className="w-full">
                          <AccordionItem value="ex1">
                            <AccordionTrigger>Scenario 1: Local Flight Planning</AccordionTrigger>
                            <AccordionContent>
                              <p className="text-sm">Plan a short VFR flight between two local airports. Identify airspace, frequencies, suitable altitude, prominent landmarks, and calculate distance/heading.</p>
                               <div className="mt-4 aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground">Image: Example Local Route on Chart</div>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="ex2">
                            <AccordionTrigger>Scenario 2: Airspace Identification</AccordionTrigger>
                            <AccordionContent>
                              <p className="text-sm">Choose a major city on the chart. Identify the Class B or C airspace boundaries, vertical limits, associated frequencies, and VFR transition routes (if shown on TAC). Determine requirements for entry.</p>
                               <div className="mt-4 aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground">Image: Class B/C Example for Identification</div>
                            </AccordionContent>
                          </AccordionItem>
                         <AccordionItem value="ex3">
                            <AccordionTrigger>Scenario 3: Terrain/Obstacle Avoidance</AccordionTrigger>
                            <AccordionContent>
                              <p className="text-sm">Select a route through a mountainous or obstacle-rich area. Determine the MEF for each quadrangle along the route. Identify the single highest obstacle near your path. Calculate a minimum safe altitude for the flight.</p>
                              <div className="mt-4 aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground">Image: Mountainous Terrain Example</div>
                            </AccordionContent>
                          </AccordionItem>
                       </Accordion>
                    </div>
                 </section>

                 <section>
                   <h2 className="font-display text-2xl font-semibold mb-6">Flight Planning with Sectionals</h2>
                   <p className="text-lg text-muted-foreground mb-6">
                     Sectional charts are the foundation of VFR flight planning, allowing you to chart a safe and
                     efficient course while accounting for regulations, performance, and environmental factors.
                   </p>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-6">
                       <Card>
                         <CardHeader>
                           <CardTitle>Route Selection</CardTitle>
                         </CardHeader>
                         <CardContent>
                           <ul className="list-disc pl-5 text-sm space-y-1">
                             <li>Draw a direct course line between departure and destination.</li>
                             <li>Adjust the route to avoid terrain, obstacles, and complex/restricted airspace (SUA, Class B).</li>
                             <li>Consider VOR radials or prominent landmarks for navigation legs.</li>
                             <li>Break long routes into shorter legs (approx. 10-20 NM) with identifiable checkpoints.</li>
                             <li>Factor in wind direction for optimal routing (e.g., slight deviation for better tailwind).</li>
                           </ul>
                         </CardContent>
                       </Card>

                       <Card>
                         <CardHeader>
                           <CardTitle>Checkpoint Identification</CardTitle>
                         </CardHeader>
                         <CardContent>
                           <ul className="list-disc pl-5 text-sm space-y-1">
                             <li>Select easily identifiable visual checkpoints along your route (towns, lakes, road intersections, VORs, airports).</li>
                             <li>Ensure checkpoints are distinct and not easily confused with similar nearby features.</li>
                             <li>Estimate time and distance between checkpoints.</li>
                             <li>Mark checkpoints clearly on your chart.</li>
                           </ul>
                         </CardContent>
                       </Card>

                        <Card>
                         <CardHeader>
                           <CardTitle>Altitude Selection</CardTitle>
                         </CardHeader>
                         <CardContent>
                           <ul className="list-disc pl-5 text-sm space-y-1">
                             <li>Determine minimum safe altitude based on MEFs and obstacle heights (+ clearance buffer).</li>
                             <li>Consider VFR cruising altitude rules (FAR 91.159): Magnetic course 0-179° = Odd thousands + 500 ft (e.g., 3500, 5500); 180-359° = Even thousands + 500 ft (e.g., 4500, 6500) above 3000 ft AGL.</li>
                             <li>Factor in winds aloft, cloud bases, and aircraft performance.</li>
                             <li>Check airspace altitude restrictions along the route.</li>
                           </ul>
                         </CardContent>
                       </Card>
                     </div>

                     <div className="space-y-6">
                       <Card>
                         <CardHeader>
                           <CardTitle>Navigation Log Calculations</CardTitle>
                         </CardHeader>
                         <CardContent>
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              <li><strong>True Course (TC):</strong> Measure course line angle relative to lines of longitude using plotter.</li>
                              <li><strong>Wind Correction Angle (WCA):</strong> Calculate using E6B based on forecast winds aloft.</li>
                              <li><strong>True Heading (TH):</strong> TC +/- WCA.</li>
                              <li><strong>Magnetic Variation (VAR):</strong> Find nearest isogonic line on chart (dashed magenta line). East variation is subtracted, West is added ("East is Least, West is Best").</li>
                              <li><strong>Magnetic Heading (MH):</strong> TH +/- VAR.</li>
                              <li><strong>Compass Deviation (DEV):</strong> Find on aircraft compass card.</li>
                              <li><strong>Compass Heading (CH):</strong> MH +/- DEV. This is what you fly.</li>
                              <li><strong>Ground Speed (GS):</strong> Calculate using E6B.</li>
                              <li><strong>Time Enroute (ETE):</strong> Distance / GS.</li>
                              <li><strong>Fuel Burn:</strong> ETE x Fuel Consumption Rate (from POH). Calculate for each leg and total. Add reserve fuel (e.g., 30 min day VFR, 45 min night VFR).</li>
                            </ul>
                         </CardContent>
                       </Card>

                       <Card>
                          <CardHeader>
                            <CardTitle>Flight Plan Filing (VFR)</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm mb-2">While not mandatory for VFR, filing a flight plan is highly recommended for cross-country flights for search and rescue purposes.</p>
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              <li>File via FSS (phone or radio), online (e.g., 1800wxbrief.com), or EFB app.</li>
                              <li>Provide aircraft details, route, altitude, ETA, fuel onboard, pilot info.</li>
                              <li><strong>Crucially:</strong> Remember to ACTIVATE your flight plan before departure (usually via FSS radio) and CLOSE it upon arrival (FSS radio or phone). Failure to close can trigger unnecessary SAR actions.</li>
                            </ul>
                          </CardContent>
                        </Card>
                     </div>
                   </div>
                    <div className="mt-8 aspect-[16/9] bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-800/30 rounded-lg flex items-center justify-center">
                       <div className="text-center p-4">
                         <p className="font-semibold text-indigo-800 dark:text-indigo-300">Putting It All Together</p>
                         <p className="text-xs text-indigo-600 dark:text-indigo-400">(Route, Checkpoints, Altitudes, Calculations, Filing)</p>
                       </div>
                    </div>
                 </section>
              </div>
            )}

            {currentTab === 'digitalCharts' && (
              <section className="space-y-8">
                 <h2 className="font-display text-2xl font-semibold mb-6">Digital Sectional Charts (EFBs)</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Electronic Flight Bags (EFBs) running aviation apps on tablets or dedicated devices have revolutionized
                  how pilots interact with sectional charts and other flight data.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div>
                     <h3 className="font-semibold text-xl mb-4">Advantages of Digital Charts</h3>
                     <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800/50">
                       <CardContent className="pt-6">
                          <ul className="list-check pl-5 space-y-2 text-sm">
                            <li><strong>Seamless Map:</strong> No folding/unfolding paper charts; entire US coverage available.</li>
                            <li><strong>GPS Integration:</strong> Real-time aircraft position ("ownship") displayed directly on the moving map.</li>
                            <li><strong>Automatic Updates:</strong> Charts and databases updated easily over Wi-Fi, ensuring currency.</li>
                            <li><strong>Decluttering/Layers:</strong> Ability to toggle map layers (airspace, terrain, weather radar, traffic) for clarity.</li>
                            <li><strong>Route Planning Tools:</strong> Easy route creation, rubber-banding, automatic calculations (distance, time, fuel).</li>
                            <li><strong>Information Access:</strong> Tap on airports, airspace, navaids for detailed information instantly (frequencies, runways, etc.).</li>
                            <li><strong>Weather Overlays:</strong> Integration with ADS-B or internet weather for graphical depiction (METARs, TAFs, Radar).</li>
                            <li><strong>Traffic Display:</strong> Integration with ADS-B In for real-time traffic awareness.</li>
                            <li><strong>Document Management:</strong> Store POH, checklists, Chart Supplements electronically.</li>
                          </ul>
                       </CardContent>
                     </Card>
                  </div>

                  <div>
                     <h3 className="font-semibold text-xl mb-4">Limitations and Considerations</h3>
                     <Card className="bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800/50">
                       <CardContent className="pt-6">
                          <ul className="list-disc pl-5 space-y-2 text-sm">
                            <li><strong>Battery Dependence:</strong> EFBs require power; battery failure is a significant risk. Always have backup power (power bank) and/or paper charts.</li>
                            <li><strong>Device Failure:</strong> Tablets can overheat, freeze, or break. Consider a backup EFB device or paper charts.</li>
                            <li><strong>GPS Signal Loss:</strong> While rare, GPS outages can occur. Maintain basic paper chart and pilotage/dead reckoning skills.</li>
                            <li><strong>Over-Reliance Risk:</strong> Don't become solely dependent on the "magenta line." Maintain situational awareness outside the EFB.</li>
                            <li><strong>Subscription Costs:</strong> Most EFB apps require subscriptions for chart and data updates.</li>
                            <li><strong>Learning Curve:</strong> Proficiency with the specific EFB app takes time and practice.</li>
                            <li><strong>Screen Glare:</strong> Sunlight readability can be an issue with some devices.</li>
                          </ul>
                       </CardContent>
                     </Card>
                  </div>
                </div>

                <div className="mt-8">
                   <h3 className="font-semibold text-xl mb-4">Staying Proficient and Current</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                       <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Zap className="h-5 w-5 text-primary" /> Mastering Your EFB</CardTitle>
                          </CardHeader>
                          <CardContent>
                             <p className="text-sm">Spend time on the ground learning all features of your chosen EFB app (ForeFlight, Garmin Pilot, etc.). Practice planning flights, using overlays, and accessing information efficiently.</p>
                          </CardContent>
                       </Card>
                       <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5 text-primary" /> Maintaining Paper Skills</CardTitle>
                          </CardHeader>
                          <CardContent>
                             <p className="text-sm">Don't neglect traditional navigation skills. Periodically plan and fly routes using only paper charts to maintain proficiency in case of EFB failure.</p>
                          </CardContent>
                       </Card>
                       <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Download className="h-5 w-5 text-primary" /> Preflight Downloads</CardTitle>
                          </CardHeader>
                          <CardContent>
                             <p className="text-sm">Always ensure charts, databases, and necessary documents for your flight area are downloaded and current *before* getting in the aircraft. Don't rely on inflight connectivity.</p>
                          </CardContent>
                       </Card>
                       <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Layers className="h-5 w-5 text-primary" /> Backup Strategy</CardTitle>
                          </CardHeader>
                          <CardContent>
                             <p className="text-sm">Have a clear backup plan: charged power bank, backup device (phone or second tablet), and/or current paper charts for your route.</p>
                          </CardContent>
                       </Card>
                    </div>
                </div>
              </section>
            )}

             <section className="mt-12 border-t pt-8">
               <h2 className="font-display text-2xl font-semibold mb-4">Conclusion: The Indispensable Chart</h2>
                <p className="text-lg mb-4">
                  Whether in paper or digital form, the Sectional Aeronautical Chart remains an indispensable tool for
                  VFR flight. Mastering its language unlocks a comprehensive understanding of the airspace, terrain,
                  and infrastructure critical for safe and efficient navigation.
                </p>
                <p className="mb-4">
                  Continuous practice, attention to detail, and staying current with chart updates are essential habits
                  for every pilot. Embrace the sectional not just as a map, but as a vital layer of situational
                  awareness in the dynamic environment of flight.
                </p>
                <div className="flex flex-wrap gap-4">
                   <Button>
                     Review Key Symbols <ExternalLink className="ml-2 h-4 w-4" />
                   </Button>
                   <Button variant="outline">
                     Take Practice Quiz <BookOpen className="ml-2 h-4 w-4" />
                   </Button>
                </div>
             </section>
          </div>

          <FundamentalsNavigation
            prevPage={prevPage}
            nextPage={nextPage}
            currentPageUrl={pathname}
          />

        </div>
      </div>
    </div>
  );
}

