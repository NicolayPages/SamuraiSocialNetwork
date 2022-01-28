import React, { Component } from 'react';
import { FriendsType } from '../../../redux/sidebar-reducer';
import Friend from './Friend/Friend';
import s from './Friends.module.scss'


type PropsType = {
   friends: [] | Array<FriendsType>
}
const Friends: React.FC<PropsType> = (props) => {
   let friendsElements = props.friends.map(f => <Friend key={f.id} name={f.name} />)
   return (
      <div className={s.friends}>
         <h2 className={s.title}>Friends</h2>
         <div className={s.flex}>
            {friendsElements}
         </div>
      </div >
   );
}

export default Friends;