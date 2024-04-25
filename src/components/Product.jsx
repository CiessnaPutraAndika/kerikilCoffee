import React from 'react'
import kopi1 from '../assets/kops.png'
import kopi2 from '../assets/cup.png'
import kopi3 from '../assets/coffe.png'
import kopi4 from '../assets/OIP.png'

export const Product = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1200px] m-auto max-h-[450px] h-screen flex justify-center items-center'>
            <div className='flex flex-col items-center w-full lg:w-[80%] h-full justify-center'>
                <h1 className='p-5 font-extrabold text-3xl'>Best Product</h1>
                <div className='flex items-center w-[90%] lg:max-w-[820px] md:max-w-[700px] sm:max-w-[600px] h-[60%] gap-5 overflow-x-auto'>
                    <div className=' bg-slate-200 shadow-lg min-w-[250px] h-[250px] flex justify-center items-center flex-col rounded-lg'>
                        <div className='flex justify-center items-center w-full h-[60%] rounded-t-lg'>
                            <img src={kopi1} className="size-48  rounded-t-lg" />
                        </div>
                        <div className='flex justify-center w-full h-[40%] ps-3 flex-col'>
                            <p className='font-extrabold text-lg'>MOCHA COFFEE</p>
                            <p>IDR 25.000</p>
                            <button className='bg-black text-white font-semibold rounded-lg p-1 w-[40%]'>Buy Now</button>
                        </div>
                    </div>
                    <div className=' bg-slate-200 shadow-lg min-w-[250px] h-[250px] flex justify-center items-center flex-col rounded-lg'>
                        <div className='flex justify-center items-center w-full h-[60%] rounded-t-lg'>
                            <img src={kopi2} className=" rounded-t-lg" />
                        </div>
                        <div className='flex justify-center w-full h-[40%] ps-3 flex-col'>
                            <p className='font-extrabold text-lg'>CAPPUCCINO COFFEE</p>
                            <p>IDR 36.000</p>
                            <button className='bg-black text-white font-semibold rounded-lg p-1 w-[40%]'>Buy Now</button>
                        </div>
                    </div>
                    <div className=' bg-slate-200 shadow-lg min-w-[250px] h-[250px] flex justify-center items-center flex-col rounded-lg'>
                        <div className='flex justify-center items-center w-full h-[60%] rounded-t-lg'>
                            <img src={kopi3} className="size-40  rounded-t-lg" />
                        </div>
                        <div className='flex justify-center w-full h-[40%] ps-3 flex-col'>
                            <p className='font-extrabold text-lg'>ESPRESSO COFFEE</p>
                            <p>IDR 20.000</p>
                            <button className='bg-black text-white font-semibold rounded-lg p-1 w-[40%]'>Buy Now</button>
                        </div>
                    </div>
                    <div className=' bg-slate-200 shadow-lg min-w-[250px] h-[250px] flex justify-center items-center flex-col rounded-lg'>
                        <div className='flex justify-center items-center w-full h-[60%] rounded-t-lg'>
                            <img src={kopi4} className="size-44 rounded-t-lg" />
                        </div>
                        <div className='flex justify-center w-full h-[40%] ps-3 flex-col'>
                            <p className='font-extrabold text-lg'>CHOCOLATE CAPPUCCINO</p>
                            <p>IDR 40.000</p>
                            <button className='bg-black text-white font-semibold rounded-lg p-1 w-[40%]'>Buy Now</button>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
    </div>
  )
}
