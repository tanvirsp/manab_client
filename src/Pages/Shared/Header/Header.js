import React from 'react';
import img from '../../../Assets/006.jpg'

const Header = () => {
    return (
        <section className=' header-section shadow-sm p-3 mb-1 bg-body '>
            <img className='avatar' src={img } alt="" />
            <span className='text-primary ms-2'>Mir Raisul Tanvir</span>
        </section>
    );
};

export default Header;