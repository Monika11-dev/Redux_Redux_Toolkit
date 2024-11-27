import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter : 0 , showCounter : true }

const counterSlice = createSlice({
    name : 'counter', // Name of slice
    initialState : initialCounterState, // requires initial state that belongs to particular 
    //slice
    reducers : {
        increment(state){
            state.counter++; // no need to write action as 
                              //we dont need other data
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter - action.payload;
        }, // action is needed bcz we need extra 
        //data which is attached with action
        toggle(state){
            state.showCounter = !state.showCounter;
        },
    },
})

export const counterActions = counterSlice.actions;

export default counterSlice.reducer ; 