import React, { useState, useEffect } from 'react';
import s from './Post.module.scss';
import userPhoto from '../../../../assets/images/user.png'
import likeIcon from '../../../../assets/images/like.png'
import deleteIcon from '../../../../assets/images/delete.png'

const Post = (props) => {
   let onDeletePost = () => {
      props.deletePost(props.id)
   }
   let [like, setLike] = useState(props.likes)
   let onLikePost = () => {
      setLike(like++)
      props.likePost(props.id, like)
   }
   useEffect(() => {
      setLike(props.likes)
   }, [props.likes])

   return (
      <div className={s.item}>
         <div className={s.flex}>
            <img src={props.photo != null ? props.photo : userPhoto} alt="icon" />
            <p className={s.text}>{props.message}</p>
         </div>
         <div className={s.actions}>
            <div>
               <span className={s.like}>likes: {props.likes}</span>
            </div>
            <div>
               <button onClick={onLikePost} className={s.btnIcon}><img src={likeIcon} alt="btn" /></button>
               <button onClick={props.profileId == props.authId && onDeletePost} className={s.btnIcon}><img src={deleteIcon} alt="btn" /></button>
            </div>
         </div>
      </div >
   );
}


export default Post;