import React, { useState, useEffect } from "react";
import { BsChevronRight } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { BiSolidUserPlus } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import video from "../assets/video.mp4";
import { useNavigate, useParams } from 'react-router-dom';
import {Audio} from "react-loader-spinner"

const TourDetails = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [numberOfTicket, setNumberOfTicket] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const params = useParams();
  const tourID = params.id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('tourID', tourID);
    data.append('fullName', fullName);
    data.append('email', email);
    data.append('confirmEmail', confirmEmail);
    data.append('phone', phone);
    data.append('date', date);
    data.append('numberofticket', numberOfTicket);
    data.append('message', message);

    
      const token = localStorage.getItem("token");
      console.log(token);

       
      axios({
        method: "POST",
        url: 'https://holiday-planner-4lnj.onrender.com/api/v1/booking/create',
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })

     .then ((response)=>{
      console.log(response);
      toast.success(response.data.message);
      
      setTimeout(() => {
        navigate("/tour");
      }, 2000);
    })
     .catch ((error) => {
      console.log(error);
      toast.error(error.message);
    })
  };
    let tourId = params.id;
    const [backdropImage, setBackdropImage] = useState('');
    const [destination, setDestination] = useState('');
    const [title, setTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [Duration, setDuration] = useState('');
    const [GroupSize, setGroupSize] = useState('');
    const [Price, setPrice] = useState('');
    const [Departure, setDeparture] = useState('');
    const [departureTime, setDepartureTime] = useState('');
    const [returnTime, setReturnTime] = useState('');
    const [isloading,setIsLoading]=useState(false)
    const fetchTour = () => {
      let token = localStorage.getItem("token");
      
      axios({
        method: "GET",
        url: `https://holiday-planner-4lnj.onrender.com/api/v1/tour/getElement?fieldName=_id&value=${tourId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          setIsLoading(false);
          setBackdropImage(response?.data?.backdropImage);
          setDestination(response?.data?.destination);
          setTitle(response?.data?.title); 
          setDescription(response?.data?.Description); 
          setDuration(response?.data?.Duration); 
          setGroupSize(response?.data?.GroupSize); 
          setPrice(response?.data?.Price); 
          setDeparture(response?.data?.Departure); 
          setDepartureTime(response?.data?.departureTime);
          setReturnTime(response?.data?.returnTime);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    useEffect(() => {
      fetchTour();
    }, []);

  return (
    <>
    {isloading ? (
        <Audio
          height="300"
          width="1000"
          radius="9"
          color="#7B3F00"
          ariaLabel="loading"
          className="mx-auto"
        />
      ) : (
        <>
<div className="py-8 px-8">
        <div className="absolute top-0 left-0 w-screen h-screen bg-cover bg-center md:bg-no-repeat" style={{ backgroundImage: `url(${backdropImage})` }} />
        <p className="font-bold font-body md:text-5xl lg:text-6xl text-xl md:text-3xl lg:text-3xl py-2 px-2 text-yellow container mx-auto relative z-10">
          {destination}
  </p>
</div>
{/* {/* <br /><br /><br /><br /><br />*/} <br/> <br/><br/>
<br /><br /><br /><br /><br /> <br/> <br/><br/>
<br /><br /><br /><br />

      <div className="container flex flex-col md:flex-row mx-auto items-center relative">
        <div className="mt-8 md:mt-28">
          <form action="" className="flex justify-center  ">
            <div className=" border-2 border-slate-100 rounded-l-lg mr-0 py-1 px-1 bg-secondary text-white  ">
              <label htmlFor="" className=" text-center">
                Information
              </label>
            </div>
            <div className=" border-2 hover:bg-secondary border-slate-60 borderl-1  ml-0 py-1 px-4  ">
              <label htmlFor="">Tour plan</label>
            </div>
            <div className=" border-2 hover:bg-secondary border-slate-60  border-l-1  py-1 px-4  ">
              <label htmlFor="">Location</label>
            </div>
            <div className=" border-2 hover:bg-secondary border-slate-60 border-l-1  py-1 px-4 ">
              <label htmlFor="">Gallery</label>
            </div>
            <div className=" border-2 hover:bg-secondary border-slate-60 rounded-r-lg border-l-1  py-1 px-3 ">
              <label htmlFor="">Review</label>
            </div>
          </form>

          <div className="px-1 py-10 mr-[4rem] space-y-4 shadow-1xl">
            <div className="flex justify-between items-center  ">
              <h1 className="text-1xl w-1/1 font-normal font-body items-center">
                A wonderful serenity has taken possession of my entire soul
              </h1>

              <p className="rounded-full font-bold py-[1.4rem] px-[1.3rem] bg-secondary  text-white">
                {Price}
              </p>
            </div>

            {/* icons */}
            <div className="flex bg-secondary px-2 py-2 justify-evenly   mx-1">
              <div className="flex flex-col text-1xl items-center text-white">
                <AiFillClockCircle />
                <p className="text-black font-semibold">2 days</p>
              </div>
              <div className="flex flex-col text-1xl items-center text-white">
                <HiUsers />
                <p className="text-black font-semibold"> 6 people</p>
              </div>
              <div className="flex flex-col text-1xl items-center text-white">
                <BiSolidUserPlus />
                <p className="text-black font-semibold"> 18</p>
              </div>
              <div className="flex flex-col text-1xl items-center text-white">
                <FaLocationDot />
                <p className="text-black font-semibold">Greece</p>
              </div>
              <div className="flex flex-col text-1xl items-center text-white">
                <FaSun />
                <p className="text-black font-semibold"> Discovery </p>
              </div>
            </div>



            <p className="font-light text-lg max-w-1xl">

              {Description}
            </p>

            {/* video */}
            <div className="tour-video">
                    <video
                      width="840"
                      height="360"
                      muted
                      controls
                      loop
                      autoPlay
                    >
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>

            <div className="font-small flex justify-start">
            <table className="border-collapse border-2 border-gray-300">
  <thead>
    <tr className="">
      <td className="font-semibold text-1xl px-6 border-t-2 border-b-2 border-r-2 border-slate-400 p-3">
        Destination
      </td>
      <td className="text-1xl border-b-2 border-t-2 border-slate-300 p-4">
        {/* Greece */}{destination}
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="font-semibold text-1xl px-6 border-b-2 border-r-2 border-slate-300">
        Departure
      </td>
      <td className="text-x3 border-b-2 border-slate-300 p-4">
        {/* Lorem Ipsum */}{Departure}
      </td>
    </tr>
    <tr>
      <td className="font-semibold text-1xl px-6 border-b-2 border-r-2 border-slate-300">
        Departure time
      </td>
      <td className="text-x3 border-b-2 border-slate-300 p-4">
        {/* 9:15am to 9:30am */}{departureTime}
      </td>
    </tr>
    <tr>
      <td className="font-semibold text-1xl px-6 border-b-2 border-r-2 border-slate-300">
        Return time
      </td>
      <td className="text-x4 border-b-2 border-slate-300 p-4">
        {/* Approximately 10:30pm */}{returnTime}
      </td>
    </tr>
    <tr>
      <td className="font-semibold text-1xl px-6 border-b-2 border-r-2 border-slate-300">
        Dress Code
      </td>
      <td className="text-x3 border-b-2 border-slate-300 p-4">
        Comfortable clothing and light jacket
      </td>
    </tr>
    <tr>
      <td className="font-semibold text-1xl px-6 border-b-2 border-r-2 border-slate-300">
        Price Include
      </td>
      <td className="text-x3 border-b-2 border-slate-300 p-4">
        <div className="flex flex-col">
          <p>5 star accomodation</p>
          <p>Air fases</p>
          <p>3 night hotel accomodation</p>
          <p>All transport in destination location</p>
        </div>
      </td>
    </tr>
    <tr>
      <td className="font-semibold text-1xl px-6 border-b-2 border-r-2 border-slate-100">
        Price Not Included
      </td>
      <td className="text-x3 border-b-2 border-slate-300 p-3">
        <div className="flex flex-col">
          <p>Guide service Fee</p>
          <p>Any private expenses</p>
          <p>Room service Fees</p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col space-y-6 mb-10 mt-8 md:mt-24">
          <div className="flex flex-col p-4 shadow-xl transform translate-y-[-1.5rem] bg-white">
            <h2 className="font-semibold text-1xl flex justify-center">
              Book your tour
            </h2>
            <form className="flex flex-col space-y-4 p-8" onSubmit={handleSubmit}>
  <div className="container">
    <div className="flex flex-col">
      <label htmlFor="name1">Full Name</label>
      <input
        type="text"
        id="name1"
        className="border-2 border-black rounded-lg p-4 text-black"
        placeholder="Enter your full name"
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
      Book now
    </button>
  </div>
</form>
<ToastContainer />

          </div>

          <div className="bg-tertiary p-8 px-14 space-y-4 flex flex-col items-start text-center">
            <h2 className="font-semibold text-2xl mb-6">Why book with us?</h2>
            <p className="font-light flex items-center">
              <span className="font-bold">
                <BsChevronRight />
              </span>
              Best price guarantee
            </p>
            <p className="font-light flex items-center">
              <span className="font-bold">
                <BsChevronRight />
              </span>
              Customer care available 24/7
            </p>
            <p className="font-light flex items-center">
              <span className="font-bold">
                <BsChevronRight />
              </span>
              Free travel insurance
            </p>
            <p className="font-light flex items-center">
              <span className="font-bold">
                <BsChevronRight />
              </span>
              Hand-picked tours and activities
            </p>
          </div>
          <div className="bg-secondary bg-idea p-8 pb-20 px-14 space-y-2 flex flex-col items-start text-center text-white">
            <h2 className="font-semibold text-2xl text-white">Got a question</h2>
            <p className="font-light text-white flex items-center">
              Do not hesitate to give us a call. We are an expert team and we are happy to talk to you.
            </p>
            <p className="font-light flex items-center">
              <span className="font-bold">
                <BsChevronRight />
              </span>
              Customer care available 24/7
            </p>
            <p className="font-light flex items-center">
              <span className="font-bold">
                <BsChevronRight />
              </span>
              Free travel insurance
            </p>
            <p className="font-light flex items-center">
              <span className="font-bold">
                <BsChevronRight />
              </span>
              Hand-picked tours and activities
            </p>
          </div>
        </div>
      </div>
      </>
      )};
    </>
  );
};

export default TourDetails;