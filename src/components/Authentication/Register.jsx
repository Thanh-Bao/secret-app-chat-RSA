import styles from './Authentication.module.css'
import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { useStore, actions } from '../../store';
import * as API from '../../API/firestoreAction'

var md5 = require('md5');

const USERNAME_LENGTH = 30;

function Register() {
    const [state, dispatch] = useStore();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameWarning, setUsernameWarning] = useState(null);
    const [passwordWarning, setPasswordWarning] = useState(null);
    const [limitLength, setLimitLength] = useState(0);

    useEffect(() => {
        setLimitLength(username.length);
    }, [username])


    const validateUsername = async event => {
        const name = event.target.value;

        console.log(name)
        if (name === "") {
            setUsername(name);
            setUsernameWarning("Username is required");
            return;
        }
        const isInvalid = /(^$)|(^[a-zA-Z0-9]+$)/.test(name);
        if (name.length > USERNAME_LENGTH) {
            return;
        }
        const isUsernameExists = await API.checkUsernameExists(name);
        if (isUsernameExists) {
            setUsername(name);
            setUsernameWarning("This username has already been taken");
            return;
        }

        if (isInvalid) {
            setUsername(name);
            setUsernameWarning(null);
        } else {
            setUsernameWarning("Username only contain a-z, A-Z and 0-9");
            return;
        }
    };

    const validatePassword = event => {
        const password = event.target.value;
        if (password !== "") {
            setPassword(password);
            setPasswordWarning(null);
        } else {
            setPasswordWarning("Password is required");
        }
    }

    const submit = event => {
        event.preventDefault();
        let checkEmpty = true;
        if (username === "") {
            setUsernameWarning("Username is required")
            checkEmpty = false;
        }
        if (password === "") {
            setPasswordWarning("Password is required")
            checkEmpty = false;
        }
        if (checkEmpty && usernameWarning == null && passwordWarning == null) {
            const salt = username;
            const hash = md5(password + salt);
            console.log({ username, hash })
        }
    }

    return (
        <form className={styles.container}>
            <div className={styles.header}>
                Register
            </div>
            <div className={styles.inputForm}>
                <label htmlFor="username-register">Username (ID): </label>
                <div id={styles.usernameForm}>
                    {limitLength > 0 ?
                        <span
                            style={limitLength === USERNAME_LENGTH ? { color: 'red' } : null} >
                            {limitLength}/{USERNAME_LENGTH}
                        </span> :
                        null}
                    <input
                        id="username-register"
                        type="text"
                        required autoFocus
                        onChange={validateUsername}
                    />
                </div>
                <p className={styles.warningForm}>
                    {usernameWarning}
                </p>
            </div>
            <div className={styles.inputForm}>
                <label htmlFor="password-register">Password: </label>
                <input
                    id="password-register"
                    type="password"
                    required autoComplete="off" maxLength="100"
                    onChange={validatePassword}
                />
                <p className={styles.warningForm}>
                    {passwordWarning}
                </p>
            </div>
            <button
                className={clsx(styles.inputForm, styles.btnPrimary)}
                id={styles.btnLogin}
                onClick={submit}
            >
                Register
            </button>

            <button
                className={clsx(styles.inputForm, styles.btnSecondary)}
                id={styles.btnRegister}
                onClick={event => {
                    event.preventDefault();
                    dispatch(actions.switchForm(!state.isShowLoginForm))
                }}
            >
                Login
            </button>
        </form>
    )
}

export default Register
