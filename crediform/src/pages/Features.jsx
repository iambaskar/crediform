import React from 'react'

export default function Features() {
    const testimonials = [
        { name: "John Doe", feedback: "This platform is incredible! It helped my business grow exponentially." },
        { name: "Jane Smith", feedback: "I love the simplicity of the dashboard. Managing testimonials has never been easier." },
        { name: "Michael Lee", feedback: "Embedding the Wall of Love on my website was a game-changer for me." },
        { name: "Sarah Johnson", feedback: "Amazing experience! The real-time feedback system is perfect for businesses." },
        { name: "Chris Evans", feedback: "The setup was quick and easy. Highly recommend this to anyone looking to build trust." },
        { name: "Emma Brown", feedback: "The testimonials widget fit perfectly into my website design." },
        { name: "Liam Wilson", feedback: "The ability to collect testimonials seamlessly is a great feature!" },
        { name: "Olivia Davis", feedback: "It made managing customer feedback effortless and organized." },
        { name: "Noah Miller", feedback: "The support team was so helpful when I needed assistance setting up." },
        { name: "Sophia Taylor", feedback: "Highly recommend this platform for growing small businesses." },
        { name: "Ava Anderson", feedback: "The Wall of Love feature is my favorite—such a great way to showcase feedback!" },
        { name: "William Thomas", feedback: "The real-time updates feature is very handy and user-friendly." },
        { name: "Isabella Moore", feedback: "A must-have tool for businesses aiming to build trust with their audience." },
        { name: "James Martin", feedback: "I can easily share customer feedback on my website without any coding skills." },
        { name: "Mia White", feedback: "The testimonial dashboard is so clean and intuitive to use." },
        { name: "Lucas Garcia", feedback: "Setup was lightning fast. I had everything running in minutes!" },
        { name: "Amelia Harris", feedback: "Great features for managing testimonials in one centralized place." },
        { name: "Ethan Walker", feedback: "Fantastic service! It’s been a huge help for my online store." },
        { name: "Charlotte Hall", feedback: "Testimonials now look professional and trustworthy on my website." },
        { name: "Henry Young", feedback: "This tool is exactly what my business needed to stand out." },
    ];

    return (
        <div className='bg-black text-white py-[120px] relative'>
            <div className="container">
                <div className='flex gap-6'>
                    <div className='w-[50%] px-10'>
                        <p className='text-5xl font-medium tracking-tighter text-white/80'>See How We have Helped Others.
                        </p>
                        {/* <p className='text-5xl font-medium tracking-tighter text-[#22C55E]'>one solution</p> */}
                        <p className='text-white/80 mt-6 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio maxime consequuntur vitae nostrum necessitatibus exercitationem.</p>
                    </div>
                    <div className='w-[50%] px-10 z-20'>
                        {/* <div className='mb-6 p-6 bg-gradient-to-b from-[#14532d75] to-transparent rounded-2xl'>
                            <p className='font-medium text-white/80'>Quick to setup</p>
                            <h1 className='text-white font-bold mt-2'>A dedicated landing page</h1>
                            <p className='text-white/70 mt-2'>Create a dedicated landing page for your business. Share the page link easily via email, social media, or even SMS. Setup can be done in two minutes.</p>
                        </div> */}
                        <div className='mb-8 p-6 bg-gradient-to-b from-[#131316] to-transparent rounded-2xl'>
                            <p className='font-medium text-[#22C55E]'>Quick to setup</p>
                            <h1 className='mt-2'>A dedicated landing page</h1>
                            <p className='text-white/50 mt-2'>Create a dedicated landing page for your business. Share the page link easily via email, social media, or even SMS. Setup can be done in two minutes.</p>
                        </div>

                        <div className='bg-gradient-to-b from-[#131316] to-transparent p-6 rounded-2xl mb-8'>
                            <p className='font-medium text-[#22C55E]'>Easy to manage</p>
                            <h1 className='mt-2'>A dashboard to manage all testimonials</h1>
                            <p className='text-white/50 mt-2'>You will have a simple & clean dashboard to manage all testimonials in one place. It's like your email inbox, but it's designed for your social proof!</p>
                        </div>
                        {/* <div className='bg-neutral-900 bg-[#131316] border border-[#1e1e22] p-6 rounded-2xl mb-6'>
                            <p className='font-medium text-white/80'>Easy to manage</p>
                            <h1>A dashboard to manage all testimonials</h1>
                            <p className='text-white/40 mt-2'>You will have a simple & clean dashboard to manage all testimonials in one place. It's like your email inbox, but it's designed for your social proof!</p>
                        </div> */}
                        <div className='bg-gradient-to-b from-[#131316] to-transparent p-6 rounded-2xl'>
                            <p className='font-medium text-[#22C55E]'>Embed the Wall of Love</p>
                            <h1 className='mt-2'>The best testimonials all in one place</h1>
                            <p className='text-white/50 mt-2'>Treat the Wall of Love as the place to showcase all your favorite testimonials. You can embed it to your website in under a minute. No coding knowledge required!</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#14532D] to-transparent"></div> */}
        </div>
    )
}
