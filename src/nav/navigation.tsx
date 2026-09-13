import { useState } from "react"
import SigninUpButton from "../components/signButtons"
import NavLists from "../components/navLIsts"


const Navigation = () => {
    
     return(
        <>
        <div className="sticky h-100 w-7xl md:w-full md:h-20 top-0 bg-amber-50 ">
            <div className="md:flex pt-5  mx-auto md:justify-around md:items-center ">
            <div className="pb-10 md:pb-0 pl-20 md:pl-0 ">
                <img src="../../public/logo-text.png"/>
            </div>
            <div className="pl-20 md:pl-0">
                <NavLists/>
            </div>
            <div className="pb-10 md:pb-0 pl-20 md:pl-0">
                <SigninUpButton/>
            </div>
        </div>
        </div>
        </>
     )
}

export default Navigation

