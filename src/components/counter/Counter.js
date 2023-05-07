import { useState } from "react"


const Counter = () => {
    const [counter,setCounter]=useState(0)
    const PlusClickHandler=()=>{
        setCounter(counter+1)
    }
    const MinusClickHandler=()=>{
        if(counter!==0){
            setCounter(counter-1)
            
        }else{
            return
        }
        
    }

  return (
    <div className="flex justify-evenly rounded-2xl	 text-lg items-center w-16 h-5 bg-orange-600">
        <button onClick={MinusClickHandler} className="text-white text-xl">-</button>
         <div className="text-white">{counter}</div>
        <button onClick={PlusClickHandler} className="text-white  text-xl scale-90">+</button>
    </div>
  )
}

export default Counter