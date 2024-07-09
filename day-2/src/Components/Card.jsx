import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDog, LuDownload } from 'react-icons/lu';

const Card = () => {
    return (
        <div className=' relative h-72 w-60 rounded-[40px] flex flex-col py-10 px-5   bg-zinc-900/90 text-white overflow-hidden '>


            <FaRegFileAlt className='text-whhite hover:text-yellow-400 cursor-pointer' />
            <p className='text-sm mt-5 leading-none font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

            <div className='footer absolute bottom-0 bg-green-400 w-full py-4 left-0'>
     
     <div className='flex justify-between px-3 items-center '>
        <h5>.4mb</h5>
 
     <LuDownload/>
     </div>
            </div>
        </div>


    )
}

export default Card
  