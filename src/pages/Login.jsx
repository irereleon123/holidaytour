import React from "react";
import { Audio } from 'react-loader-spinner';
import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate,Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
  const [passWord, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    axios({
      method: "POST",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/login",
      data: {
        email: email,
        password: passWord,
      },
    })
    .then((response) => {
      setIsLoading(false)
      localStorage.setItem("user", JSON.stringify(response.data.user));
      const user = JSON.parse(localStorage.getItem("user")); 
      console.log(user);
    
      console.log(response, "response");
      localStorage.setItem("token", response.data.access_token);
      const token = localStorage.getItem("token");
      toast.success('login successfully');
      setTimeout(() => {
        if (user.role === "admin") {
          navigate("../dashboard");
        } else {
          navigate("/");
        }
      }, 5000);
    })
    
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });

    setEmail("");

    setPassword("");
  };
  return (
    <div className="container mx-auto">
      <div className="">
        <form
          action="/"
          method="get"
          id="form"
          className="flex flex-col space-y-4 p-8 "
        >
          <h2 className="font-bold text-3xl">Login</h2>

          <div className="flex flex-col space-y-8 justify-center  w-1/2 container ">
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
                placeholder="Enter your name"
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
              onClick={(e) => handleLogin(e)}
              type="submit"
              className="bg-primary text-white font-bold py-2 px-4 rounded-lg w-full mt-8 hover:bg-secondary transition-all duration-200 ease-in-out"
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
 :"login"}
            </button>
          </div>
        </form>
        <p>
            Dont have an account yet{" "}
            <Link to={"/Sign_up"}><span className="text-secondary">Sign up</span></Link>
          </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;