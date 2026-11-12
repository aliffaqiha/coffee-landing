import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roast Tape Coffee Co. — Not Your Ordinary Caffeine Fix",
  description:
    "Small-batch specialty coffee, sealed with tape and roasted for clarity. Direct trade beans, cupping notes, and brew guides from Roast Tape Coffee Co.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${spaceMono.variable} ${jakarta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
