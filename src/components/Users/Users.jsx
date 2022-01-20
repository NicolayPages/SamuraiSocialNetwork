import React from "react";
import s from "./Users.module.scss"
import userPhoto from '../../assets/images/user.png'
import { NavLink } from "react-router-dom";
import Paginator from './../common/Paginator/Paginator';

const Users = (props) => {
   let itemsArr = props.users.map(u => < UserItem
      key={u.id}
      unfollowUsers={props.unfollowUsers}
      followUsers={props.followUsers}
      isFollowing={props.isFollowing}
      photos={u.photos}
      id={u.id}
      status={u.status}
      name={u.name}
      followed={u.followed}
      isAuth={props.isAuth}
   />)
   return (
      <div className={s.wrapper}>
         {itemsArr}
         <div className={s.wrapperBtn}>
            <button className={s.loadUsersBtn} onClick={props.getUsersTest}>show more</button>
         </div>
         <Paginator
            totalUserCount={props.totalUserCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChanged={props.onPageChanged} />
      </div >
   );
};

const UserItem = (props) => {
   return (
      <div className={s.item} key={props.id}>
         <div className={s.head}>
            <div className={s.ava}>
               <NavLink to={'/profile/' + props.id}>
                  <img src={props.photos.small != null ? props.photos.small : userPhoto} alt="" />
               </NavLink>
            </div>
            {props.isAuth &&
               <div>
                  {props.followed
                     ? <button disabled={props.isFollowing.some(id => id === props.id)}
                        className={s.followedBtn} onClick={() => { props.unfollowUsers(props.id) }}>unfollow</button>
                     : <button disabled={props.isFollowing.some(id => id === props.id)}
                        className={s.followedBtn} onClick={() => { props.followUsers(props.id) }}>follow</button>}
               </div>
            }

         </div>
         <div className={s.info}>
            <div className={s.mainInfo}>
               <h2 className={s.name}>{props.name}</h2>
               <p className={s.status}>{props.status != null ? props.status : "Something about user"}</p>
            </div>
            <div className={s.location}>
               <h3 className={s.country}>{"Country"}</h3>
               <h3 className={s.city}>{"City"}</h3>
            </div>
         </div>
      </div>
   )

}

export default Users;