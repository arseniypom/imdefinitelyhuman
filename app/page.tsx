import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Are You Human? — The Humanity Quiz | Turing Test for Humans",
  description:
    "Take the 10-question quiz that scores how human you are vs AI — expressed as a percentage. A modern Turing test, CAPTCHA alternative, and existential crisis in one.",
  keywords: [
    "turing test",
    "am I a robot",
    "AI test",
    "human or AI",
    "humanity quiz",
    "CAPTCHA",
    "bot test",
    "human verification",
    "are you human",
    "artificial intelligence quiz",
  ],
  openGraph: {
    title: "Are You Human? — The Humanity Quiz",
    description:
      "10 questions. 2 minutes. Find out if you're a real human or just GPT in a trenchcoat.",
    type: "website",
    url: "https://imdefinitelyhuman.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Are You Human? — The Humanity Quiz",
    description:
      "10 questions. 2 minutes. One existential crisis. Take the quiz.",
  },
  alternates: {
    canonical: "https://imdefinitelyhuman.com",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is this, a Turing test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sort of. The classic Turing test checks if a machine can fool a human. This one checks if you can convince a quiz that you're not a machine. Subtle difference — same existential dread.",
      },
    },
    {
      "@type": "Question",
      name: "Am I a robot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's what we're here to find out. If you're asking the question, that's a good sign. Robots usually don't have self-doubt — they have stack traces.",
      },
    },
    {
      "@type": "Question",
      name: "Is this an AI test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's a humanity test. The questions are designed around behavioral patterns that differ between humans and AI — things like response timing, punctuation habits, and how you handle existential questions at 3 AM.",
      },
    },
    {
      "@type": "Question",
      name: "How do you tell if someone is human or AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Humans are messy, inconsistent, and gloriously irrational. AI is polite, thorough, and suspiciously helpful. The quiz exploits these differences — one em-dash at a time.",
      },
    },
    {
      "@type": "Question",
      name: "Is this like a CAPTCHA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CAPTCHAs ask you to click traffic lights. We ask you about your relationship with em-dashes and 3 AM scrolling habits. Same energy, more personality.",
      },
    },
    {
      "@type": "Question",
      name: "How is the score calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: 'Each of the 9 scored questions gives 0–10 points based on how "human" your answer is. Your final score is the percentage of the maximum 90 points. No AI was harmed in the grading process.',
      },
    },
    {
      "@type": "Question",
      name: "Can AI pass this test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Modern AI can be trained to mimic human quirks, but the questions target genuine behavioral instincts. An AI might score well, but will it feel the existential weight of its result? Probably not. Probably.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data stored?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your quiz state lives in your browser's localStorage — nothing is sent to a server. Your existential crisis stays between you and your browser.",
      },
    },
  ],
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Are You Human?",
  description:
    "A 10-question quiz that scores how human you are vs AI, expressed as a percentage.",
  url: "https://imdefinitelyhuman.com",
  applicationCategory: "Entertainment",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webAppJsonLd),
        }}
      />
      <LandingPage />
    </>
  );
}
