import React, { Component } from 'react';
import s from './Message.module.scss'
import userPhoto from '../../../assets/images/user.png'

const Message = (props) => {
   return (
      <div className={s.message}>
         <div className={s.user}>
            <div className={s.icon}>
               <img src={userPhoto} alt="" />
            </div>
            <p className={s.name}>{props.name}</p>
         </div>
         <div className={s.content}>
            <p className={s.text}>{props.message}</p>
         </div>
      </div>
   );
}

export default Message;