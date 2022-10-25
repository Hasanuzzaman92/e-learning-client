import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className=' mt-52 text-center'>
            <h2 className='text-2xl'><span className='text-red-600 font-bold'>404</span> NOT FOUND</h2>
            <p><Link className='block underline ' to='/'>Go to Home</Link></p>
        </div>
    );
};

export default ErrorPage;