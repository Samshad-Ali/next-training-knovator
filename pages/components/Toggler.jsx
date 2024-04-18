import React, { useEffect, useState } from 'react'
import commonApi from '../api/common'
import toast from 'react-hot-toast'

const Toggler = ({ original }) => {
  const [isToggle,setIsToggle] = useState(original?.isActive)

  const callingToggleApi = async () => {
    const response = await commonApi({
      common: true,
      module: original?.id,
      action: 'isToggle',
      data: {
        isActive:!isToggle,
      },
    })
    toast.success(response[1]?.message)
    if(response[1]?.code=='SUCCESS'){
      setIsToggle(!isToggle)
    }
  }
  const handleToggle = () => {
    callingToggleApi()
  }
  // useEffect(() => {
  //   callingToggleApi()
  // }, [])
  return (
    <button
      onClick={handleToggle}
      className={` relative inline-flex  items-center rounded-full transition-all duration-300 ${
        isToggle ? 'bg-green-600' : 'bg-gray-500'
      }`}
    >
      <span
        className={`absolute left-0 w-1/2 h-full rounded-full bg-white transition-all duration-300 ${
          isToggle
            ? 'transform translate-x-full'
            : 'transform translate-x-0'
        }`}
      />
      <span
        className={` w-6 h-6 relative z-10 text-white ${
          isToggle ? 'ml-6' : 'mr-6'
        }`}
      ></span>
    </button>
  )
}

export default Toggler
