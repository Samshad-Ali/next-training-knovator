
import { createContext, useState } from "react";

export const context = createContext();
export default function ContextWrapper({children}){
    const [userData,setUserData] = useState('Data is not available');
    // const [profileData,setProfileData] = useState('')
    const [navBarToggler,setNavBarToggler] = useState(true);
    const [isActivePage,setIsActivePage] = useState(false);
    const [showPage,setShowPage] = useState(false)
    const [isDelete,setIsDelete] = useState(false)
    const [loader,setLoader] = useState(false)
    return(
        <context.Provider 
        value={{
            userData,setUserData,
            navBarToggler,setNavBarToggler,
            isActivePage,setIsActivePage,
            showPage,setShowPage,
            isDelete,setIsDelete,
            loader,setLoader
            // profileData,setProfileData
        }}
        >
    {children}
        </context.Provider>
    )
}