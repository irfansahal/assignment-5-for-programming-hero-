import { use } from "react"
import CartContainer from "./itemCartContainer";
import type { Item } from "../types/type";

interface CardStackProps {
    dataFetching: Promise<Item[]>;
    stackedData: Item[];
    setStackedData: React.Dispatch<React.SetStateAction<Item[]>>;
}


const CardStack = ({dataFetching , stackedData , setStackedData  }:CardStackProps) => {
   

    console.log("DATA",stackedData);
    
    const fetchedData = use(dataFetching)
    console.log(fetchedData);
    
    return(
       <>
       {fetchedData?.map((item, index:number)=>{
        return <CartContainer
               index={index} 
               item={item}       
               stackedData={stackedData}
               setStackedData={setStackedData}
        />
       })}
       </>
    )
}

export default CardStack