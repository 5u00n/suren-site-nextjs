import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

function PartnerSection() {
  return (
    <section id="partner-section" className="w-full h-full md:px-16 sm:px-5 xs:px-5 bg-[#ECF2FF] dark:bg-[#314061] py-16">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="font-bold font-gloock text-heading1 mb-8">Partners & Collaborators</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Working together with talented individuals to create impactful solutions
        </p>
      </div>
      
      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-12 text-center">Amazing People I Work With</h3>
        <div className="mx-auto grid max-w-lg gap-12 sm:max-w-xl sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          
          <div className="flex flex-col items-center p-8 bg-white dark:bg-gray-800/40 rounded-2xl shadow-lg transition-all hover:shadow-xl h-full">
            <div className="h-40 w-40 rounded-full overflow-hidden mb-6 border-4 border-blue-100 dark:border-blue-900/20">
              <Image 
                src="/images/partners/gompa.jpeg" 
                alt="Prem S. Gompa"
                width={160}
                height={160}
                className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h4 className="text-xl font-bold mb-2">Prem S. Gompa</h4>
            <p className="text-md text-gray-600 dark:text-gray-400 mb-2 font-medium text-center">Business Analyst</p>
            <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
              Expert in business analysis and strategic planning with focus on market research
            </p>
            <div className="mt-auto flex space-x-6">
              <Link href="https://linkedin.com/in/premsagargompa" target="_blank" className="transform hover:scale-110 transition-transform">
                <Linkedin className="h-6 w-6 text-gray-600 hover:text-blue-600" />
              </Link>
              <Link href="https://twitter.com/premsagargompa" target="_blank" className="transform hover:scale-110 transition-transform">
                <svg className="h-6 w-6 text-gray-600 hover:text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center p-8 bg-white dark:bg-gray-800/40 rounded-2xl shadow-lg transition-all hover:shadow-xl h-full">
            <div className="h-40 w-40 rounded-full overflow-hidden mb-6 border-4 border-blue-100 dark:border-blue-900/20">
              <Image 
                src="/images/partners/richard.png" 
                alt="Richard S. Mitra"
                width={160}
                height={160}
                className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h4 className="text-xl font-bold mb-2">Richard S. Mitra</h4>
            <p className="text-md text-gray-600 dark:text-gray-400 mb-2 font-medium text-center">Research & Executive Officer</p>
            <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
              Leading research initiatives and executive operations with innovative approaches
            </p>
            <div className="mt-auto flex space-x-6">
              <Link href="https://linkedin.com/in/richardsagarmitra" target="_blank" className="transform hover:scale-110 transition-transform">
                <Linkedin className="h-6 w-6 text-gray-600 hover:text-blue-600" />
              </Link>
              <Link href="https://github.com/richardmitra" target="_blank" className="transform hover:scale-110 transition-transform">
                <Github className="h-6 w-6 text-gray-600 hover:text-gray-900" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center p-8 bg-white dark:bg-gray-800/40 rounded-2xl shadow-lg transition-all hover:shadow-xl h-full">
            <div className="h-40 w-40 rounded-full overflow-hidden mb-6 border-4 border-blue-100 dark:border-blue-900/20">
              <Image 
                src="/images/partners/meghrai.jpeg" 
                alt="Meghrai Tudu"
                width={160}
                height={160}
                className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h4 className="text-xl font-bold mb-2">Meghrai Tudu</h4>
            <p className="text-md text-gray-600 dark:text-gray-400 mb-2 font-medium text-center">Software Development Lead</p>
            <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
              Leading software development and technical architecture with expertise in scalable solutions
            </p>
            <div className="mt-auto flex space-x-6">
              <Link href="https://github.com/meghraidev" target="_blank" className="transform hover:scale-110 transition-transform">
                <Github className="h-6 w-6 text-gray-600 hover:text-gray-900" />
              </Link>
              <Link href="https://linkedin.com/in/meghraitudu" target="_blank" className="transform hover:scale-110 transition-transform">
                <Linkedin className="h-6 w-6 text-gray-600 hover:text-blue-600" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center p-8 bg-white dark:bg-gray-800/40 rounded-2xl shadow-lg transition-all hover:shadow-xl h-full">
            <div className="h-40 w-40 rounded-full overflow-hidden mb-6 border-4 border-blue-100 dark:border-blue-900/20">
              <Image 
                src="/images/partners/chandray.png" 
                alt="Chandray Murmu"
                width={160}
                height={160}
                className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h4 className="text-xl font-bold mb-2">Chandray Murmu</h4>
            <p className="text-md text-gray-600 dark:text-gray-400 mb-2 font-medium text-center">UI/UX Designer & Illustrator</p>
            <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
              Creating beautiful user interfaces and compelling graphic illustrations
            </p>
            <div className="mt-auto flex space-x-6">
              <Link href="https://linkedin.com/in/chandraymurmu" target="_blank" className="transform hover:scale-110 transition-transform">
                <Linkedin className="h-6 w-6 text-gray-600 hover:text-blue-600" />
              </Link>
              <Link href="https://dribbble.com/chandraymurmu" target="_blank" className="transform hover:scale-110 transition-transform">
                <svg className="h-6 w-6 text-gray-600 hover:text-pink-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.938 5.5a10.203 10.203 0 012.345 6.266c-.34-.064-3.75-.718-7.188-.312-.064-.17-.17-.374-.234-.578-.234-.544-4.875-1.69-4.875-1.69s4.125-3.687 4.594-4.687c.47-1 .874-1.874.874-1.874s1.84.938 4.484 2.875zm-7.938-3.75c2.75 0 5.25 1.03 7.188 2.72-.064.064-1.064.874-4.188 2.374-1.31-2.406-2.75-4.406-2.97-4.72a9.855 9.855 0 00-.03-.374zm-2.594.5c.17.234 1.625 2.25 2.938 4.594-3.688.984-6.938.984-7.312.984a10.275 10.275 0 014.374-5.578zM2.25 12v-.312c.374 0 4.25.064 8.25-.875 1.188 2.313 1.688 3.813 1.75 4.063-3.125 1.375-5.188 3.375-5.188 3.375A9.904 9.904 0 012.25 12zm9.75 9.75a9.904 9.904 0 01-6.188-2.125s1.625-1.875 5-3.313c1.375 3.438 1.938 6.313 2.063 7.188-.312.125-.594.25-.875.25zm3.063-.375c-.064-.625-.688-3.688-2.125-7.188 3.438-.544 6.438.375 6.78.5a10.017 10.017 0 01-4.655 6.688z"/></svg>
              </Link>
              <Link href="https://behance.net/chandraymurmu" target="_blank" className="transform hover:scale-110 transition-transform">
                <svg className="h-6 w-6 text-gray-600 hover:text-blue-900" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7V2H9v5H2v15h20V7zM9.5 15.5c0 1.9-1.6 3.5-3.5 3.5H3v-7h3c1.9 0 3.5 1.6 3.5 3.5zm7.5 3.5h-3.5v-7H20v7zm0-9h-7V4h7v6z"/></svg>
              </Link>
            </div>
          </div>

        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-xl font-semibold mb-8">Companies We&apos;ve Collaborated With</h3>
        <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <Link href="https://company1.com" className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
            <Image src="/images/companies/logo1.png" alt="Company 1" width={120} height={60} className="object-contain" />
          </Link>
          <Link href="https://company2.com" className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
            <Image src="/images/companies/logo2.png" alt="Company 2" width={120} height={60} className="object-contain" />
          </Link>
          <Link href="https://company3.com" className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
            <Image src="/images/companies/logo3.png" alt="Company 3" width={120} height={60} className="object-contain" />
          </Link>
          <Link href="https://company4.com" className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
            <Image src="/images/companies/logo4.png" alt="Company 4" width={120} height={60} className="object-contain" />
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PartnerSection