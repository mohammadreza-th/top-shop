import {
  Button,
  Header,
  DliveryInfo,
  ReturnPolicy,
  Space,
  ProductCard,
} from "@/components";
import axios from "axios";
import { getData } from "../../../../lib/fetch";


//nextjs built in SSR rendering function 
export const getStaticPaths = async () => {
  const products = await getData(`${process.env.base_url}/products/`);
  const ids = products.map((product) => product.id);
  const params = ids.map((id) => ({ params: { product: `${id}` } }));
  return {
    paths: params,
    fallback: true, // false or "blocking"
  };
};

//nextjs built in SSR rendering function for dynamic pages
export const getStaticProps = async (context) => {
  const { params } = context;
  const productId = params.product;
  const res = await axios(
    `${process.env.base_url}/products/${productId}`
  );
  const product = await res.data;
  return { props: { product } };
};

const ProductPage = ({ product }) => {
  return (
    <div className="md:mx-[10vw]">
      <Header></Header>
      <Space size={3}></Space>
      <ProductCard
        src={product.imgSrc}
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
