import { useRouter } from 'next/router'
import { context } from '../Context'
import { useContext, useEffect, useState } from 'react'
import { routes } from '../utils/routes'
import commonApi from '../api/common'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// name schema-------------
 const profileNameSchema = yup.object({
  fName: yup.string().required('First Name is required'),
  lName: yup.string().required('Last Name is required'),
  email: yup.string().email().required(),
})


const useProfileHook = () => {
  const router = useRouter()
  const { setIsActivePage,setLoader } = useContext(context);
  const [userProfileData,setUserProfileData] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    resolver: yupResolver(profileNameSchema),
  })

  const onSubmit = async(data) => {
    const response = await commonApi({
      data:{
        courseApproval:false,
        email: data.email,
        firstName:data.fName,
        lastName:data.lName,
        role:userProfileData.role,
        id:userProfileData.id,
        name:`${data.fName} ${data.lName}`
      },
      common:true,
      action:'profileUpdate',
      module:'updateUser'
    })
    console.log('response from update profile',response);
  }
  const fetchingProfileData = async () => {
    try {
      setLoader(true)
      const response = await commonApi({ action:'profile' })
      setLoader(false)
      console.log('response from fetchingprofiledata',response)
      const profileData = {
        fName:response[1]?.data?.firstName,
        lName:response[1]?.data?.lastName,
        email:response[1]?.data?.email,
        role:response[1]?.data.roles[0].roleId.code,
        id:response[1]?.data._id
      }
      // console.log('profileData is from profiledata',profileData)
      setUserProfileData(profileData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchingProfileData()
    if (router.asPath == routes.profile) {
      setIsActivePage(true)
    }
  }, [])

  useEffect(()=>{
    setValue('fName',userProfileData?.fName)
    setValue('lName',userProfileData?.lName)
    setValue('email',userProfileData?.email)
  },[userProfileData])

  return {
    handleSubmit,
    onSubmit,
    register,
    errors,
  }
}

export default useProfileHook
