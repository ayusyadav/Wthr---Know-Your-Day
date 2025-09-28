import React from 'react'

const Airquality = ({ co, nh3, no, pm10 }) => {
    return (
        <>
            <div className='flex flex-row justify-around items-center p-2'>
                <span className='flex flex-col justify-center items-center w-20 max-lg:gap-1 lg:gap-4'>
                    <span >
                        CO
                    </span>
                    <span className='text-2xl'>
                        {co}
                    </span>
                </span>
                <span className='flex flex-col justify-center items-center w-20 max-lg:gap-1 lg:gap-4'>
                    <span >
                        NH3
                    </span>
                    <span className='text-2xl'>
                        {nh3}
                    </span>
                </span>
                <span className='flex flex-col justify-center items-center w-20 max-lg:gap-1 lg:gap-4'>
                    <span>
                        NO
                    </span>
                    <span className='text-2xl'>
                        {no}
                    </span>
                </span>
                <span className='flex flex-col justify-center items-center w-20 max-lg:gap-1 lg:gap-4'>
                    <span>
                        PM10
                    </span>
                    <span className='text-2xl'>
                        {pm10}
                    </span>
                </span>
            </div>
        </>
    )
}

export default Airquality