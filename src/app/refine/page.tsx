import { Header } from "@/components/Header";
import { SegmentFeedbackForm } from "@/components/SegmentFeedbackForm";

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
