import {configureStore } from '@reduxjs/toolkit';
import  userDeatail  from '../features/userDetailsSlice';

export const store = configureStore({
    reducer:{
        app : userDeatail,
    },
});
