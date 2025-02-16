import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function UserDashboard() {
  return (
    <div className='flex'>
      <div className="h-screen w-[220px] sm:w-[260px] p-5 shadow-lg">
        <Link to="/" className='font-semibold text-lg'>Crediform</Link>
        <ul className='mt-5'>
          <li className='text-xs text-[#3f3f3f]'>Collect</li>
          <li className='py-2'><Link to="overview">Forms</Link></li>
          {/* <li className='py-2'><Link to="profile">Profile</Link></li> */}
        </ul>
        <ul className='mt-5'>
        <li className='text-xs text-[#3f3f3f]'>Manage</li>
          <li className='py-2'><Link to="testimonials">Testimonials</Link></li>
          <li className='py-2'><Link to="profile">Profile</Link></li>
        </ul>
        <ul className='mt-5'>
        <li className='text-xs text-[#3f3f3f]'>Product</li>
          <li className='py-2'><Link to="testimonials">What's new</Link></li>
          <li className='py-2'><Link to="overview">Help & Support</Link></li>
          <li className='py-2'><Link to="testimonials">Feedback</Link></li>
        </ul>
      </div>
      {/* <div className='h-screen w-[calc(100% - 260px)]'> */}
      <Outlet />
      {/* </div> */}
    </div>
  )
}
