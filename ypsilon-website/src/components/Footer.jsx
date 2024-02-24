import React from 'react';
import Logo from '../assets/images/Logo.webp';

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-5 w-4/5 mx-auto gap-10  h-48 my-20 ">
        {/* bg-gradient-to-b from-[#F5F6FF] to-[#AFC1FA] */}
        <div className="flex flex-col col-span-2 gap-5">
          <img src={Logo} alt="" width={150} />
          <h5 className="pr-20 text-gray-500">
            We’re always in search for talented and motivated people.Don’t be
            shy introduce yourself!
          </h5>
          <div>
            <button className="border border-indigo-400 rounded-2xl px-6 py-4">
              Contact With Us
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-black">Useful Links</h3>
          <ul className="mt-5">
            <li className="mt-2 hover:underline-left-to-right">
              <a href="Home" className="text-[#6B7385]">
                Home
              </a>
            </li>
            <li className="mt-2 hover:underline-left-to-right">
              <a href="Home" className="text-[#6B7385]">
                Carrer
              </a>
            </li>
            <li className="mt-2 hover:underline-left-to-right">
              <a href="Home" className="text-[#6B7385]">
                Become instructor
              </a>
            </li>
            <li className="mt-2 hover:underline-left-to-right">
              <a href="Home" className="text-[#6B7385]">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-black">Our Company</h2>
          <ul className="mt-5">
            <li className="mt-2 hover:underline-left-to-right">
              <a href="Home" className="text-[#6B7385]">
                Home
              </a>
            </li>
            <li className="mt-2 hover:underline-left-to-right">
              <a href="Home" className="text-[#6B7385]">
                Blogs
              </a>
            </li>
            <li className="mt-2 hover:underline-left-to-right">
              <a href="Home" className="text-[#6B7385]">
                Terms & Conditions
              </a>
            </li>
            <li className="mt-2 hover:underline-left-to-right">
              <a href="Home" className="text-[#6B7385]">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-black">Get Contact</h2>
          <ul className="mt-5 ">
            <li className="mt-1 ">
              <a href="Phone " className="hover:text-blue-500 text-[#6B7385]">
                Phone : 8459324821
              </a>
            </li>
            <li className="mt-1 ">
              <a href="Email" className=" hover:text-blue-500 text-[#6B7385]">
                Email : Ypsilon@gmail.com
              </a>
            </li>
            <li className="mt-1 ">
              <a href="Email" className=" hover:text-blue-500 text-[#6B7385]">
                Email : Ypsilon@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
