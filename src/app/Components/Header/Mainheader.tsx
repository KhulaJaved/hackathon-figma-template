import React from 'react'
import Topheader from './Topheader'
import Middleheader from './Middleheader'
import Bottomheader from './Bottomheader'


const Mainheader = () => {
  return (
    <div>
        <div className="flex justify-between items-center px-6 lg:px-72 py-3 w-[1920px] h-[203px] bg-white">
            <Topheader />
            <Middleheader />
            <Bottomheader />
            
        </div>

    </div>
  )
}

export default Mainheader
