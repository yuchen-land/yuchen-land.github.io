export const displayName = "Yu-Chen (Cindy) Liu";
export const engineeringTitle = "AI-Native Software Engineer";

export const siteDescriptions = {
  home: "AI-Native Software Engineer building generative AI products at CyberLink and operating Holly World, with automated verification and reliable software delivery.",
  about: "Meet Yu-Chen (Cindy) Liu: generative AI product engineering at CyberLink, independent full-stack work on Holly World, and research in resilient networks.",
  portfolio: "Explore generative AI product work, Holly World's multilingual platform and system architecture, and interactive SDN/SRv6 research by Yu-Chen (Cindy) Liu.",
  research: "Explore PROA adaptive routing in SDN/SRv6 networks through an interactive dashboard, with a link to the published ACIIDS 2026 paper.",
};

export function createPageMetadata({ title, description, path, type = "website" }) {
  const pageTitle = title ? `${title} - ${displayName}` : `${displayName} - ${engineeringTitle}`;
  const images = [{ url: "/images/Cindy.jpg", width: 1200, height: 630, alt: `${displayName} - ${engineeringTitle}` }];
  return {
    title: pageTitle,
    description,
    openGraph: {
      title: pageTitle,
      description,
      url: path,
      siteName: `${displayName} | Engineering Portfolio`,
      locale: "en_US",
      type,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: ["/images/Cindy.jpg"],
    },
  };
}
