import React, { useEffect, useState } from 'react'
import { validationText } from '../utils/constants'

const PasswordValidation = ({ errors, name, validation }) => {
  return (
    <ul className=" w-full pl-5">
      <li className={`text-red-500`}>{errors[name]?.message}</li>
      <li
        className={` ${
          validation.isCharacter && 'text-green-500'
        } text-gray-500 list-disc`}
      >
        Should contains at least 8 characters.
      </li>
      <li
        className={` ${
          validation.isAlphabet && 'text-green-500'
        } text-gray-500 list-disc`}
      >
        Should contain both lower (a-z) and upper case (A-Z) letter
      </li>
      <li
        className={` ${
          validation.isSymbolDigit && 'text-green-500'
        } text-gray-500 list-disc`}
      >
        {
          validationText
        }
      </li>
    </ul>
  )
}

export default PasswordValidation
