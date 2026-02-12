import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { QuizProvider } from "@/lib/quiz-context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Are You Human? 🤖",
  description: "A fun quiz that determines how human you are (vs AI) — expressed as a percentage.",
  openGraph: {
    title: "Are You Human? 🤖",
    description: "Take this quiz to find out if you're a real human or just GPT-4 in a trenchcoat.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QuizProvider>{children}</QuizProvider>
      </body>
    </html>
  );
}
