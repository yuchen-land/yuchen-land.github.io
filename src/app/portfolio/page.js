import Navbar from "@/components/Navbar";
import PortfolioContent from "@/components/PortfolioContent";



export default function PortfolioPage() {
  return (
    <div className="min-h-screen site-surface">
      <Navbar />

      <div className="page-shell relative z-10 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <PortfolioContent />
        </div>
      </div>
    </div>
  );
}
