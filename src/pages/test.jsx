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

export const getStaticProps = async () => {
  const router = useRouter();
  const segment = router.query.product;
  const res = await fetch(`http://localhost:8000/products/${segment}`);
  const product = await res.json();
  console.log(product)
  return { props: { product } };
};



const ProductPage = ({product}) => {
  return (
    <div className="md:mx-[10vw]">
      <Header></Header>
      <Space size={3}></Space>
      {/* <ProductCard
        src={["/images/1.png", "/images/1.png", "/images/1.png"]}
        // src={product.imgSrc}
        title={product.title}
        price={product.price}
      ></ProductCard> */}
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
