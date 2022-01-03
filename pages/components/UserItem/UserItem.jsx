import React from 'react'
import styles from './UserItem.module.css'

function UserItem() {
    return (
        <div className={styles.UserItem}>
            <div className={styles.Avatar}>
                <i className="far fa-user-circle"></i>
            </div>
            <div className={styles.Name}>
               LeVanAn942
            </div>
        </div>
    )
}

export default UserItem
