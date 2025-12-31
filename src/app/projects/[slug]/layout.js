import { projectDocumentation } from "@/data/data";

// Helper to find doc by slug
function findDocBySlug(slug) {
  return Object.values(projectDocumentation).find((doc) => doc.slug === slug);
}

export async function generateStaticParams() {
  return Object.values(projectDocumentation).map((doc) => ({
    slug: doc.slug,
  }));
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
