import React, { useContext} from 'react';
import { Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { toast } from 'react-hot-toast';


const AllUsers = () => {
    
 
        
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/users`, {
                headers: {
                    authorization: `barear ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data
        }
        
    });


    const handleDeleteUser =(deleteUser)=>{
        fetch(`http://localhost:5000/users?email=${deleteUser.email}`, {
            method: 'DELETE',
            headers: {
                  authorization: `barear ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res =>res.json())
        .then(data => {
            if(data.acknowledged){
              toast.success("User Deleted From Database");
              refetch()
            }
        })

       
    }
 
     


    return (
        <section className='bg-light p-4 rounded'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, index) =>(
                            <tr key={user._id}>
                                <td>{index+1}</td>
                                <td>{user.name}</td>
                                <td> {user.email}</td>
                                <td>{user.role}</td>
                                <td> <button onClick={() => handleDeleteUser(user)} className='btn btn-danger'>Delete</button></td>
                            </tr>
                        ) )
                    }
                    
                    
                </tbody>
            </Table>
        </section>
    );
};

export default AllUsers;