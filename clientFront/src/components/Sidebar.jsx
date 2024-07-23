import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaCreditCard } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { PiSprayBottleDuotone } from "react-icons/pi";
import React, { useState } from "react";
import Cart from "../pages/Cart";

const SideBar = () => {
 

  const handleButtonCart = () => {
    
  };

  return (
    <div className="fixed top-32 left-4 h-screen w-32 m-0 flex flex-col bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... opacity-90">
     <Link to="/Cart" className="sidebar-link">
      <SideBarIcon icon={<FiShoppingCart size="30" />} onClick={handleButtonCart} /> 
      </Link>
      <SideBarIcon icon={<FaCreditCard size="30" />} />
      <Link to="/Profile" className="sidebar-link">
        <SideBarIcon icon={<RiContactsLine size="30" />} />
      </Link>
      <Link to="/Product" className="sidebar-link">
      <SideBarIcon icon={<PiSprayBottleDuotone size="30" />} />
      </Link>
    </div>
  );
};

const SideBarIcon = ({ icon }) => {
  return <div className="sidebar-icon my-6">{icon}</div>;
};

export default SideBar;
