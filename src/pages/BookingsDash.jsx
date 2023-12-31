import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import ReactPaginate from "react-paginate";
import axios from "axios";
import { Audio, Rings } from "react-loader-spinner";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [pageNumber, setPageNumber] = useState(0);
  const bookingsPerPage = 5;
  const pageCount = Math.ceil(bookings.length / bookingsPerPage);
  const pagesVisited = pageNumber * bookingsPerPage;
  const displaybookings = bookings
  .slice(pagesVisited, pagesVisited + bookingsPerPage)
  .map((item, index) => {
    return (
      <tr key={index}>
        <td className="border border-green-600 px-4 py-2">{item.fullname}</td>
        <td className="border border-green-600 px-4 py-2">{item.email}</td>
        <td className="border border-green-600 px-4 py-2">{item.confirmEmail}</td>
        <td className="border border-green-600 px-4 py-2">{item.phone}</td>
        <td className="border border-green-600 px-4 py-2">{item.date}</td>
        <td className="border border-green-600 px-4 py-2">{item.paymentMethod}</td>
        <td className="border border-green-600 px-4 py-2">{item.status}</td>
        <td className="border border-green-600 px-4 py-2">{item.numberOfTickets}</td>
        <td className="border border-green-600 px-1 py-2">
          <button onClick={() => handleUpdate(item._id)}><AiFillEdit /></button>
          <button onClick={() => handleDelete(item._id)}><AiFillDelete /></button>
          </td>
                </tr>
              );
            })
  

const fetchBookings = () => {
    setIsLoading(true);
    let token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/booking/view",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setIsLoading(false)
        setBookings(response.data);
        console.log(response);
      });
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      let token = localStorage.getItem("token");
      axios({
        url: `https://holiday-planner-4lnj.onrender.com/api/v1/booking/delete/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          setIsLoading(true);
          toast.success("Booking deleted successfully");
          console.log(response, "response");
          fetchBookings();
        })
        .catch((error) => {
          toast.error(error.response.data.message);
          console.log(error, "error");
        });
    }
  };

  const navigate = useNavigate();

  const handleUpdate = (id) => {
    navigate(`/Dashboard/EditBooking/${id}`);
  };
  const changePage=({selected})=>{
    setPageNumber(selected);
  }

  return (
    <div className="">
             {isLoading ? (
        <Audio
          height="300"
          width="1000"
          radius="9"
          margin-left="500"
          color="#7B3F00"
          ariaLabel="loading"
          className="mx-auto"
        />
      ) : ( 
        <>
      <div className="overflow-x-auto">
        <table className="table min-w-30% divide-y shadow-lg border-collapse border border-yellow-800">
          <thead>
            <tr className="bg-white-200">
              <th className="border border-green-600 px-4 py-2">fullname</th>
              <th className="border border-green-600 px-4 py-2">email</th>
              <th className="border border-green-600 px-4 py-2">confirmEmail</th>
              <th className="border border-green-600 px-4 py-2">phone</th>
              <th className="border border-green-600 px-4 py-2">Date</th>
              <th className="border border-green-600 px-4 py-2">PaymentMethod</th>
              <th className="border border-green-600 px-4 py-2">status</th>
              <th className="border border-green-600 px-4 py-2">Number of Tickets</th>
              <th className="border border-green-600 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
        {displaybookings}
          </tbody>
          </table>
          <ReactPaginate
  previousLabel={"Previous"}
  nextLabel={"Next"}
  pageCount={pageCount}
  onPageChange={changePage}
  containerClassName={"flex justify-center mt-4"}
  previousLinkClassName={" bg-orange-400 p-2 border rounded-md border-gray-400 mr-2 hover:bg-gray-200 cursor-pointer"}
  nextLinkClassName={"bg-orange-400 p-2 border rounded-md border-gray-400 ml-2 hover:bg-gray-200 cursor-pointer"}
  disabledClassName={"text-gray-400 cursor-not-allowed"}
  activeClassName={"bg-orange-800 text-white rounded-md p-2 cursor-pointer"}
/>
<br />
      </div>
      </>
      )}
    </div>
  );
};

export default Bookings;
