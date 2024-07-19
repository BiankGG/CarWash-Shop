import React from "react";

export default function Subscription() {
  return (
    <div className="pt-32 container mx-auto px-4 py-8 pt-20  ">
      <h1 className="font-extrabold  text-4xl text-blue-800 tracking-tight">Subscription World!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-28 px-4">
      <div className="bg-white gap-4  bg-opacity-30 rounded-lg shadow-md overflow-hidden">
        <img
          src="https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">Bright & Shine</h2>
          <h3 className="text-l font-bold mb-2">Basic Exterior Wash</h3>
        </div>
        <button className="text-gray-900  bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg ">
          Description/Details
        </button>
      </div>
      <div className="bg-white bg-opacity-30 rounded-lg shadow-md overflow-hidden">
        <img
          src="https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">Bright & Shine</h2>
          <h3 className="text-l font-bold mb-2">Basic Exterior Wash</h3>
        </div>
        <button className="text-gray-900  bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg ">
          Description/Details
        </button>
      </div>
      <div className="bg-white bg-opacity-30 rounded-lg shadow-md overflow-hidden">
        <img
          src="https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">Bright & Shine</h2>
          <h3 className="text-l font-bold mb-2">Basic Exterior Wash</h3>
        </div>
        <button className="text-gray-900  bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg ">
          Description/Details
        </button>
      </div>
      </div>
    </div>
  );
}
