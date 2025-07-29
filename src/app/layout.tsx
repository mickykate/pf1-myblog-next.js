import { Whisper, Alegreya_Sans_SC } from "next/font/google";
import "./globals.css";

const whisper = Whisper({
  variable: "--font-whisper",
  subsets: ["latin"],
  weight: "400"
});

const alegreyaSansSC = Alegreya_Sans_SC({
  variable: "--font-alegreya-sans-sc",
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
