import { useState } from "react"
import SigninUpButton from "../components/signButtons"
import NavLists from "../components/navLIsts"

const Navigation = () => {
    
     return(
        <>
            <div 
            className="pb-10 md:pb-6 flex justify-between items-center px-10 sm:px-20 md:px-30 pt-5 md:pt-10 bg-[#f7f0f0cb] nav_container"
            >
             <div className="text-2xl block md:hidden pr-2 sm:pr-6">
              <i className="fa-solid fa-bars"></i>
            </div>    
            <div className="  md:pl-0 md:pt-1 ">
                <img src="../../public/logo-text.png" className="md:w-[200px] md:h-[50px] w-[150px] h-[40px]"/>
            </div>
           
            <div className="hidden md:block  md:pl-0">
                <NavLists/>
            </div>
            <div className=" md:pb-0 pl-0 md:pl-0 flex   md:pt-0">
                <SigninUpButton/>
            </div>
        </div>
        
        </>
     )
}

export default Navigation

