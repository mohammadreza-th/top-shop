import { fetchData } from "../../../../lib/fetch";

const product = () => {
  let url = "http://localhost:8000/products/";
  product = fetchData(url);
  return <div>product</div>;
};

export default product;
