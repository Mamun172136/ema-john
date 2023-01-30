import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import './Login.css';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className='form-container'>
            <h2 className='form-title' > This is Login</h2>
            <form onSubmit={handleSubmit} >
                <div className='form-control' >
                    <label htmlFor='email' >Email</label>
                    <input type="email" name="email" id="" required placeholder='Your Email'></input>
                </div>
                <div className='form-control' >
                    <label htmlFor='password' >password</label>
                    <input type="password" name="password" id="" required placeholder='Your password'></input>
                </div>
                <input className='btn-submit' type='submit' value='Login' ></input>
            </form>
            <p>New to Ema John <Link to='/signup' > Create a new Account</Link> </p>
        </div>
    );
};

export default Login;