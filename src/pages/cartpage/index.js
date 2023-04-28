
import Porductcart from "@/components/porductcard/Porductcart"
const CartPage=()=>{
    return(
        <div className="h-screen   bg-blue-800 flex justify-evenly items-center flex-col">

           <div className="w-72 h-12 bg-purple-900  relative">
                <div className="w-1/4 h-full absolute top-9">
                    <svg className="w-8" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                <div/>    
                <div className="bg-red-500 w-3/4 h-full ">
                    <h1>cart</h1>
                </div>
            </div>

           </div>
                 <p className="font-medium">swipe on an item to delete</p>


            <div className="  w-80  flex flex-col items-center justify-around h-64 ">
                 <Porductcart></Porductcart>
                 <Porductcart></Porductcart>
            </div>
            
                <button className="w-72 h-16  bg-orange-600 rounded-3xl text-white">
                    complete order
                </button>
            
        </div>
    )
}

export default CartPage