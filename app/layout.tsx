import type { Metadata } from "next";
import { Kalam } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const kalam = Kalam({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sticky-iky",
  description: "stick notes in style",
  authors: [{ name: "Sid" }],
  creator: "Sid",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kalam.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
