import React from 'react'
import { FaXTwitter } from "react-icons/fa6";

export default function XTemplate({ name, url, content, role }) {
    return (
        <div className="xtemplate">
            <div className="xtemplate-top">
                <div style={{ display: 'flex', alignItems: 'center', columnGap: '1rem' }}>
                    <img src={url} alt="" style={{ width: '2rem', height: '2rem', borderRadius: '1rem', objectFit: 'cover' }} />
                    <ul>
                        <li>{name}</li>
                        <li style={{ color: '#333' }}>{role}</li>
                    </ul>
                </div>
                <FaXTwitter />
            </div>
            <p>{content}</p>
        </div>
    )
}
