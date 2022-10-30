
import { createSlice } from '@reduxjs/toolkit';

export const paramsSlice = createSlice({
    name: 'params',
    initialState: {
        isLoading: false,
        parameters: {},
        active: null,
        // active: {
        //     parameters: [....]
        // }
    },
    reducers: {
        setActiveParam: (state,action)=>{
            state.active = action.payload;
        },
        clearNotesLogout: (state)=>{
            state.parameters ={};
            state.active= null;
        },
        setParams: (state,action)=>{
            state.parameters = action.payload;
            state.isLoading= false;
        },
        setLoading: (state)=>{
            state.isLoading = true;
        },
        
    }
});


// Action creators are generated for each case reducer function
export const { setActiveParam, clearNotesLogout,setParams,setLoading} = paramsSlice.actions;