/* eslint-disable @next/next/no-img-element */
import GetStartedButton from '@/components/getStartedButton'
import React from 'react'

export default function Chatbot() {
    return (
        <div>
            <section className='bg-blue-600'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  pt-32 pb-8 md:pb-16'>
                    <div className="md:flex md:items-center md:justify-between md:space-x-10">
                        <div className='w-full md:w-1/2'>

                            <h1 className="my-3 font-extrabold text-gray-200 text-white text-3xl md:text-7xl">
                                Upgrade your productivity with Generative AI
                            </h1>

                            <div className="md:pt-4">
                                <GetStartedButton />
                            </div>
                        </div>
                        <div className='w-full rounded md:w-1/2 py-10 md:py-1'>
                            <img src="https://img.freepik.com/free-photo/person-using-ai-tool-job_23-2150714249.jpg?t=st=1708952037~exp=1708955637~hmac=93d44fbf1de71409b7284089a90af157de4f54d9bcd0aa2f0162887a4b18fe2a&w=1800"
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
                            <img src="https://img.freepik.com/free-vector/ai-powered-content-creation-isometric-composition-with-human-characters-cute-robot-generating-art-computer-screen-3d-vector-illustration_1284-82522.jpg?t=st=1708952080~exp=1708955680~hmac=5791d844f3e3edb01def56530754bd23f02a3733ee5622af58f65d05c0a39d9a&w=1480" alt=""
                                className='object-contain rounded h-full max-h-[350px] w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Introduction to {"2lifi's"} AI helper
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Welcome to 2lifi, your ultimate AI-powered Chatbot app designed to
                                revolutionize content generation. Harnessing the power of generative AI,
                                2lifi empowers users to effortlessly create a wide range of content,
                                from email templates to business and project proposals. With its
                                intuitive interface and advanced capabilities, 2lifi is your go-to
                                solution for generating personalized and professional
                                content in no time.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>

            <section className='bg-gray-100'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Features
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                Discover the remarkable features that make 2lifi a game-changer in
                                content generation. With 2lifi, users can leverage generative AI technology
                                to draft email templates, craft compelling business and project
                                proposals, and receive instant answers to their questions. Whether
                                {"you're"} a marketer, entrepreneur, or student, 2lifi streamlines the
                                content creation process, saving you time and effort while ensuring
                                high-quality results
                            </p>

                            <GetStartedButton />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 rounded py-10 md:py-1'>
                            <img src="https://img.freepik.com/free-vector/web-development-isometric-concept-infographics-composition-with-platforms-text-captions-people-characters-icons-screens-illustration_1284-60242.jpg?t=st=1708952080~exp=1708955680~hmac=9235352ba3af87108917081a07e8488c03c61d4bd3ccf43f6290203b72937ddd&w=1800" alt=""
                                className='object-cover rounded h-full w-full'
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
                            <img src="https://img.freepik.com/free-vector/wireframe-robot-ai-artificial-intelligence-form-cyborg-bot-brain-robotic-hand-digital-brain_127544-850.jpg?t=st=1708952264~exp=1708955864~hmac=3e8813ba9df8f9b91d63f264f827bab7154e1faceff00174525bbee9b84fc6a4&w=2000" alt=""
                                className='object-contain rounded h-full max-h-[350px] w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Versatility and Customization
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Experience unparalleled versatility and customization with 2lifi.
                                Our AI Chatbot app adapts to your unique needs, allowing you to
                                generate any type of personalized content with ease. Whether {"you're"}
                                drafting marketing materials, academic essays, or professional reports,
                                2lifi provides the tools and flexibility you need to tailor content
                                to your specific requirements. With customizable templates and intelligent
                                algorithms, 2lifi ensures that every piece of content reflects your
                                individual style and objectives.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>


            <section className='bg-gray-100'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Seamless Integration and Accessibility
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                Seamlessly integrate 2lifi into your workflow and access its
                                powerful features anytime, anywhere. Whether {"you're"} on your desktop,
                                tablet, or mobile device, 2lifi is accessible wherever you go, ensuring
                                productivity and efficiency on the go. With its user-friendly
                                interface and intuitive design, 2lifi makes content generation
                                effortless, allowing you to focus on what matters most—bringing
                                your ideas to life.
                            </p>

                            <h1 className='mt-3 text-2xl md:text-4xl font-normal text-blue-600'>
                                Unlock the Potential of AI with 2lifi
                            </h1>
                            <p className='text-gray-500 pt-4 py-2'>
                                Join the growing community of users who have unlocked the potential
                                of AI with 2lifi. Say goodbye to {"writer's"} block and hello to limitless
                                creativity with our innovative Chatbot app. Whether {"you're"} a seasoned
                                professional or just getting started, 2lifi empowers you to create compelling
                                content that captivates your audience and drives results. Experience the
                                future of content generation with 2lifi and unlock new possibilities for
                                success.
                            </p>

                            <GetStartedButton />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2  rounded-full py-10 md:py-1'>
                            <img src="https://img.freepik.com/free-vector/head-with-ai-chip_78370-3672.jpg?w=1380" alt=""
                                className='object-cover rounded-full h-full w-full'
                            />
                        </div>

                    </div>
                </div>
            </section>




        </div>
    )
}
