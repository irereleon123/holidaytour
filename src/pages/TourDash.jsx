import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import ReactPaginate from "react-paginate";
import axios from "axios";
import { Audio } from "react-loader-spinner";

const Tour = () => {
  const [tour, setTour] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const tourPerPage = 3;
  const pageCount = Math.ceil(tour.length / tourPerPage);
  const pagesVisited = pageNumber * tourPerPage;
  const displayTour = tour
    .slice(pagesVisited, pagesVisited + tourPerPage)

            .map((item, index) => {
              return (
                <tr key={index}>
                  <td className="border border-green-600 px-4 py-2">
                    <img src={item.backdropImage} height={"100px"} width={"200px"} alt={item.destination} />
                  </td>
                  <td className="border border-green-600 px-4 py-2">{item.destination}</td>
                  {/* <td className="border border-green-600 px-4 py-2">{item.Description}</td> */}
                  <td className="border border-green-600 px-4 py-2">{item.Duration}</td>
                  <td className="border border-green-600 px-4 py-2">{item.GroupSize}</td>
                  {/* <td className="border border-green-600 px-4 py-2">{item.Discount}</td> */}
                  <td className="border border-green-600 px-4 py-2">{item.Price}</td>
                  {/* <td className="border border-green-600 px-4 py-2">{item.TourType}</td> */}
                  {/* <td className="border border-green-600 px-4 py-2">{item.Departure}</td> */}
                  {/* <td className="border border-green-600 px-4 py-2">{item.Seats}</td> */}
                  {/* <td className="border border-green-600 px-4 py-2">{item.fromMonth}</td> */}
                  {/* <td className="border border-green-600 px-4 py-2">{item.toMonth}</td> */}
                  {/* <td className="border border-green-600 px-4 py-2">{item.departureTime}</td> */}
                  {/* <td className="border border-green-600 px-4 py-2">{item.returnTime}</td> */}
                  <td className="border border-green-600 px-4 py-2">
                    <button onClick={() => handleUpdateTour(item._id)}><AiFillEdit /></button>
                    <button onClick={() => handleDelete(item._id)}><AiFillDelete /></button>
                    <ToastContainer />
                  </td>
                </tr>
              );
            })

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
        setIsLoading(false)
        setTour(response.data);
        console.log(response);
      });
  };

  useEffect(() => {
    fetchTour();
  }, []);

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

  const changePage=({ selected })=>{
    setPageNumber(selected)
  };
  return (
    <div className="container mx-auto">
      {isLoading ? (
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
              {/* <th className="border border-green-600 px-1 py-2">Description</th> */}
              <th className="border border-green-600 px-1 py-2">Duration</th>
              <th className="border border-green-600 px-1 py-2">Group_size</th>
              {/* <th className="border border-green-600 px-1 py-2">Discount</th> */}
              <th className="border border-green-600 px-1 py-2">Price</th>
              {/* <th className="border border-green-600 px-1 py-2">Tourtype</th> */}
              {/* <th className="border border-green-600 px-1 py-2">Departure</th> */}
              {/* <th className="border border-green-600 px-1 py-2">Seats</th> */}
              {/* <th className="border border-green-600 px-1 py-2">From Month</th> */}
              {/* <th className="border border-green-600 px-1 py-2">To Month</th> */}
              {/* <th className="border border-green-600 px-1 py-2">Departure Time</th> */}
              {/* <th className="border border-green-600 px-1 py-2">Return Time</th> */}
              <th className="border border-green-600 px-1 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
        {displayTour}
          </tbody>
        </table>
<ReactPaginate
  previousLabel={"Previous"}
  nextLabel={"Next"}
  pageCount={pageCount}
  onPageChange={changePage}
  containerClassName={"flex justify-center mt-4"}
  previousLinkClassName={"bg-orange-400  p-2 border rounded-md border-gray-400 mr-2 hover:bg-gray-200 cursor-pointer"}
  nextLinkClassName={"bg-orange-400  p-2 border rounded-md border-gray-400 ml-2 hover:bg-gray-200 cursor-pointer"}
  disabledClassName={"text-gray-400 cursor-not-allowed"}
  activeClassName={"bg-orange-400 text-white rounded-md p-2 cursor-pointer"}
/>
<br />
      </div>
      </>
      )}
    </div>
  );
};

export default Tour;
