import StartOrderingButton from "@/components/Startorderingbutton/StartOrderingButton";
import Layout from "@/components/Layout/Layout";
import NoResult from "@/components/NoResult/NoResult";
import Header from "@/components/Header/Header";

const history = () => {
  return (
    <>
      <Layout>
        <Header>History</Header>
        <div className="flex-col justify-center items-center bg-white">
          <NoResult />
          <StartOrderingButton />
        </div>
      </Layout>
    </>
  );
};

export default history;
