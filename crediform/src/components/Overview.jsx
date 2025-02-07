import React from 'react'
import DashboardTopbar from './DashboardTopbar'

export default function Overview() {
    return (
        <div className='h-screen bg-[#F3F6F8] w-full pt-5 px-[26px]'>
            <DashboardTopbar />
            <p className='font-semibold text-xl mt-[30px]'>Recent Activity</p>
            <div className='grid grid-cols-2 gap-4 py-5 lg:grid-cols-5'>
                <div className='border border-black-400 h-[250px] bg-white rounded-md'></div>
                <div className='border border-black-400 h-[250px] bg-white rounded-md'></div>
                <div className='border border-black-400 h-[250px] bg-white rounded-md'></div>
                <div className='border border-black-400 h-[250px] bg-white rounded-md'></div>
                <div className='border border-black-400 h-[250px] bg-white rounded-md'></div>
                <div className='border border-black-400 h-[250px] bg-white rounded-md'></div>
            </div>
        </div>
    )
}
