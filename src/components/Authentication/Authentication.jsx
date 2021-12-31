import styles from './Authentication.module.css';
import React from 'react'
import Login from './Login'

function Authentication() {
    return (
        <div className={styles.background}>
            <div className={styles.wrapper}>
                <Login />
            </div>
        </div>
    )
}

export default Authentication
