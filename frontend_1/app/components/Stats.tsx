import React from 'react'
import Link from 'next/link';

function Stats() {
  return (
   <div className='items-center'>
       <div className=' '>
        <Link  href="/deploy" >
          <button
              type="button"
              className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none `}
            >
              Get Started
            </button>
        </Link>
    </div></div>
  )
}

export default Stats
