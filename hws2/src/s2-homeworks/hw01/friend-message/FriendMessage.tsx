import React from 'react'
import s from './FriendMessage.module.css'


export type FriendMessagePropsType = {
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

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessagePropsType) => {
    const messageObj = props.message
        const {id, user, message} = messageObj
            const {avatar, name} = user
            const {text, time} = message

    return (
      <div id={"hw1-friend-message-" + id} className={s.friendMessage}>
        <div className={s.friendImageAndText}>
          <img
            id={"hw1-friend-avatar-" + id}
            src = {avatar}
          />
          <div className={s.friendText}>
            <div id={"hw1-friend-name-" + id} className={s.friendName}>
              {name}
            </div>
            <pre id={"hw1-friend-text-" + id} className={s.friendMessageText}>
              {text}
            </pre>
          </div>
        </div>
        <div id={"hw1-friend-time-" + id} className={s.friendTime}>
          {time}
        </div>
      </div>
    );
}

export default FriendMessage
