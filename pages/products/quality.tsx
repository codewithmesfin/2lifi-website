/* eslint-disable @next/next/no-img-element */
import GetStartedButton from '@/components/getStartedButton'
import React from 'react'

export default function Quality() {
    return (
        <div>
            <section className='bg-blue-600'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  pt-32 pb-8 md:pb-16'>
                    <div className="md:flex md:items-center md:justify-between md:space-x-10">
                        <div className='w-full md:w-1/2'>

                            <h1 className="my-3 font-extrabold text-gray-200 text-white text-3xl md:text-7xl">
                                Elevating Quality, Empowering Excellence.
                            </h1>

                            <div className="md:pt-4">
                                <GetStartedButton />
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 py-10 md:py-1'>
                            <img
                                src="https://docs.erpnext.com/files/quality-inspection-summary.png"
                                className='rounded-xl'
                                alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex  justify-center md:space-x-10">
                        <div

                            className='w-full rounded md:w-1/2'>
                            <img src="https://img.freepik.com/premium-photo/vlogger-woman-influencer_908344-4572.jpg?size=626&ext=jpg&uid=R19609540&ga=GA1.1.617832925.1708503188&semt=sph" alt=""
                                className='object-cover rounded h-full max-h-[350px] w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Introduction to 2lifi Quality Management System
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Quality management is the act of overseeing all activities and tasks needed
                                to maintain a desired level of excellence in tasks. 2lifi Quality module helps
                                you manage your quality goals, process, reviews, non conformances, actions
                                and meetings. It is designed to help you manage a full blown {"Quality Management System"}.  <br />
                                2lifi Quality Management System (QMS) is a comprehensive solution designed
                                to elevate your {"organization's"} commitment to quality and excellence.
                                With a user-friendly interface and robust features, 2lifi Quality Management
                                System empowers businesses to streamline their quality processes,
                                ensuring compliance with industry standards and regulations.
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
                            className='w-full md:w-3/5 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Key Features of 2lifi Quality Management System
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                2lifi Quality Management System comes equipped with a range of
                                powerful features to enhance your quality control initiatives.
                                Easily create and manage quality plans, conduct inspections
                                with customizable checklists, and maintain thorough documentation
                                of quality-related processes. The system facilitates real-time
                                collaboration, enabling teams to address quality issues promptly.
                                With integrated corrective and preventive action (CAPA) workflows,
                                Quality Management System ensures a proactive approach to
                                quality improvement, contributing to overall organizational excellence.
                            </p>
                            <GetStartedButton />
                        </div>
                        <div

                            className='w-full shadow rounded md:w-2/5 '>
                            <img src="https://docs.erpnext.com/files/quality-inspection-template.png" alt=""
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

                            className='w-full shadow rounded md:w-1/2'>
                            <img src="https://manualpt.angolaerp.co.ao/docs/assets/img/stock/quality-inspection.png" alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                User-Friendly and Scalable Solution
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                2lifi Quality Management System stands out as a user-friendly and
                                scalable solution suitable for businesses of all sizes. Its intuitive
                                interface makes it easy for users at all levels to navigate and leverage
                                the {"system's"} capabilities effectively. Whether you are a small enterprise
                                or a large corporation, 2lifi adapts to your needs, providing flexibility
                                and scalability as your organization grows. Experience a seamless transition
                                to a more efficient and effective quality management system with 2lifi
                                Quality Management System
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>


        </div>
    )
}
