/* eslint-disable @next/next/no-img-element */
import GetStartedButton from '@/components/getStartedButton'
import Link from 'next/link'
import React from 'react'

export default function Asset() {
    return (
        <div>
            <section className='bg-blue-600'>
                <div className='mx-auto w-[97%] md:max-w-[90%]  pt-32 pb-8 md:pb-16'>
                    <div className="md:flex md:items-center md:justify-between md:space-x-10">
                        <div className='w-full md:w-1/2'>

                            <h1 className="my-3 font-extrabold text-gray-200 text-white text-3xl md:text-7xl">
                                Effortless asset maintenance with #1 Asset Management Software
                            </h1>

                            <div className="pt-4">
                                <GetStartedButton />
                            </div>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <img
                                src="https://img.freepik.com/free-vector/dashboard-gradient-user-panel-template_23-2148362696.jpg?t=st=1708939776~exp=1708943376~hmac=07a328c9e5f71477f05a32b5a77aed594089ab8bb56c765d389c19179d1bf99c&w=1800"
                                className='rounded-xl'
                                alt="" />
                        </div>
                    </div>
                </div>
            </section>


            <section className='py-10 text-center bg-blue-100'>
                <div className='w-[90%] md:max-w-4xl mx-auto'>
                    <p className='text-gray-500 py-2'>
                        2lifi makes asset management painless — from purchase to perishment,
                        IT infrastructure to equipment. Cover every branch of your organization,
                        all in one centralized system. Use ample features jam-packed in a single
                        tool to manage assets better.
                    </p>
                    <Link href={"/asset"}
                        className='text-blue-600 font-normal'
                    >Get started now</Link>
                </div>
            </section>


            <section className='bg-gray-100'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 shadow rounded py-10 md:py-1'>
                            <img src="https://erpnext.com/files/assets-list-view.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-3/5 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Asset Lifecycle
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                Look here for all information about assets in one place.
                                Created after purchasing or receiving an asset, the asset
                                lifecycle includes every answer you might need — status of an asset,
                                custodian, location, warranty and insurance, depreciation and
                                depreciation schedule, asset transfer, scraping, selling
                                and movements, and more. {"It's"} transparent and crystal clear — like
                                all things should be.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>


            <section>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-3/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Asset Inventory
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                2lifi features integrated inventory so you can easily manage all
                                information about an asset. Batched or serialized items?
                                Take your pick. Scan barcodes with your device camera for blazing
                                fast search, faster outputs, and data-driven decisions based on
                                {"assets'"} availability, locations, and more. When an asset is purchased,
                                the system auto-creates the asset record based on the information
                                stored in the item master.
                            </p>
                            <GetStartedButton />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5  py-10 md:py-1'>
                            <img src="https://erpnext.com/files/asset-item-master.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section className='bg-gray-100'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 shadow rounded py-10 md:py-1'>
                            <img src="https://erpnext.com/files/purchasing-assets.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-3/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Purchasing Assets
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                Procuring assets is done via purchase receipts (goods received notes)
                                or purchase invoices. The system directly creates a record for
                                the asset, based on the information stored in the item master.
                                Depreciation methods, schedule, insurance details and more can be
                                updated with a few clicks. {"It's"} asset procurement simplified with
                                one-time configuration.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>

            <section className='bg-white'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">

                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Selling Assets
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                With a few clicks, you can sell assets that you no longer need.
                                There is no overhead of maintaining accounting books, since the
                                system will auto-create those journal entries, keeping the process
                                quick and seamless.
                            </p>
                            <GetStartedButton />
                        </div>

                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 rounded shadow py-10 md:py-1'>
                            <img src="https://erpnext.com/files/selling-assets.png" alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>

                    </div>
                </div>
            </section>

            <section className='bg-gray-100'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-3/5 shadow rounded py-10 md:py-1'>
                            <img src="https://erpnext.com/files/asset-depreciationeaf949.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Automating Asset Depreciation
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                Automated asset accounting removes the hassle of manual depreciation
                                entries. Configure depreciation schedules for various categories
                                of assets, and watch the software auto-calculate the depreciation
                                amount or dates and create accounting entries.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>


            <section className='bg-white'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">

                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Scrapping Assets
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                When you no longer need an asset, you can scrap it with just one click.
                                The accounting entries are handled by our asset management software
                                so the process always stays smooth.
                            </p>
                            <GetStartedButton />
                        </div>

                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 shadow rounded py-10 md:py-1'>
                            <img src="https://erpnext.com/files/scrapping-assets.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>


                    </div>
                </div>
            </section>


            <section className='bg-gray-100'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-3/5 shadow rounded py-10 md:py-1'>
                            <img src="https://erpnext.com/files/asset-value-adjustment.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Asset Value Adjustment
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                If the value of an asset increases or drops off suddenly,
                                it can be recorded using the Asset Value Adjustment feature.
                                The system will create journal entries (based on the re-adjustment
                                values that were entered) and recalculate depreciation amounts.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>


            <section className='bg-white'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">

                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Asset Reporting
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                Identify bottlenecks, monitor performance, and improve
                                service delivery with reporting features. Out-of-the-box
                                standard reports and easy-to-build custom reports empower
                                you with data-driven analysis for better decisions.
                            </p>
                            <GetStartedButton />
                        </div>

                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 shadow rounded py-10 md:py-1'>
                            <img src="https://erpnext.com/files/asset-depreciation-report.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>


                    </div>
                </div>
            </section>


            <section className='bg-gray-100'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-3/5 shadow rounded py-10 md:py-1'>
                            <img src="https://erpnext.com/files/customize-asset.png" alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                On-The-Fly Customizations
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                Create your own open source asset management software.
                                Map the data you care about by adding custom fields in your forms.
                                Then customize form behavior by auto-fetching values, hide fields
                                based on user roles, and create custom print formats — all
                                without a single line of code.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>



        </div>
    )
}
