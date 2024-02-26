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
                                G A M E P L A N
                            </h1>
                            <h1 className="text-gray-200 text-white text-xl md:text-3xl">
                                Delightful, open-source, work communication tool for remote teams
                            </h1>
                            <div className="md:pt-4">
                                <GetStartedButton />
                            </div>
                        </div>
                        <div className='w-full rounded md:w-1/2 py-10 md:py-1'>
                            <img src="https://user-images.githubusercontent.com/9355208/190922102-daff8e9f-e34f-4129-a520-dcf834e92958.png"
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
                            <img src="https://user-images.githubusercontent.com/9355208/190922154-e5bdb690-57d3-4024-9143-9d009894b035.png" alt=""
                                className='object-contain rounded h-full max-h-[350px] w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                What is Gameplan ?
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Gameplan is a work communication tool for teams who mostly work remote
                                and prefer having meaningful discussions in an async format.
                                We built it for ourselves because we were finding it difficult to keep
                                track of so many conversations in our chat tool. Chat forces you to be
                                online all the time and {"doesn't"} really have any concept of threaded discussions.
                                Gameplan allows you to categorize your discussions around projects and teams.
                                It also doubles up as your {"team's"} knowledge archive. You can surface
                                important information and conclusions from your discussions into the {"readme's"}
                                of your projects and teams.
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
                                <span className="font-bold">G A M E P L A N: </span> Features
                            </h1>
                            <div className="py-5">
                            {
                                [
                                    "Organize discussions into projects which in turn are part of a team 🗄",
                                    "Surface important information for your project and team in the Readme 📝",
                                   "Simple layout that optimizes readability of discussions 🤓",
                                    "Customize your Team and Project with emojis 💅🏻",
                                    "People directory with each person's profile page 👨‍👩‍👧‍👦",
                                    'Set cover image, profile photo, short bio and a "About me" section 🦹🏼‍♀️',
                                    "Powerful search capabilities to find older discussions 🔍",
                                    "A common discussions feed that shows discussions from across projects and teams 📚",
                                   " Delightful user-experience in overall usage ✨"
                                ]
                                .map((x:any,i:number)=><div key={i}>
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
                            <GetStartedButton />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full  rounded md:w-3/5 '>
                            <img src="https://user-images.githubusercontent.com/9355208/190922161-61eb1cd7-a56a-4460-bc7f-d6c24d1c2df7.png" alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}
