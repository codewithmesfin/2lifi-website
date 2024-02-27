/* eslint-disable @next/next/no-img-element */
import GetStartedButton from '@/components/getStartedButton'
import lmsBenefits from '@/data/lmsBenefits'
import React from 'react'

export default function LMS() {
    return (
        <div>
            <section className='bg-blue-600'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  pt-32 pb-8 md:pb-16'>
                    <div className="md:flex md:items-center md:justify-between md:space-x-10">
                        <div className='w-full md:w-1/2'>

                            <h1 className="my-3 font-extrabold text-gray-200 text-white text-3xl md:text-7xl">
                                Learning Management System(LMS)
                            </h1>
                            <h1 className="text-gray-200 text-white text-3xl md:text-5xl pt-2">
                                For Enterprise Industry
                            </h1>
                            <div className="md:pt-4">
                                <GetStartedButton />
                            </div>
                        </div>
                        <div className='w-full rounded md:w-1/2 py-10 md:py-1'>
                            <img src="https://nestorbird.com/assets/images/educationimg.webp"
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
                                Introduction to {"2lifi's"} LMS
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                The widespread growth of the learning tech industry has led to increased
                                adoption of 2lifi LMS software across various sectors. From educational
                                institutions to corporate enterprises, ERPNext LMS streamlines course
                                management, performance tracking, and online examinations. With customizable
                                modules and user-friendly interfaces, NestorBird offers top-tier Cloud
                                2lifi LMS solutions tailored to government and private industries,
                                facilitating efficient learning management and monitoring in one
                                unified platform.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>



            <section className='bg-gray-100'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <h1 className='text-2xl py-5 text-center md:text-6xl font-extrabold text-gray-900'>
                        Benefits of 2lifi LMS Software
                    </h1>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="500"
                        className="py-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {
                            lmsBenefits.map((x: any, i: number) => <div key={i}
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="rounded-full p-1">
                                        <img src={x.img} alt="" className='h-12 w-12' />
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
                            Key Features of 2lifi LMS Software
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
                                Course Plan
                            </h1>
                            {
                                [
                                    "Create Course Categories",
                                    "Create Course Types",
                                    "Add Course Description",
                                    "Add Tutorial Video",
                                    "Integration with Assessment",
                                    "Authorized User Access"
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
                            <img src="https://nestorbird.com/assets/images/educationfeature1.webp" alt=""
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
                                src="https://nestorbird.com/assets/images/educationfeature2.webp"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Lesson Plan
                            </h1>
                            {
                                [
                                    'Create Lesson Plans',
                                    'Add Articles, Quizzes & Videos',
                                    'Curriculum Alignment',
                                    'Resource Allocation',
                                    'Integration with Assessments',
                                    'Authorized User Access'
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
                                Live Streaming
                            </h1>
                            {
                                [
                                    "Live Stream Sessions",
                                    "Interactive Q&A Sessions Screen Sharing",
                                    "Whiteboard and Annotation Tools",
                                    "Technical Support",
                                    "Third-party Integration",
                                    "Mobile Compatibility",
                                    "Chat and Messaging"
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
                            <img src="https://nestorbird.com/assets/images/educationfeature3.webp" alt=""
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
                                src="https://nestorbird.com/assets/images/educationfeature4.webp"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Schedule Management
                            </h1>
                            {
                                [
                                    "Course Scheduling",
                                    "Instructor Availability",
                                    "Student Enrollment",
                                    "Customizable Calendar",
                                    "Notifications and Reminders",
                                    "Integration with Calendar Apps"
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
                                Assessment
                            </h1>
                            {
                                [
                                    'Quiz Creation',
                                    'Assignment Management',
                                    'Peer Assessment',
                                    'Gradebook Management',
                                    'Course Completion Score'
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
                            <img src="https://nestorbird.com/assets/images/educationfeature5.webp" alt=""
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
                                src="https://nestorbird.com/assets/images/educationfeature6.webp"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Subscriptions
                            </h1>
                            {
                                [
                                    "Subscription Plans",
                                    "Automated Renewals",
                                    "Trial Periods",
                                    "Discounts and Promotions",
                                    "Payment Gateways Integration",
                                    "Invoice Generation"
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
                                Notifications
                            </h1>
                            {
                                [
                                    'Customizable Notifications',
                                    'Real-Time Notifications',
                                    'Multi-channel Delivery',
                                    'Scheduled Notifications',
                                    'Personalized Notifications',
                                    'Notification Logs',
                                    'Two-way Communication'
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
                            <img src="https://nestorbird.com/assets/images/educationfeature7.webp" alt=""
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
                                src="https://nestorbird.com/assets/images/educationfeature8.webp"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Student Interaction
                            </h1>
                            {
                                [
                                    'Connect with Students',
                                    'Course Instructors',
                                    'Discussion Section',
                                    'Raise Queries',
                                    'Provide Resolution'
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
                                Remote Access Capabilities
                            </h1>
                            {
                                [
                                    "Course Structure and Overview",
                                    "Online Learning Programs",
                                    "Online Assessment",
                                    "Progress Tracking",
                                    "Enhanced Interaction"
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
                            <img src="https://nestorbird.com/assets/images/educationfeature9.webp" alt=""
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
                                src="https://nestorbird.com/assets/images/educationfeature10.webp"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                User Friendly UI
                            </h1>
                            {
                                [
                                    'Easy to use Interface',
                                    'Course Scheduling and Monitoring',
                                    'Online Attendance',
                                    'Fast Access to Online Course Videos',
                                    'Easy Online Payment Option'
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
                        2lifi LMS Modules
                    </h1>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-5'
                        >

                            {
                                [
                                    "Course Management",
                                    "Enrollment and Registration",
                                    "Content Management",
                                    "User Management",
                                    "Progress Tracking & Reporting",
                                    "Assessment and Quiz",
                                    "Discussion Forum",
                                    "Certification Management",
                                    "Resource Library"
                                ].map((x: any, i: number) => <div key={i} className='flex w-full space-x-2'>
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
