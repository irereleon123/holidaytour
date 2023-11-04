import React from "react";
import pic from "../assets/10002.jpg";
import picc from "../assets/10003.jpg";
import piccc from "../assets/10004.jpg";
import { Link } from "react-router-dom";

const Tour = () => {
  const TourCard = ({ tour }) => {
    const { title, description, price, image } = tour;

    return (
      <div className="tour-card flex flex-col items-center py-8  ">
        <img
          className="bg-cover  w-[44rem] h-[20rem]  "
          src={image}
          alt={title}
        />
        <div className="tour-info flex flex-col text-left  items-start  space-x-4 border-l-secondary border-l-4">
          <h2 className="font-semibold text-left text-2x2  bg-secondary transform translate-x-2 p-2 translate-y-[-1rem]   text-white">
            {title}
          </h2>
          <p className="tour-description max-w-2x1  font-semibold  text-left">
            {description}
          </p>
          <p className="tour-description max-w-2xl    font-light  text-left">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove.
          </p>
          <div className="flex space-x-12">
            <p className="tour-price text-3xl font-bold">{price}</p>
            <Link to={"/tourDetails"}>
              <button className="px-4 py-2 bg-secondary text-white rounded-lg">
                Book now{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const TourList = (tours) => {
    tours = [
      {
        id: 1,
        title: "Greece",
        description:
          "Holiday Planners is a World Leading Online Tour Booking Platform.",
        price: "$100",
        image: pic,
      },
      {
        id: 2,
        title: "Jerusalem",
        description:
          "Holiday Planners is a World Leading Online Tour Booking Platform.",
        price: "$120",
        image: picc,
      },
      {
        id: 3,
        title: "Italy",
        description:
          "Holiday Planners is a World Leading Online Tour Booking Platform.",
        price: "$90",
        image: piccc,
      },
    ];
    return (
      <>
        <div className="container mx-auto px-8 ">
          <h1 className="text-secondary text-6xl font-body px-20  font-bold container mx-auto mb-14">
            Trending tours
          </h1>
          <div className="tour-list md:flex-row flex flex-col   space-x-10 justify-between p-12 ">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <TourList />
    </div>
  );
};

export default Tour;
