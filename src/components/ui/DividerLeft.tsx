import React from 'react'

interface IconProps {
    className: string;
}

const DividerLeft = ({className} : IconProps) => {
    return (
        <svg  className={className} width="256" height="10" viewBox="0 0 256 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Line 2" d="M255.507 5C255.507 7.42513 253.541 9.3911 251.116 9.3911C248.691 9.3911 246.725 7.42514 246.725 5C246.725 2.57487 248.691 0.608904 251.116 0.608904C253.541 0.608904 255.507 2.57486 255.507 5ZM251.116 5.82333L-9.14808e-05 5.82335L-9.16247e-05 4.17669L251.116 4.17667L251.116 5.82333Z" fill="url(#paint0_linear_1_1247)"/>
            <defs>
                <linearGradient id="paint0_linear_1_1247" x1="251.116" y1="5.5" x2="-9.1509e-05" y2="5.50002" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#CAC7F4"/>
                    <stop offset="0.52" stopColor="#D1C4F1" stopOpacity="0"/>
                </linearGradient>
            </defs>
        </svg>
    )
}

export default DividerLeft