import React from 'react'
interface IconProps {
    width: string | number;
    height: string | number;
    className?: string;
}
const DesktopComputerIcon = ({width = "20",
    height = "20",
    className = "",
  }: IconProps) => {
    return (
        <svg className={className}
        width={width}
        height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15.0012" y="9.99927" width="7.00292" height="11.0046" rx="1" stroke="#121F30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.0013 17.0022H3.99668C2.89165 17.0022 1.99585 16.1064 1.99585 15.0014V5.99766C1.99585 4.89263 2.89165 3.99683 3.99668 3.99683H18.0025C19.1075 3.99683 20.0033 4.89263 20.0033 5.99766V9.99933" stroke="#121F30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.99744 20.0034H11.9999" stroke="#121F30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default DesktopComputerIcon