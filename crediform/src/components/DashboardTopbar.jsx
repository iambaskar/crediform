import React from 'react'

export default function DashboardTopbar() {
  return (
    <div className='flex justify-between'>
        <input type='text' placeholder='Search' className='w-[400px] py-2 px-4 rounded-md border-black-300 border text-sm font-normal' />
        <button className='bg-[#34D399] py-2 px-8 rounded-md text-sm font-medium'>Create</button>
    </div>
  )
}
