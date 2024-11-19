import React from 'react'
import { icons, } from './sidebarIcons'
import Image from 'next/image'
export default function Sidebar() {
    return (
        <nav className="bg-[#fefefe] h-screen  lg:min-w-[100px] py-6 px-4   lg:flex flex-col items-center border rounded-3xl  hidden">
            <div className="pb-6">
                <img src="/icons/logo.svg" alt="Logo" width={50} height={50} />
            </div>
            <div className="overflow-auto py-6 h-full mt-4 ">
                <ul className="space-y-6">
                    {
                        icons.map((icon, index) => (
                            <li key={index} className="flex items-center px-4 py-2">
                                <div className='border p-2 rounded-full bg-[#e8f0f5]'>
                                    <Image src={icon.src} alt={icon.name} width={24} height={24} /></div>


                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}
