"use client"
import React, { useState } from 'react'
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Login", href: "/login" },
  { name: "Contact Us", href: "#contact" },
];

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    console.log(pathname);
    
  return (
    <div className="bg-white h-[80px] lg:h-[100px] px-6  lg:px-8 text-black">
      <nav
        className="flex items-center justify-between pt-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Logo</span>
            <img className="h-12" src="/logo/logo.png" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-lg font-semibold leading-6 ${
                pathname === item.href ? "text-[#00bf63]" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-gray-900 px-6 py-6 lg:hidden">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 block rounded-lg py-2 px-3 text-base  font-semibold leading-7 text-white hover:bg-gray-400/10 ${
                      pathname === item.href ? "text-[#00bf63]" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}

export default NavBar