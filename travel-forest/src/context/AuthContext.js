import { useReducer, useEffect } from "react";

import { createContext } from "react";

//Firebase config
import { auth } from '../firebaseConfig/firebase';

export const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {...state, user: action.payload}
        case 'LOG_OUT':
            return {...state, user: null}
        case 'AUTH_IS_READY':
            return {...state, user: action.payload, authIsReady: true}
        default:
            return {...state}
    }
}



export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        authIsReady: false
    });

    useEffect(() => {
      const unsub = auth.onAuthStateChanged((user) => {
          dispatch({ type: 'AUTH_IS_READY', payload: user });
          unsub();
      })
    }, [])

    return (
    <AuthContext.Provider value={{state, dispatch}}>
      {children}
    </AuthContext.Provider>
    )
}

