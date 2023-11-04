import React, { useState } from "react";
import { Navigate,useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

const Sign_up = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passWord, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    axios({
      method: "POST",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/signup",
      data: {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: passWord,
      },
      headers:{
        "Content-Type":"application/json",
      }
    })
      .then((response) => {
        console.log(response,"response");
        localStorage.setItem("token",response.data.acces_token);
        localStorage.setItem("user",JSON.stringify(response.data.user));
        navigate("/");
        alert("Sign up successful");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
  };
  return (
    <div className="container mx-auto">
      <div className="">
        <form
          action="/"
          method="POST"
          id="form"
          className="flex flex-col space-y-4 p-8 "
        >
          <h2 className="font-bold text-3xl">Sign Up</h2>

          <div className="flex flex-col space-y-4 justify-center  w-1/2 container ">
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                {/* Enter your email */}
              </label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                id="name1"
                className="border-2 border-black rounded-lg p-4 text-black "
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                {/* Enter your First Name */}
              </label>
              <input
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                id="name1"
                className="border-2 border-black rounded-lg p-4 text-black "
                placeholder="Enter your first name"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                {/* Enter your Last Name */}
              </label>
              <input
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
                id="name1"
                className="border-2 border-black rounded-lg p-4 text-black "
                placeholder="Enter your last name"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                {/* Enter your Password */}
              </label>
              <input
                value={passWord}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                id="password"
                className="border-2 border-black rounded-lg p-4 text-black "
                placeholder="Enter your password"
              />
            </div>

            <button
              onClick={(e)=> handleSubmit(e)}
              type="submit"
              className="bg-primary text-white font-bold py-2 px-4 rounded-lg w-full mt-8 hover:bg-secondary transition-all duration-200 ease-in-out"
            >
              {setIsLoading? "logging in...":"login"}
            </button>
            <ToastContainer/>
          </div>
          <p>
            Already have an account yet{" "}
            <Link to={"/Login"}><span className="text-secondary">Login</span></Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Sign_up;