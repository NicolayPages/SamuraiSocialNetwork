import React from 'react';
import userPhoto from '../../../assets/images/user.png';
import s from './Message.module.scss';

type PropsType = {
   name: string
   message: string
}

export const Message: React.FC<PropsType> = React.memo((props) => {
   const { name, message } = props
   return (
      <div className={s.message}>
         <div className={s.user}>
            <div className={s.icon}>
               <img src={userPhoto} alt="" />
            </div>
            <p className={s.name}>{name}</p>
         </div>
         <div className={s.content}>
            <p className={s.text}>{message}</p>
         </div>
      </div>
   );
})

