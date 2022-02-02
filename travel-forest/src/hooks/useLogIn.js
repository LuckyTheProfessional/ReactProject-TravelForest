import { useState, useEffect } from "react"

//Firebase authentication
import { auth } from '../firebaseConfig/firebase';

//Context
import { AuthContext } from "../context/AuthContext";

//React Hooks
import { useContext } from "react";

const useLogIn = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);   
    const { dispatch } = useContext(AuthContext);   


    const logIn = async (email, password) => {
    setIsPending(true);
    setError(null);
    
    try {
        const response = await auth.signInWithEmailAndPassword(email, password)

        dispatch({type: 'LOG_IN', payload: response.user})

        if (!isCancelled) {
            setIsPending(false);
            setError(null);
        }
    }
    catch(err){
        if (!isCancelled) {
            setIsPending(false);
            setError(err.message);
        }
    }
    }

    useEffect(() => {
        return () => setIsCancelled(true);
    }, [])

    return { isPending, error, logIn }
}

export default useLogIn
