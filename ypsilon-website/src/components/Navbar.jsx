import React from 'react';
import Logo from '../assets/images/Logo.webp';
import { Navlinks } from '../constants/index';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <header className="w-full bg-white fixed top-1 z-50 backdrop-blur-lg ">
        <nav className="flex justify-between items-center w-4/5 mx-auto py-5 ">
          <div>
            <img src={Logo} width={150} alt="" />
          </div>

          <ul className="flex flex-1 justify-center items-center gap-10 max-lg:hidden">
            {Navlinks.map((item) => (
              <li key={item.lable}>
                <Link
                  to={item.href}
                  className="font-semibold text-lg leading-normal hover:text-blue-700 hover:underline-left-to-right"
                >
                  {item.lable}
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <button className="flex items-center gap-2 bg-purple-100 text-purple-500 font-semibold px-6 py-2 rounded-lg max-lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              Admin
            </button>
          </div>
          <div className="hidden max-lg:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
