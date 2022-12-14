import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { id, name, price, img, rating } = course;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="bg-rose-100">
        <img className="w-full h-52" src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="flex">
            <p className="text-rose-500 font-medium"> Price : ${price}</p>
            <p className="flex items-center justify-end"><FaStar></FaStar> <span className="ml-2">{rating}</span></p>

        </div>
        <div className="card-actions justify-between mt-4">
          <Link to={`/checkout/${id}`}> <button className="btn btn-outline btn-error">Buy Now</button></Link>
          <Link to={`/course/${id}`}><button className="btn btn-outline btn-success">Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
