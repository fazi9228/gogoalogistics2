import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";

// Clean, professional, highly readable — deliberately not a trendy startup font.
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "GoGoa Logistics — Courier & Logistics Services in Goa | Margao",
    template: "%s",
  },
  description:
    "GoGoa Logistics provides domestic and international courier, parcel and document delivery, e-commerce shipping and business logistics across Goa. Based in Margao. Authorised DTDC franchise.",
  applicationName: site.name,
  keywords: [
    "courier service Goa",
    "logistics company Goa",
    "international courier Goa",
    "parcel delivery Goa",
    "DTDC franchise Goa",
    "courier Margao",
    "courier Navelim",
    "document delivery Goa",
    "e-commerce shipping Goa",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: "GoGoa Logistics — Courier & Logistics Services in Goa",
    description:
      "Domestic and international courier, parcel and document delivery and business logistics across Goa. Based in Margao.",
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "GoGoa Logistics — Courier & Logistics Services in Goa",
    description:
      "Domestic and international courier, parcel and document delivery and business logistics across Goa.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#0F2A47",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={sourceSans.variable}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}
