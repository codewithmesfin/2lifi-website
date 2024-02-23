/* eslint-disable @next/next/no-img-element */
import GetStartedButton from '@/components/getStartedButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';




export default function App() {
  // #967ad6

  return (
    <div>
      <section className='bg-blue-600 pt-32 pb-16'>
        <div className='mx-auto max-w-[85%] '>
          <div className="md:flex md:spaxe-x-10 md:justify-between md:items-center">
            <div className='w-full md:w-[60%]'>
              <h1 className="font-normal text-white text-3xl md:text-4xl">
                Introducing 2lifi
              </h1>
              <p className="text-gray-200 pt-6 py-2">
                2lifi pioneers innovative initiatives aimed at implementing
                process automation and introducing Artificial Intelligence
                solutions to businesses based in Ethiopia.
              </p>
              <p className="text-gray-200 py-2">
                2lifi started by customizing the renowned open source
                projects <span className="font-extrabold">Frappe & ERPNext</span>
                and adding our own ingredients to make our products will act as a friendly
                solutions to the emerging businesses of any size.
              </p>
              <div className="mt-4 flex items-center space-x-3 md:space-x-10">

                <button className='px-6 shadow py-2 text-sm rounded bg-[#a278fe] hover:bg-[#7446d9] text-[#f4f7fd]'>
                  Get to know 2lifi
                </button>
                <button className='px-6 shadow py-2 text-sm rounded bg-[#475365] hover:bg-[#5d6a7d] text-[#f4f7fd]'>
                  Send feedback
                </button>
              </div>
            </div>
            <div className='hidden md:inline w-full md:w-[30%] flex justify-center'>
              <Image
                data-aos="fade-up"

                data-aos-duration="500"
                src="/p1.png" alt='logo' width={300} height={300} />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#e7f0fe] py-6'>
        <div className='mx-auto max-w-[90%]'>
          <p className='text-[#676c72] text-md'>
            2lifi is in Public Preview. Preview products and features might
            have limited support, and changes to Preview products and features
            might not be compatible with other Preview versions.
            For access to 2lifi, <Link href={"/join"} className='text-blue-600'>join the waitlist</Link>.
          </p>
        </div>
      </section>

      <section>
        <div className='mx-auto max-w-[85%] py-16'>
          <div className="md:flex md:items-center md:space-x-10">
            <div data-aos="fade-up"
              data-aos-duration="600" className='w-full md:w-3/5'>
              <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                Get to work quickly, wherever you are
              </h1>
              <p className='text-[#676c72] pt-4 py-2'>
                Stay productive from any location with 2lifi,
                the most intelligent AI-driven and customized ERPNext
                Enterprise Solutions available.
                2lifi is a simple to use and affordable solution to empowers modern
                businesses to stay productive on the go. Experience seamless
                operations whether {"you're"} in the office, remote, or on
                the move.
              </p>
              <GetStartedButton />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              className='w-full md:w-2/5'>
              <img src="https://i.pinimg.com/originals/75/95/2d/75952ddbecd4743baf83236395b20541.gif" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-gray-100'>
        <div className='mx-auto max-w-[85%] py-16'>
          <div className="md:flex md:items-center md:space-x-10">
            <div data-aos="fade-up"

              data-aos-duration="500" className='w-full md:w-2/6'>
              <img src="https://img.freepik.com/free-vector/data-extraction-concept-illustration_114360-4906.jpg?size=626&ext=jpg&ga=GA1.1.617832925.1708503188&semt=ais"
                alt="" />
            </div>
            <div data-aos="fade-up"
              data-aos-duration="500" className='w-full md:w-4/6 py-10 md:py-1'>
              <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                Workflows automation
              </h1>
              <p className='text-[#676c72] pt-4 py-2'>
                2lifi embodies streamlined automation and offers an extensive
                array of templates to enhance your business processes.
                With a focus on efficiency and simplicity,
                our solution automates repetitive tasks, streamlining your
                operations and saving valuable time.
                You can also <Link href="/customize-nix"
                  className='text-blue-600'
                >
                  customize 2lifi</Link> using our comprehensive library of templates provides customizable
                solutions for various business needs, enabling you to quickly
                adapt and scale as your requirements evolve.
              </p>
              <GetStartedButton />
            </div>

          </div>
        </div>
      </section>


      <section className='bg-blue-100'>
        <div className='mx-auto max-w-[85%] py-16'>
          <div data-aos="fade-up"

            data-aos-duration="500" className="md:flex md:items-center md:space-x-10">
            <div className='w-full md:w-3/5'>
              <h1 className='text-2xl md:text-4xl font-normal text-gray-900'>
                <span className='text-4xl md:text-8xl text-blue-600 font-extrabold'> 24</span> hours support
              </h1>
              <p className='text-gray-600 pt-4 py-2'>
                We provide round-the-clock support for 2lifi, ensuring assistance is
                available whenever you need it. Our support options include both
                AI-based, and personal support, tailored to suit your preferences
                and requirements. Whether you prefer automated solutions or direct
                assistance from our team, {"we're"} here to help you maximize the
                benefits of our Enterprise system at any time of the day.
                We assure <span className="font-bold">100%</span> the availabily of your system.
              </p>
              <GetStartedButton />
            </div>
            <div data-aos="fade-up"

              data-aos-duration="500" className='w-full md:w-2/5 py-10 md:py-1'>
              <img src="https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899134.jpg?size=626&ext=jpg&ga=GA1.2.617832925.1708503188&semt=ais" alt="" />
            </div>
          </div>
        </div>
      </section>


      <section className='bg-gray-100'>
        <div className='mx-auto max-w-[85%] py-16'>
          <div className="md:flex md:items-center md:space-x-10">
            <div data-aos="fade-up"

              data-aos-duration="500" className='w-full md:w-2/6'>
              <img src="https://img.freepik.com/free-vector/coach-speaking-before-audience-mentor-presenting-charts-reports-employees-meeting-business-training-seminar-conference-vector-illustration-presentation-lecture-education_74855-8294.jpg?size=626&ext=jpg&ga=GA1.1.617832925.1708503188&semt=sph"
                alt="" />
            </div>
            <div data-aos="fade-up"

              data-aos-duration="500" className='w-full md:w-4/6 py-10 md:py-1'>
              <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                Training
              </h1>
              <p className='text-[#676c72] pt-4 py-2'>
                We pride ourselves on providing exceptional training to our
                valued customers. Our comprehensive training covers everything
                from business perspectives to technical aspects of the Enterprise system.
                With professional documentation, user guides, video based manuals,
                and on-demand training options, we ensure that you have the
                resources and support you need to maximize the benefits of our
                ERP solution. Empower your team with the knowledge and skills
                necessary for seamless integration and optimal utilization of our system.
              </p>
              <GetStartedButton />
            </div>

          </div>
        </div>
      </section>


      <section className='bg-blue-100'>
        <div className='mx-auto max-w-[85%] py-16'>
          <div className="md:flex md:items-center md:space-x-10">
            <div data-aos="fade-up"
              data-aos-duration="500" className='w-full md:w-3/5'>
              <h1 className='text-2xl md:text-4xl font-normal text-gray-900'>
                Consultancy
              </h1>
              <p className='text-gray-600 pt-4 py-2'>

                2lifi {"isn't"} just a solution provider; {"it's"} your trusted ally.
                We go beyond providing an Enterprise software solution – we consult with our customers
                on technology updates, new business opportunities, innovations, and the
                adoption of Artificial Intelligence and Web3.0 based solutions.
                Our expert engineers are dedicated to constant innovation, working
                diligently to enhance and grow your business.
              </p>
              <GetStartedButton />
            </div>
            <div data-aos="fade-up"
              data-aos-duration="500" className='w-full md:w-2/5 py-10 md:py-1'>
              <img src="https://img.freepik.com/free-photo/side-view-businesswoman-showing-analytical-charts-her-male-coworker_1098-20620.jpg?size=626&ext=jpg&ga=GA1.1.617832925.1708503188&semt=sph" alt="" />
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}