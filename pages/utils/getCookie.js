import Cookies from "js-cookie"

export const getCookie=(key)=>{
   const token =  Cookies.get(key)
   return token;
}

export const setCookie=(key,value)=>{
   Cookies.set(key,value,{expires:10})
}