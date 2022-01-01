import styles from './Authentication.module.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Login = () => {
    return (
        <form className={styles.container}>
            <div className={styles.header}>
                Login
            </div>
            <div className={styles.inputForm}>
                <label htmlFor="username-login">Username: </label>
                <input id="username-login" type="text" required autoFocus />
            </div>
            <div className={styles.inputForm}>
                <label htmlFor="password-login">Password: </label>
                <input id="password-login" type="password" required autoComplete='off'/>
            </div>
            <button className={styles.inputForm} id={styles.btnLogin} type='submit'>Login</button>

            <button className={styles.inputForm} id={styles.btnRegister} type='submit'>Register</button>
        </form>
    )
}

export default Login
