import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export const Footer = () => {
  return (
    <div className='w-full bg-slate-100'>
        <div className='max-w-[1200px] m-auto max-h-[500px] lg:max-h-[450px] md:max-h-[450px] sm:max-h-[450px] h-screen flex justify-center items-center flex-col p-0 lg:p-5'>
          <div className='flex justify-center items-center w-full h-[95%] flex-col lg:flex-row md:flex-row sm:flex-row p-3'>
            <div className='flex flex-col items-center lg:items-start md:items-start sm:items-start h-[80%] w-full lg:w-[40%] gap-2 p-3 text-center lg:text-start md:text-start sm:text-start'>
              <h1 className='font-extrabold text-4xl'>LOGO</h1>
              <p className='font-semibold w-full lg:w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo ipsa, earum ut quisquam non, si amet.</p>
              <span className='flex text-2xl items-center gap-3 justify-center lg:justify-start md:justify-start sm:justify-start'><FaInstagram/> <FaXTwitter/> <FaFacebook/></span>
            </div>
            <div className='flex justify-center items-center h-[80%] w-full lg:w-[60%] p-3'>
              <div className='flex justify-center gap-8 text-xs lg:text-lg md:text-lg sm:text-md'>
                <div className='flex flex-col gap-5'>
                  <p className='font-bold text-lg'>Services</p>
                  <ul className='flex gap-2 flex-col'>
                    <li><a href="#">Lorem, ipsum.</a></li>
                    <li><a href="#">Lorem.</a></li>
                    <li><a href="#">Lorem, ipsum.</a></li>
                    <li><a href="#">Lorem, ipsum dolor.</a></li>
                  </ul>
                </div>
                <div className='flex flex-col gap-5'>
                  <p className='font-bold text-lg'>Services</p>
                  <ul className='flex gap-2 flex-col lg:w-[90%]'>
                    <li><a href="#">Lorem.</a></li>
                    <li><a href="#">Lorem, ipsum.</a></li>
                    <li><a href="#">Lorem, ipsum.</a></li>
                    <li><a href="#">Lorem, ipsum dolor.</a></li>
                    <li><a href="#">Lorem ipsum dolor sit.</a></li>
                  </ul>
                </div>
                <div className='flex flex-col gap-5'>
                  <p className='font-bold text-lg'>Services</p>
                  <ul className='flex gap-2 flex-col'>
                    <li><a href="#">Lorem, ipsum.</a></li>
                    <li><a href="#">Lorem, ipsum.</a></li>
                    <li><a href="#">Lorem.</a></li>
                    <li><a href="#">Lorem, ipsum dolor.</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
            <div className='flex items-center justify-center lg:justify-start md:justify-start sm:justify-start md:items-end sm:items-end lg:items-end h-[5%] text-slate-500 w-full mb-2 text-xs lg:text-md md:text-md sm:text-sm ps-3'>
                <p className=''>Website copyright by &copy; ciessnaputra_ | Terms Policy | Services</p>
            </div>
        </div>
    </div>
  )
}
