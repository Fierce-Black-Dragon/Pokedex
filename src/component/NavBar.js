import React from "react";

export const NavBar = () => {
  return (
    <div className="bg-red-600">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-start h-16">
          <div className=" h-8 w-8 rounded-full bg-blue-600 border-solid border-4 border-blue-100  md: h-12 w-12"></div>
          <div className="flex items-center mx-4 mb-4 ">
            <div className=" h-4 w-4 rounded-full  mx-2 bg-red-800 border-solid border border-blue-100 "></div>
            <div className=" h-4 w-4 rounded-full mx-2 bg-yellow-800 border-solid border border-blue-100 "></div>
            <div className=" h-4 w-4 rounded-full mx-2 bg-green-800 border-solid border border-blue-100 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};
