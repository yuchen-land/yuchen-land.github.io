import Link from "next/link";
import Navbar from "@/components/Navbar";
import PortfolioContent from "@/components/PortfolioContent";

export const metadata = {
  title: "Portfolio - Yu-Chen(Cindy), Liu",
  description: "Explore my featured projects and technical work showcasing my skills in web development and software engineering.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      <Navbar />

      <div className="relative z-10 min-h-screen py-16 px-4 pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto">
          <PortfolioContent />
        </div>
      </div>
    </div>
  );
}
