import { ResultCard, Input } from "@/components/";
import Layout from "@/components/Layout/Layout";
import { fakeProductMaker } from "@/feature/fakeProductMaker/fakeProductMaker";
import { useState } from "react";
const Results = () => {
  const [SearchValue, setSearchValue] = useState();
  const products = fakeProductMaker(12); // 4 product cards in a row.

  return (
    <Layout header={<Input value="hellow world!" />}>
      <div className="px-5 pt-14 sm:px-7 xl:px-10 min-h-screen bg-gray-100">
        <div className="text-center font-bold text-[4vw] text-['SFProRounded']">
          Found results
        </div>
        <div className="mx-auto w-10/12 grid grid-cols-2 gap-x-2 vs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
          {products.map((product) => {
            return (
              <ResultCard
                key={product.id}
                title={product.title}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Results;
