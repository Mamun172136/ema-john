import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import './SignUp.css'

const SignUp = () => {
    const [error, setError]= useState(null);
   const{createUser} =useContext(AuthContext)
    const handleSubmit =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if(password != confirm){
            setError("password did not match");
            return
        }
        console.log(email,password,confirm);
        createUser(email, password)
        .then(res =>{
            const user = res.user;
            console.log(user);
            form.reset();

        })
        .catch(error =>{
            console.log(error);
        })
       
    }
    return (
        <div className='form-container'>
        <h2 className='form-title' > This is Signup</h2>
        <form onSubmit={handleSubmit}>
            <div className='form-control' >
                <label htmlFor='email' >Email</label>
                <input type="email" name="email" id="" required placeholder='Your Email'></input>
            </div>

            <div className='form-control' >
                <label htmlFor='password' >password</label>
                <input type="password" name="password" id="" required placeholder='Your password'></input>
            </div>

            <div className='form-control' >
                <label htmlFor='confirm' >confirm password</label>
                <input type="password" name="confirm" id="" required placeholder='Your password'></input>
            </div>
            <input className='btn-submit' type='submit' value='Login' ></input>
        </form>
        <p>Already have an Acount<Link to='/login' >Login</Link> </p>
        <p className='text-error' >{error}</p>
    </div>
    );
};

export default SignUp;