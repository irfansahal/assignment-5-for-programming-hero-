import { Suspense, useState } from "react";
import CardStack from "./card";
import StackCart from "./stackCart";
import { toast } from "react-toastify";
import type { Item } from "../types/type";


const MainContent = () => {
  const dataFetching = async (): Promise<Item[]> => {
    const res = await fetch('../../data.json')
    const data = await res.json();
    console.log("data",data);
    
    return data
  }
  const [ stackedData , setStackedData ] = useState<Item[]>([])
  const [ promiss ] = useState<Promise<Item[]>>(dataFetching())
 

    return(
        <>
          <div className=" md:pl-0 md:ml-15">
            <div className="pl-10 md:pl-0">
            <div className="md:flex  md:flex-col items-center justify-center md:items-start md:justify-start">
           <p className="font-bold  text-3xl">Explore the <span className="text-[#9106a7]">Technologies</span></p>
           <p className="text-[20px] font-light text-zinc-700 pt-3">Pick one technology per category to build your ideal stack.</p>
          </div>
          <div className="py-20 main_container md:flex md:gap-5 ">
          <div className=" card_container  md:pl-0">
           
            <Suspense fallback={"Lodding"}>
            <CardStack 
            dataFetching={promiss}
            stackedData={stackedData}
            setStackedData={setStackedData}
            />
            </Suspense>            
          </div>
           <div className="w-[320px] pt-7  md:pl-0  md:w-[300px] md:pt-0">
           <div className="p-2 flex flex-col justify-center h-auto rounded-2xl
            bg-[#f5f0f3]
           ">    
           <div>
            <h1 className="font-bold text-2xl">Your Stack</h1>
            <p>{stackedData.length === 0 ? `No Technology Selected Yet` : `${stackedData.length} Technology Selected`}</p>
           </div>
               
                  <StackCart 
               stackedData={stackedData}
               setStackedData={setStackedData}
               />
             <button className="px-9 py-3 rounded-2xl text-red-500 border-[0.5px] border-red-500 h-[50px] mt-5"
             onClick={()=>{
              setStackedData([])
              toast(`All data removed successfully`)
             }}
             >
                       Remove The Item
                   </button>
           </div>
            
          </div>
          </div>
          </div>
          </div>
        </>
    )
}
export default MainContent