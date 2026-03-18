import { Questrial, Inter } from "next/font/google";
import type { Metadata } from "next";
import LayoutClient from "./layout-client";
import "@/styles/globals.css";

const styleFont = Questrial({
  variable: "--font-style",
  subsets: ["latin"],
  weight: ["400"],
});

const textFont = Inter({ 
  weight: ['100','200','300','400','500','600', '700', '900'],
  variable: "--font-text",
  style: ['normal', 'italic'],
  subsets: ['latin'] 
});

export const metadata: Metadata = {
  title: {
    default: "Mitra Bhadra Consulting | Strategic Advisory GCG, ESG & GRC",
    template: "%s | MBC"
  },
  description: "Mitra Bhadra Consulting (MBC) menyediakan layanan konsultasi strategis untuk GCG, ESG, GRC, dan Transformasi Bisnis di Indonesia.",
  keywords: ["Consulting", "GCG", "ESG", "GRC", "Business Strategy", "Indonesia", "ISO 37001", "ISO 26000"],
  authors: [{ name: "Mitra Bhadra Consulting" }],
  creator: "Mitra Bhadra Consulting",
  icons: {
    icon: "/favicon.ico", // Ensure you have a favicon in /public
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://mitrabhadraconsulting.com/",
    title: "Mitra Bhadra Consulting",
    description: "Executive Strategic Advisory for Sustainable Business Growth.",
    siteName: "Mitra Bhadra Consulting",
    images: [
      {
        url: "/images/og-image.jpg", // Create a 1200x630 image for social sharing
        width: 1200,
        height: 630,
        alt: "Mitra Bhadra Consulting",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id"> {/* Changed to 'id' for better local SEO in Indonesia */}
      <body className={`${textFont.variable} ${styleFont.variable} font-text antialiased`}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}