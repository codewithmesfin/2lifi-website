/* eslint-disable @next/next/no-img-element */
import GetStartedButton from '@/components/getStartedButton'
import React from 'react'

export default function Communication() {
    return (
        <div>
            <section className='bg-blue-600'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  pt-32 pb-8 md:pb-16'>
                    <div className="md:flex md:items-center md:justify-between md:space-x-10">
                        <div className='w-full md:w-1/2'>

                            <h1 className="my-3 font-extrabold text-gray-200 text-white text-3xl md:text-7xl">
                                A Document Management System within 2lifi
                            </h1>

                            <div className="md:pt-4">
                                <GetStartedButton />
                            </div>
                        </div>
                        <div className='w-full rounded md:w-1/2 py-10 md:py-1'>
                            <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127818.jpg?t=st=1708950471~exp=1708954071~hmac=2d887a4c0012742beae460ca243a405b2ef89f618fd0ff758237af6a6479420c&w=1800"
                                alt=""
                                className='rounded w-full f-hull'
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
                            <img src="https://frappe.io/files/dms.gif" alt=""
                                className='object-contain rounded h-full max-h-[350px] w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                2lifi File Manager
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                There is no end to how many features you can put within 2lifi,
                                so last week we added another nice tool in ERPNext, a simple
                                document management system. <br />
                                Most companies (including ours) have documents that need to be
                                archived somewhere. While it is easy to add attachments to transactions
                                like bills or expense claims, there are many other documents
                                that are managed in a semi-structured way. These could be: <br />
                                <span className="text-gray-900">
                                    Contracts, Pictures, Company policies, Statutory documents, and
                                    Company documents like share certificates etc
                                </span>
                            </p>
                            <GetStartedButton />
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
                            className='w-full md:w-2/5 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Manage files easily
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                These should be easily manageable in a simple folder
                                structure and that was our goal while building the
                                document management system. In implementation, there were
                                two main strategies: Build a new folder interface from scratch
                                Use the existing Frappe feature set like lists, starring and
                                sharing that is available with documents. Keeping our philosophy
                                of maximum code re-use, we decided on the latter.
                            </p>

                            <GetStartedButton />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full  rounded md:w-3/5 '>
                            <p className='text-[#676c72] pt-4 py-2'>Here is the result of the figure above:</p>
                            {
                                [
                                    "We renamed File Data to File (long overdue)",
                                    "We defined that a File record could be a folder (check box 'Is Folder')",
                                    "We created a Home folder, the root of all files, and a Home/Attachments folder, the folder where all attachments will be saved",
                                    "We tweaked the list view such that, if a folder is clicked, it opens up the folder, i.e. shows the contents in the list",
                                    "We created a breadcrumb to show the folder you are on currently.",
                                    "We created custom menus to copy and paste fields and folders.",
                                    "For permissions, we decided that the File will be visible by default only to System Managers and the owner. If the owner decides to share it, it will be visible to other users. You can also Share with Everyone to make it visible to everyone."
                                ].map((x: any, i: number) => <div key={i}>
                                    <div className="flex ml-2 md:ml-5 space-x-3">
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
                                        <p className='text-[#676c72] py-1'>{x} </p>
                                    </div>
                                </div>)
                            }

                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}
