import React from 'react'

const Button = ({text}) => {
  return (<>

    <button className="group relative h-12 rounded-full bg-gray-700/40 backdrop-blur-[3px]  px-4 text-white"><span className="relative inline-flex overflow-hidden"><div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[130%] group-hover:skew-y-12">{text}</div><div className="absolute translate-y-[130%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">{text}</div></span></button>




    </>
  )
}

export default Button