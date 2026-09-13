import { toast } from "react-toastify"

const CartContainer = ({index,item,stackedData,setStackedData}) => {
   
    const findedData = stackedData.find(currentItem=>{
         if(currentItem.title === item.title){
            return currentItem
         }
    })
    
    return(
        <>
        <div key={index} className="w-[600px] h-[270] md:w-[270px] md:h-[330px] rounded-2xl shadow-md bg-[#f5f0f3]">
                <div className="p-5 rounded-2xl  ">
                 <div>
                 <img src={item.logo} className="w-[55px] h-[55px]"/>

                 </div>
                 <div className="pt-3">
                   <h1 className="font-bold text-lg">{item.title}</h1>
                   <p className="pt-2 text-zinc-600 font-light text-sm">{item.description}</p>
                 </div>
              
                 <div className="w-[520px] md:w-[220px] text-center h-[0.1px] bg-zinc-700 mt-10"></div>
                 <div className=" pb-2 flex justify-around gap-3 pt-3">
                  <div className="text-sm text-zinc-600 font-bold bg-[#c8e8f6] p-1 rounded-lg">{item.category}</div>
                  <div className="text-sm font-bold text-zinc-600">{item.level}</div>
                  <div className="text-sm text-zinc-600 font-bold">{item.popularity}</div>
                 </div>
                  <div className="flex justify-center ">
                    <button 
                    className="px-15 py-3 rounded-2xl text-amber-50 font-bold bg-black disabled:text-[#e1eaea6e]  disabled:bg-[#0218187b] "
                     disabled={findedData ? true : false }
                     onClick={()=>{
                      setStackedData([...stackedData, item])
                      toast(`Data ${item.title} Successfully`) 
                    }}
                    >
                    Add To Stuck
                    </button>
                  </div>
                </div>
            </div>
        </>
    )
}

export default CartContainer