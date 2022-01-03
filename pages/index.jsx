import * as constants from '../const'
import Login from './Login'
import Chat from './Chat';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import styles from "../styles/Authentication.module.css"

import React from 'react'

function Index() {
    const router = useRouter();

    useEffect(() => {
        let isRememberMe = null;
        let username = null;
        if (typeof window !== "undefined") {
            isRememberMe = localStorage.getItem(constants.REMEMBER_PASSWORD);
            username = localStorage.getItem(constants.USERID);
        }
        if (username && isRememberMe) {
            router.push("Chat")
        } else {
            router.push("Login")
        }
    }, []);

    return (
        <div className={styles.wrapper}>
            <i style={{fontSize: "200px", color:"gray"}} className="fas fa-spinner fa-spin"></i>
        </div>
    );
}

export default Index
