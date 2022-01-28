import React, { Component } from 'react';
import s from '../Friends.module.scss'
import userPhoto from '../../../../assets/images/user.png'

type PropsType = {
   name: string
}

const Friend: React.FC<PropsType> = (props) => {
   return (
      <div className={s.friend}>
         <div className={s.icon}>
            <img src={userPhoto} alt="" />
         </div>
         <p className={s.name}>{props.name}</p>
      </div>
   );
}

export default Friend;