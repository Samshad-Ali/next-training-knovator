
import { useRouter } from 'next/router';
import { routes } from '../utils/routes';
import { useContext, useEffect } from 'react';
import { context } from '../Context';
const useDashboardHook = () => {
    const router = useRouter();
    const {setIsActivePage} = useContext(context);
    useEffect(()=>{
        if(router.asPath==routes.dashboard){
            setIsActivePage(true)
        }
    },[])
    return{

    }
}

export default useDashboardHook