import { Divider,Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { ParamItem } from "../components";

export const ParametroView = () => {
    const {parameters,active}= useSelector(state => state.params);
    const param = parameters[active];


  return (
    <>
       
            <Typography
                        fontSize={39}
                        fontWeight='light'
                    >{active}
            </Typography>
            <Divider sx={{mb: 2}}/>
            <ParamItem param={param}/>
    </>
    
 
  
    
  )
}
