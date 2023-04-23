const logIn = () => {
  return (
    <div className="font-['font7'] font-bold	 flex justify-between flex-col bg-neutral-100 h-screen pb-[3vh]">
      <div className="flex justify-between flex-col  bg-white rounded-b-3xl">
        <img
          className="m-[15vh] mx-auto w-[20vw] h-[20vw] min-w-[100px] max-w-[500px] min-h-[100px] max-h-[40px]"
          src="/images/logo.png "
          alt="logo"
        />
        <div className="flex justify-around p-[3vh]">
          <button className="block focus:border-b-2 px-2  focus:border-b-red-400">
            login
          </button>
          <button className="block focus:border-b-2 px-2  focus:border-b-red-400">
            sign-up
          </button>
        </div>
      </div>
      <div className="flex justify-between flex-col ">
        <div className="rounded-b-md mx-auto w-[80%] border-b-2 border-neutral-300 mb-5">
          <label className="block text-neutral-500" htmlFor="email">
            email
          </label>
          <input className=" bg-transparent " id="email" type="email" />
        </div>
        <div className="rounded-b-md mx-auto w-[80%] border-b-2 border-neutral-300 mb-5">
          <label className="block text-neutral-500" htmlFor="password">
            password
          </label>
          <input className=" bg-transparent " id="password" type="password" />
        </div>

        <button className="">forgot passworde?</button>
      </div>
      <button className="w-full p-auto min-h-[50px] py-[3px] max-h-[70px] text-white rounded-r-full rounded-l-full bg-red-400 text-[40px] vs:text-[28px] font-['font4']">
        Login
      </button>
    </div>
  );
};

export default logIn;
