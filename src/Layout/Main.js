import React from 'react';
import Menu from '../Pages/Shared/Menu/Menu';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import './Main.css';

const Main = () => {
    return (
        <main className='main-container' >
            <div className='off-canvas'>
                <Menu />
                

            </div>
            <div >
                {/* <Header /> */}
                <div className='outlet-section'>
                    <Outlet />
                </div>
            </div>
            
        </main>
    );
};

export default Main;