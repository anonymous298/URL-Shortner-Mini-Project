import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-[#556B2F] p-2'>
      <nav className='w-[88%] mx-auto flex justify-between items-center'>
        <div className="logo text-white font-bold text-[28px]">HopLink</div>

        <div className='flex gap-x-10 justify-center items-center'>
            <Link href={'/'} className='text-white font-semibold text-[18px] underline hover:text-[#FFD6BA] transition-all'>Home</Link>
            <Link href={'/shortner'} className='font-bold text-[#556B2F] bg-[#FFD6BA] p-2 rounded-[12px] cursor-pointer hover:rounded-2xl transition-all hover:bg-[#DDF4E7]'>Try Now</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
