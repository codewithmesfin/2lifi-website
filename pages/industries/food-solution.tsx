/* eslint-disable @next/next/no-img-element */
import GetStartedButton from '@/components/getStartedButton'
import foodFeatures from '@/data/foodFeatures'
import React from 'react'

export default function FoodSolution() {
    return (
        <div>
            <section className='bg-blue-600'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  pt-32 pb-8 md:pb-16'>
                    <div className="md:flex md:items-center md:justify-between md:space-x-10">
                        <div className='w-full md:w-1/2'>

                            <h1 className="my-3 font-extrabold text-gray-200 text-white text-3xl md:text-7xl">
                                Make Your Food Venture a Delicacy with 2lifi Solution!
                            </h1>
                            <div className="md:pt-4">
                                <GetStartedButton />
                            </div>
                        </div>
                        <div className='w-full rounded md:w-1/2 py-10 md:py-1'>
                            <img src="https://nestorbird.com/assets/images/food-swiper1.webp"
                                alt=""
                                className='rounded w-full f-hull object-contain'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="py-10">
                        <h1 className="my-3 font-extrabold text-gray-800 text-center text-3xl md:text-7xl">
                            Empowering Your Business Growth With ERP Solution
                        </h1>

                    </div>
                    <div className="md:flex items-center justify-between md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full rounded md:w-[45%]'>
                            <img src="https://nestorbird.com/assets/images/what-we-offer1.webp" alt=""
                                className='object-contain rounded h-full max-h-[350px] w-full'
                            />
                            <div className="py-4 mt-5">
                                <h1 className='text-2xl text-center md:text-4xl font-normal text-gray-900'>
                                    Web & Mobile Application
                                </h1>
                                <p className='text-[#676c72] text-center pt-4 py-2'>
                                    A customer-facing solution that connects customers digitally to accelerate
                                    growth and maintain quality to increase brand value.
                                </p>
                            </div>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-[45%] py-10 md:py-1'>
                            <img src="https://nestorbird.com/assets/images/what-we-offer2.webp" alt=""
                                className='object-contain rounded h-full max-h-[350px] w-full'
                            />
                            <div className="py-4 mt-5">
                                <h1 className='text-2xl text-center md:text-4xl font-normal text-gray-900'>
                                    ERP/CRM Business Solution
                                </h1>
                                <p className='text-[#676c72] text-center pt-4 py-2'>
                                    Organizations use enterprise resource planning (ERP) software
                                    to manage day-to-day business activities such as procurement,
                                    Product management, Order management and compliance, and supply
                                    chain operations.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className='bg-blue-600'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <h1 className='text-2xl py-5 text-center md:text-6xl font-extrabold text-white'>
                        Features of 2lifi Food Solution
                    </h1>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="500"
                        className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {
                            foodFeatures.map((x: any, i: number) => <div key={i}
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="rounded-full p-1">
                                        <img src={x.img} alt="" className='h-8 w-8' />
                                    </div>
                                    <h1 className='text-gray-200 text-md md:text-xl font-semibold py-2'>{x.title} </h1>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </section>

        </div>
    )
}
