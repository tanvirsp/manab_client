import React from 'react';
import './FullWidth.css';
import { Outlet } from 'react-router-dom';

const FullWidth = () => {
    return (
        <section className='fullwidth-section'>
            <Outlet />
        </section>
    );
};

export default FullWidth;