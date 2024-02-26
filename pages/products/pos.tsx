/* eslint-disable @next/next/no-img-element */
import GetStartedButton from '@/components/getStartedButton'
import posFeatures from '@/data/posFeatures'

import Link from 'next/link'
import React from 'react'

export default function POS() {
    return (
        <div>
            <section className='bg-blue-600'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  pt-32 pb-8 md:pb-16 '>
                    <div className="md:flex md:items-center md:justify-between md:space-x-10">
                        <div className='w-full md:w-1/2'>
                            <h1 className="text-gray-200 text-white text-3xl md:text-5xl">
                                Start selling faster with
                            </h1>
                            <h1 className="my-3 font-extrabold text-gray-200 text-white text-3xl md:text-7xl">
                                2lifi Point of Sale!
                            </h1>
                            <h1 className="text-gray-200 text-white text-3xl md:text-5xl">
                                Flexible POS Software
                            </h1>
                            <div className="pt-4">
                                <GetStartedButton />
                            </div>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <img
                                src="https://nestorbird.com/assets/images/getpos-faq.webp"
                                className='rounded-xl'
                                alt="" />
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
                                Everything That Your Shop Needs
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                Compatible with any device, {"2lifi's"} open source Point of Sale
                                software is user friendly, extremely flexible, and fully integrated
                                with inventory for real-time stock control. It even works both
                                online and offline.
                            </p>
                            <GetStartedButton />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5  py-10 md:py-1'>
                            <img src="https://erpnext.com/files/pos-online-mode.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-10 text-center bg-blue-100'>
                <div>
                    <h1 className='text-lg pb-3'>Start setting up your POS right now. {"Don't"} wait to make selling very effective!</h1>
                    <Link href={"/pos"}
                        className='text-blue-600 font-normal'
                    >Get started now</Link>
                </div>
            </section>

            <section >
                <div className="md:max-w-[90%] justify-center w-[100%] px-4 mx-auto ">
                    <div className="pt-12 mx-auto">
                        <h2 className="text-3xl py-12  pb-5 font-extrabold sm:text-5xl">
                            Features of 2lifi Point Of Sale (POS) Software
                        </h2>
                        <div className="md:flex justify-between items-center md:space-x-10">
                            <div data-aos="fade-up"
                                data-aos-duration="500" className="md:w-3/5">
                                <div className="mx-auto px-4">

                                    <div className='pt-5'>
                                        {
                                            posFeatures.map((x: any, i: number) => <div key={i}>
                                                <div className="flex space-x-2">
                                                    <svg
                                                        className="flex-shrink-0 mt-2 w-5 h-5 text-green-500"
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
                                                    <div className='pb-4'>
                                                        <h1 className='pb-1 text-gray-900 text-lg md:text-xl font-semibold'>{x.title} </h1>
                                                        <p className='text-gray-500 text-sm'>{x.subtitle} </p>
                                                    </div>
                                                </div>
                                            </div>)
                                        }
                                    </div>

                                </div>
                            </div>
                            <div data-aos="fade-up"
                                data-aos-duration="600" className="w-full md:w-2/5 flex justify-end md:py-3">
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

            <section className='bg-gray-100'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 shadow rounded py-10 md:py-1'>
                            <img src="https://erpnext.com/files/pos-profile.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-3/5  py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                POS Profile
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                In 2lifi, a POS profile lets you use the Point of Sale feature.
                                The profile is where you can set defaults such as price list,
                                warehouse, branch/location, income account, and payment modes.
                                You can even manage which users can access which POS profiles
                                with one-click configuration.
                                <br />
                                To  configure a POS Profile, you need to create a Point of Sale
                                Profile. You can set up multiple profiles as per each retail outlet.
                                One POS Profile can contain one or more users. Cashiers can also
                                create Cash Closing Vouchers.
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
                            className='w-full md:w-3/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Items And Pricing
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                Set up prices (including selling and buying rates) for your products
                                with different price lists. These price lists can even be in different
                                currencies! Just select the right price list, and your item prices
                                will be automatically fetched during transactions.
                                <br />
                                Setup the prices of your products with Item Price.
                                You may have one or more Price Lists depending on multi-currency,
                                branch wise product offers, and so on.
                            </p>
                            <GetStartedButton />
                        </div>

                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 rounded shadow py-10 md:py-1'>
                            <img src="https://erpnext.com/files/pos-item-pricing.png" alt=""
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
                            className='w-full md:w-2/5 shadow rounded py-10 md:py-1'>
                            <img src="https://erpnext.com/files/pos-quick-stock-balance.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-3/5  py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Quick Stock Balance
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                Check stock levels of each branch effortlessly. The Quick Stock Balance
                                tool can be used to retrieve an {"item's"} current stock quantity
                                and value — in the specified warehouse, on the specified date.
                                The tool can also be used for stock-taking (stock audits) to match
                                the quantity of actual stock in stores and stock logged in the open
                                source POS software.
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
                                Multi-Store Management
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                Register new company branches with a few clicks and start transacting
                                right away! You can configure dimensions for each branch and
                                analyze your expenses, stock movements, profits and loss to assess
                                your overall profitability. You can also see store-wise profit/loss
                                and income statements easily with {"2lifi's"} accounting module.
                            </p>
                            <GetStartedButton />
                        </div>

                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 rounded shadow py-10 md:py-1'>
                            <img src="https://erpnext.com/files/multistore-management.png" alt=""
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
                            className='w-full md:w-2/5 shadow rounded py-10 md:py-1'>
                            <img src="https://erpnext.com/files/pos-offline-mode.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-3/5  py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Offline Open Source POS
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                In 2lifi, you can create POS invoices even when {"you're"} not connected
                                to the internet. Invoices created offline will be saved locally in the browser.
                                You can even keep creating an invoice if you lose internet midway.
                                Once an internet connection is available, all offline invoices will
                                be synced and pushed to your ERPNext account.
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
                            className='w-full md:w-3/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Promotional Schemes
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                2lifi makes discounts simple. With promotional schemes, you can manage
                                item discounts (based on rate or set prices) for different retail
                                parties or branches. Promotional schemes will automatically change the
                                applicable pricing rules.
                            </p>
                            <GetStartedButton />
                        </div>

                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/3 rounded shadow py-10 md:py-1'>
                            <img src="https://erpnext.com/files/pos-promotional-scheme.png" alt=""
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
                            className='w-full md:w-1/2 shadow rounded py-10 md:py-1'>
                            <img src="https://erpnext.com/files/pos-sales-invoice.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2  py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Configurable Print Formats
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                With {"2lifi's"} Print Format Builder, you can customize the
                                look and feel of your invoices effortlessly. Apply your brand logos,
                                include images or terms and conditions, add your company address,
                                and so on. Once you set it up and save as the default, {"you'll"}
                                never have to worry about it again!
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
                            className='w-full md:w-3/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                POS Closing Voucher
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                At the end of the day, {"it's"} easy and fast for cashiers to
                                close their POS. Just select the period and enter collected amounts.
                                If cashiers notice a difference between the system amount and the
                                actual cash collected, {"it's"} easy to create a Difference Posting.
                            </p>
                            <GetStartedButton />
                        </div>

                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/3 rounded shadow py-10 md:py-1'>
                            <img src="https://erpnext.com/files/pos-closing-voucher.png" alt=""
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
                            className='w-full md:w-1/2 shadow rounded py-10 md:py-1'>
                            <img src="https://erpnext.com/files/pos-cashier-closing-voucher.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2  py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Cashier Closing Voucher
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                Multiple people may operate your POS at the retail counter
                                through the day. Cashier Closing Vouchers let cashiers record
                                the sales and details at the end of their shift. Then an accountant
                                or manager can collect and tally cash to quickly update the company ledgers.
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
                            className='w-full md:w-2/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                            Customer Acquisition & Loyalty Program
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                            Manage your customers better in no time. It just takes a few minutes 
                            to set up loyalty programs and special pricing schemes. You can then 
                            maintain credit limits, view receivables and total billing, and 
                            analyze average customer revenue to make informed business decisions.
                            </p>
                            <GetStartedButton />
                        </div>

                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-3/5 rounded shadow py-10 md:py-1'>
                            <img src="https://erpnext.com/files/customer.png" alt=""
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
                            <img src="https://erpnext.com/files/customize-form-1.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5  py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                            On-The-Fly-Customizations
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                            Create your own open source POS software. Map the data you care 
                            about by adding custom fields in your forms. Then customize form 
                            behavior by auto-fetching values, hide fields based on user roles, 
                            and create custom print formats — all without a single line of code.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>



        </div>
    )
}
