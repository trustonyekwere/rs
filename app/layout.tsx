import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google"

// font
const nunito = Nunito({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  keywords: "real estate, property listings, homes for sale, buy house, rent apartment",
  openGraph: {
    title: "Real Estate",
    description: "A modern real estate listing platform landing page built with Next.js",
    type: "website",
    url: "https://rs-tee-beta.vercel.app/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Real Estate Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate",
    description: "A modern real estate listing platform landing page built with Next.js",
    images: ["/og-image.jpg"],
  },
  title: "Real Estate",
  description: "A modern real estate listing platform landing page built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={nunito.className}>
        {children}
      </body>
    </html>
  );
}
