import type { Metadata } from "next";
import { QuizShell } from "@/components/QuizShell";

export const metadata: Metadata = {
  title: "Take the Quiz",
  description:
    "10 questions. 2 minutes. Find out how human you really are — scored as a percentage.",
  robots: { index: false },
};

export default function QuizPage() {
  return <QuizShell />;
}
