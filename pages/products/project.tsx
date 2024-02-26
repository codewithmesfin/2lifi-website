/* eslint-disable @next/next/no-img-element */
import GetStartedButton from '@/components/getStartedButton'
import posFeatures from '@/data/posFeatures'

import Link from 'next/link'
import React from 'react'

export default function Project() {
    return (
        <div>
            <section className='bg-blue-600'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  pt-32 pb-8 md:pb-16'>
                    <div className="md:flex md:items-center md:justify-between md:space-x-10">
                        <div className='w-full md:w-1/2'>
                            <h1 className="text-gray-200 text-white text-3xl md:text-5xl">
                                Upgrade your work style with
                            </h1>
                            <h1 className="my-3 font-extrabold text-gray-200 text-white text-3xl md:text-7xl">
                                2lifi Project Management
                            </h1>
                            <h1 className="text-gray-200 text-white text-3xl md:text-5xl">
                                Smart Software Solution
                            </h1>
                            <div className="pt-4">
                                <GetStartedButton />
                            </div>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <img
                                src="https://img.freepik.com/free-photo/young-businesswoman-working-with-statistics-charts-computer-monitor-analyzing-company-data-paperwork-using-online-information-create-research-report-before-deadline-night-after-hours_482257-44737.jpg?t=st=1708934497~exp=1708938097~hmac=49ae0f77f40c3ff69edd6ac8fe4f09fcf48d4a19fc36c52a1d9d779213fe16f1&w=1800"
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
                            className='w-full md:w-2/5'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                All-In-One Workspace
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                Organize, schedule, plan and analyze projects with a task-driven
                                approach that will streamline team collaboration and accelerate
                                your work. <br />
                                Keep track of project deadlines and progress with a clear overview.
                                Plan ahead for upcoming projects, using forecasts based on comparable
                                projects, and estimate deadlines more accurately.
                            </p>
                            <GetStartedButton />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-3/5 shadow rounded py-10 md:py-1'>
                            <img src="https://erpnext.com/files/projects-task-kanban.png" alt=""
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
                            <img src="https://erpnext.com/files/all-in-onef7f200.png" alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2  py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Agile
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                Discover the task-driven approach to simplifying your projects.
                                With minimal communication gaps and full transparency, 2lifi makes
                                it easier to share and collaborate across the entire project team.
                                Break down your project into bite-sized tasks and assign them to
                                your team for improved collaboration. Assess project progress and
                                efficiency with clear scope and priorities, estimated timelines,
                                and milestones.
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
                                To-Do List & Real-Time Chat
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                Make work life easier with this simple, flexible project management software.
                                Create and assign tasks to your employees. The system will automatically
                                add the tasks in their to-dos to keep assignments and task-tracking
                                hassle-free. And with mentions and real-time chat, {"there's"} no
                                need to bring external chats into internal communication.
                            </p>
                            <GetStartedButton />
                        </div>

                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-3/5 rounded shadow py-10 md:py-1'>
                            <img src="https://erpnext.com/files/todos-and-chat84a45b.png" alt=""
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
                            <img src="https://erpnext.com/files/sp-documents-storage.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5  py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Document Storage
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                Managing projects and all their documents can be tricky, and
                                {"it's"} crucial that everyone can access important files.
                                2lifi lets you upload and share multimedia files (such as images,
                                videos, documents). You can choose to upload the files directly
                                or use a web link.
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
                                Emails
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                Avoid stranding important emails by syncing your email accounts in 2lifi.
                                With a unified trail of all correspondence and auto-replies for
                                incoming emails, you can count on smooth communication with all
                                stakeholders (be it the internal project team
                                members or external clients).
                            </p>
                            <GetStartedButton />
                        </div>

                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 rounded shadow py-10 md:py-1'>
                            <img src="https://erpnext.com/files/sp-email.png" alt=""
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
                            <img src="https://erpnext.com/files/budget-variance-report.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5  py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Profitability Analysis
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                Stay on top of project budgets and expenses with accurate,
                                current insights. Plan the cost for each project phase, allocate
                                budgets against projects, and see how much of your allocated
                                budget has been spent — all at a glance.
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
                                Time-Tracking & Billing
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                Simplify tracking by defining actionable items — the activities
                                for projects and tasks, based on what needs to be done.
                                Capture resource costs and billing to get insights on project
                                profitability. Directly link work to payroll to
                                process salaries instantly.
                            </p>
                            <GetStartedButton />
                        </div>

                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/3 rounded shadow py-10 md:py-1'>
                            <img src="https://erpnext.com/files/project-billing-summary.png" alt=""
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
                            <img src="https://erpnext.com/files/customer-accessef27fc.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2  py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Customer Access
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                If you work with clients, {"you'll"} love 2lifi.
                                Get everything on the record with your clients and your team.
                                Using 2lifi, clients can not only view project status but also
                                raise support issues, scan invoices billed, and so on.
                                You can also use it for announcements as well!
                                Give your customers a full-fledged, flawless experience while
                                they await the delivery of your services.
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
                            className='w-full md:w-2/5 '>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                On-The-Fly-Customizations
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                            Create your own open source project management software. 
                            Map your most important data by adding custom fields in your forms. 
                            Customize form behavior by auto-fetching values, hide fields based 
                            on user roles, and create custom print formats all without a 
                            single line of code.
                            </p>
                            <GetStartedButton />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-3/5 shadow rounded py-10 md:py-1'>
                            <img src="https://erpnext.com/files/customize-project.png" alt=""
                                className='object-cover rounded-xl h-full w-full'
                            />
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}
