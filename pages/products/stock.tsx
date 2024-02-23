/* eslint-disable @next/next/no-img-element */
import GetStartedButton from '@/components/getStartedButton'

import React from 'react'

export default function Manufacturing() {
    return (
        <div>
            <section className='bg-blue-600'>
                <div className='mx-auto w-[97%] md:max-w-[90%]  pt-32 pb-8 md:pb-16'>
                    <div className="md:flex md:items-center md:justify-between md:space-x-10">
                        <div className='w-full md:w-1/2'>

                            <h1 className="my-3 font-extrabold text-gray-200 text-white text-3xl md:text-7xl">
                                Stock Management system
                            </h1>
                            <h1 className="text-gray-200 text-white text-3xl font-semibold md:text-5xl">
                                to take total control over your inventory
                            </h1>
                            <p className="text-white md:text-xl pt-6">
                                Keep track of your inventory with ease and fulfill orders on time without worrying about replenishment.
                            </p>
                            <div className="pt-4">
                                <GetStartedButton />
                            </div>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <img
                                src="https://img.freepik.com/free-vector/infographic-user-panel-dashboard_52683-30025.jpg?size=626&ext=jpg&uid=R19609540&ga=GA1.2.617832925.1708503188&semt=ais"
                                className='rounded-xl'
                                alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section >
                <div className='mx-auto w-[97%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div

                            className='w-full shadow md:w-3/5'>
                            <img src="https://erpnext.com/files/item-reorder.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Avoid inventory shortage
                            </h1>
                            <p className='text-gray-600 pt-4 py-2'>
                                Never worry about stock dipping below a certain level.
                                Set a threshold and automatically generate material requests
                                to replenish stock.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>

            <section className='bg-gray-100'>
                <div className='mx-auto w-[97%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Quality inspection
                            </h1>
                            <p className='text-gray-600 pt-4 py-2'>
                                Implement quality inspections to ensure the
                                correct stock leaves or enters your warehouse
                                across orders.
                            </p>
                            <GetStartedButton />
                        </div>
                        <div

                            className='w-full shadow md:w-3/5'>
                            <img src="https://erpnext.com/files/quality-inspection.png"
                                alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section >
                <div className='mx-auto w-[97%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div

                            className='w-full md:w-3/5 shadow'>
                            <img src="https://erpnext.com/files/bottle-variants.png"
                                alt=""
                                className='object-contain rounded-xl h-full w-full'
                            />
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Item variants
                            </h1>
                            <p className='text-gray-600 pt-4 py-2'>
                                Create one master template and generate multiple
                                variants based on different sizes, colors, or
                                any other variants of your choice.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>

            <section className='bg-gray-100'>
                <div className='mx-auto w-[97%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Multiple units of measure
                            </h1>
                            <p className='text-gray-600 pt-4 py-2'>
                                Whether you sell in kilograms or kilocoulomb,
                                cups or carats, we got you covered. {"What’s"} more,
                                you can create your own measurements and set up
                                conversions for them.
                            </p>
                            <GetStartedButton />
                        </div>
                        <div

                            className='w-full shadow md:w-3/5'>
                            <img src="https://erpnext.com/files/uom.png"
                                alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='mx-auto w-[97%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div

                            className='w-full rounded shadow md:w-1/2'>
                            <img src="https://erpnext.com/files/item-defaults.png"
                                alt=""
                                className='object-contain rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Save your time by setting defaults
                            </h1>
                            <p className='text-gray-600 pt-4 py-2'>
                                Set default source and target warehouses,
                                pricing methods, and accounts so that you
                                {"don’t"} have to worry about them when fulfilling
                                orders.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>

            <section className='bg-gray-100'>
                <div className='mx-auto w-[97%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Unlimited warehouses
                            </h1>
                            <p className='text-gray-600 pt-4 py-2'>
                                Create unlimited warehouses to keep track of not
                                just actual warehouses but also rooms, rows,
                                shelves, and bins.
                            </p>
                            <GetStartedButton />
                        </div>
                        <div

                            className='w-full rounded shadow md:w-3/5'>
                            <img src="https://erpnext.com/files/warehouses.png"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='mx-auto w-[97%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div

                            className='w-full rounded shadow md:w-3/5'>
                            <img src="https://erpnext.com/files/landed-cost-voucher.png"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Landed cost voucher
                            </h1>
                            <p className='text-gray-600 pt-4 py-2'>
                                Sent the invoice, but want to add shipping charges
                                or customs duties? Update landed costs to include
                                shipping charges or customs duties and keep track
                                of the whole transaction.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>

            <section className='bg-gray-100'>
                <div className='mx-auto w-[97%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                            Manage returns easily
                            </h1>
                            <p className='text-gray-600 pt-4 py-2'>
                            Be it for sales or purchase, returns {"aren't"} 
                            pleasant. In 2lifi, you can record them with just 
                            two clicks. The stocks will be updated automatically.
                            </p>
                            <GetStartedButton />
                        </div>
                        <div

                            className='w-full rounded shadow md:w-3/5'>
                            <img src="https://erpnext.com/files/return.png"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}
