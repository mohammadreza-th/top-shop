import React from "react";

const Nav = () => {
  const handleActive = (text) => {
   console.log(text);
  };
  return (
    <ul className="rounded-t-xl px-5 bg-red-100 flex justify-between mx-[15%] ">
      <button
        onClick={(e) => {
          handleActive(e.target.innerText);
        }}
        className=" focus:border-b-4 border-red-600 p-1 active:bg-red-100 hover:bg-red-600 hover:text-white  rounded-t"
      >
        Foods
      </button>
      <button
        onClick={(e) => {
          handleActive(e.target.innerText);
        }}
        className=" focus:border-b-4 border-red-600 p-1 active:bg-red-100 hover:bg-red-600 hover:text-white  rounded-t"
      >
        Drinks
      </button>
      <button
        onClick={(e) => {
          handleActive(e.target.innerText);
        }}
        className=" focus:border-b-4 border-red-600 p-1 active:bg-red-100 hover:bg-red-600 hover:text-white  rounded-t"
      >
        Souce
      </button>
      <button
        onClick={(e) => {
          handleActive(e.target.innerText);
        }}
        className=" focus:border-b-4 border-red-600 p-1 active:bg-red-100 hover:bg-red-600 hover:text-white  rounded-t"
      >
        Snacks
      </button>
      <button
        onClick={(e) => {
          handleActive(e.target.innerText);
        }}
        className=" focus:border-b-4 border-red-600 p-1 active:bg-red-100 hover:bg-red-600 hover:text-white  rounded-t"
      >
        Other
      </button>
    </ul>
  );
};

export default Nav;
