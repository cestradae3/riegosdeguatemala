

import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        sideBar: 'none',
    },
    reducers: {
        openSideBar: (state, /* action */ ) => {
            state.sideBar = 'block';
        },
        closeSideBar: (state, /* action */ ) => {
            state.sideBar = 'none';
        },
    }
});


// Action creators are generated for each case reducer function
export const { openSideBar,closeSideBar } = uiSlice.actions;