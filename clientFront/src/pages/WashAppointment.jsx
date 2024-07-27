import React, { useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { WashContext } from "../context/washContext";
import { UserContext } from "../context/userContext";

export default function WashAppointment() {
  const { services, makeWash } = useContext(WashContext);
  const { user } = useContext(UserContext);
  const [userId, setUserId] = useState("");
  const [choiceService, setChoiceService] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("pending");

  //userId logged fill in with id,disable input
  useEffect(() => {
    if (user) {
      const userlogged = user._id;
      setUserId(userlogged);
    }
  }, [user]);

  //handle submision
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Schema BackEnd
    const washData = {
      user_id: userId,
      service_id: choiceService,
      date,
      location,
      status,
    };

    await ScheduleWash(washData);
    if (washData) {
      toast.success("you made an appointment");
    }
  };

  // Schedule wash f
  const ScheduleWash = async (washData) => {
    try {
      await makeWash(washData);
      setDate("");
      setLocation("");
    } catch (error) {
      toast.error("error scheduling the wash");
    }
  };
  return (
    <div className="container mx-auto py-8 pt-32 w-96">
      <h1 className="text-4xl font-bold mb-4">Schedule a Wash</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4 w-80">
          <label className="block text-blue-700">USER ID</label>
          <input
            type="text"
            value={userId}
            disabled
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4 w-80">
          <label className="block text-blue-700">CHOOSE SERVICE</label>
          <select
            value={choiceService}
            onChange={(e) => setChoiceService(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          >
            {services.map((service) => (
              <option key={service._id} value={service._id}>
                {service.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4 w-80">
          <label className="block text-blue-700">DATE</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4 w-80">
          <label className="block  text-blue-700">LOCATION</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Schedule Wash Appointment
        </button>
      </form>
    </div>
  );
}
