'use client';
import React, { useState } from 'react';
import { IoSearchSharp, IoClose } from "react-icons/io5";
import { CiSettings } from 'react-icons/ci';
import SettingsActions from '../Settings/SettingsActions';

export default function Navbar() {
    const [search, setSearch] = useState('');
    const [open, setOpen] = useState(false); // Correct naming

    // Toggle the "open" state
    const toggle = () => setOpen((prev) => !prev);

    return (
        <div className="border flex justify-between lg:mt-4 ">
            <h1 className='text-3xl'>Dua Page</h1>
            
            {/* Settings Toggle Icon */}
            <CiSettings
                onClick={toggle}
                className='lg:hidden cursor-pointer'
                size={40}
            />
             {/* Settings Actions (Visible when toggled) */}
             {open && (
                <div className='lg:hidden '>
                    <SettingsActions />
                </div>
            )}

            {/* Search Bar */}
            <div className='hidden md:inline-flex h-10 relative'>
                <input
                    type="text"
                    placeholder='Search by Dua Name'
                    className='md:w-[370px] h-full border-2 px-4 outline-none rounded-lg'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {search && (
                    <IoClose
                        onClick={() => setSearch("")}
                        className='text-xl absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200'
                    />
                )}
                <span className='w-10 h-10 inline-flex items-center justify-center text-gray-400 bg-gray-300 absolute top-0 right-0 border hover:bg-themeColor duration-200 cursor-pointer rounded-lg'>
                    <IoSearchSharp />
                </span>
            </div>

           
        </div>
    );
}
