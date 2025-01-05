import React from 'react'
import { FiCodesandbox } from "react-icons/fi";
import { MdManageHistory } from "react-icons/md";
import { LuHeartHandshake } from "react-icons/lu";

export default function Features2() {
    return (
        <div className='bg-black text-white py-[60px]'>
            <div className="container">
                <div className='w-full flex justify-center'>
                    <div className='w-[60%] text-center'>
                        <p className='text-5xl tracking-tighter white/90 font-medium'>Collect and display testimonials all in one solution</p>
                        <p className='mt-4 text-white/50'>Start your free trial now and see how easy it is to track, manage, and optimize your time. Start your free trial now and see how easy it is to track.</p>
                    </div>
                </div>
                <div className='flex py-[70px]'>
                    <div className='bg-gradient-to-b from-green-950 to-transparent p-10 rounded-s-3xl border-r border-neutral-900'>
                        <div className='outline outline-offset-2 outline-2 outline-green-600 w-[40px] h-[40px] flex justify-center items-center border-neutral-900 rounded-[50%]'>
                            <FiCodesandbox size={30} />
                        </div>
                        <div className='mt-[50px]'>
                            <p className='text-base text-[#22C55E]'>Quick to setup</p>
                            <h1 className='text-3xl mt-4 font-semibold tracking-tighter text-white/90'>A dedicated landing page
                            </h1>
                            <p className='text-white/50 mt-4'>Create a dedicated landing page for your business. Share the page link easily via email, social media, or even SMS. Setup can be done in two minutes.</p>
                            <p className='mt-12'>Start free trial</p>
                        </div>
                    </div>
                    {/* <div className='bg-gradient-to-b from-[#131316] to-transparent p-10 border-r border-neutral-900'>
                        <div className='outline outline-offset-2 outline-2 outline-green-600 w-[40px] h-[40px] flex justify-center items-center border-neutral-900 rounded-[50%]'>
                            <MdManageHistory size={30} />
                        </div>
                        <div className='mt-[50px]'>
                            <p className='text-base text-[#22C55E]'>Easy to manage</p>
                            <h1 className='text-3xl mt-4 font-semibold tracking-tighter text-white/90'>A dashboard to manage testimonials
                            </h1>
                            <p className='text-white/50 mt-4'>You will have a simple & clean dashboard to manage all testimonials in one place. It's like your email inbox, but it's designed for your social proof!</p>
                            <p className='mt-12'>Start free trial</p>
                        </div>
                    </div> */}
                    <div className='bg-gradient-to-b from-[#131316]  to-transparent p-10 rounded-e-3xl'>
                        <div className='outline outline-offset-2 outline-2 outline-green-600 w-[40px] h-[40px] flex justify-center items-center border-neutral-900 rounded-[50%]'>
                            <LuHeartHandshake size={30} />
                        </div>
                        <div className='mt-[50px]'>
                            <p className='text-base text-[#22C55E]'>Embed the Wall of Love
                            </p>
                            <h1 className='text-3xl mt-4 font-semibold tracking-tighter text-white/90'>All testimonials in one place
                            </h1>
                            <p className='text-white/50 mt-4'>Treat the Wall of Love as the place to showcase all your favorite testimonials. You can embed it to your website in under a minute. No coding knowledge required!</p>
                            <p className='mt-12'>Start free trial</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
