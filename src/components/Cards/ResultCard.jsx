import Image from "next/image";
const ResultCard = ({ src, title, price }) => {
  return (
    <div className="relative flex flex-col items-center mt-14 mx-auto rounded-2xl bg-white h-[110px] w-[100px] ">
      <Image
        className="absolute left-[50%] -translate-y-1/2 -translate-x-1/2 rounded-full
         bg-gradient-to-r from-red-300 to-red-50 w-[75px] aspect-square p-1"
        src={src ? src[0] : `/images/${Math.round(Math.random() * 13)}.png`}
        alt=""
      />
      <div className="mt-[40px]">{title ? title : "title"}</div>
      <div className="text-red-400">{price ? price : "price"}</div>
    </div>
  );
};

export default ResultCard;
