import React, { useState } from 'react';
import Menu from '../Pages/Shared/Menu/Menu';
import { Outlet } from 'react-router-dom';
import './Main.css';

import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const handleMobileMenu =()=>{
        setMobileMenu(!mobileMenu);
        console.log(mobileMenu);
    }


    return (
        <main className='main-container' >
            <div className="off-canvas ">
                <Menu />
            </div>

            {/* Mobile Menu */}
            <div className={mobileMenu ? "mobile-canvas active-mobile-canvas": "mobile-canvas "}>
                <Menu  handleMobileMenu={handleMobileMenu}  />
            </div>
            
            <div className='outlet-container' >
                <Header handleMobileMenu={handleMobileMenu} />
                <div className='outlet-section'>
                   
                    <Outlet />
                </div>
            </div>
            
        </main>
    );
};

export default Main;