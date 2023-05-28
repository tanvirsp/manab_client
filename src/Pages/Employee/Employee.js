import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { GrView} from 'react-icons/gr';
import { AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai';
import './Employee.css';
import picture from '../../Assets/006.jpg';
import EmployeeDetails from '../EmployeeDetails/EmployeeDetails';

const Employee = () => {
    const navigate = useNavigate()

    const handleNavigate =()=>{
        navigate('/addEmployee')
    }



    const handleDetails =(id)=>{
       
        navigate(`/employeeDetails/${id}`);

    }

    return (
        <section className='bg-light p-4 rounded'>
            <button onClick={handleNavigate} className='btn btn-success mb-4'>Add Employee</button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Employee ID</th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>00512</td>
                        <td><img className='avatar' src={picture} alt="pro" /></td>
                        <td>Mir Raisul Tanvir</td>
                        <td>tanvirgraphic@gmail.com</td>
                        <td>Admin</td>
                        <td>20000</td>
                        <td>  
                            <button type="button"
                                onClick={()=> handleDetails(253)} 
                                className='btn btn-light'
                                title="View Details"
                                >
                                <GrView />
                            </button>
                            <button title="Edit" className='btn btn-success mx-2 '><AiOutlineEdit /></button>
                            <button  title="Delete" className='btn btn-danger'> <AiOutlineDelete /></button>
                            
                        </td>
                    </tr>
                    <tr>
                        <td>01</td>
                        <td>00512</td>
                        <td><img className='avatar' src={picture} alt="pro" /></td>
                        <td>Mir Raisul Tanvir</td>
                        <td>tanvirgraphic@gmail.com</td>
                        <td>Admin</td>
                        <td>20000</td>
                        <td>  
                            <button type="button"
                                onClick={()=> handleDetails(253)} 
                                className='btn btn-light'
                                title="View Details"
                                >
                                <GrView />
                            </button>
                            <button title="Edit" className='btn btn-success mx-2 '><AiOutlineEdit /></button>
                            <button  title="Delete" className='btn btn-danger'> <AiOutlineDelete /></button>
                            
                        </td>
                    </tr>
                    <tr>
                        <td>01</td>
                        <td>00512</td>
                        <td><img className='avatar' src={picture} alt="pro" /></td>
                        <td>Mir Raisul Tanvir</td>
                        <td>tanvirgraphic@gmail.com</td>
                        <td>Admin</td>
                        <td>20000</td>
                        <td>  
                            <button type="button"
                                onClick={()=> handleDetails(253)} 
                                className='btn btn-light'
                                title="View Details"
                                >
                                <GrView />
                            </button>
                            <button title="Edit" className='btn btn-success mx-2 '><AiOutlineEdit /></button>
                            <button  title="Delete" className='btn btn-danger'> <AiOutlineDelete /></button>
                            
                        </td>
                    </tr>

                   

                   
                </tbody>
            </Table>
            
        </section>
    );
};

export default Employee;