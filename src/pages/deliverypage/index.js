// import Header from "../../components/Header"
import Link from "next/link"

const index = () => {
  return (
    <main className="h-screen  bg-yellow-300 flex justify-evenly items-center flex-col">
       <div className="flex justify-between items-center">
          {/* <Header className="text-emerald-700">amn</Header> */}
       </div>

       <div className="w-72 text-left">
        <h3 className="text-2xl">delivery</h3>
       </div>

       <div>
          <div className="mb-2 flex justify-between items-center w-72">
            <h2 className="font-medium text-xl">address details</h2>
            <button className="text-orange-600">change</button>
          </div>

          <div className="w-72 h-36 bg-white rounded-xl shadow-md">
              <form className="w-72 ">
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </form>
          </div>
       </div>

       <div>
          <div className="mb-2">
                <h2 className="font-medium text-xl">delivery method</h2>
          </div>
          <div className="h-36 w-72 bg-white rounded-xl shadow-md">
              <form action="" className="flex justify-evenly flex-col h-36 w-72">
                <span className="">
                  <input type="radio" name="pay" className="ml-4"/>
                  <label htmlFor="Doordelivery" className="ml-4">Door delivery</label><br />
                </span>
                <span>
                  <input type="radio" name="pay"  className="ml-4"/>
                  <label htmlFor="pickup"className="ml-4">pick up</label>
                </span>
            </form>
          </div>
       </div>

       <div className="w-72 flex flex-col justify-between items-center h-28">
          <div className="justify-between items-center w-72 flex">
              <p>Total</p>
              <span>2400</span>
          </div>
          <Link href="/cartpage">
             <button className="w-72 h-16  bg-orange-600 rounded-3xl text-white">porceed to payment</button>
          </Link>
       </div>
    </main>
  )
}

export default index