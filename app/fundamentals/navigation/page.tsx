import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Compass, MapPin, Radio, Smartphone, Navigation2, Map, RotateCw, Calculator } from "lucide-react"

export const metadata: Metadata = {
  title: "Navigation | AACA Pilot Guide",
  description:
    "Learn the fundamentals of aviation navigation including pilotage, dead reckoning, VOR, GPS, and flight planning.",
}

export default function NavigationPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Navigation</h1>
          <p className="text-xl text-muted-foreground">
            Understanding how to navigate safely and efficiently from point A to point B
          </p>
        </div>
      </div>
      <div className="grid gap-10 pt-10">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden md:inline-flex">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="pilotage" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="hidden md:inline-flex">Pilotage</span>
            </TabsTrigger>
            <TabsTrigger value="dead-reckoning" className="flex items-center gap-2">
              <RotateCw className="h-4 w-4" />
              <span className="hidden md:inline-flex">Dead Reckoning</span>
            </TabsTrigger>
            <TabsTrigger value="electronic" className="flex items-center gap-2">
              <Radio className="h-4 w-4" />
              <span className="hidden md:inline-flex">Electronic</span>
            </TabsTrigger>
            <TabsTrigger value="planning" className="flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              <span className="hidden md:inline-flex">Flight Planning</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="flex flex-col-reverse md:flex-row gap-6 items-start">
              <div className="flex-1 space-y-4">
                <h2 className="font-heading text-3xl">Navigation Fundamentals</h2>
                <p>
                  Navigation is one of the most critical skills a pilot must master. It involves determining position,
                  planning a route, and maintaining situational awareness throughout a flight. Modern pilots have access
                  to a variety of navigation methods, from traditional techniques to advanced electronic systems.
                </p>
                <h3 className="font-heading text-2xl">Navigation Methods</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Pilotage:</strong> Navigation by reference to visible landmarks
                  </li>
                  <li>
                    <strong>Dead Reckoning:</strong> Navigation by calculating from known position using time, speed,
                    and direction
                  </li>
                  <li>
                    <strong>Radio Navigation:</strong> Using radio signals from ground-based navigation aids (VOR, NDB)
                  </li>
                  <li>
                    <strong>Satellite Navigation:</strong> Using GPS and other satellite-based systems
                  </li>
                  <li>
                    <strong>Inertial Navigation:</strong> Using motion sensors and rotation sensors to continuously
                    calculate position
                  </li>
                </ul>
              </div>
              <div className="md:w-1/3 w-full">
                <Card>
                  <CardContent className="p-4">
                    <div className="aspect-video relative rounded-md overflow-hidden">
                      <Image
                        src="/images/cessna-172-cockpit-view.jpg"
                        alt="Navigation instruments in a cockpit"
                        width={600}
                        height={400}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 text-center">
                      Modern navigation instruments in a typical GA cockpit
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-2xl">The Evolution of Navigation</h3>
              <p>Aviation navigation has evolved dramatically since the early days of flight:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <h4 className="font-heading text-lg">Early Navigation</h4>
                    <p className="text-sm">
                      Early pilots relied on visual landmarks, railroad tracks, and basic compasses. They often flew at
                      low altitudes to maintain visual contact with the ground.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <h4 className="font-heading text-lg">Radio Era</h4>
                    <p className="text-sm">
                      The introduction of radio navigation aids like NDBs and VORs revolutionized aviation, allowing
                      pilots to navigate in poor visibility and over featureless terrain.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <h4 className="font-heading text-lg">Digital Age</h4>
                    <p className="text-sm">
                      Modern navigation relies heavily on GPS, moving maps, and integrated systems that provide
                      unprecedented accuracy, reliability, and situational awareness.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-2xl">Why Navigation Matters</h3>
              <p>Effective navigation is essential for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintaining situational awareness</li>
                <li>Avoiding controlled or restricted airspace</li>
                <li>Planning for fuel requirements</li>
                <li>Avoiding terrain and obstacles</li>
                <li>Ensuring timely arrivals</li>
                <li>Managing emergencies effectively</li>
              </ul>
              <p>
                As a student pilot, developing strong navigation skills will build confidence and form the foundation
                for more advanced flying techniques.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="pilotage" className="space-y-6">
            <div className="flex flex-col-reverse md:flex-row gap-6 items-start">
              <div className="flex-1 space-y-4">
                <h2 className="font-heading text-3xl">Pilotage</h2>
                <p>
                  Pilotage is the art of navigation by reference to visible landmarks on the ground. Despite advances in
                  technology, pilotage remains a fundamental skill that every pilot should master.
                </p>
                <h3 className="font-heading text-2xl">Key Principles</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Checkpoint Selection:</strong> Choose prominent, unique landmarks that are easily
                    identifiable from the air
                  </li>
                  <li>
                    <strong>Map Orientation:</strong> Keep your sectional chart oriented to match your direction of
                    flight
                  </li>
                  <li>
                    <strong>Continuous Verification:</strong> Regularly confirm your position by identifying multiple
                    landmarks
                  </li>
                  <li>
                    <strong>Anticipation:</strong> Look ahead on your chart to identify upcoming landmarks
                  </li>
                </ul>
              </div>
              <div className="md:w-1/3 w-full">
                <Card>
                  <CardContent className="p-4">
                    <div className="aspect-video relative rounded-md overflow-hidden">
                      <Image
                        src="/images/pilot-checking-map-in-cockpit.jpg"
                        alt="Pilot using pilotage for navigation"
                        width={600}
                        height={400}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 text-center">
                      Comparing ground features with a sectional chart
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-2xl">Effective Checkpoints</h3>
              <p>Good checkpoints for pilotage should be:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <h4 className="font-heading text-lg">Distinctive</h4>
                    <p className="text-sm">
                      Choose features that stand out from their surroundings: lakes, large buildings, power plants,
                      major highway intersections, or distinctive terrain features.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <h4 className="font-heading text-lg">Permanent</h4>
                    <p className="text-sm">
                      Rely on features that don't change seasonally or frequently. Avoid temporary features like
                      construction sites or seasonal crops.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <h4 className="font-heading text-lg">Visible from Altitude</h4>
                    <p className="text-sm">
                      Select features that can be seen from your planned cruising altitude. Small details visible on a
                      map may not be distinguishable from the air.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <h4 className="font-heading text-lg">Unmistakable</h4>
                    <p className="text-sm">
                      Choose features that cannot be confused with similar features nearby. For example, one lake among
                      many similar lakes may not be a good checkpoint.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-2xl">Pilotage Challenges</h3>
              <p>Even experienced pilots face challenges with pilotage:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Seasonal Changes:</strong> Landscapes change appearance with seasons (snow cover, foliage,
                  agricultural patterns)
                </li>
                <li>
                  <strong>Visibility Conditions:</strong> Haze, low light, or precipitation can obscure landmarks
                </li>
                <li>
                  <strong>Perspective Differences:</strong> Features look different from the air than on a map
                </li>
                <li>
                  <strong>Similar Features:</strong> Multiple similar features (like lakes or towns) can be confusing
                </li>
              </ul>
              <div className="bg-muted p-4 rounded-md">
                <h4 className="font-heading text-lg">Pro Tip</h4>
                <p className="text-sm">
                  When planning a cross-country flight, study your route on Google Earth or similar satellite imagery to
                  familiarize yourself with how landmarks will appear from the air. This can significantly improve your
                  pilotage skills.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="dead-reckoning" className="space-y-6">
            <div className="flex flex-col-reverse md:flex-row gap-6 items-start">
              <div className="flex-1 space-y-4">
                <h2 className="font-heading text-3xl">Dead Reckoning</h2>
                <p>
                  Dead reckoning is a navigation method where you calculate your current position by using a previously
                  determined position, and advancing that position based on known or estimated speeds over elapsed time
                  and course.
                </p>
                <h3 className="font-heading text-2xl">The Formula</h3>
                <p>Dead reckoning relies on the basic formula:</p>
                <div className="bg-muted p-4 rounded-md text-center">
                  <p className="font-mono">Distance = Speed × Time</p>
                </div>
                <p>
                  By knowing your airspeed, heading, and time elapsed, you can estimate your position even when visual
                  references are limited.
                </p>
              </div>
              <div className="md:w-1/3 w-full">
                <Card>
                  <CardContent className="p-4">
                    <div className="aspect-video relative rounded-md overflow-hidden">
                      <Image
                        src="/images/pilot-plotting-course-on-chart.jpg"
                        alt="Dead reckoning navigation plotting"
                        width={600}
                        height={400}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 text-center">
                      Plotting a course using dead reckoning techniques
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-2xl">Essential Components</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Compass className="h-5 w-5 text-primary" />
                      <h4 className="font-heading text-lg">Heading</h4>
                    </div>
                    <p className="text-sm">
                      The direction your aircraft is pointed, measured in degrees from magnetic north. Remember that
                      heading is not necessarily the same as your ground track due to wind.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Navigation2 className="h-5 w-5 text-primary" />
                      <h4 className="font-heading text-lg">Groundspeed</h4>
                    </div>
                    <p className="text-sm">
                      Your actual speed over the ground, which is your airspeed adjusted for wind effects. This is the
                      speed used for time and distance calculations.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <RotateCw className="h-5 w-5 text-primary" />
                      <h4 className="font-heading text-lg">Time</h4>
                    </div>
                    <p className="text-sm">
                      Accurate timekeeping is essential for dead reckoning. Use a reliable timepiece and record
                      departure times and checkpoint passing times precisely.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-2xl">Wind Correction</h3>
              <p>Wind is the most significant factor affecting dead reckoning accuracy. To account for wind:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Determine wind direction and speed from weather briefing</li>
                <li>Calculate wind correction angle (WCA) to maintain desired ground track</li>
                <li>Adjust heading by the WCA</li>
                <li>Calculate groundspeed by accounting for headwind/tailwind component</li>
              </ol>
              <div className="bg-muted p-4 rounded-md">
                <h4 className="font-heading text-lg">The E6B Flight Computer</h4>
                <p className="text-sm">
                  The E6B (either mechanical or electronic) is an essential tool for dead reckoning calculations. It
                  helps solve wind triangle problems, converting between true and magnetic headings, and calculating
                  groundspeed and estimated time en route.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-2xl">Practical Application</h3>
              <p>To effectively use dead reckoning:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Plan Thoroughly:</strong> Calculate headings, groundspeeds, and times between checkpoints
                  before flight
                </li>
                <li>
                  <strong>Track Time:</strong> Note the time as you pass each checkpoint
                </li>
                <li>
                  <strong>Update Continuously:</strong> Recalculate position regularly based on actual performance
                </li>
                <li>
                  <strong>Cross-Check:</strong> Verify dead reckoning with visual references when possible
                </li>
                <li>
                  <strong>Document:</strong> Keep a log of actual times, headings, and groundspeeds for future reference
                </li>
              </ul>
              <p>
                Even in the age of GPS, dead reckoning remains a valuable skill, especially as a backup when electronic
                systems fail or in areas with poor GPS coverage.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="electronic" className="space-y-6">
            <div className="flex flex-col-reverse md:flex-row gap-6 items-start">
              <div className="flex-1 space-y-4">
                <h2 className="font-heading text-3xl">Electronic Navigation</h2>
                <p>
                  Modern aviation relies heavily on electronic navigation systems that provide precise positioning and
                  routing information. These systems have revolutionized how pilots navigate, but understanding their
                  principles and limitations remains essential.
                </p>
                <h3 className="font-heading text-2xl">VOR Navigation</h3>
                <p>
                  The VHF Omnidirectional Range (VOR) system has been the backbone of air navigation for decades and
                  remains widely used today.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Function:</strong> VOR stations transmit signals that aircraft receivers interpret as
                    radials (like spokes from a wheel)
                  </li>
                  <li>
                    <strong>Display:</strong> The CDI (Course Deviation Indicator) shows whether the aircraft is left or
                    right of the selected course
                  </li>
                  <li>
                    <strong>Range:</strong> Typically 25-130 nautical miles depending on altitude and terrain
                  </li>
                  <li>
                    <strong>Limitations:</strong> Line-of-sight transmission, affected by terrain, limited range at low
                    altitudes
                  </li>
                </ul>
              </div>
              <div className="md:w-1/3 w-full">
                <Card>
                  <CardContent className="p-4">
                    <div className="aspect-video relative rounded-md overflow-hidden">
                      <Image
                        src="/images/vor-indicator-closeup.jpg"
                        alt="VOR indicator in cockpit"
                        width={600}
                        height={400}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 text-center">
                      Typical VOR indicator showing course deviation
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-2xl">GPS Navigation</h3>
              <p>
                The Global Positioning System (GPS) has transformed aviation navigation with its accuracy, reliability,
                and global coverage.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <h4 className="font-heading text-lg">How GPS Works</h4>
                    <p className="text-sm">
                      GPS determines position by measuring the time it takes for signals to travel from satellites to
                      the receiver. With signals from at least four satellites, the system can calculate precise 3D
                      position.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <h4 className="font-heading text-lg">Aviation GPS Features</h4>
                    <p className="text-sm">
                      Aviation GPS units provide moving maps, nearest airport functions, terrain awareness, airspace
                      alerts, and can interface with autopilot systems for precise navigation.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="bg-muted p-4 rounded-md">
                <h4 className="font-heading text-lg">GPS Limitations</h4>
                <p className="text-sm">Despite its advantages, GPS has limitations pilots should understand:</p>
                <ul className="list-disc pl-6 space-y-2 text-sm mt-2">
                  <li>Signal interference or jamming can disrupt reception</li>
                  <li>Database information may become outdated</li>
                  <li>System failures can occur without warning</li>
                  <li>Over-reliance can lead to complacency and degraded pilotage skills</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-2xl">Other Electronic Navigation Systems</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <h4 className="font-heading text-lg">ADF/NDB</h4>
                    <p className="text-sm">
                      Automatic Direction Finder (ADF) receives signals from Non-Directional Beacons (NDBs). Though
                      older technology, it's still used in some regions and as a backup system.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <h4 className="font-heading text-lg">DME</h4>
                    <p className="text-sm">
                      Distance Measuring Equipment provides slant range distance to a ground station. Often paired with
                      VOR stations to provide both direction and distance information.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <h4 className="font-heading text-lg">RNAV/RNP</h4>
                    <p className="text-sm">
                      Area Navigation (RNAV) and Required Navigation Performance (RNP) allow aircraft to fly any desired
                      flight path without relying on ground-based navigation aids.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-2xl">Electronic Flight Bags (EFBs)</h3>
              <p>
                Modern pilots increasingly use tablets and smartphones with aviation apps as Electronic Flight Bags
                (EFBs).
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Moving Maps:</strong> Display aircraft position on aeronautical charts in real-time
                </li>
                <li>
                  <strong>Weather Data:</strong> Access to current weather information and forecasts
                </li>
                <li>
                  <strong>Flight Planning:</strong> Tools for route planning, fuel calculations, and weight and balance
                </li>
                <li>
                  <strong>Airport Information:</strong> Detailed airport diagrams, frequencies, and procedures
                </li>
              </ul>
              <div className="bg-muted p-4 rounded-md">
                <h4 className="font-heading text-lg">Best Practice</h4>
                <p className="text-sm">
                  While electronic navigation tools provide tremendous advantages, always maintain proficiency in basic
                  navigation skills. Have backup systems available, including paper charts, and never rely solely on a
                  single navigation method.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="planning" className="space-y-6">
            <div className="flex flex-col-reverse md:flex-row gap-6 items-start">
              <div className="flex-1 space-y-4">
                <h2 className="font-heading text-3xl">Flight Planning</h2>
                <p>
                  Thorough flight planning is essential for safe and efficient navigation. A well-prepared flight plan
                  helps you manage fuel, time, and navigate around hazards and restricted airspace.
                </p>
                <h3 className="font-heading text-2xl">The Planning Process</h3>
                <p>Effective flight planning follows a systematic approach:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    <strong>Route Selection:</strong> Determine departure and destination points, and plan the most
                    appropriate route
                  </li>
                  <li>
                    <strong>Weather Analysis:</strong> Gather and interpret current and forecast weather along the route
                  </li>
                  <li>
                    <strong>Performance Calculations:</strong> Calculate fuel requirements, takeoff and landing
                    distances
                  </li>
                  <li>
                    <strong>Weight and Balance:</strong> Ensure the aircraft will be within weight and balance
                    limitations
                  </li>
                  <li>
                    <strong>Navigation Log:</strong> Prepare a detailed navigation log with checkpoints, headings,
                    distances, and times
                  </li>
                  <li>
                    <strong>Contingency Planning:</strong> Identify alternate airports and routes in case of emergencies
                  </li>
                </ol>
              </div>
              <div className="md:w-1/3 w-full">
                <Card>
                  <CardContent className="p-4">
                    <div className="aspect-video relative rounded-md overflow-hidden">
                      <Image
                        src="/images/flight-planning-tools-layout.jpg"
                        alt="Flight planning with charts and tools"
                        width={600}
                        height={400}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 text-center">
                      Preparing a cross-country flight plan
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-2xl">Navigation Log</h3>
              <p>A well-prepared navigation log is your roadmap for the flight. It should include:</p>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border p-2 text-left">Checkpoint</th>
                      <th className="border p-2 text-left">True Course</th>
                      <th className="border p-2 text-left">Magnetic Course</th>
                      <th className="border p-2 text-left">Distance</th>
                      <th className="border p-2 text-left">Groundspeed</th>
                      <th className="border p-2 text-left">ETE</th>
                      <th className="border p-2 text-left">Fuel</th>
                      <th className="border p-2 text-left">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">KXYZ</td>
                      <td className="border p-2">045°</td>
                      <td className="border p-2">050°</td>
                      <td className="border p-2">-</td>
                      <td className="border p-2">-</td>
                      <td className="border p-2">-</td>
                      <td className="border p-2">-</td>
                      <td className="border p-2">Departure</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Lake City</td>
                      <td className="border p-2">045°</td>
                      <td className="border p-2">050°</td>
                      <td className="border p-2">15 NM</td>
                      <td className="border p-2">110 kt</td>
                      <td className="border p-2">0:08</td>
                      <td className="border p-2">1.3 gal</td>
                      <td className="border p-2">Class D airspace</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Mountain Pass</td>
                      <td className="border p-2">090°</td>
                      <td className="border p-2">095°</td>
                      <td className="border p-2">22 NM</td>
                      <td className="border p-2">105 kt</td>
                      <td className="border p-2">0:13</td>
                      <td className="border p-2">2.1 gal</td>
                      <td className="border p-2">MEF 7500'</td>
                    </tr>
                    <tr>
                      <td className="border p-2">KABC</td>
                      <td className="border p-2">090°</td>
                      <td className="border p-2">095°</td>
                      <td className="border p-2">18 NM</td>
                      <td className="border p-2">115 kt</td>
                      <td className="border p-2">0:09</td>
                      <td className="border p-2">1.5 gal</td>
                      <td className="border p-2">Destination</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground">Example navigation log for a cross-country flight</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-2xl">Flight Planning Tools</h3>
              <p>Modern pilots have access to a variety of tools to assist with flight planning:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Map className="h-5 w-5 text-primary" />
                      <h4 className="font-heading text-lg">Charts and Publications</h4>
                    </div>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Sectional Charts</li>
                      <li>Terminal Area Charts</li>
                      <li>Airport/Facility Directory</li>
                      <li>Approach Plates</li>
                      <li>Chart Supplements</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Calculator className="h-5 w-5 text-primary" />
                      <h4 className="font-heading text-lg">Calculation Tools</h4>
                    </div>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>E6B Flight Computer</li>
                      <li>Plotter</li>
                      <li>Performance Charts</li>
                      <li>Weight and Balance Calculator</li>
                      <li>Fuel Calculators</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-primary" />
                      <h4 className="font-heading text-lg">Digital Tools</h4>
                    </div>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Flight Planning Websites (ForeFlight, Garmin Pilot)</li>
                      <li>Weather Briefing Services</li>
                      <li>Electronic Flight Bags (EFBs)</li>
                      <li>Aviation Apps</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Radio className="h-5 w-5 text-primary" />
                      <h4 className="font-heading text-lg">Official Resources</h4>
                    </div>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Flight Service Station (FSS)</li>
                      <li>NOTAMS</li>
                      <li>TFRs</li>
                      <li>ATC Flight Following</li>
                      <li>ASOS/AWOS Weather</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-2xl">Filing a Flight Plan</h3>
              <p>While not required for VFR flights, filing a flight plan is highly recommended for safety:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Search and Rescue:</strong> If you don't arrive at your destination, search and rescue will be
                  initiated
                </li>
                <li>
                  <strong>Discipline:</strong> The process encourages thorough planning
                </li>
                <li>
                  <strong>Communication:</strong> Provides a formal record of your intended route
                </li>
              </ul>
              <div className="bg-muted p-4 rounded-md">
                <h4 className="font-heading text-lg">Remember</h4>
                <p className="text-sm">
                  A flight plan must be activated upon departure and closed upon arrival. Failure to close a flight plan
                  can trigger unnecessary search and rescue operations.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-2xl">Practical Exercise</h3>
              <p>To develop your flight planning skills:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Select two airports approximately 100 NM apart</li>
                <li>Plan a VFR cross-country flight between them</li>
                <li>Create a complete navigation log with at least 3 checkpoints</li>
                <li>Calculate fuel requirements including reserves</li>
                <li>Identify potential alternate airports along the route</li>
                <li>Consider how weather might affect your route and planning</li>
              </ol>
              <p>
                Review your plan with an instructor who can provide feedback and help you identify areas for
                improvement.
              </p>
              <div className="mt-6">
                <Button asChild>
                  <Link href="/fundamentals">Return to Fundamentals</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

