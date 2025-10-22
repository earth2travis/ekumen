"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function SegmentFeedbackForm() {
  const [currentView, setCurrentView] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    // Respondent Info
    respondentName: "",

    // Part 2: Discovery Questions
    q1Response: "",
    q2Response: "",
    q3Response: "",

    // Context-Juggling Product Teams
    cjptKeep: "",
    cjptChanges: "",
    cjptScores: "",
    cjptOther: "",

    // Alignment-Pressed Leadership Teams
    apltKeep: "",
    apltWhy: "",
    apltChange: "",
    apltOther: "",

    // Client-Context Keepers
    cckDirection: "",
    cckMultiThoughts: "",
    cckAgencyThoughts: "",
    cckOther: "",

    // Knowledge Weavers
    kwKeep: "",
    kwBuilders: "",
    kwValidate: "",
    kwOther: "",

    // Pitch-Perfect Marketers
    ppmKeep: "",
    ppmInterview: "",
    ppmOther: "",

    // AI-Native Small Team Operators
    ainstoAdd: "",
    ainstoDescription: "",
    ainstoPriority: "",
    ainstoPriorityReasoning: "",
    ainstoConcerns: "",

    // Part 5: Additional Considerations
    q4Response: "",
    q5Response: "",
    confidence: "",
    q6Increase: "",
    q6Interviews: "",
    q6NextSteps: "",
    q6Feedback: "",
  });

  const viewTitles = [
    "Segment Refinement Overview",
    "Part 2: Discovery Questions",
    "Part 3: Context-Juggling Product Teams",
    "Part 3: Alignment-Pressed Leadership Teams",
    "Part 3: Client-Context Keepers",
    "Part 3: Knowledge Weavers",
    "Part 3: Pitch-Perfect Marketers",
    "Part 4: New Segment Evaluation",
    "Part 5: Additional Considerations",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        alert("Feedback submitted successfully!");
        // Reset form or redirect
      } else {
        alert("Failed to submit feedback. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (currentView < viewTitles.length - 1) {
      setCurrentView(currentView + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (currentView > 0) {
      setCurrentView(currentView - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleFinalSubmit = () => {
    handleSubmit({ preventDefault: () => {} } as React.FormEvent);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-6">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold cyber-heading">
          Segment Refinement Feedback
        </h1>
        <p className="cyber-text text-left">
          We began with assumptions—our best understanding of who might first
          adopt our work and why. Then we sent envoys into the field. Ten
          conversations later, we return with new maps drawn from actual
          observation. Some of our assumptions held. Others dissolved in the
          face of what people actually said, did, and needed.
        </p>
        <p className="cyber-text text-left">
          Now the council must decide: Where did we see clearly from the start?
          Where were we mistaken? And most critically—what territory remains
          unmapped, requiring further exploration before we can move forward
          with confidence?
        </p>
        <p className="cyber-text text-left">
          This form places our original assumptions alongside what we learned
          through patient inquiry. Your observations will shape both our
          understanding of who we serve and where we direct our next rounds of
          discovery.
        </p>
      </div>

      <Separator className="bg-primary/30" />

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            Step {currentView + 1} of {viewTitles.length}
          </span>
          <span className="cyber-heading text-sm">
            {viewTitles[currentView]}
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-accent h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((currentView + 1) / viewTitles.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <Separator className="bg-primary/30" />

      {currentView === 0 && (
        <Card className="cyber-glass">
          <CardHeader>
            <CardTitle className="text-2xl cyber-heading">Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 cyber-text">
            <div className="cyber-border rounded p-4 space-y-2">
              <p>
                <strong className="cyber-heading">Interviews Analyzed:</strong>{" "}
                10 interviews
              </p>
              <p>
                <strong className="cyber-heading">Analysis Date:</strong>{" "}
                October 21, 2025
              </p>
              <p>
                <strong className="cyber-heading">Interviewees:</strong> Bob,
                Nicolaus, Richard, Matt, Taylor, JP, Willy, Javid, Michael, Abel
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold cyber-heading mb-4">
                Resources
              </h3>

              <ul className="list-disc list-inside space-y-2">
                <li>
                  <a
                    href="https://next.snipdesk.com/snips/9e2768b8-cd96-4a5c-8f0c-0faf67a88644/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-heading font-semibold hover:underline"
                  >
                    Early Adopter Segments v0.1.3
                  </a>
                </li>
                <li>
                  <a
                    href="https://next.snipdesk.com/snips/5245b3b3-bb4f-4b16-bba2-439e555a578a/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-heading font-semibold hover:underline"
                  >
                    Early Adopter Segment Refinement - Batch 1 v3.0.0
                  </a>
                </li>
              </ul>
            </div>

            <Separator className="bg-border/50 my-6" />

            <div className="space-y-3">
              <Label
                htmlFor="respondentName"
                className="text-xl font-semibold cyber-heading mb-4"
              >
                Your Name
              </Label>
              <Input
                id="respondentName"
                value={formData.respondentName}
                onChange={(e) =>
                  setFormData({ ...formData, respondentName: e.target.value })
                }
                placeholder="Enter your name"
                className="bg-background/50 border-primary/30"
              />
            </div>

            <Separator className="bg-border/50 my-6" />

            <div>
              <h3 className="text-xl font-semibold cyber-heading mb-4">
                Key Findings
              </h3>

              <div className="cyber-border rounded p-4 mb-4 bg-accent/10">
                <h4 className="font-semibold cyber-heading mb-2">
                  Segments That Performed as Expected:
                </h4>
                <p>
                  {" "}
                  <strong className="cyber-heading">None:</strong> All original
                  segments require adjustment based on evidence
                </p>
              </div>

              <div className="cyber-border rounded p-4 mb-4 bg-destructive/10">
                <h4 className="font-semibold cyber-heading text-destructive mb-2">
                  Segments That Need Adjustment:
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong className="cyber-heading">
                      Context-Juggling Product Teams:
                    </strong>{" "}
                    Exists but needs refinement - smaller teams (4-7 not 10-15)
                    with focus on AI workflow coordination vs. traditional
                    handoff problems
                  </li>
                  <li>
                    <strong className="cyber-heading">
                      Knowledge Weavers:
                    </strong>{" "}
                    Only 1 partial fit (JP as enabler, not end user) - weak
                    evidence for segment
                  </li>
                  <li>
                    <strong className="cyber-heading">
                      Alignment-Pressed Leadership Teams:
                    </strong>{" "}
                    Zero fits in interviews - no evidence
                  </li>
                  <li>
                    <strong className="cyber-heading">
                      Client-Context Keepers:
                    </strong>{" "}
                    Only 1 fit (Richard as multi-venture operator), but
                    different from predicted agency model
                  </li>
                </ul>
              </div>

              <div className="cyber-border rounded p-4 mb-4 bg-accent/10">
                <h4 className="font-semibold cyber-heading mb-2">
                  New Segments Identified:
                </h4>
                <p>
                  {" "}
                  <strong className="cyber-heading">
                    AI-Native Small Team Operators:
                  </strong>{" "}
                  Strong emergent segment (4/10 strong fits, highest pain scores
                  at 4.25/5) - distributed teams of 4-7 where every member uses
                  AI extensively
                </p>
              </div>

              <div className="cyber-border rounded p-4 mb-4 bg-warning/10">
                <h4 className="font-semibold cyber-heading mb-2">
                  Segments Not Evaluated:
                </h4>
                <p>
                  <strong className="cyber-heading">
                    Pitch-Perfect Marketers:
                  </strong>{" "}
                  No interviews conducted yet
                </p>
              </div>

              <div className="cyber-border rounded p-4 bg-primary/10">
                <h4 className="font-semibold cyber-heading mb-2">
                  Critical Finding:
                </h4>
                <p>
                  The data suggests{" "}
                  <strong className="cyber-heading">
                    AI-Native Small Team Operators
                  </strong>{" "}
                  as beachhead, not Context-Juggling Product Teams as originally
                  predicted.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {currentView === 1 && (
        <Card className="cyber-glass">
          <CardHeader>
            <CardTitle className="text-2xl cyber-heading">
              Part 2: Discovery Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 cyber-text">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold cyber-heading">
                Question 1: Most Interesting Findings
              </h3>

              <div className="cyber-border rounded p-4 space-y-3 bg-primary/10">
                <h4 className="font-semibold cyber-heading">
                  What we found in the analysis:
                </h4>
                <p>The three most notable findings were:</p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li>
                    <strong className="cyber-heading">
                      Team size matters more than we thought
                    </strong>{" "}
                    - The sweet spot is 4-7 people, not 10-15. Smaller teams
                    have acute pain because everyone wears multiple hats and
                    lacks formal process, while larger teams build process
                    workarounds.
                  </li>
                  <li>
                    <strong className="cyber-heading">
                      AI adoption intensity is the key variable
                    </strong>{" "}
                    - The pain is most acute when <em>every team member</em> is
                    a heavy AI user creating individual context silos. Teams
                    with mixed AI adoption don&apos;t experience the same
                    urgency.
                  </li>
                  <li>
                    <strong className="cyber-heading">
                      Partner context silos hit even 2-person teams
                    </strong>{" "}
                    - Abel and Richard&apos;s case shows that even the smallest
                    possible team experiences acute pain if both are AI power
                    users who can&apos;t share context. They described
                    &quot;going slower with AI than without it.&quot;
                  </li>
                </ol>
              </div>

              <Label
                htmlFor="q1Response"
                className="text-xl font-semibold cyber-heading mb-4"
              >
                Question for you:
              </Label>
              <p>
                What finding from the refinement analysis was most interesting
                or surprising to you? What stood out as particularly important?
              </p>
              <Textarea
                id="q1Response"
                value={formData.q1Response}
                onChange={(e) =>
                  setFormData({ ...formData, q1Response: e.target.value })
                }
                placeholder="Enter your response here..."
                className="min-h-[120px] bg-background/50 border-primary/30"
              />
            </div>

            <Separator className="bg-border/50" />

            <div className="space-y-3">
              <h3 className="text-xl font-semibold cyber-heading">
                Question 2: Team Discussion Insights
              </h3>
              <Label
                htmlFor="q2Response"
                className="text-xl font-semibold cyber-heading mb-4"
              >
                Question for you:
              </Label>
              <p>
                Have you had any team discussions about target segments since
                conducting these interviews? What insights or perspectives came
                up that we should consider when updating the segment
                definitions?
              </p>
              <Textarea
                id="q2Response"
                value={formData.q2Response}
                onChange={(e) =>
                  setFormData({ ...formData, q2Response: e.target.value })
                }
                placeholder="Enter your response here..."
                className="min-h-[120px] bg-background/50 border-primary/30"
              />
            </div>

            <Separator className="bg-border/50" />

            <div className="space-y-3">
              <h3 className="text-xl font-semibold cyber-heading">
                Question 3: Segment Priority Shifts
              </h3>

              <div className="cyber-border rounded p-4 space-y-4 bg-primary/10">
                <div>
                  <h4 className="font-semibold cyber-heading mb-2">
                    Current priority order (by weighted score):
                  </h4>
                  <ol className="list-decimal list-inside space-y-1 ml-2">
                    <li>
                      <strong className="cyber-heading">
                        Context-Juggling Product Teams
                      </strong>{" "}
                      (4.6 weighted)
                    </li>
                    <li>
                      <strong className="cyber-heading">
                        Alignment-Pressed Leadership Teams
                      </strong>{" "}
                      (3.8 weighted)
                    </li>
                    <li>
                      <strong className="cyber-heading">
                        Client-Context Keepers
                      </strong>{" "}
                      (3.6 weighted)
                    </li>
                    <li>
                      <strong className="cyber-heading">
                        Knowledge Weavers
                      </strong>{" "}
                      (3.5 weighted)
                    </li>
                    <li>
                      <strong className="cyber-heading">
                        Pitch-Perfect Marketers
                      </strong>{" "}
                      (3.1 weighted)
                    </li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold cyber-heading mb-2">
                    Recommended priority order from analysis:
                  </h4>
                  <ol className="list-decimal list-inside space-y-1 ml-2">
                    <li>
                      <strong className="cyber-heading">
                        AI-Native Small Team Operators
                      </strong>{" "}
                      (4.21 weighted actual) - New segment, 4 strong fits
                    </li>
                    <li>
                      <strong className="cyber-heading">
                        Context-Juggling Product Teams
                      </strong>{" "}
                      (3.85 weighted actual) - Modified, 2 strong fits
                    </li>
                    <li>
                      <strong className="cyber-heading">
                        Client-Context Keepers/Multi-Venture Operators
                      </strong>{" "}
                      (3.8 weighted actual) - 1 strong fit but needs
                      clarification
                    </li>
                    <li>
                      <strong className="cyber-heading">
                        Knowledge Weavers
                      </strong>{" "}
                      - Weak evidence (1 partial fit)
                    </li>
                    <li>
                      <strong className="cyber-heading">
                        Alignment-Pressed Leadership Teams
                      </strong>{" "}
                      - No evidence (0 fits)
                    </li>
                  </ol>
                </div>
              </div>

              <Label
                htmlFor="q3Response"
                className="text-xl font-semibold cyber-heading mb-4"
              >
                Question for you:
              </Label>
              <p>
                Does the recommended priority order feel right based on what
                you&apos;ve learned? Should we adjust the beachhead segment or
                change the prioritization? What&apos;s driving your thinking?
              </p>
              <Textarea
                id="q3Response"
                value={formData.q3Response}
                onChange={(e) =>
                  setFormData({ ...formData, q3Response: e.target.value })
                }
                placeholder="Enter your response here..."
                className="min-h-[120px] bg-background/50 border-primary/30"
              />
            </div>
          </CardContent>
        </Card>
      )}

      {currentView === 2 && (
        <Card className="cyber-glass">
          <CardHeader>
            <CardTitle className="text-2xl cyber-heading">
              Part 3: Segment-by-Segment Decisions
            </CardTitle>
            <CardDescription className="text-xl font-semibold cyber-heading">
              Segment: Context-Juggling Product Teams
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 cyber-text">
            <div className="cyber-border rounded p-4 space-y-3 bg-primary/10">
              <div>
                <h4 className="font-semibold cyber-heading mb-2">
                  Current Definition:
                </h4>
                <p>
                  Startup product teams (and adjacent AI-tinkerers within them)
                  struggling to keep specs, AI experiments, and decisions
                  aligned across PM, design, and engineering.
                </p>
              </div>

              <div>
                <h4 className="font-semibold cyber-heading mb-2">
                  Current Scores:
                </h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Pain Urgency: 5</li>
                  <li>Budget Ownership: 4</li>
                  <li>Growth Impact: 4</li>
                  <li>Interview Accessibility: 4</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold cyber-heading mb-2">
                Refinement Analysis Findings:
              </h4>
              <p>
                <strong className="cyber-heading">Strong fits found:</strong> 2
                out of 10 interviews
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong className="cyber-heading">
                    Nicolaus (Head of Design, Decent)
                  </strong>{" "}
                  - 5-person distributed team with formal Q4 key result to solve
                  collaboration, decision recovery pain
                </li>
                <li>
                  <strong className="cyber-heading">
                    Willy (Founder, Crypto/DAO)
                  </strong>{" "}
                  - AI-forward team but pain is chronic, not urgent
                  (sophisticated workarounds in place)
                </li>
              </ul>
              <div className="mt-2">
                <strong className="cyber-heading">Key insight:</strong>{" "}
                The segment exists but is{" "}
                <strong>much smaller teams (4-7 people, not 10-15)</strong> and
                the pain is about <strong>AI workflow coordination</strong> and{" "}
                <strong>decision recovery</strong>, not traditional
                PM/design/engineering handoff problems.
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-card/50 rounded">
                <thead>
                  <tr className="bg-primary/50 cyber-text">
                    <th className="p-3 text-left border border-primary/30">
                      Criteria
                    </th>
                    <th className="p-3 text-left border border-primary/30">
                      Predicted
                    </th>
                    <th className="p-3 text-left border border-primary/30">
                      Actual
                    </th>
                    <th className="p-3 text-left border border-primary/30">
                      Variance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-primary/30">
                    <td className="p-3 border border-primary/30">
                      Pain Urgency
                    </td>
                    <td className="p-3 border border-primary/30">5</td>
                    <td className="p-3 border border-primary/30">3.5</td>
                    <td className="p-3 border border-primary/30">
                      Lower - sophisticated teams solve through process
                    </td>
                  </tr>
                  <tr className="border border-primary/30 bg-muted/20">
                    <td className="p-3 border border-primary/30">
                      Budget Ownership
                    </td>
                    <td className="p-3 border border-primary/30">4</td>
                    <td className="p-3 border border-primary/30">4.5</td>
                    <td className="p-3 border border-primary/30">
                      Higher - founders/design leads have strong autonomy
                    </td>
                  </tr>
                  <tr className="border border-primary/30">
                    <td className="p-3 border border-primary/30">
                      Growth Impact
                    </td>
                    <td className="p-3 border border-primary/30">4</td>
                    <td className="p-3 border border-primary/30">4</td>
                    <td className="p-3 border border-primary/30">
                      Matches prediction
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h4 className="font-semibold cyber-heading mb-2">
                Recommendation from Analysis:
              </h4>
              <p className="text-sm">
                <strong className="text-destructive">Modify</strong> - Segment
                exists but needs redefinition around smaller team size,
                AI-forward focus, and decision recovery pain
              </p>
            </div>

            <div className="space-y-3">
              <Label className="text-base">
                1. Should we keep this segment?
              </Label>
              <RadioGroup
                value={formData.cjptKeep}
                onValueChange={(value) =>
                  setFormData({ ...formData, cjptKeep: value })
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="cjpt-yes" />
                  <Label
                    htmlFor="cjpt-yes"
                    className="font-normal cursor-pointer"
                  >
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="cjpt-no" />
                  <Label
                    htmlFor="cjpt-no"
                    className="font-normal cursor-pointer"
                  >
                    No
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="modify" id="cjpt-modify" />
                  <Label
                    htmlFor="cjpt-modify"
                    className="font-normal cursor-pointer"
                  >
                    Modify
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <Label htmlFor="cjptChanges" className="text-base">
                2. If keeping or modifying, what changes should we make to the
                definition?
              </Label>
              <p>
                Does the revised definition (4-7 person teams, AI-forward,
                decision recovery focus) feel accurate? Should we rename it? Any
                characteristics to add or remove?
              </p>
              <Textarea
                id="cjptChanges"
                value={formData.cjptChanges}
                onChange={(e) =>
                  setFormData({ ...formData, cjptChanges: e.target.value })
                }
                placeholder="Enter your response here..."
                className="min-h-[100px] bg-background/50 border-primary/30"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="cjptScores" className="text-base">
                3. Should we update the scores?
              </Label>
              <p>
                The actual Pain Urgency (3.5) is lower than predicted (5).
                Should we use actual scores? Budget Ownership and Growth Impact
                are close to predictions.
              </p>
              <Textarea
                id="cjptScores"
                value={formData.cjptScores}
                onChange={(e) =>
                  setFormData({ ...formData, cjptScores: e.target.value })
                }
                placeholder="Enter your response here..."
                className="min-h-[100px] bg-background/50 border-primary/30"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="cjptOther" className="text-base">
                4. Any other considerations for this segment?
              </Label>
              <Textarea
                id="cjptOther"
                value={formData.cjptOther}
                onChange={(e) =>
                  setFormData({ ...formData, cjptOther: e.target.value })
                }
                placeholder="Enter your response here..."
                className="min-h-[100px] bg-background/50 border-primary/30"
              />
            </div>
          </CardContent>
        </Card>
      )}

      {currentView === 3 && (
        <Card className="cyber-glass">
          <CardHeader>
            <CardTitle className="text-2xl cyber-heading">
              Part 3: Segment-by-Segment Decisions
            </CardTitle>
            <CardDescription className="text-xl font-semibold cyber-heading">
              Segment: Alignment-Pressed Leadership Teams
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 cyber-text">
            <div className="cyber-border rounded p-4 space-y-3 bg-primary/10">
              <div>
                <h4 className="font-semibold cyber-heading mb-2">
                  Current Definition:
                </h4>
                <p>
                  Leadership teams of 4–7 people within organizations of 10–30
                  staff (often nonprofits or small businesses). They face
                  challenges passing information between divisions and making
                  high-consequence decisions without reliable shared context.
                </p>
              </div>

              <div>
                <h4 className="font-semibold cyber-heading mb-2">
                  Current Scores:
                </h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Pain Urgency: 4</li>
                  <li>Budget Ownership: 4</li>
                  <li>Growth Impact: 3</li>
                  <li>Interview Accessibility: 3</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold cyber-heading mb-2">
                Refinement Analysis Findings:
              </h4>
              <p>
                <strong className="text-destructive">
                  Strong fits found: 0 out of 10 interviews
                </strong>
              </p>

              <p className="mt-2">
                <strong className="cyber-heading">
                  People we expected to fit but didn&apos;t:
                </strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong className="cyber-heading">Taylor (CEO)</strong> -
                  Explicitly stated &quot;not that much pain&quot; about
                  internal collaboration. Small team with tight communication.
                </li>
              </ul>

              <p className="mt-2">
                <strong className="cyber-heading">
                  Actual Scores from Interviews:
                </strong>{" "}
                No data (zero fits)
              </p>
            </div>

            <div>
              <h4 className="font-semibold cyber-heading mb-2">
                Recommendation from Analysis:
              </h4>
              <p className="text-sm">
                <strong className="text-destructive">
                  Drop or Needs More Data
                </strong>{" "}
                - Zero evidence across 10 interviews suggests this segment may
                not exist as defined, or we haven&apos;t reached them yet
              </p>
            </div>

            <div className="space-y-3">
              <Label className="text-base">
                1. Should we keep this segment?
              </Label>
              <RadioGroup
                value={formData.apltKeep}
                onValueChange={(value) =>
                  setFormData({ ...formData, apltKeep: value })
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="aplt-yes" />
                  <Label
                    htmlFor="aplt-yes"
                    className="font-normal cursor-pointer"
                  >
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="aplt-no" />
                  <Label
                    htmlFor="aplt-no"
                    className="font-normal cursor-pointer"
                  >
                    No
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="needs-more-data" id="aplt-data" />
                  <Label
                    htmlFor="aplt-data"
                    className="font-normal cursor-pointer"
                  >
                    Needs More Data
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <Label htmlFor="apltWhy" className="text-base">
                2. If dropping, why do you think we got zero fits?
              </Label>
              <p>
                Wrong segment definition? Haven&apos;t interviewed the right
                people yet? Pain doesn&apos;t exist as predicted?
              </p>
              <Textarea
                id="apltWhy"
                value={formData.apltWhy}
                onChange={(e) =>
                  setFormData({ ...formData, apltWhy: e.target.value })
                }
                placeholder="Enter your response here..."
                className="min-h-[100px] bg-background/50 border-primary/30"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="apltChange" className="text-base">
                3. If keeping, what would change your mind?
              </Label>
              <p>
                How many interviews without fits would convince you to drop it?
                Are there specific organizations we should target to validate?
              </p>
              <Textarea
                id="apltChange"
                value={formData.apltChange}
                onChange={(e) =>
                  setFormData({ ...formData, apltChange: e.target.value })
                }
                placeholder="Enter your response here..."
                className="min-h-[100px] bg-background/50 border-primary/30"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="apltOther" className="text-base">
                4. Any other considerations for this segment?
              </Label>
              <Textarea
                id="apltOther"
                value={formData.apltOther}
                onChange={(e) =>
                  setFormData({ ...formData, apltOther: e.target.value })
                }
                placeholder="Enter your response here..."
                className="min-h-[100px] bg-background/50 border-primary/30"
              />
            </div>
          </CardContent>
        </Card>
      )}

      {currentView === 4 && (
        <Card className="cyber-glass">
          <CardHeader>
            <CardTitle className="text-2xl cyber-heading">
              Part 3: Segment-by-Segment Decisions
            </CardTitle>
            <CardDescription className="text-xl font-semibold cyber-heading">
              Segment: Client-Context Keepers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 cyber-text">
            <div className="cyber-border rounded p-4 space-y-3 bg-primary/10">
              <div>
                <h4 className="font-semibold cyber-heading mb-2">
                  Current Definition:
                </h4>
                <p>
                  Agencies and consultancies serving multiple clients where
                  context is fragmented across deliverables, requiring reliable
                  memory and reusable assets to avoid reinvention.
                </p>
              </div>

              <div>
                <h4 className="font-semibold cyber-heading mb-2">
                  Current Scores:
                </h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Pain Urgency: 4</li>
                  <li>Budget Ownership: 3</li>
                  <li>Growth Impact: 4</li>
                  <li>Interview Accessibility: 3</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold cyber-heading mb-2">
                Refinement Analysis Findings:
              </h4>
              <p>
                <strong className="cyber-heading">Strong fits found:</strong> 1
                out of 10 interviews, but{" "}
                <strong>different type than predicted</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong className="cyber-heading">Richard Dame</strong> -
                  Multi-venture operator (investor/operator across 12+
                  companies), not agency/consultancy model
                </li>
              </ul>
              <p className="mt-2">
                <strong className="cyber-heading">Key insight:</strong> Found
                &quot;multi-venture operators&quot; instead of traditional
                agencies. Richard manages context across portfolio companies but
                the pain mechanism differs from client service agencies.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-card/50 rounded">
                <thead>
                  <tr className="bg-primary/50 cyber-text">
                    <th className="p-3 text-left border border-primary/30">
                      Criteria
                    </th>
                    <th className="p-3 text-left border border-primary/30">
                      Predicted
                    </th>
                    <th className="p-3 text-left border border-primary/30">
                      Actual
                    </th>
                    <th className="p-3 text-left border border-primary/30">
                      Variance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-primary/30">
                    <td className="p-3 border border-primary/30">
                      Pain Urgency
                    </td>
                    <td className="p-3 border border-primary/30">4</td>
                    <td className="p-3 border border-primary/30">4</td>
                    <td className="p-3 border border-primary/30">
                      Matches prediction
                    </td>
                  </tr>
                  <tr className="border border-primary/30 bg-muted/20">
                    <td className="p-3 border border-primary/30">
                      Budget Ownership
                    </td>
                    <td className="p-3 border border-primary/30">3</td>
                    <td className="p-3 border border-primary/30">4</td>
                    <td className="p-3 border border-primary/30">
                      Higher than predicted
                    </td>
                  </tr>
                  <tr className="border border-primary/30">
                    <td className="p-3 border border-primary/30">
                      Growth Impact
                    </td>
                    <td className="p-3 border border-primary/30">4</td>
                    <td className="p-3 border border-primary/30">3</td>
                    <td className="p-3 border border-primary/30">
                      Lower than predicted
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h4 className="font-semibold cyber-heading mb-2">
                Recommendation from Analysis:
              </h4>
              <p className="text-sm">
                <strong className="text-destructive">Modify or Split</strong> -
                Either redefine as &quot;Multi-Venture Operators&quot; or keep
                searching for traditional agencies
              </p>
            </div>

            <div className="space-y-3">
              <Label className="text-base">
                1. Should we keep this segment as originally defined (agencies),
                or pivot to Multi-Venture Operators?
              </Label>
              <RadioGroup
                value={formData.cckDirection}
                onValueChange={(value) =>
                  setFormData({ ...formData, cckDirection: value })
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="agencies" id="cck-agencies" />
                  <Label
                    htmlFor="cck-agencies"
                    className="font-normal cursor-pointer"
                  >
                    Keep as Agencies - need more interviews
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="multi-venture" id="cck-multi" />
                  <Label
                    htmlFor="cck-multi"
                    className="font-normal cursor-pointer"
                  >
                    Pivot to Multi-Venture Operators
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="both" id="cck-both" />
                  <Label
                    htmlFor="cck-both"
                    className="font-normal cursor-pointer"
                  >
                    Split into two segments
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="drop" id="cck-drop" />
                  <Label
                    htmlFor="cck-drop"
                    className="font-normal cursor-pointer"
                  >
                    Drop entirely
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <Label htmlFor="cckMultiThoughts" className="text-base">
                2. If pivoting to Multi-Venture Operators:
              </Label>
              <p>
                Does this segment feel large enough to pursue? Richard is a
                strong fit but n=1 - worth pursuing more? Should we rename
                entirely?
              </p>
              <Textarea
                id="cckMultiThoughts"
                value={formData.cckMultiThoughts}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    cckMultiThoughts: e.target.value,
                  })
                }
                placeholder="Enter your response here..."
                className="min-h-[100px] bg-background/50 border-primary/30"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="cckAgencyThoughts" className="text-base">
                3. If keeping original agency focus:
              </Label>
              <p>
                Should we interview 2-3 traditional agencies to validate? What
                would confirm/deny the segment exists?
              </p>
              <Textarea
                id="cckAgencyThoughts"
                value={formData.cckAgencyThoughts}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    cckAgencyThoughts: e.target.value,
                  })
                }
                placeholder="Enter your response here..."
                className="min-h-[100px] bg-background/50 border-primary/30"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="cckOther" className="text-base">
                4. Any other considerations for this segment?
              </Label>
              <Textarea
                id="cckOther"
                value={formData.cckOther}
                onChange={(e) =>
                  setFormData({ ...formData, cckOther: e.target.value })
                }
                placeholder="Enter your response here..."
                className="min-h-[100px] bg-background/50 border-primary/30"
              />
            </div>
          </CardContent>
        </Card>
      )}

      {currentView === 5 && (
        <Card className="cyber-glass">
          <CardHeader>
            <CardTitle className="text-2xl cyber-heading">
              Part 3: Segment-by-Segment Decisions
            </CardTitle>
            <CardDescription className="text-xl font-semibold cyber-heading">
              Segment: Knowledge Weavers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 cyber-text">
            <div className="cyber-border rounded p-4 space-y-3 bg-primary/10">
              <div>
                <h4 className="font-semibold cyber-heading mb-2">
                  Current Definition:
                </h4>
                <p>
                  Teams maintaining living organizational knowledge (playbooks,
                  standards, prompt libraries) that get fragmented across
                  Notion, Slack, and docs—needing a shared AI-first memory
                  layer.
                </p>
              </div>

              <div>
                <h4 className="font-semibold cyber-heading mb-2">
                  Current Scores:
                </h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Pain Urgency: 4</li>
                  <li>Budget Ownership: 3</li>
                  <li>Growth Impact: 4</li>
                  <li>Interview Accessibility: 3</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold cyber-heading mb-2">
                Refinement Analysis Findings:
              </h4>
              <p>
                <strong className="cyber-heading">Strong fits found:</strong> 0
                strong fits, 1 partial fit
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong className="cyber-heading">JP (AI Consultant)</strong>{" "}
                  - Partial match because he&apos;s building knowledge systems
                  as enabler/consultant, not consuming them as end user. His
                  pain is enabling others, not managing his own knowledge.
                </li>
              </ul>
              <p className="mt-2">
                <strong className="cyber-heading">Key insight:</strong> The
                segment may be &quot;knowledge infrastructure builders&quot;
                (like JP) rather than &quot;knowledge maintainers&quot; as
                originally defined. Or the segment doesn&apos;t have acute pain.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-card/50 rounded">
                <thead>
                  <tr className="bg-primary/50 cyber-text">
                    <th className="p-3 text-left border border-primary/30">
                      Criteria
                    </th>
                    <th className="p-3 text-left border border-primary/30">
                      Predicted
                    </th>
                    <th className="p-3 text-left border border-primary/30">
                      Actual (JP)
                    </th>
                    <th className="p-3 text-left border border-primary/30">
                      Variance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-primary/30">
                    <td className="p-3 border border-primary/30">
                      Pain Urgency
                    </td>
                    <td className="p-3 border border-primary/30">4</td>
                    <td className="p-3 border border-primary/30">4</td>
                    <td className="p-3 border border-primary/30">
                      Matches prediction for JP
                    </td>
                  </tr>
                  <tr className="border border-primary/30 bg-muted/20">
                    <td className="p-3 border border-primary/30">
                      Budget Ownership
                    </td>
                    <td className="p-3 border border-primary/30">3</td>
                    <td className="p-3 border border-primary/30">4</td>
                    <td className="p-3 border border-primary/30">
                      Higher, but JP is contractor with influence not authority
                    </td>
                  </tr>
                  <tr className="border border-primary/30">
                    <td className="p-3 border border-primary/30">
                      Growth Impact
                    </td>
                    <td className="p-3 border border-primary/30">4</td>
                    <td className="p-3 border border-primary/30">5</td>
                    <td className="p-3 border border-primary/30">
                      Higher due to JP&apos;s network/consulting amplification
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h4 className="font-semibold cyber-heading mb-2">
                Recommendation from Analysis:
              </h4>
              <p className="text-sm">
                <strong className="text-destructive">
                  Drop or Needs More Data
                </strong>{" "}
                - Only 1 partial fit (wrong persona type) suggests segment may
                not exist as defined
              </p>
            </div>

            <div className="space-y-3">
              <Label className="text-base">
                1. Should we keep this segment?
              </Label>
              <RadioGroup
                value={formData.kwKeep}
                onValueChange={(value) =>
                  setFormData({ ...formData, kwKeep: value })
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="kw-yes" />
                  <Label
                    htmlFor="kw-yes"
                    className="font-normal cursor-pointer"
                  >
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="kw-no" />
                  <Label htmlFor="kw-no" className="font-normal cursor-pointer">
                    No
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="needs-more-data" id="kw-data" />
                  <Label
                    htmlFor="kw-data"
                    className="font-normal cursor-pointer"
                  >
                    Needs More Data
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <Label htmlFor="kwBuilders" className="text-base">
                2. Is the real segment &quot;Knowledge Infrastructure
                Builders&quot; (enablers like JP) vs. &quot;Knowledge
                Maintainers&quot; (end users)?
              </Label>
              <p>
                If yes, does that change the segment appeal? Are
                consultants/enablers valid early adopters?
              </p>
              <Textarea
                id="kwBuilders"
                value={formData.kwBuilders}
                onChange={(e) =>
                  setFormData({ ...formData, kwBuilders: e.target.value })
                }
                placeholder="Enter your response here..."
                className="min-h-[100px] bg-background/50 border-primary/30"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="kwValidate" className="text-base">
                3. Should we interview specific types of organizations to
                validate?
              </Label>
              <p>
                Operations teams managing playbooks? Companies with formal
                knowledge management roles?
              </p>
              <Textarea
                id="kwValidate"
                value={formData.kwValidate}
                onChange={(e) =>
                  setFormData({ ...formData, kwValidate: e.target.value })
                }
                placeholder="Enter your response here..."
                className="min-h-[100px] bg-background/50 border-primary/30"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="kwOther" className="text-base">
                4. Any other considerations for this segment?
              </Label>
              <Textarea
                id="kwOther"
                value={formData.kwOther}
                onChange={(e) =>
                  setFormData({ ...formData, kwOther: e.target.value })
                }
                placeholder="Enter your response here..."
                className="min-h-[100px] bg-background/50 border-primary/30"
              />
            </div>
          </CardContent>
        </Card>
      )}

      {currentView === 6 && (
        <Card className="cyber-glass">
          <CardHeader>
            <CardTitle className="text-2xl cyber-heading">
              Part 3: Segment-by-Segment Decisions
            </CardTitle>
            <CardDescription className="text-xl font-semibold cyber-heading">
              Segment: Pitch-Perfect Marketers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 cyber-text">
            <div className="cyber-border rounded p-4 space-y-3 bg-primary/10">
              <div>
                <h4 className="font-semibold cyber-heading mb-2">
                  Current Definition:
                </h4>
                <p>
                  Marketing teams running multi-channel campaigns who need AI
                  support but constantly wrestle with brand consistency, context
                  loss, and scattered performance data.
                </p>
              </div>

              <div>
                <h4 className="font-semibold cyber-heading mb-2">
                  Current Scores:
                </h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Pain Urgency: 3</li>
                  <li>Budget Ownership: 3</li>
                  <li>Growth Impact: 4</li>
                  <li>Interview Accessibility: 4</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold cyber-heading mb-2">
                Refinement Analysis Findings:
              </h4>
              <p>
                <strong className="cyber-heading">Strong fits found:</strong>{" "}
                <strong>Not evaluated</strong> - No marketing team interviews
                conducted in this batch
              </p>
            </div>

            <div>
              <h4 className="font-semibold cyber-heading mb-2">
                Recommendation from Analysis:
              </h4>
              <p className="text-sm">
                <strong className="text-muted-foreground">Needs Data</strong> -
                Cannot evaluate without interviews
              </p>
            </div>

            <div className="space-y-3">
              <Label className="text-base">
                1. Should we keep this segment in the next version?
              </Label>
              <RadioGroup
                value={formData.ppmKeep}
                onValueChange={(value) =>
                  setFormData({ ...formData, ppmKeep: value })
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="ppm-yes" />
                  <Label
                    htmlFor="ppm-yes"
                    className="font-normal cursor-pointer"
                  >
                    Yes - prioritize interviews
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="ppm-no" />
                  <Label
                    htmlFor="ppm-no"
                    className="font-normal cursor-pointer"
                  >
                    No - drop based on other findings
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="deprioritize" id="ppm-depri" />
                  <Label
                    htmlFor="ppm-depri"
                    className="font-normal cursor-pointer"
                  >
                    Deprioritize for now
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <Label htmlFor="ppmInterview" className="text-base">
                2. Do you want to interview marketers to validate, or
                deprioritize this segment based on other findings?
              </Label>
              <Textarea
                id="ppmInterview"
                value={formData.ppmInterview}
                onChange={(e) =>
                  setFormData({ ...formData, ppmInterview: e.target.value })
                }
                placeholder="Enter your response here..."
                className="min-h-[100px] bg-background/50 border-primary/30"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="ppmOther" className="text-base">
                3. Any other considerations for this segment?
              </Label>
              <Textarea
                id="ppmOther"
                value={formData.ppmOther}
                onChange={(e) =>
                  setFormData({ ...formData, ppmOther: e.target.value })
                }
                placeholder="Enter your response here..."
                className="min-h-[100px] bg-background/50 border-primary/30"
              />
            </div>
          </CardContent>
        </Card>
      )}

      {currentView === 7 && (
        <Card className="cyber-glass">
          <CardHeader>
            <CardTitle className="text-2xl cyber-heading">
              Part 4: New Segment Evaluation
            </CardTitle>
            <CardDescription className="text-xl font-semibold cyber-heading">
              AI-Native Small Team Operators
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 cyber-text">
            <div className="cyber-border rounded p-4 space-y-3 bg-accent/10">
              <div>
                <h4 className="font-semibold cyber-heading mb-2">
                  Definition from Analysis:
                </h4>
                <p>
                  Distributed teams of 4-7 people in fast-moving domains (AI,
                  crypto, healthcare, SaaS) where{" "}
                  <strong>every team member is a heavy AI user</strong>. These
                  teams experience acute &quot;context reconstruction tax&quot;
                  - constantly rebuilding context because individual AI tools
                  (ChatGPT, Claude, Cursor) don&apos;t share knowledge between
                  team members.
                </p>
              </div>

              <div>
                <h4 className="font-semibold cyber-heading mb-2">
                  Key Characteristics:
                </h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>
                    <strong>Distributed by default</strong> - Remote-first with
                    async communication
                  </li>
                  <li>
                    <strong>AI-forward operations</strong> - Every member uses
                    AI tools extensively for their work
                  </li>
                  <li>
                    <strong>Small enough to lack formal process</strong> - No
                    PMs writing detailed specs, decisions live in conversations
                  </li>
                  <li>
                    <strong>Fast-moving domains</strong> - Move too fast for
                    traditional documentation to keep up
                  </li>
                  <li>
                    <strong>Acute decision recovery pain</strong> - &quot;What
                    did we decide about X and why?&quot; weeks later
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold cyber-heading mb-2">Evidence:</h4>
              <p>
                Appeared in{" "}
                <strong className="cyber-heading">4/10 interviews</strong> as
                strong fits:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong className="cyber-heading">Nicolaus (Decent)</strong> -
                  &quot;Weeks go by before we have to face that decision again,
                  and we&apos;re like, what did we say?&quot;
                </li>
                <li>
                  <strong className="cyber-heading">
                    Richard (multi-venture operator)
                  </strong>{" "}
                  - Managing 12+ ventures, &quot;I&apos;m in all the chats but
                  I&apos;m not&quot;
                </li>
                <li>
                  <strong className="cyber-heading">
                    Abel (Latitude Bridge)
                  </strong>{" "}
                  - &quot;Richard has all his context in ChatGPT...I&apos;m at
                  ChatGPT zero. Going slower with AI than without it&quot;
                </li>
                <li>
                  <strong className="cyber-heading">Willy (crypto/DAO)</strong>{" "}
                  - Team documented AI patterns but still experiences chronic
                  pain
                </li>
              </ul>
              <p className="mt-2">Additional partial fits: JP, Matt</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-card/50 rounded">
                <thead>
                  <tr className="bg-primary/50 cyber-text">
                    <th className="p-3 text-left border border-primary/30">
                      Criteria
                    </th>
                    <th className="p-3 text-left border border-primary/30">
                      Score
                    </th>
                    <th className="p-3 text-left border border-primary/30">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-primary/30">
                    <td className="p-3 border border-primary/30">
                      Pain Urgency
                    </td>
                    <td className="p-3 border border-primary/30">
                      <strong className="cyber-heading">4.25/5</strong>
                    </td>
                    <td className="p-3 border border-primary/30">
                      Highest of all segments
                    </td>
                  </tr>
                  <tr className="border border-primary/30 bg-muted/20">
                    <td className="p-3 border border-primary/30">
                      Budget Ownership
                    </td>
                    <td className="p-3 border border-primary/30">
                      <strong className="cyber-heading">4.5/5</strong>
                    </td>
                    <td className="p-3 border border-primary/30">
                      Strong autonomy
                    </td>
                  </tr>
                  <tr className="border border-primary/30">
                    <td className="p-3 border border-primary/30">
                      Growth Impact
                    </td>
                    <td className="p-3 border border-primary/30">
                      <strong className="cyber-heading">3.75/5</strong>
                    </td>
                    <td className="p-3 border border-primary/30">
                      Good word-of-mouth potential
                    </td>
                  </tr>
                  <tr className="border border-primary/30 bg-muted/20">
                    <td className="p-3 border border-primary/30">
                      <strong>Weighted Total</strong>
                    </td>
                    <td className="p-3 border border-primary/30">
                      <strong className="cyber-heading">4.21</strong>
                    </td>
                    <td className="p-3 border border-primary/30">
                      <strong className="cyber-heading">Strongest score</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-3">
              <Label className="text-base">
                1. Should we add this as an official segment?
              </Label>
              <RadioGroup
                value={formData.ainstoAdd}
                onValueChange={(value) =>
                  setFormData({ ...formData, ainstoAdd: value })
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="ainsto-yes" />
                  <Label
                    htmlFor="ainsto-yes"
                    className="font-normal cursor-pointer"
                  >
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="ainsto-no" />
                  <Label
                    htmlFor="ainsto-no"
                    className="font-normal cursor-pointer"
                  >
                    No
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="needs-more-data" id="ainsto-data" />
                  <Label
                    htmlFor="ainsto-data"
                    className="font-normal cursor-pointer"
                  >
                    Needs More Data
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <Separator className="bg-border/50" />

            <div className="space-y-3">
              <Label htmlFor="ainstoDescription" className="text-base">
                2. If yes, how would you describe this segment?
              </Label>
              <p>
                Is the name &quot;AI-Native Small Team Operators&quot; clear and
                descriptive? Does the definition capture who they really are?
                What would you add or change?
              </p>
              <Textarea
                id="ainstoDescription"
                value={formData.ainstoDescription}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    ainstoDescription: e.target.value,
                  })
                }
                placeholder="Enter your response here..."
                className="min-h-[120px] bg-background/50 border-primary/30"
              />
            </div>

            <Separator className="bg-border/50" />

            <div className="space-y-3">
              <Label className="text-base">
                3. Where should this rank in priority?
              </Label>
              <RadioGroup
                value={formData.ainstoPriority}
                onValueChange={(value) =>
                  setFormData({ ...formData, ainstoPriority: value })
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="beachhead" id="ainsto-pri-beach" />
                  <Label
                    htmlFor="ainsto-pri-beach"
                    className="font-normal cursor-pointer"
                  >
                    Primary beachhead (as analysis recommends)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="secondary" id="ainsto-pri-second" />
                  <Label
                    htmlFor="ainsto-pri-second"
                    className="font-normal cursor-pointer"
                  >
                    Secondary segment
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="track" id="ainsto-pri-track" />
                  <Label
                    htmlFor="ainsto-pri-track"
                    className="font-normal cursor-pointer"
                  >
                    Worth tracking but not priority
                  </Label>
                </div>
              </RadioGroup>
              <p className="mt-2">
                The analysis shows strongest pain scores and most fits - does
                that align with your intuition?
              </p>
              <Textarea
                id="ainstoPriorityReasoning"
                value={formData.ainstoPriorityReasoning}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    ainstoPriorityReasoning: e.target.value,
                  })
                }
                placeholder="Enter your reasoning here..."
                className="min-h-[100px] bg-background/50 border-primary/30"
              />
            </div>

            <Separator className="bg-border/50" />

            <div className="space-y-3">
              <Label htmlFor="ainstoConcerns" className="text-base">
                4. What concerns or questions do you have about this segment?
              </Label>
              <p>
                TAM size concerns? Is this just Context-Juggling Product Teams
                with different framing? Anything else?
              </p>
              <Textarea
                id="ainstoConcerns"
                value={formData.ainstoConcerns}
                onChange={(e) =>
                  setFormData({ ...formData, ainstoConcerns: e.target.value })
                }
                placeholder="Enter your response here..."
                className="min-h-[100px] bg-background/50 border-primary/30"
              />
            </div>
          </CardContent>
        </Card>
      )}

      {currentView === 8 && (
        <Card className="cyber-glass">
          <CardHeader>
            <CardTitle className="text-2xl cyber-heading">
              Part 5: Additional Considerations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 cyber-text">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold cyber-heading">
                Question 4: Missing Perspectives
              </h3>
              <p>
                Are there any customer segments or perspectives we haven&apos;t
                explored yet that we should consider adding to our target list?
                What makes you think they&apos;d be valuable to investigate?
              </p>
              <Textarea
                id="q4Response"
                value={formData.q4Response}
                onChange={(e) =>
                  setFormData({ ...formData, q4Response: e.target.value })
                }
                placeholder="Enter your response here..."
                className="min-h-[120px] bg-background/50 border-primary/30"
              />
            </div>

            <Separator className="bg-border/50" />

            <div className="space-y-3">
              <h3 className="text-xl font-semibold cyber-heading">
                Question 5: Interview Strategy
              </h3>

              <div className="cyber-border rounded p-4 space-y-3 bg-primary/10">
                <h4 className="font-semibold cyber-heading">Current sample:</h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>3 founders/CEOs of small teams (Taylor, Willy, Abel)</li>
                  <li>2 solo operators/entrepreneurs (Bob, Javid, Michael)</li>
                  <li>
                    2 operators in distributed product/design roles (Nicolaus,
                    Matt)
                  </li>
                  <li>1 multi-venture investor/operator (Richard)</li>
                  <li>1 AI consultant serving teams (JP)</li>
                </ul>
                <p className="mt-2">
                  <strong className="cyber-heading">Strong skew toward:</strong>{" "}
                  Small distributed teams, AI-forward builders, tech/crypto
                  domains
                </p>
              </div>

              <p>
                Based on what we&apos;ve learned, who should we interview next?
                Are there specific types of people or organizations we should
                prioritize to validate our segment assumptions?
              </p>
              <p className="mt-2">Some possibilities from the analysis:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>
                  More AI-Native Small Team Operators to confirm pain
                  consistency
                </li>
                <li>
                  Traditional agencies to validate original Client-Context
                  Keepers hypothesis
                </li>
                <li>
                  Marketing teams to evaluate Pitch-Perfect Marketers segment
                </li>
              </ul>
              <Textarea
                id="q5Response"
                value={formData.q5Response}
                onChange={(e) =>
                  setFormData({ ...formData, q5Response: e.target.value })
                }
                placeholder="Enter your response here..."
                className="min-h-[120px] bg-background/50 border-primary/30"
              />
            </div>

            <Separator className="bg-border/50" />

            <div className="space-y-4">
              <h3 className="text-xl font-semibold cyber-heading">
                Question 6: Confidence and Next Steps
              </h3>

              <div className="space-y-3">
                <Label className="text-base">
                  1. On a scale of 1-5, how confident are you in our segment
                  definitions after this analysis?
                </Label>
                <RadioGroup
                  value={formData.confidence}
                  onValueChange={(value) =>
                    setFormData({ ...formData, confidence: value })
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="conf-1" />
                    <Label
                      htmlFor="conf-1"
                      className="font-normal cursor-pointer"
                    >
                      1 - Not confident at all
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="conf-2" />
                    <Label
                      htmlFor="conf-2"
                      className="font-normal cursor-pointer"
                    >
                      2 - Slightly confident
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3" id="conf-3" />
                    <Label
                      htmlFor="conf-3"
                      className="font-normal cursor-pointer"
                    >
                      3 - Moderately confident
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="4" id="conf-4" />
                    <Label
                      htmlFor="conf-4"
                      className="font-normal cursor-pointer"
                    >
                      4 - Very confident
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="5" id="conf-5" />
                    <Label
                      htmlFor="conf-5"
                      className="font-normal cursor-pointer"
                    >
                      5 - Extremely confident
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label htmlFor="q6Increase" className="text-base">
                  2. What would increase your confidence?
                </Label>
                <Textarea
                  id="q6Increase"
                  value={formData.q6Increase}
                  onChange={(e) =>
                    setFormData({ ...formData, q6Increase: e.target.value })
                  }
                  placeholder="Enter your response here..."
                  className="min-h-[100px] bg-background/50 border-primary/30"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="q6NextSteps" className="text-base">
                  3. What&apos;s your intuition on next steps?
                </Label>
                <p>
                  Should we: Pivot fully to AI-Native Small Team Operators as
                  beachhead? Interview more to validate before committing?
                  Something else?
                </p>
                <Textarea
                  id="q6NextSteps"
                  value={formData.q6NextSteps}
                  onChange={(e) =>
                    setFormData({ ...formData, q6NextSteps: e.target.value })
                  }
                  placeholder="Enter your response here..."
                  className="min-h-[120px] bg-background/50 border-primary/30"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="q6Feedback" className="text-base">
                  4. Do you have any other feedback on this process?
                </Label>
                <Textarea
                  id="q6Feedback"
                  value={formData.q6Feedback}
                  onChange={(e) =>
                    setFormData({ ...formData, q6Feedback: e.target.value })
                  }
                  placeholder="Enter your response here..."
                  className="min-h-[120px] bg-background/50 border-primary/30"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Separator className="bg-primary/30" />

      <div className="flex gap-4 justify-between">
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={handlePrevious}
          disabled={currentView === 0}
          className="border-primary/30 bg-transparent hover:bg-primary/10"
        >
          Previous
        </Button>

        {currentView < viewTitles.length - 1 ? (
          <Button
            type="button"
            size="lg"
            onClick={handleNext}
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Next
          </Button>
        ) : (
          <Button
            type="button"
            size="lg"
            onClick={handleFinalSubmit}
            disabled={isSubmitting}
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </Button>
        )}
      </div>
    </div>
  );
}
