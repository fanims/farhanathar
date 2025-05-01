import React from 'react'

function Banner() {
  return (
    <a href="#0" className="banner block no-underline text-inherit overflow-hidden bg-white rounded-md transition-all duration-300 shadow-sm hover:shadow group" aria-label="Shop now">
        <div className="flex flex-col lg:flex-row-reverse">
            <div className="min-w-0 lg:w-1/2" aria-hidden="true">
            <figure className="banner__figure h-0 w-full pb-[50%] transition-all duration-300 ease-out bg-center bg-no-repeat bg-cover group-hover:scale-105 lg:h-full lg:pb-0">
                <img src="../../assets/banner-img.jpg" alt="banner image" />
            </figure>
            </div>

            <div className="min-w-0 lg:w-1/2 p-6 lg:p-12">
            <h2 className="text-3xl">Kitchen</h2>
            
            <p className="mt-4 lg:mt-8">
                <span className="banner__link relative no-underline text-indigo-700 inline-block transition-all duration-300 ease-out origin-bottom-left group-hover:scale-[1.3] after:content-[''] after:bg-current after:h-[2px] after:w-full after:absolute after:z-[1] after:bottom-0 after:left-0 after:opacity-[0.15] after:transition-all after:duration-300 after:ease-out group-hover:after:h-full"><i className="relative z-[2] inline-block transition-all duration-300 ease-out not-italic group-hover:scale-[0.7]">Shop Now</i></span>
            </p>
            </div>
        </div>
    </a>
  )
}

export default Banner