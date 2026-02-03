import React from "react";
import Image from "next/image";
import ProjectHero from "@/public/images/heroproject.svg";
import Link from "next/link";

export const metadata = {
  title: "Services | Suren Hembram",
  description:
    "Web development, mobile development, and UI/UX design services by Suren Hembram.",
};

export default function Services() {
  return (
    <main className="mx-auto flex flex-col items-center sm:items-start lg:max-w-[1280px] w-full">
      <div className="relative flex w-full flex-col items-center justify-center bg-[#3c5c46] shadow-lg dark:bg-gray-800 lg:h-[400px] rounded-lg overflow-hidden">
        <Image
          src={ProjectHero}
          alt="Services"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute z-10 flex flex-col items-center justify-center rounded-lg p-10">
          <h1 className="relative z-10 text-center font-gloock text-title text-white">
            Services
          </h1>
          <p className="relative z-10 text-center font-figtree text-white/90 mt-2 max-w-xl">
            Web development, mobile apps, and design.
          </p>
        </div>
      </div>

      <section
        id="services-offerings"
        className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 px-5 py-12 md:px-16"
      >
        <h2 className="font-gloock text-heading1 font-bold">
          What I offer
        </h2>
        <p className="font-figtree text-body text-gray-600 dark:text-gray-300 max-w-2xl">
          I provide a range of services to help you build and ship products.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/40 p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-gloock text-xl font-bold dark:text-white">
              Web Development
            </h3>
            <p className="font-figtree text-body text-gray-600 dark:text-gray-300 mt-2">
              Websites and web applications using React, Next.js, Node.js, and
              modern JavaScript/TypeScript.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/40 p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-gloock text-xl font-bold dark:text-white">
              Mobile Development
            </h3>
            <p className="font-figtree text-body text-gray-600 dark:text-gray-300 mt-2">
              Mobile apps for iOS and Android using React Native and related
              tooling.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/40 p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-gloock text-xl font-bold dark:text-white">
              UI/UX Design
            </h3>
            <p className="font-figtree text-body text-gray-600 dark:text-gray-300 mt-2">
              User-friendly interfaces and design for web and mobile products.
            </p>
          </div>
        </div>
        <p className="font-figtree text-sm text-gray-500 dark:text-gray-400 mt-8">
          Need something specific?{" "}
          <Link href="/#contact-section" className="text-[#458a4e] dark:text-[#6ee7a3] hover:underline">
            Get in touch
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
