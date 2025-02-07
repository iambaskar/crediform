// import React from 'react'
// // import '../styles/Navbar.css'
// import { NavLink } from 'react-router-dom'
// import Auth from './auth'
// import { auth } from '../config/firebase'

// export default function Navbar() {
//   return (
//     <div className="navbar">
//         <p className="logo">Crediform</p>
//         <ul className="links">
//           <li><NavLink to='/'>Home</NavLink></li>
//           <li><NavLink to='features'>Features</NavLink></li>
//           <li><NavLink to='components'>Components</NavLink></li>
//         </ul>
//         <Auth />
//             {/* <button className="navbar-btn">Get Started</button> */}
//     </div>
//   )
// }


import React from 'react'
import Auth from './Auth'
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <header className='bg-black text-white'>
      <div className='flex justify-center items-center gap-2 bg-[#22C55E] py-3 text-white text-sm font-medium'>
        <p className='text-black'>Elevate Your Brand with Authentic Testimonials</p>
        <p>Get started for free</p>
        {/* <Auth /> */}
      </div>
      <div className='py-5'>
        <div className="container">
          <div className='flex justify-between items-center'>
            <p className='text-lg font-semibold'>Crediform</p>
            <nav className='flex gap-6 items-center text-white/60'>
              {/* <a href="#">Home</a> */}
              <a href="#">Features</a>
              <a href="#">Testimonials</a>
              <a href="#">Help</a>
              <button className='px-4 py-2 bg-white text-black text-sm rounded-md font-medium' onClick={() => navigate('dashboard')}>Get started</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
