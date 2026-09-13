import { toast } from "react-toastify"
import type { Item } from "../types/type";

interface CartContainerProps {
    index: number;
    item: Item;
    stackedData: Item[];
    setStackedData: React.Dispatch<React.SetStateAction<Item[]>>;
}


const CartContainer = ({index,item,stackedData,setStackedData}:CartContainerProps) => {
   
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
    
    const disableStyle = "text-[#e1eaea6e]  bg-[#0218187b] px-9 py-3 rounded-2xl font-bold"
    const normaleStyle = "px-9 py-3 rounded-2xl text-amber-50 font-bold bg-black "
    const borderdisaled = "border-2 border-amber-950"

    return(
        <>
        <div key={index} className={`w-[320px] h-[270] md:w-[270px] md:h-[330px] rounded-2xl shadow-md bg-[#f5f0f3] ${findedData ? borderdisaled: ""}`}>
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
                    <div 
                      >
                    <button 
                    className={findedData ? disableStyle : normaleStyle}
                     onClick={()=>{
                      if(findedData){
                        return toast.error(`you already added ${item.name} technology `)
                      }else{
                          setStackedData([...stackedData, item])
                      }  
                      toast(`Data ${item.name} Successfully`)
                      showErrorHandler()
                    }}  
                     //disabled={findedData ? true : false }
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