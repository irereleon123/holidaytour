import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import ReactPaginate from "react-paginate";
import axios from "axios";

// fetch data

const UserDash = () => {
  const [userdash, setUserdash] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const userdashPerPage = 7;
  const pageCount = Math.ceil(userdash.length / userdashPerPage);
  const pagesVisited = pageNumber * userdashPerPage;
  const displayuserdash = userdash
    .slice(pagesVisited, pagesVisited + userdashPerPage)
    .map((item, index) => {
      return (
        <tr key={index}>
          <td className="border border-green-600 px-1 py-2">{item.email}</td>
          <td className="border border-green-600 px-1 py-2">{item.fullName}</td>
          <td className="border border-green-600 px-1 py-2">{item.role}</td>
          <td className="border border-green-600 px-1 py-2">{item.Action}
            <button onClick={() => handleUpdateUsedash(item._id)}><AiFillEdit /></button>
            <button onClick={() => handleDelete(item._id)}><AiFillDelete /></button>
            <ToastContainer />
          </td>
        </tr>
      );
    });

  const fetchUserDash = () => {
    setIsLoading(true);
    let token = localStorage.getItem("token");
    console.log(token);
    axios({
      method: "GET",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/users",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setUserdash(response.data);
        console.log(response);
      });
  };

  useEffect(() => {
    fetchUserDash();
  }, []);

  // delete user
  const handleDelete = async (id) => {
    console.log(id, "")
    if (window.confirm("Are you sure you want to delete?")) {
      let token = localStorage.getItem("token");
      axios({
        url: `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/delete/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }).then((response) => {
        toast.success("user deleted successfully");
        console.log(response, "response");
      }).catch((error) => {
        toast.error(error.response.data.message);
        console.log(error, "error");
      })
    }
  }

  //   update user

  const navigate = useNavigate();

  const handleUpdateUsedash = (id) => {
    navigate(`/Dashboard/EditUser/${id}`);
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
    <div className="px-1 flex flex-col md:flex-row justify-between">
      <div className="table-container overflow-x-auto">
        <table className="table min-w-full divide-y shadow-lg border-collapse border border-yellow-800">
          <thead>
            <tr>
              <th className="border border-green-600 px-1 py-1 break-words w-1/4 text-lg font-bold bg-white-100">Email</th>
              <th className="border border-green-600 px-1 py-1 break-words w-1/4 text-lg font-bold bg-white-100">fullName</th>
              <th className="border border-green-600 px-1 py-1 break-words w-1/4 text-lg font-bold bg-white-100">role</th>
              <th className="border border-green-600 px-1 py-1 break-words w-1/4 text-lg font-bold bg-white-100">Actions</th>
            </tr>
          </thead>
          <tbody>
        {displayuserdash}
          </tbody>
        </table>
        <ReactPaginate
  previousLabel={"Previous"}
  nextLabel={"Next"}
  pageCount={pageCount}
  onPageChange={changePage}
  containerClassName={"flex justify-center mt-4"}
  previousLinkClassName={"bg-orange-400 p-2 border rounded-md border-orange-400 mr-2 hover:bg-gray-200 cursor-pointer"}
  nextLinkClassName={" bg-orange-400 p-2 border rounded-md border-orange-400 ml-2 hover:bg-gray-200 cursor-pointer"}
  disabledClassName={"text-white-400 cursor-not-allowed"}
  activeClassName={"bg-orange-800 text-white rounded-md p-2 cursor-pointer"}
/>
<br />
      </div>
    </div>
  )
}

export default UserDash;
