import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: state =>{
        state.value++;
    },
    decrement: state =>{
        state.value--;
    }
  },
});

export const {typer,increment, decrement,} = counterSlice.actions
export default counterSlice.reducer

