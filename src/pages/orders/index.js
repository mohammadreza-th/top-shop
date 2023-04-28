import {StartOrderingButton,NoOrder,Layout,Header} from "@/components"


const noOrder = () => {
  const cart = []
  if(!cart){
    
  }else{
    
    return (
        <Layout >
          <Header>Orders</Header>
          <div className="flex-col justify-center items-center bg-white">
            <NoOrder/>
            <StartOrderingButton />
          </div>
        </Layout>
    );
  }
};

export default noOrder;
