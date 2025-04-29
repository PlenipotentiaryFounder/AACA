import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Avoiding Burnout | AACA Student Pilot Guide",
  description: "Strategies for sustaining high performance and breaking through plateaus in flight training.",
}

export default function AvoidingBurnoutPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Avoiding Burnout</h1>
          <p className="text-xl text-muted-foreground">The Long-Game Mentality</p>
        </div>
      </div>
      <hr className="my-8" />

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="lead">Sustain High Performance by Thinking Like a Professional</p>

        <p>
          Burnout in flight training doesn't happen all at once—it builds slowly. You push through long weeks. You stop
          sleeping well. You start flying just to check a box. You forget why you're here.
        </p>

        <p>
          Cadets don't burn out because they're weak. They burn out because they're always "on." If you don't learn to
          manage your energy and recover with intention, even the strongest motivation will fade.
        </p>

        <h2>What Burnout Actually Looks Like</h2>

        <ul>
          <li>You lose interest in flying, even though it used to excite you.</li>
          <li>You feel mentally drained during ground school or sim lessons.</li>
          <li>You're making simple mistakes in the airplane.</li>
          <li>You feel overwhelmed, but don't know how to fix it.</li>
          <li>You're putting in more time, but getting less return.</li>
        </ul>

        <p>
          This isn't just about fatigue—it's a mismatch between effort and recovery. And if it's not addressed, it can
          cost you time, money, and even your spot in the program.
        </p>

        <h2>Plateaus Are Normal—But Misunderstood</h2>

        <p>
          Burnout often feels like a plateau. But the truth is, plateaus are part of the learning process. Even great
          students hit them. Here's what that looks like:
        </p>

        <ul>
          <li>
            Strong cadets plateau after a surge of rapid progress. They feel frustrated when things suddenly stop
            "clicking."
          </li>
          <li>Struggling cadets plateau when they're overwhelmed. Information stacks up and performance stalls.</li>
        </ul>

        <p>Either way—it's not the end of the line. It's a signal to adjust, not a sign of failure.</p>

        <h2>How to Break Through a Plateau</h2>

        <ul>
          <li>
            Fly for fun. Sometimes a pattern break—a scenic flight, a discovery flight with a friend—can reset your
            mindset and restore your love for flying.
          </li>
          <li>
            Work on something else. If you're stuck on one maneuver, switch focus. Come back with a fresh perspective.
          </li>
          <li>
            Debrief differently. Talk to your instructor. Review your lessons from a new angle. Ask different questions.
          </li>
          <li>
            Take a day off. Rest is not lazy. It's strategic. One clear-headed day can save you a week of spinning your
            wheels.
          </li>
        </ul>

        <p className="font-medium">
          Pro Tip: Communicate with your CFI. They've seen this before. A good instructor knows when to push and when to
          pause—but they can only help if they know where your head's at.
        </p>

        <h2>Build a Sustainable Routine</h2>

        <h3>1. Sleep Is Non-Negotiable</h3>

        <p>You cannot out-study a tired brain. Sleep drives retention, reaction time, and judgment.</p>

        <ul>
          <li>Set a consistent sleep schedule.</li>
          <li>Avoid caffeine late in the day.</li>
          <li>Don't trade sleep for last-minute studying—it's not worth it.</li>
        </ul>

        <h3>2. Move Your Body, Not Just Your Brain</h3>

        <p>
          Exercise sharpens your mind. Even 20–30 minutes of movement a day can clear mental fog, improve mood, and
          increase energy.
        </p>

        <ul>
          <li>Walk, run, stretch, lift—just move.</li>
          <li>Bonus: consistent exercise improves sleep quality, too.</li>
        </ul>

        <h3>3. Don't Neglect Joy</h3>

        <p>
          Hobbies. Nature. Music. Cooking. Family. Laughter. These aren't distractions—they're essential parts of your
          identity.
        </p>

        <p>When you stay connected to who you are outside the cockpit, you show up sharper inside it.</p>

        <h2>Burnout Is Preventable—If You Train With Balance</h2>

        <p>
          The airline industry doesn't just need skilled pilots—it needs durable ones. Pilots who can show up with focus
          and composure, day after day. That starts now.
        </p>

        <p>
          Flight training isn't about sprinting to the finish. It's about building the kind of consistency and
          resilience that will serve you for decades.
        </p>
      </div>
    </div>
  )
}

