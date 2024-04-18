import { useRouter } from 'next/router'
import { getCookie, setCookie } from '../utils/getCookie'
import commonApi from '../api/common'
import { useEffect } from 'react'
import { routes } from '../utils/routes'

const useIdHook = () => {
  const router = useRouter()
  const token = router?.query?.token;

  const fetchingProfileData = async () => {
    try {
      await commonApi({ action: 'profile', config: { token } }).then(
        async ([errors, DATA]) => {
          const data = DATA?.data
          await fetch('api/login', {
            method: 'POST',
            body: JSON.stringify({
              token,
              user: {
                courseApproval: false,
                firstName: data?.firstName,
                id: data?._id,
                lastName: data?.lastName,
                name: data?.name,
                role: data?.permissions?.role[0],
              },
            }),
          }).then(() => {
            router.push(routes.dashboard)
          })
        },
      )
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (token) {
      setCookie('token', token)
      fetchingProfileData()
    }
  },[token])

  return { fetchingProfileData }
}

export default useIdHook
