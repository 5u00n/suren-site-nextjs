import React from 'react';
import Image from 'next/image';
import ProjectHero from '@/public/images/heroproject.svg'

function Services() {
    return (
        <main className="top-0 start-0 flex flex-col items-center sm:items-start lg:max-w-[1280px] mx-auto">
            <div className="relative bg-[#3c5c46] dark:bg-gray-800 shadow-lg lg:h-[600px] w-full flex items-center justify-center">
                <Image src={ProjectHero} alt="Services" layout="fill" objectFit="cover" className="absolute rounded-lg z-0" />
                <h1 className="relative text-title text-center font-gloock z-10 py-4 px-6 bg-[#3c5c46] dark:bg-gray-800">Services</h1>
            </div>


            <section id="projects-section" className=" flex flex-col gap-8 md:px-10 sm:px-5 xs:px-10 bg-[#ECF2FF] dark:bg-[#314061] py-3  max-w-[1280px] mx-auto xs:w-full">
                <h2 className=" font-bold w-full font-gloock mb-4 text-heading1">
                    Projects Showcase
                </h2>
                <p className="text-lg dark:text-white">We provide a wide range of services to help you achieve your goals.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold dark:text-white">Web Development</h2>
                        <p className="text-lg dark:text-white">We build websites and web applications using the latest technologies.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold dark:text-white">Mobile Development</h2>
                        <p className="text-lg dark:text-white">We build mobile apps for iOS and Android using React Native.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold dark:text-white">UI/UX Design</h2>
                        <p className="text-lg dark:text-white">We design beautiful and user-friendly interfaces for your products.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Services