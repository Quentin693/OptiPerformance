import type { Metadata, Viewport } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f0f0f",
};

export const metadata: Metadata = {
  title: "OptiPerformance | Guide des Bonnes Pratiques Web",
  description:
    "Découvrez les erreurs courantes en webdesign et apprenez les bonnes pratiques pour créer des sites web performants et accessibles.",
  keywords: ["webdesign", "performance", "UX", "accessibilité", "bonnes pratiques"],
  authors: [{ name: "OptiPerformance" }],
  openGraph: {
    title: "OptiPerformance | Guide des Bonnes Pratiques Web",
    description: "Apprenez à éviter les erreurs courantes en webdesign",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${outfit.variable} ${jetbrains.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
