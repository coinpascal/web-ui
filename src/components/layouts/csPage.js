import Link from "next/link"
import React,{Fragment} from "react"
import { Popover, Transition } from '@headlessui/react'
import {GiRank3, GiTwoCoins} from 'react-icons/gi'
import { BsTools } from "react-icons/bs"
import { CgListTree } from "react-icons/cg"
import { FiChevronDown } from "react-icons/fi"
import { VscLinkExternal } from "react-icons/vsc"
import { AiOutlineApi } from "react-icons/ai"
import TypeAnimation from 'react-type-animation';


const CsPageLayout = () => {
    const primary_menu = [
        {
            name: 'Products',
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
        },
        {
            name: 'Features',
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
        },
        {
            name: 'Solutions',
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
        },
        {
            name: 'Features',
            icon: GiTwoCoins,
            has_popover : false,
            href: 'https://google.com'
        }
    ]
  return (
    <>
    <nav className="flex flex-row items-center sticky z-50 top-0 h-14 container mx-auto mt-4">
        <div className="mr-auto flex flex-row items-center">
            <div className="relative w-12 h-12 text-white bg-orange-500 rounded-full shadow-lg shadow-orange-500/70 border-1 border-orange-700 font-extrabold flex items-center justify-center text-4xl">
                <span className="mr-[10px] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/70 to-orange-500">C</span> 
                <span className="absolute right-2 text-[28px] -bottom-1 drop-shadow-lg">P</span>
            </div>
            <div className="ml-8 flex flex-row items-center gap-4">
            {primary_menu.map((menu) => (<>
                {menu.has_popover ? 
                    <Popover className="relative">
                    {({ open }) => (
                    <>
                        <Popover.Button
                        className={`
                            ${open ? 'bg-gray-200' : 'bg-white'}
                            flex flex-row items-center gap-1 transition ease-in-out duration-200 hover:bg-gray-200 px-2 py-1 rounded-md`}
                        >
                        <menu.icon className={`${open ? 'text-orange-400' : 'text-gray-600'} text-base transition ease-in-out duration-200`} />
                        {menu.name}
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
                        <Popover.Panel className="absolute z-20 w-screen bg-white max-w-sm px-4 mt-4 transform sm:px-0">
                            <div className="overflow-hidden rounded-lg shadow-xl shadow-gray-100 ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-8 bg-white p-7">
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
                            </div>
                        </Popover.Panel>
                        </Transition>
                    </>
                    )}
                </Popover>
                    : 
                <a href={menu.href} className="flex flex-row items-center gap-1 transition ease-in-out duration-200 hover:bg-gray-200 px-2 py-1 rounded-md">
                    Roadmap
                </a>
                }
            </>))}
            </div>
        </div>
        <div className="ml-auto">
            <button className="border-2 px-2 py-1 rounded-lg">Coming Soon!</button>
        </div>
    </nav>
    <div className="mt-4 py-40 container mx-auto">
        <div className="flex flex-row h-full">
            <div className="w-1/2">
                <div className="">
                    <div className="mb-2 border px-3 py-1 w-fit rounded-full text-sm">From Coins to NFTs, all covered.</div>
                    <div className="text-6xl drop-shadow-lg text-gray-400">Meant for </div>
                    <TypeAnimation
                    cursor={true}
                    repeat={Infinity}
                    sequence={['Developers',5000,'Enthusiasts',5000,'Investors', 5000]}
                    wrapper="div"
                    className="text-8xl font-semibold drop-shadow-l text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700 after:font-light after:text-gray-300"
                    />
                </div>
                <div className="mb-1 text-sm text-gray-600 underline underline-offset-2">Solutions</div>
                <div className="flex mb-2 flex-row gap-2 flex-wrap max-w-md">
                    <button className="px-2 min-w-fit rounded-lg h-10 flex flex-row gap-2 items-center border-2">
                        <AiOutlineApi className="text-2xl"></AiOutlineApi> <div className="text-center">APIs for Developers</div>
                    </button>
                    <button className="px-2 min-w-fit rounded-lg h-10 flex flex-row gap-2 items-center border-2">
                        <AiOutlineApi className="text-2xl"></AiOutlineApi> <div className="text-center">Dashboards to Monitor</div>
                    </button>
                    <button className="px-2 min-w-fit rounded-lg h-10 flex flex-row gap-2 items-center border-2">
                        <AiOutlineApi className="text-2xl"></AiOutlineApi> <div className="text-center">Dashboards to Monitor</div>
                    </button>
                    <button className="px-2 min-w-fit h-10 flex flex-row gap-2 items-center text-gray-500 hover:text-gray-900 duration-200 text-sm">
                        <VscLinkExternal className="text-md"></VscLinkExternal> <div className="text-center">and much more...</div>
                    </button>
                </div>
                <form className="bg-gradient-to-br from-slate-100 to-slate-200 shadow-2xl shadow-slate-700/10 min-w-[20rem] w-fit rounded-lg p-2">
                    <div className="flex w-full flex-row">
                        <input type="text" placeholder="name@example.com" className="w-2/3 px-2 bg-white outline-none rounded-l-lg" />
                        <button type="button" className="w-1/3 bg-amber-200 p-2 rounded-r-lg active:bg-amber-300 active:shadow-inner active:shadow-amber-700">Subscribe</button>
                    </div>
                    <div className="text-sm font-normal mt-2 text-gray-600">We will notify you, once we start our <u>Beta Program</u></div>
                </form>
            </div>
            <div className="w-1/2">
                <div className="flex flex-col gap-2 items-end h-full">
                    <div className="border-t-2 border-l-2 rounded-tl-[2rem] bg-white rounded-lt-xl min-h-[9rem] w-fit min-w-[20rem] p-2 pb-6 relative">
                        <span className="absolute -top-6 -z-10 px-2 pb-4 pt-[2px] rounded-t-lg shadow-md shadow-blue-500 bg-blue-500 text-white text-sm">Price & Market Analysis</span>
                        <span className="absolute bottom-3 -left-[246px] px-2 py-1 rounded-tl-lg rounded-bl-lg shadow-md shadow-blue-500/50 bg-blue-500 text-white text-sm">NFT & DeFi - Price & Market Analysis</span>
                        <span className="absolute bottom-12 -left-[133px] pl-2 pr-4 py-1 rounded-tl-lg rounded-bl-lg shadow-md shadow-blue-500/50 bg-blue-500 text-white text-sm">10k+ Coins Listed</span>
                        <span className="absolute bottom-[84px] -left-[252px] pl-2 pr-4 py-1 rounded-tl-lg rounded-bl-lg shadow-md shadow-blue-500/50 bg-blue-500 text-white text-sm">Daily per Coin / NFT / Token reports</span>
                        <div className="rounded-lg min-h-[40px] shadow-xl shadow-gray-500/10">

                        </div>
                        <div className="rounded-lg min-h-[40px] mt-2 shadow-xl shadow-gray-500/10">

                        </div>
                        <div className="rounded-lg min-h-[40px] mt-2 shadow-xl shadow-gray-500/10">

                        </div>
                        <div className="min-h-full right-0 bg-gradient-to-l from-white via-white/90 to-transparent absolute top-0 w-36"></div>
                    </div>
                    <div className="border-t-2 border-l-2 bg-white rounded-tl-[2rem] rounded-lt-xl min-h-[9rem] w-fit min-w-[30rem] p-2 relative">
                        <span className="absolute bottom-1 -left-[184px] px-2 py-1 rounded-tl-lg rounded-bl-lg shadow-md shadow-blue-500/50 bg-blue-500 text-white text-sm">Multi-channel Notification</span>
                        <span className="absolute bottom-10 -left-[247px] px-2 py-1 rounded-tl-lg rounded-bl-lg shadow-md shadow-blue-500/50 bg-blue-500 text-white text-sm">Custom Dashboard & Token Watcher</span>
                        <span className="absolute bottom-20 -left-[148px] px-2 py-1 rounded-tl-lg rounded-bl-lg shadow-md shadow-blue-500/50 bg-blue-500 text-white text-sm">Portfolio & Watchlist</span>

                    </div>
                    <div className="border-t-2 border-l-2 rounded-tl-[2rem] rounded-lt-xl min-h-[5rem] w-fit min-w-[40rem] p-2 bg-white relative">
                        <span className="absolute bottom-10 -left-44 -z-10 pl-2 pr-4 py-1 rounded-tl-lg rounded-bl-lg shadow-md shadow-blue-500/50 bg-blue-500 text-white text-sm">Powerful APIs & GraphQL</span>
                        <span className="absolute bottom-1 -left-28 -z-10 pl-2 pr-4 py-1 rounded-tl-lg rounded-bl-lg shadow-md shadow-blue-500/50 bg-blue-500 text-white text-sm">50+ Endpoints</span>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default CsPageLayout