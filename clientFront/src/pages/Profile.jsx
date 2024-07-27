import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";
import { CartContext } from "../context/cartContext";
import axios from "axios"; //handleLogout
import { useNavigate } from "react-router-dom";
import { WashContext } from "../context/washContext";

export default function Profile() {
  const { user, setUser } = useContext(UserContext);
  const { saveHistoryCart } = useContext(CartContext);
  const { userWashesData, userWashData, deleteWash } = useContext(WashContext);

  //manage go home when logout
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      userWashesData(user._id);
    }
  }, [user, userWashesData]);

  const handleLogout = async () => {
    try {
      await axios.post("/user/logout");
      setUser("");
      navigate("/");
    } catch (error) {
      console.error("error logging out", error);
    }
  };

  //use ternary operator
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mx-auto my-4 max-w-3xl flex flex-col items-center pt-32">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        {user ? (
          <div className="w-full">
            <h2 className="text-xl font-semibold mb-2">Hi, {user.name}!</h2>
            <p className="mb-4">Welcome to your profile page</p>
            <div className="text-left">
              <p className="text-xl text-blue-600">Email: {user.email}</p>
              <p className="text-xl text-blue-600">ID: {user._id}</p>
              <h3 className="text-xl font-semibold mt-4">History buy's:</h3>
              <ul className="flex flex-col items-center mb-4 p-4 border rounded-lg">
                {saveHistoryCart && saveHistoryCart.length > 0 ? (
                  saveHistoryCart.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center mb-4 p-4 border rounded-lg"
                    >
                      <img
                        src={item.imagen}
                        alt={item.nombre}
                        className="w-32 h-32 object-cover mr-4"
                      />
                      <div className="flex flex-col flex-grow">
                        <h2 className="text-xl font-semibold">{item.nombre}</h2>
                        <p className="text-lg font-bold text-green-600">
                          {item.precio}$
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <li className="text-gray-600 text-center w-full">
                    did not buy anything yet!
                  </li>
                )}
              </ul>

              <h3 className="text-xl font-semibold mt-4">Wash Appointments</h3>
              <ul className="flex flex-col items-center mb-4 p-4 border rounded-lg">
                {userWashData && userWashData.length > 0 ? (
                  userWashData.map((wash) => (
                    <div
                      key={wash._id}
                      className="flex flex-col items-center mb-4 p-4 border rounded-lg"
                    >
                      <p className="text-xl text-blue-600">
                        Service ID: {wash.service_id}
                      </p>
                      <p className="text-xl text-blue-600">Date: {wash.date}</p>
                      <p className="text-xl text-blue-600">
                        Location: {wash.location}
                      </p>
                      <p className="text-xl text-blue-600">
                        Status: {wash.status}
                      </p>
                      <button
                        className="mt-6 py-2 px-12 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-red-700"
                        onClick={() => deleteWash(wash._id)}
                      >
                        Cancel
                      </button>
                    </div>
                  ))
                ) : (
                  <li className="text-gray-600 text-center w-full">
                    you have no appointments!
                  </li>
                )}
              </ul>
            </div>

            <button
              className="mt-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-purple-800 md:py-4 md:text-lg md:px-10"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <p className="font-extrabold text-4xl pt-32 text-red-600">
            Please log in ...
          </p>
        )}
      </div>
    </div>
  );
}
