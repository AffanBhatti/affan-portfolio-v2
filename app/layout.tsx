import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Affan Bhatti — Software Developer & AI Engineer",
  description: "Honours BSc Computer Science & Economics at University of Toronto. Software Developer, AI Engineer, building intelligent systems and beautiful interfaces.",
  keywords: ["Affan Bhatti", "Software Developer", "AI Engineer", "University of Toronto", "Computer Science", "Toronto"],
  authors: [{ name: "Affan Bhatti" }],
  openGraph: {
    title: "Affan Bhatti — Software Developer & AI Engineer",
    description: "Honours BSc CS & Economics @ UofT. Building intelligent systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
