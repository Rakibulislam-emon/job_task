import React from 'react'
import './Loading.css'
export default function LoadingSkeleton() {
    return (

        <div className='flex w-full justify-center'>
            <div className="three-body">
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
            </div>
        </div>
    )
}
