import React from 'react';
 
import styles from './styles.css';

const Login = () => (
    <div className="login">
        <div className="login__modal">
            <div className="modal">
                <header className="modal__header">Welcome back.</header>
                <div className="modal__form">
                    <form>
                        <p className="modal__label">Email</p>
                        <input className="modal__input" />
                        <p className="modal__label">Password</p>
                        <input className="modal__input" type="password" />
                        <button type="button" className="modal__submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
)

export default Login;
