import React from 'react';
import { FaPrayingHands, FaHandHoldingHeart } from 'react-icons/fa';
import { middleIcons ,bottomIcons} from './sidebarIcons';
import Image from 'next/image';



export default function Sidebar() {
  return (
    <div className="relative ">
      {/* Menu bar for larger screens */}
      <div className="hidden md:hidden lg:flex  lg:min-h-[820px] lg:w-[100px] rounded-2xl flex-col container mx-auto justify-around items-center w-16 bg-gray-100 shadow-lg">
        {/* Top Icon */}
        <div className="p-2 bg-[#1fa45b] rounded-lg text-white">
          {/* <FaPrayingHands className="text-5xl" /> */}
          <Image src={'/icons/logo.svg'} width={40} height={40} alt='logo'/>
        </div>

        {/* Middle Icons */}
        <div className="space-y-8">
          {middleIcons.map(({ component: Icon, key }) => (
            <Icon
              key={key}
              className="text-3xl text-gray-500 hover:text-green-200"
            />
          ))}
        </div>

        {/* Bottom Icon */}
        <div className="p-2 bg-green-500 rounded-lg text-white">
          <FaHandHoldingHeart className="text-5xl" />
        </div>
      </div>

      {/* Menu bar for smaller screens */}
      <div className="flex z-[1000] md:hidden justify-around fixed bottom-0 left-0 w-full bg-gray-100 p-4 shadow-lg">
        {bottomIcons.map(({ component: Icon, key }) => (
          <Icon
            key={key}
            size={24}
            className="text-gray-500 mx-4 hover:text-green-500"
          />
        ))}
      </div>
    </div>
  );
}
