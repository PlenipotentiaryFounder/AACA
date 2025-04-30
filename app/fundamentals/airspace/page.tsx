"use client"

import { useState } from "react"
import { MainHeader } from "@/components/main-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import GuidePageHeader from "@/components/guide/guide-page-header"
import {
  ChevronLeft,
  ChevronRight,
  Map,
  Radio,
  Plane,
  AlertTriangle,
  BookOpen,
  ExternalLink,
  Download,
  Share2,
  Bookmark,
  Printer,
  Shield,
  Layers,
  Zap,
  Eye,
  Info,
  CloudSun,
  Compass,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs as ClassTabs, TabsContent as ClassTabsContent, TabsList as ClassTabsList, TabsTrigger as ClassTabsTrigger } from "@/components/ui/tabs"
import { Tabs as ChartTabs, TabsContent as ChartTabsContent, TabsList as ChartTabsList, TabsTrigger as ChartTabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PremiumTabs } from "@/components/premium-tabs"
import { FundamentalsNavigation } from "@/components/fundamentals-navigation"
import { usePathname } from 'next/navigation'

export default function AirspacePage() {
  const pathname = usePathname()
  const [currentTab, setCurrentTab] = useState("classes")

  const tabs = [
    { value: 'intro', label: 'Introduction', icon: <Info className="h-4 w-4" /> },
    { value: 'classes', label: 'Classes', icon: <Layers className="h-4 w-4" /> },
    { value: 'wx-mins', label: 'Weather Minimums', icon: <CloudSun className="h-4 w-4" /> },
    { value: 'sua', label: 'Special Use', icon: <AlertTriangle className="h-4 w-4" /> },
    { value: 'charts', label: 'Sectional Charts', icon: <Map className="h-4 w-4" /> },
    { value: 'atc', label: 'ATC Comms', icon: <Radio className="h-4 w-4" /> },
    { value: 'tips', label: 'Navigation Tips', icon: <Compass className="h-4 w-4" /> }
  ]

  const prevPage = { name: "Basic Aerodynamics", url: "/fundamentals/aerodynamics" };
  const nextPage = { name: "Weather Basics", url: "/fundamentals/weather" };

  return (
    <div className="py-8 px-4 md:px-6 lg:px-8">
      <GuidePageHeader
        chapter="Fundamentals"
        title="Understanding Airspace"
      />

      <div className="space-y-8">
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-aa-navy to-aa-blue text-white">
          <div className="absolute inset-0 bg-[url('/images/airspace-layers-sectional-chart.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div className="relative z-10 px-6 py-12 md:py-16 md:px-10">
            <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">
              Training Fundamentals
            </Badge>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Airspace Navigation
            </h1>
            <p className="text-xl text-white/80 mb-6 max-w-2xl">Mastering the National Airspace System</p>
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
            <div className="w-full h-full bg-[url('/images/control-tower-sunset.jpg')] bg-contain bg-no-repeat"></div>
          </div>
        </section>

        <PremiumTabs
          tabs={tabs}
          currentValue={currentTab}
          onChange={setCurrentTab}
          defaultValue="classes"
          title="Airspace Topics"
        />

        <div className="pt-8">
          {currentTab === 'intro' && (
            <section className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead">
                The National Airspace System (NAS) is a complex network of people, procedures, and equipment designed
                to ensure the safe and efficient movement of aircraft. Understanding airspace is fundamental to safe
                flying.
              </p>

              <p>
                As a pilot, you'll need to navigate through different types of airspace, each with its own rules,
                requirements, and restrictions. Mastering airspace navigation is not just about passing your knowledge
                test—it's about developing the situational awareness that keeps you and others safe.
              </p>

              <div className="bg-muted rounded-xl p-6 my-6 border-l-4 border-primary">
                <h3 className="text-xl font-semibold mb-3">Why Airspace Knowledge Matters</h3>
                <p className="mb-0">Understanding airspace helps you:</p>
                <ul className="mt-2 mb-0 list-disc pl-6">
                  <li>Avoid airspace violations and potential FAA enforcement actions</li>
                  <li>Navigate safely around controlled and special use airspace</li>
                  <li>Know when ATC communication is required</li>
                  <li>Understand weather minimums for different airspace classes</li>
                  <li>Plan flights more efficiently and safely</li>
                </ul>
              </div>
              <p>Let's explore the different classifications and requirements.</p>
            </section>
          )}

          {currentTab === 'classes' && (
            <section>
              <h2 className="font-display text-2xl font-semibold mb-6">The Airspace Classification System</h2>
              <p className="text-lg text-muted-foreground mb-6">
                The FAA divides airspace into six classes (A, B, C, D, E, and G), each with specific rules and
                requirements. Understanding these classes is essential for safe navigation.
              </p>
              
              <ClassTabs defaultValue="controlled" className="w-full">
                <ClassTabsList className="grid grid-cols-1 sm:grid-cols-2 mb-6">
                  <ClassTabsTrigger value="controlled" className="flex items-center gap-2">
                    <Shield className="h-4 w-4" /> Controlled Airspace
                  </ClassTabsTrigger>
                  <ClassTabsTrigger value="uncontrolled" className="flex items-center gap-2">
                    <Plane className="h-4 w-4" /> Uncontrolled Airspace
                  </ClassTabsTrigger>
                </ClassTabsList>

                <ClassTabsContent value="controlled" className="border rounded-xl p-6 bg-card">
                  <h3 className="font-display text-xl font-semibold mb-4">
                    Controlled Airspace (Classes A, B, C, D, E)
                  </h3>
                  <p className="mb-6">
                    Controlled airspace is designated airspace where ATC provides separation services to IFR aircraft
                    and, in some cases, to VFR aircraft. The level of control varies by class.
                  </p>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="hover-card-effect border-t-4 border-t-red-500">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2">
                          <Badge className="bg-red-500">A</Badge> Class A
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          <li>18,000 MSL to FL600</li>
                          <li>IFR flights only</li>
                          <li>ATC clearance required</li>
                          <li>All aircraft must be on IFR flight plan</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="hover-card-effect border-t-4 border-t-blue-500">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2">
                          <Badge className="bg-blue-500">B</Badge> Class B
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          <li>Surface to 10,000 MSL (typically)</li>
                          <li>Inverted wedding cake shape</li>
                          <li>ATC clearance required</li>
                          <li>Mode C transponder required</li>
                          <li>Busiest airports (e.g., DFW, ORD)</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="hover-card-effect border-t-4 border-t-purple-500">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2">
                          <Badge className="bg-purple-500">C</Badge> Class C
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          <li>Surface to 4,000 AGL (typically)</li>
                          <li>Two-tiered structure</li>
                          <li>Two-way communication required</li>
                          <li>Mode C transponder required</li>
                          <li>Medium-sized airports</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="hover-card-effect border-t-4 border-t-blue-400">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2">
                          <Badge className="bg-blue-400">D</Badge> Class D
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          <li>Surface to 2,500 AGL (typically)</li>
                          <li>Cylindrical shape</li>
                          <li>Two-way communication required</li>
                          <li>Smaller airports with control towers</li>
                          <li>No separation services for VFR</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="hover-card-effect border-t-4 border-t-blue-300">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2">
                          <Badge className="bg-blue-300">E</Badge> Class E
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          <li>Various configurations</li>
                          <li>No two-way communication required for VFR</li>
                          <li>ATC separation for IFR only</li>
                          <li>Different weather minimums than Class G</li>
                          <li>Most common controlled airspace</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </ClassTabsContent>

                <ClassTabsContent value="uncontrolled" className="border rounded-xl p-6 bg-card">
                  <h3 className="font-display text-xl font-semibold mb-4">Uncontrolled Airspace (Class G)</h3>
                  <p className="mb-6">
                    Class G airspace is the portion of the airspace that has not been designated as Class A, B, C, D,
                    or E. ATC has no authority or responsibility to control air traffic here, but pilots must still
                    adhere to VFR weather minimums.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                     <div>
                       <h4 className="font-medium mb-2">Characteristics:</h4>
                       <ul className="list-disc pl-5 text-sm space-y-1">
                         <li>Typically extends from surface to base of overlying controlled airspace</li>
                         <li>No communication or equipment requirements for VFR</li>
                         <li>VFR weather minimums are generally less restrictive than controlled airspace</li>
                         <li>Found primarily in rural areas away from major airports</li>
                       </ul>
                     </div>
                     <div className="bg-muted/30 rounded-lg p-4 flex items-center justify-center">
                       <div className="w-full h-48 bg-[url('/images/rural-airfield-hangar.jpg')] bg-contain bg-center bg-no-repeat"></div>
                     </div>
                   </div>
                </ClassTabsContent>
              </ClassTabs>
            </section>
          )}

          {currentTab === 'wx-mins' && (
             <section>
               <h2 className="font-display text-2xl font-semibold mb-6">VFR Weather Minimums</h2>
               <p className="text-lg text-muted-foreground mb-6">
                 Visual Flight Rules (VFR) require pilots to maintain specific minimum flight visibility and distance
                 from clouds depending on the airspace class and altitude.
               </p>
               <div className="overflow-x-auto rounded-lg border bg-card">
                 <table className="w-full text-sm">
                   <thead className="bg-muted/50">
                     <tr className="border-b">
                       <th className="p-3 text-left font-semibold">Airspace</th>
                       <th className="p-3 text-left font-semibold">Altitude</th>
                       <th className="p-3 text-left font-semibold">Visibility</th>
                       <th className="p-3 text-left font-semibold">Cloud Clearance</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr className="border-b">
                       <td className="p-3 font-medium">Class B</td>
                       <td className="p-3">All</td>
                       <td className="p-3">3 SM</td>
                       <td className="p-3">Clear of Clouds</td>
                     </tr>
                     <tr className="border-b">
                       <td className="p-3 font-medium" rowSpan={2}>Class C / D / E</td>
                       <td className="p-3">Below 10,000' MSL</td>
                       <td className="p-3">3 SM</td>
                       <td className="p-3">500' below, 1,000' above, 2,000' horizontal</td>
                     </tr>
                     <tr className="border-b">
                       <td className="p-3">At or above 10,000' MSL</td>
                       <td className="p-3">5 SM</td>
                       <td className="p-3">1,000' below, 1,000' above, 1 SM horizontal</td>
                     </tr>
                     <tr className="border-b">
                       <td className="p-3 font-medium" rowSpan={4}>Class G</td>
                       <td className="p-3">1,200' AGL or less (Day)</td>
                       <td className="p-3">1 SM</td>
                       <td className="p-3">Clear of Clouds</td>
                     </tr>
                     <tr className="border-b">
                       <td className="p-3">1,200' AGL or less (Night)</td>
                       <td className="p-3">3 SM</td>
                       <td className="p-3">500' below, 1,000' above, 2,000' horizontal</td>
                     </tr>
                     <tr className="border-b">
                       <td className="p-3">More than 1,200' AGL but below 10,000' MSL (Day)</td>
                       <td className="p-3">1 SM</td>
                       <td className="p-3">500' below, 1,000' above, 2,000' horizontal</td>
                     </tr>
                     <tr>
                       <td className="p-3">More than 1,200' AGL and at/above 10,000' MSL</td>
                       <td className="p-3">5 SM</td>
                       <td className="p-3">1,000' below, 1,000' above, 1 SM horizontal</td>
                     </tr>
                   </tbody>
                 </table>
               </div>
               <div className="mt-6 bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30">
                 <p className="text-sm text-yellow-800 dark:text-yellow-300">
                   <strong>Note:</strong> These are FAA minimums. Personal minimums should often be higher based on
                   experience, proficiency, and aircraft capability. Always check current regulations.
                 </p>
               </div>
             </section>
          )}

           {currentTab === 'sua' && (
             <section>
               <h2 className="font-display text-2xl font-semibold mb-6">Special Use Airspace (SUA)</h2>
               <p className="text-lg text-muted-foreground mb-6">
                 SUA consists of airspace where certain activities must be confined, or where limitations are imposed
                 on aircraft operations that are not part of those activities.
               </p>
               <Accordion type="multiple" className="w-full space-y-3">
                 <AccordionItem value="prohibited">
                   <AccordionTrigger className="font-medium bg-card border rounded-lg px-4 py-3 hover:bg-muted/50 data-[state=open]:bg-muted/50 transition-colors">
                     Prohibited Areas (P-###)
                   </AccordionTrigger>
                   <AccordionContent className="p-4 text-sm bg-card border border-t-0 rounded-b-lg">
                     Flight is prohibited for national security reasons (e.g., White House).
                   </AccordionContent>
                 </AccordionItem>

                 <AccordionItem value="restricted">
                   <AccordionTrigger className="font-medium bg-card border rounded-lg px-4 py-3 hover:bg-muted/50 data-[state=open]:bg-muted/50 transition-colors">
                     Restricted Areas (R-###)
                   </AccordionTrigger>
                   <AccordionContent className="p-4 text-sm bg-card border border-t-0 rounded-b-lg">
                     Contains unusual, often invisible hazards (e.g., artillery firing). Permission from
                     controlling agency required to enter when active.
                   </AccordionContent>
                 </AccordionItem>

                 <AccordionItem value="warning">
                   <AccordionTrigger className="font-medium bg-card border rounded-lg px-4 py-3 hover:bg-muted/50 data-[state=open]:bg-muted/50 transition-colors">
                     Warning Areas (W-###)
                   </AccordionTrigger>
                   <AccordionContent className="p-4 text-sm bg-card border border-t-0 rounded-b-lg">
                     Extends from 3 NM outward from the coast. Contains hazards similar to Restricted Areas, but
                     over international waters.
                   </AccordionContent>
                 </AccordionItem>

                 <AccordionItem value="moa">
                   <AccordionTrigger className="font-medium bg-card border rounded-lg px-4 py-3 hover:bg-muted/50 data-[state=open]:bg-muted/50 transition-colors">
                     Military Operations Areas (MOA)
                   </AccordionTrigger>
                   <AccordionContent className="p-4 text-sm bg-card border border-t-0 rounded-b-lg">
                     Established to separate certain military training activities from IFR traffic. VFR pilots can
                     fly through but should exercise extreme caution.
                   </AccordionContent>
                 </AccordionItem>

                 <AccordionItem value="alert">
                   <AccordionTrigger className="font-medium bg-card border rounded-lg px-4 py-3 hover:bg-muted/50 data-[state=open]:bg-muted/50 transition-colors">
                     Alert Areas (A-###)
                   </AccordionTrigger>
                   <AccordionContent className="p-4 text-sm bg-card border border-t-0 rounded-b-lg">
                     Depicts areas with high volume of pilot training or unusual aerial activity. Pilots should be
                     extra vigilant.
                   </AccordionContent>
                 </AccordionItem>

                 <AccordionItem value="cfa">
                   <AccordionTrigger className="font-medium bg-card border rounded-lg px-4 py-3 hover:bg-muted/50 data-[state=open]:bg-muted/50 transition-colors">
                     Controlled Firing Areas (CFA)
                   </AccordionTrigger>
                   <AccordionContent className="p-4 text-sm bg-card border border-t-0 rounded-b-lg">
                     Contains activities that could be hazardous. Activities are suspended immediately when an
                     aircraft might be approaching. Not depicted on charts.
                   </AccordionContent>
                 </AccordionItem>

                 <AccordionItem value="tfr">
                   <AccordionTrigger className="font-medium bg-card border rounded-lg px-4 py-3 hover:bg-muted/50 data-[state=open]:bg-muted/50 transition-colors">
                     Temporary Flight Restrictions (TFR)
                   </AccordionTrigger>
                   <AccordionContent className="p-4 text-sm bg-card border border-t-0 rounded-b-lg">
                     Issued via NOTAM to restrict flight in certain areas for temporary periods (e.g., VIP
                     movement, major events, disasters).
                   </AccordionContent>
                 </AccordionItem>
               </Accordion>
             </section>
          )}

           {currentTab === 'charts' && (
             <section>
               <h2 className="font-display text-2xl font-semibold mb-6">Sectional Chart Interpretation</h2>
               <p className="text-lg text-muted-foreground mb-6">
                 Sectional Aeronautical Charts are the primary navigation reference for VFR pilots. Understanding the
                 symbology is critical.
               </p>

               <ChartTabs defaultValue="colors" className="w-full">
                 <ChartTabsList className="grid grid-cols-2 sm:grid-cols-4 mb-6">
                   <ChartTabsTrigger value="colors">Colors & Symbols</ChartTabsTrigger>
                   <ChartTabsTrigger value="features">Features & Landmarks</ChartTabsTrigger>
                   <ChartTabsTrigger value="legend">Legend & Scale</ChartTabsTrigger>
                   <ChartTabsTrigger value="airports">Airports</ChartTabsTrigger>
                 </ChartTabsList>

                 <ChartTabsContent value="colors">
                   <h3 className="font-semibold mb-4">Airspace Colors and Symbols</h3>
                   <div className="grid md:grid-cols-2 gap-6">
                     <div>
                       <p className="text-sm mb-4">
                         Different airspace classes are depicted with specific colors and lines:
                       </p>
                       <ul className="list-disc pl-5 text-sm space-y-1">
                         <li>
                           <strong>Class B:</strong> Solid blue lines
                         </li>
                         <li>
                           <strong>Class C:</strong> Solid magenta lines
                         </li>
                         <li>
                           <strong>Class D:</strong> Dashed blue lines (height in MSL inside brackets)
                         </li>
                         <li>
                           <strong>Class E (Surface):</strong> Dashed magenta lines
                         </li>
                         <li>
                           <strong>Class E (700' AGL floor):</strong> Shaded magenta vignette
                         </li>
                         <li>
                           <strong>Class E (1200' AGL floor):</strong> Shaded blue vignette
                         </li>
                         <li>
                           <strong>Class G:</strong> Undepicted below overlying Class E
                         </li>
                       </ul>
                     </div>
                     <div className="bg-muted/30 rounded-lg p-4 flex items-center justify-center">
                       <div className="w-full h-48 bg-[url('/images/sectional-chart-class-b-closeup.jpg')] bg-contain bg-center bg-no-repeat"></div>
                     </div>
                   </div>
                 </ChartTabsContent>

                 <ChartTabsContent value="features">
                   <h3 className="font-semibold mb-4">Chart Features and Landmarks</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                     <div>
                       <p className="text-sm mb-4">
                         Charts include topographical features and man-made landmarks for visual navigation:
                       </p>
                       <ul className="list-disc pl-5 text-sm space-y-1">
                         <li>Cities and towns (yellow shapes)</li>
                         <li>Roads, railways, power lines</li>
                         <li>Rivers, lakes, coastlines</li>
                         <li>Obstructions (towers, antennas) with height AGL and MSL</li>
                         <li>Maximum Elevation Figures (MEF) for each quadrant</li>
                         <li>Terrain contours and elevation shading</li>
                       </ul>
                     </div>
                     <div className="bg-muted/30 rounded-lg p-4 flex items-center justify-center">
                        <div className="w-full h-48 bg-[url('/images/sectional-chart-landmarks.jpg')] bg-contain bg-center bg-no-repeat"></div>
                     </div>
                   </div>
                 </ChartTabsContent>

                 <ChartTabsContent value="legend">
                   <h3 className="font-semibold mb-4">Chart Legend and Scale</h3>
                   <div className="grid md:grid-cols-2 gap-6">
                     <div>
                       <p className="text-sm mb-4">
                         Always refer to the chart legend for detailed explanations of all symbols.
                       </p>
                       <ul className="list-disc pl-5 text-sm space-y-1">
                         <li>
                           <strong>Scale:</strong> 1:500,000 (1 inch = approx. 8 statute miles)
                         </li>
                         <li>Legend explains airport data, radio frequencies, navaids, etc.</li>
                         <li>Includes information on Special Use Airspace frequencies and times</li>
                         <li>Crucial for understanding unfamiliar symbols</li>
                       </ul>
                     </div>
                     <div className="bg-muted/30 rounded-lg p-4 flex items-center justify-center">
                       <div className="w-full h-48 bg-[url('/images/sectional-chart-legend-closeup.jpg')] bg-contain bg-center bg-no-repeat"></div>
                     </div>
                   </div>
                 </ChartTabsContent>

                 <ChartTabsContent value="airports">
                   <h3 className="font-semibold mb-4">Airport Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                     <div>
                       <p className="text-sm mb-4">
                         Detailed airport information is depicted using standardized symbols:
                       </p>
                       <ul className="list-disc pl-5 text-sm space-y-1">
                         <li>Runway layout and length (longest runway)</li>
                         <li>Airport elevation</li>
                         <li>Lighting availability (L symbol)</li>
                         <li>Control Tower frequency (CTAF denoted by C)</li>
                         <li>Weather reporting services (AWOS/ASOS)</li>
                         <li>Fuel availability</li>
                         <li>Hard surface vs. soft surface runways</li>
                       </ul>
                     </div>
                     <div className="bg-muted/30 rounded-lg p-4 flex items-center justify-center">
                        <p className="text-center text-muted-foreground italic">[Airport Data Block Example]</p>
                     </div>
                   </div>
                 </ChartTabsContent>
               </ChartTabs>
             </section>
           )}

          {currentTab === 'atc' && (
            <section>
              <h2 className="font-display text-2xl font-semibold mb-6">ATC Communication and Flight Following</h2>
              <p className="text-lg text-muted-foreground mb-6">
                While not always required for VFR flight, communicating with Air Traffic Control (ATC) significantly
                enhances safety.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="hover-card-effect">
                  <CardHeader>
                    <CardTitle>Communication Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>Class A, B:</strong> Required before entry.
                      </li>
                      <li>
                        <strong>Class C, D:</strong> Required before entering airspace (establish two-way comms).
                      </li>
                      <li>
                        <strong>Class E, G:</strong> Not required for VFR unless specific airport procedures apply.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="hover-card-effect">
                  <CardHeader>
                    <CardTitle>VFR Flight Following</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">
                      A workload-permitting service where ATC provides traffic advisories to VFR aircraft.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Highly recommended, especially in busy airspace or marginal VFR</li>
                      <li>Request from ATC (Approach, Center)</li>
                      <li>Requires transponder with Mode C (altitude reporting)</li>
                      <li>Enhances situational awareness but does not guarantee separation</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
               <div className="mt-6 bg-primary/5 p-6 rounded-lg border border-primary/20">
                 <h4 className="font-semibold text-primary mb-2">Pilot Responsibility</h4>
                 <p className="text-sm text-muted-foreground">
                   Even with flight following, the pilot is still responsible for seeing and avoiding other
                   aircraft and maintaining appropriate VFR cloud clearances and visibility.
                 </p>
               </div>
            </section>
          )}

           {currentTab === 'tips' && (
             <section>
               <h2 className="font-display text-2xl font-semibold mb-6">Practical Airspace Navigation Tips</h2>
               <p className="text-lg text-muted-foreground mb-6">
                 Applying your knowledge effectively is key to safe navigation.
               </p>
               <div className="space-y-6">
                  <Card className="bg-card/50">
                   <CardContent className="p-4 flex items-start gap-4">
                     <div className="rounded-full bg-primary/10 text-primary p-2 mt-1">
                       <Map className="h-5 w-5" />
                     </div>
                     <div>
                       <h4 className="font-semibold mb-1">Thorough Preflight Planning</h4>
                       <p className="text-sm text-muted-foreground">
                         Review charts, identify airspace boundaries along your route, check NOTAMs for TFRs and SUA
                         status, and note required frequencies.
                       </p>
                     </div>
                   </CardContent>
                 </Card>

                 <Card className="bg-card/50">
                   <CardContent className="p-4 flex items-start gap-4">
                     <div className="rounded-full bg-primary/10 text-primary p-2 mt-1">
                       <Eye className="h-5 w-5" />
                     </div>
                     <div>
                       <h4 className="font-semibold mb-1">Maintain Situational Awareness</h4>
                       <p className="text-sm text-muted-foreground">
                         Know your position relative to airspace boundaries at all times. Use GPS, VORs, and visual
                         landmarks. Monitor appropriate frequencies.
                       </p>
                     </div>
                   </CardContent>
                 </Card>

                 <Card className="bg-card/50">
                   <CardContent className="p-4 flex items-start gap-4">
                     <div className="rounded-full bg-primary/10 text-primary p-2 mt-1">
                       <Radio className="h-5 w-5" />
                     </div>
                     <div>
                       <h4 className="font-semibold mb-1">Communicate Clearly and Early</h4>
                       <p className="text-sm text-muted-foreground">
                         If entering controlled airspace requiring communication, establish contact early. Use standard
                         phraseology. Don't hesitate to ask ATC for clarification.
                       </p>
                     </div>
                   </CardContent>
                 </Card>

                 <Card className="bg-card/50">
                   <CardContent className="p-4 flex items-start gap-4">
                     <div className="rounded-full bg-primary/10 text-primary p-2 mt-1">
                       <Shield className="h-5 w-5" />
                     </div>
                     <div>
                       <h4 className="font-semibold mb-1">Respect Boundaries</h4>
                       <p className="text-sm text-muted-foreground">
                         Avoid entering restricted airspace without permission. Be cautious near MOAs and Alert Areas.
                         Give yourself a buffer zone around Class B/C/D airspace if not communicating.
                       </p>
                     </div>
                   </CardContent>
                 </Card>

                 <Card className="bg-card/50">
                   <CardContent className="p-4 flex items-start gap-4">
                     <div className="rounded-full bg-primary/10 text-primary p-2 mt-1">
                       <AlertTriangle className="h-5 w-5" />
                     </div>
                     <div>
                       <h4 className="font-semibold mb-1">Have Backup Plans</h4>
                       <p className="text-sm text-muted-foreground">
                         If weather deteriorates or you're unsure of your position, have alternate routes or
                         diversion airports planned, especially avoiding complex airspace.
                       </p>
                     </div>
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
  )
}

