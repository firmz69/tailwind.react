import React from "react"
export default function Main() {
    return (
          <div className="my-3 flex flex-col text-left lg:text-center">
          <div className="flex flex-row justify-center pt-2 text-center">
          </div>
            <div className="mt-32">
              <div className="mx-auto flex flex-col px-5 py-2 text-left lg:flex-row">
                <div className="hidden lg:inline-block lg:w-full lg:max-w-xl">
                  <img src="/images/yo.jpg" alt="img" />
                </div>
                <div className="flex flex-col pt-0 text-left lg:w-1/2 lg:flex-grow pb-5 lg:items-start lg:pl-24 lg:pt-24 text-cyan-900">
                  <h2 className="transition ease-in-out delay-150 hover:scale-110 pb-4 font-bold leading-tight sm:text-4xl">
                    Gitar Akustik
                  </h2>
                  <p className="mb-8 leading-relaxed text-zinc-500">
                  Body eksklusif Medium-jumbo Menampilkan bass yang kaya dan bertenaga dikombinasikan dengan mid-range yang halus tinggi untuk bunyi yang terbuka dan modern.
                  </p>
                  <p class="line-through font-serif"> Rp. 400.000</p>
                <p className="font-l mb-10 font-serif text-rose-700 text-xl">
               Rp. 250.000{" "}
                </p>
                </div>
                <div className="inline-block lg:hidden lg:w-full lg:max-w-xl">
                  <img src="/images/yo.jpg.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="my-24 p-4 text-cyan-900 sm:text-4xl ">
              <div className="max-w-9xl mx-auto flex flex-col items-center bg-gradient-to-r px-10 py-24 lg:flex-row">
                <div className="flex flex-col items-center pb-1 pl-0 text-center lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pl-12 lg:pr-24 lg:text-left">
                  <h2 className="transition ease-in-out delay-150 hover:scale-110 pb-4 font-bold leading-tight">
                    Gitar Elektrik
                  </h2>
                  <p className="leading-relaxed text-base text-zinc-500">
                   Gitar yang menggunakan beberapa pickup untuk mengubah bunyi atau getaran dari string gitar menjadi arus listrik yang akan dikuatkan kembali dengan menggunakan seperangkat amplifier dan loud speaker. ︎ ︎︎ ︎︎{" "}
                  </p>
                  ︎ ︎ ︎ ︎︎
                  <p class="line-through text-base  font-serif"> Rp. 3.000.000</p>
                <p className="font-l mb-10 font-serif text-rose-700 text-xl">
               Rp. 2.500.000{" "}
                </p>
                </div>
                <div className="w-4/7 pr-12 lg:w-2/5">
                  <img
                    src="/images/v.png"
                    className="hidden object-cover object-center lg:inline-block"
                    alt="image"
                  />
                </div>
              </div>
            </div>
            <div className="mx-auto">
              <div className="max-w-8xl mx-auto px-5 py-24 lg:px-24">
                <div className="my-6 flex w-full flex-col text-left lg:text-center">
                  <h3 className="transition ease-in-out delay-150 hover:scale-110 mb-8 sm:text-5xl font-bold text-cyan-900">
                    Drum Akustik
                  </h3> 
                  <h3 className="mb-12 px-0 text-lg text-zinc-500 lg:px-52">
                   Produk Terbaru Dengan gaya modern dirancang dengan fokus yang lebih besar pada bermain dalam situasi live menggunakan lapisan kayu lebih tebal Bass drum shell terdiri atas desain delapan lapis sementara tom, floor tom, dan snare shell dibuat dengan enam lapis. 
                  </h3>
                <p class="line-through font-serif text text-zinc-600"> Rp. 10.000.000</p>
                <p className="font-l mb-10 font-serif text-rose-700 text-xl">
               Rp. 9.500.000{" "}
                </p>
                </div>
                <img src="/images/nnn.png" alt="img" />
              </div>
            </div>
          </div>
        );
      };