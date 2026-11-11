import { createPageMetadata } from "@/data/siteMetadata";

export const metadata = createPageMetadata({
  title: "Beyond Code",
  description: "The brands, creative interests, and community activities of Yu-Chen (Cindy) Liu, an AI-Native Software Engineer and independent product builder.",
  path: "/beyond",
  type: "website",
});

export default function BeyondLayout({ children }) {
  return children;
}
