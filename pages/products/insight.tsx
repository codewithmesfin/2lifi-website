/* eslint-disable @next/next/no-img-element */
import GetStartedButton from '@/components/getStartedButton'
import Link from 'next/link'
import React from 'react'

export default function Quality() {
    return (
        <div>
            <section className='bg-blue-600'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  pt-32 pb-8 md:pb-16'>
                    <div className="md:flex md:items-center md:justify-between md:space-x-10">
                        <div className='w-full md:w-1/2'>

                            <h1 className="my-3 font-extrabold text-gray-200 text-white text-3xl md:text-7xl">
                                Bring your data alive with 2lifi insights
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
                                poster="https://frappe.io/files/insights-video-thumbnail13a684.png"
                                preload="auto"
                                width="100%"
                                className='rounded'
                            >
                                <source src="/files/insights-hero-video.webm" type="video/webm" />
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
                            <img src="https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1434.jpg?t=st=1708942884~exp=1708946484~hmac=dda420f966619b718fe765bdfd80bbbbe7404b162c8d857366e5f86a8218e059&w=1380" alt=""
                                className='object-contain rounded h-full max-h-[350px] w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                2lifi Insights
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Insights is a 100% open source business intelligence tool to help
                                businesses make the best use of their data. Nowadays, businesses
                                are generating more data than ever before. Most businesses have a website,
                                a CRM, a customer portal, a project management tool, and many more systems.
                                These systems are mostly disconnected and their data is scattered.
                                Businesses need to make use of these data to make faster and better
                                decisions. Insights is meant to help businesses to do just that.
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
                                Connect to multiple sources
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Centralize your data by connecting to your databases, importing CSVs,
                                fetching from APIs and more. Model your data into a clean data
                                repository that is more understandable and ready for analysis.
                            </p>
                            <GetStartedButton />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full  rounded md:w-3/5 '>
                            <img src="https://frappe.io/files/connect-data-sources.png" alt=""
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
                            <img src="https://frappe.io/files/queries707a13.png" alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Build complex queries with ease
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Discover our best-in-class query builder to perform complex
                                analysis by knowing just a few core concepts. Build re-usable,
                                dynamic, multi-level and performant queries without writing any SQL.
                                Combine data across sources to get a complete picture of your business.
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
                                Every charting option you need
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Make your analysis more engaging by transforming
                                it into charts, graphs and interactive tables. Let Insights
                                choose the best chart for your data or choose one from a
                                dozen of charts and customize them to your liking.
                            </p>
                            <GetStartedButton />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full  rounded md:w-3/5 '>
                            <img src="https://frappe.io/files/charts.png" alt=""
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
                            className='w-full rounded md:w-3/5'>
                            <img src="https://frappe.io/files/dashboardd23316.png" alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Powerful, composable dashboards
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Organize your visualizations into dashboards and keep
                                track of your important metrics. Add filters to your
                                dashboards to make them more interactive. Share it with
                                your team, customers with a link or embed them to your website.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}
