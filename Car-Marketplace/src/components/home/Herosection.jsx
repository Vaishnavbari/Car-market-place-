import React from 'react'
import Search from "@/components/home/select"


function Herosection() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-10 py-5'>
        <h4 className='font-bold text-[18px] md:text-[20px] text-center'>
            Find cars for sale and for rent near you
        </h4>
        <h1 className='font-bold text-[40px] md:text-[50px] text-center'>
            Find Your Dream Car
        </h1>
        <Search />
        <img src="src/assets/tesla.png" alt="tesla" />

    </div>
  )
}

export default Herosection;
