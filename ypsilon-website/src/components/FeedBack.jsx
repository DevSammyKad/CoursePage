import React from 'react';
import Avatar from '../assets/images/Avatar1.png';
import feedBack from '../json/feedBack.json';

const FeedBack = () => {
  return (
    <div className="mx-auto w-4/5 my-40 ">
      <div className="text-start mt-20">
        <h5 className="bg-blue-100 text-blue-500 text-base font-semibold px-6 py-2  inline-block rounded-xl  ">
          LEARNERS FEEDBACK
        </h5>
      </div>
      <div className="relative">
        <div className="mt-5 ">
          <h1>
            What Our <span className="text-blue-500"> Learners </span>Say
          </h1>
          <p className="font-medium text-sm text-gray-400 my-5">
            Learning communicate to global world and <br /> build a bright
            future with our YPSILON.
          </p>
          <button className="px-6 py-4 mt-10 text-white text-lg font-semibold bg-blue-400 hover:bg-blue-400 rounded-xl ">
            Contact Us
          </button>
        </div>

        <div className="flex absolute -top-32 left-80 gap-10 p-10 overflow-x-auto ">
          {feedBack.map((item, id) => (
            <div
              key={id}
              className="bg-white rounded-2xl mt-10 w-96 shadow-md inline-block animate-scroll-left"
            >
              <div className="flex items-center px-10 py-5">
                <div className="">
                  <img
                    src={item.Image}
                    className="rounded-full w-16   border-gray-400 border-2 p-1"
                    alt="Avtar"
                  />
                </div>
                <div className="ml-5">
                  <h1 className="text-lg mb-1">{item.FullName}</h1>
                  <p className="text-sm mt-1 text-gray-400">
                    {item.Designation}
                  </p>
                </div>
              </div>
              {/* PARAGRAFh */}
              <div>
                <p className="text-sm  text-start px-10 pb-5">
                  {item.FeedBack}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
