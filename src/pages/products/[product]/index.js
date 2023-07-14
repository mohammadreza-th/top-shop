import {
  Button,
  Header,
  DliveryInfo,
  ReturnPolicy,
  Space,
  ProductCard,
} from "@/components";

export const getProdocts = async () => {
  const res = await fetch("http://localhost:8000/products/");
  const products = await res.json();
  return products;
};

export const getStaticPaths = async () => {
  const products = await getProdocts();
  const ids = products.map((product) => product.id);
  const params = ids.map((id) => ({ params:{product:`${id}`}  }));
  return {
    paths: params,
    fallback: true, // false or "blocking"
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const productId = params.product;
  const res = await fetch(`http://localhost:8000/products/${productId}`);
  const product = await res.json();
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
