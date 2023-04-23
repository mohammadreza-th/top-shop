import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import { NoOrder } from "@/components/NoOrder/NoOrder";
import StartOrderingButton from "@/components/Startorderingbutton/StartOrderingButton";


const noOrder = () => {
  return (
    <>
      <Layout >
        <Header>Orders</Header>
        <div className="flex-col justify-center items-center bg-white">
          <NoOrder/>
          <StartOrderingButton />
        </div>
      </Layout>
    </>
  );
};

export default noOrder;
