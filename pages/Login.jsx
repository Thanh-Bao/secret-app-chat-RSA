import styles from '../styles/Authentication.module.css'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import * as constants from './const';

import { } from 'firebase/firestore';

const Login = () => {
    const [isRememberPassword, setIsRememberPassword] = useState(false);
    const router = useRouter();

    useEffect(() => {
        localStorage.setItem(constants.REMEMBER_PASSWORD, isRememberPassword);
    }, [isRememberPassword])


    return (
        <div className={styles.wrapper}>
            <form className={styles.container}>
                <div className={styles.header}>
                    Login
                </div>
                <div className={styles.inputForm}>
                    <label htmlFor="username-login">Username: </label>
                    <input id="username-login" type="text" required autoFocus maxLength="100" />
                </div>
                <div className={styles.inputForm}>
                    <label htmlFor="password-login">Password: </label>
                    <input id="password-login" type="password" required autoComplete='off' maxLength="100" />
                </div>
                <div id={styles.rememberPassword}>
                    <input
                        type="checkbox"
                        onChange={() => setIsRememberPassword(!isRememberPassword)}
                    />
                    <label >Remember password</label>
                </div>
                <button
                    className={clsx(styles.inputForm, styles.btnPrimary)}
                    type='submit'
                >
                    Login
                </button>

                <button
                    className={clsx(styles.inputForm, styles.btnSecondary)}
                    onClick={event => {
                        event.preventDefault();
                        router.push("Register")
                    }}
                >
                    Register
                </button>
            </form >
        </div>
    )
}

export default Login
