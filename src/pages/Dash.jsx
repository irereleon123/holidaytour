import React from "react";
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

import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: ['19','70','40','19','56','27','30'],
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

        <section className="bg-white py-8 px-6 flex flex-wrap justify-around">
          <div className="w-full md:w-1/3 lg:w-1/4 p-8 rounded-lg border border-black border-solid md:flex items-center">
            <img
              src="https://th.bing.com/th/id/OIP.ZpwmxdxIuENh8NWlQY68jwHaF7?w=190&h=180&c=7&r=0&o=5&pid=1.7"
              alt="Tours"
              width={40}
            />
            <p className="text-black text-xl font-bold">38 Tours</p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 p-8 rounded-lg border border-black border-solid md:flex items-center">
            <img
              src="https://th.bing.com/th/id/OIP.ZpwmxdxIuENh8NWlQY68jwHaF7?w=190&h=180&c=7&r=0&o=5&pid=1.7"
              alt="Users"
              width={40}
            />
            <p className="text-black text-xl font-bold">500 Users</p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 p-8 rounded-lg border border-black border-solid md:flex items-center">
            <img
              src="https://th.bing.com/th/id/OIP.ZpwmxdxIuENh8NWlQY68jwHaF7?w=190&h=180&c=7&r=0&o=5&pid=1.7"
              alt="Bookings"
              width={40}
            />
            <p className="text-black text-xl font-bold">50 Bookings</p>
          </div>
        </section>

        <section className="bg-white py-8 px-6 flex flex-col lg:flex-row justify-center">
          <div className="w-full lg:w-1/4">
            <Line options={options} data={data} />
          </div>
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
            <Pie data={piedata} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Dash;
