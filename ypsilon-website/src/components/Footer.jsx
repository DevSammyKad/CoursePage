import React from 'react';
import Logo from '../assets/images/Logo.png';
import { Link } from 'react-router-dom';
import Logo2 from '../assets/images/ICIAlogo.png';

const Footer = () => {
  return (
    <>
      <div className=" w-4/5 mx-auto gap-10 ">
        <div className="grid sm:grid-cols-1  md:grid-cols-5  my-10 ">
          {/* bg-gradient-to-b from-[#F5F6FF] to-[#AFC1FA] */}
          <div className="flex flex-col col-span-2 gap-5">
            {/* <img src={Logo} alt="" width={250} /> */}
            <h1 className="text-blue-500">YPSilon</h1>
            <h5 className="pr-20 text-gray-500">
              We’re always in search for talented and motivated people. Don’t be
              shy introduce yourself!
            </h5>
            <div className="flex justify-start items-center">
              <img src={Logo2} width={200} height={100} alt="" />
              <img src={Logo} width={200} height={100} alt="" />
            </div>
            <div>
              {/* <button className="border border-indigo-400 rounded-2xl px-6 py-4">
              Contact With Us
            </button> */}
            </div>
          </div>
          <div>
            <h3 className="text-black">Useful Links</h3>
            <ul className="mt-5">
              <li className="mt-2 hover:underline-left-to-right">
                <Link to={'/'}>
                  <a href="/" className="text-[#6B7385]">
                    Home
                  </a>
                </Link>
              </li>
              <li className="mt-2 hover:underline-left-to-right">
                <a href="Home" className="text-[#6B7385]">
                  Carrer
                </a>
              </li>
              <li className="mt-2 hover:underline-left-to-right">
                <Link to={'/'}>
                  <a href="Home" className="text-[#6B7385]">
                    Become instructor
                  </a>
                </Link>
              </li>
              <li className="mt-2 hover:underline-left-to-right">
                <Link to={'/contact'}>
                  <a href="/" className="text-[#6B7385]">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-black text-start">Our Company</h2>
            <ul className="mt-5">
              <li className="mt-2 hover:underline-left-to-right">
                <Link to={'/about'}>
                  <a href="/" className="text-[#6B7385]">
                    About
                  </a>
                </Link>
              </li>
              <li className="mt-2 hover:underline-left-to-right">
                <Link to={'event'}>
                  <a href="" className="text-[#6B7385]">
                    Events
                  </a>
                </Link>
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
            <h2 className="text-black text-start">Get Contact</h2>
            <ul className="mt-5 ">
              <li className="mt-1 ">
                <a
                  href="tel:8788541747"
                  className="hover:text-blue-500 text-[#6B7385]"
                >
                  Phone : 8788541747
                </a>
              </li>
              <li className="mt-1 ">
                <a
                  href="mailto:anjali.jagtap@ymail.com"
                  className=" hover:text-blue-500 text-[#6B7385]"
                >
                  Email : anjali.jagtap@ymail.com
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

        <hr className="mb-5" />
        <p className="text-sm text-center ">
          Copyright © 2024 " Developed & Managed By &nbsp;
          <a
            href="https://technolize.in/"
            className="text-blue-500"
            target="_blank"
          >
            Technolize Private Limited"
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
