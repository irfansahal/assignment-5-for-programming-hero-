import { useState } from "react"

const NavLists = () => {
     const [ clicMode , setClickMode ] = useState({
        btn1 : true,
        btn2 : false,
        btn3 : false,
        btn4 : false,
        btn5 : false
    })

    const btn1Handler = () => {
        setClickMode({
        btn1 : true,
        btn2 : false,
        btn3 : false,
        btn4 : false,
        btn5 : false
       })
    }

    const btn2Handler = () => {
        setClickMode({
        btn1 : false,
        btn2 : true,
        btn3 : false,
        btn4 : false,
        btn5 : false
             })
    }

    const btn3Handler = () => {
        setClickMode({
        btn1 : false,
        btn2 : false,
        btn3 : true,
        btn4 : false,
        btn5 : false
              })
    }

    const btn4Handler = () => {
        setClickMode({
        btn1 : false,
        btn2 : false,
        btn3 : false,
        btn4 : true,
        btn5 : false
              })
    }

    const btn5Handler = () => {
        setClickMode({
        btn1 : false,
        btn2 : false,
        btn3 : false,
        btn4 : false,
        btn5 : true
              })
    }

    const listStyle = "font-bold text-[#E2297B]"
   
    return(
        <>
        <ul className="md:flex gap-6">
                    <li className={`pb-5 md:pb-0 ${ clicMode.btn1 === true ? listStyle : ""} cursor-pointer `}
                    onClick={btn1Handler}
                    >Home</li>
                    <li className={`pb-5 md:pb-0 ${ clicMode.btn2 === true ? listStyle : ""} cursor-pointer `}
                    onClick={btn2Handler}
                    >Technologies</li>
                    <li className={`pb-5 md:pb-0 ${ clicMode.btn3 === true ? listStyle : ""} cursor-pointer `}
                    onClick={btn3Handler}
                    >Projects</li>
                    <li className={`pb-5 md:pb-0 ${ clicMode.btn4 === true ? listStyle : ""} cursor-pointer `}
                    onClick={btn4Handler}
                    >About</li>
                    <li className={`pb-5 md:pb-0 ${ clicMode.btn5 === true ? listStyle : ""} cursor-pointer `}
                    onClick={btn5Handler}
                    >Contact</li>
                </ul>
        </>
    )
}
export default NavLists