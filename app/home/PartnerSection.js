import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

function PartnerSection() {
  return (
    <section
      id="partner-section"
      className="h-full w-full bg-[#ECF2FF] py-16 dark:bg-[#314061] xs:px-5 sm:px-5 md:px-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mb-8 font-gloock text-heading1 font-bold">
            Partners & Collaborators
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Working together with talented individuals to create impactful
            solutions
          </p>
        </div>

        <div className="mt-16">
          <h3 className="mb-12 text-center text-2xl font-semibold">
            Amazing People I Work With
          </h3>
          <div className="mx-auto grid max-w-lg gap-6 sm:max-w-xl sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div className="flex h-full flex-col items-center rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800/40">
              <div className="mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-blue-100 dark:border-blue-900/20">
                <Image
                  src="/images/partners/gompa.jpeg"
                  alt="Prem S. Gompa"
                  width={160}
                  height={160}
                  className="h-full w-full transform object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h4 className="mb-2 text-center text-xl font-bold">
                Dr. Prem S. Gompa
              </h4>
              <p className="text-md mb-2 text-center font-medium text-gray-600 dark:text-gray-400">
                Business Analyst
              </p>
              <p className="mb-6 line-clamp-3 text-center text-sm text-gray-600 dark:text-gray-400">
                Expert in business analysis and strategic planning with focus on
                market research
              </p>
              <div className="mt-auto flex space-x-6">
                <Link
                  href="https://linkedin.com/in/premsagargompa"
                  target="_blank"
                  className="transform transition-transform hover:scale-110"
                >
                  <Linkedin className="h-6 w-6 text-gray-600 hover:text-blue-600" />
                </Link>
                <Link
                  href="https://twitter.com/premsagargompa"
                  target="_blank"
                  className="transform transition-transform hover:scale-110"
                >
                  <svg
                    className="h-6 w-6 text-gray-600 hover:text-blue-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="flex h-full flex-col items-center rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800/40">
              <div className="mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-blue-100 dark:border-blue-900/20">
                <Image
                  src="/images/partners/richard.png"
                  alt="Richard S. Mitra"
                  width={160}
                  height={160}
                  className="h-full w-full transform object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h4 className="mb-2 text-center text-xl font-bold">
                Richard S. Mitra
              </h4>
              <p className="text-md mb-2 text-center font-medium text-gray-600 dark:text-gray-400">
                Research & Executive Officer
              </p>
              <p className="mb-6 line-clamp-3 text-center text-sm text-gray-600 dark:text-gray-400">
                Leading research initiatives and executive operations with
                innovative approaches
              </p>
              <div className="mt-auto flex space-x-6">
                <Link
                  href="https://linkedin.com/in/richardsagarmitra"
                  target="_blank"
                  className="transform transition-transform hover:scale-110"
                >
                  <Linkedin className="h-6 w-6 text-gray-600 hover:text-blue-600" />
                </Link>
                <Link
                  href="https://github.com/richardmitra"
                  target="_blank"
                  className="transform transition-transform hover:scale-110"
                >
                  <Github className="h-6 w-6 text-gray-600 hover:text-gray-900" />
                </Link>
              </div>
            </div>

            <div className="flex h-full flex-col items-center rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800/40">
              <div className="mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-blue-100 dark:border-blue-900/20">
                <Image
                  src="/images/partners/meghrai.jpeg"
                  alt="Meghrai Tudu"
                  width={160}
                  height={160}
                  className="h-full w-full transform object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h4 className="mb-2 text-center text-xl font-bold">
                Meghrai Tudu
              </h4>
              <p className="text-md mb-2 text-center font-medium text-gray-600 dark:text-gray-400">
                Software Development Lead
              </p>
              <p className="mb-6 line-clamp-3 text-center text-sm text-gray-600 dark:text-gray-400">
                Leading software development and technical architecture with
                expertise in scalable solutions
              </p>
              <div className="mt-auto flex space-x-6">
                <Link
                  href="https://github.com/meghraidev"
                  target="_blank"
                  className="transform transition-transform hover:scale-110"
                >
                  <Github className="h-6 w-6 text-gray-600 hover:text-gray-900" />
                </Link>
                <Link
                  href="https://linkedin.com/in/meghraitudu"
                  target="_blank"
                  className="transform transition-transform hover:scale-110"
                >
                  <Linkedin className="h-6 w-6 text-gray-600 hover:text-blue-600" />
                </Link>
              </div>
            </div>

            <div className="flex h-full flex-col items-center rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800/40">
              <div className="mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-blue-100 dark:border-blue-900/20">
                <Image
                  src="/images/partners/chandray.jpg"
                  alt="Chandray Murmu"
                  width={160}
                  height={160}
                  className="h-full w-full transform object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h4 className="mb-2 text-center text-xl font-bold">
                Chandray Murmu
              </h4>
              <p className="text-md mb-2 text-center font-medium text-gray-600 dark:text-gray-400">
                UI/UX Designer & Illustrator
              </p>
              <p className="mb-6 line-clamp-3 text-center text-sm text-gray-600 dark:text-gray-400">
                Creating beautiful user interfaces and compelling graphic
                illustrations
              </p>
              <div className="mt-auto flex space-x-6">
              <Link
                  href="https://github.com/thechandraymurmu"
                  target="_blank"
                  className="transform transition-transform hover:scale-110"
                >
                  <Github className="h-6 w-6 text-gray-600 hover:text-gray-900" />
                </Link>
                <Link
                  href="https://linkedin.com/in/chandraymurmu"
                  target="_blank"
                  className="transform transition-transform hover:scale-110"
                >
                  <Linkedin className="h-6 w-6 text-gray-600 hover:text-blue-600" />
                </Link>
                <Link
                  href="https://x.com/theChandM"
                  target="_blank"
                  className="transform transition-transform hover:scale-110"
                >
                  <svg
                    className="h-6 w-6 text-gray-600 hover:text-blue-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="mb-8 text-xl font-semibold">
            Companies We&apos;ve Collaborated With
          </h3>
          <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <Link
              href="https://company1.com"
              className="flex items-center justify-center p-4 grayscale transition-all hover:grayscale-0"
            >
              <Image
                src="/images/companies/logo1.svg"
                alt="Tech Partner"
                width={120}
                height={60}
                className="object-contain"
              />
            </Link>
            <Link
              href="https://company2.com"
              className="flex items-center justify-center p-4 grayscale transition-all hover:grayscale-0"
            >
              <Image
                src="/images/companies/logo2.svg"
                alt="Innovation"
                width={120}
                height={60}
                className="object-contain"
              />
            </Link>
            <Link
              href="https://company3.com"
              className="flex items-center justify-center p-4 grayscale transition-all hover:grayscale-0"
            >
              <Image
                src="/images/companies/logo3.svg"
                alt="Digital"
                width={120}
                height={60}
                className="object-contain"
              />
            </Link>
            <Link
              href="https://company4.com"
              className="flex items-center justify-center p-4 grayscale transition-all hover:grayscale-0"
            >
              <Image
                src="/images/companies/logo4.svg"
                alt="Solutions"
                width={120}
                height={60}
                className="object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnerSection;
