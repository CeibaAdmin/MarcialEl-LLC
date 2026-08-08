import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import { LanguageProvider } from "@/lib/i18n";
import { site } from "@/lib/site";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.penName} — ${site.tagline}`,
    template: `%s · ${site.penName}`,
  },
  description: site.description,
  openGraph: {
    title: site.penName,
    description: site.description,
    url: site.url,
    siteName: site.penName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.penName,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <LanguageProvider>
          <SmoothScroll />
          <ScrollProgress />
          <div aria-hidden className="grain-overlay animate-grain" />
          <div aria-hidden className="vignette" />
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
