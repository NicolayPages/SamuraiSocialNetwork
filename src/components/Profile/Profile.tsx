import React, { Component } from 'react';
import s from './Profile.module.scss'
import User from './User/User';
import PostsComponent from './Posts/PostsContainer';
import profileImage from '../../assets/images/image-profile.jpg'
import Preloader from '../common/Preloader/Preloader';
import ErrorPopup from '../common/ErrorPopup/ErrorPopup';


const Profile: React.FC<any> = React.memo((props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={s.Profile}>
      <div>
        <div className={s.Profile__image}>
          <img src={profileImage} alt="image" />
        </div>
        <User
          id={props.profile.userId}
          profile={props.profile}
          status={props.status}
          updateStatus={props.updateStatus}
          isFollowing={props.isFollowing}
          unfollowUsers={props.unfollowUsers}
          followUsers={props.followUsers}
          authId={props.authId}
          isOwner={props.isOwner}
          updatePhoto={props.updatePhoto}
          editMode={props.editMode}
          onEditMode={props.onEditMode}
          isFetching={props.isFetching}
          localIsFetching={props.localIsFetching}
        />
      </div >
      <PostsComponent />
      <ErrorPopup />
    </div >
  );

})
export default Profile;

