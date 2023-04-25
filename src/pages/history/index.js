import {Header,NoResult,Layout,StartOrderingButton} from "@/components"

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
