import { use } from "react"
import CartContainer from "./itemCartContainer";

const CardStack = ({dataFetching , stackedData , setStackedData  }) => {
   

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