import React from 'react'

const InputField = ({
  label,
  name,
  placeholder,
  type = 'text',
  register,
  errors,
}) => {
 
  return (
      <div className="flex flex-col gap-1 w-[40%]">
        <label htmlFor={name} className="text-gray-500">
          {label} <span className="text-red-400">*</span>{' '}
        </label>
        <div className='relative'>
        <input
          className={` ${
            type == 'email'
              ? 'bg-gray-100 outline-none cursor-default'
              : 'outline-cyan-400'
          } p-3 rounded-md border w-full`}
          {...register(name)}
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          readOnly={type === 'email'}
        />
        <p className='absolute text-red-500 text-sm'> {errors[name]?.message} </p>
        </div>
        
      </div>
    
  )
}

export default InputField
