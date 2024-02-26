/* eslint-disable @next/next/no-img-element */
import GetStartedButton from '@/components/getStartedButton'
import empLifecycleContent from '@/data/empLifeCycle'
import hrmsFeatures from '@/data/hrmsFeatures'


import Link from 'next/link'
import React from 'react'

export default function HRMS() {
    return (
        <div>
            <section className='bg-blue-600'>
                <div className='mx-auto w-[97%] md:max-w-[90%]  pt-32 pb-8 md:pb-16'>
                    <div className="md:flex md:items-center md:justify-between md:space-x-10">
                        <div className='w-full md:w-2/5'>

                            <h1 className="my-3 font-extrabold text-gray-200 text-white text-3xl md:text-6xl">
                                The HR Revolution brewing just for you
                            </h1>
                            <h1 className="text-gray-200 text-white text-xl md:text-2xl">
                                Frappe HR is a 100% open source, modern, user-friendly solution to drive excellence within your team. Simplify your HR and Payroll operations with a product crafted as per your needs.
                            </h1>
                            <div className="pt-4">
                                <GetStartedButton />
                            </div>
                        </div>
                        <div className='w-full md:w-3/5'>
                            <img
                                src="https://frappehr.com/files/homepage-hero.png"
                                className='rounded h-full w-full'
                                alt="" />
                        </div>
                    </div>
                </div>
            </section>


            <section className='py-10 text-center bg-blue-100'>
                <div className='w-[90%] md:max-w-4xl mx-auto'>
                    <p className='text-gray-500 py-2'>
                        The Human Resources (HR) module covers the processes related to the
                        HR department of a company. It maintains a complete employee database
                        including contact information, salary details, attendance, performance
                        evaluation, leaves, and appraisal records.
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
                            className='w-full md:w-1/2'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Why use ERP for human resource management?
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                Managing your team efficiently is key to ensuring success for your business.
                                This requires you to enable them to do their work in the best way possible,
                                by equipping them with the right tools and systems.
                                With an HRM module for your 2lifi Enterprise Software, you can cover various
                                tasks and processes that are linked to administering a team of co-workers or
                                employees. It allows you to keep track of various employee-relation functions,
                                such as: <br /> Recruitment, Leave management,Lifecycle, Payroll, Expense claims, Attendance. <br />
                                The most widely used feature is payroll processing and generating salary slips.
                                Most countries have complex tax rules which state the expenses the company
                                can make on behalf of its employees (e.g., social security, taxes).
                                All of this is taken into account in an HRM/ERP software.
                            </p>
                            <GetStartedButton />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 rounded shadow  py-10 md:py-1'>
                            <img src="https://frappehr.com/files/RtArfPD.gif" alt=""
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
                            <img src="https://frappehr.com/files/rqUdH4m.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-3/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Employee
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                An individual who works part-time or full-time under a contract of
                                employment, and has recognized rights and duties of your company is
                                considered an employee. While storing employee data in an ERP,
                                you can include personal details, demographics, joining and leave details,
                                type of employment (e.g., intern, contractor, full-time, part-time,
                                probation, etc.), department, designation, branch, etc. <br /> Along with this,
                                details regarding the {"employee’s"} salary payment, leave policy, previous
                                work experience are also stored. <br />
                                Moreover, if your company provides health insurance to employees, details
                                regarding it can also be stored within the system. This helps keep
                                track of the insurance plan that the employee is on. Upon an {"employee’s"}
                                departure from the company, exit details such as their resignation,
                                exit interview, and leave encashment can also be documented.
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
                                Recruitment
                            </h1>
                            <h2 className="text-lg pt-4  font-bold">Planning your workforce</h2>
                            <p className='text-gray-500 py-2'>
                                There are many moving parts when it comes to the recruitment of new employees.
                                For this process, an HRM system helps you create staffing plans, which
                                help you plan manpower requirements for your company. You can enter
                                budgeting, vacancies, estimated cost per position, number of positions,
                                etc. while creating a staffing plan.
                            </p>
                            <h2 className="text-lg pt-4  font-bold">The hiring process</h2>
                            <p className='text-gray-600 py-2'>
                                When there is a job vacancy in your company, it usually goes through this process:
                            </p>
                            <ul className='list-decimal ml-5 md:ml-10'>
                                {
                                    [
                                        "You put out a job opening, people find it.",
                                        "Those who are interested apply for the job (sometimes maybe another employee refers them to you!).",
                                        "Interviews are conducted.",
                                        "Once you’ve selected someone, you give them a job offer (this states the offered salary package, designation, grade, department, number of leave days, etc.).",
                                        "If they accept, then they’re given an appointment letter!"
                                    ]
                                        .map((x: any, i: number) => <li key={i} className='text-sm text-gray-500'>
                                            {x}
                                        </li>)
                                }
                            </ul>

                            <p className='text-gray-600 py-2'>
                                With an ERP, you can keep track of each of these individual steps by creating records in the HRM module for them.
                            </p>
                            <GetStartedButton />
                        </div>

                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 rounded shadow py-10 md:py-1'>
                            <img src="https://frappehr.com/files/job-offer.png" alt=""
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
                            <img src="https://frappehr.com/files/leave-app.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-3/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                🌟 Simplify Leave Management with 2lifi 🌟
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                Efficiently handle leave requests and schedules using our Enterprise system!
                                Customize leave types, set guidelines, and streamline the entire leave
                                application process. From managing maximum leave allowances to leave
                                encashment, our platform ensures smooth operations for your organization.
                                Keep track of compensatory leaves, additional leaves, holiday lists,
                                and leave block lists effortlessly. With a comprehensive leave ledger,
                                stay organized and informed about all leave-related transactions.
                                Empower your team with efficient leave management!
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
                                Manage Attendance & Shifts Efficiently!
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                Track employee attendance seamlessly with our Enterprise system.
                                Employees can mark their presence or submit attendance requests for
                                accurate updates. Shift management ensures consistent working hours
                                by rotating tasks among team members. Define shift types and let
                                employees request their preferred shifts. With our HRM module,
                                easily upload attendance data using the provided .CSV template.
                                Streamline your workforce management effortlessly!
                            </p>
                            <GetStartedButton />
                        </div>

                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 rounded shadow py-10 md:py-1'>
                            <img src="https://frappehr.com/files/attendance.png" alt=""
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
                            <img src="https://frappehr.com/files/salary-structure.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                The Lifecycle & Salary Journey 📈
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                From Onboarding to Separation - every step matters! 🚀 The employee lifecycle,
                                a journey through changes and growth, is crucial in our organization.
                            </p>
                            <div className='ml-2 md:ml-5'>
                                {
                                    empLifecycleContent.map((x: any, i: number) => <div key={i} className='py-2'>

                                        <p className='text-gray-500 text-sm '><span className='font-semibold text-gray-600'>{x.title}
                                        </span>: {x.subtitle}</p>
                                    </div>)
                                }
                            </div>
                            <p className='text-gray-500 py-2'>
                                We believe in nurturing talent at every stage, creating an environment where everyone can thrive!
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
                            className='w-full md:w-2/5 shadow rounded py-10 md:py-1'>
                            <img src="https://frappehr.com/files/salary-component.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-3/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Unlock the power of efficient payroll management
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                Optimize your payroll process with ERPNext! Ensuring timely and
                                accurate payments, our HRM module simplifies payroll management
                                by defining periods, income tax slabs, and salary structures
                                with earnings and deductions. Easily assign structures, generate
                                salary slips, and seamlessly book payments into your accounts.
                                Our system enables efficient bulk processing through payroll
                                entries, allowing adjustments based on attendance and timesheets
                                while setting cost centers for expenses. Manage additional
                                salaries like bonuses and incentives effortlessly. With
                                flexible benefit applications, employees can conveniently request
                                benefits within the ERP, enhancing HR efficiency.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>


            <section className='bg-gray-100'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <h1 className='text-2xl text-center md:text-6xl font-bold py-3 text-blue-600'>
                        Why choose 2lifi HR?
                    </h1>
                    <div className='grid grid-cols-3 gap-4 md:gap-10 py-10'>
                        {
                            hrmsFeatures.map((x: any, i: number) => <div key={i} className='py-3'
                            data-aos="fade-up"
                            data-aos-duration="500"
                            >
                                <div>
                                    <img src={x.img} alt=""
                                        className='h-8 w-8'
                                    />
                                    <h1 className='text-gray-700 font-semibold text-lg py-1 pt-3'>{x.title} </h1>
                                    <p className='text-gray-500'>{x.subtitle} </p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </section>


        </div>
    )
}
