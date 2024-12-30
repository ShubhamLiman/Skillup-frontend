import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function Dropdown({ showForm }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="hs-dropdown relative inline-flex">
        <button
          className="flex items-center justify-center p-2 rounded-md focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            width="24"
            height="23"
            viewBox="0 0 24 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 0.59082H0V2.77264H24V0.59082Z" fill="#0B090A" />
            <path d="M24 10.4092H0V12.591H24V10.4092Z" fill="#0B090A" />
            <path d="M24 20.2271H0V22.4089H24V20.2271Z" fill="#0B090A" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute bg-white top-12 right-0 w-48 rounded-md shadow-lg py-2 justify-center items-center text-center z-[1000]">
            <ul className="flex flex-col gap-2 p-4 ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    return isActive
                      ? "text-green-600 font-bold"
                      : "text-gray-900";
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/error"
                  className={({ isActive }) => {
                    return isActive
                      ? "text-green-600 font-bold"
                      : "text-gray-900";
                  }}
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/error"
                  className={({ isActive }) => {
                    return isActive
                      ? "text-green-600 font-bold"
                      : "text-gray-900";
                  }}
                >
                  Features
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  to="/error"
                  className={({ isActive }) => {
                    return isActive
                      ? "text-green-600 font-bold"
                      : "text-gray-900";
                  }}
                >
                  About us
                </NavLink>
              </li>
            </ul>
            <button
              className="w-36 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-600 rounded"
              onClick={showForm}
            >
              <p className="flex text-nowrap text-white font-base lg:font-semibold items-center justify-center gap-2">
                enroll now
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5 16.5L7.09 15.09L12.67 9.5L0.5 9.5V7.5L12.67 7.5L7.08 1.92L8.5 0.5L16.5 8.5L8.5 16.5Z"
                    fill="white"
                  />
                </svg>
              </p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
