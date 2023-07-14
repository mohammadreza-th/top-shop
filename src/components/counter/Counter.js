import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment  } from "@/feature/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  const PlusClickHandler = () => {
    dispatch(increment());
  };
  const MinusClickHandler = () => {
    if (count !== 0) {
      dispatch(decrement());
    } else {
      return;
    }
  };

  return (
    <div className="flex justify-evenly rounded-2xl	 text-lg items-center w-16 h-5 bg-orange-600">
      <button onClick={MinusClickHandler} className="text-white text-xl">
        -
      </button>
      <div className="text-white">{count}</div>
      <button
        onClick={PlusClickHandler}
        className="text-white  text-xl scale-90"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
