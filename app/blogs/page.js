import React from "react";
import Image from "next/image";
import ProjectHero from "@/public/images/heroproject.svg";

function BlogPage() {
  return (
    <main className="top-0 start-0 flex flex-col items-center sm:items-start lg:max-w-[1280px] mx-auto">
      <div className="relative lg:h-[700px] w-full md:px-16 sm:px-5 xs:px-5 pt-9 flex items-center justify-center bg-[#3c5c46] shadow-lg dark:bg-gray-800 ">
       
        <div className="absolute z-10 flex flex-col items-center justify-center rounded-lg bg-opacity-50 p-10 dark:bg-gray-800 pt-9">
          <h1 className="relative z-10 bg-[#3c5c46] text-center font-gloock text-title dark:bg-gray-800">
           BLOGS / JOURNEY
          </h1>
          <h2 className="relative z-10 bg-[#3c5c46] text-center font-gloock text-title dark:bg-gray-800">
            ( Full page coming Soon)
          </h2>
        </div>
      </div>
    </main>
  );
}

export default BlogPage;
