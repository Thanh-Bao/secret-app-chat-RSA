import React from 'react'
import styles from './UserItem.module.css'
import * as constants from '../../../const';

const UserItem = ({ username, changeCurrentReceivederID }) => {

    const ownerUserID = null;
    if (typeof window !== 'undefined') {
        ownerUserID = localStorage.getItem(constants.USERID);
    }

    return (
        <div
            className={styles.UserItem}
            onClick={() => {
                changeCurrentReceivederID(Math.random)
            }}
        >
            <div className={styles.Avatar}>
                <i className="far fa-user-circle"></i>
            </div>
            <div className={styles.Name}>
                {username}
                {username === ownerUserID ? " (you)" : null}
            </div>
        </div>
    )
}

export default UserItem
