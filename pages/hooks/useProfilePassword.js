import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import {
  alphabet,
  character,
  passwordAlphabetLowerUpperPattern,
  passwordCharacterPattern,
  passwordDigitSymbolPattern,
  symbol,
} from '../utils/constants'
const { useState, useEffect } = require('react')

const passwordSchema = yup.object({
  curPassword: yup.string().required('Current Password is required'),
  newPassword: yup
    .string()
    .min(8, 'Should contains at least 8 characters.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])/,
      'Should contain both lower (a-z) and upper case (A-Z) letter',
    )
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])/,
      'Should contain at least one number (0-9) and a symbol (`~!"#$%&()*,.:<>?@^{|})',
    )
    .required('New Password is required'),
  confPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'Password should match')
    .required('Confirm Password is required'),
})

const useProfilePasswordHook = () => {
  const [value, setValue] = useState('')
  const [validation, setValidation] = useState({
    isCharacter: false,
    isAlphabet: false,
    isSymbolDigit: false,
  })

  const CheckPasswordValidation = (key) => {
    switch (key) {
      case character:
        const isCharacter = passwordCharacterPattern.test(value)
        setValidation((prev) => ({ ...prev, isCharacter }))
        break
      case alphabet:
        const isAlphabet = passwordAlphabetLowerUpperPattern.test(value)
        setValidation((pre) => ({ ...pre, isAlphabet }))
        break
      case symbol:
        const isSymbolDigit = passwordDigitSymbolPattern.test(value)
        setValidation((pre) => ({ ...pre, isSymbolDigit }))
        break
    }
  }
  const handleInputChange = (e) => {
    setValue(e.target.value)
    CheckPasswordValidation('character')
    CheckPasswordValidation('alphabet')
    CheckPasswordValidation('symbol')
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(passwordSchema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }
  const [curPasswordEyeToggle, setcurPasswordEyeToggle] = useState(false)
  const [newPasswordEyeToggle, setNewPasswordEyeToggle] = useState(false)
  const [confPasswordEyeToggle, setConfPasswordEyeToggle] = useState(false)

  const handleCurPasswordToggler = () => {
    setcurPasswordEyeToggle(!curPasswordEyeToggle)
  }

  const handleNewPasswordToggler = () => {
    setNewPasswordEyeToggle(!newPasswordEyeToggle)
  }

  const handleConfPasswordToggler = () => {
    setConfPasswordEyeToggle(!confPasswordEyeToggle)
  }

  return {
    curPasswordEyeToggle,
    handleCurPasswordToggler,
    newPasswordEyeToggle,
    handleNewPasswordToggler,
    confPasswordEyeToggle,
    handleConfPasswordToggler,
    register,
    handleSubmit,
    errors,
    onSubmit,
    handleInputChange,
    validation,
  }
}

export default useProfilePasswordHook
