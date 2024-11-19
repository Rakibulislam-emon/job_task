import React from 'react'
import SearchCategory from './SearchCategory'

export default function Category() {
    return (
        <div className='lg:mr-10 flex flex-col items-center'>
            <h1 className='text-white bg-green-500 text-2xl text-center rounded-t-xl p-2 w-full'>
                Category
            </h1>
            <SearchCategory/>
        </div>
    )
}
