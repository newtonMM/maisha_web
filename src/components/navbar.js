import React, { useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const data = [
  {
    name: "Home",
    link: "#home",
    current: true,
  },

  {
    name: "About us ",
    link: "#who we are",
    current: false,
  },
  { name: "Services", link: "#services", current: false },
  {
    name: "Contact",
    link: "#contacts",
    current: false,
  },
  {
    name: "Blog",
    link: "#blog",
    current: false,
  },
];

const Navbar = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Disclosure as="nav" className="bg-white lg:py-15">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 py-4 sm:px-6 lg:px-8 ">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex ">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex items-center  text-gray-700 hover:text-gray-900"
                  >
                    <img
                      className="h-30 w-36 mr-20  text-blue-400"
                      src="https://nacc.or.ke/wp-content/uploads/2015/09/logo.png"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    />
                  </a>
                </div>

                <div className="hidden md:flex items-center lg:space-x-20 md:space-x-5">
                  {data.map((itms, index) => (
                    <a
                      key={index}
                      href={itms.link}
                      className={classNames(
                        itms.current
                          ? "bg-gray-200 text-red-600 font-bold  rounded transition duration-300 hover:bg-red-400 py-2 px-3  lg:text-xl  md:text-base  "
                          : "text-red-500 lg:text-xl md:text-base font-sans hover:bg-gray-200  transition duration-300",
                        "px-4 py-3  ml-5 md:px-1"
                      )}
                      aria-current={itms.current ? "page" : undefined}
                    >
                      {itms.name.toUpperCase()}
                    </a>
                  ))}
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <a href="" className="py-5 px-3">
                  Login
                </a>
                <a
                  href=""
                  className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
                >
                  Signup
                </a>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {data.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
