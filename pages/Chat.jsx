import React, { useState, useEffect } from 'react'
import styles from '../styles/Chat.module.css'
import * as constants from '../const'
import clsx from 'clsx';
import UserItem from './components/UserItem/UserItem';
import ChatItem from './components/ChatItem/ChatItem';
import { useRouter } from 'next/router';

import { doc, getDocs, collection, onSnapshot, setDoc, addDoc, serverTimestamp, query, where } from "firebase/firestore";
import { db } from '../API/firebase';
import { async } from '@firebase/util';
import firebase from 'firebase/app';
import * as API from '../API/firestoreAction';


function Chat() {
    const router = useRouter();
    const [isShowEnterKey, setIsShowEnterKey] = useState(true);
    const [currentReceivederID, setCurrentReceiverID] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem(constants.USERID);
        } else {
            return null;
        }
    });
    const [currentConservation, setCurrentConservation] = useState(null);
    const [message, setMessage] = useState('');
    const [historyConversation, setHistoryConversation] = useState([]);
    const handleChangeCurrentReceivederID = receivederID => {
        setCurrentReceiverID(receivederID);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        setHistoryConversation(await API.getHistoryconversation());
    }, [currentReceivederID]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, constants.USERS_COLLECTION), (snapshot) => {
            setCurrentConservation(snapshot.docs.map(chatItem => chatItem.data()));
        });
        return unsubscribe;
    }, [currentConservation]);

    const sendMessage = async (contentForReceiver, contentForSender) => {
        await addDoc(collection(db, constants.CONSERVATION_COLLECTION), {
            usernameSender: localStorage.getItem(constants.USERID),
            usernameReceiver: currentReceivederID,
            contentForReceiver: contentForReceiver,
            contentForSender: contentForSender,
            timestamp: serverTimestamp()
        })
    }

    const handleSubmit = () => {
        sendMessage(message, message);
        setMessage('');
    }

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
                            {historyConversation.length !== 1 ?
                                <div style={{color: "gray", fontWeight: "900", textAlign: "center", marginTop : "200px"}}>
                                    conversation history is empty
                                </div>
                                :
                                historyConversation.map((username, index) =>
                                    <UserItem
                                        key={index}
                                        username={username}
                                        changeCurrentReceivederID={handleChangeCurrentReceivederID}
                                    />
                                )
                            }
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
                                {currentReceivederID}
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
                            <textarea value={message} onChange={event => { setMessage(event.target.value) }} />
                            <div id={styles.sendMessage}>
                                <button disabled={message !== '' ? false : true}
                                    onClick={handleSubmit}
                                >Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Chat
