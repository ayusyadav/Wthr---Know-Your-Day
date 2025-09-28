import React from 'react'
import icon1 from '../assets/icons/icon1d.svg'

const Sunset = ({ sunset, sunrise , togive}) => {
    return (
        <>


            <div className='bg-gray-900/40 rounded-3xl max-lg:w-full  lg:w-1/2 p-3 lg:h-full max-lg:h-full'>
                <div className='flex justify-between items-center h-10'>
                    <span className='text-gray-400'>
                        Your 3-Hour Outlook
                    </span>
                </div>
                <div className='flex flex-row justify-around gap-3 items-center lg:p-3 max-lg:p-0 text-center'>
                    {togive}

                    {/* <div className='flex flex-row lg:gap-8 max-lg:gap-4 '>
                        <img src="./sun.svg" className='lg:w-13 max-lg:w-10' alt="" />
                        <span className='flex flex-col justify-center items-center'>
                            <span className='text-gray-400'>
                                Sunrise
                            </span>
                            <span className='lg:text-2xl max-lg:text-xl'>
                                {sunrise}
                            </span>
                        </span>
                    </div>
                    <div className='flex flex-row lg:gap-8 max-lg:gap-4'>
                        <img src="./moon1.svg" className='lg:w-13 max-lg:w-10' alt="" />
                        <span className='flex flex-col justify-center items-center'>
                            <span className='text-gray-400'>
                                Sunset
                            </span>
                            <span className='lg:text-2xl max-lg:text-xl'>
                                {sunset}
                            </span>
                        </span>
                    </div> */}
                </div>
                <div className='h-[1px] bg-gray-600/30 m-4'/>
                <div className='flex justify-between items-center h-10'>
                    <span className='text-gray-400'>
                        Sunrise & Sunset
                    </span>
                </div>
                <div className='flex flex-row justify-around gap-3 items-center lg:p-3 max-lg:p-0'>
                    <div className='flex flex-row lg:gap-8 max-lg:gap-4 '>
                        <img src={icon1} className='lg:w-13 max-lg:w-10' alt="" />
                        <span className='flex flex-col justify-center items-center'>
                            <span className='text-gray-400'>
                                Sunrise
                            </span>
                            <span className='lg:text-2xl max-lg:text-xl'>
                                {sunrise}
                            </span>
                        </span>
                    </div>
                    <div className='flex flex-row lg:gap-8 max-lg:gap-4'>
                        <img src="./moon.svg" className='lg:w-13 max-lg:w-10' alt="" />
                        <span className='flex flex-col justify-center items-center'>
                            <span className='text-gray-400'>
                                Sunset
                            </span>
                            <span className='lg:text-2xl max-lg:text-xl'>
                                {sunset}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sunset