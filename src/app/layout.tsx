import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Farmaleaf | Ancient Wisdom for Modern Healing",
    template: "%s | Farmaleaf",
  },
  description:
    "Connect with Yebá, the ancient healing spirit, for personalized guidance on natural remedies, traditional medicine, and holistic wellness practices.",
  metadataBase: new URL("https://farmaleaf-chat.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://farmaleaf-chat.vercel.app",
    title: "Farmaleaf | Ancient Wisdom for Modern Healing",
    description:
      "Connect with Yebá, the ancient healing spirit, for personalized guidance on natural remedies, traditional medicine, and holistic wellness practices.",
    siteName: "Farmaleaf",
    images: [
      {
        url: "/images/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Farmaleaf - Ancient Wisdom for Modern Healing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farmaleaf | Ancient Wisdom for Modern Healing",
    description:
      "Connect with Yebá, the ancient healing spirit, for personalized guidance on natural remedies, traditional medicine, and holistic wellness practices.",
    images: ["/images/opengraph-image.png"],
  },
  icons: {
    icon: [
      {
        url: "/images/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
