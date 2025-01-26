import React from 'react'
interface IconProps {
    width: string | number;
    height: string | number;
    className?: string;
}
const ShildCheckmark = ({width = "20",
    height = "20",
    className = "",
  }: IconProps) => {
    return (
        <svg 
        className={className}
        width={width}
        height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M20 13.0209C20 16.7956 15.3552 19.5997 13.1401 20.7255C12.4255 21.0909 11.579 21.0916 10.8636 20.7275C8.65012 19.6027 4 16.7918 4 13.0209V7.56938C4.00735 7.05853 4.39423 6.63324 4.9021 6.5777C7.02402 6.41646 9.05835 5.66412 10.7746 4.40594C11.5019 3.86469 12.4981 3.86469 13.2254 4.40594C14.9416 5.66412 16.9759 6.41646 19.0979 6.5777C19.6057 6.63322 19.9926 7.05852 20 7.56938V13.0209Z" stroke="#121F30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.6 11.5L11.6011 13.5L10.4 12.3" stroke="#121F30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default ShildCheckmark