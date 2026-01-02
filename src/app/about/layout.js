export const metadata = {
  title: "About - Yu-Chen(Cindy), Liu",
  description: "Learn about Yu-Chen Liu - Software Engineer passionate about building products that simplify life. Education, experience, skills, and professional journey.",
  openGraph: {
    title: "About - Yu-Chen(Cindy), Liu",
    description: "Software Engineer passionate about building products that simplify life. Explore my education, experience, and skills.",
    type: "profile",
    images: [
      {
        url: "/images/Cindy.jpg",
        width: 1200,
        height: 630,
        alt: "Yu-Chen Liu - About",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About - Yu-Chen(Cindy), Liu",
    description: "Software Engineer passionate about building products that simplify life.",
    images: ["/images/Cindy.jpg"],
  },
};

export default function AboutLayout({ children }) {
  return children;
}
