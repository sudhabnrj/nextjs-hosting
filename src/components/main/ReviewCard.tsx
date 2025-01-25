import React from 'react'
import StarIcon from '../ui/StarIcon'

const ReviewCard = () => {
  return (
    <div className="w-full py-8 px-5 bg-white rounded-[10px] shadow-custom flex-col justify-center items-center gap-2 inline-flex">
        <div className="self-stretch text-center text-black text-lg font-medium font-beatrice leading-relaxed">Excellent</div>
        <div className="justify-start items-start gap-2 inline-flex">
          {Array.from({length: 5}).map((_, index)=> (
            <div className="w-10 h-10 p-[3px] bg-gradient-to-r from-[#085adf] to-[#5d38d3] flex-col justify-center items-center inline-flex">
                <StarIcon key={index} width={28} height={28} className='fill-white' />
            </div>
            ))}
        </div>
        <div className="self-stretch text-center"><span className="text-black text-sm font-light font-beatrice leading-snug">Based on</span><span className="text-black text-sm font-bold font-['Beatrice Trial'] underline leading-snug"> 456 reviews</span></div>
        <div className="justify-center items-center gap-1 inline-flex">
            <div className="text-black text-base font-medium font-beatrice leading-relaxed">Trustpilot</div>
        </div>
    </div>
  )
}

export default ReviewCard