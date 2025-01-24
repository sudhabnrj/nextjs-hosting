import React from 'react'

export default function BlazingPerformanceBg({className}: {className: string}) {
    return (
        <svg className={`${className}`} width="325" height="264" viewBox="0 0 325 264" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.40932" y="0.40932" width="324.181" height="262.783" rx="24.1499" fill="url(#paint0_radial_105_1485)" stroke="url(#paint1_linear_105_1485)" strokeWidth="0.81864"/>
            <defs>
                <radialGradient id="paint0_radial_105_1485" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80.2267 52.8883) rotate(48.0346) scale(254.034 320.43)">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#F0F5FE"/>
                </radialGradient>
                <linearGradient id="paint1_linear_105_1485" x1="325" y1="131.801" x2="0" y2="131.801" gradientUnits="userSpaceOnUse">
                    <stop offset="0.235" stopColor="#CFE5FF"/>
                    <stop offset="0.49" stopColor="#704FE4"/>
                    <stop offset="0.759503" stopColor="#CFE5FF"/>
                </linearGradient>
            </defs>
        </svg>
    )
}
