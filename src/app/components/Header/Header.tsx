'use client'

import { useState } from 'react'
{/* ************ headlessui ************** */}
import {
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
{/* ************ heroicons ************** */}
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  PuzzlePieceIcon,
  SquaresPlusIcon,
  XMarkIcon,
  CalendarDateRangeIcon,
  CameraIcon,
  ChatBubbleLeftRightIcon,
  DocumentPlusIcon,
  DocumentTextIcon,
  EnvelopeOpenIcon,
  HomeModernIcon,
  InformationCircleIcon,
  NewspaperIcon,
  NumberedListIcon,
  PhoneIcon,
  PlayCircleIcon,
  UserGroupIcon,
  FaceSmileIcon,
  SparklesIcon,
  CursorArrowRippleIcon,
  ArrowRightEndOnRectangleIcon,
} from '@heroicons/react/24/outline'
{/* ************ heroicons solid icons ************** */}
import { ChevronDownIcon, HomeIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { AccessibilityIcon, ArrowRight, Camera, HospitalIcon, InfoIcon, SaladIcon, ShowerHeadIcon, SparkleIcon, TelescopeIcon, User } from 'lucide-react'

{/* ************ About Us and calls to action ************** */}
const about = [
  { name: 'Quem Somos', description: 'Saiba mais sobre a nossa empresa', href: '/site/about-us', icon: TelescopeIcon },
  { name: 'Nossa Equipe', description: 'Conheça as pessoas por trás do nosso sucesso', href: '/site/doctor', icon: UserGroupIcon },
  { name: 'Notícias', description: 'Leia nossos artigos e fique por dentro das novidades', href: '/site/blogs', icon: NewspaperIcon },
  { name: 'Galeria', description: 'Explore nossa galeria de imagens', href: '/site/gallery', icon: CameraIcon},
  { name: 'Testemunhos', description: 'Veja o que nossos clientes dizem sobre nós', href: '/site/testimonials', icon: ChatBubbleLeftRightIcon },
  { name: 'Agendamentos', description: 'Agende uma consulta conosco', href: '/site/appointment', icon: CalendarDateRangeIcon },
  { name: 'Política de Privacidade', description: 'Saiba mais sobre nossa política de privacidade', href: '/privacy-policy', icon: FingerPrintIcon },
  { name: 'Contacte-nos', description: 'Entre em contato conosco', href: '/site/contact', icon: EnvelopeOpenIcon },
]

{/* ************ Services and calls to action ************** */}
const services = [
  { name: 'Cuidados Domiciliares', description: 'Serviços de cuidados a idosos e pessoas com mobilidade reduzida', href: '/site/service?especialidade=Geriatria', icon: HomeModernIcon },
  { name: 'Acompanhamento Médico', description: 'Serviços de acompanhamento médico para pacientes em casa', href: '/site/service?especialidade=Medicina Preventiva', icon: HospitalIcon },
  { name: 'Fisioterapia Geriátrica', description: 'Fisioterapia especializada para idosos', href: '/site/service?especialidade=Fisioterapia', icon: AccessibilityIcon},
  { name: 'Apoio Psicológico', description: 'Apoio psicológico para pacientes e familiares', href: '/site/service?especialidade=Psicologia', icon: PuzzlePieceIcon },
  { name: 'Alimentação e Nutrição', description: 'Orientação nutricional para uma vida saudável', href: '/site/service?especialidade=Nutrição', icon: SaladIcon},
  { name: 'Higiene e Bem - Estar', description: 'Serviços voltados para conforto e autoestima', href: '/site/service?especialidade=Cuidador', icon: ShowerHeadIcon},


]

{/* ************ calls to action ************** */}
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Nosso contacto', href: '+244921000000', icon: PhoneIcon },
  /*{ name: 'whatsApp', href: '+244921000000', icon: FaWhatsapp }, 
   { name: 'Facebook', href: 'https://facebook.com/sua-pagina', icon: FaFacebookF},
  { name: 'Instagram', href: 'https://instagram.com/seu-perfil', icon: FaInstagram }, */
]
{/* ************ header component ************** */}
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative bg-gray-50 overflow-hidden">
    <header className="fixed top-0 left-0 w-full z-50  shadow-accent">
      <nav aria-label="Global" className="flex items-center justify-between py-6 px-4 md:px-6 lg:px-12">
        {/* ************ logo ************** */}
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Admar Homecare Professional</span>
            <img
              alt="Logo Admar Homecare Professional"
              src="/admar/logo.png"
              className="h-10 w-auto"
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
        {/* ************ desktop menu ************** */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {/* ************ home link ************** */}
          <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors" 
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-out-back">
            <HomeIcon className="w-5 h-5" aria-hidden="true" /> 
            Home
          </a>
          
          {/* ************ about us popover ************** */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900" 
            data-aos="fade-left"
            data-aos-duration="1400"
            data-aos-easing="ease-out-back">
              Sobre Admar
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {about.map((item) => (
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

          {/* ************ services popover ************** */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900"
            data-aos="fade-left"
            data-aos-duration="1600"
            data-aos-easing="ease-out-back">
              Nossos Serviços
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {services.map((item) => (
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
          
        </PopoverGroup>
        {/* ************ login link ************** */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-5">
          <Link href="/site/authlayout/login">
            <button className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-md shadow-lg hover:scale-105 transition-all gap-1">
              Log in  
              <ArrowRightEndOnRectangleIcon className='w-5 h-5' aria-hidden="true"/>
            </button>
          </Link>
        </div> 
        {/* ************ mobile menu button ************** */}
      </nav>
      {/* ************ mobile menu dialog ************** */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Admar Homecare Professional</span>
              <img
                alt="Logo Admar Homecare Professional"
                src="/admar/logo.png"
                className="h-8 w-auto"
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
                <a href="/" 
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  Home
                </a>

                {/* ************ about us disclosure ************** */}
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Sobre nós
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...about, ...callsToAction].map((item) => (
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
              
                {/* ************ services disclosure ************** */}
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                      Serviços
                      <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                    </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...services, ...callsToAction].map((item) => (
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
              </div>
              <div className="py-6">
                <Link href="/site/authlayout/login">
                  <button className="w-full bg-gradient-to-r inline-flex items-center justify-center from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-10 rounded-md shadow-lg hover:scale-105 transition-all gap-1">
                    Log in 
                    <ArrowRightEndOnRectangleIcon className='w-5 h-5' aria-hidden="true"/>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      {/* ************ end of mobile menu dialog ************** */}
    </header>
    </div>
  );
  {/* ************ header component end ************** */}
};
export default Header;
