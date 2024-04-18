'use client'
import React from 'react'
import qs from 'qs'
const Login = () => {

  const loginWithOrbit = (url) => {
    
    const SSO_REDIRECT_PAYLOAD = {
      clientId:
        typeof window !== 'undefined' &&
        btoa(
          `${process.env.NEXT_PUBLIC_CLIENT_ID}:${process.env.NEXT_PUBLIC_CLIENT_SECRET}`,
        ),
      redirectUrl: process.env.NEXT_PUBLIC_DOMAIN_URL,
      redirectTitle: process.env.NEXT_PUBLIC_META_TITLE,
    }
    window.open(
      `${process.env.NEXT_PUBLIC_SSO_URL}/${url}?${qs.stringify(
        SSO_REDIRECT_PAYLOAD,
      )}`,
      '_self',
    )
  
  };


  return (
    <div className="w-[90%] sm:w-[70%] md:w-[60%] md:p-6 lg:w-4/12 flex flex-col gap-6 justify-center items-center bg-white shadow-lg shadow-gray-300 rounded-lg p-10 login">
      <span>
        <img className="h-16" src="/logo1.png" />
      </span>
      <h1 className="text-2xl md:text-4xl heading text-center font-bold text-gray-600">
        Welcome back!
      </h1>
      <button
        onClick={() => {
          loginWithOrbit('/login')
        }}
        className="bg-cyan-400 w-full transition-all hover:bg-cyan-500 text-white text-center px-4 py-2 rounded-lg"
      >
        Login with orbit
      </button>
      <p className="text-cyan-400 hover:text-black hover:underline cursor-pointer self-end">
        Forgot Password?
      </p>
    </div>
  )
}

export default Login
