import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between flex-wrap bg-[url('https://wallpapercave.com/wp/wp2913501.png')]  bg-cover bg-no-repeat bg-center p-9 ">
      <div className="flex ">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2790/2790184.png"
          alt="Logo"
          className="h-12 w-10 mr-2"
        />
        <h1 className="font-extrabold  text-4xl text-blue-800 tracking-tight">
          CarWash Shop
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 space-x-4 flex  ">
        <Link
          to="/"
          className=" text-white rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...   text-2xl font-bold"
        >
          Home
        </Link>
        <Link
          to="/Register"
          className=" text-white rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...  text-2xl font-bold cursor-pointer "
        >
          Register
        </Link>
        <Link
          to="/Login"
          className=" text-white rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...  text-2xl font-bold cursor-pointer"
        >
          Login
        </Link>
        <Link
          to="/Services"
          className="  text-white rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...  text-2xl font-bold cursor-pointer"
        >
          Services
        </Link>
        <Link
          to="/Subscription"
          className="  text-white rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...  text-2xl font-bold cursor-pointer"
        >
          subscription
        </Link>
      </div>
    </nav>
  );
}
