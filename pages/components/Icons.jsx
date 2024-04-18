import React, { useContext } from 'react'
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Tooltip } from 'react-tooltip';
import { context } from '../Context';
const Icons = () => {
    const {isDelete,setIsDelete,setShowPage} = useContext(context);

  return (
    <div className='flex text-xl justify-center gap-4 items-center'>
    <span
    onClick={()=>{setShowPage(true)}}
     data-tooltip-id='tool-tip' data-tooltip-content='Click to Delete' className='text-cyan-500 cursor-pointer'>
    <MdOutlineEdit/>
    </span>
    <span
    onClick={()=>{setIsDelete(true)}}
     data-tooltip-id='tool-tip' data-tooltip-content='Click to Edit' className='text-red-500 cursor-pointer'>
    <RiDeleteBin5Line/>
    </span>
    <Tooltip id='tool-tip' />
    </div>
  )
}

export default Icons