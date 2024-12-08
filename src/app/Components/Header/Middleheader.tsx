import React from 'react'
import Image from "next/image"

const Middleheader = () => {
  return (
    <div>
      <div className='flex flex-row justify-between items-center px-5 sm:px-10 lg:px-[300px] py-5 gap-5 lg:gap-[302px] w-full max-w-[1920px] h-[84px] bg-[#F0F2F3]'>
        <div className='flex flex-row items-center gap-2 mx-auto w-[166px] h-[40px] sm:w-[140px] sm:h-[35px] lg:w-[166px] lg:h-[40px]'>
        <div className='w-[40px] h-[40px] sm:w-[30px] sm:h-[30px] lg:w-[40px] lg:h-[40px]'>
        <Image src={'/Logo Icon.png'} alt='image' width={26.67} height={23.33} />
        </div>
        
        <div>Comforty</div>
        
        </div>

      </div>
  
    </div>
    
  )
}

export default Middleheader







