import localFont from "next/font/local";
import "./globals.css";

import Headers from "./components/Headers";
import Footer from "./components/Footer";



export const metadata = {
  title: "Suren Portfolio",
  description: "Suren Hembram Portfolio Website for Software Development on Full Stack Web Development, React, Next.js, Node.js, and more.",
  keywords: "Suren Hembram, Full Stack Web Development, React, Next.js, Node.js, Software Development, Web Development, JavaScript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/app/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="author" content="Suren Hembram" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="v7fSZGeFLbxk3-i3tStvF-BeDH0FSwK_GPcJTVu5NuM" />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Unica+One&display=swap" rel="stylesheet" />

      </head>
      <body className={`antialiased min-h-screen flex flex-col font-gloock`}>
        <Headers />
        <div className="container mx-auto px-4 flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
