import React from 'react'

const ForecastCard = ({temp , date, day , month , icon}) => {
    return (<>
        <div className='bg-gray-900/40 p-3 hover:bg-gray-700/60 px-5 rounded-3xl flex flex-row justify-between items-center min-h-15 transition'>
            <span className='flex gap-2 items-center'>
                <img className='w-8' src={icon} alt="" />
                {temp}&deg;
            </span>
            <span>
                {date} {month}
            </span>
            <span>
                {day}
            </span>
        </div>
    </>
    )
}

export default ForecastCard