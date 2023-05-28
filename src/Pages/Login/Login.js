import React, { useContext } from 'react';
import './Login.css';
import logo from '../../Assets/logo_icon.png'
import { useForm } from "react-hook-form";
import { AUTH_CONTEXT } from '../../context/AutoProvider';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const {loginUser, loading, } = useContext(AUTH_CONTEXT);
    const nagivate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    

    const onSubmit = data => {
        loginUser(data.email, data.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            reset();
            toast.success('Successfully Login');
            nagivate('/');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
          });
    };
    
  
    
    return (
        <div className='login-section'>
            <div className='form-head' >
                <img src={logo} alt="Logo" />
                <h2>Login</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
                <label htmlFor="email" className="form-label">Email</label>
                <input  type="email " {...register("email", { required: true })} className='form-control form-control-lg mb-2'/>
                {errors.email && <p className='text-danger'>This field is required</p>}
                
                <label htmlFor="password" className="form-label">Password</label>
                <input  type="password" {...register("password", { required: true })} className='form-control form-control-lg '/>
                {errors.password && <p className='text-danger'>This field is required</p>}
                
                <div className="d-grid mt-4">
                    <input type="submit" value="Login" className='btn btn-danger btn-lg'  />
                </div>
                
            </form>
            
        </div>
    );
};

export default Login;