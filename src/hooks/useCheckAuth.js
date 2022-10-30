
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { startLoadingParams } from "../store/dashboard/thunks";


export const useCheckAuth = () => {
    const {status} = useSelector(state => state.auth);
    const {isLoading} = useSelector(state => state.params);
    const dispatch = useDispatch();
    useEffect(() => {
      onAuthStateChanged(FirebaseAuth,async(user)=>{
        if(!user) return dispatch(logout());
        const {uid,email} = user;
        const displayName = email.substr(0,email.indexOf('@'));
        dispatch(login({uid,email,displayName}));
        dispatch(startLoadingParams());
      })
    }, []);
    return {
      status,
      isLoading
    }
    
}