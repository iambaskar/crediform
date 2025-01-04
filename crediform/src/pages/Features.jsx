import React from 'react'

export default function Features() {
    return (
        <div className='bg-black text-white py-[120px]'>
            <div className="container">
                <div className='flex gap-6'>
                    <div className='w-[50%]'>
                        <p className='text-5xl font-medium tracking-tighter text-white/80'>Collect and display testimonials all in </p>
                        <p className='text-5xl font-medium tracking-tighter text-lime-600'>one solution</p>
                        <p className='text-white/80 mt-6 text-lg w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio maxime consequuntur vitae nostrum necessitatibus exercitationem.</p>
                    </div>
                    <div className='w-[50%]'>
                    <div className='bg-neutral-900 bg-[#131316] border border-[#1e1e22] p-6 rounded-2xl mb-6'>
                            <p className='font-medium text-white/80'>Quick to setup</p>
                            <h1>A dedicated landing page</h1>
                            <p className='text-white/40 mt-2'>Create a dedicated landing page for your business. Share the page link easily via email, social media, or even SMS. Setup can be done in two minutes.</p>
                        </div>
                        <div className='bg-neutral-900 bg-[#131316] border border-[#1e1e22] p-6 rounded-2xl mb-6'>
                            <p className='font-medium text-white/80'>Easy to manage</p>
                            <h1>A dashboard to manage all testimonials</h1>
                            <p className='text-white/40 mt-2'>You will have a simple & clean dashboard to manage all testimonials in one place. It's like your email inbox, but it's designed for your social proof!</p>
                        </div>
                        <div className='bg-neutral-900 bg-[#131316] border border-[#1e1e22] p-6 rounded-2xl'>
                            <p className='font-medium text-white/80'>Embed the Wall of Love</p>
                            <h1>The best testimonials all in one place</h1>
                            <p className='text-white/40 mt-2'>Treat the Wall of Love as the place to showcase all your favorite testimonials. You can embed it to your website in under a minute. No coding knowledge required!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
