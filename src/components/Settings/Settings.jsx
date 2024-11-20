import Image from 'next/image'
import { FaAngleDown } from "react-icons/fa";
import SettingsActions from './SettingsActions';


export default function Settings() {

    return (
        <div className='lg:mt-4  lg:w-96 text-center'>
            <div className='lg:flex w-full justify-end mb-8 '>
                <button className='lg:flex  items-center hidden'>
                    <Image src={'/icons/profile.svg'} height={60} width={60} alt='profileImage' />
                    <FaAngleDown className='border  ' size={30} />
                </button>

            </div>
            {/* modal */}
            <div className='hidden lg:block'>
                <SettingsActions />
            </div>
        </div>
    )
}


