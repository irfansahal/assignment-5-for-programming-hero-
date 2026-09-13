
const Footer = () => {
    return(
        <>
         <div className="mx-auto my-10 pl-70 md:pl-0">
            <div className=" md:flex justify-around">
               <div className="w-[450px]">
                  <div>
                     <img src="../../public/logo-text.png"/>
                  </div>
                  <div className="pt-6">
                    <p className="text-[20px] font-light text-zinc-700">
                        Curated tools, technologies, and resources for developers building<br/> 
                        modern software.
                    </p>
                  </div>
                  <div className="pt-10 ">
                    <ul className="flex gap-5">
                        <li className=" text-[20px] font-semibold text-zinc-700">GitHub</li>
                        <li className="text-[20px] font-semibold text-zinc-700">Twitter</li>
                        <li className="text-[20px] font-semibold text-zinc-700">LinkedIn</li>
                    </ul>
                  </div>
               </div>
               <div className=" md:flex gap-40 ">
                  <div >
                    <h1 className="text-lg font-bold">PRODUCT</h1>
                  <ul className="pt-5">
                    <li className="py-1 text-[18px] font-light text-zinc-700">
                        Home
                    </li>
                    <li className="py-1 text-[18px] font-light text-zinc-700">
                       Technologies
                    </li>
                    <li className="py-1 text-[18px] font-light text-zinc-700">
                       Projects
                    </li>
                  </ul>
                  </div>
                  <div >
                    <h1 className="text-lg font-bold">COMPANY</h1>
                  <ul className="pt-5">
                    <li className="py-1 text-[18px] font-light text-zinc-700">
                        About
                    </li>
                    <li className="py-1 text-[18px] font-light text-zinc-700">
                       Contact
                    </li>
                    <li className="py-1 text-[18px] font-light text-zinc-700">
                       Careers
                    </li>
                  </ul>
                  </div>
                  <div>
                    <h1 className="text-lg font-bold">LEGAL</h1>
                  <ul className="pt-5">
                    <li className="py-1 text-[18px] font-light text-zinc-700">
                        Privacy Policy
                    </li>
                    <li className="py-1 text-[18px] font-light text-zinc-700">
                      Terms of Service
                    </li>
                  </ul>
                  </div>
               </div>
            </div>
            <div className="mx-20 flex justify-between pt-20">
                <div className="">© 2026 Dev Stack. All rights reserved.</div>
                <div>
                    <ul className="flex gap-9">
                        <li>Privacy</li>
                        <li>Terms</li>
                    </ul>
                </div>
            </div>
         </div>
        </>
    )
}

export default Footer