import React from 'react'

const Work = () => {
  return (
    <div className="max-w-container mx-auto pt-[60px] pb-[99px]">
      <div className="text-center">
        <img className="mx-auto" src="assets/element.png" alt="element" />
        <h2 className="text-[#192239] text-[48px] font-extrabold font-open">
        Work Showcase 
        </h2>
      </div>
        <div className='pt-[47px] pb-[52px]'>
            <ul className='flex flex-wrap gap-[20px] lg:gap-[40px] text-[#6C7D93] text-[15px] md:text-[24px] font-open font-semibold leading-[32px]'>
                <li className='hover:text-[#FF7628]'><a href="#">All</a></li>
                <li className='hover:text-[#FF7628]'><a href="#">Digital Mkt</a></li>
                <li className='hover:text-[#FF7628]'><a href="#">Branding</a></li>
                <li className='hover:text-[#FF7628]'><a href="#">Content Mkt</a></li>
                <li className='hover:text-[#FF7628]'><a href="#">Social Media Mkt</a></li>
            </ul>
        </div>
        <div className='flex justify-center lg:justify-between flex-wrap gap-[30px]'>
            <div className='w-[276px] bg-[#C4C4C4] h-[344px] rounded-[20px]'></div>
            <div className='w-[561px] bg-[#C4C4C4] h-[344px] rounded-[20px]'></div>
            <div className='w-[270px] bg-[#C4C4C4] h-[344px] rounded-[20px]'></div>
            <div className='w-[413px] bg-[#C4C4C4] h-[344px] rounded-[20px]'></div>
            <div className='w-[327px] bg-[#C4C4C4] h-[344px] rounded-[20px]'></div>
            <div className='w-[370px] bg-[#C4C4C4] h-[344px] rounded-[20px]'></div>
        </div>
      
    </div>
  )
}

export default Work