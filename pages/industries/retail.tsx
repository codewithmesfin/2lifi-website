/* eslint-disable @next/next/no-img-element */
import GetStartedButton from '@/components/getStartedButton'
import retailBenefits from '@/data/retailBenefits'
import React from 'react'

export default function Retail() {
    return (
        <div>
            <section className='bg-blue-600'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  pt-32 pb-8 md:pb-16'>
                    <div className="md:flex md:items-center md:justify-between md:space-x-10">
                        <div className='w-full md:w-1/2'>

                            <h1 className="my-3 font-extrabold text-gray-200 text-white text-3xl md:text-7xl">
                                Digitize Your Retail Business with 2lifi Solution
                            </h1>
                            <div className="md:pt-4">
                                <GetStartedButton />
                            </div>
                        </div>
                        <div className='w-full rounded md:w-1/2 py-10 md:py-1'>
                            <img src="https://nestorbird.com/assets/images/retail-img.webp"
                                alt=""
                                className='rounded w-full f-hull object-contain'
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full rounded md:w-2/5'>
                            <img src="https://img.freepik.com/free-vector/ai-powered-content-creation-isometric-composition-with-human-characters-cute-robot-generating-art-computer-screen-3d-vector-illustration_1284-82522.jpg?t=st=1708952080~exp=1708955680~hmac=5791d844f3e3edb01def56530754bd23f02a3733ee5622af58f65d05c0a39d9a&w=1480" alt=""
                                className='object-contain rounded h-full max-h-[350px] w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-3/5 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Introduction to {"2lifi's"} Retail system
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                The retail industry is an ever-growing and fast-paced business
                                of the world and is majorly driven by product requirements and the
                                needs of customers. With ever-changing demands and growing trends,
                                the industry faces stiff competition to create reliable and robust
                                systems and processes to stay ahead of the pack and secure long-term
                                business benefits. To help accommodate the rapid pace of the retail
                                market, a tailored open-source ERP system which is flexible, scalable
                                and modular fits the best.  <br />
                                2lifi offers a retail ERPNext solution with essential modules and
                                outstanding technology stack for an immersive user experience. The open-source
                                ERP solution enables multiple capabilities to automate everything to give
                                an omnichannel shopping experience. Retail ERPNext software helps
                                address retail-specific challenges and needs. Retailers can manage,
                                address, track, assess, and streamline all aspects of business for
                                enhanced efficiency and improved productivity.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>



            <section className='bg-gray-100'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <h1 className='text-2xl py-5 text-center md:text-6xl font-extrabold text-gray-900'>
                        Benefits of 2lifi Reatil Software
                    </h1>
                    <div className="py-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {
                            retailBenefits.map((x: any, i: number) => <div key={i}
                                data-aos="fade-up"
                                data-aos-duration="500">
                                <div className="bg-white h-full hover:shadow rounded border border-gray-200 p-5">
                                    <div className="rounded-full p-1">
                                        <img src={x.img} alt="" className='h-8 w-8' />
                                    </div>
                                    <h1 className='text-gray-800 text-md md:text-xl font-semibold py-2'>{x.title} </h1>
                                    <p className='text-gray-500'>{x.subtitle} </p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </section>

            <section className='bg-blue-600'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <h1 className='text-3xl py-3 md:text-center md:text-6xl font-normal text-white pb-3'>
                        2lifi Reatil Modules
                    </h1>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'
                        >

                            {
                                [
                                    "Real Workflow Automation",
                                    "Integrated Retail CRM",
                                    "Inventory Forecasting",
                                    "Flexible Order Fulfillment",
                                    "Integrated Accounting",
                                    "Multichannel Order Management",
                                    "Integrated Workflow Management",
                                    "Real-Time Inventory",
                                    "Leave Management"
                                ].map((x: any, i: number) => <div key={i} className='flex space-x-2'>
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 mt-1 text-gray-200"
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
                                    <p className='text-gray-200 text-lg md:text-xl'>{x} </p>
                                </div>)
                            }
                        </div>

                    </div>
                </div>
            </section>


            <section>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="py-10">
                        <h1 className='text-2xl text-center md:text-6xl font-extrabold text-gray-900'>
                            Features of 2lifi Healthcare
                        </h1>
                        <p className='text-lg md:text-xl text-gray-600 text-center py-4'>
                            Customizable open source ERPNext Software, you can easily revamp
                            and tune internal processes to your unique business style.
                        </p>
                    </div>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600 pb-3'>
                                User Interface
                            </h1>
                            {
                                [
                                    'User-Friendly UI',
                                    'Product Add-on List',
                                    'Quantity Add-on List',
                                    'Calculation Measures',
                                    'Auto Discount & Schemes',
                                    'Online Payment/Cash Processing'
                                ].map((x: any, i: number) => <div key={i} className='flex space-x-2 p-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={3.5} stroke="currentColor"
                                        className="w-4 h-4 text-blue-600 mt-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                    <p className='text-gray-600'>{x} </p>
                                </div>)
                            }
                            <GetStartedButton />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 rounded  py-10 md:py-1'>
                            <img src="https://nestorbird.com/assets/images/retail-feature1.webp" alt=""
                                className='object-cover rounded h-full w-full'
                            />
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
                            className='w-full shadow rounded md:w-1/2 py-10 md:py-1 '>
                            <img
                                src="https://nestorbird.com/assets/images/retail-feature2.webp"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Product & Stock
                            </h1>
                            {
                                [
                                    "Checklist for Product Availability",
                                    "Scan Barcodes for Quick Search",
                                    "Warehouse Stock Management",
                                    "Determine Transferrable Stock",
                                    "Assign Item Group & Serial No."
                                ].map((x: any, i: number) => <div key={i} className='flex space-x-2 p-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={3.5} stroke="currentColor"
                                        className="w-4 h-4 text-blue-600 mt-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                    <p className='text-gray-600'>{x} </p>
                                </div>)
                            }
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
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600 pb-3'>
                                Finance & Bill Management
                            </h1>
                            {
                                [
                                    "Print Invoice Format Template",
                                    "Auto-generating Sales Invoice",
                                    "One time Configuration",
                                    "Categorize Customer Name, Contact & Item Details",
                                    "Generate Payment Requests via SMS or email",
                                    "Processing Faster Transactions"
                                ].map((x: any, i: number) => <div key={i} className='flex space-x-2 p-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={3.5} stroke="currentColor"
                                        className="w-4 h-4 text-blue-600 mt-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                    <p className='text-gray-600'>{x} </p>
                                </div>)
                            }
                            <GetStartedButton />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 shadow rounded  py-10 md:py-1'>
                            <img src="https://nestorbird.com/assets/images/retail-feature3.webp" alt=""
                                className='object-cover rounded h-full w-full'
                            />
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
                            className='w-full shadow rounded md:w-1/2 py-10 md:py-1 '>
                            <img
                                src="https://nestorbird.com/assets/images/manu-feature3.webp"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Point of Sale
                            </h1>
                            {
                                [
                                    "Items and Pricing",
                                    "Quick Stock Balance",
                                    "Multistore Management",
                                    "ERPNext Integration",
                                    "Loyalty Program",
                                    "Self Boarding"
                                ].map((x: any, i: number) => <div key={i} className='flex space-x-2 p-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={3.5} stroke="currentColor"
                                        className="w-4 h-4 text-blue-600 mt-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                    <p className='text-gray-600'>{x} </p>
                                </div>)
                            }
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
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600 pb-3'>
                            Customization
                            </h1>
                            {
                                [
                                    "Customize Existing Fields",
                                    "Customize Report Builder",
                                    "Customize Print Formats",
                                    "Customize Document Types"
                                ].map((x: any, i: number) => <div key={i} className='flex space-x-2 p-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={3.5} stroke="currentColor"
                                        className="w-4 h-4 text-blue-600 mt-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                    <p className='text-gray-600'>{x} </p>
                                </div>)
                            }
                            <GetStartedButton />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 shadow rounded  py-10 md:py-1'>
                            <img src="https://nestorbird.com/assets/images/retail-feature5.webp" alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                    </div>
                </div>
            </section>

      
        </div>
    )
}
