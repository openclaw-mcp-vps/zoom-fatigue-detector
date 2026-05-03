import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zoom Fatigue Detector – Detect Team Meeting Fatigue",
  description: "Analyzes calendar patterns to identify meeting overload and suggests optimal break times for remote teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1c2ec2f8-c0d4-4f63-b6bb-de998553b298"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
