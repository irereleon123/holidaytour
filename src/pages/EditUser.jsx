import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Navigate,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function EditUser() {
  const [email, setEmail] = useState();
    const [fullName, setFullName] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const params = useParams()
    const tourId = params.id

  


    const fetchUserDash = () => {
      const token = localStorage.getItem('token');
      axios({
        method: "GET",
        url: `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/getOne/?fieldName=_id&value=${tourId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log (response, "response");
        setEmail (response?.data?.email); 
        setFullName(response?.data?.fullName);
        setRole(response?.data?.role)
      })
      .catch((error)=>{
        console.log(error);
      })
    }

    useEffect(() => {
      console.log(role)
      fetchUserDash();
    },[])
  
    const handleSubmit = async (e) => {
      e.preventDefault();
const data={
  "email":email,
  "fullName":fullName,
  "role":role,
}
let token = localStorage.getItem("token");
axios({
  method: "PUT",
  url: `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/update/${tourId}`,
  data: data,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => {
      console.log(response);
      toast.success('user updated successfully');
      setTimeout(() => navigate('/dashboard/EditUser'), 3000);
  })
  .catch((error) => {
    console.log(error);
    toast.error(error.message);
  });
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
          <h2 className="font-bold text-3xl">edit user</h2>

          <div className="flex flex-col space-y-4 justify-center  w-1/2 container ">
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                {/* Enter your First Name */}
              </label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
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
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                type="text"
                id="name1"
                className="border-2 border-black rounded-lg p-4 text-black "
                placeholder="Enter your last name"
              />
            </div>

            
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                {/* Enter your Last Name */}
              </label>
              <input
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
                type="text"
                id="name1"
                className="border-2 border-black rounded-lg p-4 text-black "
                placeholder="Enter your role"
              />
            </div>


            <button
              onClick={(e)=> handleSubmit(e)}
              type="submit"
              className="bg-primary text-white font-bold py-2 px-4 rounded-lg w-full mt-8 hover:bg-secondary transition-all duration-200 ease-in-out"
            >
              {setIsLoading? "edit user in...":"edit"}
            </button>
            <ToastContainer/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;