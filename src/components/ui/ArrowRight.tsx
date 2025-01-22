import React from 'react'

interface IconProps {
    width: string | number;
    height: string | number;
    className: string;
}

const ArrowRight = ({width = "20",
    height = "20",
    className = "",
  }: IconProps) => {
    return (
        <svg 
            className={className}
            width={width}
            height={height} 
            viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector" d="M2.49962 0.125104C2.20649 0.125104 1.93712 0.185015 1.70737 0.312325C1.12111 0.634344 0.796285 1.35327 0.796285 2.34928V6.34831C0.796285 7.33683 1.12111 8.06325 1.71529 8.38527C2.30948 8.70728 3.13342 8.60993 4.04451 8.11567L7.71263 6.11615C8.62371 5.62189 9.12283 4.99283 9.12283 4.34879C9.12283 3.70476 8.62371 3.0757 7.71263 2.58144L4.04451 0.581922C3.48201 0.27488 2.95913 0.125104 2.49962 0.125104Z" fill="#392188"/>
        </svg>
    )
}

export default ArrowRight