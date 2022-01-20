import React, { Component } from 'react';
import s from './Profile.module.scss'
import User from './User/User';
import PostsComponent from './Posts/PostsContainer';
import profileImage from '../../assets/images/image-profile.jpg'
import Preloader from './../common/Preloader/Preloader';
import ErrorPopup from './../common/ErrorPopup/ErrorPopup';



const Profile = React.memo((props) => {
  if (!props.profile) {
    return <Preloader />
  }
  let UserElement = props.profile.map(u => <div>
    <div className={s.Profile__image}>
      <img src={profileImage} alt="image" />
    </div>
    <User
      profile={u}
      id={u.userId}
      key={u.userId}
      status={props.status}
      updateStatus={props.updateStatus}
      users={props.users}
      isFollowing={props.isFollowing}
      unfollowUsers={props.unfollowUsers}
      followUsers={props.followUsers}
      authId={props.authId}
      isOwner={props.isOwner}
      updatePhoto={props.updatePhoto}
      editMode={props.editMode}
      onEditMode={props.onEditMode}
    />
  </div >
  );
  return (
    <content className={s.Profile}>
      {UserElement}
      <PostsComponent />
    </content >
  );

})
export default Profile;

