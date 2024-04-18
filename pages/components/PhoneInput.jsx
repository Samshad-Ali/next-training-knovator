import React, { useState } from 'react'
import useAddUserHooks from '../hooks/useAddUser';
import Select from 'react-select'

const PhoneInput = ({name,
    type = 'text',
    placeholder,
    label,
    register,
    errors,phonNdropDown}) => {
      // console.log('from jsx',phonNdropDown)
      const [selectedOption,setSelectedOption] = useState('62');
      const handleChange=(selectedOption)=>{
        setSelectedOption(selectedOption)
        console.log('from selected',selectedOption)
      }
  return (
    <div className="flex flex-col p-4 gap-2">

    <label className="text-lg text-gray-500">
      {' '}
      {label} <span className="text-red-500">*</span>{' '}
    </label>
    <div className='w-full flex flex-row-reverse border rounded-md'>
    <input
      className="p-4 rounded-md outline-cyan-400 flex-1"
      type={type}
      name={name}
      placeholder={placeholder}
      {...register(name)}
    />
  <Select className='bg-transparent border-none p-4'
   options={phonNdropDown} 
   value={selectedOption}
   onChange={handleChange}
   
   />
    </div>
         <p className=' text-red-500 text-sm'> {errors[name]?.message} </p>
  </div>
  )
}

export default PhoneInput