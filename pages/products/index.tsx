/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import products from '@/data/products'
import Link from 'next/link'
import GetStartedButton from '@/components/getStartedButton'

export default function Products() {

    return (
        <div>
            <section className='bg-blue-600 pt-32 pb-8 md:pb-16'>
                <div className='mx-auto max-w-[90%] '>
                    <div className="">
                        <div className='w-full'>
                            <div className="w-[200px] mx-auto bg-blue-500 rounded-full py-2 px-10">
                                <h1 className='text-lg font-semibold text-white text-center'>Our Products</h1>
                            </div>
                            <h1 className="text-3xl mt-4 text-center font-extrabold text-white md:text-6xl py-3">
                                We have technologies to help the world connect to opportunity and positively impact business.
                            </h1>
                           <div className="text-center">
                           <GetStartedButton/>
                           </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className='bg-[#e7f0fe] py-6'>
                <div className='mx-auto max-w-[90%]'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {
                            products.map((x: any, i: number) => <div key={i}
                            data-aos="fade-up"
                            data-aos-duration="500" 
                            >
                                <div className={`border bg-white hover:bg-gray-200 rounded p-5`}>
                                    <div className="flex items-center space-x-3 mb-2">
                                        <div >
                                            <img src={x.img} alt="images"
                                                className='h-10 w-10 bg-white rounded-full'
                                            />
                                        </div>
                                        <h1 className='text-lg font-semibold'>{x.title} </h1>
                                    </div>
                                    <p><span className='line-clamp-3 text-sm text-gray-600'> {x.description} </span>
                                        <Link href={`/products${x.route}`}
                                            className='text-sm text-blue-600'
                                        >Read more</Link>
                                    </p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
