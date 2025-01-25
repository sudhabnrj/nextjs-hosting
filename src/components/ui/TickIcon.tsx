import React from 'react'

interface IconProps {
    width: string | number;
    height: string | number;
    className: string;
}
const TickIcon = ({
    width = "20",
    height = "20",
    className = "",
  }: IconProps) => {
    return (
        <svg 
        className={className}
        width={width}
        height={height}
        viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
            <g id="vuesax/linear/tick">
                <g id="vuesax/linear/grammerly">
                    <g id="grammerly">
                        <g id="Group">
                        <path id="Vector" d="M15.9751 4.64985C19.3009 7.97559 19.2422 13.404 15.8076 16.6627C12.6326 19.6701 7.48064 19.6701 4.2973 16.6627C0.854276 13.404 0.795626 7.97559 4.12975 4.64985C7.39685 1.37437 12.708 1.37437 15.9751 4.64985Z" stroke="white" strokeWidth="1.25658" strokeLinecap="round" strokeLinejoin="round"/>
                        <path id="Vector_2" d="M6.49219 10.5557L8.86293 12.9264L13.6128 8.18494" stroke="white" strokeWidth="1.25658" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default TickIcon