import Link from "next/link";
import Navbar from "@/components/Navbar";
import PortfolioContent from "@/components/PortfolioContent";

export const metadata = {
  title: "Portfolio - Yu-Chen(Cindy), Liu",
  description: "Explore my featured projects and technical work showcasing my skills in web development and software engineering.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_#fff1f2_0%,_#fafafa_45%,_#fafafa_100%)]">
      <Navbar />

      <div className="relative z-10 min-h-screen py-12 px-5 sm:px-6 pt-28 md:pt-32">
        <div className="max-w-6xl mx-auto">
          <PortfolioContent />
        </div>
      </div>
    </div>
  );
}
