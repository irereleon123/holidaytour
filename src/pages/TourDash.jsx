import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

const Tour = () => {
  const [tour, setTour] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchTour = () => {
    setIsLoading(true);
    let token = localStorage.getItem("token");
    console.log(token);
    
    axios({
      method: "GET",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setTour(response.data);
        console.log(response);
      });
  };

  useEffect(() => {
    fetchTour();
  }, []);

  // delete
  const handleDelete = async (id) => {
    console.log(id, "");
    
    if (window.confirm("Are you sure you want to delete?")) {
      let token = localStorage.getItem("token");
      
      axios({
        url: `https://holiday-planner-4lnj.onrender.com/api/v1/tour/deleteAll?fieldName=_id&value=${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        toast.success("Item deleted successfully");
        console.log(response, "response");
      }).catch((error) => {
        toast.error(error.response.data.message);
        console.log(error, "error");
      });
    }
  }

  // update
  const navigate = useNavigate();

  const handleUpdateTour = (id) => {
    navigate(`/Dashboard/EditTour/${id}`);
  }

  const [openModal, setOpen] = useState(false);

  const open = () => {
    setOpen(true);
  };

  const handleUpdate = (index) => {
    console.log("Update tour at index:", index);
  };

  return (
    <div className="container mx-auto">
      <Link to="/Dashboard/Addtour">
        <button
          className="mr-4 px-2 bg-secondary text-white py-1 px-1 rounded-lg text-xl hover:bg-white-400 text-black font-bold py-1 px-1 rounded md:px-4 md:py-2"
          onClick={open}
        >
          <IoMdAdd /> Add TOUR
        </button>
      </Link>
      <br /><br />
      <div className="overflow-x-auto">
        <table className="min-w-5 divide-y shadow-lg border-collapse border border-yellow-800 max-h-96">
          <thead>
            <tr className="bg-white-900">
              <th className="border border-green-600 px-0 py-1">Destination_Image</th>
              <th className="border border-green-600 px-1 py-2">Destination</th>
              <th className="border border-green-600 px-1 py-2">Duration</th>
              <th className="border border-green-600 px-1 py-2">Group_size</th>
              <th className="border border-green-600 px-1 py-2">price</th>
              <th className="border border-green-600 px-1 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tour.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="border border-green-600 px-20 py-1 md:px-4 md:py-2">
                    <img src={item.backdropImage} height={"1%"} width={"20%"} alt={item.destination} />
                  </td>
                  <td className="border border-green-600 px-4 py-2">{item.destination}</td>
                  <td className="border border-green-600 px-4 py-2">{item.duration}</td>
                  <td className="border border-green-600 px-4 py-2">{item.groupSize}</td>
                  <td className="border border-green-600 px-4 py-2">{item.price}</td>
                  <td className="border border-green-600 px-4 py-2">{item.action}
                    <button onClick={() => handleUpdateTour(item._id)}><AiFillEdit /></button>
                    <button onClick={() => handleDelete(item._id)}><AiFillDelete /></button>
                    <ToastContainer />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tour;
