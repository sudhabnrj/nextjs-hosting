import React from 'react'
import Container from '../ui/Container'
import CommonTitle from './CommonTitle'
import { SolutionThumb } from '@/lib/constants'
import Image from 'next/image'
import HostingSolutionList from './HostingSolutionList'
import ShildCheckmark from '../ui/ShildCheckmarkIcon'
import DocumentFilesIcon from '../ui/DocumentFilesIcon'
import DesktopComputerIcon from '../ui/DesktopComputerIcon'

export default function HostingSolution() {
    return (
        <section className='mt-20'>
            <Container>
                <CommonTitle
                    title='Comprehensive Hosting Solutions for Professionals'
                    subHeading="Get started in complete confidence. Our 30-day money-back guarantee means it's risk-free."
                />
                <div className='flex justify-between items-center mt-10'>
                    <div className='w-1/2 flex flex-col gap-8 border-l-2 border-[#DEDFE4] relative'>
                        <div className="absolute w-[2px] h-[172px] inset-0 rounded-lg custom-border -left-[2px]"></div>
                        <HostingSolutionList
                            icon={<ShildCheckmark width={24} height={24} />}
                            title='Top-Level Data Security'
                            description='Postera Mail offers robust data protection with secure data centers and comprehensive encryption.'
                        />
                        <HostingSolutionList 
                            icon={<DocumentFilesIcon width={24} height={24} />}
                            title='Custom Hosting Domain'
                            description='Create professional email addresses with your own domain for enhanced company credibility.'
                        />
                        <HostingSolutionList 
                            icon={<DesktopComputerIcon width={24} height={24} />}
                            title='Automated backups'
                            description="Easily manage users, groups, and settings through Postera Mail’s control panel."
                        />
                    </div>
                    <div className='w-1/2'>
                        <Image src={SolutionThumb} alt='thumb' width={532} height={532} />
                    </div>
                </div>
            </Container>
        </section>
    )
}
