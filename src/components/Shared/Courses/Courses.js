import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className='m-16'>
            <h2 className='text-4xl font-semibold text-center pb-10'>Our Popular Courses</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                courses.map(course =><Course key={course.id} course={course}></Course>)
            }
            </div>
        </div>
    );
};

export default Courses;