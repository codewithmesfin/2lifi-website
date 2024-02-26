/* eslint-disable @next/next/no-img-element */
import GetStartedButton from '@/components/getStartedButton'
import React from 'react'

export default function Builder() {
    return (
        <div>
            <section className='bg-blue-600'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  pt-32 pb-8 md:pb-16'>
                    <div className="md:flex md:items-center md:justify-between md:space-x-10">
                        <div className='w-full md:w-1/2'>

                            <h1 className="my-3 font-extrabold text-gray-200 text-white text-3xl md:text-7xl">
                                Web Publishing. Redefined.
                            </h1>
                            <h1 className="text-gray-200 text-white text-xl md:text-3xl">
                                Builder lets you visually build production-ready
                                web pages in minutes!
                            </h1>
                            <div className="md:pt-4">
                                <GetStartedButton />
                            </div>
                        </div>
                        <div className='w-full rounded md:w-1/2 py-10 md:py-1'>
                            <video
                                controls
                                data-setup="{}"
                                height="auto"
                                poster="https://frappe.io/files/builder-thumbnail73b214.png"
                                preload="auto"
                                width="100%"
                                className='rounded'
                            >

                            </video>

                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full rounded md:w-1/2'>
                            <img src="https://img.freepik.com/free-vector/website-designer-concept-illustration_114360-4449.jpg?t=st=1708948422~exp=1708952022~hmac=af03b4ccdae5d35600d16aae6e5deea0a2ce28be47865ee00b0d07308efc8603&w=1380" alt=""
                                className='object-contain rounded h-full max-h-[350px] w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                {"2lifi's"} Frappe Builder
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                2lifi Frappee Builder is a low-code website builder designed for simplicity,
                                speed, and flexibility. Craft beautiful websites effortlessly with
                                intuitive visual builder and modern design principles.
                                Whether {"you're"} a designer looking for ease or a developer
                                seeking customization, Frappe Builder empowers you.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>

            <section className='bg-gray-100'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                             <span className="font-bold">Query Builder: </span> Intuitive Visual Builder
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Design your dream website effortlessly with no-code visual builder.
                            </p>
                            <GetStartedButton />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full  rounded md:w-3/5 '>
                            <img src="https://frappe.io/files/image7446ed.png" alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='mx-auto w-[90%] md:max-w-[90%] py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full rounded md:w-1/2'>
                            <video autoPlay loop width="100%">
                                <source
                                    src="https://github.com/frappe/builder/assets/13928957/7e72efc7-2bdc-448e-8b87-b1848775393a"
                                    type="video/webm"
                                />
                            </video>

                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                             <span className="font-bold">User Experience: </span> Modern Free Flowing Canvas
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Embrace the freedom of the modern canvas, allowing your creativity
                                to flow without limitations.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>

            <section className='bg-gray-100'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                           <span className="font-bold">Responsiveness: </span> Beautiful on every device
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                            Ensure your website looks stunning on any device. 
                            Frappe Builder supports responsive views, so your design 
                            adapts to different screen sizes.
                            </p>
                            <GetStartedButton />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full  rounded md:w-3/5 '>
                            <img src="https://frappe.io/files/image695784.png" alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                    </div>
                </div>
            </section>

         

        </div>
    )
}
