
const Input = ({children,id,type}) => {
  return (
    <div className="rounded-b-md mx-auto w-[80%] border-b-2 border-neutral-300 mb-5">
            <label className="block text-neutral-500" htmlFor={id}>
              {children}
            </label>
            <input className=" bg-transparent " id={id} type={type} />
          </div>
  )
}

export default Input