import { Header, Layout } from "@/components";
import { NoOffer } from "@/components/NoOffer/NoOffer";

const offers = () => {
  return (
    <div>
      <Layout>
        <Header>offers</Header>
        <div className="flex-col justify-center items-center bg-white">
          <NoOffer />
        </div>
      </Layout>
    </div>
  );
};
export default offers;
