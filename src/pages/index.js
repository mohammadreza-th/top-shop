import Link from "next/link";

const Home = () => {
  return (
    <div className="relative h-screen pt-10 pb-10 bg-red-400 ">
      <div className="h-[100%] w-[90%] m-auto py-16 flex flex-col justify-between  ">
        <img
          draggable="false"
          className="rounded-full w-[12vw] h-[12vw] vs:w-[12vh] vs:h-[12vh] sm:w-[12vh] sm:h-[12vh] bg-white p-5"
          src="/images/logo.png"
          width={"100%"}
          height={"100%"}
          alt=""
        />
        <h2 className="font-bold animate-pulse text-[10vh]/[10vh] text-white">
          Food for
          <br /> Evrey one
        </h2>
        <div></div>
        <div></div>
        <div className="absolute left-1/2 bottom-[26%] z-10 h-1/6 w-full -translate-x-2/4	 bg-gradient-to-t from-red-400/100 to-red-400/0 via-red-400/80"></div>
        <img
          draggable="false"
          className="animate-incommingL w-[50%] max-w-[300px] right-[10%] absolute bottom-[27%] "
          src="/images/homePic.png"
          alt="homePic"
        />
        <img
          draggable="false"
          className="animate-incommingR w-[30%] max-w-[200px] absolute  bottom-[27%] rotate-12 right-[8%]"
          src="/images/homePic2.png"
          alt="homePic"
        />
        <Link href={"/login"}>
          <button className="w-full p-auto min-h-[50px] py-[3px] max-h-[70px] bg-white rounded-r-full rounded-l-full text-red-400 text-[40px] vs:text-[28px] font-['font4']">
            get started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
