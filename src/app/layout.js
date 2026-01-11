import "./globals.css";
import { Suspense } from "react";
import { Nunito } from "next/font/google";
import { Caveat } from "next/font/google";
import { Comfortaa } from "next/font/google";
import { Outfit } from "next/font/google";
import BackToTop from "@/components/BackToTop";
import TopProgressBar from "@/components/TopProgressBar";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-caveat",
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-comfortaa",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata = {
  title: "Yu-Chen(Cindy), Liu - Software Engineer",
  description: "Welcome to my professional portfolio showcasing my work and expertise",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/icon.png",
  },
  metadataBase: new URL("https://yuchen-land.github.io"),
  openGraph: {
    title: "Yu-Chen(Cindy), Liu - Software Engineer",
    description: "Welcome to my professional portfolio showcasing my work and expertise",
    url: "https://yuchen-land.github.io",
    siteName: "Yu-Chen Liu Portfolio",
    images: [
      {
        url: "/images/Cindy.jpg",
        width: 1200,
        height: 630,
        alt: "Yu-Chen Liu - Software Engineer",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yu-Chen(Cindy), Liu - Software Engineer",
    description: "Welcome to my professional portfolio showcasing my work and expertise",
    images: ["/images/Cindy.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} ${caveat.variable} ${comfortaa.variable} ${outfit.variable}`} suppressHydrationWarning>
        <Suspense fallback={null}>
          <TopProgressBar />
        </Suspense>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}

