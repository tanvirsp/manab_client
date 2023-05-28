import React from 'react';
import './EmployeeDetails.css';
import { useParams } from 'react-router-dom';

const EmployeeDetails = () => {
    const {employeeId} = useParams();
   
    return (
        <div>
           <h2> This is EmployeeDetails Page {employeeId}</h2>
        </div>
    );
};

export default EmployeeDetails;