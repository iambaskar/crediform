import React from 'react'
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
export default function Clients() {
    const clients = [
        { logo: c1, alt: 'Client 1' },
        { logo: c2, alt: 'Client 2' },
        { logo: c3, alt: 'Client 3' },
        { logo: c1, alt: 'Client 1' },
        { logo: c2, alt: 'Client 2' },
        { logo: c3, alt: 'Client 3' },
        { logo: c1, alt: 'Client 1' },
        { logo: c2, alt: 'Client 2' },
        { logo: c3, alt: 'Client 3' },
        { logo: c1, alt: 'Client 1' },
        { logo: c2, alt: 'Client 2' },
        { logo: c3, alt: 'Client 3' },
        
    ];

    return (
        <div className='bg-black text-white py-[90px]'>
            <div className="container">
                <h2 className="text-white/60 text-center mb-10">Trusted by the world's most innovative teams</h2>
                <div className="overflow-hidden before:content-[''] before:absolute before:h-full before:w-20 before:left-0 before:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] relative after:content-[''] after:absolute after:h-full after:w-20 after:right-0 after:top-0 after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
                    <div className='flex items-center gap-16'>
                        {
                            clients.map((client, index) => (
                                    <img src={client.logo} key={index} alt={client.alt} className='flex-none h-12 w-[120px] object-contain' />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
