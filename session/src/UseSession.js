import {useState, useEffect, useCallback, useRef} from 'react';
function useSession(timeout=60000){
    const [session, setSession]=useState(()=>{
        const storedSession= localStorage.getItem('session');
        return storedSession? JSON.parse(storedSession):null;
    });
    const timeoutRef= useRef();
    const clearSession= useCallback(()=>{
        setSession(null);
        localStorage.removeItem('session');
    },[]);
    const resetTimeout= useCallback(()=>{
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current=setTimeout(clearSession,timeout);
    },[clearSession,timeout]);
    const saveSession=(sessionData)=>{
        setSession(sessionData);
        localStorage.setItem('session',JSON.stringify(sessionData));
        resetTimeout();
    };
    useEffect(()=>{
        if(session){
            resetTimeout();
        }
        return()=>{
            if(timeoutRef.current){
                clearTimeout(timeoutRef.current);
            }
        };
    },[session,resetTimeout]);
    return { session,saveSession,clearSession};
}
export default useSession;