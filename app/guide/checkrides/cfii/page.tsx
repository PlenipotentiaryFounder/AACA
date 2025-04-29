import Link from "next/link"
import { ArrowLeft, BookOpen, Clipboard, Cloud } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CFIICheckridePage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center gap-2">
        <Link href="/checkrides">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Checkrides
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">CFII Checkride</h1>
        <p className="text-xl text-muted-foreground">
          The Certified Flight Instructor - Instrument rating allows you to teach instrument flying skills.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Checkride Overview</CardTitle>
            <CardDescription>Building on your CFI skills to teach instrument flying</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              The CFII checkride evaluates your ability to teach instrument flying concepts and procedures. You'll need
              to demonstrate not only your own instrument proficiency, but also your ability to effectively teach these
              skills to instrument students.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Preparation Timeline</CardTitle>
            <CardDescription>Recommended study schedule for CFII candidates</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                <strong>2-3 months before:</strong> Review instrument procedures and develop lesson plans
              </li>
              <li>
                <strong>1-2 months before:</strong> Practice teaching instrument scan techniques and procedures
              </li>
              <li>
                <strong>3-4 weeks before:</strong> Conduct mock instrument lessons with peers
              </li>
              <li>
                <strong>2 weeks before:</strong> Finalize your teaching materials and review regulations
              </li>
              <li>
                <strong>1 week before:</strong> Practice teaching specific instrument maneuvers and approaches
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="overview">
            <BookOpen className="mr-2 h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="teaching-strategies">
            <Clipboard className="mr-2 h-4 w-4" />
            Teaching Strategies
          </TabsTrigger>
          <TabsTrigger value="lesson-plans">
            <BookOpen className="mr-2 h-4 w-4" />
            Lesson Plans
          </TabsTrigger>
          <TabsTrigger value="flight-test">
            <Cloud className="mr-2 h-4 w-4" />
            Flight Test
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>What Makes the CFII Checkride Different</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The CFII checkride builds upon your existing CFI certification, focusing specifically on teaching
                instrument flying skills. Unlike your initial CFI checkride, the CFII evaluation assumes you've already
                demonstrated basic instructional abilities and focuses on your instrument teaching expertise.
              </p>
              <p>Key differences from other checkrides include:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Focus on teaching instrument scan techniques and attitude instrument flying</li>
                <li>Emphasis on instrument procedures, approach charts, and IFR regulations</li>
                <li>Teaching partial panel operations and unusual attitude recovery</li>
                <li>Demonstrating how to teach effective decision-making in IFR conditions</li>
                <li>Less emphasis on general FOI principles (already covered in initial CFI)</li>
                <li>More emphasis on instrument-specific teaching challenges</li>
              </ul>
              <p>
                The CFII checkride evaluates your ability to break down complex instrument concepts into understandable
                components for students who may be overwhelmed by the transition from visual to instrument flying.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Required Materials</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Instrument Lesson Plans:</strong> Comprehensive plans for all instrument procedures
                </li>
                <li>
                  <strong>Approach Chart Teaching Aids:</strong> Annotated charts showing how to teach chart
                  interpretation
                </li>
                <li>
                  <strong>Instrument Scan Diagrams:</strong> Visual aids showing proper scan patterns
                </li>
                <li>
                  <strong>IFR Regulations Reference:</strong> Organized reference for instrument rules and requirements
                </li>
                <li>
                  <strong>Instrument Failure Scenarios:</strong> Teaching plans for various instrument failures
                </li>
                <li>
                  <strong>Weather Products Guide:</strong> Examples of how to teach weather product interpretation
                </li>
                <li>
                  <strong>IFR Flight Planning Templates:</strong> Tools to teach proper IFR planning
                </li>
                <li>
                  <strong>Instrument ACS:</strong> For reference during the checkride
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="teaching-strategies" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Effective Instrument Teaching Strategies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Teaching instrument flying presents unique challenges. Students must learn to trust their instruments
                over their physical sensations, which can be a difficult psychological transition.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Teaching the Instrument Scan</h3>
                <p>
                  One of the most challenging aspects of instrument instruction is teaching an effective scan pattern.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Control and Performance Method:</strong> Teach students to first set the appropriate control
                    inputs, then verify the expected performance on their instruments
                  </li>
                  <li>
                    <strong>Primary/Supporting Concept:</strong> Identify which instruments are primary for each
                    maneuver and which provide supporting information
                  </li>
                  <li>
                    <strong>Selective Radial Scan:</strong> Teach students to focus on the attitude indicator and make
                    quick radial scans to other instruments
                  </li>
                  <li>
                    <strong>Progressive Teaching:</strong> Start with straight and level flight before progressing to
                    turns, climbs, and descents
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Teaching Instrument Approaches</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Chart Breakdown:</strong> Teach a systematic method for breaking down approach charts into
                    manageable components
                  </li>
                  <li>
                    <strong>Mental Chunking:</strong> Help students group information into logical segments
                  </li>
                  <li>
                    <strong>Approach Briefing Template:</strong> Provide a consistent structure for approach briefings
                  </li>
                  <li>
                    <strong>Chair Flying:</strong> Encourage students to practice procedures on the ground
                  </li>
                  <li>
                    <strong>Progressive Complexity:</strong> Start with simpler approaches before moving to more complex
                    ones
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Teaching Partial Panel</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Early Introduction:</strong> Introduce partial panel concepts early in training
                  </li>
                  <li>
                    <strong>Modified Scan:</strong> Teach a modified scan pattern that compensates for failed
                    instruments
                  </li>
                  <li>
                    <strong>Realistic Failures:</strong> Simulate realistic instrument failures rather than simply
                    covering instruments
                  </li>
                  <li>
                    <strong>Workload Management:</strong> Emphasize the importance of using autopilot and other
                    resources during actual failures
                  </li>
                </ul>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <p className="font-semibold">Pro Tip:</p>
                <p>
                  Develop concrete analogies and visual aids to help students understand abstract instrument concepts.
                  For example, use a laser pointer to demonstrate scan patterns, or use everyday objects to explain
                  complex procedures like holding patterns.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lesson-plans" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Essential CFII Lesson Plans</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Your CFII lesson plans should build upon your existing CFI lesson plan structure, but with specific
                focus on instrument concepts and procedures.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Required Lesson Plans</h3>
                <p>Prepare comprehensive lesson plans for:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Instrument Scan Techniques:</strong> Teaching proper instrument scanning
                  </li>
                  <li>
                    <strong>Attitude Instrument Flying:</strong> Basic instrument maneuvers
                  </li>
                  <li>
                    <strong>Navigation Systems:</strong> VOR, GPS, ILS, etc.
                  </li>
                  <li>
                    <strong>Departure Procedures:</strong> ODPs, SIDs, and radar vectors
                  </li>
                  <li>
                    <strong>Enroute Procedures:</strong> Airways, direct routes, and navigation techniques
                  </li>
                  <li>
                    <strong>Holding Patterns:</strong> Entry procedures and pattern maintenance
                  </li>
                  <li>
                    <strong>Approach Procedures:</strong> Precision and non-precision approaches
                  </li>
                  <li>
                    <strong>Missed Approaches:</strong> Execution and decision-making
                  </li>
                  <li>
                    <strong>Partial Panel Operations:</strong> Flying with failed instruments
                  </li>
                  <li>
                    <strong>Unusual Attitude Recovery:</strong> Recognition and recovery techniques
                  </li>
                  <li>
                    <strong>IFR Cross-Country Planning:</strong> Route selection, fuel planning, alternates
                  </li>
                  <li>
                    <strong>IFR Regulations:</strong> Currency, equipment, and operational requirements
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Lesson Plan Structure</h3>
                <p>Each instrument lesson plan should include:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Objective:</strong> Specific, measurable learning outcomes
                  </li>
                  <li>
                    <strong>Prerequisites:</strong> Skills and knowledge needed before this lesson
                  </li>
                  <li>
                    <strong>Risk Management:</strong> Specific instrument-related risks and mitigation strategies
                  </li>
                  <li>
                    <strong>Ground Instruction:</strong> Detailed explanation of concepts
                  </li>
                  <li>
                    <strong>Flight Instruction:</strong> Step-by-step teaching methodology
                  </li>
                  <li>
                    <strong>Common Errors:</strong> Typical student mistakes and correction techniques
                  </li>
                  <li>
                    <strong>Evaluation Criteria:</strong> How to assess student performance
                  </li>
                  <li>
                    <strong>Assignments:</strong> Preparation for the next lesson
                  </li>
                </ul>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <p className="font-semibold">Pro Tip:</p>
                <p>
                  Create scenario-based lesson plans that integrate multiple instrument skills. For example, a lesson on
                  ILS approaches could include holding patterns, partial panel work, and missed approach procedures in a
                  realistic scenario.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="flight-test" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>The Flight Test</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                During the flight portion of your CFII checkride, you'll demonstrate your ability to teach instrument
                procedures while simultaneously performing them. The examiner will typically play the role of an
                instrument student.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Flight Test Components</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Preflight Preparation:</strong> Teaching IFR flight planning and preflight procedures
                  </li>
                  <li>
                    <strong>Instrument Cockpit Check:</strong> Demonstrating a thorough IFR cockpit organization
                  </li>
                  <li>
                    <strong>ATC Clearances:</strong> Teaching proper clearance copying and readback
                  </li>
                  <li>
                    <strong>Departure Procedures:</strong> Teaching departure procedure execution
                  </li>
                  <li>
                    <strong>Basic Instrument Maneuvers:</strong> Teaching straight and level, turns, climbs, and
                    descents
                  </li>
                  <li>
                    <strong>Partial Panel Operations:</strong> Teaching flight with simulated instrument failures
                  </li>
                  <li>
                    <strong>Recovery from Unusual Attitudes:</strong> Teaching recognition and recovery techniques
                  </li>
                  <li>
                    <strong>Navigation Systems:</strong> Teaching VOR, GPS, and other navigation systems
                  </li>
                  <li>
                    <strong>Holding Patterns:</strong> Teaching holding entries and pattern maintenance
                  </li>
                  <li>
                    <strong>Approach Procedures:</strong> Teaching at least one precision and one non-precision approach
                  </li>
                  <li>
                    <strong>Missed Approach:</strong> Teaching proper missed approach procedures
                  </li>
                  <li>
                    <strong>Landing from an Approach:</strong> Teaching the transition from instruments to visual
                    references
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Teaching in IMC</h3>
                <p>Teaching in actual or simulated instrument conditions presents unique challenges:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Maintaining situational awareness while focusing on instruction</li>
                  <li>Monitoring student performance without visual references</li>
                  <li>Explaining concepts clearly while managing a higher workload</li>
                  <li>Demonstrating proper scan technique while verbalizing the process</li>
                  <li>Being prepared to take control quickly if the student makes a significant error</li>
                </ul>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <p className="font-semibold">Pro Tip:</p>
                <p>
                  Practice teaching instrument procedures in VMC before attempting to teach in actual IMC. This allows
                  you to develop your instructional patter without the added workload of actual instrument conditions.
                  When you do teach in IMC, consider using an autopilot for portions of the flight to reduce workload
                  and focus on instruction.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-3">
        <Link href="/checkrides/cfi">
          <Card className="h-full hover:bg-muted/50 transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle>CFI</CardTitle>
              <CardDescription>The foundation of your instructional career</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/checkrides/multi-engine">
          <Card className="h-full hover:bg-muted/50 transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle>Multi-Engine</CardTitle>
              <CardDescription>Master flying aircraft with multiple engines</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/checkrides/commercial">
          <Card className="h-full hover:bg-muted/50 transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle>Commercial Pilot</CardTitle>
              <CardDescription>Demonstrate precision flying and professional knowledge</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  )
}

