import { MainHeader } from "@/components/main-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Radio,
  ChevronLeft,
  ChevronRight,
  Mic,
  Headphones,
  BookOpen,
  ExternalLink,
  Download,
  Share2,
  Bookmark,
  Printer,
  Volume2,
  AlertTriangle,
  CheckCircle,
  XCircle,
  HelpCircle,
  Plane,
  TowerControlIcon as Tower,
  MessageSquare,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function RadioCommunicationsPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-aa-navy to-aa-blue text-white">
              <div className="absolute inset-0 bg-[url('/images/pilot-headset-cockpit.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
              <div className="relative z-10 px-6 py-12 md:py-16 md:px-10">
                <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">
                  Training Fundamentals
                </Badge>
                <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                  Radio Communications
                </h1>
                <p className="text-xl text-white/80 mb-6 max-w-2xl">Mastering the Art of Aviation Communication</p>
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
                <div className="w-full h-full bg-[url('/images/radio-stack-closeup.jpg')] bg-contain bg-no-repeat"></div>
              </div>
            </section>

            {/* Quick Actions */}
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

            {/* Introduction */}
            <section className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead">
                Clear, concise radio communication is a fundamental skill for every pilot. It's not just about
                following regulations—it's about ensuring safety, efficiency, and professionalism in the air.
              </p>

              <p>
                For many student pilots, radio communication can be one of the most intimidating aspects of flight
                training. The good news is that with proper preparation and practice, you can develop confidence and
                proficiency in aviation radio procedures.
              </p>

              <div className="bg-muted rounded-xl p-6 my-6 border-l-4 border-primary">
                <h3 className="text-xl font-semibold mb-3">Why Radio Communication Matters</h3>
                <p className="mb-0">Effective radio communication helps you:</p>
                <ul className="mt-2 mb-0">
                  <li>Maintain situational awareness of other traffic</li>
                  <li>Receive critical safety information and instructions</li>
                  <li>Navigate the airspace system efficiently</li>
                  <li>Coordinate with ATC and other pilots</li>
                  <li>Handle emergencies and unexpected situations</li>
                </ul>
              </div>
            </section>

            {/* Radio Basics */}
            <section>
              <h2 className="font-display text-2xl font-semibold mb-6">Radio Equipment and Basics</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Understanding your aircraft's radio equipment and basic operation is the first step to effective
                communication.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="hover-card-effect overflow-hidden border-t-4 border-t-primary">
                  <CardHeader className="pb-3 bg-primary/5">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Radio className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">VHF Radio Equipment</CardTitle>
                        <CardDescription>The tools of the trade</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="mb-4">
                      Aircraft communication radios operate in the Very High Frequency (VHF) range, typically between
                      118.000 and 136.975 MHz.
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold mb-2">Key Components</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>
                          <strong>Transceiver:</strong> The radio unit that both transmits and receives
                        </li>
                        <li>
                          <strong>Microphone:</strong> Hand-held or headset integrated
                        </li>
                        <li>
                          <strong>Push-to-Talk (PTT) Switch:</strong> Activates the transmitter
                        </li>
                        <li>
                          <strong>Headset/Speakers:</strong> For receiving communications
                        </li>
                        <li>
                          <strong>Frequency Selector:</strong> To tune to different frequencies
                        </li>
                      </ul>
                    </div>
                    <p className="font-medium">
                      Most training aircraft have at least one COM radio, while more advanced aircraft may have two or
                      more for redundancy.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover-card-effect overflow-hidden border-t-4 border-t-primary">
                  <CardHeader className="pb-3 bg-primary/5">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Volume2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">Radio Operation</CardTitle>
                        <CardDescription>Basic techniques for clear communication</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="mb-4">
                      Proper radio technique ensures your transmissions are clear, concise, and professional.
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold mb-2">Best Practices</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>
                          <strong>Listen before transmitting</strong> to avoid stepping on other communications
                        </li>
                        <li>
                          <strong>Think before speaking</strong> - plan your message mentally
                        </li>
                        <li>
                          <strong>Press PTT, then pause briefly</strong> before speaking
                        </li>
                        <li>
                          <strong>Speak clearly at a moderate pace</strong> - not too fast or slow
                        </li>
                        <li>
                          <strong>Use standard phraseology</strong> whenever possible
                        </li>
                        <li>
                          <strong>Release the PTT</strong> when finished speaking
                        </li>
                      </ul>
                    </div>
                    <p className="font-medium">
                      Remember: Radio transmissions are "half-duplex" - only one person can transmit at a time.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6">
                <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
                  <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  <AlertTitle className="text-amber-800 dark:text-amber-300">Radio Check</AlertTitle>
                  <AlertDescription className="text-amber-700 dark:text-amber-400">
                    If you're unsure about your radio's functionality, you can request a "radio check" from ATC or
                    another station. Responses typically include signal strength (1-5) and readability (unreadable,
                    readable, loud and clear).
                  </AlertDescription>
                </Alert>
              </div>
            </section>

            {/* Standard Phraseology */}
            <section className="bg-card rounded-2xl border p-8">
              <h2 className="font-display text-2xl font-semibold mb-6">Standard Phraseology</h2>

              <p className="text-lg mb-6">
                Aviation has developed a standardized language to ensure clear, concise communication. Learning and
                using this phraseology is essential for all pilots.
              </p>

              <Tabs defaultValue="alphabet" className="w-full">
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="alphabet" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" /> Phonetic Alphabet
                  </TabsTrigger>
                  <TabsTrigger value="numbers" className="flex items-center gap-2">
                    <Headphones className="h-4 w-4" /> Numbers & Readbacks
                  </TabsTrigger>
                  <TabsTrigger value="phrases" className="flex items-center gap-2">
                    <Mic className="h-4 w-4" /> Common Phrases
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="alphabet" className="border rounded-xl p-6">
                  <h3 className="font-display text-xl font-semibold mb-4">The Phonetic Alphabet</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="mb-4">
                        The ICAO phonetic alphabet ensures clear communication of letters, especially in noisy radio
                        environments or when letters sound similar.
                      </p>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="bg-muted/30 p-2 rounded-lg">
                          <span className="font-bold">A</span> - Alpha
                        </div>
                        <div className="bg-muted/30 p-2 rounded-lg">
                          <span className="font-bold">B</span> - Bravo
                        </div>
                        <div className="bg-muted/30 p-2 rounded-lg">
                          <span className="font-bold">C</span> - Charlie
                        </div>
                        <div className="bg-muted/30 p-2 rounded-lg">
                          <span className="font-bold">D</span> - Delta
                        </div>
                        <div className="bg-muted/30 p-2 rounded-lg">
                          <span className="font-bold">E</span> - Echo
                        </div>
                        <div className="bg-muted/30 p-2 rounded-lg">
                          <span className="font-bold">F</span> - Foxtrot
                        </div>
                        <div className="bg-muted/30 p-2 rounded-lg">
                          <span className="font-bold">G</span> - Golf
                        </div>
                        <div className="bg-muted/30 p-2 rounded-lg">
                          <span className="font-bold">H</span> - Hotel
                        </div>
                        <div className="bg-muted/30 p-2 rounded-lg">
                          <span className="font-bold">I</span> - India
                        </div>
                        <div className="bg-muted/30 p-2 rounded-lg">
                          <span className="font-bold">J</span> - Juliett
                        </div>
                        <div className="bg-muted/30 p-2 rounded-lg">
                          <span className="font-bold">K</span> - Kilo
                        </div>
                        <div className="bg-muted/30 p-2 rounded-lg">
                          <span className="font-bold">L</span> - Lima
                        </div>
                        <div className="bg-muted/30 p-2 rounded-lg">
                          <span className="font-bold">M</span> - Mike
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="mb-4">
                        Practice the phonetic alphabet regularly until it becomes second nature. You'll use it for
                        aircraft call signs, waypoints, and more.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-muted/30 p-2 rounded-lg">
                          <span className="font-bold">N</span> - November
                        </div>
                        <div className="bg-muted/30 p-2 rounded-lg">
                          <span className="font-bold">O</span> - Oscar
                        </div>
                        <div className="bg-muted/30 p-2 rounded-lg">
                          <span className="font-bold">P</span> - Papa
                        </div>
                        <div className="bg-muted/30 p-2 rounded-lg">
                          <span className="font-bold">Q</span> - Quebec
                        </div>
                        <div className="bg-muted/30 p-2 rounded-lg">
                          <span className="font-bold">R</span> - Romeo
                        </div>
                        <div className="bg-muted/30 p-2 rounded-lg">
                          <span className="font-bold">S</span> - Sierra
                        </div>
                        <div className="bg-muted/30 p-2 rounded-lg">
                          <span className="font-bold">T</span> - Tango
                        </div>
                        <div className="bg-muted/30 p-2 rounded-lg">
                          <span className="font-bold">U</span> - Uniform
                        </div>
                        <div className="bg-muted/30 p-2 rounded-lg">
                          <span className="font-bold">V</span> - Victor
                        </div>
                        <div className="bg-muted/30 p-2 rounded-lg">
                          <span className="font-bold">W</span> - Whiskey
                        </div>
                        <div className="bg-muted/30 p-2 rounded-lg">
                          <span className="font-bold">X</span> - X-ray
                        </div>
                        <div className="bg-muted/30 p-2 rounded-lg">
                          <span className="font-bold">Y</span> - Yankee
                        </div>
                        <div className="bg-muted/30 p-2 rounded-lg">
                          <span className="font-bold">Z</span> - Zulu
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="numbers" className="border rounded-xl p-6">
                  <h3 className="font-display text-xl font-semibold mb-4">Numbers & Readbacks</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Number Pronunciation</h4>
                      <p className="mb-4">Numbers in aviation are pronounced differently to ensure clarity:</p>
                      <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li>
                          <strong>0:</strong> "ZERO" (not "oh")
                        </li>
                        <li>
                          <strong>1:</strong> "ONE" or "WUN"
                        </li>
                        <li>
                          <strong>2:</strong> "TWO" or "TOO"
                        </li>
                        <li>
                          <strong>3:</strong> "THREE" or "TREE"
                        </li>
                        <li>
                          <strong>4:</strong> "FOUR" or "FOW-er"
                        </li>
                        <li>
                          <strong>5:</strong> "FIVE" or "FIFE"
                        </li>
                        <li>
                          <strong>6:</strong> "SIX"
                        </li>
                        <li>
                          <strong>7:</strong> "SEVEN"
                        </li>
                        <li>
                          <strong>8:</strong> "EIGHT"
                        </li>
                        <li>
                          <strong>9:</strong> "NINE" or "NIN-er"
                        </li>
                      </ul>
                      <p className="font-medium">Decimal points are pronounced "DECIMAL" or "POINT"</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Required Readbacks</h4>
                      <p className="mb-4">Certain instructions must be read back to ATC to confirm understanding:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Runway assignments</li>
                        <li>Clearances (taxi, takeoff, landing, etc.)</li>
                        <li>Heading instructions</li>
                        <li>Altitude assignments</li>
                        <li>Airspeed adjustments</li>
                        <li>Transponder (squawk) codes</li>
                        <li>Frequency changes</li>
                        <li>Altimeter settings</li>
                      </ul>
                      <div className="bg-primary/10 p-4 rounded-lg mt-4">
                        <p className="text-sm font-medium">
                          Always include your call sign in readbacks so ATC knows who is responding.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="phrases" className="border rounded-xl p-6">
                  <h3 className="font-display text-xl font-semibold mb-4">Common Phrases and Their Meanings</h3>
                  <div className="space-y-4">
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-1">Acknowledge</h4>
                      <p className="text-sm">"Let me know that you have received and understood this message."</p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-1">Affirmative</h4>
                      <p className="text-sm">"Yes" or "That is correct."</p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-1">Negative</h4>
                      <p className="text-sm">"No" or "That is not correct" or "Not approved."</p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-1">Roger</h4>
                      <p className="text-sm">
                        "I have received and understood your last transmission." (Does NOT mean "yes")
                      </p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-1">Wilco</h4>
                      <p className="text-sm">"I understand your message and will comply with it."</p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-1">Say Again</h4>
                      <p className="text-sm">"Repeat all or part of your last transmission."</p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-1">Stand By</h4>
                      <p className="text-sm">"Wait and I will call you back." (No response is expected)</p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-1">Unable</h4>
                      <p className="text-sm">"I cannot comply with your request or instruction."</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </section>

            {/* Communication Procedures */}
            <section>
              <h2 className="font-display text-2xl font-semibold mb-6">Communication Procedures</h2>
      <AppSidebar />
      <SidebarInset>
        <MainHeader />

        <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Hero Section */}
          <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-aa-navy to-aa-blue text-white">
            <div className="absolute inset-0 bg-[url('/images/pilot-headset-cockpit.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
            <div className="relative z-10 px-6 py-12 md:py-16 md:px-10">
              <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">
                Training Fundamentals
              </Badge>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                Radio Communications
              </h1>
              <p className="text-xl text-white/80 mb-6 max-w-2xl">Mastering the Art of Aviation Communication</p>
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
              <div className="w-full h-full bg-[url('/images/radio-stack-closeup.jpg')] bg-contain bg-no-repeat"></div>
            </div>
          </section>

          {/* Quick Actions */}
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

          {/* Introduction */}
          <section className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead">
              Clear, concise radio communication is a fundamental skill for every pilot. It's not just about
              following regulations—it's about ensuring safety, efficiency, and professionalism in the air.
            </p>

            <p>
              For many student pilots, radio communication can be one of the most intimidating aspects of flight
              training. The good news is that with proper preparation and practice, you can develop confidence and
              proficiency in aviation radio procedures.
            </p>

            <div className="bg-muted rounded-xl p-6 my-6 border-l-4 border-primary">
              <h3 className="text-xl font-semibold mb-3">Why Radio Communication Matters</h3>
              <p className="mb-0">Effective radio communication helps you:</p>
              <ul className="mt-2 mb-0">
                <li>Maintain situational awareness of other traffic</li>
                <li>Receive critical safety information and instructions</li>
                <li>Navigate the airspace system efficiently</li>
                <li>Coordinate with ATC and other pilots</li>
                <li>Handle emergencies and unexpected situations</li>
              </ul>
            </div>
          </section>

          {/* Radio Basics */}
          <section>
            <h2 className="font-display text-2xl font-semibold mb-6">Radio Equipment and Basics</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Understanding your aircraft's radio equipment and basic operation is the first step to effective
              communication.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="hover-card-effect overflow-hidden border-t-4 border-t-primary">
                <CardHeader className="pb-3 bg-primary/5">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Radio className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">VHF Radio Equipment</CardTitle>
                      <CardDescription>The tools of the trade</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    Aircraft communication radios operate in the Very High Frequency (VHF) range, typically between
                    118.000 and 136.975 MHz.
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold mb-2">Key Components</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>
                        <strong>Transceiver:</strong> The radio unit that both transmits and receives
                      </li>
                      <li>
                        <strong>Microphone:</strong> Hand-held or headset integrated
                      </li>
                      <li>
                        <strong>Push-to-Talk (PTT) Switch:</strong> Activates the transmitter
                      </li>
                      <li>
                        <strong>Headset/Speakers:</strong> For receiving communications
                      </li>
                      <li>
                        <strong>Frequency Selector:</strong> To tune to different frequencies
                      </li>
                    </ul>
                  </div>
                  <p className="font-medium">
                    Most training aircraft have at least one COM radio, while more advanced aircraft may have two or
                    more for redundancy.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-card-effect overflow-hidden border-t-4 border-t-primary">
                <CardHeader className="pb-3 bg-primary/5">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Volume2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Radio Operation</CardTitle>
                      <CardDescription>Basic techniques for clear communication</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    Proper radio technique ensures your transmissions are clear, concise, and professional.
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold mb-2">Best Practices</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>
                        <strong>Listen before transmitting</strong> to avoid stepping on other communications
                      </li>
                      <li>
                        <strong>Think before speaking</strong> - plan your message mentally
                      </li>
                      <li>
                        <strong>Press PTT, then pause briefly</strong> before speaking
                      </li>
                      <li>
                        <strong>Speak clearly at a moderate pace</strong> - not too fast or slow
                      </li>
                      <li>
                        <strong>Use standard phraseology</strong> whenever possible
                      </li>
                      <li>
                        <strong>Release the PTT</strong> when finished speaking
                      </li>
                    </ul>
                  </div>
                  <p className="font-medium">
                    Remember: Radio transmissions are "half-duplex" - only one person can transmit at a time.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6">
              <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
                <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <AlertTitle className="text-amber-800 dark:text-amber-300">Radio Check</AlertTitle>
                <AlertDescription className="text-amber-700 dark:text-amber-400">
                  If you're unsure about your radio's functionality, you can request a "radio check" from ATC or
                  another station. Responses typically include signal strength (1-5) and readability (unreadable,
                  readable, loud and clear).
                </AlertDescription>
              </Alert>
            </div>
          </section>

          {/* Standard Phraseology */}
          <section className="bg-card rounded-2xl border p-8">
            <h2 className="font-display text-2xl font-semibold mb-6">Standard Phraseology</h2>

            <p className="text-lg mb-6">
              Aviation has developed a standardized language to ensure clear, concise communication. Learning and
              using this phraseology is essential for all pilots.
            </p>

            <Tabs defaultValue="alphabet" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="alphabet" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" /> Phonetic Alphabet
                </TabsTrigger>
                <TabsTrigger value="numbers" className="flex items-center gap-2">
                  <Headphones className="h-4 w-4" /> Numbers & Readbacks
                </TabsTrigger>
                <TabsTrigger value="phrases" className="flex items-center gap-2">
                  <Mic className="h-4 w-4" /> Common Phrases
                </TabsTrigger>
              </TabsList>

              <TabsContent value="alphabet" className="border rounded-xl p-6">
                <h3 className="font-display text-xl font-semibold mb-4">The Phonetic Alphabet</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="mb-4">
                      The ICAO phonetic alphabet ensures clear communication of letters, especially in noisy radio
                      environments or when letters sound similar.
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-muted/30 p-2 rounded-lg">
                        <span className="font-bold">A</span> - Alpha
                      </div>
                      <div className="bg-muted/30 p-2 rounded-lg">
                        <span className="font-bold">B</span> - Bravo
                      </div>
                      <div className="bg-muted/30 p-2 rounded-lg">
                        <span className="font-bold">C</span> - Charlie
                      </div>
                      <div className="bg-muted/30 p-2 rounded-lg">
                        <span className="font-bold">D</span> - Delta
                      </div>
                      <div className="bg-muted/30 p-2 rounded-lg">
                        <span className="font-bold">E</span> - Echo
                      </div>
                      <div className="bg-muted/30 p-2 rounded-lg">
                        <span className="font-bold">F</span> - Foxtrot
                      </div>
                      <div className="bg-muted/30 p-2 rounded-lg">
                        <span className="font-bold">G</span> - Golf
                      </div>
                      <div className="bg-muted/30 p-2 rounded-lg">
                        <span className="font-bold">H</span> - Hotel
                      </div>
                      <div className="bg-muted/30 p-2 rounded-lg">
                        <span className="font-bold">I</span> - India
                      </div>
                      <div className="bg-muted/30 p-2 rounded-lg">
                        <span className="font-bold">J</span> - Juliett
                      </div>
                      <div className="bg-muted/30 p-2 rounded-lg">
                        <span className="font-bold">K</span> - Kilo
                      </div>
                      <div className="bg-muted/30 p-2 rounded-lg">
                        <span className="font-bold">L</span> - Lima
                      </div>
                      <div className="bg-muted/30 p-2 rounded-lg">
                        <span className="font-bold">M</span> - Mike
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="mb-4">
                      Practice the phonetic alphabet regularly until it becomes second nature. You'll use it for
                      aircraft call signs, waypoints, and more.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-muted/30 p-2 rounded-lg">
                        <span className="font-bold">N</span> - November
                      </div>
                      <div className="bg-muted/30 p-2 rounded-lg">
                        <span className="font-bold">O</span> - Oscar
                      </div>
                      <div className="bg-muted/30 p-2 rounded-lg">
                        <span className="font-bold">P</span> - Papa
                      </div>
                      <div className="bg-muted/30 p-2 rounded-lg">
                        <span className="font-bold">Q</span> - Quebec
                      </div>
                      <div className="bg-muted/30 p-2 rounded-lg">
                        <span className="font-bold">R</span> - Romeo
                      </div>
                      <div className="bg-muted/30 p-2 rounded-lg">
                        <span className="font-bold">S</span> - Sierra
                      </div>
                      <div className="bg-muted/30 p-2 rounded-lg">
                        <span className="font-bold">T</span> - Tango
                      </div>
                      <div className="bg-muted/30 p-2 rounded-lg">
                        <span className="font-bold">U</span> - Uniform
                      </div>
                      <div className="bg-muted/30 p-2 rounded-lg">
                        <span className="font-bold">V</span> - Victor
                      </div>
                      <div className="bg-muted/30 p-2 rounded-lg">
                        <span className="font-bold">W</span> - Whiskey
                      </div>
                      <div className="bg-muted/30 p-2 rounded-lg">
                        <span className="font-bold">X</span> - X-ray
                      </div>
                      <div className="bg-muted/30 p-2 rounded-lg">
                        <span className="font-bold">Y</span> - Yankee
                      </div>
                      <div className="bg-muted/30 p-2 rounded-lg">
                        <span className="font-bold">Z</span> - Zulu
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="numbers" className="border rounded-xl p-6">
                <h3 className="font-display text-xl font-semibold mb-4">Numbers & Readbacks</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Number Pronunciation</h4>
                    <p className="mb-4">Numbers in aviation are pronounced differently to ensure clarity:</p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                      <li>
                        <strong>0:</strong> "ZERO" (not "oh")
                      </li>
                      <li>
                        <strong>1:</strong> "ONE" or "WUN"
                      </li>
                      <li>
                        <strong>2:</strong> "TWO" or "TOO"
                      </li>
                      <li>
                        <strong>3:</strong> "THREE" or "TREE"
                      </li>
                      <li>
                        <strong>4:</strong> "FOUR" or "FOW-er"
                      </li>
                      <li>
                        <strong>5:</strong> "FIVE" or "FIFE"
                      </li>
                      <li>
                        <strong>6:</strong> "SIX"
                      </li>
                      <li>
                        <strong>7:</strong> "SEVEN"
                      </li>
                      <li>
                        <strong>8:</strong> "EIGHT"
                      </li>
                      <li>
                        <strong>9:</strong> "NINE" or "NIN-er"
                      </li>
                    </ul>
                    <p className="font-medium">Decimal points are pronounced "DECIMAL" or "POINT"</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Required Readbacks</h4>
                    <p className="mb-4">Certain instructions must be read back to ATC to confirm understanding:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Runway assignments</li>
                      <li>Clearances (taxi, takeoff, landing, etc.)</li>
                      <li>Heading instructions</li>
                      <li>Altitude assignments</li>
                      <li>Airspeed adjustments</li>
                      <li>Transponder (squawk) codes</li>
                      <li>Frequency changes</li>
                      <li>Altimeter settings</li>
                    </ul>
                    <div className="bg-primary/10 p-4 rounded-lg mt-4">
                      <p className="text-sm font-medium">
                        Always include your call sign in readbacks so ATC knows who is responding.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="phrases" className="border rounded-xl p-6">
                <h3 className="font-display text-xl font-semibold mb-4">Common Phrases and Their Meanings</h3>
                <div className="space-y-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-1">Acknowledge</h4>
                    <p className="text-sm">"Let me know that you have received and understood this message."</p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-1">Affirmative</h4>
                    <p className="text-sm">"Yes" or "That is correct."</p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-1">Negative</h4>
                    <p className="text-sm">"No" or "That is not correct" or "Not approved."</p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-1">Roger</h4>
                    <p className="text-sm">
                      "I have received and understood your last transmission." (Does NOT mean "yes")
                    </p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-1">Wilco</h4>
                    <p className="text-sm">"I understand your message and will comply with it."</p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-1">Say Again</h4>
                    <p className="text-sm">"Repeat all or part of your last transmission."</p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-1">Stand By</h4>
                    <p className="text-sm">"Wait and I will call you back." (No response is expected)</p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-1">Unable</h4>
                    <p className="text-sm">"I cannot comply with your request or instruction."</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* Communication Procedures */}
          <section>
            <h2 className="font-display text-2xl font-semibold mb-6">Communication Procedures</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Different airport environments require different communication procedures. Understanding these
              differences is key to safe and efficient operations.
            </p>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Tower className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Towered Airport Communications</CardTitle>
                      <CardDescription>Communicating with Air Traffic Control</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    At airports with an operating control tower, you'll communicate with different ATC positions
                    depending on your phase of flight.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Ground Control</h4>
                      <p className="text-sm mb-2">
                        Handles all aircraft and vehicle movements on taxiways and inactive runways.
                      </p>
                      <div className="border-l-4 border-primary pl-3 py-1">
                        <p className="text-sm italic">
                          "Centennial Ground, Cessna Three Four Five Six Alpha, at the flight school, information
                          Bravo, request taxi for VFR departure to the west."
                        </p>
                      </div>
                    </div>

                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Tower</h4>
                      <p className="text-sm mb-2">
                        Controls active runways and the immediate airspace around the airport.
                      </p>
                      <div className="border-l-4 border-primary pl-3 py-1">
                        <p className="text-sm italic">
                          "Centennial Tower, Cessna Three Four Five Six Alpha, ready for departure Runway One Seven
                          Right."
                        </p>
                      </div>
                    </div>

                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Approach/Departure Control</h4>
                      <p className="text-sm mb-2">
                        Handles aircraft transitioning between the en route environment and the airport.
                      </p>
                      <div className="border-l-4 border-primary pl-3 py-1">
                        <p className="text-sm italic">
                          "Denver Departure, Cessna Three Four Five Six Alpha, climbing through three thousand five
                          hundred for six thousand five hundred."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Communication Flow at Towered Airports</h4>
                    <ol className="list-decimal pl-6 space-y-1 text-sm">
                      <li>Listen to ATIS/ASOS/AWOS for current information</li>
                      <li>Contact Ground for taxi instructions (departing)</li>
                      <li>Contact Tower when ready for takeoff or when entering the pattern (arriving)</li>
                      <li>Follow Tower instructions for takeoff/landing</li>
                      <li>Contact Ground after exiting the runway</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Plane className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Non-Towered Airport Communications</CardTitle>
                      <CardDescription>Self-announcing procedures</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    At airports without an operating control tower, pilots must communicate with each other directly
                    using the Common Traffic Advisory Frequency (CTAF).
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Position Reporting</h4>
                      <p className="text-sm mb-2">
                        Announce your position, intentions, and airport name at key points.
                      </p>
                      <div className="border-l-4 border-primary pl-3 py-1">
                        <p className="text-sm italic">
                          "Frederick Traffic, Cessna Three Four Five Six Alpha, ten miles south, inbound for
                          landing, Frederick."
                        </p>
                      </div>
                    </div>

                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Pattern Announcements</h4>
                      <p className="text-sm mb-2">Announce each leg of the traffic pattern as you fly it.</p>
                      <div className="border-l-4 border-primary pl-3 py-1">
                        <p className="text-sm italic">
                          "Frederick Traffic, Cessna Three Four Five Six Alpha, entering left downwind for Runway
                          Two Three, Frederick."
                        </p>
                      </div>
                    </div>

                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Departure Announcements</h4>
                      <p className="text-sm mb-2">Announce your taxi and takeoff intentions.</p>
                      <div className="border-l-4 border-primary pl-3 py-1">
                        <p className="text-sm italic">
                          "Frederick Traffic, Cessna Three Four Five Six Alpha, taxiing to Runway Two Three for
                          departure to the west, Frederick."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Key Points for Non-Towered Operations</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Always include the airport name at the beginning and end of transmissions</li>
                      <li>Listen carefully before transmitting to avoid stepping on other communications</li>
                      <li>
                        Make position reports approximately 10 miles out, entering the pattern, and on each leg
                      </li>
                      <li>Be specific about your position using landmarks and distances</li>
                      <li>Remember that not all aircraft may have radios - maintain vigilance</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6">
              <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                <HelpCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <AlertTitle className="text-blue-800 dark:text-blue-300">Pro Tip</AlertTitle>
                <AlertDescription className="text-blue-700 dark:text-blue-400">
                  When in doubt about proper communication procedures, remember the "4 Ws": Who you're calling, Who
                  you are, Where you are, and What you want. This simple formula works in almost any situation.
                </AlertDescription>
              </Alert>
            </div>
          </section>

          {/* Radio Communication Examples */}
          <section className="bg-card rounded-2xl border p-8">
            <h2 className="font-display text-2xl font-semibold mb-6">Radio Communication Examples</h2>
            <p className="text-lg mb-6">
              The following examples demonstrate proper radio communication in various scenarios. Study these to
              build your confidence and proficiency.
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="initial-call">
                <AccordionTrigger className="text-lg font-medium">Initial Contact with ATC</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Ground Control - Initial Call</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium mb-1">Pilot:</p>
                          <div className="border-l-4 border-primary pl-3 py-1">
                            <p className="text-sm italic">
                              "Centennial Ground, Cessna Three Four Five Six Alpha, at the flight school with
                              information Delta, request taxi for VFR departure to the north practice area."
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Ground:</p>
                          <div className="border-l-4 border-muted-foreground pl-3 py-1">
                            <p className="text-sm italic">
                              "Cessna Three Four Five Six Alpha, Centennial Ground, taxi to Runway One Seven Right
                              via Alpha, Charlie. Altimeter three zero one zero."
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm font-medium mb-1">Pilot (readback):</p>
                        <div className="border-l-4 border-primary pl-3 py-1">
                          <p className="text-sm italic">
                            "Taxi to Runway One Seven Right via Alpha, Charlie. Altimeter three zero one zero,
                            Cessna Three Four Five Six Alpha."
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Tower - Initial Call</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium mb-1">Pilot:</p>
                          <div className="border-l-4 border-primary pl-3 py-1">
                            <p className="text-sm italic">
                              "Centennial Tower, Cessna Three Four Five Six Alpha, ready for departure Runway One
                              Seven Right."
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Tower:</p>
                          <div className="border-l-4 border-muted-foreground pl-3 py-1">
                            <p className="text-sm italic">
                              "Cessna Three Four Five Six Alpha, Centennial Tower, runway One Seven Right, cleared
                              for takeoff."
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm font-medium mb-1">Pilot (readback):</p>
                        <div className="border-l-4 border-primary pl-3 py-1">
                          <p className="text-sm italic">
                            "Cleared for takeoff Runway One Seven Right, Cessna Three Four Five Six Alpha."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pattern-work">
                <AccordionTrigger className="text-lg font-medium">
                  Pattern Work at a Towered Airport
                </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Requesting Closed Traffic</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm font-medium mb-1">Pilot:</p>
                              <div className="border-l-4 border-primary pl-3 py-1">
                                <p className="text-sm italic">
                                  "Centennial Tower, Cessna Three Four Five Six Alpha, request closed traffic."
                                </p>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm font-medium mb-1">Tower:</p>
                              <div className="border-l-4 border-muted-foreground pl-3 py-1">
                                <p className="text-sm italic">
                                  "Cessna Three Four Five Six Alpha, make left closed traffic, runway One Seven Right."
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-2">
                            <p className="text-sm font-medium mb-1">Pilot (readback):</p>
                            <div className="border-l-4 border-primary pl-3 py-1">
                              <p className="text-sm italic">
                                "Left closed traffic, runway One Seven Right, Cessna Three Four Five Six Alpha."
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">On Downwind</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm font-medium mb-1">Tower:</p>
                              <div className="border-l-4 border-muted-foreground pl-3 py-1">
                                <p className="text-sm italic">
                                  "Cessna Three Four Five Six Alpha, extend downwind, I'll call your base."
                                </p>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm font-medium mb-1">Pilot:</p>
                              <div className="border-l-4 border-primary pl-3 py-1">
                                <p className="text-sm italic">
                                  "Extend downwind, you'll call my base, Cessna Three Four Five Six Alpha."
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Landing Clearance</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm font-medium mb-1">Tower:</p>
                              <div className="border-l-4 border-muted-foreground pl-3 py-1">
                                <p className="text-sm italic">
                                  "Cessna Three Four Five Six Alpha, cleared to land runway One Seven Right."
                                </p>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm font-medium mb-1">Pilot:</p>
                              <div className="border-l-4 border-primary pl-3 py-1">
                                <p className="text-sm italic">
                                  "Cleared to land runway One Seven Right, Cessna Three Four Five Six Alpha."
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="non-towered">
                    <AccordionTrigger className="text-lg font-medium">Non-Towered Airport Operations</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Approaching the Airport</h4>
                          <div>
                            <p className="text-sm font-medium mb-1">Pilot:</p>
                            <div className="border-l-4 border-primary pl-3 py-1">
                              <p className="text-sm italic">
                                "Frederick Traffic, Cessna Three Four Five Six Alpha, ten miles south at three thousand
                                five hundred, descending to pattern altitude, inbound for landing, Frederick."
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Entering the Pattern</h4>
                          <div>
                            <p className="text-sm font-medium mb-1">Pilot:</p>
                            <div className="border-l-4 border-primary pl-3 py-1">
                              <p className="text-sm italic">
                                "Frederick Traffic, Cessna Three Four Five Six Alpha, entering left downwind for runway
                                Two Three, Frederick."
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">On Base</h4>
                          <div>
                            <p className="text-sm font-medium mb-1">Pilot:</p>
                            <div className="border-l-4 border-primary pl-3 py-1">
                              <p className="text-sm italic">
                                "Frederick Traffic, Cessna Three Four Five Six Alpha, turning left base for runway Two
                                Three, Frederick."
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">On Final</h4>
                          <div>
                            <p className="text-sm font-medium mb-1">Pilot:</p>
                            <div className="border-l-4 border-primary pl-3 py-1">
                              <p className="text-sm italic">
                                "Frederick Traffic, Cessna Three Four Five Six Alpha, final runway Two Three, full stop,
                                Frederick."
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">After Landing</h4>
                          <div>
                            <p className="text-sm font-medium mb-1">Pilot:</p>
                            <div className="border-l-4 border-primary pl-3 py-1">
                              <p className="text-sm italic">
                                "Frederick Traffic, Cessna Three Four Five Six Alpha, clear of runway Two Three, taxiing
                                to the ramp, Frederick."
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="emergency">
                    <AccordionTrigger className="text-lg font-medium">Emergency Communications</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border-l-4 border-red-500">
                          <h4 className="font-semibold mb-2 text-red-600 dark:text-red-400">Declaring an Emergency</h4>
                          <p className="text-sm mb-2">
                            In an emergency, use "Mayday" for life-threatening situations or "Pan-Pan" for urgent
                            situations that are not immediately life-threatening.
                          </p>
                          <div>
                            <p className="text-sm font-medium mb-1">Pilot (Mayday example):</p>
                            <div className="border-l-4 border-red-500 pl-3 py-1">
                              <p className="text-sm italic">
                                "Mayday, Mayday, Mayday, Denver Approach, Cessna Three Four Five Six Alpha, engine
                                failure, five miles east of Centennial Airport, passing through four thousand feet,
                                attempting emergency landing in field."
                              </p>
                            </div>
                          </div>
                          <div className="mt-2">
                            <p className="text-sm font-medium mb-1">Pilot (Pan-Pan example):</p>
                            <div className="border-l-4 border-red-500 pl-3 py-1">
                              <p className="text-sm italic">
                                "Pan-Pan, Pan-Pan, Pan-Pan, Denver Approach, Cessna Three Four Five Six Alpha, low oil
                                pressure, request priority handling to Centennial Airport."
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Emergency Information to Provide</h4>
                          <ul className="list-disc pl-6 space-y-1 text-sm">
                            <li>Nature of emergency</li>
                            <li>Aircraft identification</li>
                            <li>Position (distance and direction from a known point)</li>
                            <li>Altitude</li>
                            <li>Intentions</li>
                            <li>Persons on board</li>
                            <li>Fuel remaining (in hours/minutes)</li>
                            <li>Any other pertinent information</li>
                          </ul>
                        </div>

                        <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border-l-4 border-amber-500">
                          <h4 className="font-semibold mb-2 text-amber-600 dark:text-amber-400">
                            Lost Communications Procedures
                          </h4>
                          <p className="text-sm mb-2">If you experience radio failure:</p>
                          <ol className="list-decimal pl-6 space-y-1 text-sm">
                            <li>Check volume, headset connections, and circuit breakers</li>
                            <li>Try alternate frequencies (including 121.5 MHz emergency frequency)</li>
                            <li>Squawk 7600 on transponder</li>
                            <li>
                              If in VFR conditions, remain VFR and land at the nearest suitable airport with operational
                              requirements for your aircraft
                            </li>
                            <li>Watch for light gun signals from the tower if approaching a towered airport</li>
                          </ol>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

              {/* Common Mistakes and Tips */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-6">Common Mistakes and Tips</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Even experienced pilots make radio errors occasionally. Here are some common mistakes to avoid and
                  tips to improve your communications.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-red-500" /> Common Mistakes
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                        <h4 className="font-semibold mb-1 text-red-600 dark:text-red-400">Excessive Wordiness</h4>
                        <p className="text-sm">
                          Using unnecessary words that clutter communications and tie up the frequency.
                        </p>
                      </div>
                      <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                        <h4 className="font-semibold mb-1 text-red-600 dark:text-red-400">Speaking Too Quickly</h4>
                        <p className="text-sm">
                          Rushing through transmissions makes them difficult to understand, especially for non-native
                          English speakers.
                        </p>
                      </div>
                      <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                        <h4 className="font-semibold mb-1 text-red-600 dark:text-red-400">Incomplete Readbacks</h4>
                        <p className="text-sm">
                          Not reading back critical instructions like runway assignments, headings, altitudes, and
                          transponder codes.
                        </p>
                      </div>
                      <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                        <h4 className="font-semibold mb-1 text-red-600 dark:text-red-400">Forgetting Call Sign</h4>
                        <p className="text-sm">
                          Not including your full call sign in transmissions, making it unclear who is communicating.
                        </p>
                      </div>
                      <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                        <h4 className="font-semibold mb-1 text-red-600 dark:text-red-400">
                          Using Non-Standard Phraseology
                        </h4>
                        <p className="text-sm">
                          Using colloquial expressions or CB radio terminology instead of standard aviation phraseology.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" /> Tips for Improvement
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                        <h4 className="font-semibold mb-1 text-green-600 dark:text-green-400">
                          Listen Before Transmitting
                        </h4>
                        <p className="text-sm">
                          Always listen to the frequency before keying the mic to avoid stepping on other transmissions.
                        </p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                        <h4 className="font-semibold mb-1 text-green-600 dark:text-green-400">
                          Plan Your Transmission
                        </h4>
                        <p className="text-sm">
                          Think about what you want to say before keying the mic. Some pilots even write down complex
                          instructions.
                        </p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                        <h4 className="font-semibold mb-1 text-green-600 dark:text-green-400">
                          Practice Active Listening
                        </h4>
                        <p className="text-sm">
                          Listen to ATC communications even when they're not directed at you to build familiarity with
                          procedures.
                        </p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                        <h4 className="font-semibold mb-1 text-green-600 dark:text-green-400">Use Resources</h4>
                        <p className="text-sm">
                          Listen to live ATC online, use simulation programs, or practice with your instructor on the
                          ground.
                        </p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                        <h4 className="font-semibold mb-1 text-green-600 dark:text-green-400">Ask for Clarification</h4>
                        <p className="text-sm">
                          If you don't understand an instruction, don't hesitate to say "Say again" or request
                          clarification.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                    <HelpCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <AlertTitle className="text-blue-800 dark:text-blue-300">Practice Makes Perfect</AlertTitle>
                    <AlertDescription className="text-blue-700 dark:text-blue-400">
                      Consider recording your own radio communications during flight (with your instructor's permission)
                      and reviewing them afterward. This can help identify areas for improvement and build confidence.
                    </AlertDescription>
                  </Alert>
                </div>
              </section>

              {/* Practical Exercises */}
              <section className="bg-card rounded-2xl border p-8">
                <h2 className="font-display text-2xl font-semibold mb-6">Practical Exercises</h2>
                <p className="text-lg mb-6">
                  Try these exercises to improve your radio communication skills both on the ground and in the air.
                </p>

                <div className="space-y-6">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Exercise 1: Script Writing</h3>
                    <p className="text-sm mb-4">
                      Write out scripts for common radio calls you'll make during your next flight. Include:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-sm mb-4">
                      <li>Initial call to Ground/CTAF</li>
                      <li>Ready for takeoff call</li>
                      <li>Position reports (for non-towered airports)</li>
                      <li>Request for flight following</li>
                      <li>Approach and landing calls</li>
                    </ul>
                    <Button size="sm">Download Exercise Template</Button>
                  </div>

                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Exercise 2: Chair Flying with Radio Calls</h3>
                    <p className="text-sm mb-4">
                      Practice "chair flying" your next lesson, including all radio calls. Speak them out loud as if you
                      were actually flying.
                    </p>
                    <ol className="list-decimal pl-6 space-y-1 text-sm mb-4">
                      <li>Visualize each phase of flight</li>
                      <li>Make the appropriate calls at each point</li>
                      <li>Practice responses to likely ATC instructions</li>
                      <li>Include unexpected scenarios (frequency changes, holds, etc.)</li>
                    </ol>
                    <Button size="sm">View Chair Flying Guide</Button>
                  </div>

                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Exercise 3: Listen to Live ATC</h3>
                    <p className="text-sm mb-4">
                      Listen to live ATC communications from your local airport or busy terminal areas.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-sm mb-4">
                      <li>Note the phraseology used by both pilots and controllers</li>
                      <li>Pay attention to the pace and rhythm of communications</li>
                      <li>Listen for how pilots handle unexpected instructions or requests</li>
                      <li>Try to visualize the traffic pattern based solely on radio calls</li>
                    </ul>
                    <Button size="sm">Access Live ATC Resources</Button>
                  </div>
                </div>
              </section>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-6 border-t">
                <Button variant="outline" className="flex items-center">
                  <ChevronLeft className="mr-2 h-4 w-4" /> Sectional Charts
                </Button>
                <Button className="flex items-center">
                  Navigation <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Table of Contents */}
              <div className="sticky top-24 rounded-xl border bg-card p-6">
                <h3 className="font-display text-lg font-semibold mb-4">In This Section</h3>
                <nav className="space-y-1">
                  <a
                    href="#"
                    className="flex items-center px-3 py-2 text-sm rounded-md bg-primary/10 text-primary font-medium"
                  >
                    Radio Communications Overview
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                  >
                    Radio Equipment and Basics
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                  >
                    Standard Phraseology
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                  >
                    Communication Procedures
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                  >
                    Radio Communication Examples
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                  >
                    Common Mistakes and Tips
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                  >
                    Practical Exercises
                  </a>
                </nav>

                <Separator className="my-4" />

                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Glossary Terms
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    FAA Resources
                  </Button>
                </div>
              </div>

              {/* Related Content */}
              <div className="rounded-xl border bg-card p-6">
                <h3 className="font-display text-lg font-semibold mb-4">Related Content</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 group">
                    <div className="rounded-md bg-primary/10 p-2 text-primary">
                      <Tower className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium group-hover:text-primary transition-colors">
                        <a href="#">Airspace Classifications</a>
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Understanding different airspace types and their communication requirements
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="rounded-md bg-primary/10 p-2 text-primary">
                      <Plane className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium group-hover:text-primary transition-colors">
                        <a href="#">Cross-Country Planning</a>
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Communication planning for longer flights through multiple airspaces
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="rounded-md bg-primary/10 p-2 text-primary">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium group-hover:text-primary transition-colors">
                        <a href="#">Emergency Procedures</a>
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Comprehensive guide to handling emergencies, including communications
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Quiz */}
              <div className="rounded-xl border bg-card p-6">
                <h3 className="font-display text-lg font-semibold mb-4">Test Your Knowledge</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Take this quick quiz to check your understanding of radio communications.
                </p>
                <Button className="w-full">Take Quiz</Button>
              </div>

              {/* Download Resources */}
              <div className="rounded-xl border bg-card p-6">
                <h3 className="font-display text-lg font-semibold mb-4">Resources</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Radio Communications Cheat Sheet</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Phonetic Alphabet Card</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">ATC Light Gun Signals</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </main>
  )
}

