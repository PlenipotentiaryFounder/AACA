"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PremiumTabs } from "@/components/premium-tabs";
import GuidePageHeader from "@/components/guide/guide-page-header";
import {
  Gauge, // ASI
  TrendingUp, // VSI
  Milestone, // Altimeter
  Atom, // Gyro
  LocateFixed, // AI
  Compass, // HI
  Replace, // Turn Coordinator
  Info,
  RadioTower,
  ScreenShare, // Glass Cockpit
  AlertTriangle,
} from "lucide-react";
import { usePathname } from 'next/navigation';
import { FundamentalsNavigation } from '@/components/fundamentals-navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


export default function FlightInstrumentsPage() {
  const pathname = usePathname();
  const [currentTab, setCurrentTab] = useState('introduction');

  const tabs = [
    { value: 'introduction', label: 'Introduction', icon: <Info className="h-5 w-5" /> },
    { value: 'pitot-static', label: 'Pitot-Static', icon: <RadioTower className="h-5 w-5" /> },
    { value: 'gyroscopic', label: 'Gyroscopic', icon: <Atom className="h-5 w-5" /> },
    { value: 'systems', label: 'Systems & Glass', icon: <ScreenShare className="h-5 w-5" /> },
  ];

  // TODO: Update these based on the actual previous/next pages in the sidebar order
  const prevPage = { name: "Aircraft Systems", url: "/fundamentals/aircraft-systems" };
  const nextPage = { name: "Risk Management", url: "/fundamentals/risk-management" };

  return (
    <div className="py-8 px-4 md:px-6 lg:px-8">
      <GuidePageHeader
        chapter="Fundamentals"
        title="Flight Instruments"
        description="Understanding the gauges that provide your window into the aircraft's state and performance."
        audioSrc=""
        trackTitle=""
      />

      <div className="space-y-8 mt-8">
        <PremiumTabs
          tabs={tabs}
          defaultValue="introduction"
          onChange={setCurrentTab}
          currentValue={currentTab}
          title="Flight Instrument Topics"
        />

        <div className="pt-6">
          {currentTab === 'introduction' && (
            <section className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead">
                Imagine driving a car with the windows blacked out and no dashboard—no speedometer, no gas gauge, no GPS. That's what flying would be like without instruments.
              </p>
              <p>
                Whether you're in a classic "six-pack" cockpit or a sleek G1000-equipped aircraft, flight instruments are how pilots perceive the state of the aircraft and its movement through space. Understanding them is non-negotiable. They provide critical information about airspeed, altitude, direction, attitude, and vertical speed, forming the foundation for safe and precise control.
              </p>

              <h2 className="font-display text-2xl font-semibold mt-8 mb-4">Two Common Instrument Setups</h2>
              <p>
                There are two primary types of cockpit instrumentation you'll encounter in flight training:
              </p>
              <div className="grid gap-6 md:grid-cols-2 mt-4">
                 <Card>
                   <CardHeader><CardTitle>1. Analog "Six-Pack" (Round Dials)</CardTitle></CardHeader>
                   <CardContent><p>Common in older aircraft like early-model Cessnas and Pipers. Features individual round gauges for each primary instrument.</p></CardContent>
                 </Card>
                 <Card>
                   <CardHeader><CardTitle>2. Glass Cockpit (G1000 or similar)</CardTitle></CardHeader>
                   <CardContent><p>Found in modern trainers. Digital screens (PFD/MFD) replace analog dials, integrating multiple data points, but the core information remains the same.</p></CardContent>
                 </Card>
              </div>
              <p className="mt-6">
                Whichever system you train on, the fundamental principles and the data presented are identical. Mastering the information is key, regardless of the display format.
              </p>

              <h2 className="font-display text-2xl font-semibold mt-8 mb-4">The "Core 6" Flight Instruments</h2>
              <p>
                These six instruments, often arranged in a standard "T" configuration in analog panels, give you the essential information for flight. They are grouped into two main systems based on how they operate: Pitot-Static and Gyroscopic.
              </p>
            </section>
          )}

          {currentTab === 'pitot-static' && (
            <section className="space-y-8">
              <h2 className="font-display text-2xl font-semibold mb-6">Pitot-Static Instruments (Driven by Air Pressure)</h2>
              <p className="text-lg text-muted-foreground mb-6">
                This system relies on measuring air pressure differences to determine airspeed, altitude, and vertical speed. It uses the pitot tube and static port(s).
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="hover-card-effect">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Gauge className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>1. Airspeed Indicator (ASI)</CardTitle>
                    </div>
                    <CardDescription>Tells you how fast the airplane is moving through the air (indicated airspeed - IAS).</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p><strong>How it Works:</strong> Measures the difference between dynamic pressure (ram air from pitot tube) and static pressure (from static port).</p>
                    <p><strong>Why it Matters:</strong> Critical for all phases of flight. Determines takeoff/landing speeds, climb/cruise performance, and stall avoidance. Operating outside safe speed ranges (indicated by color arcs) can lead to stalls or structural damage.</p>
                    <div>
                      <strong>Color Bands (Typical):</strong>
                      <ul className="list-disc pl-5 mt-1">
                        <li><strong>White Arc:</strong> Flap Operating Range (V<sub>SO</sub> bottom, V<sub>FE</sub> top).</li>
                        <li><strong>Green Arc:</strong> Normal Operating Range (V<sub>S1</sub> bottom, V<sub>NO</sub> top).</li>
                        <li><strong>Yellow Arc:</strong> Caution Range (Smooth air only).</li>
                        <li><strong>Red Line:</strong> Never Exceed Speed (V<sub>NE</sub>).</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover-card-effect">
                   <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                           <Milestone className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle>2. Altimeter</CardTitle>
                      </div>
                      <CardDescription>Measures your aircraft's height above Mean Sea Level (MSL).</CardDescription>
                   </CardHeader>
                   <CardContent className="text-sm space-y-2">
                      <p><strong>How it Works:</strong> Contains an aneroid barometer that expands/contracts based on static pressure from the static port. Lower pressure = higher altitude.</p>
                      <p><strong>Why it Matters:</strong> Essential for terrain/obstacle clearance, adhering to airspace altitudes, and following ATC instructions. Must be set to the local barometric pressure (obtained from ATIS/ASOS/AWOS or ATC) for accurate readings.</p>
                   </CardContent>
                </Card>
                 <Card className="hover-card-effect">
                   <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                           <TrendingUp className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle>3. Vertical Speed Indicator (VSI)</CardTitle>
                      </div>
                      <CardDescription>Indicates the rate of climb or descent in feet per minute (FPM).</CardDescription>
                   </CardHeader>
                   <CardContent className="text-sm space-y-2">
                     <p><strong>How it Works:</strong> Uses static pressure but incorporates a calibrated leak. Measures the rate of change of static pressure.</p>
                     <p><strong>Why it Matters:</strong> Helps establish and maintain a desired rate of climb or descent, crucial for level-offs, approaches, and maintaining altitude stability. Note: Shows a trend, lags slightly behind actual vertical speed changes.</p>
                   </CardContent>
                 </Card>
              </div>
            </section>
          )}

          {currentTab === 'gyroscopic' && (
             <section className="space-y-8">
               <h2 className="font-display text-2xl font-semibold mb-6">Gyroscopic Instruments (Driven by Spinning Gyros)</h2>
               <p className="text-lg text-muted-foreground mb-6">
                 These instruments rely on the principle of rigidity in space—a spinning gyroscope resists changes to its orientation. They are typically powered by a vacuum system or electricity.
               </p>
               <div className="grid gap-6 md:grid-cols-3">
                 <Card className="hover-card-effect">
                   <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                           <LocateFixed className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle>4. Attitude Indicator (AI)</CardTitle>
                      </div>
                      <CardDescription>Displays the aircraft's pitch (nose up/down) and bank (roll left/right) relative to the horizon.</CardDescription>
                   </CardHeader>
                   <CardContent className="text-sm space-y-2">
                      <p><strong>How it Works:</strong> A gyroscope spins on a horizontal plane, remaining fixed relative to the Earth's horizon. The aircraft symbol moves relative to this fixed gyro display.</p>
                      <p><strong>Why it Matters:</strong> The primary instrument for attitude flying, especially in instrument meteorological conditions (IMC) or low visibility. Provides immediate feedback on pitch and bank.</p>
                   </CardContent>
                 </Card>
                 <Card className="hover-card-effect">
                    <CardHeader>
                       <div className="flex items-center gap-3 mb-2">
                         <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Compass className="h-5 w-5 text-primary" />
                         </div>
                         <CardTitle>5. Heading Indicator (HI)</CardTitle>
                       </div>
                       <CardDescription>Also known as Directional Gyro (DG). Displays the aircraft's heading based on a 360° azimuth.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm space-y-2">
                       <p><strong>How it Works:</strong> A gyroscope provides a stable directional reference, free from the turning/acceleration errors of the magnetic compass.</p>
                       <p><strong>Why it Matters:</strong> Primary instrument for maintaining and turning to specific headings. Due to precession (gyro drift), it must be periodically realigned with the magnetic compass (typically every 15 minutes).</p>
                    </CardContent>
                  </Card>
                  <Card className="hover-card-effect">
                     <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                             <Replace className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle>6. Turn Coordinator</CardTitle>
                        </div>
                        <CardDescription>Indicates the rate and quality (coordination) of a turn.</CardDescription>
                     </CardHeader>
                     <CardContent className="text-sm space-y-2">
                        <p><strong>How it Works:</strong> Shows rate of turn via the miniature aircraft/symbol deflection. The inclinometer (ball) indicates coordination: "step on the ball" to center it (use rudder in the direction the ball is deflected).</p>
                        <p><strong>Why it Matters:</strong> Essential for making standard rate turns (3°/second), required for instrument procedures. Also crucial for maintaining coordinated flight, avoiding slips/skids, which improves efficiency and safety (especially at low speeds).</p>
                     </CardContent>
                   </Card>
               </div>
             </section>
           )}

           {currentTab === 'systems' && (
             <section className="space-y-8">
               <h2 className="font-display text-2xl font-semibold mb-6">Instrument Systems & Modern Cockpits</h2>

               <Card>
                 <CardHeader>
                   <CardTitle>The Pitot-Static System Explained</CardTitle>
                   <CardDescription>How ram air and static pressure create essential flight data.</CardDescription>
                 </CardHeader>
                 <CardContent className="prose prose-sm dark:prose-invert max-w-none">
                    <p>The pitot-static system is fundamental to the ASI, Altimeter, and VSI. It works by comparing pressures:</p>
                    <ul>
                      <li><strong>Pitot Tube:</strong> Faces forward, capturing total pressure (static + dynamic/ram air pressure). Connected only to the ASI.</li>
                      <li><strong>Static Port(s):</strong> Usually flush-mounted on the fuselage side(s), sensing undisturbed ambient (static) air pressure. Connected to ASI, Altimeter, and VSI.</li>
                    </ul>
                    <p>The ASI diaphragm expands/contracts based on the difference between pitot and static pressure. The Altimeter's aneroid wafers expand/contract based solely on static pressure. The VSI measures the rate of change in static pressure via a calibrated leak.</p>
                    <div className="mt-4 p-4 rounded-md bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50">
                      <h4 className="font-semibold text-red-700 dark:text-red-300 flex items-center"><AlertTriangle className="h-4 w-4 mr-2"/> Critical: Blockages & Preflight</h4>
                      <p className="mt-2">A blocked pitot tube (e.g., ice, insects, pitot cover left on) causes the ASI to act like an altimeter (reading high in climb, low in descent). A blocked static port causes the Altimeter to freeze, the VSI to read zero, and the ASI to read inaccurately (low in climb, high in descent). **Thorough preflight inspection of ports and tube openings is mandatory.** An alternate static source might be available but can introduce small errors.</p>
                    </div>
                 </CardContent>
               </Card>

               <Card>
                  <CardHeader>
                    <CardTitle>Glass Cockpits: Integration & Advantages</CardTitle>
                    <CardDescription>Understanding Primary Flight Displays (PFD) and Multi-Function Displays (MFD).</CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-sm dark:prose-invert max-w-none">
                     <p>Modern "glass cockpits" like the Garmin G1000 replace individual gauges with large LCD screens, integrating data from various sensors (Air Data Computer, AHRS, GPS, etc.).</p>
                     <ul>
                       <li><strong>PFD (Primary Flight Display):</strong> Combines the "Core 6" instruments (attitude, airspeed, altitude, vertical speed, heading, turn coordination) into a single, intuitive display directly in front of the pilot.</li>
                       <li><strong>MFD (Multi-Function Display):</strong> Typically located to the side, displays navigation maps, engine instruments, checklists, weather data, traffic information, terrain awareness, and more.</li>
                     </ul>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 rounded-md bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/50">
                           <h4 className="font-semibold text-green-700 dark:text-green-300">Advantages</h4>
                           <ul className="list-disc pl-5 mt-2">
                             <li>Improved Situational Awareness: More data, better organized.</li>
                             <li>Reduced Workload: Automation features, integrated information.</li>
                             <li>Enhanced Safety: Terrain warnings, traffic alerts, synthetic vision.</li>
                             <li>Reliability: Solid-state sensors often replace mechanical gyros.</li>
                           </ul>
                        </div>
                        <div className="p-4 rounded-md bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800/50">
                            <h4 className="font-semibold text-yellow-700 dark:text-yellow-300">Considerations</h4>
                            <ul className="list-disc pl-5 mt-2">
                              <li>Information Overload Potential: Requires disciplined scanning.</li>
                              <li>Different Failure Modes: Understanding system architecture is key.</li>
                              <li>Over-reliance Risk: Must maintain basic instrument scan and interpretation skills.</li>
                              <li>Steeper Initial Learning Curve: Requires dedicated study and practice.</li>
                           </ul>
                        </div>
                     </div>
                     <p className="mt-4"><strong>Key takeaway:</strong> Glass cockpits provide powerful tools, but the fundamental skills of instrument interpretation and cross-checking remain essential, regardless of the display technology.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Final Word: Trust, But Verify</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-sm dark:prose-invert max-w-none">
                    <p>Your flight instruments are your connection to the aircraft's state in the environment. Learn what each instrument tells you, understand its limitations and potential errors, and develop a consistent scan pattern.</p>
                    <p>Mastering instrument interpretation builds confidence, precision, and safety. Whether using round dials or glass screens, knowing how to read, interpret, and cross-check your instruments is a hallmark of a proficient pilot.</p>
                  </CardContent>
                </Card>
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
  );
}
