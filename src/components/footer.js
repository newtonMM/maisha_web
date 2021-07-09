import React from "react";
import instagram from "../assets/images/instagram.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-white relative pt-1 border-b-2 border-red-700">
        <div className="container mx-auto px-6">
          <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
              <div className="flex flex-col">
                <span className="font-bold text-red-600 uppercase mb-2">
                  Maisha Yoth
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-red-700  text-xl hover:text-red-500"
                  >
                    Blog
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-red-700  text-xl hover:text-red-500"
                  >
                    Login
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-red-700  text-xl hover:text-red-500"
                  >
                    Sign up
                  </a>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-red-600 uppercase mt-4 md:mt-0 mb-2">
                  Social Media
                </span>
                <span className="my-2">
                  <a
                    href="https://www.facebook.com/MaishaYouth"
                    className="text-red-700 text-xl hover:text-red-500"
                  >
                    <img
                      className="h-10 w-12 mr-20  text-red-400"
                      src="https://image.flaticon.com/icons/png/128/216/216502.png"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    />
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="https://twitter.com/MaishaYouth"
                    className="text-red-700  text-xl hover:text-red-500"
                  >
                    <img
                      className="h-10 w-12 mr-20  text-red-400"
                      src="https://image.flaticon.com/icons/png/128/216/216516.png"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    />
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="https://www.instagram.com/maishayouth/"
                    className="text-red-700 text-xl hover:text-red-500"
                  >
                    <img
                      className="h-10 w-12 mr-5  text-red-400"
                      src="https://image.flaticon.com/icons/png/128/216/216506.png"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    />
                  </a>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                  <a
                    href="#"
                    className="flex items-center  text-gray-700 hover:text-gray-900"
                  >
                    <img
                      className="h-30 w-36 mr-20  text-red-400"
                      src="https://nacc.or.ke/wp-content/uploads/2015/09/logo.png"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    />
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-red-700  text-xl hover:text-red-500 "
                  >
                    Home
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-red-700  text-xl hover:text-red-500"
                  >
                    About Us
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-red-700  text-xl hover:text-red-500"
                  >
                    Service
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-red-700  text-xl hover:text-red-500"
                  >
                    Contact
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-red-700  text-xl hover:text-red-500"
                  >
                    Blog
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
              <p className="text-sm text-red-600 font-bold mb-2">
                © 2021 by Newton Muthigani
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
