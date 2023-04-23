import React from "react";
console.log(Math.round(Math.random()*13));
const PrimaryCard = ({ title, price, src }) => {
  return (
    <div className="mt-16 flex flex-col justify-center relative w-[150px] h-[170px] rounded-3xl bg-white">
      <img
        src={src ? src : `/images/${Math.round(Math.random()*13)}.png`}
        className="absolute block p-1 bg-red-200  -translate-y-1/2 -translate-x-1/2 top-0 left-[50%] rounded-full w-[100px] h-[100px]"
      ></img>

      <div className="text-center ">{title ? title : "title"}</div>
      <div className=" text-red-400 text-sm text-center">
        {price ? price : "price"}
      </div>
    </div>
  );
};

export default PrimaryCard;
