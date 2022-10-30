import { Alert, Button, Grid, TextField } from "@mui/material"
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm"
import { startLoginWithEmailPassword } from "../../store/auth/thunks";
import { AuthLayout } from "../layout/AuthLayout"

const formData = {
  email: 'stev@gmail.com',
  password: '123456'
};

const formValidations = {
  email: [(value)=>value.includes('@'),'El correo debe tener una @'],
  password: [(value)=>value.length>=1,'Debe ingresar una contraseña'],
}

export const LoginPage = () => {
  const {status,errorMessage}= useSelector(state => state.auth)
  const dispatch = useDispatch();
  const isAuthenticating = useMemo(()=>status==='checking',[status]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    email,password,onInputChange, formState,
    isFormValid, emailValid, passwordValid
  } = useForm(formData,formValidations);
  
  const onSubmit = (event)=>{
    setFormSubmitted(true);
    event.preventDefault();
    // console.log({email,password});
    if(!isFormValid) return;
    //TODO: hacer aca el dispatch
    dispatch(startLoginWithEmailPassword({email,password}));
  }
  return (
    <AuthLayout title="Login">
      {/* <h1 >FormValid {isFormValid ? 'Válido': 'Incorrecto'}</h1> */}
        <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
        <Grid container>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label="Correo" 
                type="email" 
                placeholder="correo@google.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
                error = {!!emailValid && formSubmitted}
                helperText={emailValid}
              />
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder="Contraseña"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
                error = {!!passwordValid && formSubmitted}
                helperText={passwordValid}
              />
            </Grid> 
            <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
              <Grid item xs= {12} display={!!errorMessage ? '': 'none'}>
                    <Alert severity='error'>{errorMessage}</Alert>
                </Grid>
              <Grid item xs= {12} >
                <Button disabled={isAuthenticating} type="submit" variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
