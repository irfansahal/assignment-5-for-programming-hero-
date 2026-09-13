
const HeroSection = () => {
   // "text-linear-to-r  from-violet-500 to-fuchsia-500"

    return(
        <>
        <div className="my-0 mx-auto ">
            <div className=" md:flex md:justify-center mx-auto pt-20 md:pt-30 pb-10 px-5 md:px-27"> 
                <div className="md:flex-1 ">
                    <div className="pt-15  md:pt-25 pb-5">
                  <p className="font-bold text-center md:text-start text-4xl md:text-5xl  md:pb-0">Build Your Ideal</p>
                  <p className="font-bold text-4xl md:text-5xl text-center md:text-start linear_gradients ">Development Stack</p>
                </div>
                <div className="pt-5 "> 
                    <p className="text-[20px] font-light text-center md:text-start text-zinc-700"> Explore frontend, backend, database, and tooling options,<br/>
compare them side by side, and put together the stack that fits your<br/>
next project.</p>
                </div>
                <div className="pt-10 md:pt-20 flex justify-center  md:pl-0 gap-5 ">
                    <button className="px-5 sm:px-10 py-3 font-semibold rounded-2xl button">Explore Technologies</button>
                    <button className="px-10 py-3 border-2 border-zinc-700 rounded-2xl text-zinc-700 font-semibold ">Learn More</button>
                </div>
                </div>
                <div className=" md:pl-0 md:flex-1">
                   <img src="../../public/banner-stack.png"/>
                </div>
            </div>
        </div>
        </>
    )
}
export default HeroSection