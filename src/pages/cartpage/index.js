import { Header } from "@/components"
import Porductcart from "@/components/porductcard/Porductcart"
const CartPage=()=>{
    return(
        <div className="h-screen   flex justify-evenly items-center flex-col">

                    <div className="w-72 h-12   relative"> 
                        <Header className="h-full">cart</Header>
                    </div> 

                     <p className="font-medium text-black">swipe on an item to delete</p>

                    <div className="  w-80  flex flex-col items-center justify-around h-64 ">
                        <Porductcart img="" title="veggie tomato mix"></Porductcart>
                        <Porductcart img=""  title="fishwith mix orange"></Porductcart>
                    </div>
                    
                    <button className="w-72 h-16  bg-orange-600 rounded-3xl text-white">
                        complete order
                    </button>
        </div>
)}


export default CartPage