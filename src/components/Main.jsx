import React from 'react'
import main from '../assets/p.png'

export const Main = () => {
  return (
    <div className='w-full bg-slate-50 py-10'>
        <div className='max-w-[1200px] m-auto max-h-[650px] h-screen bg-slate-50 flex flex-col-reverse lg:flex-row md:flex-row sm:flex-row justify-center items-center'>
            <div className='flex justify-center items-center h-full w-[90%] lg:w-[50%] flex-col'>
              <div className='w-[80%] text-justify flex flex-col gap-4 pb-2'>
                <div className='flex-col'>
                  <h1 className='font-extrabold text-3xl sm:text-4xl md:text-4xl lg:text-5xl w-full text-center lg:text-start md:text-start sm:text-start lg:w-[78%] md:w-[80%] sm:w-[95%] drop-shadow-lg'>KERIKIL <br />COFFEE SHOP</h1>
                  <p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis</p>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea rem natus nobis ipsam eum reiciendis sed tenetur praesentium ullam cumque soluta dicta quas ex laboriosam exercitationem recusandae, sit nam distinctio?</p>
                <div className='flex items-center font-bold gap-2 ease-in-out duration-300 bg-white hover:bg-gray-300 rounded-3xl w-60'>
                  <button className='bg-black hover:bg-gray-900 ease-in-out duration-300 p-2 text-white rounded-3xl px-5'>BUY NOW</button>
                  <button>ORDER NOW</button>
                </div>
              </div>
            </div>
            <div className=' flex justify-center items-center h-full w-[90%] lg:w-[50%] pe-3'>
              <img src={main} className="" />
            </div>
        </div>
    </div>
  )
}
