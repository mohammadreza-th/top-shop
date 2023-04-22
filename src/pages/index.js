import Link from "next/link";

const Home = () => {
  return (
    <div className="relative h-screen pt-10 pb-10 bg-red-400 ">
      <div className="h-[100%] w-[90%] m-auto py-16 flex flex-col justify-between  ">
        <img
          className="rounded-full w-[12vh] h-[12vh] xl:w-[24vh] xl:h-[24vh] bg-white p-5"
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
        <div className="absolute left-1/2 bottom-[15%] xl:bottom-[26%] z-10 h-1/6 w-full -translate-x-2/4	 bg-gradient-to-t from-red-400/100 to-red-400/0 via-red-400/80"></div>
        <img
          className="animate-incommingL w-[50%] xl:max-w-[300px] xl:left-[60%] absolute bottom-[16%] xl:bottom-[27%] "
          src="/images/homePic.png"
          alt="homePic"
        />
        <img
          className="animate-incommingR w-[30%] xl:max-w-[200px] absolute bottom-[16%] xl:bottom-[27%] rotate-12 right-32"
          src="/images/homePic2.png"
          alt="homePic"
        />
        <Link href={"/login"}>
          <button className="w-full grow  pb-5 bg-white rounded-r-full rounded-l-full text-red-400 text-[5vh] font-['font4']">
            get started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
