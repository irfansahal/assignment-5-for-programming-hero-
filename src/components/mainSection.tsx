import { Suspense, useState } from "react";
import CardStack from "./card";
import StackCart from "./stackCart";


const MainContent = () => {
  const dataFetching = async () => {
    const res = await fetch('../../data.json')
    const data = await res.json();
    console.log("data",data);
    
    return data
  }
  const [ stackedData , setStackedData ] = useState([])
  const [ promiss ] = useState(dataFetching())
 

    return(
        <>
          <div className="pl-50 md:pl-0 md:ml-25">
            <div className="w-[1100px]">
            <div className="md:flex flex-col items-center justify-center md:items-start md:justify-start">
           <p className="font-bold text-3xl">Explore the <span className="text-[#9106a7]">Technologies</span></p>
           <p className="text-[20px] font-light text-zinc-700 pt-3">Pick one technology per category to build your ideal stack.</p>
          </div>
          <div className="py-20 main_container md:flex md:gap-5 ">
          <div className=" card_container pl-30 md:pl-0">
           
            <Suspense fallback={"Lodding"}>
            <CardStack 
            dataFetching={promiss}
            stackedData={stackedData}
            setStackedData={setStackedData}
            />
            </Suspense>            
          </div>
           <div className="pl-70 w-3xl pt-7 md:pl-0 w-3xl md:w-[450px] md:pt-0">
           <div className="p-5 flex flex-col justify-center h-auto rounded-2xl
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