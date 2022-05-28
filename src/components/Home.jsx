import React from "react"
export default function Main() {
    return (
      <div className="grotesk max-w-8xl mx-auto">
         <div className="max-w-8xl mx-auto inline-block items-center p-3 pt-0 lg:flex lg:flex-wrap lg:pt-4">
            <div className="lg:w-3/6">
              <h2 className="transition ease-in-out delay-150 hover:scale-110 max-w-xl lg:text-[4.2em] text-xl font-bold leading-none text-cyan-900 inline-block">
              ︎ ︎ ︎ ︎︎Toko Alat Musik
              </h2>
              <p className="mt-6 max-w-2xl text-xl font-semibold text-[#404040]"></p>
            </div>
              <div className="mb-20 mt-44 hidden w-full flex-col lg:mt-12 lg:inline-block lg:w-3/6">
              <img src="/images/yy.jpg"/>
            </div>
            <div className="my-20 inline-block w-full flex-col lg:mt-0 lg:hidden lg:w-2/5">
          </div>
        </div>
     </div>
    );
  };