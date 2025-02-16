import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import c1 from '../assets/c1.png';

export default function CreateForm() {
    const navigate = useNavigate();
    const [template, setTemplate] = useState({
        logo: c1,
        primaryColor: '#34d399',
        title: 'Workshop Feedback',
        msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    });
    const [active, setActive] = useState(null);

    const handleTemplateChange = (e) => {
        setTemplate({ ...template, [e.target.name]: e.target.value });
    };

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setTemplate(prev => ({ ...prev, logo: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="h-screen flex">
            <div className="w-[30%] h-[100%] p-5 bg-white shadow-lg overflow-y-auto relative">
                <button onClick={() => navigate(-1)}> back to forms</button>
                <p className="text-lg font-medium mt-[10px]">Workshop Feedback</p>
                <ul>
                    <li className="border-b border-black-400 py-5" onClick={() => setActive('design')}>
                        <p>Design</p>
                        {
                            active === 'design' && (
                                <>
                                    <div className="mt-5 flex flex-col gap-2">
                                        <label className="text-sm">Logo</label>
                                        <input type="file" accept="image/*" onChange={handleLogoChange} />
                                        <div className='border p-5'>
                                            <img src={template.logo} alt="" className='w-[150px]' />
                                        </div>
                                    </div>
                                    <div className="mt-5 flex flex-col gap-2">
                                        <label className="text-sm">Primary Color</label>
                                        <input
                                            type="color"
                                            name="primaryColor"
                                            value={template.primaryColor}
                                            onChange={handleTemplateChange}
                                            className="h-[40px]"
                                        />
                                    </div>
                                </>
                            )
                        }
                    </li>
                    <li className="border-b border-black-400 py-5" onClick={() => setActive('welcome')}>
                        <p>Welcome Page</p>
                        {
                            active === 'welcome' && (
                                <>
                                    <div className="mt-5 flex flex-col gap-2">
                                        <label className="text-sm">Welcome Page Title</label>
                                        <input type="text" className="border p-2 rounded-md" name="title" value={template.title} onChange={handleTemplateChange} />
                                    </div>
                                    <div className="mt-5 flex flex-col gap-2">
                                        <label className="text-sm">Introductory Message</label>
                                        <textarea className="border p-2 rounded-md" rows={4} name="msg" value={template.msg} onChange={handleTemplateChange}></textarea>
                                    </div>
                                </>
                            )
                        }
                    </li>

                </ul>
                <div className='flex gap-4 justify-end mt-10'>
                    <button className='bg-[#d0d0d0] p-3 rounded-md text-sm font-medium w-[50%]'>Cancel</button>
                    <button className='bg-[#34d399] p-3 rounded-md text-sm font-medium w-[50%]'>Save & Continue</button>
                </div>
            </div>
            <div className="w-[70%] overflow-y-auto bg-[#F3F6F8] grid place-items-center">
                <div className="bg-white w-[50%] shadow-lg p-5 rounded-lg">
                    <img src={template.logo} alt="Logo Preview" className="h-[35px] w-auto" />
                    <p className="font-semibold mt-5">{template.title}</p>
                    <p className="mt-4 text-[#3f3f3f]">{template.msg}</p>
                    <ul className="p-3">
                        <li className="mt-2 list-disc">Share your experience with a quick video or text testimonial</li>
                        <li className="mt-2 list-disc">Recording a video? Don't forget to smile 😊</li>
                    </ul>
                    <div className="mt-[20px] p-2 rounded-md text-center font-medium text-sm" style={{ backgroundColor: template.primaryColor }}>Record a video</div>
                    <div className="mt-3 bg-[#d0d0d0] p-2 rounded-md text-center font-medium text-sm">Write a testimonial</div>
                </div>
            </div>
        </div>
    );
}
