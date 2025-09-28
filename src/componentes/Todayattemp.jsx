import React from 'react'
import icon1 from '../assets/icons/icon1d.svg'
const Todayattemp = ({temp, time, icon}) => {
    return (
        <>
            <div className='bg-gray-700/40 backdrop-blur-[3px] rounded-3xl  w-[23%] h-fit p-3 flex flex-col justify-center items-center gap-3 text-sm'>
                <div>
                    {time}
                </div>
                <div>
                    <img width={30} src={icon} alt="" />
                </div>
                <div>
                    {temp}&deg;
                </div>
            </div>
        </>
    )
}

export default Todayattemp