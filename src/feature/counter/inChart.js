import { createSlice } from "@reduxjs/toolkit";


export const inChart = createSlice({
  name: "inChart",
  initialState: {
    value:0,
    // id:[],
    // title:[],
    // price:[],
    // imgSrc:[]
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

export const {abc,increment, decrement,} = inChart.actions
export default inChart.reducer

