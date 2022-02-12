import React from 'react';
import loadIcon from '../../../assets/images/download.png';
import no from '../../../assets/images/no.png';
import loading from '../../../assets/images/preloader.gif';
import userPhoto from '../../../assets/images/user.png';
import yes from '../../../assets/images/yes.png';
import { Edit } from '../EditForm/EditForm';
import { PropsType } from '../Profile';
import { Status } from '../Status/Status';
import s from './User.module.scss';

export const User: React.FC<PropsType> = React.memo((props) => {
   const { isOwner, editMode, profile, localIsFetching, updatePhoto, onEditUserMode, } = props

   let onPhotoUpload = (e: any) => {
      if (e.target.files.length) {
         updatePhoto(e.target.files[0]);
      }
   }

   return (
      <div className={s.User}>
         <div className={s.container}>
            <div className={s.User__ava}>
               {!localIsFetching ? <img src={profile.photos.large || userPhoto} alt="" className={s.ava} />
                  : <img src={loading} className={s.loader} alt="" />}
            </div>
            {
               isOwner && <div className={s.input__wrapper}>
                  <input type="file" id="input__file" className={s.input__file} multiple onChange={onPhotoUpload} />
                  <label htmlFor="input__file" className={s.input__fileButton}>
                     <span className={s.input__fileIconWrapper}><img className={s.input__fileIcon} src={loadIcon} width="20" /></span>
                     <span className={s.input__fileButtonText}>Download Avatar</span>
                  </label>
               </div>
            }
            {
               isOwner && <button className={s.btn} onClick={onEditUserMode}>Edit Profile</button>
            }
         </div>
         <div className={s.User__info}>
            <h2 className={s.User__name}>{profile.fullName}</h2>
            <ul className={s.User__descript}>
               <li><span>Status:</span><span><Status /></span></li>
               <li><span>About me:</span><span>{profile.aboutMe}</span></li>
               <li>
                  <span>Looking for a Job:</span>
                  <span>
                     <img src={profile.lookingForAJob ? yes : no} className={s.icon} />
                  </span>
               </li>
               {
                  profile.lookingForAJob && <li>
                     <span>Looking for a Job Description:</span>
                     <span>{profile.lookingForAJobDescription}</span>
                  </li>
               }
            </ul>
            <ul className={s.contacts}>
               <h2>My contacts:</h2>
               {Object.keys(profile.contacts).map(key => {
                  return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
               })}
            </ul>
         </div>
         {editMode && <Edit />}
      </div >
   );
})

type ContactType = {
   contactTitle: string | null
   contactValue: any

}

const Contact: React.FC<ContactType> = React.memo((props) => {
   return <li>{props.contactTitle} :<a href={props.contactValue} className={s.link} target='_blank'>{props.contactValue || '--------------------'}</a></li>
})




