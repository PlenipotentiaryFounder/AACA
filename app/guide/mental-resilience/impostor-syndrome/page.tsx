import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Impostor Syndrome | AACA Student Pilot Guide",
  description:
    "Recognizing and overcoming feelings of inadequacy and building authentic confidence in flight training.",
}

export default function ImpostorSyndromePage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Recognizing & Overcoming Impostor Syndrome
          </h1>
          <p className="text-xl text-muted-foreground">Why It Shows Up, and How to Shut It Down for Good</p>
        </div>
      </div>
      <hr className="my-8" />

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p>
          It doesn't matter if you're brand new or nearing your commercial checkride—every cadet questions themselves at
          some point. You'll find yourself asking:
        </p>

        <ul>
          <li>"Am I really good enough to be here?"</li>
          <li>"Did I just get lucky on that stage check?"</li>
          <li>"Everyone else seems more confident—am I falling behind?"</li>
        </ul>

        <p>
          This is impostor syndrome. And it's more common in aviation than people admit. The kicker? This program is
          designed in a way that unintentionally feeds it.
        </p>

        <h2>Why This Program Creates Impostor Syndrome (If You Let It)</h2>

        <h3>1. You Were Selected from Tens of Thousands</h3>

        <p>
          That fact alone can make you feel like you have something to prove. Like you must have slipped through the
          cracks. Or you're not living up to the standard.
        </p>

        <p>
          But you weren't chosen by accident. The process is competitive because they only want people with
          potential—and that's exactly what you have.
        </p>

        <h3>2. You Rarely Fly Solo</h3>

        <p>
          Most of your flying is with a CFI watching your every move. You're constantly being evaluated. That makes it
          hard to build true PIC confidence—because you're rarely the only decision-maker in the airplane.
        </p>

        <p>
          But here's the secret: every solo decision you make under supervision still builds PIC authority. Own your
          decisions. Ask for feedback. Don't wait until you're alone to start thinking like a captain.
        </p>

        <h3>3. Compressed Timelines Can Make You Feel Behind</h3>

        <p>
          Cadet academy syllabi are often accelerated. Stage checks come fast. Written exams come fast. You'll feel like
          you're sprinting—and any hiccup can make you feel like you're falling apart.
        </p>

        <p>
          That's not failure. That's pressure. And pressure is what builds precision and performance… if you learn to
          manage it instead of absorb it.
        </p>

        <h2>How Impostor Syndrome Feels</h2>

        <ul>
          <li>You replay your worst flight over and over in your head.</li>
          <li>You compare yourself to the cadet who passed their stage check one week faster.</li>
          <li>You think every instructor secretly believes you're not going to make it.</li>
          <li>You're afraid to speak up in study group because you might say the wrong answer.</li>
        </ul>

        <p>None of this is real. But it feels real. And that's where it becomes dangerous.</p>

        <h2>How to Defeat It—for Real</h2>

        <h3>1. Measure Backward, Not Just Forward</h3>

        <p>
          It's easy to feel inadequate if you're only looking at where you still need to go. Instead, stop and look at
          how far you've already come.
        </p>

        <p>
          You didn't know how to preflight an airplane 3 months ago. Now you're briefing diversions, calling ATC, and
          calculating weight and balance.
        </p>

        <p>That's growth. That's real.</p>

        <h3>2. Teach, Share, Mentor</h3>

        <p>
          You don't have to be a CFI to help a peer. Explain something you learned last week. Talk through an approach
          plate. Share your worst flight story and what you learned.
        </p>

        <p>Teaching proves two things:</p>

        <ol>
          <li>You know more than you think.</li>
          <li>You're not alone in the struggle.</li>
        </ol>

        <h3>3. Communicate With Your CFI</h3>

        <p>
          You may feel behind, but your instructor may see real progress. They're not looking for perfection—they're
          watching how you handle pressure, recover from mistakes, and grow over time.
        </p>

        <p>If you're feeling doubt, talk about it. Don't hide it.</p>

        <h3>4. Know What Airlines Actually Want</h3>

        <p>
          Airlines don't want robots with perfect checkride scores. They want pilots who are self-aware, coachable, and
          resilient. If you've struggled and grown from it, that's a green flag.
        </p>

        <p>
          Impostor syndrome tells you your setbacks make you weak. Reality? They're building your story—the one that
          proves you're ready for this industry.
        </p>

        <h2>The Truth About Confidence</h2>

        <p>
          Confidence isn't some magical personality trait. It's built through repetition, reflection, and recovery. It's
          built through:
        </p>

        <ul>
          <li>Flying when it's hard.</li>
          <li>Admitting what you don't know.</li>
          <li>Learning how to improve—then doing it.</li>
        </ul>

        <p>
          If you're doing the work, you belong here. The uniform, the call sign, the epaulets—they don't make you a
          pilot. The mindset does.
        </p>
      </div>
    </div>
  )
}

