import {
  Layout,
  PrimaryCard,
  Search,
  Title,
  Nav,
  Space,
  ButtonsNav,
} from "@/components";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getData } from "../../../lib/fetch";

//nextjs built in SSR rendering function 
export const getStaticProps = async () => {
  const data = await getData(`${process.env.base_url}/products/`);
  return { props: { data } };
};

const ProductsPage = ({ data }) => {
  const [products, setProducts] = useState(data);
  const [searchText, setSearchText] = useState();
  const handleFilter = (type) => {
    if (type === "All") {
      setProducts(data);
    } else {
      setProducts(data.filter((product) => product.type === type));
    }
  };
  let searchedProducts = products;
  if (searchText) {
    searchedProducts = products.filter((product) =>
      product.title.includes(searchText)
    );
  }

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
            {searchedProducts.map((product) => {
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

export default ProductsPage;
