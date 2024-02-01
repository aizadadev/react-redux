import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value:0,
    
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers:{
        increment:(state) => {state.value += 1},
        decrement:(state) => {state.value -= 1},
        multiply:(state) => {state.value *= 2},
        reset:(state) => {state.value = 0}
    }
})


export const {increment, decrement, multiply, reset} = counterSlice.actions;
export default counterSlice.reducer;