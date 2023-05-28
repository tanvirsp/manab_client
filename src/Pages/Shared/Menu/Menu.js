import React, { useContext } from 'react';
import './Menu.css';
import logo from '../../../Assets/logo.png';
import { AiOutlineUser } from 'react-icons/ai';
import { RiDashboardLine } from 'react-icons/ri';
import { BiUserPlus, BiUserCircle } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import pic from '../../../Assets/006.jpg';

import { NavLink } from 'react-router-dom';
import { AUTH_CONTEXT } from '../../../context/AutoProvider';
import { toast } from 'react-hot-toast';
import { Spinner } from 'react-bootstrap';


const Menu = () => {
    const {logOut, user, loading} = useContext(AUTH_CONTEXT);

    const handleLogOut = ()=>{
        logOut();
        toast.success("Successfully Logout");
    }

    if(loading){
        return <div className="spinner-border text-danger position-absolute top-50 start-50" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>   
    }

    return (
        <div className='left-bar'>
            <nav>
                <div><img className='logo' src={logo} alt="logo" /></div>
                <ul className='nav-bar'>
                    <li><NavLink to="/"> <RiDashboardLine />  Dashboard</NavLink></li>
                    <li><NavLink to="/manageEmployee">  <AiOutlineUser />Manage Employee</NavLink></li>
                    <li><NavLink to="/addEmployee">  <BiUserPlus /> Add Employee</NavLink></li>
                    <li><NavLink to="/signUp">  <BiUserCircle/> Create New User</NavLink></li>

                </ul>
            </nav>
            <div className='author-info'>
                <img src={pic} alt="" />
                <h5>{user?.displayName}</h5>
                <button onClick={handleLogOut} className='btn btn-light px-4'><FiLogOut /> Logout</button>

            </div>



        </div>
    );
};

export default Menu;