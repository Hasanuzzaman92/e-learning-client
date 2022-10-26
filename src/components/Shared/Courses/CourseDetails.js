import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaDownload, FaStar } from "react-icons/fa";

const CourseDetails = () => {
  const courseDetail = useLoaderData();
  const { name, id, price, img, rating, desc } = courseDetail;
  return (
    <div className="w-[80%] mx-auto border-2 p-10 my-20 shadow-xl">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-semibold">
          Course Name: <span className="text-rose-500 italic">{name}</span>{" "}
        </h2>
        <FaDownload className="text-4xl cursor-pointer"></FaDownload>
      </div>
      <figure>
        <img className="w-full" src={img} alt="" />
      </figure>
      <p className="text-justify my-8">{desc}</p>
      <div className="flex justify-between">
        <p className="font-bold text-xl text-rose-500"> Price : ${price}</p>
        <p className="flex items-center justify-end font-semibold">
          <FaStar className="text-rose-500"></FaStar>{" "}
          <span className="ml-2"> {rating}</span>
        </p>
      </div>
      <div className="mt-10 text-center">
        <Link to='/checkout'> <button className="btn btn-outline btn-error">Get Premium Access</button> </Link>
      </div>
    </div>
  );
};

export default CourseDetails;
