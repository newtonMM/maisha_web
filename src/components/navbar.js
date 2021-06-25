import React from "react";
import { Menu, Transition } from "@headlessui/react";
const data = [
  {
    name: "home",
    link: "#home",
  },

  {
    name: "who we are ",
    link: "#who we are",
  },
  { name: "services", link: "#services" },
  {
    name: "contact",
    link: "#contacts",
  },
  {
    name: "blog",
    link: "#blog",
  },
];

const navbar = () => {
  return (
    <div>
      <nav className="bg-red-500">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <a
                  href="#"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <img
                    className="h-10 w-15 mr-1 text-blue-400"
                    src="https://nacc.or.ke/wp-content/uploads/2015/09/logo.png"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  />

                  <span className="font-bold">Maisha network</span>
                </a>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                {data.map((itms, index) => (
                  <a
                    key={index}
                    href={itms.link}
                    className="py-5 px-3 text-gray-700 hover:text-gray-900"
                  >
                    {itms.name}
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
            {/* <!-- mobile button goes here --> */}

            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button"></button>
            </div>
          </div>
        </div>

        {/* //mobile menu // */}
        <div className="mobile-menu hidden md:hidden">
          {data.map((itms, index) => (
            <a
              href={itms.link}
              key={index}
              className="block py-2 px-4 text-sm hover:bg-gray-200"
            >
              {itms.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default navbar;
