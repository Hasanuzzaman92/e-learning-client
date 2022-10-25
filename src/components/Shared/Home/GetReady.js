import React from 'react';
import { Link } from 'react-router-dom';

const GetReady = () => {
    return (
        <div className='lg:flex justify-between bg-rose-400 m-10 py-20 px-10 rounded-lg items-center'>
            <h2 className='text-4xl font-semibold'> Are you ready to <br/> start your course</h2>
            <div className='my-10'>
                <Link className='border py-2 px-5 rounded-lg font-semibold hover:bg-rose-700 hover:text-white' to='/courses'> Get Started </Link>
            </div>
            <div className='my-10'>
                <Link className='border py-2 px-5 rounded-lg font-semibold hover:bg-rose-700 hover:text-white' to='/register'> Register </Link>
            </div>
        </div>
    );
};

export default GetReady;