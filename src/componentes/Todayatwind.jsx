import React from 'react'

const Todayattemp = ({ speed, time, angle }) => {
    const rotationStyle = {
        transform: `rotate(${angle}deg)`
    };
    const staticClasses = 'transition-transform duration-500 ease-linear'; 

    return (
        <>
            <div className='bg-gray-700/40 backdrop-blur-[3px] back rounded-3xl w-[23%] h-fit p-3 flex flex-col justify-center items-center gap-3 text-sm'>
                <div>
                    {time}
                </div>
                <div>
                    <img 
                        width={30} 
                        className={staticClasses} 
                        style={rotationStyle}
                        src="./cursor.svg" 
                        alt="Directional cursor" 
                    />
                </div>
                <div>
                    {speed} km/h
                </div>
            </div>
        </>
    )
}

export default Todayattemp