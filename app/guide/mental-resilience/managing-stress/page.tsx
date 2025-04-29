import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Managing Stress & Setbacks | AACA Student Pilot Guide",
  description:
    "Strategies for staying focused when flight training gets tough and tools for high-performance recovery.",
}

export default function ManagingStressPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Managing Stress & Setbacks</h1>
          <p className="text-xl text-muted-foreground">Staying Focused When Training Gets Tough</p>
        </div>
      </div>
      <hr className="my-8" />

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="lead">
          Flight training demands more than technical skill—it requires emotional discipline. The ability to manage
          pressure, recover from setbacks, and stay mentally sharp is often the defining trait between those who finish
          strong and those who fall behind.
        </p>

        <p>
          Every cadet will face friction: failed flights, checkride delays, fatigue, financial concerns, personal
          stress. These aren't exceptions—they're part of the process. What matters is how you adapt.
        </p>

        <h2>Setbacks Will Happen—Here's Why That Matters</h2>

        <p>
          When training doesn't go as planned, the first instinct is often to question yourself. "Am I behind? Am I
          falling short?" But understanding the nature of setbacks is key:
        </p>

        <ul>
          <li>Training isn't linear. You may progress quickly one week, then plateau the next. That's normal.</li>
          <li>Delays are inevitable. Weather, maintenance, scheduling—all outside your control.</li>
          <li>Mental pressure compounds. Especially if you're trying to juggle perfection with performance.</li>
        </ul>

        <p>The challenge is not to eliminate setbacks—but to manage your mindset when they occur.</p>

        <h2>Mental Tools for High-Performance Recovery</h2>

        <h3>1. Deconstruct the Problem</h3>

        <p>Stress often feels bigger than it is. The solution is structure. Ask:</p>

        <ul>
          <li>What specifically isn't working? (Is it checklists? Confidence on radios? Study habits?)</li>
          <li>Is this a one-off, or a pattern?</li>
          <li>What action can I take right now to address it?</li>
        </ul>

        <p>Write it down. Review it with your CFI. Don't internalize—analyze.</p>

        <h3>2. Break the Spiral with Small Wins</h3>

        <p>Psychological momentum is real. When motivation dips, find frictionless goals:</p>

        <ul>
          <li>Re-fly a maneuver in the sim.</li>
          <li>Review one ACS task, not ten.</li>
          <li>Run a perfect preflight from memory.</li>
        </ul>

        <p>Each win restores clarity and control—and gets you back on track.</p>

        <h3>3. Build a Support System Early</h3>

        <p>Most cadets wait until they're overwhelmed to seek support. Don't. Start from day one:</p>

        <ul>
          <li>Connect with upperclassmen.</li>
          <li>Form study groups.</li>
          <li>Check in with peers weekly.</li>
          <li>Lean on mentors and training advisors.</li>
        </ul>

        <p>
          You'll be surprised how many cadets share the same doubts—and how quickly shared experience can become shared
          strength.
        </p>

        <h3>4. Normalize Failure Without Lowering Standards</h3>

        <p>
          You're not here to get everything right the first time. You're here to improve. Missing a maneuver, scoring
          low on a quiz, or even failing a stage check doesn't define you. What matters is:
        </p>

        <ul>
          <li>Do you know why it happened?</li>
          <li>Have you taken steps to correct it?</li>
          <li>Can you articulate the lesson learned?</li>
        </ul>

        <p>That's what instructors and examiners respect—and what the industry looks for long-term.</p>

        <h2>Mindset Is the System</h2>

        <p>
          Stress isn't a signal to stop—it's a sign you've hit your current limit. With the right tools, that limit
          becomes a threshold—not a wall.
        </p>

        <p>This is what separates students who get through training from those who grow through training.</p>
      </div>
    </div>
  )
}

