/* eslint-disable @next/next/no-img-element */
import GetStartedButton from '@/components/getStartedButton'
import accountingFeatures from '@/data/accountingFeatures'
import React from 'react'

export default function Accounting() {
    return (
        <div>
            <section className='bg-blue-600'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  pt-32 pb-8 md:pb-16'>
                    <div className="md:flex md:items-center md:justify-between md:space-x-10">
                        <div className='w-full md:w-1/2'>
                            <h1 className="text-gray-200 text-white text-4xl md:text-5xl">
                                Automate your
                            </h1>
                            <h1 className="my-3 font-extrabold text-gray-200 text-white text-4xl md:text-7xl">
                                Finance and Accounting
                            </h1>

                            <div className="pt-4">
                                <GetStartedButton />
                            </div>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <img
                                src="https://erpnext.com/files/accounts-dashboard.png"
                                className='rounded-xl'
                                alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section >
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div

                            className='w-full md:w-2/5'>
                            <img src="https://img.freepik.com/free-vector/mental-health-wellness-composition-workplace-icons-with-human-character-worker-with-reactions-chat-bubbles-vector-illustration_1284-80416.jpg?size=626&ext=jpg&uid=R19609540&ga=GA1.1.617832925.1708503188&semt=ais" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-3/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>2lifi Accounting System</h1>
                            <p className='text-gray-600 pt-4 py-2'>Now that purchasing and selling items are running smoothly for Spindl, these transactions also need to be recorded properly. Ledger entries for everything, what was debited/credited to which account and from which department, etc.

                                Earlier, they were manually making entries into Tally to keep their books updated. However, this meant that every entry would have to be made over multiple platforms. Duplicate data entry and the lack of automation just ended up becoming a productivity sink.

                                Thankfully, now that they’ve set an ERP up, integrating data from various sources into the Accounting module is easier than ever.

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
                                Why use ERP for accounting?
                            </h1>
                            <p className='text-gray-600 pt-4 py-2'>
                                Accounting is a mandatory process for every
                                business. However, it can be time-consuming
                                and exhausting to keep updated at all times.
                                With an ERP, you can take full advantage of
                                the value of integration. All relevant transactional
                                data from other modules (e.g., HR, sales, purchases,
                                inventory, etc.) will automatically sync with your
                                accounting data. This makes for hassle-free
                                bookkeeping. There’s also a considerably smaller
                                chance of errors. And because all your data’s in
                                one place, you can get incredibly detailed financial
                                reports that go beyond the basics.
                            </p>
                            <GetStartedButton />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5  py-10 md:py-1'>
                            <img src="https://erpnext.com/files/accounts-dashboard-1335c7cb.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className='h-full bg-blue-100 py-10'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div

                            className='w-full h-full md:w-3/5'>
                            <img src="https://erpnext.com/files/accounting-feature-chart_of_accounts.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5  py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Ultimate Accounting Flexibility
                            </h1>
                            <p className='text-gray-600 pt-4 py-2'>
                                2lifi lets accountants create a fully flexible
                                chart of accounts, adapted to whatever they need.
                                Add new accounts or reorganize accounts using a
                                simple tree structure. You can also import your
                                existing chart of accounts using the chart of
                                accounts importer.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>

            <section className='h-full py-10'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">


                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Group and Ledger Accounts
                            </h1>
                            <p className='text-gray-600 pt-4 py-2'>
                                Use a tree structure to manage group and ledger
                                accounts, which can be set up according to your
                                business. Group accounts allow for better
                                organization.
                            </p>
                            <GetStartedButton />
                        </div>

                        <div

                            className='w-full h-full md:w-3/5  py-10 md:py-1'>
                            <img src="https://erpnext.com/files/chart_of_accounts-group_ledger.png"
                                alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>

                    </div>
                </div>
            </section>

            <section className='h-full bg-blue-100 py-10'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div

                            className='w-full h-full md:w-3/5'>
                            <img src="https://erpnext.com/files/accounting-feature-pl_statement.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5  py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Accounting — The way you want
                            </h1>
                            <p className='text-gray-600 pt-4 py-2'>
                                {"2lifi’s"} customizable accounting reports let you
                                create balance sheets and profit & loss statements
                                exactly as you want.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>

            <section className='bg-gray-800'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex justify-center md:space-x-10">

                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5'>
                            <p className="text-white text-lg pb-4">
                                {"2lifi's"} Accounting and Financial Management feature provides
                                businesses with a comprehensive set of tools for managing their
                                financial operations. Some key features of this module include:
                            </p>
                            <img src="https://erpnext.com/files/accounting-feature-pl_statement.png" alt=""
                                className='object-cover rounded  w-full'
                            />
                            <p className="text-white text-lg pt-4">
                                These features together allow businesses to have a clear view of their financial position and performance, and to make data-driven decisions.
                            </p>

                        </div>

                        <div className='w-full md:w-3/5'>

                            <div>
                                {
                                    accountingFeatures.map((x: any, i: number) => <div key={i} className='py-2'>
                                        <div data-aos="fade-up"
                                            data-aos-duration="500"
                                            className="flex  space-x-2">
                                            <div className='mt-2'>
                                                <svg
                                                    className="flex-shrink-0 w-5 h-5 text-white"
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
                                            </div>
                                            <div>
                                                <h1 className='text-white font-semibold text-lg md:text-xl'>{x.title} </h1>
                                                <p className='text-gray-200 text-sm'>{x.subtitle} </p>
                                            </div>
                                        </div>

                                    </div>)
                                }
                            </div>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
