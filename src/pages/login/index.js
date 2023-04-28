import {Button,Input} from "@/components"
import Image from "next/image";
import Link from "next/link";

const LogIn = () => {
  return (
    <div className="flex bg-red-400 ">
    
      <div className="w-full sm:max-w-[400px] rounded-r-xl shadow-[5px_1px_6px_1px_rgba(0,0,0,0.3)] grow  font-['font7'] font-bold flex justify-between flex-col bg-neutral-100 h-screen pb-[3vh]">
        <div className=" flex justify-between flex-col  bg-white rounded-r-xl rounded-b-3xl">
          <Image
            className="m-[7vh] mx-auto w-[20%] min-w-[100px] max-w-[150px]"
            src="/images/logo.png "
            alt="logo"
            width={800}
            height={800}
          />
          <div className="flex justify-around ">
            <button className="block focus:border-b-4 transition  duration-300 px-5 pb-5  focus:border-b-red-400">
              login
            </button>
            <button className="block focus:border-b-4 transition  duration-300 px-5 pb-5  focus:border-b-red-400">
              sign-up
            </button>
          </div>
        </div>
        <div className="flex justify-between flex-col ">
          <Input type="email" id="email" >
            Email
          </Input>
          <Input type="password" id="password">
            Password
          </Input>

          <button className="">forgot password?</button>
        </div>

        <Link href="/products">
          <span className="mx-auto w-[90%]">
            <Button type="primary">Login</Button>
          </span>
        </Link>
      </div>
      <h2 className="m-auto max-sm:hidden font-bold pl-3 animate-pulse text-[10vh]/[10vh] text-white">
        Food for
        <br /> Evrey one!
      </h2>
    </div>
  );
};

export default LogIn;
