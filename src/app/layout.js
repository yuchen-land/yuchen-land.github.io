import "./globals.css";
import { Nunito } from "next/font/google";
import { Caveat } from "next/font/google";
import { Comfortaa } from "next/font/google";
import { Outfit } from "next/font/google";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} ${caveat.variable} ${comfortaa.variable} ${outfit.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
