import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import commonApi from '../api/common'
import { useContext, useEffect, useState } from 'react'
import { context } from '../Context'

const addUserSchema = yup.object({
  fName: yup.string().required('First Name is required'),
  lName: yup.string().required('Last Name is required'),
  email: yup.string().email().required('Email is required'),
  phoneNumber: yup
  .string().required('Phone Number is required')
  .matches(/^\d{7}$/, 'Minimum 7 numbers are required.')
  ,
  role: yup.string().required(),
})
const useAddUserHooks = () => {
  const {setShowPage} = useContext(context)
  const [phonNdropDown,setPhonNdropDown] = useState([])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addUserSchema),
  })
  const onSubmit =async (data) => {
    const response = await commonApi({
      common:true,
      action:'list',
      module:'users/create',
      data:{
        countryCode: "62",email:data.email,firstName:data.fName,lastName:data.lName,
        mobNo:data.phoneNumber
      }
    })
    console.log('add user form', data)
  }
  const handleAddUser=()=>{
    setShowPage(true)
 
  }
  useEffect(()=>{
    commonApi({
      action:'all',
      data:{
        options:{pagination:false}
      }
    }).then((res)=>{
      const PhoneNumberKeyValue = res[1]?.data?.data?.map((data)=>{
        return {
          label:data?.ISDCode,
          value:data?.ISDCode,
        }
      })
      setPhonNdropDown(PhoneNumberKeyValue)
    }).catch(err=>console.log('err',err))
  },[])
  return {
    handleSubmit,
    onSubmit,
    register,
    errors,
    handleAddUser,
    phonNdropDown
  }
}

export default useAddUserHooks
