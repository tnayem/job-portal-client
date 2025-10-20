import React from 'react';
import { Outlet } from 'react-router';
import Header from '../pages/Home/Header';
import Footer from '../pages/Home/Footer';

const HomeLayout = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;