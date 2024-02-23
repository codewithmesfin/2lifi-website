/* eslint-disable @next/next/no-img-element */
import GetStartedButton from '@/components/getStartedButton'
import featuresOfMarketplace from '@/data/featuresOfMarketplace'
import marketplaceSteps from '@/data/marketplaceSteps'
import Link from 'next/link'
import React from 'react'

export default function Marketplace() {
    return (
        <div>
            <section className='bg-blue-600'>
                <div className='mx-auto w-[97%] md:max-w-[90%]  pt-32 pb-8 md:pb-16'>
                    <div className="md:flex md:items-center md:justify-between md:space-x-10">
                        <div className='w-full md:w-1/2'>
                            <h1 className="text-gray-200 text-white text-3xl md:text-5xl">
                                Build your own
                            </h1>
                            <h1 className="my-3 font-extrabold text-gray-200 text-white text-3xl md:text-7xl">
                                Marketplace
                            </h1>
                            <h1 className="text-gray-200 text-white text-3xl md:text-5xl">
                                app with 2lifi!
                            </h1>
                            <div className="pt-4">
                                <GetStartedButton />
                            </div>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <img
                                src="https://img.freepik.com/free-vector/fashion-shopping-app-pack_23-2148654434.jpg?size=626&ext=jpg&uid=R19609540&ga=GA1.1.617832925.1708503188&semt=ais"
                                className='rounded-xl'
                                alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-gray-100'>
                <div className='mx-auto w-[97%] md:max-w-[90%] pt-16'>
                    <div className='py-10'>
                        <h1 className='text-3xl md:text-6xl text-center font-extrabold'>How to Build a 2lifi Marketplace?</h1>
                    </div>
                    <div className='py-10'>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            {
                                marketplaceSteps.map((x: any, i: number) => <div key={i} className="shadow-md hover:shadow-xl rounded">
                                    <div 
                                      data-aos="fade-up"
                                      data-aos-duration="500" 
                                    className='h-[300px] w-full rounded-t bg-gray-700'>
                                        <img src={x.img} alt=""
                                            className='h-full rounded-t w-full object-cover'
                                        />
                                    </div>
                                    <div className="px-5 pt-5 md:px-10">
                                        <h1 className='text-2xl md:text-3xl font-semibold'>{x.title} </h1>
                                        <p className='py-2 text-gray-600'>{x.subtitle} </p>

                                        <ul role="list" className="mb-8 space-y-2 mt-3 text-left">

                                            {
                                                x.options.map((y: any, j: number) => <li key={j} className="flex text-sm items-center space-x-3">
                                                    {/* Icon */}
                                                    <div className="text-green-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                            strokeWidth={2.5}
                                                            stroke="currentColor" className="w-4 h-4">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                        </svg>
                                                    </div>

                                                    <span className='text-gray-500'>{y} </span>
                                                </li>)
                                            }
                                        </ul>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-10 text-center bg-blue-100'>
                <div>
                    <h1 className='text-lg pb-3'>Start building your marketplace. Transforming Ideas into Realities today!</h1>
                    <Link href={"/start"}
                        className='text-blue-600 font-normal'
                    >Get started now</Link>
                </div>
            </section>

            <section >
                <div className="md:max-w-[90%] justify-center w-[100%] px-4 mx-auto ">
                    <div className="pt-12 mx-auto">
                        <div className="md:flex justify-between items-center md:space-x-10">
                            <div    data-aos="fade-up"
                            data-aos-duration="500"  className="md:w-1/2">
                                <div className="mx-auto py-12 px-4">
                                    <h2 className="text-3xl pb-5 font-extrabold sm:text-5xl">
                                       Features of 2lifi Marketplace Solution
                                    </h2>
                                    <div className='pt-5'>
                                        {
                                            featuresOfMarketplace.map((x: any, i: number) => <div key={i}>
                                                <div className="flex space-x-2">
                                                    <img src={x.img} alt=""
                                                        className='rounded-full h-10 w-10 object-cover'
                                                    />
                                                    <div className='pb-4'>
                                                        <h1 className='pb-1 text-gray-900 text-lg md:text-xl font-semibold'>{x.title} </h1>
                                                        <p className='text-gray-500 text-sm'>{x.subtite} </p>
                                                    </div>
                                                </div>
                                            </div>)
                                        }
                                    </div>

                                </div>
                            </div>
                            <div   data-aos="fade-up"
                            data-aos-duration="600"  className="w-full md:w-1/2 flex justify-end md:py-3">
                                <img
                                    className="w-full h-full rounded-xl object-contain max-h-[400px]"
                                    src="https://www.bizenforce.com/_nuxt/tech2.342b109c.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
