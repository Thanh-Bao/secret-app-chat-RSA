import React, { useState } from 'react'
import styles from '../styles/Chat.module.css'
import * as constants from '../const'
import clsx from 'clsx';
import UserItem from './components/UserItem/UserItem';
import ChatItem from './components/ChatItem/ChatItem';
import { useRouter } from 'next/router';

function Chat() {
    const router = useRouter();
    const [isShowEnterKey, setIsShowEnterKey] = useState(true);

    const handlePrivatekey = () => {
        let key = prompt("Please paste your private key here");

        if (key != null) {
            if (typeof window !== "undefined") {
                localStorage.setItem(constants.PRIVATE_KEY, key);
            }
            setIsShowEnterKey(false);
        }
    }

    const handleLogout = () => {
        if (typeof window != "undefined") {
            localStorage.clear();
        }
        router.push("/");
    }

    return (
        <>
            <div id={styles.wrapperColumn}>
                <div
                    style={{ display: isShowEnterKey ? 'visiable' : 'none' }}
                    id={styles.submitPrivateKey}
                >
                    <span>To view the message you need to enter your private key </span>
                    <button onClick={handlePrivatekey}>OK</button>
                </div>

                <div style={{ height: isShowEnterKey ? 'calc(100% - 53px)' : '100%' }}
                    id={styles.wrapperRow}>
                    <div id={styles.historyConversation}>
                        <div id={styles.historyConversationHeader}>
                            <input placeholder=' Search' />
                        </div>
                        <div id={styles.historyConversationList}>
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />
                            <UserItem />

                        </div>
                    </div>
                    <div id={styles.mainConversation}>
                        <div id={styles.mainConversationHeader}>
                            <div>
                                <button
                                    id={styles.btnToggle}
                                    className={styles.button}
                                >
                                    <i className="fas fa-arrow-left"></i>
                                </button>
                            </div>
                            <div id={styles.receivederName}>
                                NguyenVanA
                            </div>
                            <div>
                                <button
                                    className={styles.button}
                                    id={styles.btnLogout}
                                    onClick={handleLogout}
                                >
                                    <span>Logout </span>
                                    <i className="fas fa-sign-out-alt"></i>
                                </button>
                            </div>
                        </div>
                        <div id={styles.mainConversationList}>
                            <ChatItem hihi={false} />
                            <ChatItem hihi={false} />
                            <ChatItem hihi={true} />
                            <ChatItem hihi={true} />
                            <ChatItem hihi={false} />
                            <ChatItem hihi={true} />
                            <ChatItem hihi={true} />
                            <ChatItem hihi={false} />
                            <ChatItem hihi={true} />
                            <ChatItem hihi={true} />
                            <ChatItem hihi={false} />
                            <ChatItem hihi={true} />
                            <ChatItem hihi={true} />
                            <ChatItem hihi={false} />
                        </div>
                        <div id={styles.mainConversationInput}>
                            <textarea />
                            <div id={styles.sendMessage}>
                                <button>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Chat
