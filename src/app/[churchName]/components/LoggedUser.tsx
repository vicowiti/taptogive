"use client"
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { FaHome, FaHistory, FaUser } from "react-icons/fa";

interface LayoutProps {
  children: ReactNode;
}

const LoggedLayout: React.FC<LayoutProps> = (props) => {
  const router = useRouter();

  console.log("props", props)

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="relative flex flex-col min-h-screen max-h-screen">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
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
                <stop offset={1} stopColor="green" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="w-full flex justify-center items-center mt-5">
            
            <img src="/logo/logo.png" className="w-[35%] lg:w-[10%]" alt="logo"/>
        </div>
      <main className="flex-1 p-4">{props.children}</main>
      <nav className="flex justify-around bg-gray-100 py-2 border-t border-gray-300">
        <button
          onClick={() => handleNavigation("/")}
          className="flex flex-col items-center text-gray-600"
        >
          <FaHome size={24} />
          <span className="text-xs">Home</span>
        </button>
        <button
          onClick={() => handleNavigation("/history")}
          className="flex flex-col items-center text-gray-600"
        >
          <FaHistory size={24} />
          <span className="text-xs">History</span>
        </button>
        <button
          onClick={() => handleNavigation("/profile")}
          className="flex flex-col items-center text-gray-600"
        >
          <FaUser size={24} />
          <span className="text-xs">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default LoggedLayout;