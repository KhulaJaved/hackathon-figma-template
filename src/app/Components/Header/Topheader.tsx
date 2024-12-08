import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowDropdown } from "react-icons/io";

const Topheader = () => {
  return (
    <div>
        <div className="absolute inset-0 w-full h-[45px] flex justify-between items-center bg-black">
            <div className='flex items-center gap-2 mx-auto w-[255px] h-4 opacity-70 flex-none order-0'>
                <div className='w-4 h-4 flex-none order-0'>
                   <FaCheck />
                </div>
                <p className='text-white font-inter font-normal text-[13px] leading-[110%] capitalize'>Free shipping on all orders over $50</p>
            </div>


            <div className='flex flex-row items-start gap-6 mx-auto w-[202px] h-[17px] opacity-70 flex-none order-1'>
                <div className='flex flex-row items-center gap-1.5 w-[37px] h-[17px] flex-none order-0'>
                    <p className='w-[24px] h-[17px] font-inter font-normal text-[13px] leading-[130%] text-center text-white flex-none order-0'>Eng</p>
                    <IoIosArrowDropdown className='text-white' />
                </div>
                <p className='w-[30px] h-[17px] font-inter font-normal text-[13px] leading-[130%] text-center text-white flex-none order-2'>Faqs</p>
                <p className='w-[30px] h-[17px] font-inter font-normal text-[13px] leading-[130%] text-center text-white flex-none order-2'>need help</p>

            </div>
        </div>
    </div>
  )
}
export default Topheader