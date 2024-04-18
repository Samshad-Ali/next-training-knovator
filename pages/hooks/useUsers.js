import { useRouter } from 'next/router'
import { context } from '../Context'
import { useContext, useEffect, useState } from 'react'
import { routes } from '../utils/routes'
import commonApi from '../api/common'

const useUsersHook = () => {
  const router = useRouter()
  const { setIsActivePage, setLoader } = useContext(context)
  const [usersData, setUsersData] = useState([])
  const fetchingUsersData = async () => {
    try {
      // setLoader(true)
      const response = await commonApi({
        common: true,
        module: 'users',
        action: 'list',
        data: {
          options: {
            limit: 20,
            offset: 0,
            page: 1,
            populate: ['roles.roleId'],
            select: ['-passwords'],
            sort: { createdAt: -1 },
          },
          query: { search: '', searchColumns: ['name', 'email', 'mobNo'] },
        },
      })
      // setLoader(false)
      setUsersData(response[1]?.data?.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (router.asPath == routes.users) {
      setIsActivePage(true)
    }
    fetchingUsersData()
  }, [])
  return {
    usersData,
  }
}

export default useUsersHook
