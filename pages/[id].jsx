import React from 'react'
import Login from './components/Login'
import useIdHook from './hooks/useId';
import { publicRoutes } from './utils/publicRoutes';

const Page = () => {
  useIdHook()
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen bg-gray-100 text-black'>
        <Login/>    
    </div>
  )
}

export default Page;

export const getServerSideProps = publicRoutes()
