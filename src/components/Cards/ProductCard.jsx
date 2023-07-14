import React from "react";
import Image from "next/image";
import { H3 } from "..";
import { Slider } from "..";
import { SwiperSlide } from "swiper/react";
const sources = ["/images/1.png","/images/1.png","/images/1.png"]
const ProductCard = ({ title, price, src }) => {

  return (
    <div className="max-vs:rounded-2xl  md:rounded-ss-3xl md:rounded-es-3xl vs:rounded-tr-[25vh] vs:rounded-ee-[25vh] flex flex-col justify-center relative bg-red-500 w-[90%] h-[50vw] max-h-[300px]">
      <Slider
        className="overflow-hidden md:right-[-3px] md:rounded-l-xl max-vs:bottom-[-50%] max-md:opacity-[85%] absolute block p-1 bg-red-100 rounded-full right-0 min-w-[100px] w-[50vw] max-w-[300px] aspect-square"
        SP={1}
      >{src.map((source, index)=>{return(<SwiperSlide key={index}>
        <Image 
          width={500}
          height={500}
          src={source}
          // className="md:rounded-l-xl max-vs:bottom-[-50%] max-md:opacity-[85%] block p-1 bg-red-100 rounded-full right-0 min-w-[100px] w-[50vw] max-w-[300px] aspect-square"
          className="aspect-square p-3"
          alt="product-Image"
          ></Image>
      </SwiperSlide>)})
        
      }
        
          {/* : (
          <Image
            width={500}
            height={500}
            src={`/images/background.png`}
            // className="md:rounded-l-xl max-vs:bottom-[-50%] max-md:opacity-[85%] block p-1 bg-red-100 rounded-full right-0 min-w-[100px] w-[50vw] max-w-[300px] aspect-square"
            className="my-12 p-3"
            alt="product-Image"
          ></Image>
        ) */}
      </Slider>
      <H3 className="text-white">
        <span className="text-red-300">Title: </span>
        {title ? title : "title"}
      </H3>
      <H3 className=" text-white">
        <span className="text-red-300"> Price:</span> {price ? price : "price"}
      </H3>
    </div>
  );
};

export default ProductCard;
