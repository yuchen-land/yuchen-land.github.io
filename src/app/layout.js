import "./globals.css";
import localFont from "next/font/local";
import Script from "next/script";
import { createPageMetadata, siteDescriptions } from "@/data/siteMetadata";
import { Suspense } from "react";
import MobileBottomNav from "@/components/MobileBottomNav";
import BackToTop from "@/components/BackToTop";
import TopProgressBar from "@/components/TopProgressBar";

const nunito = localFont({
  src: "./fonts/nunito-latin.woff2",
  weight: "300 700",
  display: "swap",
});

const caveat = localFont({
  src: "./fonts/caveat-latin.woff2",
  weight: "300 700",
  display: "swap",
  variable: "--font-caveat",
});

const comfortaa = localFont({
  src: "./fonts/comfortaa-latin.woff2",
  weight: "300 700",
  display: "swap",
  variable: "--font-comfortaa",
});

const outfit = localFont({
  src: "./fonts/outfit-latin.woff2",
  weight: "300 700",
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
        <Script
          id="cloudflare-web-analytics"
          type="module"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={JSON.stringify({ token: "93447695dfe34e6188126ff67afe0fc8" })}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

