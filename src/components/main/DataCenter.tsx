import React from 'react'
import Container from '../ui/Container'
import Image from 'next/image'
import { MapThumb } from '@/lib/constants'
import CommonTitle from './CommonTitle'
import TabComponent from './TabComponent'

export default function DataCenter() {
    return (
        <section className='bg-custom-gradient py-24 mt-20'>
            <Container>
                <div className='flex  justify-between items-center'>
                    <div className='w-1/2'>
                        <Image src={MapThumb} width={530} height={308} alt='Data Center' />
                    </div>
                    <div className='w-1/2'>
                        <h2 className='text-white text-[34px] font-semibold font-beatrice leading-normal mb-4'>Data Centers within the Reach your Visitors</h2>
                        <p className='text-white text-base font-medium font-dmSans leading-normal'>Across various domains, including software development, business strateg manufacturing, and service delivery. Here’s a comprehensive look at what adaptability large-scale operations.</p>
                        <div className="flex justify-center gap-4">
                            <button className="bg-white py-2 px-4 rounded-md text-purple-600 font-medium hover:bg-purple-100">All Location</button>
                            <button className="bg-white py-2 px-4 rounded-md text-purple-600 font-medium hover:bg-purple-100">United States</button>
                            <button className="bg-white py-2 px-4 rounded-md text-purple-600 font-medium hover:bg-purple-100">Europe</button>
                            <button className="bg-white py-2 px-4 rounded-md text-purple-600 font-medium hover:bg-purple-100">Australia</button>
                            <button className="bg-white py-2 px-4 rounded-md text-purple-600 font-medium hover:bg-purple-100">Asia</button>
                        </div>

                        <div className="flex justify-between mt-10">
                            <TabComponent />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
