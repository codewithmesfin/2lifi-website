/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

import Link from 'next/link'
import industries from '@/data/industries'
import GetStartedButton from '@/components/getStartedButton'

export default function Industries() {
    return (
        <div>
            <section className='bg-blue-600 pt-32 pb-8 md:pb-16'>
                <div className='mx-auto w-[95%] md:max-w-[70%] '>
                    <div className="md:flex md:spaxe-x-10 md:justify-between md:items-center">
                        <div className='w-full'>
                            <div className="w-[200px] mx-auto bg-blue-500 rounded-full py-2 px-10">
                                <h1 className='text-lg font-semibold text-white text-center'>Industries</h1>
                            </div>
                            <h1 className="text-xl md:text-3xl leading-10 mt-4 text-center font-normal text-gray-200 py-3">
                                Escalate your business with our Enterprise Software for industries
                                like <span className="text-white font-semibold">Healthcare,
                                    Manufacturing, Retail, IT, Automation, Education, and Brewery
                                </span>, and drive sustained growth today.
                            </h1>
                            <div className="text-center">
                                <GetStartedButton />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-[#e7f0fe] py-6'>
                <div className='mx-auto max-w-[90%]'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {
                            industries.map((x: any, i: number) => <div key={i}
                                data-aos="fade-up"
                                data-aos-duration="500"
                            >
                                <div className={`border bg-white hover:bg-gray-200 rounded h-full`}>
                                    <div className="flex">
                                       <div className="w-full md:w-2/5">
                                       <img src={x.img} alt="images"
                                            className='rounded-tl rounded-bl h-full w-full bg-white object-cover'
                                        />
                                       </div>
                                       <div className="w-full md:w-3/5 p-5">
                                            <h1 className='text-lg font-semibold'>{x.title} </h1>
                                            <p><span className='line-clamp-3 text-sm text-gray-600'> {x.description} </span>
                                                <Link href={`/industries/${x.route}`}
                                                    className='text-sm text-blue-600'
                                                >Read more</Link>
                                            </p>
                                        </div>
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
