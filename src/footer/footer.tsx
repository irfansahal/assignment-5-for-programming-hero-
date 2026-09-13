
const Footer = () => {
    return(
        <>
         <div className="mx-auto my-10 pl-5 md:pl-0 bg-[#f7f0f0cb]">
            <div className=" md:flex justify-around pt-10">
               <div className="md:w-[450px]">
                  <div className="flex justify-center md:justify-start">
                     <img src="../../public/logo-text.png"/>
                  </div>
                  <div className="pt-6">
                    <p className="text-center md:text-start text-[20px] font-light text-zinc-700">
                        Curated tools, technologies, and resources for developers building<br/> 
                        modern software.
                    </p>
                  </div>
                  <div className="pt-10 flex justify-center md:justify-start">
                    <ul className="flex gap-5 ">
                        <li className=" text-[20px] font-semibold text-zinc-700">GitHub</li>
                        <li className="text-[20px] font-semibold text-zinc-700">Twitter</li>
                        <li className="text-[20px] font-semibold text-zinc-700">LinkedIn</li>
                    </ul>
                  </div>
               </div>
               <div className="text-center pt-10 md:pt-10 md:flex gap-40 ">
                  <div className="hidden md:block">
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
                  <div className="hidden md:block">
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
                  <div className="hidden md:block">
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
            <div className="md:mx-20 flex justify-between pt-20">
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