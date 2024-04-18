import { context } from '../Context'
import { useRouter } from 'next/router'
import { setItem } from '../utils/getCookie'
import { useContext, useState } from 'react'
import { routes } from '../utils/routes'
import Cookies from 'js-cookie'
const useNavbarHook = () => {
  const router = useRouter()
  const [dashboardIcon, setDashboardIcon] = useState(false)
  const [userIcon, setUserIcon] = useState(false)
  const [profileIcon, setProfileIcon] = useState(false)
  const [showProfileBtn, setShowProfileBtn] = useState(false)
  const {
    navBarToggler,
    setNavBarToggler,
    isActivePage,
    setIsActivePage,
  } = useContext(context)

  //   logout btn -------
  const handleLogOutBtn = () => {
    Cookies.remove('token')
    router.push(routes.login)
  }
  return {
    dashboardIcon,setDashboardIcon,
    userIcon,setUserIcon,
    profileIcon,setProfileIcon,
    showProfileBtn,setShowProfileBtn,
    navBarToggler,
    setNavBarToggler,
    isActivePage,
    setIsActivePage,
    handleLogOutBtn,
  }
}

export default useNavbarHook
