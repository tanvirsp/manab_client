import React from 'react';
import {FaBars} from "react-icons/fa";
import logo  from '../../../Assets/logo.png';
import './Header.css';

const Header = ({handleMobileMenu}) => {
    return (
        <section className='header-menu'>
             <div className='d-flex justify-content-between align-items-center shadow-sm px-5 py-3 mb-1 bg-body'>
                <div className='humbergar' onClick={handleMobileMenu}><FaBars /></div>
                <div><img className='mobile-logo' src={logo} alt="Logo" /></div>
             </div>
        </section>
    );
};

export default Header;