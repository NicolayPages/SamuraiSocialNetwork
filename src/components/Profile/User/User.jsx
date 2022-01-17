import React, { Component } from 'react';
import s from './User.module.scss'
import Status from '../Status/StatusWithHooks';

const User = (props) => {

   const filterById = (arr, userId) => {
      return arr.find(item => {
         return (item.id == userId);
      });
   };
   let usersItem = filterById(props.users, props.id);

   return (
      <div className={s.User}>
         <div>
            <div className={s.User__ava}>
               <img src={props.ava} alt="" />
            </div>
            {props.id != props.authId && <div className={s.btnContainer}>
               {false
                  ? <button disabled={props.isFollowing.some(id => id === props.id)}
                     className={s.followedBtn} onClick={() => { props.unfollowUsers(props.id) }}>unfollow</button>
                  : <button disabled={props.isFollowing.some(id => id === props.id)}
                     className={s.followedBtn} onClick={() => { props.followUsers(props.id) }}>follow</button>}
            </div>}
         </div>
         <div className={s.User__info}>
            <h2 className={s.User__name}>{props.name}</h2>
            <ul className={s.User__descript}>
               <li><span>Status:</span>
                  <span>
                     <Status status={props.status} updateStatus={props.updateStatus} />
                  </span></li>
               <li><span>About me:</span><span>{props.aboutMe}</span></li>
               <li><span>Looking for a Job:</span><span>{props.lookingForAJob}</span></li>
               <li><span>Looking for a Job Description:</span><span>{props.lookingForAJobDescription}</span></li>
            </ul>
            <ul className={s.contacts}>
               <h2>My contacts:</h2>
               <li>Facebook: <a href="https://facebook.com" target='_blank'>{props.facebook}</a></li>
               <li>Vk: <a href="https:/vk.com/dimych" target='_blank'>{props.vk}</a></li>
               <li>Twitter: <a href="https://twitter.com/@sdf" target='_blank'>{props.twitter}</a></li>
               <li>Instagram: <a href="https://instagra.com/sds" target='_blank'>{props.instagram}</a></li>
               <li>Github: <a href="https://github.com" target='_blank'>{props.github}</a></li>
            </ul>
         </div>
      </div >
   );
}

export default User;