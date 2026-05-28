import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { orgSchema, webSiteSchema } from "@/lib/seo";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { CalendlyBadge } from "@/components/ui/calendly-badge";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Nulfinity | Intelligent Document Processing & AI Automation",
  description:
    "Nulfinity automates document workflows with AI-powered OCR, data extraction, and validation. Process invoices, KYC, contracts, and more in seconds.",
  metadataBase: new URL("https://www.nulfinity.com"),
  openGraph: {
    title: "Nulfinity | Intelligent Document Processing & AI Automation",
    description: "AI-powered OCR and data extraction for enterprise document workflows.",
    url: "https://www.nulfinity.com",
    siteName: "Nulfinity",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Nulfinity" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nulfinity | Intelligent Document Processing",
    description: "AI-powered OCR and data extraction for enterprise document workflows.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://calendly.com" />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema()) }}
        />
        <CalendlyBadge />
        <GoogleAnalytics />
        {/* Microsoft Clarity - lazy loaded after page load */}
        <Script
          id="microsoft-clarity"
          src="https://www.clarity.ms/tag/wwlivcvv1p"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
