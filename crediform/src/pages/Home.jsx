// import React, { useEffect, useState, useRef } from 'react'
// import '../styles/homepage.css'
// import XTemplate from '../components/XTemplate';
// const testimonials = [
//   {
//     name: 'John Doe',
//     title: 'Product Designer',
//     company: 'XYZ Corp.',
//     image: 'https://people.com/thmb/1Glh2bCacLpeHUVsZvMKQK1dqUE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(719x19:721x21)/ROBERT-PATTINSON-811119484f574723885b5bfbb109f749.jpg',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero ante. Nullam tincidunt, lectus at laoreet placerat, nisi ligula convallis neque, sit amet viverra lectus neque vel neque. Nulla facilisi. Donec malesuada, neque vel gravida dignissim, metus enim posuere justo, a bibendum felis enim sed sapien.'
//   },
//   {
//     name: 'Jane Smith',
//     title: 'Frontend Developer',
//     image: 'https://people.com/thmb/1Glh2bCacLpeHUVsZvMKQK1dqUE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(719x19:721x21)/ROBERT-PATTINSON-811119484f574723885b5bfbb109f749.jpg',
//     company: 'ABC Inc.',
//     text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec interdum, velit ut consectetur viverra, dui arcu malesuada leo, vel pulvinar ligula diam id odio. Donec facilisis, lectus id interdum posuere, velit justo eleif, Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec interdum, velit ut consectetur viverra, dui arcu malesuada leo, vel pulvinar ligula diam id odio. Donec facilisis, lectus id interdum posuere, velit justo eleifVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec interdum, velit ut consectetur viverra, dui arcu malesuada leo, vel pulvinar ligula diam id odio. Donec facilisis, lectus id interdum posuere, velit justo eleif',
//   },
//   {
//     name: 'Alice Johnson',
//     title: 'UX/UI Designer',
//     image: 'https://people.com/thmb/1Glh2bCacLpeHUVsZvMKQK1dqUE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(719x19:721x21)/ROBERT-PATTINSON-811119484f574723885b5bfbb109f749.jpg',
//     company: 'DEF Ltd.',
//     text: 'Quisque et ex euismod, tempor neque vitae, tristique felis. Nulla facilisi. Donec vitae velit ut diam convallis volutpat. Donec vel ante in nunc consectetur viverra. Donec at est vel enim tincidunt fermentum. Donec facilisis, lectus id interdum posuere, velit justo eleifend, faucibus'
//   },
//   {
//     name: 'Bob Wilson',
//     title: 'Product Manager',
//     image: 'https://people.com/thmb/1Glh2bCacLpeHUVsZvMKQK1dqUE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(719x19:721x21)/ROBERT-PATTINSON-811119484f574723885b5bfbb109f749.jpg',
//     company: 'GHI Corp.',
//     text: 'Nam vel est a lectus semper congue. Donec facilisis, lectus id interdum posuere, velit justo eleifend, faucibus tellus vitae neque. Donec vitae velit ut diam convallis volutpat. Donec vel ante in nunc consectetur viverra. Donec facilisis, lectus id interdum posuere, velit justo eleifend, faucibus tellus vitae neque.'
//   },
//   {
//     name: 'Charlie Brown',
//     title: 'Project Manager',
//     image: 'https://people.com/thmb/1Glh2bCacLpeHUVsZvMKQK1dqUE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(719x19:721x21)/ROBERT-PATTINSON-811119484f574723885b5bfbb109f749.jpg',
//     company: 'JKL Corp.',
//     text: 'Nulla facilisi. Donec vitae velit ut diam convallis volutpat. Donec vel ante in nunc consectetur viverra. Donec facilisis, lectus id interdum posuere, velit justo eleifend, faucibus tellus vitae neque. Sed ac libero ante. Nullam tincidunt, lectus at laoreet placerat, nisi ligula convallis neque'
//   },
//   {
//     name: 'David Garcia',
//     title: 'QA Engineer',
//     image: 'https://people.com/thmb/1Glh2bCacLpeHUVsZvMKQK1dqUE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(719x19:721x21)/ROBERT-PATTINSON-811119484f574723885b5bfbb109f749.jpg',
//     company: 'MNO Corp.',
//     text: 'Quisque et ex euismod, tempor neque vitae, tristique felis. Nulla facilisi. Donec vitae velit ut diam convallis volutpat. Donec vel ante in nunc consectetur viverra. Donec facilisis, lectus id interdum posuere, velit justo eleifend, faucibus tellus vitae neque. Sed ac libero ante. Null'
//   },
//   {
//     name: 'Charlie Brown',
//     title: 'Project Manager',
//     image: 'https://people.com/thmb/1Glh2bCacLpeHUVsZvMKQK1dqUE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(719x19:721x21)/ROBERT-PATTINSON-811119484f574723885b5bfbb109f749.jpg',
//     company: 'JKL Corp.',
//     text: 'Nulla facilisi. Donec vitae velit ut diam convallis volutpat. Donec vel ante in nunc consectetur viverra. Donec facilisis, lectus id interdum posuere, velit justo eleifend, faucibus tellus vitae neque. Sed ac libero ante. Nullam tincidunt, lectus at laoreet placerat, nisi ligula convallis neque'
//   },
//   {
//     name: 'David Garcia',
//     title: 'QA Engineer',
//     image: 'https://people.com/thmb/1Glh2bCacLpeHUVsZvMKQK1dqUE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(719x19:721x21)/ROBERT-PATTINSON-811119484f574723885b5bfbb109f749.jpg',
//     company: 'MNO Corp.',
//     text: 'Quisque et ex euismod, tempor neque vitae, tristique felis. Nulla facilisi. Donec vitae velit ut diam convallis volutpat. Donec vel ante in nunc consectetur viverra. Donec facilisis, lectus id interdum posuere, velit justo eleifend, faucibus tellus vitae neque. Sed ac libero ante. Null'
//   },
//   {
//     name: 'David Garcia',
//     title: 'QA Engineer',
//     image: 'https://people.com/thmb/1Glh2bCacLpeHUVsZvMKQK1dqUE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(719x19:721x21)/ROBERT-PATTINSON-811119484f574723885b5bfbb109f749.jpg',
//     company: 'MNO Corp.',
//     text: 'Quisque et ex euismod, tempor neque vitae, tristique felis. Nulla facilisi. Donec vitae velit ut diam convallis volutpat. Donec vel ante in nunc consectetur viverra. Donec facilisis, lectus id interdum posuere, velit justo eleifend, faucibus tellus vitae neque. Sed ac libero ante. Null'
//   },
//   {
//     name: 'David Garcia',
//     title: 'QA Engineer',
//     image: 'https://people.com/thmb/1Glh2bCacLpeHUVsZvMKQK1dqUE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(719x19:721x21)/ROBERT-PATTINSON-811119484f574723885b5bfbb109f749.jpg',
//     company: 'MNO Corp.',
//     text: 'Quisque et ex euismod, tempor neque vitae, tristique felis. Nulla facilisi. Donec vitae velit ut diam convallis volutpat. Donec vel ante in nunc consectetur viverra. Donec facilisis, lectus id interdum posuere, velit justo eleifend, faucibus tellus vitae neque. Sed ac libero ante. Null'
//   },
// ]

// export default function Home() {
//   const [position, setPosition] = useState({ x: 50, y: 80 });
//   const requestRef = useRef();
//   const targetPosition = useRef({ x: 50, y: 80 });

//   const handleMouseMove = (e) => {
//     const x = (e.clientX / window.innerWidth) * 100;
//     const y = (e.clientY / window.innerHeight) * 100;
//     targetPosition.current = { x, y };
//   };

//   const animateSpotlight = () => {
//     setPosition(prevPos => {
//       const deltaX = targetPosition.current.x - prevPos.x;
//       const deltaY = targetPosition.current.y - prevPos.y;

//       return {
//         x: prevPos.x + deltaX * 0.1,
//         y: prevPos.y + deltaY * 0.1
//       };
//     });

//     requestRef.current = requestAnimationFrame(animateSpotlight);
//   };

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     requestRef.current = requestAnimationFrame(animateSpotlight);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       cancelAnimationFrame(requestRef.current);
//     };
//   }, []);

//   return (
//     <>
//       {/* section 1 */}
//       <div className="homepage">
//         <div className="spotlight" style={{
//           background: `radial-gradient(circle at ${position.x}% ${position.y}%,  rgba(58, 16, 120, 0.3), rgba(0, 0, 0, 0.7) 70%)`
//         }}></div>
//         <div className="homepage-content">
//           <h1>Elevate Your Brand with Authentic Testimonials</h1>
//           <p>In today’s digital world, trust is everything. Our easy-to-use testimonial generator empowers creators and organizations to collect, manage, and showcase authentic feedback from their audience. Whether you’re a small business, an influencer, or a large organization, we’ve got the tools to enhance your credibility and drive engagement</p>
//         </div>
//       </div>

//       {/* section 2 */}
//       <div className="homepage-sec2">
//         <h1>Add testimonials to your website with no coding!</h1>
//         <p>Easily integrate testimonials into your website! Our set of stylish, modern UI components can be copied and used anywhere on your site with a simple CDN link.</p>
//         <div className="template">
//           {
//             testimonials.map((data, index) => (
//               <XTemplate
//                 key={index}
//                 name={data.name}
//                 url={data.image}
//                 role={data.title}
//                 content={data.text}
//               />
//             ))
//           }
//         </div>
//       </div>
//     </>
//   )
// }

import React from 'react'

export default function Home() {
  return (
    <div className='bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip'>
      <div className='absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-98px)] sm:top-[calc(100%-120px)]'>
      </div>
      <div className="container relative">
        <h1 className='text-7xl font-bold text-center tracking-tighter mt-8'>Elevate Your Brand with Authentic Testimonials</h1>
        <p className='text-xl mt-8 leading-8 text-center'>In today’s digital world, trust is everything. Our easy-to-use testimonial generator empowers creators and organizations to collect, manage, and showcase authentic feedback from their audience. Whether you’re a small business, an influencer, or a large organization, we’ve got the tools to enhance your credibility and drive engagement</p>
        <div className='flex justify-center'>
          <button className='text-black bg-white rounded-md px-5 py-3 mt-[35px] font-medium'>Get started</button>
        </div>
      </div>
    </div>
  )
}

