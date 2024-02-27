/* eslint-disable @next/next/no-img-element */
import GetStartedButton from '@/components/getStartedButton'
import healthcareBenefits from '@/data/healthcareBenefits'
import React from 'react'

export default function Healthcare() {
    return (
        <div>
            <section className='bg-blue-600'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  pt-32 pb-8 md:pb-16'>
                    <div className="md:flex md:items-center md:justify-between md:space-x-10">
                        <div className='w-full md:w-1/2'>

                            <h1 className="my-3 font-extrabold text-gray-200 text-white text-3xl md:text-7xl">
                                Digitize your Healthcare Business with 2lifi Solution
                            </h1>
                            <div className="md:pt-4">
                                <GetStartedButton />
                            </div>
                        </div>
                        <div className='w-full rounded md:w-1/2 py-10 md:py-1'>
                            <img src="https://nestorbird.com/assets/images/healthcare-new-right-banner-img.webp"
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
                            className='w-full rounded md:w-1/2'>
                            <img src="https://img.freepik.com/free-vector/ai-powered-content-creation-isometric-composition-with-human-characters-cute-robot-generating-art-computer-screen-3d-vector-illustration_1284-82522.jpg?t=st=1708952080~exp=1708955680~hmac=5791d844f3e3edb01def56530754bd23f02a3733ee5622af58f65d05c0a39d9a&w=1480" alt=""
                                className='object-contain rounded h-full max-h-[350px] w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Introduction to {"2lifi's"} Healthcare system
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                The healthcare industry grapples with the complex task of managing
                                patients, doctors, and resources efficiently. Enter 2lifi
                                Healthcare: a comprehensive solution designed to streamline operations
                                while minimizing costs and effort. At 2lifi, we offer a digitized
                                2lifi Healthcare platform that integrates medical records, billing, and
                                inventory, enhancing productivity and resource management. Trusted by
                                top-rated hospitals and clinics globally, our solutions bridge the gap
                                between patients and doctors, facilitating efficient digital workflows
                                for medical centers.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>



            <section className='bg-gray-100'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <h1 className='text-2xl py-5 text-center md:text-6xl font-extrabold text-gray-900'>
                        Benefits of 2lifi Healthcare Software
                    </h1>
                    {
                        healthcareBenefits.map((y: any, j: number) => <div key={j}>
                            <div className={`rounded-full px-5 w-[250px] mt-8 mb-1 `} style={{
                                backgroundColor: y.bg
                            }}>
                                <h1 className={` text-center text-lg md:text-xl font-semibold py-2`}
                                    style={{ color: y.color }}
                                >{y.title} </h1>
                            </div>
                            <div className="py-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                                {
                                    y.benefits.map((x: any, i: number) => <div key={i}
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
                        </div>)
                    }
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
                                Patient Repository
                            </h1>
                            {
                                [
                                    "Personal Details: Name, DOB, Age, Gender, Contact No. and Address",
                                    "Medical History: Diagnosis, Risk Factor, Allergies, Consultation, Treatment, and Healthcare Plan",
                                    "Billing: Registration Fee, Medical Bills and Subscriptions",
                                    "Admin Section: Online Appointment Booking, Availability of Doctors, and Duration of Treatment"
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
                            <img src="https://nestorbird.com/assets/images/Healthcare-fe1.webp" alt=""
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
                                src="https://nestorbird.com/assets/images/Healthcare-fe2.webp"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Healthcare Practitioners
                            </h1>
                            {
                                [
                                    "Personal Details: Name, DOB, Age, Gender, Contact No. and Address",
                                    "Expertise: Specialty/Medical Field",
                                    "Availability: Treatment Schedule, Consultation Time,Weekly/Monthly Work Schedule, Holiday Section"
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
                                Appointment Generation
                            </h1>
                            {
                                [
                                    "Appointment Status: Book an Appointment, Cancel an Appointment or Reschedule an Appointment",
                                    "Automated Notification: Inform patients via SMS/Call/Email"
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
                            <img src="https://nestorbird.com/assets/images/Healthcare-fe3.webp" alt=""
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
                                src="https://nestorbird.com/assets/images/Healthcare-fe4.webp"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Clinical Procedures
                            </h1>
                            {
                                [
                                    "Pre-Clinical Procedure: Start Date, and Treatment Plan",
                                    "Post-Clinical Treatment: End Date, and Treatment Plan"
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
                                Medical Data
                            </h1>
                            {
                                [
                                    "Patient's Demographics and Prescription by the Doctors",
                                    "Auto-Generated Serial No. and Inpatient Batch No. Assigned to Patients",
                                    "Medical History and Treatment of Patients",
                                    "Inpatient and Outpatient Data",
                                    "Healthcare Plans: Life Insurance, Health Insurance etc."
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
                            <img src="https://nestorbird.com/assets/images/Healthcare-fe5.webp" alt=""
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
                                src="https://nestorbird.com/assets/images/Healthcare-fe6.webp"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Laboratory Management
                            </h1>
                            {
                                [
                                    "Inventory Management: Medical Test Machines, Equipments, Ingredients and Operational Needs",
                                    "Medical Test Records: Prescribed Test, Testing Sample Collection, Making Lab Reports",
                                    "Barcodes: Locate all lab items, equipments, ingredients, and machines"
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
                                    "Patient's User Profile",
                                    "Doctor's User Profile",
                                    "Prescription Form",
                                    "Medical Data Record Form"
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
                            <img src="https://nestorbird.com/assets/images/Healthcare-fe7.webp" alt=""
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
                                src="https://nestorbird.com/assets/images/Healthcare-fe8.webp"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Pharmacy Management
                            </h1>
                            {
                                [
                                    "Medicine Stock Management : Available Stock, Consumed Stock and Ordered Stock",
                                    "Medical Prescription"
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

            <section className='bg-blue-600'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <h1 className='text-3xl py-3 md:text-center md:text-6xl font-normal text-white pb-3'>
                        2lifi Healthcare Modules
                    </h1>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'
                        >

                            {
                                [
                                    "Appointment Scheduling",
                                    "Inventory & Purchase",
                                    "Laboratory Management",
                                    "EMR (Electronic Medical Record)",
                                    "Staff, HR and Payroll Management",
                                    "Pharmacy Management",
                                    "Financial Accounting System",
                                    "MIS Reports",
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


        </div>
    )
}
