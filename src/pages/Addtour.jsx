import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Navigate,useNavigate } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';

function Addtour() {
  const [backdropImage, setBackdropImage] = useState('');
  const [destination, setDestination] = useState('');
  const [Description, setDescription] = useState('');
  const [Duration, setDuration] = useState('');
  const [GroupSize, setGroupSize] = useState('');
  const [Price, setPrice] = useState('');
  const [Discount, setDiscount] = useState('');
  const [TourType, setTourtype] = useState('');
  const [Departure, setDeparture] = useState('');
  const [Seats, setSeats] = useState('');
  const [fromMonth, setFrommonth] = useState('');
  const [toMonth, setTomonth] = useState('');
  const [departureTime, setDeparturetime] = useState('');
  const [returnTime, setReturntime] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setBackdropImage(file)

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data= new FormData();
    data.append('backdropImage', backdropImage);
    data.append('destination', destination);
    data.append('Description', Description);
    data.append('Duration', Duration);
    data.append('GroupSize', GroupSize);
    data.append('Price', Price);
    data.append('Discount', Discount);
    data.append('TourType', TourType);
    data.append('Departure', Departure);
    data.append('Seats', Seats);
    data.append('fromMonth', fromMonth);
    data.append('toMonth', toMonth);
    data.append('departureTime', departureTime);
    data.append('returnTime', returnTime);

    try {
      let token=localStorage.getItem("token")
      const response = await axios({
        method: "POST",
        url: 'https://holiday-planner-4lnj.onrender.com/api/v1/tour/create',
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        }  
    });
    console.log(response);
    setIsLoading(true);
    toast.success("tour-added-successfuly");
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
}
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
        <label className="block">
          <span className="text-gray-700">Descrption:</span>
          <input
            className="mt-1 block w-1/1 rounded-md bg-gray-100 border-black border-2 focus:border-gray-500 focus:bg-white focus:ring-0"
            type="text"
            value={Description}
            onChange={(event) => setDescription(event.target.value)}
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
        <label className="block">
          <span className="text-gray-700">Discount:</span>
          <input
            className="mt-1 block w-1/1 rounded-md bg-gray-100 border-black border-2 focus:border-gray-500 focus:bg-white focus:ring-0"
            type="text"
            value={Discount}
            onChange={(event) => setDiscount(event.target.value)}
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
        <label className="block">
          <span className="text-gray-700">Tourtype:</span>
          <input
            className="mt-1 block w-1/1 rounded-md bg-gray-100 border-black border-2 focus:border-gray-500 focus:bg-white focus:ring-0"
            type="text"
            value={TourType}
            onChange={(event) => setTourtype(event.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Departure:</span>
          <input
            className="mt-1 block w-1/1 rounded-md bg-gray-100 border-black border-2 focus:border-gray-500 focus:bg-white focus:ring-0"
            type="text"
            value={Departure}
            onChange={(event) => setDeparture(event.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Seats:</span>
          <input
            className="mt-1 block w-1/1 rounded-md bg-gray-100 border-black border-2 focus:border-gray-500 focus:bg-white focus:ring-0"
            type="text"
            value={Seats}
            onChange={(event) => setSeats(event.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-gray-700">frommonth:</span>
          <input
            className="mt-1 block w-1/1 rounded-md bg-gray-100 border-black border-2 focus:border-gray-500 focus:bg-white focus:ring-0"
            type="text"
            value={fromMonth}
            onChange={(event) => setFrommonth(event.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Tomonth:</span>
          <input
            className="mt-1 block w-1/1 rounded-md bg-gray-100 border-black border-2 focus:border-gray-500 focus:bg-white focus:ring-0"
            type="text"
            value={toMonth}
            onChange={(event) => setTomonth(event.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-gray-700">departuretime:</span>
          <input
            className="mt-1 block w-1/1 rounded-md bg-gray-100 border-black border-2 focus:border-gray-500 focus:bg-white focus:ring-0"
            type="text"
            value={departureTime}
            onChange={(event) => setDeparturetime(event.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Returntime:</span>
          <input
            className="mt-1 block w-1/1 rounded-md bg-gray-100 border-black border-2 focus:border-gray-500 focus:bg-white focus:ring-0"
            type="text"
            value={returnTime}
            onChange={(event) => setReturntime(event.target.value)}
          />
        </label>
        <br />
        <br />
        <button
          className="px-6 bg-secondary text-white py-4 rounded-lg text-xl"
          type="submit"
        >
          {isLoading?
            <Audio
            height="20"
            width="20"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
           /> :"edit"}
          Submit
        </button>
        <ToastContainer />
      </fieldset>
    </form>
  );
}

export default Addtour;
