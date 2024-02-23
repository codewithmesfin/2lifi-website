/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {

  Bars3Icon,

  XMarkIcon,
} from '@heroicons/react/24/outline'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'


const links = [
  { title: "Home", href: "/" },
  { title: "Products", href: "/products" },
  { title: "Industries", href: "/industries" },
  // { title: "Case Studies", href: "/case-studies" },
  { title: "Demos", href: "/demo" },
  { title: "Pricing", href: "/pricing" },
  { title: "Docs", href: "/docs" },
  { title: "Support", href: "/support" },
  { title: "Blog", href: "/blog" },
]



export default function PublicNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const {pathname}=useRouter()
  const isActiveTab=(arg:string)=>{
if(arg=="/") return pathname==arg;
else return pathname.includes(arg)
  }


  // #967ad6
  return (
    <header className="bg-blue-600 fixed w-full z-10">
      <nav className="mx-auto  flex max-w-[90%] items-center justify-between py-2 " aria-label="Global">
        <div className="w-full flex justify-between items-center md:space-x-4">
          <div>
            <div className="flex justify-start items-center md:space-x-8 lg:space-x-20">

              <div className="flex items-center space-x-2">
                <button
                  className="flex md:hidden rounded-md text-gray-100 mr-5"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
                <Link href="/"
                  className='flex items-center space-x-2'
                >
                  <Image src="/logo.png" alt='logo' width={40} height={40}
                    className='rounded-full'
                  />
                  <span className='text-2xl text-gray-100 font-semibold leading-6'>2lifi</span>
                </Link>

              </div>
              <div className='hidden md:flex space-x-10'>
                {
                  links.map((item, i) => <Link key={i} href={item.href}
                 
                    className={` text-sm ${isActiveTab(item.href)  ?"text-white font-semibold":"text-gray-200"} font-normal leading-6`}>
                    {item.title}
                  </Link>)
                }
              </div>
            </div>
          </div>
          <div className='flex items-center space-x-10'>
            <div className='hidden md:flex'>
              <Link href={"/dashboard"}
                className="text-sm text-white font-normal leading-6">
                2lifi Dashboard
              </Link>
            </div>
            <button className='bg-white shadow-lg text-sm rounded text-blue-600 px-5 py-2'>Sign in</button>
          </div>
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link onClick={() => setMobileMenuOpen(false)} href="/" className="-m-1.5 p-1.5">
              <div className="flex items-center space-x-2">
                <Link href="/">
                  <Image src="/logo.png" alt='logo' width={40} height={40}
                    className='rounded-full'
                  /></Link>
                <span className='text-2xl text-gray-600 font-semibold leading-6'>2lifi</span>
              </div>
            </Link>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 ">
              <div className="space-y-2 py-6">

                {
                  links.map((item, i) => <Link onClick={() => setMobileMenuOpen(false)} key={i}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.title}
                  </Link>)
                }

              </div>

            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
