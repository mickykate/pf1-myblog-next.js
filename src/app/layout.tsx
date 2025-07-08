import type { Metadata } from "next";
import { Geist, Geist_Mono, Whisper, Alegreya_Sans_SC } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const whisper = Whisper({
  variable: "--font-whisper",
  subsets: ["latin"],
  weight: "400"
});

const alegreyaSansSC = Alegreya_Sans_SC({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${whisper.variable} ${alegreyaSansSC.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
