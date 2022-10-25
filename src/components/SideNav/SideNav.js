import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('https://e-learning-server.vercel.app/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className='p-10'>
            {
                courses.map(course => <p
                    className='px-4 py-2 font-semibold no-underline text-xl border-b-2 border-white text-center'
                    key={course.id}
                >
                    <Link>{course.name}</Link>
                </p>)
            }
        </div>
    );
};

export default SideNav;