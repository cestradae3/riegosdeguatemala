
import { ArrowBackIos } from '@mui/icons-material';
import { Drawer, Box, Toolbar, Typography, Divider, List, IconButton } from '@mui/material';
import { indigo } from '@mui/material/colors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeSideBar } from '../../store/ui';
// import json2mq from 'json2mq';
// import useMediaQuery from '@mui/material/useMediaQuery';
import { SideBarItem } from './SideBarItem';

export const SideBar = ({drawerWidth}) => {
    const dispatch = useDispatch();
    const{displayName}= useSelector(state => state.auth);
    const{sideBar}= useSelector(state => state.ui);
    const params = [
        {id: 1, title: 'Temperaturas',name:'TemperaturaRelativa'},
        {id: 3, title: 'Humedades',name:'HumedadRelativa'},
        {id: 4, title: 'Valvulas',name:'Valvulas'},
      ];

    const cSideBar = ()=>{
        dispatch(closeSideBar());
    }
    // const matches = useMediaQuery(
    //     json2mq({
    //       minWidth: 600,
    //     }),
    //   );
    
  return (
    <Box 
            component='nav'
            sx={{width: {sm: drawerWidth}, flexShrink:{sm:0}, display: { xs: sideBar, md: 'block', sm: 'block'}}}
            

        >
            <Drawer
                variant= 'permanent' // temporary
                open
                sx= {{
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
                }}
            >
                <Toolbar>
                    <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>{displayName.toUpperCase()}</Typography>
                    <IconButton onClick={cSideBar} sx = {{display: { xs: 'block', md: 'none', sm: 'none'}}}>
                        <ArrowBackIos/>
                    </IconButton>   
                </Toolbar>
                <Divider/>
                <Typography variant='h6' mt={2} align='center' color={indigo[700]}>Parametros</Typography>
                <List >
                    {
                        params.map(note => (
                            <SideBarItem key={note.id}{...note}/>
                        ))
                    }
                </List>

            </Drawer>
        </Box>

  )
}