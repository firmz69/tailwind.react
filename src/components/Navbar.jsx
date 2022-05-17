import React from "react";
export default function Main() {
  return (
    <>
      <div className="sticky top-0 place-items-start drop-shadow-lg mt-6 mb-16 flex items-center justify-between py-4 px-4 sm:mx-0 sm:mb-20 sm:px-0 md:px-6 bg-slate-700">
        <div className="mt-4 inline-block pb-4 pl-8">
          <div className="hidden pl-14 align-middle xl:inline-block break-inside-avoid-column ml-auto">
      
            <a className="pr-12 text-2xl text-stone-300 font-extrabold ml-auto text-right">
            ♫ Syanaz Musik
            </a>
          </div>
          <div className="pl-80 align-middle xl:inline-block mr-auto text-right">

          <a href="/Home" className="pr-12 text-xl text-stone-200 text-right font-light mr-auto">
              Home
            </a>
            <a href="/About" className="pr-12 text-xl text-stone-200 text-right font-light mr-auto">
              About
            </a>
            <a href="/Product" className="pr-12 text-xl text-stone-200 font-light mr-auto">
              Product
            </a>
            <a href="/Contact" className="pr-12 text-xl text-stone-200 font-light mr-auto">
              Contact
            </a>
          </div>
        </div>
        <div className="text-right flex items-center">
          <div className="hidden text-right xl:inline-block">
          </div>
          <button className="pr-12 pl-4">
            <svg
              width="33"
              height="50"
              viewBox="0 0 23 30"
              fill="none"
            >
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};