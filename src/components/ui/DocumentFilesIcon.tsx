import React from 'react'
interface IconProps {
    width: string | number;
    height: string | number;
    className?: string;
}
const DocumentFilesIcon = ({width = "20",
    height = "20",
    className = "",
  }: IconProps) => {
    return (
        <svg className={className}
        width={width}
        height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 17V19C17.0001 19.5303 16.7896 20.0389 16.4148 20.414C16.0399 20.7891 15.5314 20.9999 15.0011 21H6C5.46971 21.0001 4.96108 20.7896 4.58601 20.4148C4.21094 20.0399 4.00014 19.5314 4 19.0011V8C3.99985 7.46971 4.21037 6.96108 4.58523 6.58601C4.9601 6.21094 5.46861 6.00014 5.9989 6H8" stroke="#121F30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.5 11.5H15.5" stroke="#121F30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 7.5H17C16.1716 7.5 15.5 6.82843 15.5 6V3" stroke="#121F30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M8 15V5C8 3.89543 8.89543 3 10 3H16.0605C16.5909 3 17.0996 3.21071 17.4747 3.58579L19.4142 5.52532C19.7893 5.90039 20 6.4091 20 6.93954V15C20 16.1046 19.1046 17 18 17H10C8.89543 17 8 16.1046 8 15Z" stroke="#121F30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default DocumentFilesIcon