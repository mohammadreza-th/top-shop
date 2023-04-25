console.log(Math.round(0.3));
const ResultCard = ({ src, title, price }) => {
  return (
    <div className="relative flex flex-col items-center mt-14 mx-auto rounded-2xl bg-white h-[110px] w-[100px] ">
      <img
        className="absolute left-[50%] -translate-y-1/2 -translate-x-1/2 rounded-full
         bg-gradient-to-r from-red-300 to-red-50 w-[75px] aspect-square p-1"
        src={src ? src : `/images/${Math.round(Math.random() * 13)}.png`}
        alt=""
      />
      <div className="mt-[40px]">{title ? title : "title"}</div>
      <div className="text-red-400">{price ? price : "price"}</div>
    </div>
  );
};

export default ResultCard;
