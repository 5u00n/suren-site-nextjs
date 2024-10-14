import localFont from "next/font/local";
import "./globals.css";

import Footer from "./components/Footer";
import Navbar from "./components/NavBar";

import { ThemeProvider } from "@/components/theme-provider";

import { DefaultSeo, NextSeo } from 'next-seo';
import Head from 'next/head';



export const metadata = {
  title: "Suren Hembram Portfolio",
  description: "Suren Hembram Portfolio Website for Software Development on Full Stack Web Development, React, Next.js, Node.js, and more.",
  keywords: "Suren Hembram,suren hembram,portfolio , hembram, suren, Full Stack Web Development, React, Next.js, Node.js, Software Development, Web Development, JavaScript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <DefaultSeo
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords}
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://suren.vercel.app/',
          site_name: 'Suren Hembram Portfolio',
        }}
        twitter={{
          handle: '@surenhembram',
          site: '@surenhembram',
          cardType: 'summary_large_image',
        }}
      />


      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/app/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="author" content="Suren Hembram" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="v7fSZGeFLbxk3-i3tStvF-BeDH0FSwK_GPcJTVu5NuM" />
        <meta name="keywords" content={metadata.keywords} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Suren Hembram",
            "url": "https://suren.vercel.app/",
            "sameAs": [
              "https://www.linkedin.com/in/surenhembram/",
              "
            ],
            "jobTitle": "Software Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelancer"
            }
          }`
        }} />

      </Head>
      <body className={`antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="absolute min-w-full flex-grow">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
