import React, { useState, useEffect } from 'react'
import styles from '../styles/Chat.module.css'
import * as constants from '../const'
import clsx from 'clsx';
import UserItem from './components/UserItem/UserItem';
import ChatItem from './components/ChatItem/ChatItem';
import { useRouter } from 'next/router';

import { doc, collection, onSnapshot, setDoc, addDoc } from "firebase/firestore";
import { db } from '../API/firebase';
import { async } from '@firebase/util';
import firebase  from 'firebase/app';


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

    const handleChangeCurrentReceivederID = receivederID => {
        setCurrentReceiverID(receivederID);
    }

    useEffect(() => {
        alert("value=>" + currentReceivederID)
    }, [currentReceivederID]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, constants.USERS_COLLECTION), (snapshot) => {
            setCurrentConservation(snapshot.docs.map(chatItem => chatItem.data()));
        });
        return unsubscribe;
    }, [currentConservation]);

    const SendMessage = async () => {
        await addDoc(collection(db, constants.CONSERVATION_COLLECTION), {
            name: "Los Angeles12",
            state: "CA",
            // country: db.firebase.firestore.FieldValue.serverTimestamp()
        })
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

    const a = [];

    for (let i = 8888; i < 8988; i++) {
        a.push(i);
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
                            {a.map(index =>
                                <UserItem key={index}
                                    changeCurrentReceivederID={handleChangeCurrentReceivederID}
                                />)}
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
