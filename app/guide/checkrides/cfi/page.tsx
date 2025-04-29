import Link from "next/link"
import { ArrowLeft, BookOpen, Clipboard, Plane } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CFICheckridePage() {
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
        <h1 className="text-4xl font-bold tracking-tight">CFI Checkride</h1>
        <p className="text-xl text-muted-foreground">
          The Certified Flight Instructor checkride is where you transition from student to teacher.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Checkride Overview</CardTitle>
            <CardDescription>
              The CFI checkride is one of the most challenging and comprehensive evaluations in aviation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              The CFI checkride evaluates not just your flying skills, but your ability to teach effectively. You'll be
              expected to demonstrate maneuvers while simultaneously explaining them as if teaching a student. This
              "teaching from the right seat" paradigm requires significant preparation and practice.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Preparation Timeline</CardTitle>
            <CardDescription>Recommended study schedule for CFI candidates</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                <strong>3-6 months before:</strong> Begin developing lesson plans and studying FOI material
              </li>
              <li>
                <strong>2-3 months before:</strong> Practice teaching all required maneuvers
              </li>
              <li>
                <strong>1-2 months before:</strong> Conduct mock lessons with peers or mentors
              </li>
              <li>
                <strong>2-4 weeks before:</strong> Finalize your teaching binder and materials
              </li>
              <li>
                <strong>1 week before:</strong> Review regulations and conduct final practice sessions
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
          <TabsTrigger value="foi">
            <Clipboard className="mr-2 h-4 w-4" />
            FOI Knowledge
          </TabsTrigger>
          <TabsTrigger value="lesson-plans">
            <BookOpen className="mr-2 h-4 w-4" />
            Lesson Plans
          </TabsTrigger>
          <TabsTrigger value="flight-test">
            <Plane className="mr-2 h-4 w-4" />
            Flight Test
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>What Makes the CFI Checkride Different</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The CFI checkride is often considered the most challenging practical test in aviation. Unlike previous
                checkrides where you demonstrated your ability to fly, the CFI checkride requires you to demonstrate
                your ability to teach.
              </p>
              <p>Key differences include:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>You'll fly from the right seat instead of the left</li>
                <li>You must verbally explain each maneuver while performing it</li>
                <li>You need to identify and correct common student errors</li>
                <li>The oral exam is typically much longer (4-8 hours)</li>
                <li>You must demonstrate knowledge of the Fundamentals of Instruction</li>
                <li>You need to create and use lesson plans for each topic</li>
              </ul>
              <p>
                The CFI checkride evaluates not just technical knowledge and flying skills, but also your communication
                abilities, teaching methodology, and professionalism as an instructor.
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
                  <strong>Teaching Binder:</strong> Organized collection of lesson plans and teaching materials
                </li>
                <li>
                  <strong>FOI Study Materials:</strong> Notes on learning theory, teaching methods, and evaluation
                </li>
                <li>
                  <strong>Visual Aids:</strong> Charts, diagrams, and models to enhance instruction
                </li>
                <li>
                  <strong>Pilot's Operating Handbook:</strong> For the aircraft you'll use in the checkride
                </li>
                <li>
                  <strong>FAA Publications:</strong> Including the Aviation Instructor's Handbook, PHAK, AFH
                </li>
                <li>
                  <strong>Endorsements Guide:</strong> Reference for all required student endorsements
                </li>
                <li>
                  <strong>Risk Management Tools:</strong> Examples of how you'll teach risk assessment
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="foi" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Fundamentals of Instruction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The Fundamentals of Instruction (FOI) form the backbone of your teaching methodology. You'll be
                extensively tested on these concepts during the oral portion of your checkride.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Key FOI Topics</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Learning Process:</strong> How people acquire knowledge and develop skills
                  </li>
                  <li>
                    <strong>Human Behavior:</strong> Understanding motivation and human needs
                  </li>
                  <li>
                    <strong>Effective Communication:</strong> Barriers to communication and teaching techniques
                  </li>
                  <li>
                    <strong>Teaching Process:</strong> Organization, lesson planning, and delivery methods
                  </li>
                  <li>
                    <strong>Teaching Methods:</strong> Lecture, guided discussion, demonstration-performance
                  </li>
                  <li>
                    <strong>Critique and Evaluation:</strong> Providing effective feedback to students
                  </li>
                  <li>
                    <strong>Flight Instructor Characteristics:</strong> Professionalism and responsibilities
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Common FOI Questions</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>"Explain the different domains of learning and how they apply to flight training."</li>
                  <li>"How would you handle a student who is experiencing a learning plateau?"</li>
                  <li>"Describe the demonstration-performance method and when you would use it."</li>
                  <li>"What are the defense mechanisms students might exhibit and how would you address them?"</li>
                  <li>"Explain the law of primacy and how it affects flight instruction."</li>
                </ul>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <p className="font-semibold">Pro Tip:</p>
                <p>
                  Create a one-page FOI summary sheet with key definitions and concepts. Review this daily in the weeks
                  leading up to your checkride to ensure these concepts are second nature.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lesson-plans" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Developing Effective Lesson Plans</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Your lesson plans are perhaps the most important preparation material for the CFI checkride. They
                demonstrate your ability to organize and present information in a logical, effective manner.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Lesson Plan Components</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Objective:</strong> What the student will know or be able to do
                  </li>
                  <li>
                    <strong>Content:</strong> The specific information to be taught
                  </li>
                  <li>
                    <strong>Schedule:</strong> Time allocation for each section
                  </li>
                  <li>
                    <strong>Equipment/Materials:</strong> What you'll need for the lesson
                  </li>
                  <li>
                    <strong>Risk Management:</strong> Specific hazards and mitigation strategies
                  </li>
                  <li>
                    <strong>Instructor Actions:</strong> What you'll do and demonstrate
                  </li>
                  <li>
                    <strong>Student Actions:</strong> What the student will practice
                  </li>
                  <li>
                    <strong>Evaluation Criteria:</strong> How you'll assess student performance
                  </li>
                  <li>
                    <strong>Common Errors:</strong> Mistakes students typically make
                  </li>
                  <li>
                    <strong>References:</strong> Source material for the lesson content
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Required Lesson Plans</h3>
                <p>
                  You should have lesson plans prepared for all maneuvers and procedures in the Private Pilot and
                  Commercial Pilot ACS, plus:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Fundamentals of Flight (Four Forces, Axes, Flight Controls)</li>
                  <li>Preflight Procedures</li>
                  <li>Airport Operations</li>
                  <li>Takeoffs, Landings, and Go-arounds</li>
                  <li>Performance Maneuvers</li>
                  <li>Ground Reference Maneuvers</li>
                  <li>Navigation</li>
                  <li>Slow Flight and Stalls</li>
                  <li>Emergency Operations</li>
                  <li>Night Operations</li>
                  <li>Postflight Procedures</li>
                </ul>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <p className="font-semibold">Pro Tip:</p>
                <p>
                  Create your lesson plans in a format that's easy to use during instruction. Many successful CFI
                  candidates use a binder with tabbed sections and plastic sheet protectors to keep their materials
                  organized and protected.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="flight-test" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>The Flight Portion</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                During the flight test, you'll be in the right seat demonstrating maneuvers while simultaneously
                teaching them. The examiner will play the role of a student pilot.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Flight Test Components</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Preflight Lesson:</strong> Demonstrate how you would teach a preflight inspection
                  </li>
                  <li>
                    <strong>Cockpit Management:</strong> Show how you organize the cockpit for instruction
                  </li>
                  <li>
                    <strong>Engine Starting/Taxiing:</strong> Teach proper procedures while performing them
                  </li>
                  <li>
                    <strong>Pre-Takeoff Check:</strong> Demonstrate a thorough pre-takeoff briefing
                  </li>
                  <li>
                    <strong>Normal/Crosswind Takeoff and Climb:</strong> Teach while performing
                  </li>
                  <li>
                    <strong>Fundamentals of Flight:</strong> Demonstrate effects of controls, trim, etc.
                  </li>
                  <li>
                    <strong>Slow Flight and Stalls:</strong> Teach recognition, prevention, and recovery
                  </li>
                  <li>
                    <strong>Ground Reference Maneuvers:</strong> Teach at least one maneuver
                  </li>
                  <li>
                    <strong>Emergency Procedures:</strong> Demonstrate teaching emergency operations
                  </li>
                  <li>
                    <strong>Normal/Crosswind Approach and Landing:</strong> Teach while performing
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Teaching from the Right Seat</h3>
                <p>Flying from the right seat presents unique challenges:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Different sight picture for landings and maneuvers</li>
                  <li>Using controls with your non-dominant hand</li>
                  <li>Managing the aircraft while simultaneously instructing</li>
                  <li>Scanning for traffic from a different perspective</li>
                  <li>Monitoring student actions while maintaining situational awareness</li>
                </ul>
                <p>
                  Begin practicing in the right seat well in advance of your checkride. You should be completely
                  comfortable with all maneuvers from this position.
                </p>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <p className="font-semibold">Pro Tip:</p>
                <p>
                  During the flight test, remember to use the "tell, show, do" method: explain the maneuver, demonstrate
                  it, then have the "student" (examiner) perform it. Always maintain positive control of the aircraft
                  and be ready to take over if needed.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-3">
        <Link href="/checkrides/private">
          <Card className="h-full hover:bg-muted/50 transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle>Private Pilot</CardTitle>
              <CardDescription>The first major milestone in your pilot journey</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/checkrides/instrument">
          <Card className="h-full hover:bg-muted/50 transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle>Instrument Rating</CardTitle>
              <CardDescription>Master flying solely by reference to instruments</CardDescription>
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

