import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Suren Site",
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
        <meta og:title={metadata.title} />
        <meta og:description={metadata.description} />
        <meta og:image="/og-image.png" />
        <meta og:type="website" />
        <meta og:url="https://suren-site.vercel.app" />
        <meta name="keywords" content={metadata.keywords} />


      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
