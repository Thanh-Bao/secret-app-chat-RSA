import styles from './Authentication.module.css';
import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import { useStore } from '../../store'

function Authentication() {
    const [state, dispatch] = useStore();

        return (
            <div className={styles.wrapper}>
                {state.isShowLoginForm ?
                    <Login /> :
                    <Register />}
            </div>
        )
    }

    export default Authentication
