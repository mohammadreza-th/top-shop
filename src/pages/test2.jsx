import {
    Button,
    Header,
    DliveryInfo,
    ReturnPolicy,
    Space,
    ProductCard,
  } from "@/components";
  import { fetchData } from "../../../../lib/fetch";
  import { useRouter } from "next/router";
  import { useEffect, useState } from "react";
  
  const ProductPage = () => {
    const [product, setProduct] = useState([]);
    const router = useRouter();
    console.log("query", router.query);
    const segment = router.query.product;
    let url = `http://localhost:8000/products/${segment}`;
    console.log("product", product);
    useEffect(() => {
      const sendRequest = async () => {
        setProduct(await fetchData(url));
      };
      sendRequest()
    }, []);
    return (
      <div className="md:mx-[10vw]">
        <Header></Header>
        <Space size={3}></Space>
        <ProductCard
          src={["/images/1.png", "/images/1.png", "/images/1.png"]}
          // src={product.imgSrc}
          title={product.title}
          price={product.price}
        ></ProductCard>
        <Space size={7}></Space>
        <DliveryInfo></DliveryInfo>
        <Space size={3}></Space>
        <ReturnPolicy></ReturnPolicy>
        <Space size={3}></Space>
        <Button type="primary">add to cart</Button>
      </div>
    );
  };
  
  export default ProductPage;
  