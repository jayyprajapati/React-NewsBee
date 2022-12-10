import React, { useState } from "react";
import logo from "./imgs/newsBeeLogo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <nav className="bg-[#4d5c72] sticky">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>

                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/">
                  <img
                    className=" h-[44px] w-auto block"
                    src={logo}
                    alt="Your Company"
                  />
                </Link>
              </div>
              {/* List Items */}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium active:bg-gray-900"
                    aria-current="page"
                  >
                    General
                  </Link>

                  <Link
                    to="/sports"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium active:bg-gray-900"
                  >
                    Sports
                  </Link>

                  <Link
                    to="/technology"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium active:bg-gray-900"
                  >
                    Technology
                  </Link>

                  <Link
                    to="/business"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium active:bg-gray-900"
                  >
                    Business
                  </Link>
                  <Link
                    to="/entertainment"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium active:bg-gray-900"
                  >
                    Entertainment
                  </Link>
                  <Link
                    to="/health"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium active:bg-gray-900"
                  >
                    Health
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${!menu && "hidden"} md:hidden`} id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium active:bg-gray-900"
              aria-current="page"
              onClick={toggleMenu}
            >
              General
            </Link>

            <Link
              to="/sports"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium active:bg-gray-900"
              onClick={toggleMenu}
            >
              Sports
            </Link>

            <Link
              to="/technology"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium active:bg-gray-900"
              onClick={toggleMenu}
            >
              Technology
            </Link>

            <Link
              to="/business"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium active:bg-gray-900"
              onClick={toggleMenu}
            >
              Business
            </Link>
            <Link
              to="/entertainment"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium active:bg-gray-900"
              onClick={toggleMenu}
            >
              Entertainment
            </Link>
            <Link
              to="/health"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium active:bg-gray-900"
              onClick={toggleMenu}
            >
              Health
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
