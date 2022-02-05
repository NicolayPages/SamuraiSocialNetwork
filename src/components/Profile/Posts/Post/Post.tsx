import React, { useState, useEffect } from 'react'
import s from './Post.module.scss';
import userPhoto from '../../../../assets/images/user.png'
import deleteIcon from '../../../../assets/images/delete.png'
import likeIcon from '../../../../assets/images/liked.png'
import unLikeIcon from '../../../../assets/images/unliked.png'
import { ProfileType } from '../../../../types/types';

type PropsType = {
   message: null | string
   likes: number
   authId: null | number
   id: number
   profile: ProfileType | any

   likePost: (id: number, like: number) => void
   deletePost: (id: number) => void
}


const Post: React.FC<PropsType> = (props) => {
   let onDeletePost = () => {
      props.deletePost(props.id)
   }
   let [mode, setMode] = useState(false)
   let [like, setLike] = useState(props.likes)
   let onLikePost = () => {
      setLike(like++)
      props.likePost(props.id, like)
      setMode(true);
   }
   let offLikePost = () => {
      setLike(like--)
      props.likePost(props.id, like)
      setMode(false);
   }
   useEffect(() => {
      setLike(props.likes)
   }, [props.likes])

   return (
      <div className={s.item}>
         <div className={s.flex}>
            <img src={props.profile.photos.small != null ? props.profile.photos.small : userPhoto} alt="icon" />
            <p className={s.text}>{props.message}</p>
         </div>
         <div className={s.actions}>
            <div>
               <span className={s.like}>likes: {props.likes}</span>
            </div>
            <div className={s.flex}>
               <button onClick={mode ? offLikePost : onLikePost} className={s.btnIcon}><img src={!mode ? unLikeIcon : likeIcon} alt="btn" /></button>
               <button onClick={props.profile.userId === props.authId ? onDeletePost : onDeletePost} className={s.btnIcon}><img src={deleteIcon} alt="btn" /></button>
            </div>
         </div>
      </div >
   );
}


export default Post;