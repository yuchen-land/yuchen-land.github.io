import "./globals.css";
import { createPageMetadata, siteDescriptions } from "@/data/siteMetadata";
import { Suspense } from "react";
import { Nunito } from "next/font/google";
import { Caveat } from "next/font/google";
import { Comfortaa } from "next/font/google";
import { Outfit } from "next/font/google";
import MobileBottomNav from "@/components/MobileBottomNav";
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
  ...createPageMetadata({ description: siteDescriptions.home, path: "/" }),
  metadataBase: new URL("https://yuchen-land.github.io"),
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon.png", type: "image/png" }],
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} ${caveat.variable} ${comfortaa.variable} ${outfit.variable} pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0`} suppressHydrationWarning>
        <Suspense fallback={null}>
          <TopProgressBar />
        </Suspense>
        {children}
        <BackToTop />
        <MobileBottomNav />
      </body>
    </html>
  );
}

