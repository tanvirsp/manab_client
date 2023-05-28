import React from "react";
import { useForm } from "react-hook-form";
import './AddEmployee.css';
import { toast } from "react-hot-toast";

const AddEmployee = () => {
  
  const {  register,  handleSubmit,  formState: { errors }, reset  } = useForm();



  const handleAddDoctor = (data) =>{
       

    const formData = new FormData();
    formData.append('employPic', data.employPic[0]);
    formData.append('employNid', data.employNid[0]);
    formData.append('name', data.name );
    formData.append('designation', data.designation );
  

  

    fetch('http://localhost:5000/addImg', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.acknowledged){
        toast.success("Employee Added");
        reset();
      }
    })

  };


  return (
    <section className="emp-section">
      <h1>Add Employee</h1>
      <div className="form-section">
        <form onSubmit={handleSubmit(handleAddDoctor)}>
           
        <div>
            <label htmlFor="name" className="form-label mb-0"> Employee Name </label>
            <input type="text" {...register("name", { required: true })} className="form-control" id="name" />
            {errors.name && <p className="text-danger">This field is required</p>}

            <label htmlFor="designation" className="form-label mt-2 mb-0"> Position </label>
            <input type="text" {...register("designation", { required: true })} className="form-control" id="designation" />
            {errors.designation && <p className="text-danger">This field is required</p>}

            <label htmlFor="id" className="form-label mt-2 mb-0"> Exployment ID </label>
            <input type="number" {...register("id", { required: true })} className="form-control mb-4" id="id" />
            {errors.id && <p className="text-danger">This field is required</p>}

            <input type="file"  {...register("employPic", { required: true })} className="form-control" id="employPic" />
            <br />
            <input type="file"  {...register("employNid", { required: true })} className="form-control" id="employNid" />

            
        </div>
      
          <input className="btn btn-danger mt-5 btn-lg" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default AddEmployee;
