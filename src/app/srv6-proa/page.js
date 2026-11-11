import { createPageMetadata, siteDescriptions } from "@/data/siteMetadata";

import Srv6ProaContent from "@/components/Srv6ProaContent";

export const metadata = createPageMetadata({
  title: "SRv6 PROA Dashboard",
  description: siteDescriptions.research,
  path: "/srv6-proa",
});

export default function Srv6ProaPage() {
  return <Srv6ProaContent />;
}
