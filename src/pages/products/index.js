import { Layout, PrimaryCard, Input, Title } from "@/components";
import { fakeProductMaker } from "@/feature/fakeProductMaker/fakeProductMaker";
const productsPage = () => {
  const products = fakeProductMaker(50);
  return (
    <Layout
      header={
        <div className="flex justify-between">
          <div className="fa fa-car">menu</div>
          <div className="">chart</div>
        </div>
      }
    >
      <div className="min-h-screen bg-neutral-100 p-10 flex flex-col justify-between">
        <Title className="text-7xl">
          Delicious <br />
          food for you
        </Title>
        <Input placeholder="search ..." type="text" />
        <div className="flex flex-col justify-between">
          <div className="">navigation</div>
          <div className="border-slate-800 w-full border-2 rounded-xl overflow-auto h-[50vh] mx-auto grid vs:grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-[5%]">
            {products.map((product) => {
              return (
                <PrimaryCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  src={product.imgSrc}
                />
              );
            })}
          </div>
        </div>
        <div>Buttons</div>
      </div>
    </Layout>
  );
};

export default productsPage;
