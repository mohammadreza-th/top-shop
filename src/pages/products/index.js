import {
  Layout,
  PrimaryCard,
  Search,
  Title,
  Nav,
  Space,
  ButtonsNav,
} from "@/components";
// import { fakeProductMaker } from "@/feature/fakeProductMaker/fakeProductMaker";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const productsPage = () => {
  //test
  // console.log(JSON.stringify(fakeProductMaker(50)))
  const [products, setProducts] = useState([]);
  const [filteredP, setFilteredP] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const handleFilter = (type) => {
    setFilteredP(products.filter((product) => product.type === type));
  };
  const searchedProducts = products.filter((product) =>
    product.title.includes(searchText)
  );

  const sendRequest = async () => {
    const response = await fetch("http://localhost:8000/products/");
    const responseData = await response.json();
    setProducts(responseData);
    setFilteredP(responseData);
  };
  useEffect(() => {
    sendRequest();
  }, []);
  return (
    <Layout
      header={
        <div className="flex justify-between">
          <Link href="/menu">
            <Image
              alt="vector"
              className="m-2"
              src="/images/Vector.svg"
              width={20}
              height={20}
            />
          </Link>
          <Link href="/cart">
            <Image
              alt="shopping-cart"
              className="m-2"
              src="/images/shopping-cart.svg"
              width={20}
              height={20}
            />
          </Link>
        </div>
      }
    >
      <div className="min-h-screen bg-neutral-100 p-10 flex flex-col justify-between">
        <Title className="text-7xl">
          Delicious <br />
          food for you
        </Title>
        <Space size={5} />

        <Search
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <Space size={3} />
        <div className="flex flex-col justify-between">
          <Nav
            onfilter={(e) => {
              handleFilter(e.target.innerText);
            }}
            className=""
          />
          <Space size={10} />
          <div className=" w-full mb-10 mx-auto grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-y-14 gap-x-4">
            {filteredP.map((product) => {
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
      </div>
      <ButtonsNav></ButtonsNav>
    </Layout>
  );
};

export default productsPage;
