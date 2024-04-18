import React, { useContext } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoFilterSharp } from "react-icons/io5";
import { context } from '../Context';
import useAddUserHooks from '../hooks/useAddUser';
const UsersHeader = () => {
       const {handleAddUser} = useAddUserHooks()
  return (
    <div className=' flex justify-between shadow-sm bg-white shadow-gray-200 p-6'>
    <h1 className='text-xl font-bold'>Users</h1>
    <div className='flex gap-4'>
      <div className='relative border  outline-cyan-400 rounded-md flex items-center gap-2'>
        <span className='text-xl text-gray-500 left-2 absolute'><CiSearch/></span>
        <input className=' pl-8 w-full h-full outline-cyan-400 rounded-md' type='search' placeholder='Search...' />
      </div>
      <button
      onClick={handleAddUser}
       className='text-white flex gap-2 items-center p-3 bg-cyan-400 hover:bg-cyan-500 rounded-md px-4 tracking-wide text-lg'>
      <span className='text-xl'>
      +
      </span>
      Add User</button>
      <button className='p-3 px-5 bg-gray-900 hover:bg-cyan-500 text-white text-xl rounded-md'> <IoFilterSharp/> </button>
    </div>
</div>
  )
}

export default UsersHeader