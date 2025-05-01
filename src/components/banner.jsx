import React from 'react'

function banner() {
  return (
    <header className="ezy__header8 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-[#373572] dark:text-white">
        <div className="container px-4 relative">
            <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-5 xl:col-span-4 lg:order-2 mb-6 lg:mb-0 text-center lg:text-start">
                <img
                src="https://cdn.easyfrontend.com/pictures/team/team_13_3.jpg"
                alt=""
                className="max-w-full h-auto border-[20px] border-white shadow-xl dark:border-gray-700 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[30%] rounded-bl-[30%] mx-auto"
                />
            </div>
            <div className="col-span-12 lg:col-span-7 lg:pl-6 xl:pl-12">
                <p className="text-xl leading-normal mb-2 opacity-50">UI UX Designer</p>
                <h2 className="text-3xl leading-none md:text-7xl font-bold mb-6">Sara Taylor</h2>
                <p className="text-xl leading-normal opacity-75 mb-2">
                I'm a UI/UX Designer based in Bangladesh and enjoy playing with colors. I love travelling, photography &
                music.
                </p>

                <div className="mt-12 lg:ml-12 p-4 md:px-12 lg:py-6 border-l">
                <p className="text-2xl mb-1">
                    <span className="opacity-50 mr-2 font-light">Born in</span><strong>Bangladesh</strong>
                </p>
                <p className="text-2xl mb-1">
                    <span className="opacity-50 mr-2 font-light">Experience</span><strong>7+ Years</strong>
                </p>
                <p className="text-2xl mb-0">
                    <span className="opacity-50 mr-2 font-light">Date of Birth</span><strong>21 June 1994</strong>
                </p>

                <ul className="inline-flex mt-6">
                    <li className="mr-5">
                    <a href="#" className="text-2xl opacity-70 hover:opacity-100 transition duration-300"
                        ><i className="fab fa-twitter"></i
                    ></a>
                    </li>
                    <li className="mr-5">
                    <a href="#" className="text-2xl opacity-70 hover:opacity-100 transition duration-300"
                        ><i className="fab fa-dribbble"></i
                    ></a>
                    </li>
                    <li className="">
                    <a href="#" className="text-2xl opacity-70 hover:opacity-100 transition duration-300"
                        ><i className="fab fa-behance"></i
                    ></a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    </header>
  )
}

export default banner