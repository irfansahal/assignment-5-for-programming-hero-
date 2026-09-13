import { toast } from "react-toastify"

const CartContainer = ({index,item,stackedData,setStackedData}) => {
   
    const findedData = stackedData.find(currentItem=>{
         if(currentItem.id === item.id){
            return currentItem
         }
         
    })
    
    const showErrorHandler = () => {
     if(findedData){
          alert("you already added the item")
         }
    }
    
    return(
        <>
        <div key={index} className="w-[320px] h-[270] md:w-[270px] md:h-[330px] rounded-2xl shadow-md bg-[#f5f0f3]">
                <div className="p-5 rounded-2xl  ">
                 <div className="font-light flex justify-between">
                 <img src={item.icon} className="w-[55px] h-[55px]"/>
                 <p className="">{item.badge}</p>
                 </div>
                 <div className="pt-3">
                   <h1 className="font-bold text-lg">{item.name}</h1>
                   <p className="pt-2 text-zinc-600 font-light text-sm">{item.description}</p>
                 </div>
              
                 <div className="w-[280px] md:w-[220px] text-center h-[0.1px] bg-zinc-700 mt-10"></div>
                 <div className=" pb-2 flex justify-around gap-3 pt-3">
                  <div className="text-sm text-zinc-600 font-bold bg-[#c8e8f6] p-1 rounded-lg">{item.category}</div>
                  <div className="text-sm font-bold text-zinc-600">{item.difficulty}</div>
                  <div className="text-sm text-zinc-600 font-bold">{item.rating}</div>
                 </div>
                  <div className="flex justify-center ">
                    <div onClick={showErrorHandler}>
                    <button 
                    className="px-12 py-3 rounded-2xl text-amber-50 font-bold bg-black disabled:text-[#e1eaea6e]  disabled:bg-[#0218187b] "
                     onClick={()=>{
                      setStackedData([...stackedData, item])
                      toast(`Data ${item.name} Successfully`)
                    }}  
                     disabled={findedData ? true : false }
                    >
                    {findedData ? "✓ Added to Stack" : "Add To Stuck"}
                    </button>
                    </div>
                  </div>
                </div>
            </div>
        </>
    )
}

export default CartContainer