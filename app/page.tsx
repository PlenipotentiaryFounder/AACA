import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  ChevronRight,
  Plane,
  GraduationCap,
  AlertTriangle,
  CloudSun,
  Radio,
  Compass,
  Headphones,
  Award,
  Heart,
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="py-8 px-4 md:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-aa-blue to-aa-navy text-white mb-12">
        <div className="absolute inset-0 bg-[url('/images/aircraft-wing-above-clouds.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 px-6 py-16 md:py-24 md:px-12 max-w-4xl">
          <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">
            American Airlines Cadet Academy
          </Badge>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Your Complete Guide to Flight Training Success
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl">
            Everything you need to know as you embark on your journey to becoming an American Airlines pilot.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-white text-aa-navy hover:bg-white/90">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Explore Guide <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 -mb-12 -mr-12 opacity-20 md:opacity-30">
          <div className="w-full h-full bg-[url('/images/aircraft-propeller-closeup.jpg')] bg-contain bg-no-repeat"></div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-3xl font-bold">Quick Access</h2>
          <Button variant="ghost" className="gap-1">
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="group hover-card-effect rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
            <div className="relative h-40 bg-muted">
              <div className="absolute inset-0 bg-[url('/images/cockpit-controls-closeup.jpg')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <Badge className="bg-primary hover:bg-primary/90">Essential</Badge>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-display text-xl font-semibold">Risk Management</h3>
                <AlertTriangle className="h-5 w-5 text-primary" />
              </div>
              <p className="text-muted-foreground mb-4">
                Learn the critical PAVE model and decision-making frameworks that keep pilots safe.
              </p>
              <Link href="/fundamentals/risk-management">
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  Read Guide
                </Button>
              </Link>
            </div>
          </div>

          <div className="group hover-card-effect rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
            <div className="relative h-40 bg-muted">
              <div className="absolute inset-0 bg-[url('/images/mock_oral.jpg')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <Badge className="bg-aa-red hover:bg-aa-red/90 text-white">Popular</Badge>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-display text-xl font-semibold">Checkride Preparation</h3>
                <Award className="h-5 w-5 text-aa-red" />
              </div>
              <p className="text-muted-foreground mb-4">
                Comprehensive strategies to ace your checkrides with confidence and precision.
              </p>
              <Link href="/checkrides">
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  Read Guide
                </Button>
              </Link>
            </div>
          </div>

          <div className="group hover-card-effect rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
            <div className="relative h-40 bg-muted">
              <div className="absolute inset-0 bg-[url('/images/dramatic-clouds-aerial.jpg')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <Badge className="bg-secondary hover:bg-secondary/90">New</Badge>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-display text-xl font-semibold">Weather Fundamentals</h3>
                <CloudSun className="h-5 w-5 text-secondary" />
              </div>
              <p className="text-muted-foreground mb-4">
                Master the essentials of aviation weather, from METARs to forecasting and decision-making.
              </p>
              <Link href="/fundamentals/weather">
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  Read Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Training Modules */}
      <section className="mb-16">
        <h2 className="font-display text-3xl font-bold mb-8">Training Modules</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center p-6 rounded-xl border bg-card text-card-foreground hover:shadow-md transition-shadow text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">Academy Basics</h3>
            <p className="text-sm text-muted-foreground mb-4">Program structure, expectations, and resources</p>
            <Button variant="ghost" size="sm" className="mt-auto">
              Explore <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-col items-center p-6 rounded-xl border bg-card text-card-foreground hover:shadow-md transition-shadow text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Plane className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">Flight Training</h3>
            <p className="text-sm text-muted-foreground mb-4">Maneuvers, procedures, and flight techniques</p>
            <Button variant="ghost" size="sm" className="mt-auto">
              Explore <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-col items-center p-6 rounded-xl border bg-card text-card-foreground hover:shadow-md transition-shadow text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Compass className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">Navigation</h3>
            <p className="text-sm text-muted-foreground mb-4">Charts, airspace, and navigation techniques</p>
            <Button variant="ghost" size="sm" className="mt-auto">
              Explore <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-col items-center p-6 rounded-xl border bg-card text-card-foreground hover:shadow-md transition-shadow text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Radio className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">Communications</h3>
            <p className="text-sm text-muted-foreground mb-4">Radio procedures, phraseology, and clearances</p>
            <Button variant="ghost" size="sm" className="mt-auto">
              Explore <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-3xl font-bold">Featured Content</h2>
          <Button variant="ghost" className="gap-1">
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden hover-card-effect">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  Featured Article
                </Badge>
                <span className="text-xs text-muted-foreground">5 min read</span>
              </div>
              <h3 className="font-display text-2xl font-semibold mb-2">
                Mastering the PAVE Model for Risk Assessment
              </h3>
              <p className="text-muted-foreground mb-4">
                A comprehensive breakdown of the PAVE model and how to apply it effectively in your preflight
                planning.
              </p>
              <Button className="w-full">Read Article</Button>
            </div>
          </div>

          <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden hover-card-effect">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline" className="bg-aa-red/10 text-aa-red border-aa-red/20">
                  Video Tutorial
                </Badge>
                <span className="text-xs text-muted-foreground">12 min watch</span>
              </div>
              <h3 className="font-display text-2xl font-semibold mb-2">Perfecting Your Radio Communications</h3>
              <p className="text-muted-foreground mb-4">
                Learn proper radio etiquette and phraseology with real-world examples from American Airlines pilots.
              </p>
              <Button className="w-full">Watch Video</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cadet Resources */}
      <section className="mb-16">
        <h2 className="font-display text-3xl font-bold mb-8">Essential Cadet Resources</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border bg-card text-card-foreground p-6 hover:shadow-md transition-shadow">
            <BookOpen className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-display text-xl font-semibold mb-2">Handbook</h3>
            <p className="text-sm text-muted-foreground mb-4">Your go-to guide for training details</p>
            <Link href="/guide/welcome">
              <Button variant="outline" size="sm" className="mt-auto">
                Open Guide
              </Button>
            </Link>
          </div>

          <div className="rounded-xl border bg-card text-card-foreground p-6 hover:shadow-md transition-shadow">
            <Headphones className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-display text-xl font-semibold mb-2">Communication Practice</h3>
            <p className="text-sm text-muted-foreground mb-4">Tools and tips for mastering radio calls</p>
            <Link href="/fundamentals/radio-communications">
              <Button variant="outline" size="sm" className="mt-auto">
                Start Practicing
              </Button>
            </Link>
          </div>

          <div className="rounded-xl border bg-card text-card-foreground p-6 hover:shadow-md transition-shadow">
            <Award className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-display text-xl font-semibold mb-2">Checkride Central</h3>
            <p className="text-sm text-muted-foreground mb-4">Prepare for your practical tests</p>
            <Link href="/checkrides">
              <Button variant="outline" size="sm" className="mt-auto">
                View Checkrides
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-8 flex justify-center opacity-50">
          <div className="w-64 h-64">
            <div className="w-full h-full bg-[url('/images/analog-cockpit-instruments.jpg')] bg-contain bg-no-repeat bg-center"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-3xl bg-gradient-to-r from-aa-navy to-aa-blue text-white overflow-hidden">
        <div className="px-6 py-12 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-white/80 text-lg mb-6">
              Start your training with confidence. Access all the resources, guides, and support you need to succeed
              in the American Airlines Cadet Academy.
            </p>
            <Button size="lg" className="bg-white text-aa-navy hover:bg-white/90">
              Start Your Training
            </Button>
          </div>
          <div className="hidden md:block">
            <div className="relative w-64 h-64 animate-float">
              <div className="w-full h-full bg-[url('/images/american-airlines-logo-stacked-white.png')] bg-contain bg-no-repeat"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-aa-blue to-aa-navy">
              <div className="absolute inset-0 flex items-center justify-center text-white font-display font-bold text-sm">
                AA
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-medium text-sm">American Airlines Cadet Academy</span>
              <span className="text-xs text-muted-foreground">Student Pilot Guide © 2023</span>
            </div>
          </div>

          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Support
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

