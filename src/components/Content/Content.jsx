import React from 'react'
import Navbar from '../Navbar/Navbar'
import Category from '../Category/Category'
import Surah from '../Surah/Surah'

export default function Content() {
    return (
        <div className='lg:mx-10 border-black border'>
            {/* nav */}
            <Navbar />
            {/* main body */}
            <div className=' flex lg:mt-4'>
                <div className='lg:w-1/3 '>
                    <Category />
                </div>
                <Surah />
            </div>

        </div>
    )
}
