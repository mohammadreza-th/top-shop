
const Button = ({ children, type }) => {
  if (type === "primary") {
    return (
      <button className=" w-full mx-auto  p-auto min-h-[50px] py-[3px] sm:max-h-[70px] rounded-r-full rounded-l-full  text-white bg-red-400 text-[40px]  font-['font4']">
        {children}
      </button>
    );
  } else {
    return (
      <button className="w-full p-auto min-h-[50px] py-[3px] sm:max-h-[70px] rounded-r-full rounded-l-full  bg-white text-red-400 text-[40px]  font-['font4']">
        {children}
      </button>
    );
  }
};

export default Button;
