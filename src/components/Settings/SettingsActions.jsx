import React from 'react';
import { IoLanguage } from 'react-icons/io5';
import { PiCardsThreeBold } from 'react-icons/pi';
import { TbCategory } from 'react-icons/tb';

const settings = [
  { icon: <IoLanguage size={24} />, label: 'Language Settings' },
  { icon: <PiCardsThreeBold size={24} />, label: 'General Settings' },
  { icon: <TbCategory size={24} />, label: 'Font Settings' },
  { icon: <TbCategory size={24} />, label: 'Appearance Settings', hoverColor: 'text-green-800' },
];

export default function SettingsActions() {
  return (
    <div className="border  bg-white  rounded-lg ">
      <h1 className="text-2xl font-semibold mb-8">SETTINGS</h1>
      <ul className="space-y-6 w-full">
        {settings.map((setting, index) => (
          <li
            key={index}
            className={`flex items-center space-x-4 w-full cursor-pointer border-b py-4 hover:${setting.hoverColor || 'text-green-600'}`}
          >
            {setting.icon}
            <span className="text-sm font-medium">{setting.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
