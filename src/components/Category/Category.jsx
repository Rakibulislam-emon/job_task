import React from "react";
import SearchCategory from "./SearchCategory";
import CategoryContents from "./CategoryContents";

export default function Category({ isOpen }) {
  return (
    <div
      className={`${
        isOpen ? "flex fixed top-0 left-0 w-80 h-full z-[10000]" : "hidden"
      } lg:flex flex-col bg-white rounded-md lg:mr-10`}
    >
      <h1 className="text-white bg-green-500 text-2xl text-center rounded-t-md p-2 w-full">
        Category
      </h1>
      <SearchCategory />
      <div className="flex-1 overflow-y-auto w-full">
        <CategoryContents />
      </div>
    </div>
  );
}
