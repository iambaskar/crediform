import React from 'react'
import DashboardTopbar from './DashboardTopbar'
import { Link, useNavigate } from 'react-router-dom'

export default function Overview() {
    const str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum aperiam dignissimos distinctio laborum quas eaque possimus perferendis ad sed, nostrum, asperiores tempora cumque enim illum, impedit obcaecati libero aut?";
    const navigate = useNavigate();
    return (
        <div className='h-screen bg-[#F3F6F8] w-full pt-5 px-[26px] overflow-y-auto'>
            {/* <DashboardTopbar /> */}
            <div className='flex justify-between items-center'>
                <p className='font-semibold text-xl mt-[30px]'>Your Forms</p>
                <button onClick={() => navigate('/create-form')} className='bg-[#34d399] rounded-md px-4 py-2 text-sm'>Create Form</button>
            </div>
            <p className='mt-1 text-[#3f3f3f]'>Use forms to collect feedback from users.</p>
            <div className='grid grid-cols-2 gap-5 py-10 lg:grid-cols-4 md:grid-cols-2'>
                {
                    [1, 2, 3, 3, 3].map(() => (
                        <div className='bg-white rounded-lg shadow-md p-5 flex flex-col gap-y-3'>
                            <p className='text-[#030303] font-medium'>Workshop Feedback</p>
                            <p className='text-sm leading-[22px] text-[#3f3f3f]'>{str.split(" ").slice(0, 15).join(" ")}...</p>
                            <p className='text-[12px] text-[#3f3f3f]'>30 responses</p>
                            <div className='h-2 w-[100%] bg-[#34D399] rounded-lg'></div>
                            <div className='flex items-center'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUqeCsxGbLSfbmO9Cp-L3HNf5QZpj4CBiWA&s" alt="" className='h-[30px] w-[30px] object-cover rounded-[30px] mr-[-10px]' />
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUqeCsxGbLSfbmO9Cp-L3HNf5QZpj4CBiWA&s" alt="" className='h-[30px] w-[30px] object-cover rounded-[30px] mr-[-10px]' />
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUqeCsxGbLSfbmO9Cp-L3HNf5QZpj4CBiWA&s" alt="" className='h-[30px] w-[30px] object-cover rounded-[30px]' />
                                <p className='ml-[10px] text-sm'>+1</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
