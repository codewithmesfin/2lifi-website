/* eslint-disable @next/next/no-img-element */
import GetStartedButton from '@/components/getStartedButton'


import Link from 'next/link'
import React from 'react'

export default function CRM() {
    return (
        <div>
            <section className='bg-blue-600'>
                <div className='mx-auto w-[97%] md:max-w-[90%]  pt-32 pb-8 md:pb-16'>
                    <div className="md:flex md:items-center md:justify-between md:space-x-10">
                        <div className='w-full md:w-1/2'>
                            {/* <h1 className="text-gray-200 text-white text-3xl md:text-5xl">
                                360-Degree View Of Your Business with
                            </h1> */}
                            <h1 className="my-3 font-extrabold text-gray-200 text-white text-3xl md:text-7xl">
                                360-Degree View Of Your Business with
                                the {"World's"} best CRM
                            </h1>
                            <h1 className="text-gray-200 text-white text-3xl md:text-5xl">
                                - A Customer Relationship Management Software
                            </h1>
                            <div className="pt-4">
                                <GetStartedButton />
                            </div>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <img
                                src="https://img.freepik.com/free-vector/gradient-crm-illustration_23-2149373198.jpg?t=st=1708926266~exp=1708929866~hmac=aba9493ffa322193b1bc9d7b67a640b28638ba3e8894c05e66171d1166b21557&w=1800"
                                className='rounded-xl'
                                alt="" />
                        </div>
                    </div>
                </div>
            </section>


            <section className='py-10 text-center bg-blue-100'>
                <div className='w-[90%] md:max-w-4xl mx-auto'>
                    <p className='text-gray-500 py-2'>
                        2lifi helps you track business Opportunities from Leads and Customers,
                        send them Quotations, and book Sales Orders.
                        <br />
                        2lifi is the best tool for doing more in less time. Get leads, drive
                        sales, automate mundane tasks and connect with your prospects, and
                        grow your business — all with the real customer-centric CRM.
                    </p>
                    <Link href={"/pos"}
                        className='text-blue-600 font-normal'
                    >Get started now</Link>
                </div>
            </section>


            <section>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-3/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Omnichannel Interactions
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                {"Don't"} miss out on anything from your leads.
                                2lifi makes it easy to convert all interactions into data so your
                                sales team {"doesn't"} have to juggle between apps.
                                With Call Popup, you can receive live notifications of incoming
                                calls on your desktop. You can also turn emails in your inbox
                                into leads with this open source CRM software.
                            </p>
                            <GetStartedButton />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5  py-10 md:py-1'>
                            <img src="https://erpnext.com/files/omnichannel-interactions.png" alt=""
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
                            <img src="https://erpnext.com/files/opportunity-assignementcbbccd.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-3/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Automate Daily Chores
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                Reduce overhead of manual work by setting up assignment rules
                                (such as round robin or load balancing) to automatically distribute
                                leads among the team. This leaves more time to respond to customers,
                                empowering your sales team to meet commitments on time.
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
                                Sales Team Efficiency
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                {"Don't"} miss out on the big picture of your sales team.
                                2lifi includes out-of-the-box reports to monitor team performance
                                and analyze the lead traffic or sales stage of all prospects.
                                You can even collaborate to address leads or opportunities
                                with multiple assignments or mentions.
                            </p>
                            <GetStartedButton />
                        </div>

                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 rounded shadow py-10 md:py-1'>
                            <img src="https://erpnext.com/files/lead-owner-efficiency.png" alt=""
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
                            <img src="https://erpnext.com/files/pipeline69b211.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-3/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Total Visibility Of Sales Pipeline
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                {"2lifi's"} open source CRM includes a real-time view of
                                important sales and marketing opportunities. This helps you
                                craft a strategy to increase your lead-to-deal conversion rates.
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
                                Crisp, Beautiful Quotations
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                First impressions matter. Beautify your quotations and keep
                                documents consistent with custom print format templates
                                (using HTML or Jinja templating) and one-time configurations.
                            </p>
                            <GetStartedButton />
                        </div>

                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 rounded shadow py-10 md:py-1'>
                            <img src="https://erpnext.com/files/sp-quotations-print.png" alt=""
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
                            <img src="https://erpnext.com/files/newsletterbd704e.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-3/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Digital Marketing
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                2lifi CRM tool makes your lead closure soar. Use email campaigns for
                                targeted marketing, send bulk emails to your customers with beautiful
                                newsletters, and reap the benefits of your campaigns with granular
                                analysis of lead sources.
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
                            className='w-full md:w-3/5 shadow rounded py-10 md:py-1'>
                            <img src="https://erpnext.com/files/customize-lead.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                On-The-Fly-Customizations
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                Create your own open source CRM software. Map the data you care
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
