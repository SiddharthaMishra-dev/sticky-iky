import type { Metadata } from "next";
import { Kalam } from "next/font/google";
import "./globals.css";

const kalam = Kalam({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sticky-iky",
  description: "just another note taking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kalam.className}>{children}</body>
    </html>
  );
}
