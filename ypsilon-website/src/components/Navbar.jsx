import React, { useState } from 'react';
import Logo from '../assets/images/Logo.png';
import { Navlinks } from '../constants/index';
import { Link } from 'react-router-dom';
<link
  href="https://fonts.cdnfonts.com/css/rocket-rinder"
  rel="stylesheet"
></link>;
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <header className="w-full bg-white z-50 backdrop-blur-lg ">
        <nav className="flex justify-between items-center w-4/5 mx-auto py-5 ">
          <div>
            {/* <img src={Logo} width={250} alt="" /> */}
            <h1
              className="text-blue-500 text-center"
              style={{ fontFamily: 'Rocket Rinder, sans-serif' }}
            >
              YPSILON ADVANCED SKILLS HUB <br /> (Y.A.S.H.)
            </h1>
          </div>

          <div>
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
          </div>
          <div className="hidden max-lg:block">
            <button onClick={toggleMenu} className="outline-none">
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
            </button>
          </div>
        </nav>
      </header>
      {showMenu && (
        <div className="bg-white py-2 w-4/5 mx-auto transition">
          {/* Add your menu items here */}
          <ul className="justify-center items-center ">
            {Navlinks.map((item) => (
              <li key={item.lable}>
                <Link
                  to={item.href}
                  className="font-semibold my-2 text-lg leading-normal hover:text-blue-700 hover:underline-left-to-right"
                >
                  {item.lable}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
