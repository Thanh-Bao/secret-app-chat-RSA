import styles from './Authentication.module.css';
import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

function Authentication() {

    const [isShowLoginForm, setIsShowLoginForm] = useState(false);

    return (
        <div className={styles.wrapper}>
            {isShowLoginForm ? <Login /> : <Register />}
        </div>
    )
}

export default Authentication
