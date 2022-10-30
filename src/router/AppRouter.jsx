import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes"
import { useCheckAuth } from "../hooks/useCheckAuth";
import { CheckingAuth } from "../ui/componets/CheckingAuth";

export const AppRouter = () => {
  const {status,isLoading} = useCheckAuth();
  
  if(status ==='checking' || isLoading===true){
    return <CheckingAuth/>
  }
  return (
    <Routes>
      {
        (status==='authenticated')
          ? <Route path="/*" element={<DashboardRoutes/>}/>
          :<Route path="/auth/*" element={<AuthRoutes/>}/>
      }
      <Route path='/*' element={<Navigate to='/auth/login'/>}/>
        
    </Routes>
  )
}
