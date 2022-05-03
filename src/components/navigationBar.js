import { Fragment } from 'react';
import {GiRank3, GiTwoCoins} from 'react-icons/gi'
import {FaIcons} from 'react-icons/fa'
import Link from 'next/link'
import {CgListTree} from 'react-icons/cg'
import {MdLogin} from 'react-icons/md'
import {TiThListOutline} from 'react-icons/ti'
import {FiChevronDown} from 'react-icons/fi'
import {BsTools} from 'react-icons/bs'
import {HiOutlineUserCircle,HiOutlineMenuAlt2,HiOutlineDocumentText} from 'react-icons/hi'
import {BsListNested,BsCurrencyExchange} from 'react-icons/bs'
import { Popover, Transition } from '@headlessui/react'

function NavigationBar() {
    const primary_menu = [
        {
            left:[
                {
                    name: 'Cryptocurrencies',
                    icon: GiTwoCoins,
                    has_popover : true,
                    popover_menu : [
                        {
                            name: 'Rankings',
                            description: "Coin ranking based on Coin's price, 24h Volumn, 7d performance & more",
                            href: '##',
                            icon: GiRank3,
                            icon_bg_class: 'bg-sky-100',
                            icon_color_class: 'text-sky-500 group-hover:shadow-lg group-hover:bg-sky-400 group-hover:text-white group-hover:shadow-sky-200 transition duration-150 ease-in-out'
                          },
                          {
                            name: 'Categories',
                            description: 'Coin categories based on blockchain, token used for, types & more',
                            href: '##',
                            icon: CgListTree,
                            icon_bg_class: 'bg-orange-100',
                            icon_color_class: 'text-orange-500 group-hover:shadow-lg group-hover:bg-orange-400 group-hover:text-white group-hover:shadow-orange-200 transition duration-150 ease-in-out'
                          },
                    ]
                }
            ],
            right:[
                {
                    name: 'Cryptocurrencies',
                    icon: GiTwoCoins,
                    has_popover : true,
                    popover_menu : [
                        {
                            name: 'Insights',
                            description: 'Measure actions your users take',
                            href: '##',
                            icon: BsTools,
                            icon_bg_class: 'bg-blue-100',
                            icon_color_class: 'text-blue-500'
                          },
                          {
                            name: 'Automations',
                            description: 'Create your own targeted content',
                            href: '##',
                            icon: BsTools,
                            icon_bg_class: 'bg-teal-100',
                            icon_color_class: 'text-teal-500'
                          },
                          {
                            name: 'Reports',
                            description: 'Keep track of your growth',
                            href: '##',
                            icon: BsTools,
                            icon_bg_class: 'bg-purple-100',
                            icon_color_class: 'text-purple-500'
                          },
                    ]
                }
            ]
        }
    ]
    return(
       <>
       <div className="bg-slate-100 border-b w-full h-16">
            <div className="flex flex-row container mx-auto h-full">
                <div className="mr-auto flex flex-row h-full items-center justify-start">
                  Coinpascal Logo
                    <div className='mx-4 flex gap-2 flex-row items-center justify-start'>
                        <div className='flex bg-white shadow-md shadow-gray-300 items-center justify-start border px-2 rounded' href={''}>
                            Market <div className='border-l-2 h-5 mx-[6px] rotate-[15deg]'></div>  Analytics
                        </div>
                        <div className='flex items-center justify-start border px-2 rounded' href={''}>
                            News <div className='border-l-2 h-5 mx-[6px] rotate-[15deg]'></div>  Updates
                        </div>
                        <div className='flex items-center justify-start border px-1 py-[2px] rounded' href={''}>
                            <HiOutlineMenuAlt2 className='text-xl'/>
                        </div>
                    </div>
                </div>
                <div className="ml-auto flex flex-row h-full items-center justify-start">
                <div href={'/auth'}>
                    <button type="button" className='bg-gradient-to-r hover:shadow-lg hover:shadow-orange-300 from-orange-400 duration-150 group to-red-500 rounded-lg rounded-r-none'>
                        <div className='flex flex-row items-center gap-1 bg-white m-[2px] mr-0 rounded-r-none group-hover:bg-transparent group-hover:text-white rounded-md px-2 py-[2px]'>
                            <MdLogin />Login
                        </div>
                    </button> 
                    </div>                     
                    <div className='border-l-2 h-10 mx-[2px]'></div> 
                    <div href={'/auth/create-account'}>
                    <button className='bg-gradient-to-r hover:shadow-lg hover:shadow-red-300 from-red-500 duration-150 group to-orange-400 rounded-lg rounded-l-none'>
                        <div className='flex flex-row items-center gap-1 bg-white m-[2px] ml-0 rounded-l-none group-hover:bg-transparent group-hover:text-white rounded-md px-2 py-[2px]'>
                            <HiOutlineUserCircle />Create Account
                        </div>
                    </button>  
                    </div> 
                </div>
            </div>
        </div>
        <div className="bg-slate-50 border-b w-full h-10 shadow-xl shadow-gray-100">
            <div className="flex flex-row container mx-auto h-full">
            {primary_menu.map((menuside) => (<>
                <div className="mr-auto flex flex-row h-full items-center justify-start">
                <span className='mr-2 text-gray-400'>Browse : </span>
                 {menuside.left.map((menu)=>(<>
                    {menu.has_popover ? 
                    <Popover className="relative">
                    {({ open }) => (
                    <>
                        <Popover.Button
                        className={`
                            ${open ? 'text-gray-800' : 'text-gray-600'}
                            mr-6 flex flex-row items-center gap-1 text-gray-600 hover:text-gray-800 transition ease-in-out duration-200`}
                        >
                        <menu.icon className={`${open ? 'text-orange-400' : 'text-gray-600'} text-base transition ease-in-out duration-200`} />{menu.name}
                        <FiChevronDown
                            className={`${open ? 'text-gray-800 rotate-180' : 'text-gray-600'}
                            text-base text-gray-600 group-hover:text-gray-800 transition ease-in-out duration-200`}
                            aria-hidden="true"
                        />
                        </Popover.Button>
                        <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                        >
                        <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-4 transform sm:px-0 lg:max-w-3xl">
                            <div className="overflow-hidden rounded-lg shadow-xl shadow-gray-100 ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                {menu.popover_menu.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center p-2 -m-3 transition group duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                >
                                    <div className={`${item.icon_bg_class} ${item.icon_color_class} flex items-center justify-center text-xl flex-shrink-0 w-10 h-10 rounded-lg sm:h-12 sm:w-12`}>
                                        <item.icon/>
                                    </div>
                                    <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-900">
                                        {item.name}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {item.description}
                                    </p>
                                    </div>
                                </a>
                                ))}
                            </div>
                            <div className="p-4 bg-gray-50">
                                <a
                                href="##"
                                className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                >
                                <span className="flex items-center">
                                    <span className="text-sm font-medium text-gray-900">
                                    Documentation
                                    </span>
                                </span>
                                <span className="block text-sm text-gray-500">
                                    Start integrating products and tools
                                </span>
                                </a>
                            </div>
                            </div>
                        </Popover.Panel>
                        </Transition>
                    </>
                    )}
                </Popover>
                    : 
                    <div className='mr-6 flex flex-row items-center gap-1 text-gray-600 hover:text-gray-800 duration-200'><TiThListOutline className='text-base' />Products</div>   
                    }
                 </>))}
                </div>
                <div className="ml-auto flex flex-row h-full items-center justify-start">
                 {menuside.right.map((menu)=>(<>
                    {menu.has_popover ? 
                    <Popover className="relative" key={menu.name}>
                    {({ open }) => (
                    <>
                        <Popover.Button
                        className={`
                            ${open ? 'text-gray-800' : 'text-gray-600'}
                            mr-6 flex flex-row items-center gap-1 text-gray-600 hover:text-gray-800 transition ease-in-out duration-200`}
                        >
                        <menu.icon className={`${open ? 'text-orange-400' : 'text-gray-600'} text-base transition ease-in-out duration-200`} />
                        <span>{menu.name}</span>
                        <FiChevronDown
                            className={`${open ? 'text-gray-800 rotate-180' : 'text-gray-600'}
                            text-base text-gray-600 group-hover:text-gray-800 transition ease-in-out duration-200`}
                            aria-hidden="true"
                        />
                        </Popover.Button>
                        <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                        >
                        <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform sm:px-0 lg:max-w-3xl">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                {menu.popover_menu.map((item) => (
                                <div
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none"
                                >
                                    <div className={`${item.icon_bg_class} ${item.icon_color_class} flex items-center justify-center text-xl flex-shrink-0 w-10 h-10 rounded-lg sm:h-12 sm:w-12`}>
                                        <item.icon className=''/>
                                    </div>
                                    <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-900">
                                        {item.name}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {item.description}
                                    </p>
                                    </div>
                                </div>
                                ))}
                            </div>
                            <div className="p-4 bg-gray-50">
                                <a
                                href="##"
                                className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                >
                                <span className="flex items-center">
                                    <span className="text-sm font-medium text-gray-900">
                                    Documentation
                                    </span>
                                </span>
                                <span className="block text-sm text-gray-500">
                                    Start integrating products and tools
                                </span>
                                </a>
                            </div>
                            </div>
                        </Popover.Panel>
                        </Transition>
                    </>
                    )}
                </Popover>
                    : 
                    <div className='mr-6 flex flex-row items-center gap-1 text-gray-600 hover:text-gray-800 duration-200'><TiThListOutline className='text-base' />Products</div>   
                    }
                 </>))}
                </div>
            </>))}
            </div>
        </div>

       </>
    )
}

export default NavigationBar