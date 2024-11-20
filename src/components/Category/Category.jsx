
import React from 'react'
import SearchCategory from './SearchCategory'
import CategoryContents from './CategoryContents'

export default function Category() {
    return (
        <div className='lg:mr-10 lg:flex flex-col items-center bg-white rounded-md  hidden'>
            <h1 className='text-white bg-green-500 text-2xl text-center rounded-t-md p-2 w-full'>
                Category
            </h1>
            <SearchCategory/>
            <CategoryContents/>
        </div>
    )
};
