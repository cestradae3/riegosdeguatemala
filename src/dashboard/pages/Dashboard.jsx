import { Button } from "@mui/material"
import { useSelector } from "react-redux";
import { DashboardLayout } from "../layout/DashboardLayout"
import { NothingSelectedView } from "../view/NothingSelectedView"
import { ParametroView } from "../view/ParametroView";


export const Dashboard = () => {
  const {active}= useSelector(state => state.params);
  return (
    <DashboardLayout>
      {
        (active!==null)
        ? <ParametroView/>
        : <NothingSelectedView/>
      }
      
    </DashboardLayout>
  )
}
