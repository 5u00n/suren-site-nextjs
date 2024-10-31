import React from 'react'

function NumberSection() {
  return (
    <section id="projects-section" className=" flex flex-col gap-8 md:px-10 sm:px-5 xs:px-10 bg-[#ECF2FF] dark:bg-[#314061] py-3  max-w-[1280px] mx-auto xs:w-full">
        <ul className="h-full grid grid-cols-2 gap-4 mx-auto w-full md:w-full md:grid-cols-4 ">
          <li className="w-full h-full flex flex-col ">
            <h2 className=" text-heading3 font-bold w-full font-figtree">
              22+
            </h2>
            <span>
              <h3 className=" w-full font-inter text-body">
                Amazing Projects
              </h3>
            </span>
          </li>
          <li className="w-full h-full flex flex-col">
            <h2 className=" text-heading3 font-bold w-full font-figtree">
              10+
            </h2>
            <span>
              <h3 className=" w-full font-inter text-body">
                Happy Clients
              </h3>
            </span>
          </li>
          <li className="w-full h-full flex flex-col">
            <h2 className=" text-heading3 font-bold w-full font-figtree">
              10+
            </h2>
            <span>
              <h3 className=" w-full font-inter text-body">
                Awards
              </h3>
            </span>
          </li>
          <li className="w-full h-full flex flex-col">
            <h2 className=" text-heading3 font-bold w-full font-figtree">
              5+
            </h2>
            <span>
              <h3 className=" w-full font-inter text-body">
                Years Experience
              </h3>
            </span>
          </li>

        </ul>


      </section>
  )
}

export default NumberSection