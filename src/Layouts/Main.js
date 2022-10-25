import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import SideNav from '../components/SideNav/SideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div class=" w-full lg:ml-10 flex flex-col md:flex-row">
                <div class="flex-none bg-rose-300">
                   <SideNav></SideNav>
                </div>
                <div class="grow">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;