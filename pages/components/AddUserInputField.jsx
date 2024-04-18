import React from 'react'

const AddUserInputField = ({
  name,
  type = 'text',
  placeholder,
  label,
  register,
  errors,
}) => {
  return (
    <div className="flex flex-col p-4 gap-2">
      <label className="text-lg text-gray-500">
        {' '}
        {label} <span className="text-red-500">*</span>{' '}
      </label>
      <input
        className="p-4 rounded-md outline-cyan-400 border"
        type={type}
        name={name}
        placeholder={placeholder}
        {...register(name)}
      />
           <p className=' text-red-500 text-sm'> {errors[name]?.message} </p>
    </div>
  )
}

export default AddUserInputField
