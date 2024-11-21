import React from 'react';
import { IoLanguage } from 'react-icons/io5';
import { PiCardsThreeBold } from 'react-icons/pi';
import { TbCategory } from 'react-icons/tb';
import ToggleButton from './ToggleButton';

const settings = [
  { icon: <IoLanguage size={24} />, label: 'Language Settings' },
  { icon: <PiCardsThreeBold size={24} />, label: 'General Settings' },
  { icon: <TbCategory size={24} />, label: 'Font Settings' },
  { icon: <TbCategory size={24} />, label: 'Appearance Settings', hoverColor: 'text-green-800' },
];

export default function SettingsActions() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full   max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Settings</h1>
      <ul className="divide-y divide-gray-200">
        {settings.map((setting, index) => (
          <li
            key={index}
            className={`flex items-center space-x-4 p-4 hover:${setting.hoverColor || 'text-green-600'} transition-colors duration-200 cursor-pointer`}
            role="button"
            aria-label={`Navigate to ${setting.label}`}
          >
            <span className="text-gray-600">{setting.icon}</span>
            <span className="text-sm font-medium text-gray-800">{setting.label}</span>
          </li>
        ))}
        <li className='flex items-center justify-between pt-4'>
         <h2 className='font-medium'>Night mode</h2>
          <ToggleButton/>
        </li>
      </ul>

    </div>
  );
}
