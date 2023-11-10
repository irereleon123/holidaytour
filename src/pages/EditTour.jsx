import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Navigate,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';

function EditTour() {
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
    const params = useParams()
    const tourId = params.id

  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setBackdropImage(Pr);
    }

    const fetchTour = () => {
      const token = localStorage.getItem('token');
      axios({
        method: "GET",
        url: `https://holiday-planner-4lnj.onrender.com/api/v1/tour/getElement?fieldName=_id&value=${tourId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response, "response");
        setBackdropImage(response?.data?.backdropImage);
        setDescription(response?.data?.Description);
        setDestination(response?.data?.destination);
        setDuration(response?.data?.Duration); 
        setGroupSize(response?.data?.GroupSize);
        setDiscount(response?.data?.Discount);
        setPrice(response?.data?.Price);
        setTourtype(response?.data?.TourType);
        setDeparture(response?.data?.Departure);
        setSeats(response?.data?.Seats);
        setFrommonth(response?.data?.fromMonth);
        setTomonth(response?.data?.toMonth);
        setDeparturetime(response?.data?.departureTime);
        setReturntime(response?.data?.returnTime);
      })
      .catch((error)=>{
        console.log(error);
      })
    }

    useEffect(() => {
      console.log(Price)
      fetchTour();
    },[])
  
    const handleSubmit = async (e) => {
      let token=localStorage.getItem("token")
      e.preventDefault();
      let data = new FormData();
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
      axios({
        method:"PUT",
        url:`https://holiday-planner-4lnj.onrender.com/api/v1/tour/update/${tourId}`, 
        data: data,
        headers:{
            "content-type":"multipart/form-data",
            Authorization:`Bearer ${token}` 
        }
    }
    ).then((response)=>{
        console.log(response); 
        setIsLoading(true)
            toast.success("Tour-updated successfully");
            setTimeout(()=>
            navigate("/Dashboard/TourDash")
            ,3000);
        
    }).catch((error)=>{
        console.log(error);
        toast.error(error.message);
    });
}
return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div>
          <h1>
            <u>Edit Tour</u>
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
            wrapperClass
          />
          :"submit update"}
          
        </button>
        <ToastContainer />
      </fieldset>
    </form>
  );
}
export default EditTour;