import React from 'react';
import react from '../assets/react.svg';

const Contact = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-purple-200">
        <div className="w-4/5 mx-auto bg-">
          <div className="text-center my-10">
            <h5 className="bg-purple-200 text-purple-700 px-6 py-2  inline-block rounded-xl  ">
              Contact
            </h5>
          </div>
          <h1 className="text-center mx-auto leading-tight text-black text-[53px] w-[40%]">
            YPSILON Course Contact can join with us.
          </h1>
          <div className="grid grid-cols-3 space-x-20 mt-20 ">
            <div className=" flex justify-start items-center bg-white shadow-xl rounded-2xl p-10 space-x-10 ">
              <div className="">
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
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <h5 className="font-bold mb-2 text-lg">Contact Number </h5>
                <a href="tel:8459324821">+91 8459324821</a>
                <a href="tel:8459324821">+91 8459324821</a>
              </div>
            </div>
            <div className=" flex justify-start items-center bg-white shadow-xl rounded-2xl p-10 space-x-10 ">
              <div className="">
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
                    d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <h5 className="font-bold mb-2 text-lg">Email Address </h5>
                <a href="tel:8459324821">admin@gmail.com</a>
                <a href="tel:8459324821">example@gmail.com</a>
              </div>
            </div>
            <div className=" flex justify-start items-center bg-white shadow-xl rounded-2xl p-10 space-x-10 ">
              <div className="">
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
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <h5 className="font-bold mb-2 text-lg">Our Location </h5>
                <a href="tel:8459324821">
                  5678 Bangla Main Road, cities 580 GBnagla, example 54786
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="my-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15127.198922706799!2d73.80661599999999!3d18.5830655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8cdd3388817%3A0xf33eeb97f5734df9!2sBaburaoji%20Gholap%20College!5e0!3m2!1sen!2sin!4v1708496822156!5m2!1sen!2sin"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
