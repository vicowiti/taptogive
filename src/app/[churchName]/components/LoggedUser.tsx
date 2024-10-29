"use client";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { FaHome, FaUser } from "react-icons/fa";
import { usePathname } from "next/navigation";
import BottomSheet from './BottomSheet';


interface LayoutProps {
  children: ReactNode;
  churchName?: string;
  branchName?: string;
}

const LoggedLayout: React.FC<LayoutProps> = (props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    router.push(`/${props.churchName}/${props.branchName}${path}`);
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

      <main className="flex-1 p-4 overflow-y-auto">{props.children}</main>
      <nav className="flex z-50 justify-around bg-gray-100 py-2 border-t border-gray-300">
        <button
          onClick={() => handleNavigation("/profile")}
          className={`flex flex-col items-center text-gray-600 ${
            pathname ===
            "/" + props.churchName + "/" + props.branchName + "/profile"
              ? "text-green-600"
              : ""
          } `}
        >
          <FaUser size={20} />
          <span className="text-[10px]">Profile</span>
        </button>
        <button
          onClick={() => handleNavigation("/home")}
          className={`flex flex-col items-center text-gray-600 ${
            pathname ===
            "/" + props.churchName + "/" + props.branchName + "/home"
              ? "text-green-600"
              : ""
          }`}
        >
          <FaHome size={20} />
          <span className="text-[10px]">Home</span>
        </button>
        <button
          // onClick={() => handleNavigation("/history")}
          className={`flex flex-col items-center text-gray-600 ${
            pathname ===
            "/" + props.churchName + "/" + props.branchName + "/history"
              ? "text-green-600"
              : ""
          } `}
        >
          <BottomSheet />
          <span className="text-[10px]">More</span>
        </button>
      </nav>
    </div>
  );
};

export default LoggedLayout;
