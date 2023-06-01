import React, { useContext, useState } from 'react';
import './SignUp.css';
import logo from '../../Assets/logo_icon.png'
import { useForm } from 'react-hook-form';
import { AUTH_CONTEXT } from '../../context/AutoProvider';
import { toast } from 'react-hot-toast';
import useToken from '../../hooks/useToken';



const SignUp = () => {
    const {createUser, updateUser, user} = useContext(AUTH_CONTEXT);
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const [useCreatedEmail, setUserCreatedEmail] = useState('')
    
    //custom hook
    const [token] = useToken(useCreatedEmail);


    const onSubmit = data => {
        createUser(data.email, data.password)
        .then((userCredential) => {
            
            //creating user object for update Name
            const userInfo = {
                displayName: data.name
            };
            
            //updating user information
            updateUser(userInfo)
            .then(() => {
                //userCollection
                saveUserToDB(data.name, data.email, data.role );
            })
            .catch((error) => { toast.error(error.message) }); 
          })
          .catch((error) => {
            toast.error(error.message)
          });
    };

    //saving user to database
    const saveUserToDB = (name, email, role) =>{
        const user = {name, email, role};

        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                setUserCreatedEmail(data.email);
                toast.success("User Created Successfully");
            reset();
            };  
        })
    }

    
    return (
        <div className='login-section'>
            <div className='form-head' >
                <img src={logo} alt="Logo" />
                <h2>SignUp</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
                <label htmlFor="name" className="form-label">Full Name</label>
                <input  type="name " {...register("name", { required: true })} className='form-control mb-3'/>
                {errors.name && <p className='text-danger'>Name is required</p>}

                <label htmlFor="email" className="form-label">Email</label>
                <input  type="email " {...register("email", { required: true })} className='form-control  mb-3'/>
                {errors.email && <p className='text-danger'>Email Address is required</p>}
                
                <label htmlFor="password" className="form-label">Password</label>
                <input  type="password" {...register("password", { required: true })} className='form-control '/>
                {errors.password && <p className='text-danger'>Password  is required</p>}

                <label htmlFor="password" className="form-label mt-3">Select User Role</label>
                <select {...register("role", { required:  true})} className="form-select  " >
                    <option value="user">User</option>
                    <option value="assistance">Assistance</option>
                    <option value="co-ordinator">Co-Ordinator</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                    
                </select>
                {errors.role && <p className='text-danger'>User Role is required</p>}
                
                <div className="d-grid mt-4">
                    <input type="submit" value="Create User" className='btn btn-danger btn-lg'  />
                </div>
                
            </form>
            
        </div>
    );
};

export default SignUp;