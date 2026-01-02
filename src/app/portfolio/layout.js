export const metadata = {
  title: "Portfolio - Yu-Chen(Cindy), Liu",
  description: "Explore my featured projects and technical work showcasing expertise in full-stack development, frontend engineering, and software design.",
  openGraph: {
    title: "Portfolio - Yu-Chen(Cindy), Liu",
    description: "A curated collection of projects showcasing expertise in full-stack development and design.",
    type: "website",
    images: [
      {
        url: "/images/Cindy.jpg",
        width: 1200,
        height: 630,
        alt: "Yu-Chen Liu - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Yu-Chen(Cindy), Liu",
    description: "A curated collection of projects showcasing expertise in full-stack development and design.",
    images: ["/images/Cindy.jpg"],
  },
};

export default function PortfolioLayout({ children }) {
  return children;
}
