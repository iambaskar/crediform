import React from 'react'
import show from '../assets/showcase.jpg'
export default function ProductShowCase() {
    return (
        <div className='bg-black text-white py-[70px]'>
            <div className="container">
                <div className='w-full flex justify-center'>
                    <div className='w-[60%] text-center'>
                        <p className='text-5xl tracking-tighter text-white/90 font-medium'>Everything you need to leverage testimonials</p>
                        <p className='mt-4 text-white/50'>We support all these features for you to collect and manage all testimonials. Features with the lock are only available for the paid plans.</p>
                    </div>
                </div>
                <div className='w-full h-[700px] justify-center mt-[120px] border border-neutral-800 p-4 rounded-lg'>
                    <div className='w-full h-full bg-green-500'>
                        <img src={show} className='w-full h-full object-cover object-top' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
