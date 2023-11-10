import React, { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from 'axios';

const TourList = () => {
  const TourCard = ({ tour }) => {
    const { title, Duration, destination, Description, Price, backdropImage, _id } = tour;

    return (
      <div className="flex flex-col items-start w-full md:w-1/2 lg:w-1/3 py-8">
        <div className="w-full">
          <img
            className="w-full md:w-80 h-60 object-cover"
            src={backdropImage}
            alt={title}
          />
        </div>

        <div className="tour-info flex flex-col text-left items-start space-y-4 border-l-secondary border-l-4 p-4">
          <h2 className="font-semibold text-left text-2xl bg-secondary transform translate-x-2 p-2 translate-y-[-1rem] text-white">
            {destination}
          </h2>
          <p className="tour-description max-w-xl font-semibold text-left">
            {Duration}
          </p>
          <p className="tour-description max-w-xl font-light text-left">
            {Description}
            

          </p>
          <div className="flex space-x-4">
            <p className="tour-price text-3xl font-bold">{Price}</p>
            <Link to={`/tourDetails/${_id}`}>
              <button className="px-4 py-2 bg-secondary text-white rounded-lg">
                Book now
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const TourListMain = () => {
    const [tours, setTours] = useState([]);
    let token = localStorage.getItem("token");

    axios({
      method: "GET",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data);
        setTours(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    return (
      <div className="py-8 px-8">
        <div className="flex flex-wrap space-y-4 md:space-y-0 md:space-x-4 justify-evenly">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="text-center mb-12 px-8 py-12 md:p-40">
      <div className="bg-image1" />
      <p className="font-bold font-body text-4xl md:text-7xl py-2 px-2 text-white container mx-auto">
        Tour list
      </p>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br />


      <div className="container flex flex-col md:flex-row mx-auto items-center relative">
        <div className="w-full md:w-2/3 flex flex-col items-center md:items-start md:justify-evenly mt-8 md:mt-24">
          <div className="mt-8 md:mt-28">
            <form action="" className="flex flex-col md:flex-row">
              <div className="border rounded-l-lg md:mr-0 py-2 md:px-28 border-black">
                <label htmlFor="" className="font-bold text-center">
                  Sort by:
                </label>
              </div>
              <div className="border border-l-0 ml-0 py-2 md:px-4 border-black">
                <label htmlFor=""></label>
                <select name="" id="">
                  <option value="">Release date</option>
                </select>
              </div>
              <div className="border rounded-r-lg border-l-0 py-2 md:px-28 border-black">
                <select name="" id="">
                  <option value="">Descending</option>
                  <option value="">Ascending</option>
                </select>
              </div>
            </form>
          </div>
          <TourListMain />
        </div>
        <div className="w-full md:w-1/3 flex flex-col space-y-6 mb-10 mt-8 md:mt-24">
          <div className="flex flex-col p-4 shadow-xl transform translate-y-[-1.5rem] bg-white">
            <h2 className="font-semibold text-2xl flex justify-center">
              Find your tour
            </h2>
            <form action="/" method="get" id="form" className="flex flex-col space-y-4 p-8 container">
              <div className="flex flex-col">
                <input
                  type="text"
                  id="name1"
                  className="border-2 border-black rounded-lg p-4 text-black"
                  placeholder="Search tour"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  id="email"
                  className="border-2 border-black rounded-lg p-4 text-black"
                  placeholder="Where to?"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Duration
                </label>
                <input
                  type="date"
                  className="border-2 border-black rounded-lg p-4"
                />
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold">
                    Min price
                  </label>
                  <input
                    type="text"
                    className="w-1/2 border-2 border-black rounded-lg px-14 py-4"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold">
                    Max price
                  </label>
                  <input
                    type="text"
                    className="w-1/2 border-2 border-black rounded-lg px-14 py-4"
                  />
                </div>
              </div>
              <div className="flex space-x-4 text-2xl items-center">
                <input
                  type="checkbox"
                  className="py-44 text-7xl w-12 h-8 px-8 rounded-lg"
                  name=""
                  id=""
                />
                <p>Cultural</p>
              </div>
              <div className="flex space-x-4 text-2xl items-center">
                <input
                  type="checkbox"
                  className="py-44 text-7xl w-12 h-8 px-8 rounded-lg"
                  name=""
                  id=""
                />
                <p> Adventure</p>
              </div>
              <div className="flex space-x-4 text-2xl items-center">
                <input
                  type="checkbox"
                  className="py-44 text-7xl w-12 h-8 px-8 rounded-lg"
                  name=""
                  id=""
                />
                <p> Historical</p>
              </div>
              <div className="flex space-x-4 text-2xl items-center">
                <input
                  type="checkbox"
                  className="py-44 text-7xl w-12 h-8 px-8 rounded-lg"
                  name=""
                  id=""
                />
                <p> Seaside</p>
              </div>
              <div className="flex space-x-4 text-2xl items-center">
                <input
                  type="checkbox"
                  className="py-44 text-2xl w-12 h-8 px-8 rounded-lg"
                  name=""
                  id=""
                />
                <p> Discovery</p>
              </div>
              <button className="px-6 bg-secondary text-white py-4 rounded-lg text-xl">
                Find now
              </button>
            </form>
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
    </div>
  );
};

export default TourList;
