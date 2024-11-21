"use client";
import React, { useState } from 'react';
import { IoSearchSharp, IoClose } from "react-icons/io5";
import { CiSettings } from 'react-icons/ci';
import SettingsActions from '../Settings/SettingsActions';
import { RxCrossCircled } from "react-icons/rx";
import { useSearch } from '../Category/SearchContext';

export default function Navbar() {
  const { search, setSearch } = useSearch();
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <div className=" flex justify-between items-center lg:mt-4  lg:h-20 px-4 md:px-8">
      {/* Logo or Title */}
      <h1 className="text-3xl font-bold">Dua Page</h1>

      {/* Search Bar */}
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search by Dua Name"
          className="w-52 md:w-[370px] lg:w-[400px] h-12 text-sm lg:text-lg border-2 lg:px-4 px-3 outline-none rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <IoClose
            onClick={() => setSearch("")}
            className="text-xl absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200"
          />
        )}
        <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-full bg-gray-200 text-gray-500 rounded-r-lg">
          <IoSearchSharp />
        </span>
      </div>

      {/* Settings Toggle Icon */}
      {open ? (
        <RxCrossCircled
          onClick={toggle}
          className="lg:hidden cursor-pointer z-[10000] fixed right-0 top-4"
          size={40}
        />
      ) : (
        <CiSettings
          onClick={toggle}
          className="lg:hidden cursor-pointer z-[3000] mr-2"
          size={40}
        />
      )}

      {/* Settings Modal (Visible on small screens) */}
      {open && (
        <div className="lg:hidden fixed z-[2000] top-0 left-0 h-screen w-full bg-white border border-black">
          <SettingsActions />
        </div>
      )}
    </div>
  );
}
