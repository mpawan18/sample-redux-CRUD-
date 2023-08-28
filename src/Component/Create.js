import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailsSlice';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const[users , setUsers ] = useState({});
    const navigate = useNavigate();
     const dispatch =useDispatch();

   const getUserData =(e)=>{
    setUsers({ ...users ,[e.target.name] : e.target.value })
    //console.log(users)
   }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('users...', users);
        dispatch(createUser(users));
        navigate('/read')
        
        
    }


  return (
   <>

    <h2 className="my-2">Fill the data</h2>
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input
            type="text"
            name="name"
            class="form-control"
            onChange={getUserData}
            required
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            type="email"
            name="email"
            class="form-control"
            onChange={getUserData}
            required
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Age</label>
          <input
            type="text"
            name="age"
            class="form-control"
            onChange={getUserData}
            required
          />
        </div>
        <div class="mb-3">
          <input
            class="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            onChange={getUserData}
            
          />
          <label class="form-check-label">Male</label>
        </div>
        <div class="mb-3">
          <input
            class="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            onChange={getUserData}
          
          />
          <label class="form-check-label">Female</label>
        </div>

        <button type="submit" class="btn btn-danger">
          Submit
        </button>
      </form>
    
   
   
   
   </>
  )
}

export default Create