import React from 'react';
import styled from 'styled-components';
import UseLoginForm from '../UseLoginForm';

const LoginForm = (props) => {
    const { values, handleChange, handleSubmit } = UseLoginForm(login);
    function login() {
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input type='email' name='email' onChange={handleChange} value={values.email}></input>
            </div>
            <div>
                <label>Password</label>
                <input type='password' name='password' onChange={handleChange} value={values.password}></input>
            </div>
            <button type='submit'>Login</button>
        </form>
    )
};
export default LoginForm;



