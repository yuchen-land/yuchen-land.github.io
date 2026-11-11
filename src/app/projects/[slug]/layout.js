import { createPageMetadata } from "@/data/siteMetadata";
import { findDocBySlug, getAllProjectSlugs } from "@/utils/projectHelpers";

export async function generateStaticParams() {
  return getAllProjectSlugs();
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const doc = findDocBySlug(resolvedParams.slug);

  if (!doc) {
    return {
      title: "Project Not Found",
      description: "The project documentation you're looking for doesn't exist.",
    };
  }

  const projectSummaries = {
    "holly-world-ecommerce": "Holly World: a five-language costume rental platform with Neon PostgreSQL, resilient catalog delivery, Cloudflare media storage, and verified releases.",
    myedit: "MyEdit product engineering at CyberLink: generative AI creative tools, automated reporting, and AI-assisted testing integrated into software delivery.",
  };
  const summary = projectSummaries[doc.id] || `${doc.title}. ${doc.star?.task || "Engineering approach, implementation, and outcomes."}`;
  const description = summary.length > 180 ? `${summary.slice(0, 177).trimEnd()}…` : summary;

  return createPageMetadata({
    title: doc.title,
    description,
    path: `/projects/${doc.slug}`,
    type: "article",
  });
}

export default function ProjectLayout({ children }) {
  return children;
}
