/* eslint-disable @next/next/no-img-element */
import GetStartedButton from '@/components/getStartedButton'
import healthcareBenefits from '@/data/healthcareBenefits'
import manufacturingBenefits from '@/data/manufacturingBenefits'
import React from 'react'

export default function Manufacturing() {
    return (
        <div>
            <section className='bg-blue-600'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  pt-32 pb-8 md:pb-16'>
                    <div className="md:flex md:items-center md:justify-between md:space-x-10">
                        <div className='w-full md:w-1/2'>
                            <h1 className="text-gray-200 text-white text-3xl md:text-5xl pt-2">
                                Streamline Manufacturing, Automate Workflows, & Boost Business Efficiency with
                            </h1>
                            <h1 className="my-3 font-extrabold text-gray-200 text-white text-3xl md:text-7xl">
                                2lifi Manufacturing Software
                            </h1>
                            <div className="md:pt-4">
                                <GetStartedButton />
                            </div>
                        </div>
                        <div className='w-full rounded md:w-1/2 py-10 md:py-1'>
                            <img src="https://nestorbird.com/assets/images/manufacturing-main.webp"
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
                                Stepping Towards Automation with 2lifi Manufacturing Software
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                The manufacturing industry is one of the most rapidly growing businesses
                                worldwide. With data and product innovation, 2lifi Manufacturing software
                                caters to the needs of manufacturing businesses of sizes and types.
                                The cloud ERP software offers Industry-specific capabilities and
                                features to direct, manage, control, track, automate and collaborate
                                with every operation in the manufacturing process.  <br />
                                The Manufacturing ERPNext software increases an {"enterprise's"}
                                organizational efficiency and productivity by automating and optimizing
                                inventory levels. Our customer open-source ERP solution meets these
                                challenges and exceeds {"clients'"} expectations. {"2lifi's"} ERPNext
                                manufactures innovative solutions for manufacturers like configure-to-order,
                                make-to-order, and assemble-to-order products.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>



            <section className='bg-gray-100'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <h1 className='text-2xl py-5 text-center md:text-6xl font-extrabold text-gray-900'>
                        Benefits of 2lifi Manufacturing  Software
                    </h1>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="500"
                        className="py-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {
                            manufacturingBenefits.map((x: any, i: number) => <div key={i}
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="rounded-full p-1">
                                        <img src={x.img} alt="" className='h-8 w-8' />
                                    </div>
                                    <h1 className='text-gray-800 text-md md:text-xl font-semibold py-2'>{x.title} </h1>

                                </div>
                            </div>)
                        }
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
                                Laboratory Management
                            </h1>
                            {
                                [
                                    "Admin Backend Dashboard",
                                    "Customers Overview",
                                    "Check Out Sales Orders",
                                    "Inventory & Purchase Summary",
                                    "Products & Financial Records"
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
                            <img src="https://nestorbird.com/assets/images/manu-feature1.webp" alt=""
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
                                src="https://nestorbird.com/assets/images/manu-feature2.webp"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Bill of Materials (BOM)
                            </h1>
                            {
                                [
                                    "Generate, List & Print Product Bills",
                                    "Customize Quantity, Cost, Description & Item Code",
                                    "Functional Workstation Details",
                                    "Creating Work Orders & Procurement types",
                                    "Routing Code and Operations"
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
                                Shop Floor Management
                            </h1>
                            {
                                [
                                    "Workstation Features",
                                    "Track Workstation Locations",
                                    "Check Real-Time Status",
                                    "Record Activities & Manufactured Products",
                                    "Employee Assignments & Task Allotments"
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
                            <img src="https://nestorbird.com/assets/images/manu-feature3.webp" alt=""
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
                                src="https://nestorbird.com/assets/images/manu-feature4.webp"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Material Requirements Planning (MRP)
                            </h1>
                            {
                                [
                                    "List Base Price against Material Request",
                                    "Cost Determination Calculator",
                                    "Purchase Records & Inventory Management",
                                    "Manufacturing Capacity & Production Monitoring",
                                    "Automated Stock Values & Quantity Details"
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
                                Subcontracting
                            </h1>
                            {
                                [
                                    'Outsource Multiple Suppliers & Vendors',
                                    'Monitor Routine Operations',
                                    'Accelerate Raw Materials Supply',
                                    'Prevent Stock Outages',
                                    'Track Labour & Procured Services'
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
                            <img src="https://nestorbird.com/assets/images/manu-feature5.webp" alt=""
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
                                src="https://nestorbird.com/assets/images/manu-feature6.webp"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Item Variants
                            </h1>
                            {
                                [
                                    "Generate Item Templates",
                                    "Size and Shape Variations",
                                    "Mapping Variant Attributes",
                                    "Auto Generating SKU’s Stocked Variants",
                                    "Creating Multiple Stock Requests"
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
                                Batched & Serialized Inventory
                            </h1>
                            {
                                [
                                    "Prerequisites & Batch Auto Creation",
                                    "Assigning & Auto Generating Serial Numbers",
                                    "Splitting Batches based on Manufacturing & Expiry Dates",
                                    "Add Scan Item Barcodes & Batch Descriptions",
                                    "Scannable barcode Entry for Products",
                                    "Advanced Filter Option in List Screen",
                                    "View Active/Pending/Delivered Stock Units"
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
                            <img src="https://nestorbird.com/assets/images/manu-feature7.webp" alt=""
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
                                src="https://nestorbird.com/assets/images/manu-feature8.webp"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Capacity Planning
                            </h1>
                            {
                                [
                                    "Determine Pre-defined Item Orders in the Calendar",
                                    "Updated Due Dates of Deliverable Items",
                                    "Managing Plan Schedules & Work Orders",
                                    "Production Date, Batch Code & Time Outlook",
                                    "Functional Operations & Related Activities"
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
                            Unit of Measurement (UoM)
                            </h1>
                            {
                                [
                                    'Materials Measurement: Serial No., Batch No., & Variants',
                                    'Adding Multiple Product Specific UOMs',
                                    'UoM Conversion Factor & Autoconversion',
                                    'Sales, Purchase, Warehouse & Accounting Details',
                                    'Product Transactions Details'
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
                            <img src="https://nestorbird.com/assets/images/manu-feature9.webp" alt=""
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
                                src="https://nestorbird.com/assets/images/manu-feature10.webp"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                            Easy Customization
                            </h1>
                            {
                                [
                                    "Create & design Custom Forms of Bills, and Orders",
                                    "Multilingual Manufacturing ERP Feature",
                                    "Plan Title Field, Form Type, & Image Field",
                                    "Add Keywords in the Search Option",
                                    "Manage Track Changes, Hide Fields & Quick Entries"
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
                            Quality Assurance
                            </h1>
                            {
                                [
                                    "QC Characteristics and Features",
                                    "Item Test Parameter and Process",
                                    "Inward Quality Control",
                                    "Item Test Relation",
                                    "Alerts and Notifications"
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
                            <img src="https://nestorbird.com/assets/images/manu-feature11.webp" alt=""
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
                                src="https://nestorbird.com/assets/images/manu-feature12.webp"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                            Stock Balance and Replenishment
                            </h1>
                            {
                                [
                                    "Warehouse Stock Estimation",
                                    "Monitor & Alert Stock Quantity Levels",
                                    "Stock Valuation for Easy Transformation",
                                    "List Item Code, Name & Warehouse Details",
                                    "Update Item Barcode & Image on the Dashboard"
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
                            Inventory Control
                            </h1>
                            {
                                [
                                    "Inventory Forecasts & Approaches",
                                    "Product Tagging & Segregation",
                                    "Restocking Request and Details",
                                    "Dispatch Scheduling Process",
                                    "Storage Facilitation Measures"
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
                            <img src="https://nestorbird.com/assets/images/manu-feature13.webp" alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                    </div>
                </div>
            </section>

            

        

        </div>
    )
}
