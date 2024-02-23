/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Link from 'next/link'
import pricings from '@/data/pricings'


export default function Pricing() {
    const [openModule, setModuleOpen] = useState({ index: -1, status: false })
    return (
        <div>
            <section className='bg-blue-600 pt-32 pb-8 md:pb-16'>
                <div className='mx-auto w-[95%] md:max-w-[75%] '>
                    <div className="md:flex md:spaxe-x-10 md:justify-between md:items-center">
                        <div className='w-full'>
                            <div className="w-[200px] mx-auto bg-blue-500 rounded-full py-2 px-10">
                                <h1 className='text-lg font-semibold text-white text-center'>
                                    Pricings
                                </h1>
                            </div>
                            <h1 className="text-lg md:text-xl leading-6 mt-4 text-center font-normal text-gray-200 py-3">
                                Did you know that our mission is to offer cost-effective
                                solutions that are user-friendly, elegantly designed, and
                                highly customizable for each of our valued customers?
                                <br />
                                Our pricing is exceptionally reasonable and accessible,
                                ensuring affordability without compromising quality.

                            </h1>

                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-[#e7f0fe] py-6'>
                <div className='mx-auto max-w-[90%]'>
                    <div className='pt-3 pb-10'>
                        <h1 className='text-center'>
                            <span className='font-extrabold'>Note: </span>
                            <span className="text-gray-600">The pricing options below are exlusive of server costs. </span>
                            <br />
                            For Server costs see princing list of afforable providers pricing options on
                            <Link href="https://www.digitalocean.com/pricing"
                                target='_blank'
                                className='px-1 text-blue-600 font-semibold'
                            >
                                Digital Ocean</Link>
                            Or <Link href="https://telecloud.ethiotelecom.et/home"
                                target='_blank'
                                className='px-1 text-green-600 font-semibold'
                            >
                                Ethio Telecom</Link>
                        </h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                        {
                            pricings.map((x: any, i: number) => <div key={i}
                                data-aos="fade-up"
                                data-aos-duration="500" >
                                <div className="p-6 mx-auto max-w-lg text-center text-gray-900 bg-white hover:bg-gray-200 rounded-lg border xl:p-8 ">
                                    <h3 className="mb-4 text-xl font-semibold">{x.title} </h3>
                                    <p className="font-light text-gray-500 text-md">
                                        {x.description}
                                    </p>
                                    <div className="flex justify-center items-baseline my-8">
                                        <span className="text-3xl text-blue-600 font-extrabold">
                                            ETB {x.price}
                                        </span>
                                    </div>
                                    {/* List */}
                                    <ul role="list" className="mb-8 space-y-4 text-left">
                                        <p className='font-semibold'>Services</p>
                                        {
                                            x.options.map((y: any, j: number) => <li key={j} className="flex text-sm items-center space-x-3">
                                                {/* Icon */}
                                                <svg
                                                    className="flex-shrink-0 w-5 h-5 text-green-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span>{y} </span>
                                            </li>)
                                        }
                                    </ul>
                                    <ul role="list" className="mb-8 space-y-4 text-left">
                                        <div
                                            className="w-full flex justify-between items-center space-x-3"
                                            onClick={() => setModuleOpen({ ...openModule, status: !openModule.status, index: i })}
                                        >
                                            <p className='font-semibold'>Modules</p>
                                            <div
                                                className='text-blue-600'
                                            >
                                                {openModule.status ?
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
                                                        className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                                    </svg>
                                                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
                                                        className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                }

                                            </div>
                                        </div>
                                        {
                                            openModule.status && openModule.index == i &&
                                            x.modules && x.modules.map((y: any, j: number) => <li key={j} className="flex text-sm items-center space-x-3">
                                                {/* Icon */}
                                                <svg
                                                    className="flex-shrink-0 w-5 h-5 text-green-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span>{y} </span>
                                            </li>)
                                        }
                                    </ul>
                                    <div className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    >
                                        <Link
                                            href="/option" className='w-full'
                                        >
                                            Get started
                                        </Link>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
