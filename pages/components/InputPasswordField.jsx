import React from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import PasswordValidation from './PasswordValidation'
import useProfilePasswordHook from '../hooks/useProfilePassword'

const InputPasswordField = ({
  eyeToggle,
  setEyeToggle,
  label,
  name,
  placeholder,
  register,
  errors,
}) => {
  const { handleInputChange,validation } = useProfilePasswordHook()
  return (
    <div className="flex relative flex-col gap-1 w-[40%]">
      <label htmlFor={name} className="text-gray-500">
        {label} <span className="text-red-400">*</span>{' '}
      </label>
      <div className="relative">
        <span
          onClick={setEyeToggle}
          className="absolute bottom-4 right-3 text-lg cursor-pointer"
        >
          {' '}
          {eyeToggle ? <FiEye /> : <FiEyeOff />}{' '}
        </span>
        <input
          className="p-3 rounded-md outline-cyan-500 border w-full"
          onInput={handleInputChange}
          {...register(name)}
          type={eyeToggle ? 'text' : 'password'}
          name={name}
          id={name}
          placeholder={placeholder}
        />
      </div>

      {name === 'newPassword' ? (
        <PasswordValidation
          name={name}
          errors={errors}
          validation={validation}
        />
      ) : (
        <p className="text-red-500 absolute top-16 mt-3 text-sm">
          {' '}
          {errors[name]?.message}{' '}
        </p>
      )}
    </div>
  )
}

export default InputPasswordField
