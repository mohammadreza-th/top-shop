
import Porductcart from "@/components/porductcard/Porductcart"
import Header from "@/components/header/Header"
const CartPage=()=>{
    return(
        <div className="h-screen w-96 bg-slate-50 flex justify-evenly items-center flex-col">
           <div className="text-center">
                 <Header></Header>
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