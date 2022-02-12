import React from 'react';
import profileImage from '../../assets/images/image-profile.jpg';
import { ProfileType } from '../../types/types';
import ErrorPopup from '../common/ErrorPopup/ErrorPopup';
import { PostsContainer } from './Posts/PostsContainer';
import s from './Profile.module.scss';
import { User } from './User/User';


export type PropsType = {
  profile: ProfileType | any
  editMode: boolean
  localIsFetching: boolean
  isOwner: boolean

  onEditUserMode: () => void
  updatePhoto: (photoFile: any) => void
}

export const Profile: React.FC<PropsType> = React.memo((props) => {
  return (
    <div className={s.Profile}>
      <div className={s.container}>
        <div className={s.Profile__image}>
          <img src={profileImage} alt="image" />
        </div>
        <User
          profile={props.profile}
          isOwner={props.isOwner}
          updatePhoto={props.updatePhoto}
          editMode={props.editMode}
          onEditUserMode={props.onEditUserMode}
          localIsFetching={props.localIsFetching}
        />
      </div >
      <PostsContainer />
      <ErrorPopup />
    </div >
  );

})


