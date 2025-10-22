import { Metadata } from "next";
import { Header } from "@/components/Header";
import { SegmentFeedbackForm } from "@/components/SegmentFeedbackForm";

export const metadata: Metadata = {
  title: "Refine Your Understanding",
  description:
    "Organize and refine customer interview insights with structured feedback segments. Extract patterns, validate assumptions, and deepen your understanding of customer needs.",
  openGraph: {
    title: "Refine Your Understanding | Ekumen",
    description:
      "Organize and refine customer interview insights with structured feedback segments. Extract patterns, validate assumptions, and deepen your understanding of customer needs.",
  },
  twitter: {
    title: "Refine Your Understanding | Ekumen",
    description:
      "Organize and refine customer interview insights with structured feedback segments. Extract patterns, validate assumptions, and deepen your understanding of customer needs.",
  },
};

export default function Refine() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 cyber-scanlines">
      <div className="max-w-6xl mx-auto space-y-6 pb-12">
        <Header />
        <SegmentFeedbackForm />
      </div>
    </div>
  );
}
