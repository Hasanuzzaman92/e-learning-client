import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/e-Learning.webp'

const Banner = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Bright Your Future
                <br className="hidden md:block" />
                With{' '}
                <span className="inline-block text-rose-400">
                 e-learning
                </span>
              </h2>
              <p className="text-base text-gray-700 text-justify md:text-lg">
                In the era, It is the most popular online learning platfor in the world. we provide most valuable content for you. Our specilities are more effective from others
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
                <Link className='bg-rose-400 px-4 py-2 rounded text-white font-semibold' to='/courses'>Our Courses</Link>
            </div>
          </div>
          <div className="relative lg:w-1/2">
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={bannerImg}
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default Banner;