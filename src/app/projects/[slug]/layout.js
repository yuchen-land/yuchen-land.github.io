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

  const description = doc.star?.situation || doc.title;

  return {
    title: `${doc.title} - Project Documentation`,
    description: description,
    openGraph: {
      title: `${doc.title} - Yu-Chen(Cindy), Liu`,
      description: description,
      type: "article",
    },
  };
}

export default function ProjectLayout({ children }) {
  return children;
}
