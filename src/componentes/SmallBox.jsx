import React from 'react'

const SmallBox = ({ text, value, unit }) => {
    return (<>
        <div className='bg-gray-900/40 rounded-3xl w-[100%] lg:p-5 max-lg:p-3 flex flex-col justify-center  gap-3'>
            <span className='text-gray-400'>
                {text}
            </span>
            <span className='flex flex-row  gap-4 justify-between items-center'>
                <img src="./wind1.svg" className='lg:w-10 max-lg:w-8' alt="" />
                <span className='text-xl'>
                    {value}{unit}
                </span>
            </span>
        </div>
    </>
    )
}

export default SmallBox