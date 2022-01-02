import React from 'react'
import styles from '../styles/Chat.module.css'
import * as constants from './const'

function Chat() {

    const handlePrivatekey = () => {
        let key = prompt("Please paste your private key here");

        if (key != null) {
            if (typeof window !== "undefined") {
                localStorage.setItem(constants.PRIVATE_KEY, key);
            }
        }
    }

    return (
        <>
            <div id={styles.wrapperColumn}>
                <div id={styles.submitPrivateKey}>
                    <span>To view the message you need to enter your private key </span>
                    <button onClick={handlePrivatekey}>OK</button>
                </div>

                <div id={styles.wrapperRow}>
                    <div id={styles.historyConversation}>
                        <div id={styles.historyConversationHeader}>

                        </div>
                        <div id={styles.historyConversationList}>
                            <h1>
                                sdfsdfffad9999
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>

                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad123
                            </h1>

                        </div>
                    </div>
                    <div id={styles.mainConversation}>
                        <div id={styles.mainConversationHeader}>

                        </div>
                        <div id={styles.mainConversationList}>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>

                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>

                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>

                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad
                            </h1>
                            <h1>
                                sdfsdfffad777
                            </h1>
                            <h1>
                                sdfsdfffad888
                            </h1>
                            <h1>
                                sdfsdfffad999
                            </h1>
                            <h1>
                                sdfsdfffad123
                            </h1>
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
