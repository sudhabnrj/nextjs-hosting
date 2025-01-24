import React from 'react'

interface IconProps {
    width: string | number;
    height: string | number;
    className: string;
}

const StarIcon = ({
    width = "20",
    height = "20",
    className = "",
  }: IconProps) => {
    return (
        <svg 
        className={className}
        width={width}
        height={height}
        viewBox="0 0 28 29"  xmlns="http://www.w3.org/2000/svg">
            <path id="Shape" d="M14 21.908L20.0833 20.2791L22.625 28.5558L14 21.908ZM28 11.2099H17.2917L14 0.555786L10.7083 11.2099H0L8.66667 17.8136L5.375 28.4677L14.0417 21.864L19.375 17.8136L28 11.2099Z" />
        </svg>
    )
}

export default StarIcon