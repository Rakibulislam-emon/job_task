import Image from 'next/image'
import React from 'react'
import { FaAngleDown } from "react-icons/fa";

export default function Settings() {
    return (
        <div className='lg:mt-4'>
           <button className='flex  items-center'>
                <Image src={'/icons/profile.svg'} height={60} width={60} alt='profileImage' />
                <FaAngleDown className='border  ' size={30}/>
           </button>
           {/* modal */}

        </div>
    )
}
