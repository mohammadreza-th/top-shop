import Image from "next/image";
import historyImage from "../../../public/images/noHIstoryIcon.png";
import React from "react";

const NoResult = () => {
  return (
    <>
      <div class=" flex h-screen bg-white">
        <div class="m-auto flex-col justify-center items-center">
          <div className="flex justify-center">
            <Image 
            alt=" "
            src={historyImage} />
          </div>
          <h3 className="w-52  font-semibold text-3xl leading-8 text-center my-4">No history yet</h3>
          <p className="w-56  font-normal text-base leading-5 text-center">Hit the orange button down below to Create an order</p>
        </div>
      </div>
    </>
  );
};

export default NoResult;
