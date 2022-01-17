import React, { Component } from 'react';
import Friend from './Friend/Friend';
import s from './Friends.module.scss'

const Friends = (props) => {
   let friendsElements = props.friends.map(f => <Friend id={f.id} name={f.name} />)
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