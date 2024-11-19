'use client'
import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
export default function Navbar() {
    const [search, setSearch] = useState('')

    return (
        <div className="border flex justify-between lg:mt-4">
            <h1 className='text-3xl'>Dua page</h1>
            {/* searchbar */}
            <div className='hidden md:inline-flex  h-10 relative  '>
                <input
                    type="text"
                    placeholder='Search by Dua Name'
                    className='md:w-[370px] h-full border-2  px-4 outline-none rounded-lg '
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {search && (
                    <IoClose
                        onClick={() => setSearch("")}
                        className='text-xl  absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200'
                    />
                )}
                <span className='w-10 h-10 bg-themeColor inline-flex items-center justify-center text-gray-400 bg-gray-300 absolute top-0 right-0 border border-themeColor hover:bg-themeColor duration-200 cursor-pointer rounded-lg'>
                    <IoSearchSharp />
                </span>
            </div>
        </div>
    )
}
