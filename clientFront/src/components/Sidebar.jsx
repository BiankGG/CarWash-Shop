import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaCreditCard } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { PiSprayBottleDuotone } from "react-icons/pi";

const SideBar = () => {
  return (
    <div className="fixed top-32 left-4 h-screen w-32 m-0 flex flex-col bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... opacity-90">
      <SideBarIcon icon={<FiShoppingCart size="30" />} />
      <SideBarIcon icon={<FaCreditCard size="30" />} />
      <Link to="/profile" className="sidebar-link">
        <SideBarIcon icon={<RiContactsLine size="30" />} />
      </Link>
      <SideBarIcon icon={<PiSprayBottleDuotone size="30" />} />
    </div>
  );
};

const SideBarIcon = ({ icon }) => {
  return <div className="sidebar-icon my-6">{icon}</div>;
};

export default SideBar;
