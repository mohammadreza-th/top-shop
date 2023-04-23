
import PrimaryCard from "@/components/PrimaryCard";
const products = () => {
  return (
    <div className="min-h-screen bg-neutral-100 p-10 flex flex-col justify-between">
      <div className="flex justify-between">
        <div className="fa fa-car">menu</div>
        <div className="">chart</div>
      </div>
      <div className="text-7xl">
        Delicious <br />
        food for you
      </div>
      <div>
        <input placeholder="search ..." type="text" />
      </div>
      <div className="flex flex-col justify-between">
        <div className="">navigation</div>
        <div className="border-slate-800 w-full border-2 rounded-xl overflow-auto h-[50vh] mx-auto grid vs:grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-[5%]">
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
        </div>
      </div>
      <div>Buttons</div>
    </div>
  );
};

export default products;
