import React, { useContext } from 'react'
import { context } from '../Context'
import { RxCross2 } from "react-icons/rx";

const DeleteUser = () => {
    const {isDelete,setIsDelete,setShowPage} = useContext(context);
  return (
    <div
     className={`flex transition-all justify-center items-center absolute z-50 w-full min-h-screen bg-black bg-opacity-20`}>
        <div className=' w-1/3 gap-4 bg-white rounded-md p-4 flex flex-col justify-center items-center'>
    <span
    onClick={()=>{setIsDelete(false)}}
     className='text-3xl cursor-pointer hover:text-cyan-500 self-end'> <RxCross2/> </span>
        <p className='mt-4 text-3xl font-semibold'>Are you sure you want to Delete </p>
        <p className='text-red-500 text-4xl font-semibold'> { ` " Knovator " ` } </p>
        <div className=' mt-10 border-t w-full p-4 flex gap-4 justify-end items-center'>
            <button  className='text-white p-2 px-3 bg-gray-900 rounded-md'
            onClick={()=>{setIsDelete(false)}}
            >Close</button>
            <button className='text-white p-2 px-3 bg-red-500 rounded-md'>Delete</button>
        </div>
        </div>
     </div>
  )
}

export default DeleteUser