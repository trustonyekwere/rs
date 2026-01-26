import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google"

// font
const nunito = Nunito({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Real Estate",
  description: "A modern real estate listing platform template built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {children}
      </body>
    </html>
  );
}
