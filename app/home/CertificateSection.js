import React from 'react';
import {InfiniteMovingCards} from '@/components/ui/infinite-moving-cards';

function CertificateSection() {
  return (
    <section id="certificate-section" className="w-full h-full md:px-10 sm:px-5 xs:px-5 bg-[#ECF2FF] dark:bg-[#314061] py-16 lg:rounded">
        <div className="w-full h-full flex flex-col gap-8">
          <h2 className="font-bold font-gloock text-heading1">
            Certificates & Licenses
          </h2>

          <InfiniteMovingCards
            items={[
              {
                quote: "Comprehensive understanding of React fundamentals, hooks, state management, and modern React development practices",
                name: "React Complete Course",
                title: "Meta",
                svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>,
                link: "#",
                date: "2023",
                category: "Web Development"
              },
              {
                quote: "Container orchestration, cluster management, and deployment strategies using Kubernetes",
                name: "Kubernetes",
                title: "Linux Foundation",
                svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 18v-2H3v2h18zM17.404 3.904L22 8.5l-4.596 4.596-1.414-1.414L19.172 8.5 15.99 5.318l1.414-1.414zM6.596 3.904L2 8.5l4.596 4.596 1.414-1.414L4.828 8.5 8.01 5.318 6.596 3.904z"/></svg>,
                link: "#",
                date: "2023", 
                category: "DevOps"
              },
              {
                quote: "Design thinking, user research, wireframing, prototyping and usability testing",
                name: "UI/UX Fundamentals",
                title: "Google",
                svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2.5 8.86l9.5-5.5 9.5 5.5-9.5 5.5z M2.5 12.86l9.5 5.5 9.5-5.5 M12 3.36v19.5"/></svg>,
                link: "#",
                date: "2023",
                category: "Design"
              },
              {
                quote: "Progressive framework for building user interfaces and single-page applications",
                name: "Vue",
                title: "Vue.js",
                svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/></svg>,
                link: "#",
                date: "2023",
                category: "Web Development"
              },
              {
                quote: "Core concepts, ES6+ features, async programming, and modern JavaScript development",
                name: "JavaScript",
                title: "freeCodeCamp",
                svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"/></svg>,
                link: "#",
                date: "2023",
                category: "Programming"
              },
              {
                quote: "SharePoint development, Power Automate workflows, and Microsoft 365 integration",
                name: "SharePoint & Power Automate",
                title: "Microsoft",
                svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 9v11h-18v-11h18zm0-2h-18c-1.104 0-2 .896-2 2v11c0 1.104.896 2 2 2h18c1.104 0 2-.896 2-2v-11c0-1.104-.896-2-2-2zm-2-6h-14v2h14v-2zm-14 17h-2v2h2v-2zm14 0h-2v2h2v-2z"/></svg>,
                link: "#",
                date: "2023",
                category: "Business Solutions"
              }
            ]}
            direction="right"
            speed="slow"
            className="py-10"
          />

        </div>
      </section>

  )
}

export default CertificateSection