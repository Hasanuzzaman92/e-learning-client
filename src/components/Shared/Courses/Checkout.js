import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const checkoutItem = useLoaderData();
  const { name, img, rating, price } = checkoutItem;
  return (
    <div className="my-20">
      <h2 className="text-center text-2xl font-semibold text-blue-400 mb-7">
        Your check out success
      </h2>

      <div className="card w-1/4 mx-auto bg-base-100 shadow-xl">
        <figure className="bg-rose-100">
          <img className="w-full" src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="flex">
            <p className="text-rose-500 font-medium"> Price : ${price}</p>
            <p className="flex items-center justify-end">
              <FaStar></FaStar> <span className="ml-2">{rating}</span>
            </p>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Checkout;
