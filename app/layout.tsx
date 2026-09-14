import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { profile } from "@/content/profile.fr";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const seoDescription =
  "Product Designer spécialisé en Design Systems et produits B2B complexes. Architecture de tokens, industrialisation de librairies de composants, parcours bancaires et industriels.";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: seoDescription,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: seoDescription,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: seoDescription,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
