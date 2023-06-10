import { Header } from "@/components";
import { fetchData } from "../../../../lib/fetch";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const router = useRouter();
  const segment = router.query.product
  let url = `http://localhost:8000/products/${segment}`;
  console.log("url:",url)
  const sendRequest = async () => {
    setProduct(await fetchData(url));
  };
  useEffect(() => {
    sendRequest();
  }, []);
  console.log(product);
  return (
    <div>
      <Header></Header>
    </div>
  );
};

export default ProductPage;
