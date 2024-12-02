import React, { useState } from 'react';
import Header from '../Header';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {


    const loadedUsers = useLoaderData()
    console.log(loadedUsers)
  const [users,setUsers] = useState(loadedUsers);


  const handleDelete = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        // delete from the database 
        fetch(`http://localhost:3000/users/${id}`,{
            method:'DELETE',

        })
        .then(res => res.json())
        .then(data => {
            console.log('delete is done',data)
            if(data.deletedCount){
                Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });

                      const remainingUser = users.filter(user => user._id !== id);
                      setUsers(remainingUser)
            }
        })
        }
      });
  }

    return (
        <div>
           
            <h2 className="text-2xl">Users: {users.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
    <tr>
         
        <td>ID</td>
        <td>Name</td>
        <td>Email</td>
        <td>Created At</td>
        <td>Last-SignIN-Time</td>
        <td>Action</td>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map(user => <tr key={user._id}>
            <th>{user._id}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td>{user.lastSignInTime}</td>
            <td>
                <button  className='mr-5 btn'>Edit</button>
                <button onClick={() => handleDelete(user._id)} className='btn' >Delete</button>
            </td>
          </tr>)
      }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;
