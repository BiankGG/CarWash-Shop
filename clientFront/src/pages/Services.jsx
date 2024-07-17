import React,{useContext,useEffect,useState} from 'react'
import axios from 'axios';
import { UserContext } from '../../context/userContext';



export default function Services() {
const {user}= useContext(UserContext);
const [services, setServices]= useState([])

useEffect(() => {
  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:8000/services/all'); 
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  fetchServices();
}, []);

  return (
    <div className='pt-32'>
      <h1>Services</h1>
      {!!user && (
        <div className='flex flex-wrap gap-6'>
          {services.map(service => (
            <div key={service._id} className='bg-white p-6 rounded-lg shadow-md flex flex-col'>
              <h2 className='text-xl font-semibold'>{service.nombre}</h2>
              <p className='text-gray-600'>{service.descripcion}</p>
              <p className='text-lg font-bold text-green-600'>Price: ${service.precio}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
