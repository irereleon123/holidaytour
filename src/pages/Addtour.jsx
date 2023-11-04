import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Navigate,useNavigate } from 'react-router-dom';

function Addtour() {
  const [backdropImage, setBackdropImage] = useState('');
  const [destination, setDestination] = useState('');
  const [Duration, setDuration] = useState('');
  const [GroupSize, setGroupSize] = useState('');
  const [Price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setBackdropImage(file)

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data= new FormData();
    data.append('backdropImage',backdropImage),
    data.append('destination',destination),
    data.append('Duration',Duration),
    data.append('GroupSize',GroupSize),
    data.append('Price',Price)

    try {
      let token=localStorage.getItem("token")
      const response = await

      axios({
        method: "POST",
        url: 'https://holiday-planner-4lnj.onrender.com/api/v1/tour/create',
        data: data,
        headers: {
          Authorization: 'Bearer ${token}',
        } 
    });
      console.log(response.data);
      localStorage.setItem("token",response.data.access_token)
      toast.success("tour added succesfull");
      navigate("/dashboard/Tourdash");
    } catch (error) {
      console.log(error);
      toast.error("An error happened");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div>
          <h1>
            <u>Add Tour</u>
          </h1>
        </div>
        <label className="block">
          <span className="text-gray-700">Destination_image:</span>
          <input
            className="mt-1 block w-1/1 rounded-md bg-gray-100 border-black border-2 focus:border-gray-500 focus:bg-white focus:ring-0"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
        <br />
        <label className="block">
          <span className="text-gray-700">Destination:</span>
          <input
            className="mt-1 block w-1/1 rounded-md bg-gray-100 border-black border-2 focus:border-gray-500 focus:bg-white focus:ring-0"
            type="text"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
          />
        </label>

        <label className="block mt-4">
          <span className="text-gray-700">Duration:</span>
          <input
            className="mt-1 block w-1/1 rounded-md bg-gray-100 border-black border-2 focus:border-gray-500 focus:bg-white focus:ring-0"
            type="text"
            value={Duration}
            onChange={(event) => setDuration(event.target.value)}
          />
        </label>

        <label className="block mt-4">
          <span className="text-gray-700">Group_size:</span>
          <input
            className="mt-1 block w-1/1 rounded-md bg-gray-100 border-black border-2 focus:border-gray-500 focus:bg-white focus:ring-0"
            type="text"
            value={GroupSize}
            onChange={(event) => setGroupSize(event.target.value)}
          />
        </label>

        <label className="block mt-4">
          <span className="text-gray-700">Price:</span>
          <input
            className="mt-1 block w-1/1 rounded-md bg-gray-100 border-black border-2 focus:border-gray-500 focus:bg-white focus:ring-0"
            type="text"
            value={Price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </label>
        <br />
        <br />
        <button
          className="px-6 bg-secondary text-white py-4 rounded-lg text-xl"
          type="submit"
        >
          Submit
        </button>
        <ToastContainer />
      </fieldset>
    </form>
  );
}

export default Addtour;
