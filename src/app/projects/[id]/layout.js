import { projectDocumentation } from "@/data/data";

export async function generateMetadata({ params }) {
  const doc = projectDocumentation[params.id];

  if (!doc) {
    return {
      title: "Project Not Found",
      description: "The project documentation you're looking for doesn't exist.",
    };
  }

  return {
    title: `${doc.title} - Project Documentation`,
    description: doc.overview.description,
    openGraph: {
      title: `${doc.title} - Yu-Chen(Cindy), Liu`,
      description: doc.overview.description,
      type: "article",
    },
  };
}

export default function ProjectLayout({ children }) {
  return children;
}
