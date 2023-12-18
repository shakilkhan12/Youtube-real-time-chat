import Image from 'next/image'
import React from 'react'

const ConversationsList = () => {
  return (
    <div className='mt-6 px-4'>
        <ul className='flex items-center gap-[15px] px-3 py-2 bg-[#312F2F] rounded-[10px] cursor-pointer'>
            <div className='w-14 h-14 relative'>
                <span className='absolute top-0 right-0 bg-[#00FF38] w-[15px] h-[15px] rounded-full z-10'></span>
                <Image src="/images/user1.png" fill className='w-full h-full object-cover rounded-full' alt="user image" />
            </div>
            <div>
                <span className='text-white capitalize text-xs font-semibold'>Darshan Zalavadiya</span>
                <span className='text-[#767876] block text-xs font-semibold'>Good work!</span>
            </div>
        </ul>
        <ul className='flex items-center gap-[15px] px-3 py-2 bg-[#312F2F] rounded-[10px] cursor-pointer mt-[13px]'>
            <div className='w-14 h-14 relative'>
                <span className='absolute top-0 right-0 bg-[#00FF38] w-[15px] h-[15px] rounded-full z-10'></span>
                <Image src="/images/user2.svg" fill className='w-full h-full object-cover rounded-full' alt="user image" />
            </div>
            <div>
                <span className='text-white capitalize text-xs font-semibold'>Darshan Zalavadiya</span>
                <span className='text-[#767876] block text-xs font-semibold'>Good work!</span>
            </div>
        </ul>
        <ul className='flex items-center gap-[15px] px-3 py-2 bg-[#312F2F] rounded-[10px] cursor-pointer mt-[13px]'>
            <div className='w-14 h-14 relative'>
                <span className='absolute top-0 right-0 bg-[#00FF38] w-[15px] h-[15px] rounded-full z-10'></span>
                <Image src="/images/user3.png" fill className='w-full h-full object-cover rounded-full' alt="user image" />
            </div>
            <div>
                <span className='text-white capitalize text-xs font-semibold'>Darshan Zalavadiya</span>
                <span className='text-[#767876] block text-xs font-semibold'>Good work!</span>
            </div>
        </ul>
        <ul className='flex items-center gap-[15px] px-3 py-2 bg-[#312F2F] rounded-[10px] cursor-pointer mt-[13px]'>
            <div className='w-14 h-14 relative'>
                <span className='absolute top-0 right-0 bg-[#00FF38] w-[15px] h-[15px] rounded-full z-10'></span>
                <Image src="/images/user4.png" fill className='w-full h-full object-cover rounded-full' alt="user image" />
            </div>
            <div>
                <span className='text-white capitalize text-xs font-semibold'>Darshan Zalavadiya</span>
                <span className='text-[#767876] block text-xs font-semibold'>Good work!</span>
            </div>
        </ul>
        
    </div>
  )
}

export default ConversationsList