/* eslint-disable @next/next/no-img-element */
import GetStartedButton from '@/components/getStartedButton'
import Link from 'next/link'

import React from 'react'

export default function Buying() {
    return (
        <div>
            <section className='bg-blue-600'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  pt-32 pb-8 md:pb-16'>
                    <div className="md:flex md:items-center md:justify-between md:space-x-10">
                        <div className='w-full md:w-1/2'>
                            <h1 className="text-gray-200 text-white text-3xl md:text-5xl pt-2">
                                Streamlining Your
                            </h1>
                            <h1 className="my-3 font-extrabold text-gray-200 text-white text-3xl md:text-7xl">
                                Purchase Management
                            </h1>
                            <h1 className="text-gray-200 text-white text-3xl md:text-5xl pt-2">
                                Take control of your procurement, buy intelligently, and stock your
                                stores exactly as you need with 2lifi.
                            </h1>
                            <div className="md:pt-4">
                                <GetStartedButton />
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 py-10 md:py-1'>
                            <img
                                src="https://img.freepik.com/free-vector/infographic-user-panel-dashboard_52683-30025.jpg?t=st=1708681646~exp=1708685246~hmac=3ae54c4e8ea7538088f71f223b39cced5e7cd2b9af288f71da6753108a55c39b&w=1800"
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

                            className='w-full shadow rounded md:w-1/2  md:max-w-[400px]'>
                            <img src="https://img.freepik.com/premium-photo/vlogger-woman-influencer_908344-4572.jpg?size=626&ext=jpg&uid=R19609540&ga=GA1.1.617832925.1708503188&semt=sph" alt=""
                                className='object-cover rounded h-full max-h-[300px] w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                2lifi Order
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                In the realm of business operations, orders serve as the cornerstone
                                of transactions, representing the exchange of goods and services between
                                businesses and their customers or suppliers. At 2lifi, we recognize the
                                pivotal role that orders play in driving the seamless flow of commerce,
                                which is why we offer robust solutions designed to streamline order
                                management processes, enhance accuracy, and improve overall efficiency.
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
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Sales Order
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                A Sales Order is a confirmation of an order from your customer.
                                With {"2lifi's"} Sales Orders module, businesses gain access to a
                                powerful platform that facilitates the entire sales order
                                lifecycle—from creation and modification to fulfillment and invoicing.
                                <Link href="/products/selling" className='text-blue-600 px-1'>Learn more</Link>
                            </p>
                            <GetStartedButton />
                        </div>
                        <div

                            className='w-full shadow rounded md:w-1/2 '>
                            <img src="https://docs.erpnext.com/files/so-packing-list.png" alt=""
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
                            <img src="https://docs.erpnext.com/files/purchase-order.png" alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Purchase Order
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                A Purchase Order is a binding contract with your Supplier that you
                                promise to buy a set of items under given conditions.
                                At 2lifi, we understand the critical role that purchase orders play
                                in effective supply chain management, which is why we offer comprehensive
                                solutions designed to streamline the procurement process and
                                enhance visibility across the entire supply chain.
                                With {"2lifi's"} Purchase Orders module, businesses can easily create,
                                track, and manage purchase orders, automate approval workflows, and collaborate
                                seamlessly with suppliers, thereby improving procurement efficiency,
                                reducing lead times, and driving bottom-line results.
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
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Effortless Order Management
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                The Order module in 2lifi offers unparalleled simplicity.
                                With its intuitive interface, users can easily create, track,
                                and manage orders in real-time. Customizable workflows and
                                automatic notifications streamline processes, empowering
                                businesses to optimize operations and enhance customer satisfaction
                                effortlessly.
                            </p>
                            <GetStartedButton />
                        </div>
                        <div

                            className='w-full rounded md:w-1/2 py-10 md:py-1 '>
                            <img
                                src="https://img.freepik.com/free-psd/flat-design-transport-delivery-template_23-2149558451.jpg?t=st=1708681028~exp=1708684628~hmac=f544f56ea6afc04ceb8c3f3d559d7960d9b0662a8908776510734004966f92e4&w=1800"
                                alt=""
                                className='object-cover rounded h-full w-full max-h-[300px]'
                            />
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}
