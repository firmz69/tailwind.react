import React from "react"
export default function Main() {
    return (
            <div className="text-black">
              <div className="max-w-8xl mx-auto flex flex-col px-5 py-48 text-black lg:flex-row">
                <div className="lg:mb-0 lg:w-full lg:max-w-xl">
                </div>

                <div className="items-left flex flex-col pt-16 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-48 lg:text-left">
                  <h2 className="mb-4 font-bold text-3xl text-cyan-900">
                  ☎ Contact Us
                  </h2>
                  <h2 className="mb-4 font-medium text-lg text-slate-600">
                    Telp: 087878787878
                  </h2>
                  <h2 className="mb-4 font-medium text-lg text-slate-600">
                    Email: syanazmusik@gmail.com
                  </h2>
                  <h2 className="mb-4 font-medium text-lg text-slate-600">
                    Alamat: Jakarta, jl.merdeka
                  </h2>
                  <a
                    href="/"
                    className="transition ease-in-out delay-150 hover:scale-110 underline mt-2 font-extralight leading-relaxed text-lg hover:text-sky-900"
                  >
                    <p>Back to home...</p>
                </a>
            </div>
         </div>
      </div>
    );
  };