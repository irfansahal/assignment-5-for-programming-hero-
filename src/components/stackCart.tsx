import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { toast } from "react-toastify";

const StackCart = ({stackedData, setStackedData}) => {
    console.log("from stacked cart",stackedData);
    
     const deleteHandler = (StackedCart) => {
          const filteredData = stackedData.filter(item=>{
            if(StackedCart.title !== item.title){
                return item
            }
          })
          setStackedData(filteredData)
          toast.success(`Current ${StackedCart.title} Deleted Successfully`)
     }

    return(
        <>
        <div>
                {stackedData?.map((item, index)=>{
                    return  <div key={index} className="w-[300px] h-[80px]   rounded-2xl bg-white flex p-4 gap-4
                    mt-5
                    ">
                        <div>
                            <img src={item?.logo} className="w-10 h-10"/>
                        </div>
                        <div>
                            <p className="font-bold ">{item.title}</p>
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