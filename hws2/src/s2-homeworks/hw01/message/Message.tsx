import React from 'react'
import s from './Message.module.css'

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: {
        id: number,
    user: {
        avatar: string,
        name: string
    },
    message: {
        text: string,
        time: string
    }
    }
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    const messageObj = props.message
        const {id, user, message} = messageObj
            const {avatar, name} = user
            const {text, time} = message
    
    return (
        <div id={'hw1-message-' + id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + id}
                    src={avatar}
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + id} className={s.name}>
                        <span>{name}</span>
                    </div>
                    <pre id={'hw1-text-' + id} className={s.messageText}>
                        {text}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + id} className={s.time}>
                {time}
            </div>
        </div>
    )
}

export default Message
