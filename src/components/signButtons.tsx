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
    const style = "px-5 py-3 bg-[#E2297B] font-bold text-amber-50 rounded-full mx-4";
  
    return(
        <>
            <button className={`${clicMode1 === true ? style : ""} cursor-pointer`}
                onClick={ clickModeChangeHandler1}
                >Sign In</button>
                <button className={`${clicMode2 === true ? style : ""} cursor-pointer`}
                 onClick={clickModeChangeHandler2}
                >Sign Up</button>
        </>
    )
}
export default SigninUpButton