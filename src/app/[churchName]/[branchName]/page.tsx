"use client"
import React from 'react'
import { PageProps } from '../../../../.next/types/app/layout';
import { useRouter } from "next/navigation";

import Carousel from '../components/Carousel';

const Page = ({params}:PageProps) => {
const router = useRouter();
    

 const handleNavigation = () => {
    // Replace '/destination' with the target path
    router.push(`/${params.churchName}/${params.branchName}/home`);
  };
    
  return (
    <div className="overflow-x-hidden">
      <div>
        <div className="w-full flex justify-center items-center mt-2">
          <img src="/logo/logo.png" className="w-[35%] lg:w-[10%]" alt="logo" />
        </div>
        {/* Church logo */}
       <div className="w-full flex justify-center items-center mt-2">
          <img src="/churchlogo.png" className="w-[35%] lg:w-[10%]" alt="logo" />
        </div>

        <div className="mt-10 px-5 lg:px-10">
          <button
            onClick={handleNavigation}
            className="p-3 w-full  bg-green-600 text-white font-semibold rounded-lg my-2"
          >
            Log in as Member
          </button>
          <button className="p-3 w-full bg-green-600 text-white font-semibold rounded-lg my-2">
            Use as Guest
          </button>
        </div>
        <div>
          <p className="text-xs text-center mt-3">
            New Here? <span className="underline">Register</span>
          </p>
        </div>
      </div>

      <div className="mt-7 flex justify-center items-center">
        <Carousel />
      </div>
    </div>
  );
}

export default Page