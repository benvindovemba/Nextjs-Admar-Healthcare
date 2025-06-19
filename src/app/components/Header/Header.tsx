'use client'

import { useState } from 'react'
import Image from 'next/image'
{/* **************** headlessui ******************* */}
import {
  Button,
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
{/* **************** heroicons ******************* */}
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  ShoppingBagIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
{/* **************** heroicons solid ******************* */}
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
{/* **************** products ******************* */}
const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
{/* **************** callsToAction ******************* */}
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]
{/* **************** Header start ******************* */}
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='bg-gray-100'>
      <header className="container">
        <nav aria-label="Global" 
        className="flex items-center justify-between py-5 px-4 md:px-6 lg:px-[60px]"
        >
          {/* ******************************************************** */}
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Admar Homecare</span>
              <Image
                alt="Logo da Admar Homecare"
                src="/admar/logo.png"
                //className="h-50 w-auto"
              width={65}
              height={45} 
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        {/* ******************************************************** */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              <a href="Banner" className="text-lg font-medium leading-6 text-gray-900" data-aos="fade-left" data-aos-duration="1000"
                        data-aos-easing="ease-out-back">
                Home
              </a>
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />

            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
               
          <a href="#about-us" 
              className="text-lg font-medium leading-6 text-gray-900 hover:text-blue-600 transition-colors"
              onClick={(e) => {
              e.preventDefault();
              document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" });
               }}
               data-aos="fade-left" data-aos-duration="1200" data-aos-easing="ease-out-back"
          >
            Sobre nós
          </a>
          <a href="#" className="text-lg font-medium leading-6 text-gray-900" data-aos="fade-left" data-aos-duration="1400"
                        data-aos-easing="ease-out-back">
            Serviços
          </a>
          <a href="#" className="text-lg font-medium leading-6 text-gray-900" data-aos="fade-left" data-aos-duration="1600"
                        data-aos-easing="ease-out-back">
            Contacto
          </a>
        </PopoverGroup>
        {/* ******************************************************** */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-5">
          <a href="#" className="text-xl font-semibold leading-6 text-gray-900">
              <button className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full shadow-lg hover:scale-105 transition-all">
                Log in
              </button> 
          </a>  
        </div> 
        {/* ******************************************************** */}
      </nav>
      {/* ********************** Mobile menu ********************** */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Admar Homecare</span>
              <Image
                alt="Logo da Admar Homecare"
                src="/admar/img.png"
                //className="h-50 w-auto"
                width={65}
                height={45} 
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Home
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#about-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" });
                  setMobileMenuOpen(false); // Fecha o menu mobile após clicar
                  }}
                  >
                    Sobre nós
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Serviços
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contacto
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                </a>
                <button className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full">
                  Log in
                </button> 
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      {/* ************************************* */}
    </header>
    </div>
  )
};
{
  /* **************** Header end ******************* */
}
export default Header;
