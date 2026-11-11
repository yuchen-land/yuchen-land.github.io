import { createPageMetadata, siteDescriptions } from "@/data/siteMetadata";

export const metadata = createPageMetadata({
  title: "Portfolio",
  description: siteDescriptions.portfolio,
  path: "/portfolio",
  type: "website",
});

export default function PortfolioLayout({ children }) {
  return children;
}
