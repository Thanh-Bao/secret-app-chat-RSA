import React from 'react'
import styles from './ChatItem.module.css'
import clsx from 'clsx';

function ChatItem(props) {


    return (
        <div
            id={styles.chatItemRow}
            style={{ justifyContent: props.hihi ? "end" : "start" }}
        >
            <span
                style={{
                    color: props.hihi ? "white" : null,
                    backgroundColor : props.hihi? "blue" : null
                }}
            >
                dsrsgdsgf fafsag  dfg fg fdgdfg fgf gfgdf g fdgdfg dg gdfgd fdfgdfg dfg dfgdf dfg dffdgdf dfgd ff
            </span>
        </div>
    )
}

export default ChatItem
