import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Implenia",
  description: "WE ARE LOOKING FOR YOUR IDEA",
  openGraph: {
    title: "Implenia",
    description: "WE ARE LOOKING FOR YOUR IDEA",
    images: [
      {
        url: "/meta-image.png",
        width: 800,
        height: 600,
        alt: "Implenia Branding Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Implenia",
    description: "WE ARE LOOKING FOR YOUR IDEA",
    images: ["/meta-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
