import { useState, useEffect, useContext } from 'react';

//Context
import { AuthContext } from '../context/AuthContext';

//Firebase Auth
import { auth } from '../firebaseConfig/firebase';

const useLogOut = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);   
    const { dispatch } = useContext(AuthContext);   


    const logOut = async () => {
    setIsPending(true);
    setError(null);
    
    try {
        await auth.signOut()

        dispatch({type: 'LOG_OUT'});

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

    return { isPending, error, logOut }


}

export default useLogOut
