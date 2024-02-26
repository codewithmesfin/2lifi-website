/* eslint-disable @next/next/no-img-element */
import GetStartedButton from '@/components/getStartedButton'
import React from 'react'

export default function RESTApi() {
    return (
        <div>
            <section className='bg-blue-600'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  pt-32 pb-8 md:pb-16'>
                    <div className="md:flex md:items-center md:justify-between md:space-x-10">
                        <div className='w-full md:w-1/2'>

                            <h1 className="my-3 font-extrabold text-gray-200 text-white text-3xl md:text-7xl">
                                Empowering Seamless 2lifi Integration
                            </h1>

                            <div className="md:pt-4">
                                <GetStartedButton />
                            </div>
                        </div>
                        <div className='w-full rounded md:w-1/2 py-10 md:py-1'>
                            <img src="https://img.freepik.com/free-vector/gradient-api-illustration_23-2149370938.jpg?w=1800"
                                alt=""
                                className='rounded w-full f-hull'
                            />
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
                            <img src="https://img.freepik.com/free-vector/api-concept-illustration_114360-9822.jpg?t=st=1708951381~exp=1708954981~hmac=eb23a1679ba789817da087fae6f0a492f9a40b2f0124fcac12f77680804faa10&w=1380" alt=""
                                className='object-contain rounded h-full max-h-[350px] w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Introduction to {"2lifi's"} REST API
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Welcome to 2lifi, where we introduce a robust REST API, streamlining
                                your interactions with the ERPNext application. This API provides
                                a seamless connection between your systems and Frappe, offering an efficient
                                means to integrate, automate, and extend the functionalities of your Enterprise
                                Software solutions. With {"2lifi's"} REST API, experience a new level of
                                flexibility and scalability in managing your business processes.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>

            <section className='bg-gray-100'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Key Features of 2lifi REST API:
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Discover the power of {"2lifi's"} REST API with a host of key features
                                designed to enhance your 2lifi experience. From easy data retrieval
                                and modification to seamless integration with third-party applications,
                                {"2lifi's"} API supports a wide range of operations. Enjoy real-time
                                access to crucial business data, automate repetitive tasks, and ensure
                                smooth communication between your 2lifi instance and external systems.
                            </p>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full  rounded md:w-3/5 '>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Integration Capabilities
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                {"2lifi's"} REST API opens up endless possibilities for integration.
                                Seamlessly connect 2lifi with your preferred tools, applications,
                                and platforms, ensuring a cohesive and interconnected business ecosystem.
                                Whether {"you're"} looking to sync data with CRM systems, automate order
                                processing, or integrate with analytics tools, {"2lifi's"} API provides the
                                flexibility to adapt to your unique business requirements.
                            </p>

                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-white'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                API Documentation and Resources
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Accessing and utilizing {"2lifi's"} REST API is made easy with comprehensive
                                documentation and resources. Our user-friendly documentation offers detailed
                                insights into API endpoints, authentication methods, request and response
                                formats, and example use cases. Explore code snippets, sample requests, and
                                interactive guides to accelerate your integration process and make the most
                                out of {"2lifi's"} API.
                            </p>

                            <GetStartedButton />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full  rounded md:w-3/5 '>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Security and Reliability
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                At 2lifi, we prioritize the security and reliability of your data.
                                Our REST API is built with robust security measures, ensuring encrypted
                                communication and secure authentication processes. Rest easy knowing
                                that your sensitive business information is handled with the utmost care.
                                Experience a reliable and stable connection between your systems and 2lifi,
                                backed by {"2lifi's"} commitment to delivering a secure and seamless
                                integration experience.
                            </p>

                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}
