import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


function EducationSection() {
  return (
    <section id="education-section" className="w-full h-full md:px-16 sm:px-5 xs:px-5 bg-[#FFFFFF] dark:bg-transparent py-16 ">
        <div className="w-full h-full gap-8 flex">
          <h2 className=" font-bold w-full font-gloock mb-4 text-heading1">
            Education
          </h2>

        </div>




        <div className="w-full gap-4 flex flex-col p-4 md:hidden">
          <div className="w-full">
            <h3 className="font-bold text-heading4 font-figtree">Masters in Computer Application</h3>
            <div className="w-full flex flex-row justify-between mb-2 font-inter">
              <span ><Link className="text-body font-bold underline text-blue-400" href={"https://mitwpu.edu.in"}>MIT World Peace University</Link>
                <p className="text-sm">Pune, Maharashtra, India</p></span>
              <span className="text-body px-2 rounded ">2021 - 2022</span>
            </div>
            <p className="text-body font-inter">Experiencing Hard Work and learning to be humble, learning from the Administrators from the bottom.</p>
          </div>

          <div className="w-full">
            <h3 className="font-bold text-heading4 font-figtree">Bachelor of Computer Application</h3>
            <div className="w-full flex flex-row justify-between mb-2 font-inter">
              <span ><Link className="text-body font-bold underline text-blue-400" href={"https://sau.edu.in"}>Spicer Adventist University</Link>
                <p className="text-sm">Pune, Maharashtra, India</p></span>
              <span className="text-body px-2 rounded">2017 - 2020</span>
            </div>
            <p className="text-body font-inter">Experiencing Hard Work and learning to be humble, learning from the IT Administrators.</p>
          </div>

          <div className="w-full">
            <h3 className="font-bold text-heading4 font-figtree">Higher Secondary Certificate</h3>
            <div className="w-full flex flex-row justify-between mb-2 font-inter">
              <span ><Link className="text-body font-bold underline text-blue-400" href={""}>Irvine Adventist, TPS DAV Public School</Link>
                <p className="text-sm">Ghatshila, Jharkhand, India</p></span>
              <span className="text-body px-2 rounded ">2004 - 2016</span>
            </div>
            <p className="text-sm font-inter">A Journey where I learned the basics of life, hard work, and common sense.</p>
          </div>
        </div>

        <div className="w-full h-full hidden md:flex flex-col md:flex-row ">
          <div className="w-full md:w-1/2 gap-4 flex flex-col p-4">
            <div className="w-full">
              <h3 className="font-bold text-heading4 font-figtree">Masters in Computer Application</h3>
              <div className="w-full flex flex-row justify-between mb-2 font-inter">
                <span className="text-body font-bold underline text-blue-400"><Link href={"https://mitwpu.edu.in"}>MIT World Peace University</Link></span>
                <span className="text-sm px-2">Pune, Maharashtra, India</span>
                <span className="text-body  px-2 rounded ">2021 - 2022</span>
              </div>
              <p className="text-body font-inter">Experiencing Hard Work and learning to be humble, learning from the Administrators from the bottom.</p>
            </div>

            <div className="w-full">
              <h3 className="font-bold text-heading4 font-figtree">Bachelor of Computer Application</h3>
              <div className="w-full flex flex-row justify-between mb-2 font-inter">
                <span className="text-body font-bold underline text-blue-400"><Link href={"https://sau.edu.in"}>Spicer Adventist University</Link></span>
                <span className="text-sm px-2">Pune, Maharashtra, India</span>
                <span className="text-body  px-2 rounded">2017 - 2020</span>
              </div>
              <p className="text-body font-inter">Experiencing Hard Work and learning to be humble, learning from the IT Administrators.</p>
            </div>

            <div className="w-full">
              <h3 className="font-bold text-heading4 font-figtree">Higher Secondary Certificate</h3>
              <div className="w-full flex flex-row justify-between mb-2 font-inter">
                <span className="text-body font-bold underline text-blue-400"><Link href={""}>Irvine Adventist, TPS DAV Public School</Link></span>
                <span className="text-sm px-2">Ghatshila, Jharkhand, India</span>
                <span className="text-body  px-2 rounded ">2004 - 2016</span>
              </div>
              <p className="text-body font-inter">A Journey where I learned the basics of life, hard work, and common sense.</p>
            </div>
          </div>

          <div className="md:w-1/2 gap-2 p-4 flex items-center justify-center">
            <div className="grid grid-rows-3 grid-cols-3 grid-flow-col gap-4 max-w-[420px] max-h-80 h-full w-full hidden md:grid">
              <div className="row-span-2 col-span-2 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=85"
                  alt="University campus — higher education"
                  width={280}
                  height={213}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="row-span-2 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=85"
                  alt="Modern library and study"
                  width={140}
                  height={213}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="col-span-2 col-start-1 row-start-3 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=85"
                  alt="Professional team collaboration"
                  width={280}
                  height={107}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=85"
                  alt="Award and achievement"
                  width={140}
                  height={107}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full mt-10">
          <h3 className="font-bold text-heading3">Works and Awards</h3>

          <div className="flex flex-col gap-8 mt-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=85"
                  alt="Professional innovation and business growth"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h4 className="text-xl font-semibold mb-2">Best Innovation Award 2023</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Received the Best Innovation Award for developing an AI-powered solution that helped optimize supply chain operations, resulting in 30% cost reduction.
                </p>
                <Link href="#" className="text-blue-600 hover:underline">Learn more →</Link>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="w-full md:w-1/3 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=85"
                  alt="Team project launch and collaboration"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h4 className="text-xl font-semibold mb-2">Outstanding Project Award 2022</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Led a team of developers to create a revolutionary mobile app that garnered over 1 million downloads in its first month of launch.
                </p>
                <Link href="#" className="text-blue-600 hover:underline">Learn more →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default EducationSection