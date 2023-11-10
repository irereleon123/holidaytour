import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Audio } from "react-loader-spinner";
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import axios from "axios";
import Statscard from "./Statscard";
import Tour from "./TourDash";
import Bookings from "./BookingsDash";
import UserDash from "./UserDash";
ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dash = () => {
  let token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(false);
 
  // users

  const [userdash, setUserdash] = useState([]);

  const fetchUserDash = () => {
    setIsLoading(true);
    console.log(token);
    axios({
      method: "GET",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/users",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setIsLoading(false);
        setUserdash(response.data);
        console.log(response);
      });
  };

  useEffect(() => {
    fetchUserDash();
  }, []);

  // booking

  const [bookings, setBookings] = useState([]);

  const fetchBookings = () => {
    axios({
      method: "GET",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/booking/view",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setIsLoading(false);
        setBookings(response.data);
        console.log(response);
      });
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // tour lists
  const [tour, setTour] = useState([]);

  const fetchTour = () => {
    console.log(token);

    axios({
      method: "GET",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setIsLoading(false);
        setTour(response.data);
        console.log(response);
      });
  };

  useEffect(() => {
    fetchTour();
  }, []);


  const [chart, setChart] = useState([]);
  const fetchChart = () => {
    axios({
      method: "GET",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/count?year=2023",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((Response) => {
        setChart(Response.data);
        console.log(Response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchChart();
  }, []);


  const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = chart?.map((cart)=> cart.label);

const data = {
  labels,
  datasets: [
    {
      label: `Number of Booking for ${chart?.length} Months`,
      data: chart?.map((cart)=>cart.count),
      borderColor: '#7B3F00',
      backgroundColor: '#7B3F00',
    },

  ],
};
const piedata = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: '# of Votes',
      data: ['19','70','40','19','56','27','30'],
      backgroundColor: [
        'royalblue',
        'limegreen',
        'tomato',
        'sienna',
        'purple',
        'saddlebrown',
        'gold',
      ],

      borderWidth: 1,
    },
  ],
};


  return (
    <>
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-dark-orange shadow-sm py-4 px-6 flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Hello Dr Lee</h1>
      </header>
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
        <section className="bg-white py-8 px-6 flex flex-wrap justify-around">
          <Statscard title="tour" amount={tour.length} />
          <Statscard title="book" amount={bookings.length} />
          <Statscard title="user" amount={userdash.length} />
        </section>
      
  
      <section className="bg-white py-8 px-6 flex flex-col lg:flex-row justify-center">
        <div className="w-full lg:w-1/2">
          <Line options={options} data={data} />
        </div>
        <div className="w-full lg:w-1/5 mt-4 lg:mt-0">
          <Pie data={piedata} />
        </div>
      </section>
      </>
      )}
    </div>
  </>
  
  );
};

export default Dash;
