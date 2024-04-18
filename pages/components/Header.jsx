import React from 'react'

const Header = ({title}) => {
  return (
    <div className='shadow-sm bg-white shadow-gray-200 p-6'>
    <h1 className='text-xl font-bold'>{title}</h1>
</div>
  )
}

export default Header