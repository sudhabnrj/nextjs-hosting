import React from 'react'
import Container from '../ui/Container'
import DividerLeft from '../ui/DividerLeft'
import DividerRight from '../ui/DividerRight'
import PricingCard from './PricingCard'
import { SharedHosting, GlobeWhite, Wordpress } from '@/lib/constants'

const PricingContainer = () => {
    return (
        <section>
            <Container className='w-full relative'>
                <div className='text-center relative max-w-max mx-auto'>
                    <DividerLeft className='absolute right-full top-1/2 -translate-y-1/2' />
                    <h2 className='text-primary text-center text-4xl 2xl:text-h2-title font-semibold font-beatrice leading-normal tracking-wide'>Our Current Deals, Free Domains <br/>& $0.99 Webhosting</h2>
                    <p className='text-bodyText text-lg font-normal font-dmSans leading-normal mt-5'>Get started in complete confidence. Our 30-day money-back guarantee means it is risk-free.</p>
                    <DividerRight className='absolute left-full top-1/2 -translate-y-1/2' />
                </div>
                <div className='pricing-container grid grid-flow-col gap-x-4 mt-10 px-14'>
                    <PricingCard 
                        icon={SharedHosting}
                        title='Shared Hosting'
                        price={'20'}
                        features={['600 GB Premium Bandwidth', '75 GB RAID 10 Storage', '30 Hosted Domains']}
                        heghlighted={false}
                        extrainfo={true}
                    />
                    <PricingCard 
                        icon={GlobeWhite}
                        title='.COM Domain'
                        price={'120'}
                        features={['Domain privacy Protection', 'DNSSEC Security for your website', 'Free professional email trial']}
                        heghlighted={true}
                        extrainfo={false}
                    />
                    <PricingCard 
                        icon={Wordpress}
                        title='WordPress Hosting'
                        price={'20'}
                        features={['5 GB SSD Storage', '50k Visitors/month', 'Free SSL']}
                        heghlighted={false}
                        extrainfo={true}
                    />
                </div>
            </Container>
        </section>
    )
}

export default PricingContainer