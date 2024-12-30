import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
function Header({ formVisible, setFormVisible }) {
  function showForm() {
    setFormVisible(!formVisible);
  }

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-lg z-[70] h-20 py-2">
      <div className="w-screen flex items-center justify-between h-full">
        <div className="w-full cursor-pointer mx-9">
          <h1 className="font-bold text-xl lg:text-4xl text-green-600">
            Skillup
          </h1>
          <p className="font-base text-green-600 tracking-widest">
            An initiative By Hubnex Labs
          </p>
        </div>

        <div className="w-full hidden lg:flex items-center h-full mx-9">
          <ul className="w-full h-full hidden lg:flex items-center justify-center gap-10 px-4 text-base">
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
            className="w-44 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-600 rounded"
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
        <div className="block lg:hidden">
          <Dropdown showForm={showForm} />
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Header;
