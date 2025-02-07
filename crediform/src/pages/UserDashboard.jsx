import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function UserDashboard() {
  return (
    <div className='flex'>
      <div className="h-screen w-[220px] sm:w-[260px] border-r border-black-400 p-5">
        <Link to="/" className='font-semibold text-lg'>Crediform</Link>
        <ul className='mt-5'>
          <li className='text-xs text-[#3f3f3f]'>Main Menu</li>
          <li className='py-2'><Link to="overview">Dashboard</Link></li>
          <li className='py-2'><Link to="testimonials">Testimonials</Link></li>
          <li className='py-2'><Link to="profile">Profile</Link></li>
        </ul>
        <ul className='mt-5'>
        <li className='text-xs text-[#3f3f3f]'>Other</li>
          <li className='py-2'><Link to="overview">Help & Support</Link></li>
          <li className='py-2'><Link to="testimonials">Report</Link></li>
        </ul>
      </div>
      {/* <div className='h-screen w-[calc(100% - 260px)]'> */}
      <Outlet />
      {/* </div> */}
    </div>
  )
}
