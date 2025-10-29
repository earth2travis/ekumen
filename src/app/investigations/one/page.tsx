"use client";

import { useEffect } from "react";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

export default function InvestigationOnePage() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let deck: any = null;

    const initReveal = async () => {
      // Wait a tick to ensure DOM is fully mounted
      await new Promise((resolve) => setTimeout(resolve, 100));

      const Reveal = (await import("reveal.js")).default;

      // Check if reveal container exists
      const revealDiv = document.querySelector(".reveal") as HTMLElement;
      if (!revealDiv) {
        console.error("Reveal container not found");
        return;
      }

      deck = new Reveal(revealDiv, {
        slideNumber: true,
        hash: true,
        transition: "slide",
        backgroundTransition: "fade",
      });

      try {
        await deck.initialize();
        console.log("Reveal.js initialized successfully");
      } catch (error) {
        console.error("Failed to initialize Reveal.js:", error);
      }
    };

    initReveal();

    return () => {
      if (deck) {
        try {
          deck.destroy();
        } catch (e) {
          console.error("Error destroying deck:", e);
        }
      }
    };
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          :root {
            --radius: 0.625rem;
            --background: #1F2421;
            --foreground: #EEE5E9;
            --card: #1F2421;
            --card-foreground: #EEE5E9;
            --popover: #1F2421;
            --popover-foreground: #EEE5E9;
            --primary: #216870;
            --primary-foreground: #EEE5E9;
            --secondary: #216869;
            --secondary-foreground: #EEE5E9;
            --muted: #216869;
            --muted-foreground: #EEE5E9;
            --accent: #49A078;
            --accent-foreground: #EEE5E9;
            --destructive: #ef4444;
            --warning: #f59e0b;
            --border: #216869;
            --input: #1F2421;
            --ring: #216870;
          }

          body, html {
            background-color: var(--background) !important;
            color: var(--foreground) !important;
          }

          .reveal {
            background: var(--background);
            background-image: 
              radial-gradient(circle at 20% 80%, rgba(73, 160, 120, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(33, 104, 112, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(33, 104, 105, 0.03) 0%, transparent 50%);
            font-size: 24px !important;
          }

          .reveal h1 { 
            font-size: 2.5em; 
            margin-bottom: 0.3em;
            color: var(--accent);
            text-shadow: 0 0 10px rgba(73, 160, 120, 0.5);
          }

          .reveal h2 { 
            font-size: 2em; 
            margin-bottom: 0.1em;
            color: var(--accent);
            text-shadow: 0 0 8px rgba(73, 160, 120, 0.4);
          }

          .reveal h3 { 
            font-size: 1.5em; 
            margin-bottom: 0.4em;
            color: var(--accent);
          }

          .reveal blockquote { 
            font-style: italic; 
            background: rgba(33, 104, 105, 0.2);
            backdrop-filter: blur(10px);
            padding: 1em;
            margin: 1em 0;
            border-left: 4px solid var(--accent);
            border-radius: 8px;
            font-size: 0.9em;
            box-shadow: 
              0 0 20px rgba(33, 104, 112, 0.2),
              inset 0 0 20px rgba(73, 160, 120, 0.05);
          }

          .reveal table { 
            font-size: 0.85em; 
            margin: 1em auto;
            border-collapse: separate;
            border-spacing: 0;
            border: 1px solid rgba(33, 104, 105, 0.6);
            border-radius: 8px;
            overflow: hidden;
          }

          .reveal td, .reveal th { 
            padding: 0.5em;
            border: 1px solid rgba(33, 104, 105, 0.4);
          }

          .reveal th {
            background: rgba(33, 104, 112, 0.3);
            color: var(--accent);
          }

          .reveal .small { font-size: 0.8em; }
          .reveal .tiny { font-size: 0.7em; }
          
          .reveal em { 
            color: var(--accent); 
            font-style: normal;
            text-shadow: 0 0 5px rgba(73, 160, 120, 0.3);
          }
          
          .reveal strong { 
            color: var(--accent); 
            font-weight: 600;
          }

          .profile-card { 
            position: relative;
            background: rgba(33, 104, 105, 0.2);
            backdrop-filter: blur(10px);
            padding: 1.2em; 
            margin: 0.8em 0;
            border: 1px solid rgba(33, 104, 105, 0.6);
            border-radius: var(--radius);
            font-size: 0.9em;
            box-shadow: 
              0 0 20px rgba(33, 104, 112, 0.2),
              inset 0 0 20px rgba(73, 160, 120, 0.05);
            text-align: left;
          }

          .profile-card::before {
            content: '';
            position: absolute;
            top: 8px;
            left: 8px;
            width: 10px;
            height: 10px;
            border: 2px solid var(--accent);
            border-right: none;
            border-bottom: none;
            z-index: 10;
          }

          .profile-card::after {
            content: '';
            position: absolute;
            bottom: 8px;
            right: 8px;
            width: 10px;
            height: 10px;
            border: 2px solid var(--accent);
            border-left: none;
            border-top: none;
            z-index: 10;
          }

          .stat-box {
            display: inline-block;
            background: linear-gradient(135deg, rgba(33, 104, 112, 0.4) 0%, rgba(73, 160, 120, 0.2) 100%);
            padding: 0.5em 1em;
            margin: 0.3em;
            border: 1px solid rgba(33, 104, 105, 0.6);
            border-radius: var(--radius);
            font-size: 0.9em;
            box-shadow: 0 0 10px rgba(33, 104, 112, 0.3);
          }

          .big-text {
            font-size: 1.3em;
            line-height: 1.4;
          }

          .reveal .slides {
            background-color: transparent;
          }

          .reveal section {
            color: var(--foreground);
          }

          .reveal ul {
            text-align: left;
          }

          @keyframes cyber-pulse {
            0%, 100% {
              text-shadow: 0 0 10px rgba(73, 160, 120, 0.5);
            }
            50% {
              text-shadow: 0 0 20px rgba(73, 160, 120, 0.8), 0 0 30px rgba(73, 160, 120, 0.4);
            }
          }

          .reveal h1 {
            animation: cyber-pulse 3s ease-in-out infinite;
          }
        `,
        }}
      />
      <div className="reveal">
        <div className="slides">
          <section>
            <h1>Customer Development Findings</h1>
            <p>September 15 – October 12, 2025 • 10 Interviews</p>
          </section>

          <section>
            <h2>We Thought</h2>
            <h3>Expected Target Segments</h3>
            <ul>
              <li>
                <strong>Context-Juggling Product Teams</strong> (4.6) — 10-15
                person startup teams with fragmented specs
              </li>
              <li>
                <strong>Alignment-Pressed Leadership</strong> (3.8) — Small org
                leaders needing decision context
              </li>
              <li>
                <strong>Client-Context Keepers</strong> (3.6) — Agencies
                managing multiple clients
              </li>
              <li>
                <strong>Knowledge Weavers</strong> (3.5) — Teams maintaining
                living org knowledge
              </li>
              <li>
                <strong>Pitch-Perfect Marketers</strong> (3.1) — Marketing teams
                needing brand consistency
              </li>
            </ul>
          </section>

          <section>
            <h2>We Thought</h2>
            <h3>Expected Problems</h3>
            <ol>
              <li>Information is siloed</li>
              <li>Best practices are not shared</li>
              <li>Slop is adding to our plates instead of taking away</li>
              <li>Teams do not know where to start</li>
            </ol>
          </section>

          <section>
            <h2>Our Process</h2>
            <div className="stat-box">10 interviews</div>
            <div className="stat-box">~60 min each</div>
            <div className="stat-box">Sep 15 - Oct 12</div>
            <p>
              <strong>Who we spoke with:</strong>
            </p>
            <ul>
              <li>Startup founders &amp; operators</li>
              <li>Design and engineering leads</li>
              <li>Investors &amp; consultants</li>
            </ul>
            <p>
              <strong>Method:</strong> Structured discovery focused on workflows
              and pain points
            </p>
          </section>

          <section>
            <h2>Who We Talked To (1/3)</h2>
            <div className="profile-card">
              <p>
                <strong>Nicolaus Sherrill</strong> • Head of Design at Decent
              </p>
              <p>
                5-person distributed team • Formal Q4 key result to fix
                collaboration
              </p>
              <blockquote>
                &ldquo;Weeks go by before we have to face that decision again,
                and we&rsquo;re like, <em>what did we say?</em>&rdquo;
              </blockquote>
            </div>
          </section>

          <section>
            <h2>Who We Talked To (2/3)</h2>
            <div className="profile-card">
              <p>
                <strong>Richard Dame &amp; Abel Osorio</strong> • Investment
                Partners
              </p>
              <p>
                2-person partnership • Richard (AI expert), Abel (locked out of
                context)
              </p>
              <blockquote>
                &ldquo;Richard works with ChatGPT and he has all his massive
                context...I&rsquo;m at ChatGPT zero. Instead of going 10x
                faster, <em>we are actually going slower.</em>&rdquo;
              </blockquote>
            </div>
          </section>

          <section>
            <h2>Who We Talked To (3/3)</h2>
            <div className="profile-card">
              <p>
                <strong>Jonathan Prozzi (JP)</strong> • AI Consultant &amp;
                Engineer
              </p>
              <p>Works with 2 organizations building AI-native workflows</p>
              <blockquote>
                &ldquo;Everybody&rsquo;s taking notes in their own way...things
                worded slightly differently...that&rsquo;s <em>catastrophic</em>{" "}
                when trying to build these processes.&rdquo;
              </blockquote>
            </div>
          </section>

          <section>
            <h2>Problem Validation</h2>
            <table>
              <thead>
                <tr>
                  <th>Problem</th>
                  <th>Resonance</th>
                  <th>Evidence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Information Siloed</td>
                  <td>
                    ✅ <strong>Strong</strong>
                  </td>
                  <td>6/10 urgently felt</td>
                </tr>
                <tr>
                  <td>AI Superpowers Not Shared</td>
                  <td>
                    ✅ <strong>Strong</strong>
                  </td>
                  <td>8/10 experiencing</td>
                </tr>
                <tr>
                  <td>AI Slop</td>
                  <td>⚠️ Weak</td>
                  <td>Solved via process</td>
                </tr>
                <tr>
                  <td>Overwhelmed</td>
                  <td>❌ Weak</td>
                  <td>8/10 have frameworks</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2>Problem Validation</h2>
            <blockquote>
              &ldquo;Everyone has their own AI notetaker...I don&rsquo;t get
              those transcripts. We&rsquo;re all having the same meetings...but
              creating <em>multiple parallel realities</em> of the same
              conversations.&rdquo;
              <br />
              <br />— Nicolaus Sherrill
            </blockquote>
          </section>

          <section>
            <h2>We Discovered</h2>
            <h3>Three Emergent Problems</h3>
            <p>
              <strong>1. Context Reconstruction Tax</strong> (7/10)
            </p>
            <p>Teams spend more time feeding context to AI than AI saves</p>
            <p>
              <strong>2. Partner Context Silos</strong> (4/10)
            </p>
            <p>Even 2-person teams can&rsquo;t share AI knowledge</p>
            <p>
              <strong>3. Decision Recovery</strong> (5/10)
            </p>
            <p>Critical weeks after planning, not real-time</p>
          </section>

          <section>
            <h2>The Real Problem Is...</h2>
            <div className="big-text">
              <blockquote>
                &ldquo;Instead of using a super powerful tool to go 10x faster,
                we are actually going slower...because of all the{" "}
                <em>context reconstruction.</em>&rdquo;
                <br />
                <br />— Abel Osorio
              </blockquote>
            </div>
            <p>
              <strong>The insight:</strong> AI tools are designed for
              individuals, not teams
            </p>
          </section>

          <section>
            <h2>Segment Insights</h2>
            <p>
              <strong>Hypothesis vs. Reality:</strong>
            </p>
            <table>
              <thead>
                <tr>
                  <th>Original</th>
                  <th>Actual Finding</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Context-Juggling Teams (10-15 ppl)</td>
                  <td>✅ Validated (4-7 ppl)</td>
                </tr>
                <tr>
                  <td>Alignment-Pressed Leadership</td>
                  <td>❌ Zero matches found</td>
                </tr>
                <tr>
                  <td>Knowledge Weavers</td>
                  <td>❌ Not early adopters</td>
                </tr>
                <tr>
                  <td>Client-Context Keepers</td>
                  <td>⚠️ Split into agencies vs operators</td>
                </tr>
                <tr>
                  <td>Pitch-Perfect Marketers</td>
                  <td>⚠️ Merged with agencies</td>
                </tr>
              </tbody>
            </table>
            <p>
              <strong>Key learning:</strong> AI adoption maturity matters more
              than team size
            </p>
          </section>

          <section>
            <h2>Our Beachhead</h2>
            <p>
              <strong>Product Teams</strong> (4-7 people, AI-forward,
              distributed)
            </p>
            <p>
              <strong>Why them:</strong>
            </p>
            <ul>
              <li>✅ Acute pain (Urgency across 6/10 interviews)</li>
              <li>✅ Budget control (Founders/leads can buy immediately)</li>
              <li>✅ Will evangelize (All offered referrals)</li>
            </ul>
            <p>
              <strong>Evidence:</strong> 6/10 interviews matched with strong
              buying signals
            </p>
          </section>

          <section>
            <h2>Workarounds We Saw</h2>
            <blockquote>
              &ldquo;I have a formal Q4 key result to reset our collaborative
              workspaces and tools.&rdquo;
              <br />
              <br />— Nicolaus (budget allocated, active timeline)
            </blockquote>
            <p>
              <strong>High-effort solutions:</strong>
            </p>
            <ul>
              <li>Richard: 20+ custom GPTs (can&rsquo;t share them)</li>
              <li>Willy: Documented AI patterns extensively</li>
              <li>JP: LLMs.txt files, GitHub actions, 90-min workshops</li>
            </ul>
          </section>

          <section>
            <h2>Buying Signals</h2>
            <div className="stat-box">
              5/10 showed strong immediate interest
            </div>
            <p>
              <strong>What this means:</strong>
            </p>
            <ul>
              <li>Building sophisticated workarounds = pain is real</li>
              <li>Budget authority at decision-maker level</li>
              <li>Active timeline pressure (Q4 key results)</li>
              <li>Network effects (all offered referrals)</li>
            </ul>
          </section>

          <section>
            <h2>What This Means</h2>
            <h3>Strategic Implications</h3>
            <ol>
              <li>
                <strong>Build MVP around decision recovery</strong> — Core use
                case validated across primary segment
              </li>
              <li>
                <strong>
                  Position as &ldquo;Stop Rebuilding Context&rdquo;
                </strong>{" "}
                — Lead with time savings, not collaboration features
              </li>
              <li>
                <strong>Target 4-7 person AI-forward teams</strong> — Not 10-15
                person product teams as originally predicted
              </li>
            </ol>
          </section>

          <section>
            <h2>What This Means</h2>
            <h3>Product Priorities</h3>
            <ol start={4}>
              <li>
                <strong>Focus on automatic context sharing</strong> — Between
                team members&rsquo; AI sessions (zero setup)
              </li>
              <li>
                <strong>Secondary: Marketing agencies</strong> — Channel
                opportunity with strong network effects
              </li>
            </ol>
          </section>

          <section>
            <h2>Next Steps</h2>
            <ul>
              <li>Solution testing with WorkOS</li>
              <li>Continue problem interviews with updated segments</li>
              <li>Refine recruiting process</li>
            </ul>
          </section>

          <section>
            <h2>Next Steps</h2>
            <h3>Key Questions to Validate</h3>
            <ul>
              <li>Is an all-in-one product desirable?</li>
              <li>Is decision recovery the strongest wedge use case?</li>
              <li>Can context be automatically shared between team members?</li>
            </ul>
          </section>

          <section>
            <h2>Key Quotes (1/2)</h2>
            <blockquote>
              &ldquo;What did we say?&rdquo;
              <br />
              <br />— Nicolaus, on decision recovery
            </blockquote>
            <blockquote>
              &ldquo;We are actually going slower.&rdquo;
              <br />
              <br />— Abel, on the AI paradox
            </blockquote>
          </section>

          <section>
            <h2>Key Quotes (2/2)</h2>
            <blockquote>
              &ldquo;Multiple parallel realities of the same
              conversations.&rdquo;
              <br />
              <br />— Nicolaus, on fragmentation
            </blockquote>
            <blockquote>
              &ldquo;That&rsquo;s catastrophic when building processes.&rdquo;
              <br />
              <br />— JP, on divergent notes
            </blockquote>
          </section>
        </div>
      </div>
    </>
  );
}
