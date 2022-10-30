import { loginWithEmailPassword, logoutFirebase } from "../../firebase/providers";
import { checkingCredentials,logout,login} from "./"

export const startLoginWithEmailPassword = ({email,password})=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
        const {ok,uid,errorMessage=null} = await loginWithEmailPassword({email,password});
        if(!ok) return dispatch(logout({errorMessage}))
        const displayName = email.substr(0,email.indexOf('@'));
        dispatch(login({uid,email,displayName}));
    }
}

export const startLogout = ()=>{
    return async(dispatch) =>{
        await logoutFirebase();
        //TODO limpiar los datos que vienen de la DB
        dispatch(logout());
    }
}