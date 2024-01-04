import { createSlice } from '@reduxjs/toolkit';
import {StoreState} from '../types'

 const initialState: StoreState = {
    chess:{
        fen:''
    }
 }

 export const {actions,reducer} = createSlice({
    name:'chess',
    initialState,
    reducers:{ 
        startGame:(state,action) =>({...state,...action.payload})
    }
 })


 export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer

