import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Ekumen",
  description:
    "Learn about the philosophy behind anthropological customer research.",
  openGraph: {
    title: "About Ekumen | Customer Understanding Through Patient Inquiry",
    description:
      "Learn about the philosophy behind anthropological customer research.",
  },
  twitter: {
    title: "About Ekumen | Customer Understanding Through Patient Inquiry",
    description:
      "Learn about the philosophy behind anthropological customer research.",
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 cyber-scanlines">
      <div className="max-w-2xl mx-auto space-y-6 pb-12">
        <Header />

        <Card className="cyber-glass">
          <CardContent className="p-4 space-y-6 cyber-scrollbar max-h-[80vh] overflow-y-auto">
            <h1 className="text-2xl font-semibold cyber-heading">Ekumen</h1>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold cyber-heading">
                The Literary Source
              </h2>
              <p className="cyber-text">
                <strong>Ekumen</strong> (also called the Ekumen of Known Worlds)
                is the central organization in Ursula K. Le Guin&apos;s Hainish
                Cycle of science fiction novels. It represents a loose
                confederation of human worlds spread across the galaxy, united
                not by force or empire, but through mutual understanding,
                cultural exchange, and patient diplomacy.
              </p>
              <p className="cyber-text">
                The word itself derives from the Greek &quot;oikoumene,&quot;
                meaning &quot;the inhabited world&quot; - suggesting the
                totality of human experience and perspective.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold cyber-heading">
                How the Ekumen Operates
              </h2>
              <p className="cyber-text">
                Le Guin&apos;s Ekumen sends &quot;Mobile&quot; envoys to study
                civilizations for years, sometimes decades. These observers live
                among alien cultures, learning their ways, understanding their
                values, and eventually inviting them to join the galactic
                network - but only when those worlds are ready, on their own
                terms.
              </p>
              <div className="cyber-text">
                <p className="mb-2">The Ekumen&apos;s core principles:</p>
                <ul className="space-y-2 pl-6">
                  <li>
                    <strong>Non-interference</strong>: Respect for sovereignty
                    and difference
                  </li>
                  <li>
                    <strong>Deep listening</strong>: Years of patient
                    observation before drawing conclusions
                  </li>
                  <li>
                    <strong>Cultural humility</strong>: Setting aside
                    assumptions to truly see another perspective
                  </li>
                  <li>
                    <strong>Mutual benefit</strong>: Connection through
                    understanding, not extraction or control
                  </li>
                  <li>
                    <strong>Anthropological rigor</strong>: Studying cultures as
                    they are, not as you wish them to be
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold cyber-heading">
                Why Ekumen for Customer Development
              </h2>
              <p className="cyber-text">
                Customer development is fundamentally an anthropological
                practice. You&apos;re studying a different culture - your
                customers&apos; world, needs, problems, and context - which is
                often radically different from your internal assumptions and
                product vision.
              </p>
              <p className="cyber-text">
                <strong>The parallel is exact:</strong>
              </p>
              <div className="cyber-text space-y-2">
                <p>
                  <strong>Mobile envoys → Customer researchers</strong>
                  <br />
                  Just as the Ekumen sends trained observers to live among alien
                  cultures, customer development sends researchers into the
                  field to deeply understand customer reality.
                </p>

                <p>
                  <strong>Years of patience → Continuous discovery</strong>
                  <br />
                  The Ekumen doesn&apos;t rush to conclusions. Neither should
                  customer development. Understanding deepens over time through
                  repeated contact and careful observation.
                </p>

                <p>
                  <strong>Cultural humility → Assumption testing</strong>
                  <br />
                  Ekumen envoys must shed their cultural baggage to truly see.
                  Customer researchers must shed their product assumptions to
                  hear what customers actually say.
                </p>

                <p>
                  <strong>Mutual benefit → Product-market fit</strong>
                  <br />
                  The Ekumen seeks connections that benefit all parties.
                  Customer development seeks solutions that genuinely serve
                  customer needs, creating sustainable business through
                  authentic value.
                </p>

                <p>
                  <strong>Anthropological study → Interview insights</strong>
                  <br />
                  Both are about systematic observation, pattern recognition,
                  and translating between worldviews - making the foreign
                  comprehensible without losing its essential truth.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold cyber-heading">
                Ekumen Within the Synthweave Universe
              </h2>
              <p className="cyber-text">
                <strong>Synthweave</strong> is about weaving together different
                contexts, perspectives, and intelligences (human and AI) into
                something stronger than any individual contribution. It&apos;s
                synthesis through collaboration.
              </p>
              <p className="cyber-text">
                <strong>Ekumen</strong> is the practice that feeds this
                synthesis. It&apos;s the disciplined gathering of customer
                perspectives and truths that become the raw material for
                Synthweave&apos;s collaborative intelligence. You cannot
                synthesize what you haven&apos;t first deeply understood.
              </p>
              <div className="cyber-text">
                <p className="mb-2">The relationship:</p>
                <ul className="space-y-1 pl-6">
                  <li>
                    <strong>Ekumen</strong> = Understanding the inhabited world
                    of your customers
                  </li>
                  <li>
                    <strong>Synthweave</strong> = Weaving that understanding
                    into collaborative intelligence and product decisions
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold cyber-heading">
                The Name&apos;s Power
              </h2>
              <p className="cyber-text">
                &quot;Ekumen&quot; carries weight and sophistication without
                being obscure. It signals:
              </p>
              <ul className="cyber-text space-y-2 pl-6">
                <li>
                  <strong>Intellectual seriousness</strong>: This isn&apos;t
                  just &quot;doing interviews,&quot; it&apos;s systematic
                  cultural understanding
                </li>
                <li>
                  <strong>Respect for customers</strong>: They&apos;re not data
                  points; they&apos;re a world to be understood on their own
                  terms
                </li>
                <li>
                  <strong>Long-term thinking</strong>: Like the Ekumen&apos;s
                  patient diplomacy, good customer development is ongoing, not a
                  one-time extraction
                </li>
                <li>
                  <strong>Literary lineage</strong>: It connects to Le
                  Guin&apos;s humanistic vision of technology serving
                  understanding rather than domination
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold cyber-heading">
                In Practice
              </h2>
              <p className="cyber-text">
                When teams use Ekumen, they&apos;re not just &quot;running
                customer interviews.&quot; They&apos;re:
              </p>
              <ul className="cyber-text space-y-1 pl-6">
                <li>
                  <strong>Entering another world</strong> (the customer&apos;s
                  reality)
                </li>
                <li>
                  <strong>Observing with humility and rigor</strong>
                </li>
                <li>
                  <strong>Translating between worldviews</strong> (customer
                  needs ↔ product capabilities)
                </li>
                <li>
                  <strong>
                    Building connections based on genuine understanding
                  </strong>
                </li>
                <li>
                  <strong>
                    Creating mutual benefit through patient, disciplined
                    practice
                  </strong>
                </li>
              </ul>
              <p className="cyber-text">
                The name reminds us that customer development, done right, is an
                act of cultural bridge-building - exactly what Le Guin&apos;s
                Ekumen represents.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold cyber-heading">
                Conclusion
              </h2>
              <p className="cyber-text">
                <strong>Ekumen</strong> captures both the philosophy and
                practice of customer development while sitting perfectly within
                the Synthweave product family. It&apos;s a name that respects
                the difficulty and importance of truly understanding others -
                whether they&apos;re alien civilizations or your next customer
                cohort.
              </p>
              <p className="cyber-text">
                <strong>It says:</strong> We take understanding seriously.
                We&apos;re not here to extract - we&apos;re here to connect.
              </p>
            </section>

            <div className="pt-4 border-t border-border">
              <Link
                href="/"
                className="cyber-heading hover:opacity-80 transition-opacity"
              >
                ← Back to chat
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
