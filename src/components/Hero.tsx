import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 mb-20">
      {/* Background Image */}
      <img
        src="/landing/hero.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm -z-10"></div>

      {/* SVG Decorative Blur */}
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".2"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>


      <div className="px-6 lg:px-20">
        
         <div className="mx-aut max-w-2xl py-32 sm:py-48 lg:py-56">
           <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            
           </div>
           <div className="">
             <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
               Tap-2-Give
             </h1>
             <p className="mt-6 text-3xl leading-8 text-white">
               Your Self Service Church Giving Platform
             </p>
             <div className="mt-10 flex items-center justify-start gap-x-6">
               <Link
                 href="/register"
                 className="rounded-md bg-[#00bf63] px-10 py-1.5 text-xl flex justify-center items-center font-semibold leading-7 text-white shadow-sm hover:bg-green-400 "
               >
                 Sign Up
               </Link>
             
             </div>
           </div>
         </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".2"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

