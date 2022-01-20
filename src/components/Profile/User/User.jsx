import React, { useState } from 'react';
import s from './User.module.scss'
import Status from '../Status/StatusWithHooks';
import userPhoto from '../../../assets/images/user.png'
import loadIcon from '../../../assets/images/download.png'
import yes from '../../../assets/images/yes.png'
import no from '../../../assets/images/no.png'
import EditForm from '../EditForm/EditForm';


const User = (props) => {
   let onPhotoUpload = (e) => {
      if (e.target.files.length) {
         props.updatePhoto(e.target.files[0]);
      }
   }

   return (
      <div className={s.User}>
         <div>
            <div className={s.User__ava}>
               <img src={props.profile.photos.large || userPhoto} alt="" />
            </div>
            {props.isOwner && <div className={s.input__wrapper}>
               <input type="file" id="input__file" className={s.input__file} multiple onChange={onPhotoUpload} />
               <label for="input__file" className={s.input__fileButton}>
                  <span className={s.input__fileIconWrapper}><img className={s.input__fileIcon} src={loadIcon} width="20" /></span>
                  <span className={s.input__fileButtonText}>Download Avatar</span>
               </label>
            </div>}
            {props.isOwner && <button className={s.btn} onClick={props.onEditMode}>Edit Profile</button>}
            {!props.isOwner && <div className={s.btnContainer}>
               {false
                  ? <button disabled={props.isFollowing.some(id => id === props.id)}
                     className={s.btn} onClick={() => { props.unfollowUsers(props.id) }}>unfollow</button>
                  : <button disabled={props.isFollowing.some(id => id === props.id)}
                     className={s.btn} onClick={() => { props.followUsers(props.id) }}>follow</button>}
            </div>}
         </div>
         <div className={s.User__info}>
            <h2 className={s.User__name}>{props.profile.fullName}</h2>
            <ul className={s.User__descript}>
               <li><span>Status:</span>
                  <span>
                     <Status status={props.profile.status} updateStatus={props.updateStatus} />
                  </span></li>
               <li><span>About me:</span><span>{props.profile.aboutMe}</span></li>
               <li>
                  <span>Looking for a Job:</span>
                  <span>
                     <img src={props.profile.lookingForAJob ? yes : no} className={s.icon} />
                  </span>
               </li>
               {props.profile.lookingForAJob && <li>
                  <span>Looking for a Job Description:</span>
                  <span>{props.profile.lookingForAJobDescription}</span>
               </li>}
            </ul>
            <ul className={s.contacts}>
               <h2>My contacts:</h2>
               {Object.keys(props.profile.contacts).map(key => {
                  return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
               })}
            </ul>
         </div>
         {props.editMode && <EditForm />}
      </div >
   );
}

const Contact = ({ contactTitle, contactValue }) => {
   return <li>{contactTitle} : <a href={contactValue} className={s.link} target='_blank'>{contactValue || '--------------------'}</a></li>
}

export default User;



