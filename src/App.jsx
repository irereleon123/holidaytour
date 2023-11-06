import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";

import "./App.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { IoReorderThree } from "react-icons/io5";
import About from "./pages/About";
import Contact from "./pages/Contact";
import image from "./assets/houses.jpg";
import Tour from "./pages/Tour";
import colon from "./assets/colon.svg";
import { AiFillStar } from "react-icons/ai";
import TourList from "./pages/TourList";

function App() {
  return (
    <>
      <div className="   text-center mb-72 px-8 py-52 md:p-36">
        <div className="bg-image" />
        <p className="font-bold font-body min-w-xl md:text-7xl text-4xl py-2 px-2 text-white container mx-auto ">
          Enjoy the travel with
          <span className="py-0"> life </span><br />
          <span class="bg-orange-900">holiday planner</span>
        </p>
      </div>

      <div className="md:container md:mx-auto md:px-32 md:space-y-[18rem]    ">
        <About />
        <Tour />

        <div className="flex md:flex-row flex-col ">
          <div className="md:w-1/2 flex flex-col  items-end  bg-secondary      transform md:translate-x-[-14rem] md:translate-y-[-14rem] ">
            <div className="p-5 space-y-6">
              <div className="font-normal border-l-white border-l-[0.3rem] flex items-center px-2  text-4xl text-white ">
                Testimonials{" "}
              </div>
              <p className="font-body text-4xl text-white">Customer reviews</p>
            </div>

            <img
              src={colon}
              alt=""
              className="  w-4/5 border-white border   bg-white mt-[10rem] ml-[20rem]    h-[30rem] pl-[10rem]"
              srcset=""
            />
          </div>
          <div className="md:w-1/2 space-y-5 transform  md:translate-y-[3rem]">
            <div className="flex space-x-4 text-secondary text-3xl">
              <p>
                <AiFillStar />
              </p>
              <p>
                <AiFillStar />
              </p>
              <p>
                <AiFillStar />
              </p>
              <p>
                <AiFillStar />
              </p>
              <p>
                <AiFillStar />
              </p>
            </div>
            <p className="text-3xl font-light  ">
           <b> Monthly Calendars: </b> <br /> Organize your holiday preparations and keep track of important dates. Gift Planning: Plan and budget your gifts, ensuring that you find the perfect presents for everyone on your list. Menu Planning: Plan your holiday meals, from holiday feasts to delectable treats.
            </p>
          </div>
        </div>
        <div className="md:py-32 transform md:translate-y-[-24rem] ">
          <Contact />
        </div>
      </div>
    </>
  );
}


export default App;
