import React, { useContext } from 'react';
import { AUTH_CONTEXT } from '../../context/AutoProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AUTH_CONTEXT);
    const location = useLocation();

    if(loading){
        return <div className="spinner-border text-danger position-absolute top-50 start-50" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>   
    }


    if(user){
        return children;
    }
    
    return  <Navigate to="/login" state={{ from: location }} replace />;;
};

export default PrivateRoute;