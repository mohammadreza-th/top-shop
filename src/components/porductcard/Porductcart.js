import Counter from "../counter/Counter"

const Porductcart = () => {
  return (
    <div className="w-72  h-20  flex justify-between bg-white shadow-md rounded-xl  my-1">
        <div className="flex justify-center items-center w-1/4 h-full">
           
        </div>
        <div className=" w-3/4	 h-full">
            <div className=" h-1/2 flex justify-center items-center">
                <h4 className="font-semibold">veggie tomato mix</h4>
            </div>
            <div className=" h-1/2 flex justify-around items-center">
                <div>
                    <span className="text-orange-600">
                        #1,999
                    </span>
                </div>
                <div>
                    <Counter></Counter>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Porductcart