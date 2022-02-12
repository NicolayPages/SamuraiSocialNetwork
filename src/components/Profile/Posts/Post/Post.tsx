import React, { useState, useEffect } from 'react'
import s from './Post.module.scss';
import userPhoto from '../../../../assets/images/user.png'
import deleteIcon from '../../../../assets/images/delete.png'
import likedIcon from '../../../../assets/images/liked.png'
import dislikedIcon from '../../../../assets/images/unliked.png'
import { ProfileType } from '../../../../types/types';

type PropsType = {
   message: null | string
   likes: number
   authId: null | number
   id: number
   profile: ProfileType | any

   onLikePost: (id: number, like: number) => void
   onDeletePost: (id: number) => void
}


export const Post: React.FC<PropsType> = React.memo((props) => {
   const { message, likes, authId, id, profile, onLikePost, onDeletePost } = props

   let [like, setLike] = useState(likes)
   let [likedMode, setLikedMode] = useState(false)

   useEffect(() => {
      setLike(likes)
   }, [likes]);

   let likePost = () => {
      setLike(like++)
      onLikePost(id, like)
      setLikedMode(true)
   }
   let dislikePost = () => {
      setLike(like--)
      onLikePost(id, like)
      setLikedMode(false)
   }

   let deletePost = () => {
      onDeletePost(id)
   }

   return (
      <div className={s.item}>
         <div className={s.flex}>
            <img src={profile.photos.small != null ? profile.photos.small : userPhoto} alt="icon" />
            <p className={s.text}>{message}</p>
         </div>
         <div className={s.actions}>
            <div>
               <span className={s.like}>likes: {likes}</span>
            </div>
            {authId != null && <div className={s.flex}>
               <button onClick={!likedMode ? likePost : dislikePost} className={s.btnIcon}>
                  <img src={!likedMode ? dislikedIcon : likedIcon} alt="btn" />
               </button>
               {authId === profile.userId &&
                  <button onClick={deletePost} className={s.btnIcon}>
                     <img src={deleteIcon} alt="btn" />
                  </button>
               }
            </div>}

         </div>
      </div >
   );
})

