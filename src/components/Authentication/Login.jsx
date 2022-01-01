import styles from './Authentication.module.css'
import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useStore, actions } from '../../store';
import * as constants from '../../const';

import { db } from '../../firebase';
import { } from 'firebase/firestore';

const Login = () => {
    const [state, dispatch] = useStore();
    const [isRememberPassword, setIsRememberPassword] = useState(false);

    useEffect(() => {
        localStorage.setItem(constants.REMEMBER_PASSWORD, isRememberPassword);
    }, [isRememberPassword])

    return (
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
                    dispatch(actions.switchForm(!state.isShowLoginForm))
                }}
            >
                Register
            </button>
        </form >
    )
}

export default Login
