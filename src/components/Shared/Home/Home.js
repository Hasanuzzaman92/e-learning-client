import React from 'react';
import Banner from './Banner';
import Choose from './Choose';

const Home = () => {
    return (
        <div className='lg:mr-20'>
            <Banner></Banner>
            <Choose></Choose>
        </div>
    );
};

export default Home;