import {Header,NoResult,Layout, Button} from "@/components"

const history = () => {
  return (
    <>
      <Layout>
        <Header>History</Header>
        <div className="flex-col justify-center items-center bg-white">
          <NoResult />
          <Button type="primary">start ordering</Button>
        </div>
      </Layout>
    </>
  );
};

export default history;
