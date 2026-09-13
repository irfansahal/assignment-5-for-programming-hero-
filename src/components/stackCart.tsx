import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { toast } from "react-toastify";
import type { Item } from "../types/type";

interface StackCartProps {
    stackedData: Item[];
    setStackedData: React.Dispatch<React.SetStateAction<Item[]>>;
}


const StackCart = ({stackedData, setStackedData}:StackCartProps) => {
    console.log("from stacked cart",stackedData);
    
     const deleteHandler = (StackedCart : Item) => {
          const filteredData = stackedData.filter(item=>{
            if(StackedCart.id !== item.id){
                return item
            }
          })
          setStackedData(filteredData)
          toast.success(`Current ${StackedCart.name} Deleted Successfully`)
     }

    return(
        <>
        <div>
                {stackedData?.map((item, index)=>{
                    return  <div key={index} className="w-[280px] md:w-[280px] md:h-[80px]   rounded-2xl bg-white flex p-4 gap-4
                    mt-5
                    ">
                        <div>
                            <img src={item?.icon} className="w-10 h-10"/>
                        </div>
                        <div>
                            <p className="font-bold ">{item.name}</p>
                            <p>{item.category}</p>
                        </div>
                         <div className="pl-20 pt-2">
                            <button onClick={()=>deleteHandler(item)}>
                                <FaBeer className="w-8 h-8 "/>
                            </button>
                          </div>  
                 </div>
                })}
            </div>
        </>
    )
}

export default StackCart