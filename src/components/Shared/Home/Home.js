import React from 'react';
import Banner from './Banner';
import Choose from './Choose';
import GetReady from './GetReady';

const Home = () => {
    return (
        <div className='lg:mr-20'>
            <Banner></Banner>
            <Choose></Choose>
            <GetReady></GetReady>
        </div>
    );
};

export default Home;