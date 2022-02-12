import React from 'react';
import { Link } from 'react-router-dom';
import userPhoto from '../../../assets/images/user.png';
import { UsersType } from '../../../types/types';
import MiniPreloader from '../../common/MiniPreloader/Preloader';
import s from './Friends.module.scss';


type FriendsPropsType = {
   friends: [] | Array<UsersType>
   isFetching: boolean
}
type FriendPropsType = {
   name: string
   id: number
   photo: any
}


export const Friends: React.FC<FriendsPropsType> = React.memo((props) => {
   const { friends, isFetching } = props
   let friendsElements = friends.map(f => <Friend key={f.id} name={f.name} photo={f.photos.small} id={f.id} />)
   return (
      <div className={s.friends}>
         <h2 className={s.title}>Friends</h2>
         <div className={s.flex}>
            {isFetching ? <MiniPreloader /> : friendsElements}
         </div>
      </div >
   );
})

const Friend: React.FC<FriendPropsType> = React.memo((props) => {
   const { name, id, photo } = props
   return (
      <div className={s.friend}>
         <Link className={s.icon} to={'/profile/' + id}>
            <img src={photo ? photo : userPhoto} alt="" />
         </Link>
         <p className={s.name}>{name}</p>
      </div>
   );
})

