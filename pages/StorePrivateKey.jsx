import React from 'react'
import styles from '../styles/Authentication.module.css'
import clsx from 'clsx'
import * as constants from '../const'
import { useRouter } from 'next/router'

function StorePrivateKey() {
    const router = useRouter();
    return (
        <div className={styles.wrapper}>
            <div className={clsx(styles.container, styles.containerPrivateKey)}>
                <div className={styles.header}>
                    Your private key
                </div>
                <div className={styles.inputForm}>
                    <textarea defaultValue={
                        (typeof window !== "undefined") ?
                            localStorage.getItem(constants.PRIVATE_KEY) : null
                    } rows={10} />
                </div>

                <br />
                <div id={styles.notePrivateKey}>
                    <div>1. Private key chỉ được cấp 1 lần và hệ thống không lưu lại private key</div>
                    <div>2. Bạn nên tự copy private key này và ở nơi an toàn VD: icloud, google drive</div>
                    <div>3. Nếu làm mất private key bạn sẽ không đọc được tin nhắn và không thể khôi phục</div>
                </div>

                <button
                    className={clsx(styles.inputForm, styles.btnSecondary)}
                    id={styles.btnRegister}
                    onClick={event => {
                        event.preventDefault();
                        router.push("/");
                    }}
                >
                    OK
                </button>
            </div>
        </div >
    )
}

export default StorePrivateKey
