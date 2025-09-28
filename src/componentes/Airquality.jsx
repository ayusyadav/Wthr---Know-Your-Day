import React from 'react'

const Airquality = ({ pm25, so2, no2, o3 }) => {
    return (
        <>
            <div className='flex flex-row justify-around items-center p-2'>
                <span className='flex flex-col justify-center items-center w-20 max-lg:gap-1 lg:gap-4'>
                    <span >
                        PM2.5
                    </span>
                    <span className='text-2xl'>
                        {pm25}
                    </span>
                </span>
                <span className='flex flex-col justify-center items-center w-20 max-lg:gap-1 lg:gap-4'>
                    <span >
                        SO2
                    </span>
                    <span className='text-2xl'>
                        {so2}
                    </span>
                </span>
                <span className='flex flex-col justify-center items-center w-20 max-lg:gap-1 lg:gap-4'>
                    <span>
                        NO2
                    </span>
                    <span className='text-2xl'>
                        {no2}
                    </span>
                </span>
                <span className='flex flex-col justify-center items-center w-20 max-lg:gap-1 lg:gap-4'>
                    <span>
                        O3
                    </span>
                    <span className='text-2xl'>
                        {o3}
                    </span>
                </span>
            </div>
        </>
    )
}

export default Airquality