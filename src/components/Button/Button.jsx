const Button = ({ children, type }) => {
  if (type === "primary") {
    return (
      // <button className=" w-full mx-auto  p-auto min-h-[50px] py-[3px] sm:max-h-[70px] rounded-r-full rounded-l-full  text-white bg-red-400 text-[40px]  font-['font4']">
      //   {children}
      // </button>
      <div class="flex bg-white">
        <div class="m-auto">
          <button class="bg-red-500 hover:bg-gray-300 text-white font-bold  rounded-full w-80 h-16">
            {children}
          </button>
        </div>
      </div>
    );
  } else {
    return (
      // <button className="w-full p-auto min-h-[50px] py-[3px] sm:max-h-[70px] rounded-r-full rounded-l-full  bg-white text-red-400 text-[40px]  font-['font4']">
      //   {children}
      // </button>
      <div class="flex ">
        <div class="m-auto">
          <button class="bg-white hover:bg-gray-300 text-red-500 font-bold  rounded-full w-80 h-16">
            {children}
          </button>
        </div>
      </div>
    );
  }
};

export default Button;
