import React, { Component } from 'react';
import s from './Profile.module.scss'
import User from './User/User';
import PostsComponent from './Posts/PostsContainer';
import profileImage from '../../assets/images/image-profile.jpg'
import userPhoto from '../../assets/images/user.png'
import yes from '../../assets/images/yes.png'
import no from '../../assets/images/no.png'
import Preloader from './../common/Preloader/Preloader';

const Profile = React.memo((props) => {
  if (!props.profile) {
    return <Preloader />
  }
  let UserElement = props.profile.map(u => <div>
    <div className={s.Profile__image}>
      <img src={u.photos.large != null ? u.photos.large : profileImage} alt="image" />
    </div>
    <User
      name={u.fullName}
      aboutMe={u.aboutMe}
      id={u.userId}
      ava={u.photos.small != null ? u.photos.small : userPhoto}
      lookingForAJob={u.lookingForAJob == true ? <img src={yes} className={s.icon} /> : <img src={no} className={s.icon} />}
      lookingForAJobDescription={u.lookingForAJobDescription}
      facebook={u.contacts.facebook != null ? u.contacts.facebook : 'missing'}
      vk={u.contacts.vk != null ? u.contacts.vk : 'missing'}
      twitter={u.contacts.twitter != null ? u.contacts.twitter : 'missing'}
      instagram={u.contacts.instagram != null ? u.contacts.instagram : 'missing'}
      github={u.contacts.github != null ? u.contacts.github : 'missing'}
      status={props.status}
      updateStatus={props.updateStatus}
      users={props.users}
      isFollowing={props.isFollowing}
      unfollowUsers={props.unfollowUsers}
      followUsers={props.followUsers}
      authId={props.authId}
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