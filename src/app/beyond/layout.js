export const metadata = {
  title: "Beyond Code - Yu-Chen(Cindy), Liu",
  description: "Explore my brand ventures, creative hobbies like art and pastry making, scholarships, and community involvement beyond software engineering.",
  openGraph: {
    title: "Beyond Code - Yu-Chen(Cindy), Liu",
    description: "Founder, creator, and lifelong learner. Discover my brand ventures, creative hobbies, and community involvement.",
    type: "website",
    images: [
      {
        url: "/images/Cindy.jpg",
        width: 1200,
        height: 630,
        alt: "Yu-Chen Liu - Beyond Code",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Code - Yu-Chen(Cindy), Liu",
    description: "Founder, creator, and lifelong learner. Discover my brand ventures and creative hobbies.",
    images: ["/images/Cindy.jpg"],
  },
};

export default function BeyondLayout({ children }) {
  return children;
}
