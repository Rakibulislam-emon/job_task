"use client";
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useSearch } from "./SearchContext";

export default function SearchCategory() {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <div className="hidden md:flex h-16 relative items-center border-green-500 mt-2  w-full">
      {/* Search Icon on the Left */}
      <button className="w-10 h-16 flex items-center justify-center text-gray-400 bg-white border-r-transparent border border-green-500  duration-200 cursor-pointer rounded-l-lg">
        <IoSearchSharp size={28}/>
      </button>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search by Dua Name"
        className="md:w-[370px] h-full border border-green-500 border-l-transparent px-4 outline-none rounded-r-lg"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Clear Icon */}
      {searchTerm && (
        <IoClose
          onClick={() => setSearchTerm("")}
          className="text-xl absolute right-4 text-gray-500 hover:text-red-500 cursor-pointer duration-200"
        />
      )}
    </div>
  );
}
