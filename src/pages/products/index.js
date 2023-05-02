import { Layout, PrimaryCard, Search, Title, Nav, Space } from "@/components";
import { useEffect, useState } from "react";

const productsPage = () => {
  const [products, setProducts] = useState([]);
  const sendRequest = async () => {
    const response = await fetch("http://localhost:8000/products");
    const responseData = await response.json();
    setProducts(...responseData);
  };
  useEffect(() => {
    sendRequest();
  }, []);
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
        <Space size={5}/>
        <Search />
        <Space size={3}/>
        <div className="flex flex-col justify-between">
          <Nav className="" />
          <div className=" w-full border-2 mx-auto grid vs:grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-[5%]">
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
