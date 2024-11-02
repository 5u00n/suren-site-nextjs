import React from "react";
import Image from "next/image";
import ProjectHero from "@/public/images/heroproject.svg";

function Services() {
  return (
    <main className="mx-auto flex flex-col items-center sm:items-start lg:max-w-[1280px]">
      <div className="relative flex w-full flex-col items-center justify-center bg-[#3c5c46] shadow-lg dark:bg-gray-800 lg:h-[600px]">
        <Image
          src={ProjectHero}
          alt="Services"
          layout="fill"
          objectFit="cover"
          className="absolute z-0 rounded-lg"
        />
        <div className="absolute z-10 flex  flex-col items-center justify-center rounded-lg dark:bg-gray-800 bg-opacity-50 p-10">
          <h1 className="relative z-10 bg-[#3c5c46] text-center font-gloock text-title dark:bg-gray-800">
            SERVICES
          </h1>
          <h2 className="relative z-10 bg-[#3c5c46] text-center font-gloock text-title dark:bg-gray-800">
            ( Full page coming Soon)
          </h2>
        </div>
      </div>

      <section
        id="projects-section"
        className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 bg-[#ECF2FF] px-5 py-3 dark:bg-[#314061]"
      >
        <h2 className="mb-4 w-full font-gloock text-heading1 font-bold">
          Projects Showcase
        </h2>
        <p className="text-lg dark:text-white">
          We provide a wide range of services to help you achieve your goals.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
            <h2 className="text-2xl font-bold dark:text-white">
              Web Development
            </h2>
            <p className="text-lg dark:text-white">
              We build websites and web applications using the latest
              technologies.
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
            <h2 className="text-2xl font-bold dark:text-white">
              Mobile Development
            </h2>
            <p className="text-lg dark:text-white">
              We build mobile apps for iOS and Android using React Native.
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
            <h2 className="text-2xl font-bold dark:text-white">UI/UX Design</h2>
            <p className="text-lg dark:text-white">
              We design beautiful and user-friendly interfaces for your
              products.
            </p>
          </div>
        </div>
      </section>

      <section
        id="services-section"
        className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 bg-[#ECF2FF] px-5 py-3 dark:bg-[#314061]"
      >
        <h2 className="mb-4 w-full font-gloock text-heading1 font-bold">
          Our Services
        </h2>
      </section>
    </main>
  );
}

export default Services;
