import React from 'react'

interface IconProps {
    className: string;
}

const DividerRight = ({className} : IconProps) => {
    return (
        <svg className={className} width="256" height="10" viewBox="0 0 256 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Line 1" d="M0.492205 5C0.492204 7.42513 2.45817 9.3911 4.8833 9.3911C7.30844 9.3911 9.2744 7.42514 9.2744 5C9.2744 2.57487 7.30844 0.608904 4.8833 0.608904C2.45817 0.608904 0.492205 2.57486 0.492205 5ZM4.8833 5.82333L255.999 5.82335L255.999 4.17669L4.8833 4.17667L4.8833 5.82333Z" fill="url(#paint0_linear_1_1246)"/>
            <defs>
                <linearGradient id="paint0_linear_1_1246" x1="4.8833" y1="5.5" x2="255.999" y2="5.50002" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#CAC7F4"/>
                    <stop offset="0.52" stopColor="#D1C4F1" stopOpacity="0"/>
                </linearGradient>
            </defs>
        </svg>
    )
}

export default DividerRight