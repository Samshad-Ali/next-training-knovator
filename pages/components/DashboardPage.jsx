import React from 'react'
import Navbar from './Navbar'
import Header from './Header'

const DashboardPage = () => {
  return (
    <div className='w-full min-h-screen flex'>
    <aside className=''>
        <Navbar />
    </aside>
    <div className=' flex-1 flex gap-2 flex-col bg-gray-100'>
      <Header title='Dashboard' />
        <div className='p-4'>
            <p className='text-lg'>Welcome to <b>Orbit Skills..!</b> </p>
        </div>
    </div>
</div>
  )
}

export default DashboardPage