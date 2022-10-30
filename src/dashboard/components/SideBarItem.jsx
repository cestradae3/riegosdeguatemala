import { useDispatch, useSelector } from "react-redux";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { TurnedInNot } from "@mui/icons-material"
import { setActiveParam } from "../../store/dashboard/dashboardSlice";

export const SideBarItem = ({title='',id}) => {
    const dispatch = useDispatch();
    const activeParams = ()=>{
        dispatch(setActiveParam(title));
    }
  return (
    <ListItem key={id} disablePadding onClick={activeParams} >
        <ListItemButton>
            <ListItemIcon>
                <TurnedInNot/>
            </ListItemIcon>
            <Grid container>
                <ListItemText primary={title}/>
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}   
