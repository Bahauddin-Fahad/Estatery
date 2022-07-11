import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelopeOpen } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar bg-gray-100 border-b-2 border-gray-200">
      <div className="navbar-start w-8/12">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="" className="font-bold">
                Rent
              </Link>
              <Link to="" className="font-bold">
                Buy
              </Link>
              <Link to="" className="font-bold">
                Sell
              </Link>
            </li>
            <li tabindex="0">
              <Link to="" className="justify-between font-bold">
                Manage Property
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
              <ul className="p-2">
                <li>
                  <Link to="" className="font-bold">
                    Submenu 1
                  </Link>
                </li>
                <li>
                  <Link to="" className="font-bold">
                    Submenu 2
                  </Link>
                </li>
              </ul>
            </li>
            <li tabindex="0">
              <Link to="" className="justify-between">
                Resources
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
              <ul className="p-2">
                <li>
                  <Link to="">Submenu 1</Link>
                </li>
                <li>
                  <Link to="">Submenu 2</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link to="" className="btn btn-ghost normal-case text-xl font-bold">
          <FaEnvelopeOpen className="text-primary mr-2" /> Estatery
        </Link>
        <div className=" hidden lg:flex mx-auto">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="" className="font-bold">
                Rent
              </Link>
              <Link to="" className="font-bold">
                Buy
              </Link>
              <Link to="" className="font-bold">
                Sell
              </Link>
            </li>
            <li tabindex="0">
              <Link to="" className="font-bold">
                Manage Property
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="p-2 bg-gray-100">
                <li>
                  <Link to="" className="font-bold">
                    Submenu 1
                  </Link>
                </li>
                <li>
                  <Link to="" className="font-bold">
                    Submenu 2
                  </Link>
                </li>
              </ul>
            </li>
            <li tabindex="0">
              <Link to="" className="font-bold">
                Resources
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="p-2">
                <li>
                  <Link to="" className="font-bold">
                    Submenu 1
                  </Link>
                </li>
                <li>
                  <Link to="" className="font-bold">
                    Submenu 2
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end mr-3">
        <Link
          to=""
          className="btn btn-sm btn-outline btn-primary normal-case mr-3"
        >
          Login
        </Link>
        <Link to="" className="btn btn-sm btn-primary text-white normal-case">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
