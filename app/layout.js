import localFont from "next/font/local";
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Suren Hembram Portfolio",
  description: "Suren Hembram Portfolio Website for Software Development on Full Stack Web Development, React, Next.js, Node.js, and more.",
  keywords: "Suren Hembram,suren hembram,portfolio , hembram, suren, Full Stack Web Development, React, Next.js, Node.js, Software Development, Web Development, JavaScript",
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
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Suren Hembram",
              "url": "https://suren-site.versel.app",
              "sameAs": [
                "https://www.linkedin.com/in/surenhembram",
                ""
              ]
            })
          }}
        />


      </head>

      <body className={`antialiased min-h-screen flex flex-col relative w-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="absolute w-full min-h-screen flex flex-col">
            <div className="flex-1">
              {children}
            </div>
             <Footer /> 
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
