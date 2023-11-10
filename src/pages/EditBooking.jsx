import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Audio } from 'react-loader-spinner';

const EditBooking = () => {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [numberOfTicket, setNumberOfTicket] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const params = useParams();
  const tourId = params.id; 
  const [isLoading, setIsLoading] = useState(false);



  const fetchBookings = () => {
    setIsLoading(true);
    let token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/booking/${tourId}`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,

      },
    })
    .then((response) => {
      console.log(response, "response");
      setIsLoading(false)
      setFullName(response?.data?.fullname);
      setEmail(response?.data?.email);
      setConfirmEmail(response?.data?.confirmEmail); 
      setPhone(response?.data?.phone);
      setDate(response?.data?.date);
      setNumberOfTicket(response.data.numberOfTicket);
      });
  };

  useEffect(() => {
    console.log(date)
    fetchBookings();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    let token = localStorage.getItem('token');
    let data = new FormData();
    data.append('tourId', tourId)
    data.append('fullName', fullname);
    data.append('email', email);
    data.append('confirmEmail', confirmEmail);
    data.append('phone', phone);
    data.append('date', date);
    data.append('numberOfTicket', numberOfTicket);
    data.append('message', message);
    data.append('tourId',tourId);

    axios({
      method: 'PUT',
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/booking/update/${tourId}`,
      data: data,
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setIsLoading(true);
        console.log(response);
        toast.success('book updated successfully');
        setTimeout(() => navigate('/dashboard/bookingsDash'), 3000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };



  return (
    <>
    <div>EditBooking</div>
    <form className="flex flex-col space-y-4 p-8" onSubmit={handleSubmit}>
  <div className="container">
    <div className="flex flex-col">
      <label htmlFor="name1">Full Name</label>
      <input
        type="text"
        id="name1"
        className="border-2 border-black rounded-lg p-4 text-black"
        placeholder="Enter your full name"
        value={fullname}
        onChange={(event) => setFullName(event.target.value)}
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        className="border-2 border-black rounded-lg p-4 text-black"
        placeholder="Enter your email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="confirmEmail">Confirm Email</label>
      <input
        type="email"
        id="confirmEmail"
        className="border-2 border-black rounded-lg p-4 text-black"
        placeholder="Confirm your email"
        value={confirmEmail}
        onChange={(event) => setConfirmEmail(event.target.value)}
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="phone">Phone</label>
      <input
        type="text"
        id="phone"
        className="border-2 border-black rounded-lg p-4 text-black"
        placeholder="Enter your phone number"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        className="border-2 border-black rounded-lg p-4 text-black"
        placeholder="Select a date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="numberOfTicket">Number of Tickets</label>
      <input
        type="number"
        id="numberOfTicket"
        className="border-2 border-black rounded-lg p-4 text-black"
        placeholder="Enter the number of tickets"
        value={numberOfTicket}
        onChange={(event) => setNumberOfTicket(parseInt(event.target.value))}
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="message">Message</label>
      <input
        type="text"
        id="message"
        className="border-2 border-black rounded-lg py-4 px-4 text-black"
        placeholder="Enter a message (optional)"
        onChange={(event) => setMessage(event.target.value)}
      />
    </div>

    <div className="flex space-x-4 items-center">
      <input
        type="checkbox"
        className="rounded-lg"
        name="checkAvailability"
        id="checkAvailability"
      />
      <label htmlFor="checkAvailability">Check availability</label>
    </div>

    <button 
    className="px-6 bg-secondary text-white py-4 rounded-lg text-xl">
       {isLoading? <Audio
  height="20"
  width="20"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
      :"Book now"}
    </button>
  </div>
</form>
<ToastContainer />
</>
  )
}

export default EditBooking