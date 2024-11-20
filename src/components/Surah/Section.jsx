"use client"
import { GiHamburgerMenu } from "react-icons/gi"; import { useDuaContext } from "./ContextProvider"
import { useState } from "react";
// import Category from "../Category/Category";

export default function Section() {
    const { sectionTitle } = useDuaContext()
    const [open, setOpen] = useState(false); // Correct naming

    // Toggle the "open" state
    const toggle = () => setOpen((prev) => !prev);
    return (
        <>
            <div className="lg:hidden  flex gap-x-2 items-center px-2 py-4 border bg-white my-4" >
                <button onClick={toggle}>
                    <GiHamburgerMenu size={30} className="cursor-pointer" />
                </button>
                <span className="text-xl">Dua' Importance</span>
            </div>
            {sectionTitle && <div className="border border-black p-2 bg-white rounded-md">
                {<h1 className="text-base  ">
                    <span className="text-green-500 font-medium">Section:</span>
                    <span className="pl-4">{sectionTitle}</span>
                </h1>}
            </div>}
            {/* {
                open && <div className="z-50"><Category /></div>
            } */}
        </>
    )
}
