import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    //destructure data connect endpoint with backend
    const { name, email, password } = data;
    try {
      const { data } = await axios.post("/user/register", {
        name,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login Correct, Welcome!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto py-8 pt-32  w-96">
      <form onSubmit={registerUser} className="w-full max-w-md">
        <h1 className="text-center text-5xl font-semibold text-gray-600 pb-8">
          Register
        </h1>
        <div className="bg-white  p-8 rounded-lg shadow-md">
          <div>
            <label className="font-extrabold text-2xl " htmlFor="name">
              {" "}
              Name
            </label>
            <input
              className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-gray text-2xl p-4 border-none block mt-1 "
              id="name"
              type="text"
              placeholder="Enter your Name...."
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className="mt-4">
            <label className="font-extrabold text-2xl" htmlFor="email">
              {" "}
              Email
            </label>
            <input
              className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-gray text-2xl p-4 border-none block mt-1 w-full"
              id="email"
              type="email"
              placeholder="Enter your Email...."
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="mt-4">
            <label className="font-extrabold text-2xl" htmlFor="password">
              {" "}
              Password
            </label>
            <input
              className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-gray text-2xl p-4 border-none block mt-1 w-full"
              id="password"
              type="password"
              placeholder="Enter your Password...."
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
        
        <div className="flex items-center justify-center mt-8">
          <button
            type="submit"
            className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-purple-800 py-4 text-lg px-10"
          >
            Submit
          </button>
        </div>
        </div>
      </form>
    </div>
  );
}
