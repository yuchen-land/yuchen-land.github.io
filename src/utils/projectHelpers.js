import { projectDocumentation, projects } from "@/data/data";

/**
 * Find project documentation by slug
 * @param {string} slug - The project slug
 * @returns {Object|undefined} The project documentation or undefined
 */
export function findDocBySlug(slug) {
  return Object.values(projectDocumentation).find((doc) => doc.slug === slug);
}

/**
 * Find project by slug
 * @param {string} slug - The project slug
 * @returns {Object|null} The project or null
 */
export function findProjectBySlug(slug) {
  const doc = findDocBySlug(slug);
  if (!doc) return null;

  const docEntry = Object.entries(projectDocumentation).find(
    ([, d]) => d.slug === slug
  );
  if (!docEntry) return null;

  return projects.find((p) => p.id === parseInt(docEntry[0]));
}

/**
 * Get all project slugs for static generation
 * @returns {Array<{slug: string}>} Array of slug objects
 */
export function getAllProjectSlugs() {
  return Object.values(projectDocumentation).map((doc) => ({
    slug: doc.slug,
  }));
}
