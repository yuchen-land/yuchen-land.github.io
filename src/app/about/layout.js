import { createPageMetadata, siteDescriptions } from "@/data/siteMetadata";

export const metadata = createPageMetadata({
  title: "About",
  description: siteDescriptions.about,
  path: "/about",
  type: "profile",
});

export default function AboutLayout({ children }) {
  return children;
}
