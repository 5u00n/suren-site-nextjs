import React from 'react';
import Image from 'next/image';
import ProjectHero from '@/public/images/projectshero.png'

function Services() {
    return (
        <main className="top-0 start-0 flex flex-col items-center sm:items-start lg:max-w-[1280px] mx-auto">
            <hero className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg lg:h-[700px] w-full">
                <Image src={ProjectHero} alt="Services" width={1280} height={600} className="absolute rounded-lg" />
                <h1 className="relative text-center flex justify-center content-center text-gloock">Services</h1>
            </hero>


            <h1 className="text-4xl font-bold dark:text-white">Services</h1>
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
        </main>
    )
}

export default Services