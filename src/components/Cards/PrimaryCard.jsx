import React from "react";
import Image from "next/image";
import Link from "next/link";
console.log(Math.round(Math.random() * 13));
const PrimaryCard = ({ id,title, price, src }) => {
  return (
   <Link href={`products/${id}`}>
      <div className="mt-16 flex flex-col justify-center relative w-[150px] h-[170px] rounded-3xl bg-white">
        <Image
          width={150}
          height={150}
          src={src ? src : `/images/${Math.round(Math.random() * 13)}.png`}
          className="absolute block p-1 bg-red-200  -translate-y-1/2 -translate-x-1/2 top-0 left-[50%] rounded-full w-[100px] h-[100px]"
        ></Image>
  
        <div className="text-center ">{title ? title : "title"}</div>
        <div className=" text-red-400 text-sm text-center">
          {price ? price : "price"}
        </div>
      </div>
   </Link>
  );
};

export default PrimaryCard;
