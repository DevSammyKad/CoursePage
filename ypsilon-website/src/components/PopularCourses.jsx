import React from 'react';
import coursePoster1 from '../assets/images/course-01.webp';
import coursePoster2 from '../assets/images/course-02.webp';
import Avatar1 from '../assets/images/Avatar1.png';

const PopularCourses = () => {
  return (
    <div className="w-4/5 mx-auto mt-40">
      <div className="text-start my-5">
        <h5 className="bg-red-100 text-red-500 text-base font-semibold px-6 py-2  inline-block rounded-xl  ">
          TOP POPULAR COURSE
        </h5>
      </div>
      <div className="flex justify-between items-center">
        <h1>
          Most Popular <span className="text-blue-500">Courses</span>
        </h1>
        <button className="px-6 py-2 text-blue-500 text-lg font-semibold bg-blue-100 rounded-xl ">
          View All Courses
        </button>
      </div>

      <div className="grid grid-cols-3 gap-10 my-10">
        <div className="bg-white px-8 py-8 rounded-3xl w-[420px] cursor-pointer shadow-md hover:shadow-2xl ">
          <div className=" rounded-2xl ">
            {/* Image  */}
            <img src={coursePoster1} alt="" className="rounded-2xl" />
          </div>
          {/* Titile  */}
          <div className="mt-5">
            <h1 className="text-2xl">
              The Complete YPSilon 2024: From Zero to Expert!
            </h1>
          </div>
          <div className="flex space-x-3 my-3">
            <p className="font-medium text-sm">12 Lessons</p>
            <p className="font-medium text-sm">50 Students</p>
          </div>
          {/* Course Description */}
          <div>
            <p className="font-medium text-base my-5">
              Master Python by building 100 projects in 100 days. Learn data
              science, automation, build websites, games and apps!
            </p>
          </div>
          {/* Instructor */}
          <div className="flex items-center space-x-2">
            <img
              src={Avatar1}
              className="rounded-full w-10   border-gray-400 border-2 p-1
        "
            />
            <p className="font-medium text-sm text-gray-500">
              By <span className="text-gray-900 text-base ">Vivek Murti</span>{' '}
              In Advanced Educator
            </p>
          </div>
          {/* Pricing  */}
          <div className="mt-5 flex items-center justify-between">
            <h1 className="font-semibold  text-3xl  text-green-500">
              $90{' '}
              <span className="font-medium text-base text-gray-500">$140</span>
            </h1>
            <a href="#" className="text-blue-500 font-semibold teext-">
              Learn More
            </a>
          </div>
        </div>
        <div className="bg-white px-8 py-8 rounded-3xl w-[420px] cursor-pointer shadow-md hover:shadow-2xl ">
          <div className=" rounded-2xl ">
            {/* Image  */}
            <img src={coursePoster2} alt="" className="rounded-2xl" />
          </div>
          {/* Titile  */}
          <div className="mt-5">
            <h1 className="text-2xl">
              The Complete YPSilon 2024: From Zero to Expert!
            </h1>
          </div>
          <div className="flex space-x-3 my-3">
            <p className="font-medium text-sm">12 Lessons</p>
            <p className="font-medium text-sm">50 Students</p>
          </div>
          {/* Course Description */}
          <div>
            <p className="font-medium text-base my-5">
              Master Python by building 100 projects in 100 days. Learn data
              science, automation, build websites, games and apps!
            </p>
          </div>
          {/* Instructor */}
          <div className="flex items-center space-x-2">
            <img
              src={Avatar1}
              className="rounded-full w-10  border-gray-400 border-2 p-1 
        "
            />
            <p className="font-medium text-sm text-gray-500">
              By <span className="text-gray-900 text-base ">Vivek Murti</span>{' '}
              In Advanced Educator
            </p>
          </div>
          {/* Pricing  */}
          <div className="mt-5 flex items-center justify-between">
            <h1 className="font-semibold  text-3xl  text-green-500">
              $90{' '}
              <span className="font-medium text-base text-gray-500">$140</span>
            </h1>
            <a href="#" className="text-blue-500 font-semibold teext-">
              Learn More
            </a>
          </div>
        </div>
        <div className="bg-white px-8 py-8 rounded-3xl w-[420px] cursor-pointer shadow-md hover:shadow-2xl ">
          <div className=" rounded-2xl ">
            {/* Image  */}
            <img src={coursePoster1} alt="" className="rounded-2xl" />
          </div>
          {/* Titile  */}
          <div className="mt-5">
            <h1 className="text-2xl">
              The Complete YPSilon 2024: From Zero to Expert!
            </h1>
          </div>
          <div className="flex space-x-3 my-3">
            <p className="font-medium text-sm">12 Lessons</p>
            <p className="font-medium text-sm">50 Students</p>
          </div>
          {/* Course Description */}
          <div>
            <p className="font-medium text-base my-5">
              Master Python by building 100 projects in 100 days. Learn data
              science, automation, build websites, games and apps!
            </p>
          </div>
          {/* Instructor */}
          <div className="flex items-center space-x-2">
            <img
              src={Avatar1}
              className="rounded-full w-10  border-gray-400 border-2 p-1 
        "
            />
            <p className="font-medium text-sm text-gray-500">
              By <span className="text-gray-900 text-base ">Vivek Murti</span>{' '}
              In Advanced Educator
            </p>
          </div>
          {/* Pricing  */}
          <div className="mt-5 flex items-center justify-between">
            <h1 className="font-semibold  text-3xl  text-green-500">
              $90{' '}
              <span className="font-medium text-base text-gray-500">$140</span>
            </h1>
            <a href="#" className="text-blue-500 font-semibold teext-">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
