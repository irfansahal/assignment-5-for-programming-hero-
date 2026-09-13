import { useState } from "react"

const SigninUpButton = () =>  {

      const [ clicMode1 , setClicMode1 ] = useState(true)
    const [ clicMode2 , setClicMode2 ] = useState(false)
     
    const clickModeChangeHandler1 = () => {

            setClicMode1(true)
            setClicMode2(false)
    
    }

    const clickModeChangeHandler2 = () => {   
        setClicMode2(true)
            setClicMode1(false)
    
        }
    const style = "sm:px-3 py-2 md:px-5 md:py-3 bg-[#E2297B] md:font-bold text-amber-50 rounded-full sm:mx-4";
  
    return(
        <>
            <div className=" flex ">
                <button className={`min-w-25 ${clicMode1 === true ? style : ""} cursor-pointer`}
                onClick={ clickModeChangeHandler1}
                >Sign In</button>
                <button className={`min-w-25 ${clicMode2 === true ? style : ""} cursor-pointer`}
                 onClick={clickModeChangeHandler2}
                >Sign Up</button>
            </div>
        </>
    )
}
export default SigninUpButton