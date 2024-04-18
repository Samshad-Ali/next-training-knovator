import Link from 'next/link'
import React from 'react'

const Btn = ({value,routeUrl,type}) => {
  return (
    <>
    <Link className=' rounded-md bg-gray-900 tracking-wide text-white p-3 px-4 hover:bg-cyan-500' href={routeUrl?routeUrl:''}>Cancel</Link>
    <input
      className="cursor-pointer rounded-md bg-cyan-400 tracking-wide text-white p-3  px-4 hover:bg-cyan-500"
      type={type}
      value={value}
    />
    </>
  )
}

export default Btn