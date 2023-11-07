import React from "react";
import logo1 from "../assets/logo1.png";
import { RxDashboard } from "react-icons/rx";
import { BsFillAirplaneFill } from "react-icons/bs";
import { RiContactsBook2Line } from "react-icons/ri";
import { AiOutlineCalendar } from "react-icons/ai";
import { GiExitDoor } from "react-icons/gi";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";

const Dashboard = () => {
  
  const navigate = useNavigate();
  const token= localStorage.getItem("token");
  const userString=localStorage.getItem("user");
  const user= JSON.parse(userString);

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/login'); 
  };

useEffect(()=>{
  console.log(user);
  console.log(token);
  if(token && user.role =="user"){
  navigate("/");
  }else if(!token){
  navigate("/login");
  }
})
  return (
    <div className="px-1 flex flex-col md:flex-row justify-between">
      <div className="w-full md:w-1/6 flex-col px-1 shadow-xl rounded-xl items-center">
        <div className="py-10 flex space-x-6 items-center ml-11 justify-evenly">
          <div></div>
          <div>
            <img src={logo1} alt="" className="w-64 md:w-80 lg:w-96" />
          </div>
        </div>
        <div className="space-y-2 px-2 py-3">
          <div className="flex flex-col items-start text-2xl">
            <Link to="">
              <button className="font-semi hover:bg-slate-200 px-4 py-4 rounded-xl flex items-center space-x-2 flex-row">
                <span>
                  <RxDashboard />
                </span>
                <p>Dashboards</p>
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-start text-2xl">
            <Link to="tourDash">
              <button className="font-semi flex items-center px-8 hover:bg-slate-200 py-4 rounded-xl space-x-2 flex-row">
                <span>
                  <BsFillAirplaneFill />
                </span>
                <p>Tour</p>
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-start text-2xl">
            <Link to="contactDash">
              <button className="font-semi flex items-center hover:bg-slate-200 px-4 py-4 rounded-xl space-x-2 flex-row">
                <span>
                  <RiContactsBook2Line />
                </span>
                <p>Contacts</p>
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-start text-2xl">
            <Link to="bookingsDash">
              <button className="font-semi flex items-center hover-bg-slate-200 px-4 py-4 rounded-xl space-x-2 flex-row">
                <span>
                  <AiOutlineCalendar />
                </span>
                <p>Bookings</p>
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-start text-2xl">
            <Link to="UserDash">
              <button className="font-semi flex items-center hover:bg-slate-200 px-4 py-4 rounded-xl space-x-2 flex-row mb-10">
                <span>
                  <FaUserAlt />
                </span>
                <p>User</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full md:w-5/6 mt-4 md:mt-0">
        {/* header */}
        <div className="p-10 flex justify-between items-center">
          <h2 className="text-3xl ">Dashboard</h2>
          <div>
            <button onClick={handleLogout}>
              <GiExitDoor className="text-5xl" />
            </button>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
