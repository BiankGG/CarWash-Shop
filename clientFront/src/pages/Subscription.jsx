import React from "react";
import { toast } from "react-hot-toast";



export default function Subscription() {



  const notify = () => toast("succes adding to the cart");

  return (
    <div className="pt-32 container mx-auto px-4 py-8 ">
      <h1 className="font-extrabold  text-4xl text-blue-800 tracking-tight">Subscription World!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-28 px-4">
      <div className="bg-white gap-4  bg-opacity-30 rounded-lg shadow-md overflow-hidden">
        <img
          src="https://t3.ftcdn.net/jpg/08/53/63/08/360_F_853630827_XtsJTDtoI1bX5NhD6jygNXYI0m2oF2Qz.jpg"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">JUST WANT IT CLEAN!</h2>
          <h3 className="text-l font-bold mb-2">Basic Exterior Wash</h3>
        </div>
        <button className="text-gray-900  bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg ">
          Description/Details
        </button>
      </div>
      <div className="bg-white bg-opacity-30 rounded-lg shadow-md overflow-hidden">
        <img
          src="https://www.motortrend.com/uploads/sites/5/2020/05/2017_Honda_Clarity.jpg"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">I LIKE HAVING MY CAR CLEANER!</h2>
          <h3 className="text-l font-bold mb-2">INSIDE OUT</h3>
        </div>
        <button className="text-gray-900  bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg ">
          Description/Details
        </button>
      </div>
      <div className="bg-white bg-opacity-30 rounded-lg shadow-md overflow-hidden">
        <img
          src="https://www.hdwallpapers.in/download/bugatti_chiron_super_sport_300_prototype_4k_5k_hd_cars-3840x2160.jpg"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">MY CAR, MY LIFE!</h2>
          <h3 className="text-l font-bold mb-2">MAKE IT SHINY</h3>
        </div>
        <button className="text-gray-900  bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg ">
          Description/Details
         
        </button>
      </div>
      </div>
    </div>
  );
}
