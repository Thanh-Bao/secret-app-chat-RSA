import styles from './Authentication.module.css'
import React from 'react'

function Register() {
    return (
        <form className={styles.container}>
            <div className={styles.header}>
                Register
            </div>
            <div className={styles.inputForm}>
                <label htmlFor="username-register">Username: </label>
                <input id="username-register" type="text" required autoFocus />
            </div>
            <div className={styles.inputForm}>
                <label htmlFor="password-register">Password: </label>
                <input id="password-register" type="password" required />
            </div>
            <button className={styles.inputForm} id={styles.btnLogin} type='submit'>Login</button>

            <button className={styles.inputForm} id={styles.btnRegister} type='submit'>Register</button>
        </form>
    )
}

export default Register
