import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state =>{
        state.value++;
    },
    decrement: state =>{
        state.value--;
    }, 
    abc: state =>{
      console.log(state)
    }
  },
});

export const {abc,increment, decrement,} = counterSlice.actions
export default counterSlice.reducer

