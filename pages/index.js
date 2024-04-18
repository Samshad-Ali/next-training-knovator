
import Login from './components/Login'
import { publicRoutes } from './utils/publicRoutes'

export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center w-full h-screen bg-gray-100 text-black'>
      <Login/>
      <div className='flex gap-4 absolute bottom-10'>
        <span className='font-light hover:text-cyan-300 cursor-pointer'>Privacy Policy</span>
        <span>|</span>
        <span className='font-light hover:text-cyan-300 cursor-pointer'>Terms & Conditions</span>
      </div>
    </main>
  )
}

export const getServerSideProps= publicRoutes()
