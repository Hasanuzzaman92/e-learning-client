import React from "react";
import { FaStar } from "react-icons/fa";

const Course = ({ course }) => {
  const { name, price, img, rating } = course;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="bg-rose-100">
        <img className="w-full h-52" src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="flex">
            <p> Price : ${price}</p>
            <p className="flex items-center justify-end"><FaStar></FaStar> <span className="ml-2">{rating}</span></p>

        </div>
        <div className="card-actions justify-between mt-4">
          <button className="btn btn-outline btn-error">Buy Now</button>
          <button className="btn btn-outline btn-success">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Course;
