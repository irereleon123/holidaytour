import React from "react";
import pic from "../assets/logo_footer.png";
import img from "../assets/10001.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-700 bg-footer flex flex-col sm:flex-row p-7 items-center justify-evenly mx-auto">
      <div className="flex flex-col space-y-6 sm:space-y-0 sm:space-x-6">
        <img src={pic} className="w-36" alt="" />
        <p className="max-w-md text-white">
          Holiday Planners sit amet consectetur adipisicing elit. Perferendis
          sapiente tenetur officiis explicabo fugit, sit mollitia eum atque
          excepturi quaerat autem.
        </p>
        <input
          type="text"
          id="name1"
          className="border-2 border-black rounded-lg p-3 text-black w-full"
          placeholder="Enter your name"
        />
        <button className="px-2 bg-secondary text-white py-2 px-2 rounded-lg text-xl">
          Submit
        </button>
        <div className="w-52">
          <img src={img} alt="" />
        </div>
      </div>

      <div className="hidden sm:block w-0.5 bg-white"></div>

      <div className="flex flex-col space-y-6 sm:space-y-0 sm:space-x-6">
        <p className="text-xl font-bold text-white">Navigation</p>
        <div className="text-white flex flex-col space-y-4">
          <Link to={"/"} className="hover:underline">
            Home
          </Link>
          <Link to={"/about"} className="hover:underline">
            About
          </Link>
          <Link to={"/tour"} className="hover:underline">
            Tours
          </Link>
          <Link to={"/contact"} className="hover:underline">
            Contact Us
          </Link>
        </div>
      </div>

      <div className="flex flex-col space-y-4 text-white">
        <p className="text-xl font-bold">Need Help</p>
        <p>Call us</p>
        <p>Location</p>
        <p>Follow us</p>
      </div>
    </div>
  );
};

export default Footer;
