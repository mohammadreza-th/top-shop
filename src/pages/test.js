import { typer, increment, decrement } from "@/feature/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { productMaker } from "@/feature/productMaker/productMaker";
import Image from "next/image";
import Link from "next/link";
const products = productMaker(12);
console.log(products);
const test = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch(typer());
  return (
    <div>
      <div>click here! to increase value of count</div>

      <button
        onClick={() => {
          dispatch(increment());
          dispatch(typer());
        }}
      >
        click to{" "}
      </button>
      <div>count: {count}</div>
      <div>
        {products.map((product) => {
          return (
            <div className="flex justify-between w-64" key={product.id}>
                
              <Link>
                  <div>{product.title}</div>
                  <div className="text-red-600">{product.price}</div>
                  <Image src={product.imgSrc} width={50} height={50} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default test;
