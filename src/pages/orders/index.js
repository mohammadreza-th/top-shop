import { NoOrder, Layout, Header, Button } from "@/components";

const orders = () => {
  return (
    <Layout>
      <Header>Orders</Header>
      <div className="flex-col justify-center items-center bg-white">
        <NoOrder />
        <Button type="primary">start ordering</Button>
      </div>
    </Layout>
  );
};

export default orders;
