import React, { useState } from 'react'
import { FaPhoneAlt, FaShoppingCart } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxHamburgerMenu } from 'react-icons/rx'

export const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className='w-full drop-shadow-lg'>
        <div className='max-w-[1200px] px-3 m-auto flex justify-between items-center py-3 drop-shadow-lg'>
          <p className='font-extrabold text-4xl'>LOGO</p>

          <div className='lg:hidden md:hidden sm:hidden flex justify-center items-center'>
            <button onClick={toggleMenu}>
              <GiHamburgerMenu className='text-2xl'/>
            </button>
          </div>

          <ul className='hidden lg:flex md:flex gap-4 font-semibold'>
            <li className='text-black hover:text-slate-700 ease-in-out duration-75'><a href="#">Home</a></li>
            <li className='text-black hover:text-slate-700 ease-in-out duration-75'><a href="#">Services</a></li>
            <li className='text-black hover:text-slate-700 ease-in-out duration-75'><a href="#">Join Us</a></li>
            <li className='text-black hover:text-slate-700 ease-in-out duration-75'><a href="#">About Us</a></li>
            <li className='text-black hover:text-slate-700 ease-in-out duration-75'><a href="#">Partnerships</a></li>
            <li className='text-black hover:text-slate-700 ease-in-out duration-75'><a href="#">Contact</a></li>
          </ul>
          <button className='hidden lg:flex md:flex sm:flex justify-center items-center gap-2 font-semibold rounded-lg bg-black hover:bg-slate-700 ease-in-out duration-300 text-white p-2 px-4'><FaShoppingCart/>Shop Now</button>
        </div>

        {/* mobile menu */}
        {menuOpen ? (
          <div className='flex-col gap-3 ms-4 mb-5 flex w-[150px]'>
            <ul className='flex-col lg:hidden md:hidden sm:hidden gap-2 font-bold flex'>
              <li className='text-black hover:text-slate-700 ease-in-out duration-75'><a href="#">Home</a></li>
              <li className='text-black hover:text-slate-700 ease-in-out duration-75'><a href="#">Services</a></li>
              <li className='text-black hover:text-slate-700 ease-in-out duration-75'><a href="#">Join Us</a></li>
              <li className='text-black hover:text-slate-700 ease-in-out duration-75'><a href="#">About Us</a></li>
              <li className='text-black hover:text-slate-700 ease-in-out duration-75'><a href="#">Partnerships</a></li>
              <li className='text-black hover:text-slate-700 ease-in-out duration-75'><a href="#">Contact</a></li>
            </ul>
            <button className='flex lg:hidden md:hidden sm:hidden justify-center items-center gap-2 font-semibold rounded-lg bg-black hover:bg-slate-700 ease-in-out duration-300 text-white p-2 px-4'><FaShoppingCart/>Shop Now</button>
          </div>
        ) : null}

    </div>
  )
}
