import "./globals.css";

export const metadata = {
  title: "Portfolio - Full Stack Developer",
  description: "Welcome to my professional portfolio showcasing my work and expertise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
