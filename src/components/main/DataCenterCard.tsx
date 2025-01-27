import React from 'react'

interface DataCenterCardProps{
    title: string;
    description: string;
}

export default function DataCenterCard({title, description} : DataCenterCardProps) {
    return (
        <div className='flex flex-col'>
            <h4 className='text-white text-2xl font-semibold font-beatrice leading-normal'>{title}</h4>
            <p className='text-center text-white text-sm font-medium font-dmSans leading-normal'>{description}</p>
        </div>
    )
}
