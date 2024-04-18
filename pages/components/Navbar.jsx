import Link from 'next/link'
import { GoPeople } from 'react-icons/go'
import { RiShieldUserLine } from 'react-icons/ri'
import { BsPersonFillLock } from 'react-icons/bs'
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io'
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from 'react-icons/io'
import useNavbarHook from '../hooks/useNavbarHook'
import { useRouter } from 'next/router'
import { routes } from '../utils/routes'
const Navbar = () => {
  const router = useRouter()
     const {  dashboardIcon,setDashboardIcon,
      userIcon,setUserIcon,
      profileIcon,setProfileIcon,
      showProfileBtn,setShowProfileBtn,
      navBarToggler,
      setNavBarToggler,
      isActivePage,
      handleLogOutBtn} = useNavbarHook();
  return (
    <nav className="min-h-screen flex bg-gray-800 justify-center relative">
      <div className="absolute top-5 -right-3 text-3xl bg-white rounded-full">
        <span
          className="bg-gray-900 cursor-pointer"
          onClick={() => {
            setNavBarToggler(!navBarToggler)
          }}
        >
          {navBarToggler ? (
            <IoMdArrowDropleftCircle />
          ) : (
            <IoMdArrowDroprightCircle />
          )}
        </span>
      </div>
      <div className="flex flex-col justify-between">
        <div className="shadow-sm shadow-gray-500 p-4 flex items-center justify-center">
          <span className="cursor-pointer">
            <img
              className="h-8"
              src={navBarToggler ? '/logo.png' : '/logo-icon.png'}
              alt="logo-icon"
            />
          </span>
        </div>
        <div
          className={`p-2 flex-1 gap-2 flex flex-col ${
            navBarToggler ? 'items-start' : 'items-center'
          } overflow-auto`}
        >
          <div
            className={`w-full ${navBarToggler ? '' : 'flex justify-center'}`}
          >
            <Link
              onMouseEnter={() => setDashboardIcon(true)}
              onMouseLeave={() => setDashboardIcon(false)}
              className={`flex gap-3  rounded-lg text-white  p-3 hover:bg-cyan-400 ${
                isActivePage && router.asPath == routes.dashboard
                  ? 'bg-cyan-400'
                  : ''
              } `}
              href={routes.dashboard}
            >
              <span className={`text-xl ${dashboardIcon && 'animate-vibrate'}`}>
                <GoPeople />
              </span>
              {navBarToggler && 'Dashboard'}
            </Link>
          </div>
          <div
            className={`w-full ${navBarToggler ? '' : 'flex justify-center'}`}
          >
            <Link
              onMouseEnter={() => setUserIcon(true)}
              onMouseLeave={() => setUserIcon(false)}
              className={`flex gap-3  rounded-lg text-white  p-3  hover:bg-cyan-400 
              ${isActivePage && router.asPath == routes.users ? 'bg-cyan-400' : ''}
              `}
              href={routes.users}
            >
              <span className={`text-xl ${userIcon && 'animate-vibrate'}`}>
                <RiShieldUserLine />
              </span>
              {navBarToggler && 'Users'}
            </Link>
          </div>
        </div>
        <div className="p-2 shadow-sm shadow-gray-400">
          <div className={`w-full`}>
            <button
              onClick={() => setShowProfileBtn((pre) => !pre)}
              className={` ${
                isActivePage && router.asPath == routes.profile ? 'bg-cyan-400' : ''
              } flex ${
                navBarToggler ? 'gap-3' : 'gap-0'
              } items-center rounded-lg text-white  p-3 hover:bg-cyan-400 duration-150 transition-all`}
              onMouseEnter={() => {
                setProfileIcon(true)
              }}
              onMouseLeave={() => {
                setProfileIcon(false)
              }}
            >
              <span
                className={`text-xl transform transition-transform ${
                  profileIcon && 'animate-vibrate'
                } `}
              >
                <BsPersonFillLock />
              </span>
              <p>{navBarToggler && 'Knovator Mailinatord'}</p>
              <span className="transition-all duration-100">
                {navBarToggler &&
                  (showProfileBtn ? <IoIosArrowDown /> : <IoIosArrowForward />)}
              </span>
            </button>
          </div>
          {showProfileBtn && (
            <div
              className={` ${
                navBarToggler
                  ? 'flex flex-col items-start p-2 gap-2'
                  : 'absolute bottom-0 flex  flex-col items-center left-16 p-2 rounded-lg w-40 bg-gray-800'
              }`}
            >
              <Link
                href={routes.profile} onClick={()=>{setShowProfileBtn(!showProfileBtn)}}
                className="hover:bg-cyan-900 hover:bg-opacity-60 w-full rounded-lg text-white font-light text-start p-2"
              >
                View Profile
              </Link>
              <button onClick={handleLogOutBtn} className="hover:bg-cyan-900 hover:bg-opacity-60 w-full rounded-lg text-white font-light text-start p-2">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
