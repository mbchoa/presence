import React from 'react';
 
import styles from './styles.css';

const Login = () => (
    <div className="login">
        <header className="login__header">Welcome back.</header>
        <div className="login__form">
            <form>
                <p>Email</p>
                <input />
                <p>Password</p>
                <input type="password" />
            </form>
        </div>
    </div>
)

export default Login;
