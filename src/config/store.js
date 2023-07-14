import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// export default the store
export default store;

// export the action
