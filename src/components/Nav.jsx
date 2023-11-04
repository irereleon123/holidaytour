import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import pic from "../assets/logo1.png";
// import logo from "../assets/logo.PNG";

// import "./App.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoSearchCircleOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";

function Nav() {
  const [openModal, setOpen] = useState(false);

  const open = () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  return (
    <div className="">
      <div className=" hidden md:flex justify-between bg-primary text-white p-10 relative    ">
        <div className="flex space-x-4 p-2 ">
          <p className="flex items-center space-x-4 font-light">
            <span className="  text-3xl text-secondary">
              <FiMail />
            </span>
            holidayplanners@gmail.com
          </p>
          <p className="flex items-center space-x-6">
            <span className="text-3xl text-secondary">
              <FiPhoneCall />
            </span>
            +1234567890
          </p>
        </div>
        <div className="flex justify-evenly items-center space-x-4">
          <p className="text-3xl text-secondary">
            <FaFacebookF />
          </p>
          <p className=" text-3xl text-secondary">
            <FaInstagram />
          </p>
          <p className=" text-3xl text-secondary">
            <FaTwitter />
          </p>
        </div>
      </div>
      {/* white navbar */}
      <div className="flex justify-between  p-1 m  transform md:translate-y-[-2.1rem] sticky     bg-white container mx-auto  ">
        <img src={pic} alt="" />

        <div className="space-x-1 flex items-center">
          <button className="px-9 py-2 hidden md:flex bg-secondary text-white rounded-lg font-semibold">
            Reserve
          </button>
          <i className="text-4xl">
            <IoSearchCircleOutline />
          </i>
          <button
            className="text-2xl text-white bg-secondary rounded-full  py-4 px-4 "
            onClick={open}
          >
            <BiMenuAltRight />
          </button>
        </div>
      </div>

      {openModal && (
        <div className="bg-primary  w-full h-full fixed top-0  left-0 z-5 pr-1 space-y-15 flex items-center  mx-auto justify-between ">
          <div className="space-y-4">
            <p className="text-white font-semibold"></p>
            <div className="text-white flex flex-col space-y-1 font-body font-semibold text-2xl bg-nav mr-9  px-20 pr-[8rem] items-start py-5 rounded-lg">
              <Link to={"/"}>
                <button className="hover:text-secondary" onClick={close}>
                  Home
                </button>
              </Link>
              <Link to={"/about"}>
                <p className="hover:text-secondary" onClick={close}>
                  About
                </p>
              </Link>
              <Link to={"/Tour"}>
                <p className="hover:text-secondary" onClick={close}>
                  Tour
                </p>
              </Link>

              <Link to={"/Contact"}>
                <p className="hover:text-secondary" onClick={close}>
                  Contact us
                </p>
              </Link>

              <Link to={"/Login"}>
                <p className="hover:text-secondary" onClick={close}>
                  Login
                </p>
              </Link>
            </div>
          </div>
          <button
            className="hover:text-secondary text-white m  text-5xl"
            onClick={close}
          >
            <AiOutlineCloseCircle />
          </button>
        </div>
      )}
    </div>
  );
}

export default Nav;
