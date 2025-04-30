"use client"

import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, BookOpen, Filter, ArrowUpDown, ChevronUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This would normally be fetched from a database
const glossaryItems = [
  {
    term: "ADF",
    definition: "Automatic Direction Finder – A navigation instrument that points to a non-directional beacon (NDB).",
    category: "Navigation",
  },
  {
    term: "AGL",
    definition: "Above Ground Level – Altitude measured from the surface of the earth, not sea level.",
    category: "Navigation",
  },
  {
    term: "AIM",
    definition:
      "Aeronautical Information Manual – A comprehensive FAA guide covering ATC procedures and flight operations.",
    category: "Regulations",
  },
  {
    term: "Altimeter",
    definition: "An instrument used to measure altitude above mean sea level.",
    category: "Instruments",
  },
  {
    term: "ARROW",
    definition:
      "Required aircraft documents: Airworthiness Certificate, Registration, Radio License (if international), Operating Limitations, and Weight & Balance.",
    category: "Regulations",
  },
  {
    term: "ATC",
    definition:
      "Air Traffic Control – A service that coordinates aircraft movement on the ground and in controlled airspace.",
    category: "Communications",
  },
  {
    term: "Attitude Indicator",
    definition: "A flight instrument that shows the aircraft's orientation relative to the horizon.",
    category: "Instruments",
  },
  {
    term: "AWOS",
    definition: "Automated Weather Observing System – Provides real-time weather information at airports.",
    category: "Weather",
  },
  {
    term: "Balloon",
    definition:
      "A term used to describe when the aircraft gains unexpected lift—usually during landing—causing the plane to rise and float above the runway.",
    category: "Maneuvers",
  },
  {
    term: "Braking Action",
    definition:
      "A term in runway condition reports that indicates how effectively an aircraft can decelerate on a surface.",
    category: "Operations",
  },
  {
    term: "Bust",
    definition: "Slang for failing a checkride or deviating from a flight standard.",
    category: "Training",
  },
  {
    term: "Ceiling",
    definition: "The height above ground of the lowest cloud layer reported as broken or overcast.",
    category: "Weather",
  },
  {
    term: "Checklist",
    definition: "A written series of steps used during each flight phase to ensure all critical items are completed.",
    category: "Operations",
  },
  {
    term: "Class B Airspace",
    definition: "Busy airspace around major airports. Requires ATC clearance and a Mode C transponder.",
    category: "Airspace",
  },
  {
    term: "Class C Airspace",
    definition:
      "Surrounds airports with an operational control tower and radar approach control. Requires two-way communication before entry.",
    category: "Airspace",
  },
  {
    term: "Class D Airspace",
    definition:
      "Airspace around airports with an operational control tower. Requires two-way communication before entering.",
    category: "Airspace",
  },
  {
    term: "Class E Airspace",
    definition:
      "Controlled airspace that isn't A, B, C, or D. Starts at 700 or 1200 ft AGL and extends up to—but not including—18,000 ft MSL.",
    category: "Airspace",
  },
  {
    term: "Class G Airspace",
    definition: "Uncontrolled airspace. No ATC services; you're on your own for separation.",
    category: "Airspace",
  },
  {
    term: "Climb Gradient",
    definition: "The rate of climb required per distance traveled, usually expressed in feet per nautical mile.",
    category: "Performance",
  },
  {
    term: "Common Traffic Advisory Frequency (CTAF)",
    definition: "The radio frequency pilots use to announce positions and intentions at non-towered airports.",
    category: "Communications",
  },
  {
    term: "Compass Deviation",
    definition: "Error in compass readings caused by magnetic fields within the aircraft.",
    category: "Navigation",
  },
  {
    term: "Controlled Airspace",
    definition: "Airspace where ATC services are provided. Includes Class A, B, C, D, and E.",
    category: "Airspace",
  },
  {
    term: "Course",
    definition: "The intended direction of flight over the ground.",
    category: "Navigation",
  },
  {
    term: "Crosswind",
    definition: "Wind blowing perpendicular to the runway. Requires special techniques for takeoff and landing.",
    category: "Weather",
  },
  {
    term: "Dead Reckoning",
    definition: "Navigation based on time, speed, distance, and direction from a known point.",
    category: "Navigation",
  },
  {
    term: "Density Altitude",
    definition:
      "Pressure altitude corrected for non-standard temperature. High density altitude reduces aircraft performance.",
    category: "Performance",
  },
  {
    term: "Diversion",
    definition: "Changing the planned route or destination during flight, often due to weather or emergency.",
    category: "Operations",
  },
  {
    term: "Drag",
    definition: "Aerodynamic force that opposes an aircraft's motion through the air.",
    category: "Aerodynamics",
  },
  {
    term: "Dual Instruction",
    definition: "Flight training received with an instructor on board, logged as dual received.",
    category: "Training",
  },
  {
    term: "ELT",
    definition: "Emergency Locator Transmitter – A device that sends out a distress signal in the event of a crash.",
    category: "Equipment",
  },
  {
    term: "Empennage",
    definition: "The tail section of the aircraft, including the vertical and horizontal stabilizers.",
    category: "Aircraft Structure",
  },
  {
    term: "Engine Failure Procedures",
    definition:
      "Steps to follow when an engine quits. Includes maintaining best glide speed, selecting a landing site, troubleshooting, and communicating.",
    category: "Emergency Procedures",
  },
  {
    term: "ETD",
    definition: "Estimated Time of Departure – When a flight is scheduled to leave.",
    category: "Operations",
  },
  {
    term: "ETA",
    definition: "Estimated Time of Arrival – When a flight is scheduled to arrive.",
    category: "Operations",
  },
  {
    term: "FAR/AIM",
    definition: "Federal Aviation Regulations and Aeronautical Information Manual. The rulebook for U.S. pilots.",
    category: "Regulations",
  },
  {
    term: "Final Approach",
    definition: "The last leg of the traffic pattern aligned with the runway centerline.",
    category: "Operations",
  },
  {
    term: "Flight Following",
    definition: "VFR radar service provided by ATC that gives traffic advisories and situational awareness.",
    category: "Communications",
  },
  {
    term: "FSS",
    definition:
      "Flight Service Station – Provides weather briefings, opens and closes flight plans, and handles in-flight updates.",
    category: "Communications",
  },
  {
    term: "FPM",
    definition: "Feet Per Minute – A unit for measuring climb or descent rate.",
    category: "Performance",
  },
  {
    term: "Fuel Selector",
    definition: "A control that allows the pilot to choose from which tank the engine draws fuel.",
    category: "Aircraft Systems",
  },
  {
    term: "Glide Ratio",
    definition:
      "The distance an aircraft can travel forward compared to the altitude it loses. For example, a 10:1 glide ratio means 10 feet forward for every 1 foot down. Key for engine-out scenarios.",
    category: "Performance",
  },
  {
    term: "Go-Around",
    definition:
      "A maneuver where a landing is aborted, and the aircraft climbs out for another attempt. Not a failure—it's a smart, safe decision when something isn't right.",
    category: "Maneuvers",
  },
  {
    term: "Ground Effect",
    definition:
      "The increased lift and reduced drag that occurs when flying close to the ground (usually within one wingspan). It can cause floating on landing or early liftoff if not managed.",
    category: "Aerodynamics",
  },
  {
    term: "Ground Speed (GS)",
    definition:
      "The actual speed of the aircraft over the ground. Unlike airspeed, it accounts for wind. Airspeed + tailwind = faster GS; headwind = slower GS.",
    category: "Performance",
  },
  {
    term: "Gyroscopic Precession",
    definition:
      "The tendency of a spinning object (like a gyroscope) to respond 90° later in the direction of rotation when a force is applied. Shows up in your attitude and heading indicators.",
    category: "Aerodynamics",
  },
  {
    term: "Holding Pattern",
    definition:
      "A racetrack-shaped course flown when ATC delays your approach or entry. You'll need to master this for IFR flying. Timing, entry, and wind correction all matter.",
    category: "Operations",
  },
  {
    term: "Hub-and-Spoke System",
    definition:
      "The airline model where flights are routed through a central hub (like DFW or ATL) before reaching smaller destinations. It's how the majors structure their networks.",
    category: "Airline Operations",
  },
  {
    term: "Hydroplaning",
    definition:
      "When tires ride on a thin layer of water instead of gripping the runway. Can occur above 70–90 knots on wet surfaces. Avoid with proper braking and technique.",
    category: "Weather",
  },
  {
    term: "Hypoxia",
    definition:
      "Lack of oxygen. It can sneak up on you at altitude and impair judgment fast. Know the types (hypoxic, hypemic, stagnant, histotoxic) and symptoms.",
    category: "Physiology",
  },
  {
    term: "IFR",
    definition:
      "Instrument Flight Rules – Flying by reference to instruments under ATC control. Required in low visibility or IMC. A whole new level of precision and discipline.",
    category: "Regulations",
  },
  {
    term: "IMC",
    definition:
      "Instrument Meteorological Conditions – Weather conditions requiring IFR flight—usually low ceilings, fog, or clouds that prevent visual flight.",
    category: "Weather",
  },
  {
    term: "Induced Drag",
    definition:
      "A byproduct of lift—caused by wingtip vortices and more pronounced at slower speeds and high angles of attack.",
    category: "Aerodynamics",
  },
  {
    term: "Inop",
    definition:
      "Inoperative – A system or equipment that's not working. Know what you can fly without (use the MEL or 91.213 rule).",
    category: "Aircraft Systems",
  },
  {
    term: "ISA",
    definition:
      "International Standard Atmosphere – A model of average atmospheric conditions at sea level: 15°C and 29.92 inHg. Used as a baseline for performance calculations.",
    category: "Weather",
  },
  {
    term: "Jet Stream",
    definition:
      "Fast-moving, narrow bands of air high in the atmosphere. Flying with them can give you a massive tailwind; against them, it's a slog.",
    category: "Weather",
  },
  {
    term: "Jet A vs. Avgas",
    definition:
      "Jet A is a kerosene-based fuel for turbine engines. Avgas (100LL) is for piston engines. Mixing them = very bad.",
    category: "Aircraft Systems",
  },
  {
    term: "Knot (KT)",
    definition:
      "Nautical miles per hour. 1 knot = 1.15 mph. Aviation uses knots for airspeed, wind speed, and even visibility in some contexts.",
    category: "Navigation",
  },
  {
    term: "LAHSO",
    definition:
      "Land and Hold Short Operations – A landing clearance where you must land and stop before a specified point—like an intersecting runway. You can decline it if you're not comfortable.",
    category: "Operations",
  },
  {
    term: "Lift",
    definition:
      "The aerodynamic force that opposes weight and holds the aircraft in the air. Created primarily by the wing's shape (airfoil) and angle of attack.",
    category: "Aerodynamics",
  },
  {
    term: "Load Factor",
    definition:
      "The G-forces acting on the aircraft. In a 60° bank, you're pulling 2Gs. Exceeding limits can damage the structure or stall the wing.",
    category: "Aerodynamics",
  },
  {
    term: "LOFT",
    definition:
      "Line-Oriented Flight Training – Realistic scenario-based airline training. Focuses on CRM, decision-making, and handling real-world distractions—not just checkride maneuvers.",
    category: "Training",
  },
  {
    term: "Lost Procedures",
    definition:
      "A step-by-step method if you lose situational awareness:\n1. Climb (for better visibility/radio)\n2. Communicate (with ATC or FSS)\n3. Confess (you're lost)\n4. Comply (with instructions)\n5. Conserve (fuel by slowing down)",
    category: "Emergency Procedures",
  },
  {
    term: "Mach Number",
    definition:
      "The ratio of the aircraft's speed to the speed of sound. Mach 1 = speed of sound. Important in jet aircraft where compressibility becomes a factor.",
    category: "Performance",
  },
  {
    term: "Magnetic Deviation",
    definition:
      "Errors in compass reading caused by interference from the aircraft's own systems (like avionics). Each plane has a compass correction card to account for this.",
    category: "Navigation",
  },
  {
    term: "Magnetic Variation",
    definition:
      "The difference between true north and magnetic north. It varies by location and is shown on sectional charts.",
    category: "Navigation",
  },
  {
    term: "MAP",
    definition:
      "Missed Approach Point – A defined point on an instrument approach where you must execute a missed approach if the required visual references are not in sight.",
    category: "Navigation",
  },
  {
    term: "Maneuvering Speed (Va)",
    definition:
      "The maximum speed at which full, abrupt control inputs won't overstress the aircraft. It changes with weight. Slower is safer in turbulence.",
    category: "Performance",
  },
  {
    term: "METAR",
    definition:
      "Meteorological Aerodrome Report. A coded weather report updated hourly. Essential for preflight and interpreting airport conditions.",
    category: "Weather",
  },
  {
    term: "Microburst",
    definition:
      "A sudden, powerful downdraft associated with thunderstorms. Extremely dangerous during takeoff or landing. Often impossible to escape once entered—know the signs and avoid.",
    category: "Weather",
  },
  {
    term: "Minimums",
    definition:
      "The lowest altitudes or visibility under which a pilot may legally operate an aircraft. Includes approach minimums, VFR minimums, and personal minimums.",
    category: "Regulations",
  },
  {
    term: "MOA",
    definition:
      "Military Operations Area – Airspace where military training occurs. You can fly through it VFR, but be very cautious and aware of fast-moving traffic.",
    category: "Airspace",
  },
  {
    term: "Moment",
    definition:
      "A measure of rotational force (torque), calculated as weight × arm. Used in weight & balance to ensure the aircraft stays within limits.",
    category: "Performance",
  },
  {
    term: "MSL",
    definition:
      "Mean Sea Level – Altitude expressed in feet above average sea level. Common reference for charts, obstacles, and terrain elevation.",
    category: "Navigation",
  },
  {
    term: "NOTAM",
    definition:
      "Notice to Air Missions – Time-sensitive alerts about changes to facilities, procedures, or hazards. Always check them before flying—they can close runways or change frequencies.",
    category: "Operations",
  },
  {
    term: "NDB",
    definition:
      "Non-Directional Beacon – A ground-based navigation aid used with ADF receivers. Mostly phased out in favor of GPS, but still testable.",
    category: "Navigation",
  },
  {
    term: "NM",
    definition: "Nautical Mile – The standard unit of distance in aviation. 1 NM = 1.15 statute miles or 6,076 feet.",
    category: "Navigation",
  },
  {
    term: "Nosewheel Steering",
    definition:
      "Ground steering controlled by rudder pedals, differential braking, or a steering tiller. Know how your airplane turns on the ground.",
    category: "Aircraft Systems",
  },
  {
    term: "NVG",
    definition:
      "Night Vision Goggles – Used in military or some commercial operations to enhance night vision. Not a typical tool in civilian GA but worth knowing exists.",
    category: "Equipment",
  },
  {
    term: "Obstacle Departure Procedure (ODP)",
    definition:
      "A pre-published IFR departure route designed to keep you clear of terrain. Can be flown without ATC clearance, but you must know it exists.",
    category: "Operations",
  },
  {
    term: "Oil Pressure Gauge",
    definition:
      "A vital engine instrument. Low pressure = immediate concern. A spike, drop, or redline reading could signal a failing engine.",
    category: "Instruments",
  },
  {
    term: "Ops Check",
    definition:
      "A quick internal checklist pilots do to make sure everything is working (e.g., engine gauges, fuel status, radios, heading, etc.). Done mentally during cruise or after a distraction.",
    category: "Operations",
  },
  {
    term: "Overbanking Tendency",
    definition:
      "The natural tendency of an aircraft in a steep bank to continue rolling due to greater lift on the raised wing. Left unchecked, it can lead to a spiral.",
    category: "Aerodynamics",
  },
  {
    term: "P-Factor",
    definition:
      "Asymmetric thrust produced by the descending propeller blade, especially at high angles of attack. Causes left-turning tendency in single-engine props.",
    category: "Aerodynamics",
  },
  {
    term: "Part 61 vs. Part 141",
    definition:
      "Two different training pathways. Part 61 is more flexible; Part 141 is more structured and school-approved. Both lead to the same licenses.",
    category: "Training",
  },
  {
    term: "Pattern Altitude",
    definition:
      "The standard altitude for flying traffic patterns—typically 1,000' AGL for single-engine aircraft unless otherwise published.",
    category: "Operations",
  },
  {
    term: "PIC",
    definition:
      "Pilot in Command – The person legally responsible for the flight. Can be a student under solo, an instructor, or a captain. Once you're PIC, you're the final authority.",
    category: "Regulations",
  },
  {
    term: "Pitot-Static System",
    definition:
      "A system of sensors that drives the airspeed indicator, altimeter, and VSI. If it gets blocked, instruments give false readings—know your alternate air source.",
    category: "Aircraft Systems",
  },
  {
    term: "POH",
    definition:
      "Pilot's Operating Handbook – The aircraft-specific manual that contains all operating procedures, limitations, and performance data. Your bible for that airplane.",
    category: "Regulations",
  },
  {
    term: "Power-Off Stall",
    definition:
      "Simulates a stall during approach or landing. Helps you practice recognizing and recovering from low-speed loss of control.",
    category: "Maneuvers",
  },
  {
    term: "Precession",
    definition:
      "The tilting or turning of a gyroscope in response to pressure, felt 90° later in the direction of rotation. Shows up in instruments like the heading indicator.",
    category: "Aerodynamics",
  },
  {
    term: "Progressive Taxi",
    definition:
      "A step-by-step set of taxi instructions from ATC—use it if you're unfamiliar with the airport or confused.",
    category: "Operations",
  },
  {
    term: "PVT",
    definition:
      "Private Pilot – Your first major FAA certificate. Grants you freedom to fly solo and with passengers, day or night, VFR—but not for hire.",
    category: "Regulations",
  },
  {
    term: "QNH",
    definition:
      "A Q-code used internationally to indicate the altimeter setting that shows altitude above mean sea level. Basically, the same as what you'd dial in using local baro pressure.",
    category: "Navigation",
  },
  {
    term: "Quadrant",
    definition:
      "On sectional charts, refers to the square areas defined by lat/long boundaries with maximum elevation figures (MEF) inside. Useful for terrain clearance.",
    category: "Navigation",
  },
  {
    term: "Q-Route",
    definition:
      "High-altitude RNAV routes used by aircraft equipped with GPS or INS navigation systems. Think of them as highways in the sky.",
    category: "Navigation",
  },
  {
    term: "RAIM",
    definition:
      "Receiver Autonomous Integrity Monitoring – A system check that verifies GPS signal reliability. Required for certain IFR GPS operations.",
    category: "Navigation",
  },
  {
    term: "Ramp Check",
    definition:
      "A surprise inspection by the FAA to verify your documents, medical, aircraft status, and compliance. Be polite, be prepared, and don't volunteer extra info.",
    category: "Regulations",
  },
  {
    term: "Relative Wind",
    definition:
      "The direction of airflow opposite the aircraft's flight path. Angle of attack is measured between this and the chord line.",
    category: "Aerodynamics",
  },
  {
    term: "Restricted Area",
    definition:
      "Special-use airspace where flying is restricted due to hazards like artillery or missiles. You need ATC clearance to enter.",
    category: "Airspace",
  },
  {
    term: "Rudder",
    definition:
      "The vertical control surface on the tail that controls yaw. Crucial for coordinated flight, especially during crosswind takeoffs and landings.",
    category: "Aircraft Structure",
  },
  {
    term: "Run-Up",
    definition:
      "Pre-takeoff engine and systems check, typically done near the hold short line. Ignoring or rushing this is asking for a bad day in the air.",
    category: "Operations",
  },
  {
    term: "Runway Incursion",
    definition:
      "Any unauthorized presence on a runway. Extremely serious. Always double-check clearances and read back hold short instructions precisely.",
    category: "Operations",
  },
  {
    term: "Safety Pilot",
    definition:
      "A qualified pilot who observes while another pilot practices instrument flight under the hood. Required for simulated instrument time if you're not on an IFR flight plan.",
    category: "Training",
  },
  {
    term: "Sectional Chart",
    definition:
      "A detailed aeronautical map showing topography, airspace, airports, VORs, and more. Your best friend in VFR navigation.",
    category: "Navigation",
  },
  {
    term: "SIGMET",
    definition:
      "Significant Meteorological Information – Weather advisories for severe weather that affect all aircraft—like icing, turbulence, or volcanic ash. Always check before a flight.",
    category: "Weather",
  },
  {
    term: "Slip",
    definition:
      "A maneuver where the aircraft is banked but rudder is applied in the opposite direction. Used to lose altitude without increasing airspeed or to correct for crosswind.",
    category: "Maneuvers",
  },
  {
    term: "Somatogravic Illusion",
    definition:
      "A false sensation of pitch during rapid acceleration (like during takeoff), which can lead to nose-down input. Know it, respect it, fly the instruments.",
    category: "Physiology",
  },
  {
    term: "Special VFR (SVFR)",
    definition:
      "Allows VFR flight within controlled airspace when weather is below basic VFR minimums—but still requires at least 1 SM visibility and clear of clouds.",
    category: "Regulations",
  },
  {
    term: "Spin",
    definition:
      "An aggravated stall resulting in autorotation. Spins must be intentionally demonstrated for CFI training but avoided at all other times unless properly trained.",
    category: "Maneuvers",
  },
  {
    term: "Squawk Code",
    definition:
      "A four-digit code dialed into your transponder to identify your aircraft to ATC. 1200 is the VFR standard; 7500/7600/7700 are the emergency codes.",
    category: "Communications",
  },
  {
    term: "Stall",
    definition:
      "Loss of lift when the wing exceeds its critical angle of attack. Can happen at any airspeed, attitude, or configuration. Recovery is key.",
    category: "Aerodynamics",
  },
  {
    term: "STEM",
    definition:
      "Science, Technology, Engineering, and Math—core concepts heavily embedded in aviation. Understanding STEM helps you become a better, safer pilot.",
    category: "Training",
  },
  {
    term: "Step Climb",
    definition:
      "Climbing in stages to higher altitudes as fuel burns off and aircraft performance improves. Common in long-haul and high-performance operations.",
    category: "Operations",
  },
  {
    term: "TAS",
    definition:
      "True Airspeed – The actual speed of your aircraft through the air, corrected for altitude and temperature. Increases with altitude even if IAS stays the same.",
    category: "Performance",
  },
  {
    term: "TFR",
    definition:
      "Temporary Flight Restriction – Restricted airspace that pops up for events like sports games, wildfires, or presidential visits. Busting a TFR = big trouble.",
    category: "Airspace",
  },
  {
    term: "Touch-and-Go",
    definition:
      "A training maneuver where the aircraft lands and immediately takes off again. Great for pattern practice—but don't get sloppy with procedures.",
    category: "Maneuvers",
  },
  {
    term: "Traffic Pattern",
    definition:
      "A standard set of legs (upwind, crosswind, downwind, base, final) flown around an airport. Helps maintain order and safety in the traffic area.",
    category: "Operations",
  },
  {
    term: "Transition Altitude",
    definition:
      "The altitude at or below which pilots use local altimeter settings. Above this, they switch to standard pressure (29.92). Usually FL180 in the U.S.",
    category: "Navigation",
  },
  {
    term: "Transponder",
    definition:
      "A device that broadcasts your position and altitude to ATC. Required in most controlled airspace and plays a huge role in radar visibility.",
    category: "Equipment",
  },
  {
    term: "Trim",
    definition:
      "Small adjustments that relieve pressure on the flight controls. Trim makes long flights smoother and allows precise handling. Learn to use it early and often.",
    category: "Aircraft Systems",
  },
  {
    term: "Uncontrolled Airspace",
    definition:
      "Airspace not under ATC control, typically Class G. You're still responsible for traffic separation and weather minimums.",
    category: "Airspace",
  },
  {
    term: "Upwind Leg",
    definition:
      "The initial leg of the traffic pattern, flown in the same direction as takeoff. Extending it is common for spacing other traffic.",
    category: "Operations",
  },
  {
    term: "UTC",
    definition:
      "Coordinated Universal Time – The standard aviation time reference. All weather reports, flight plans, and IFR operations are done in UTC/Zulu time.",
    category: "Operations",
  },
  {
    term: "V1 Speed",
    definition:
      "Decision speed during takeoff in multi-engine aircraft. Before V1, you can abort. After V1, you're committed to go.",
    category: "Performance",
  },
  {
    term: "VFR",
    definition:
      "Visual Flight Rules – Rules for flying when you can see and avoid other aircraft and obstacles. Weather minimums apply—know them cold.",
    category: "Regulations",
  },
  {
    term: "VMC",
    definition:
      "Minimum Control Speed – The minimum speed at which a multi-engine aircraft can maintain control with one engine inoperative. Often marked with a red line on the airspeed indicator.",
    category: "Performance",
  },
  {
    term: "VOR",
    definition:
      "VHF Omnidirectional Range – A ground-based radio nav aid that helps aircraft determine their position and stay on course. Slowly being replaced by GPS, but still on the checkride.",
    category: "Navigation",
  },
  {
    term: "Vx",
    definition:
      "Best angle of climb speed. Gains the most altitude in the shortest horizontal distance. Used for clearing obstacles right after takeoff.",
    category: "Performance",
  },
  {
    term: "Vy",
    definition:
      "Best rate of climb speed. Gains the most altitude in the least amount of time. Your go-to climb speed after obstacle clearance.",
    category: "Performance",
  },
  {
    term: "Wake Turbulence",
    definition:
      'Turbulence left behind by aircraft, especially heavy or slow ones. Avoid flying behind or below them—get in their "clean air."',
    category: "Aerodynamics",
  },
  {
    term: "Waypoint",
    definition:
      "A point in space defined by latitude and longitude, used for navigation. GPS and RNAV routes are built on waypoints.",
    category: "Navigation",
  },
  {
    term: "Weight & Balance",
    definition:
      "The distribution of weight in your aircraft. It affects performance, control, and safety. Every flight should include a W&B check.",
    category: "Performance",
  },
  {
    term: "Wind Correction Angle (WCA)",
    definition:
      "The angle you must crab into the wind to stay on your desired course. Calculated using E6B or ForeFlight.",
    category: "Navigation",
  },
  {
    term: "Wingtip Vortices",
    definition:
      "Spiraling air off the wingtips created by lift. Major source of wake turbulence and a factor in induced drag.",
    category: "Aerodynamics",
  },
  {
    term: "X-Country (Cross-Country)",
    definition:
      "Any flight beyond 50 NM for training requirements, though technically any point-to-point flight counts. Critical for building hours and skill.",
    category: "Training",
  },
  {
    term: "X-Wind (Crosswind)",
    definition:
      "A wind that blows across your runway or flight path. Requires rudder coordination on takeoff and careful alignment on landing.",
    category: "Weather",
  },
  {
    term: "Yaw",
    definition:
      "Movement of the aircraft around the vertical axis, controlled by the rudder. Poor yaw control = sloppy turns and uncoordinated flight.",
    category: "Aerodynamics",
  },
  {
    term: "Yoke",
    definition:
      "The control wheel in many aircraft. Pull to climb, push to descend. Like a steering wheel—but vertical movement controls pitch.",
    category: "Aircraft Systems",
  },
  {
    term: "Zulu Time",
    definition:
      "Another name for UTC. Used worldwide in aviation to eliminate confusion across time zones. Learn to convert local to Zulu quickly.",
    category: "Operations",
  },
]

// Get all unique categories
const categories = Array.from(new Set(glossaryItems.map((item) => item.category)))

// Get all unique first letters
const alphabet = Array.from(new Set(glossaryItems.map((item) => item.term.charAt(0).toUpperCase()))).sort()

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [filteredItems, setFilteredItems] = useState(glossaryItems)
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("all")
  const [showBackToTop, setShowBackToTop] = useState(false)
  const topRef = useRef<HTMLDivElement>(null)

  // Filter and sort items based on search, category, and sort order
  useEffect(() => {
    let filtered = [...glossaryItems]

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (item) =>
          item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.definition.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((item) => item.category === selectedCategory)
    }

    // Filter by letter
    if (selectedLetter) {
      filtered = filtered.filter((item) => item.term.charAt(0).toUpperCase() === selectedLetter)
    }

    // Sort items
    filtered.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.term.localeCompare(b.term)
      } else {
        return b.term.localeCompare(a.term)
      }
    })

    setFilteredItems(filtered)
  }, [searchQuery, selectedCategory, sortOrder, selectedLetter])

  // Handle scroll events for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLetterClick = (letter: string) => {
    if (selectedLetter === letter) {
      setSelectedLetter(null)
    } else {
      setSelectedLetter(letter)
      setActiveTab("all")
    }
  }

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category)
    setActiveTab("all")
  }

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory(null)
    setSelectedLetter(null)
    setSortOrder("asc")
    setActiveTab("all")
  }

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Group items by first letter for the alphabetical view
  const groupedByLetter = filteredItems.reduce(
    (acc, item) => {
      const firstLetter = item.term.charAt(0).toUpperCase()
      if (!acc[firstLetter]) {
        acc[firstLetter] = []
      }
      acc[firstLetter].push(item)
      return acc
    },
    {} as Record<string, typeof glossaryItems>,
  )

  return (
    <div className="container max-w-7xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div>
          <h1 className="font-display text-4xl font-bold tracking-tight flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-primary" />
            Plane-English Glossary
          </h1>
          <p className="text-xl text-muted-foreground mt-2">
            Aviation terms and definitions in plain language for American Airlines Cadet Academy students
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={clearFilters}>
            Clear Filters
          </Button>
          <Button size="sm">Download PDF</Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-1 mb-6">
        {alphabet.map((letter) => (
          <Button
            key={letter}
            variant={selectedLetter === letter ? "default" : "outline"}
            size="sm"
            className="w-8 h-8 p-0"
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </Button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search glossary terms..."
            className="w-full pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                {selectedCategory || "All Categories"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleCategorySelect(null)}>All Categories</DropdownMenuItem>
              {categories.map((category) => (
                <DropdownMenuItem key={category} onClick={() => handleCategorySelect(category)}>
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" onClick={toggleSortOrder} className="flex items-center gap-2">
            <ArrowUpDown className="h-4 w-4" />
            {sortOrder === "asc" ? "A-Z" : "Z-A"}
          </Button>
        </div>
      </div>

      {(selectedCategory || selectedLetter || searchQuery) && (
        <div className="flex flex-wrap gap-2 mb-6">
          <div className="text-sm text-muted-foreground">Active filters:</div>
          {selectedCategory && (
            <Badge variant="outline" className="flex items-center gap-1">
              Category: {selectedCategory}
              <button className="ml-1 hover:text-primary" onClick={() => setSelectedCategory(null)}>
                ×
              </button>
            </Badge>
          )}
          {selectedLetter && (
            <Badge variant="outline" className="flex items-center gap-1">
              Letter: {selectedLetter}
              <button className="ml-1 hover:text-primary" onClick={() => setSelectedLetter(null)}>
                ×
              </button>
            </Badge>
          )}
          {searchQuery && (
            <Badge variant="outline" className="flex items-center gap-1">
              Search: {searchQuery}
              <button className="ml-1 hover:text-primary" onClick={() => setSearchQuery("")}>
                ×
              </button>
            </Badge>
          )}
        </div>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All Terms</TabsTrigger>
          <TabsTrigger value="alphabetical">Alphabetical</TabsTrigger>
          <TabsTrigger value="categories">By Category</TabsTrigger>
        </TabsList>

        {filteredItems.length > 0 ? (
          <>
            <TabsContent value="all" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredItems.map((item) => (
                  <Card key={item.term} className="hover-card-effect overflow-hidden">
                    <CardHeader className="pb-3 bg-muted/50">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{item.term}</CardTitle>
                        <Badge>{item.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="whitespace-pre-line">{item.definition}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="alphabetical" className="mt-0">
              {Object.keys(groupedByLetter)
                .sort()
                .map((letter) => (
                  <div key={letter} className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                      <span className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mr-3">
                        {letter}
                      </span>
                      <span>Terms</span>
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {groupedByLetter[letter].map((item) => (
                        <Card key={item.term} className="hover-card-effect overflow-hidden">
                          <CardHeader className="pb-3 bg-muted/50">
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-xl">{item.term}</CardTitle>
                              <Badge>{item.category}</Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-4">
                            <p className="whitespace-pre-line">{item.definition}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
            </TabsContent>

            <TabsContent value="categories" className="mt-0">
              {categories
                .filter((category) => filteredItems.some((item) => item.category === category))
                .sort()
                .map((category) => (
                  <div key={category} className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-md mr-3">{category}</span>
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {filteredItems
                        .filter((item) => item.category === category)
                        .map((item) => (
                          <Card key={item.term} className="hover-card-effect overflow-hidden">
                            <CardHeader className="pb-3 bg-muted/50">
                              <CardTitle className="text-xl">{item.term}</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-4">
                              <p className="whitespace-pre-line">{item.definition}</p>
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  </div>
                ))}
            </TabsContent>
          </>
        ) : (
          <TabsContent value={activeTab} className="mt-0">
            <div className="text-center py-16 bg-muted/30 rounded-xl border">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">No terms found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <Button onClick={clearFilters}>Clear All Filters</Button>
            </div>
          </TabsContent>
        )}
      </Tabs>

      {showBackToTop && (
        <Button
          className="fixed bottom-8 right-8 rounded-full w-12 h-12 p-0 shadow-lg"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}

