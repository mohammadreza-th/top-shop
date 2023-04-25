
console.log(Math.round(0.3))
const resultCard = ({src, title, price}) => {
    
  return (
    <div className="rounded-2xl bg-sky-500 h-[170px] w-[100px] "><img className="ml-[50%] -translate-y-1/2 -translate-x-1/2 rounded-full bg-sky-50 w-[70px] h-[70px]" src={src?src:`/images/${Math.round(Math.random()*13)}.png`} alt="" />
    <div>{title?title:"title"}</div>
    <div className="">{price?price:"price"}</div>
    </div>
  )
}

export default resultCard