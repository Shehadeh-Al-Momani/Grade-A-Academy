import React, { useState } from 'react';
import logo from './pics/logo.png';
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { LocalStorage } from './LocalStorage';

const Login = () => {
    const history = useHistory();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [logErr, setlogErr] = useState('');
    const [token, setToken] = LocalStorage('token', '');

    const emailHandler = (e) => {
        setemail(e.target.value);
        setlogErr(false);
    };
    const passHandler = (e) => {
        setpassword(e.target.value);
        setlogErr(false);
    };

    const login = (email, password) => {
        // axios
        //     .post(`/registration/login`, { email, password })
        //     .then((res) => {
        //         if (res.data === 'Invalid Email or password..') {
        //             setlogErr(true);
        //         } else {
        //             setToken(res.data)
        //             const decoded = jwt_decode(res.data);
        //             if (decoded.role_id === 3) {
        //                 history.push('/students');
        //                 window.location.reload();
        //             } else if (decoded.role_id === 2) {
        //                 history.push('/instructors');
        //                 window.location.reload();
        //             } else if (decoded.role_id === 1) {
        //                 history.push('/admin');
        //                 window.location.reload();
        //             }
        //         }
        //     })
        //     .catch((err) => {
        //         throw err;
        //     });
        const decoded = jwt_decode(res.data);
        if (decoded.role_id === 3) {
            history.push('/students');
            window.location.reload();
        } else if (decoded.role_id === 2) {
            history.push('/instructors');
            window.location.reload();
        } else if (decoded.role_id === 1) {
            history.push('/admin');
            window.location.reload();
        }
    };

    return (
        <div className='loginCont'>
            <div className='login'>
                <div className='login-logo'>
                    <img src={logo} alt=''></img>
                    <p>Log In as student or Instructor</p>
                    <div className='l-border'></div>
                </div>
                <div className='inputs'>
                    <input
                        placeholder='Email'
                        name='email'
                        onChange={emailHandler}
                        required
                    />
                    <input
                        placeholder='Password'
                        name='password'
                        type='password'
                        onChange={passHandler}
                        required
                    />
                    <h5>{logErr ? <span>Invalid Email or password..</span> : ''}</h5>
                </div>
                <div className='signup'>
                    <button onClick={() => login(email, password)}>Login</button>
                    <p>Login to enroll in courses and more . </p>
                </div>
            </div>
            <div className='not-sign'>
                <p>Don't have an account?</p>
                <a onClick={() => history.push('/signup')}> Sign up </a>
            </div>
        </div>
    );
};

export default Login
