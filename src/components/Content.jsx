import React from 'react'
import kopi from '../assets/kopi.png'
import bg from '../assets/outdoor.jpg'

export const Content = () => {
  return (
    <div className='img w-full rounded-t-3xl rounded-b-3xl pt-3'>
        <div className='max-w-[1200px] m-auto max-h-[650px] h-screen flex justify-center items-center flex-col gap-2 lg:gap-4 p-2'>
            <h1 className='font-extrabold text-4xl text-white drop-shadow-xl'>About COFFE</h1>
            <div className='flex justify-center items-center w-full lg:w-[90%] h-[90%] flex-col-reverse lg:flex-row md:flex-row sm:flex-row'>
                <div className='flex justify-center items-center w-full lg:w-[50%] h-[80%]'>
                    <img src={kopi} className="lg:size-max md:size-max sm:size-max size-60" />
                </div>
                <div className='flex justify-center items-center w-full lg:w-[50%] h-[80%] font-semibold text-justify bg-white rounded-xl bg-opacity-35 shadow-lg'>
                    <p className='w-[90%] text-black lg:w-[70%] text-sm md:text-lg sm:text-md lg:text-xl'><span className='font-extrabold text-3xl lg:text-6xl'>History</span> records that the discovery of coffee as a nutritious and energy drink was first discovered by the Ethiopians on the African continent about 3000 years (1000 BC) ago. Coffee then continues to grow until now it has become one of the most popular drinks in the world consumed by various circles of society.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
