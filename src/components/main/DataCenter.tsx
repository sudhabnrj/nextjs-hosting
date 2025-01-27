import React from 'react'
import Container from '../ui/Container'
import Image from 'next/image'
import { MapThumb } from '@/lib/constants'
import CommonTitle from './CommonTitle'
import TabComponent from './TabComponent'
import DataCenterCard from './DataCenterCard'

export default function DataCenter() {
    return (
        <section className='py-24 mt-20' style={{ background: 'radial-gradient(34.06% 34.06% at 34.06% 50%, #085BDF 0%, #5D39D3 100%)' }}>
            <Container>
                <div className='flex  justify-between items-center'>
                    <div className='w-1/2'>
                        <Image src={MapThumb} width={530} height={308} alt='Data Center' />
                    </div>
                    <div className='w-1/2'>
                        <h2 className='text-white text-[34px] font-semibold font-beatrice leading-normal mb-4'>Data Centers within the Reach your Visitors</h2>
                        <p className='text-white text-base font-medium font-dmSans leading-normal'>Across various domains, including software development, business strateg manufacturing, and service delivery. Here’s a comprehensive look at what adaptability large-scale operations.</p>

                        <div className="flex justify-between mt-9 flex-col">
                            <TabComponent />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center gap-x-28 items-center mt-20 border-t border-white/40 pt-10'>
                    <DataCenterCard 
                        title='120+ Countries'
                        description='We serve customers in.'
                    />
                    <DataCenterCard 
                        title='99.9% Uptime'
                        description='SLA for VMs & Hybrid Servers.'
                    />
                    <DataCenterCard 
                        title='4 Datacenters'
                        description='World class facilities.'
                    />
                    <DataCenterCard 
                        title='> 250k VMs'
                        description='Launched over time.'
                    />
                </div>
            </Container>
        </section>
    )
}
