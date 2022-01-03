import React from 'react'
import styles from './ChatItem.module.css'
import clsx from 'clsx';

function ChatItem(props) {


    return (
        <div
            className={styles.chatItemRow}
            style={{ justifyContent: props.hihi ? "end" : "start" }}
        >
            <div
                className={styles.chatItem}
                style={{ textAlign: props.hihi ? "end" : "start" }}
            >
                <div
                    className={styles.chatItemContent}
                    style={{
                        color: props.hihi ? "white" : null,
                        backgroundColor: props.hihi ? "blue" : null
                    }}
                >
                    dsrsgdsgf fafsag  dfg fg fdgdfg fgf gfgdf g fdgdfg dg gdfgd fdfgdfg dfg dfgdf dfg dffdgdf dfgd ff
                </div>
                <div className={styles.timestamp}>
                    3r5322324
                </div>
            </div>
        </div>
    )
}

export default ChatItem
