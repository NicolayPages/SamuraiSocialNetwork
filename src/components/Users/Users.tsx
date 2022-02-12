import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from '../../assets/images/user.png';
import { FilterTypes } from "../../redux/users-reducer";
import { PhotosType, UsersType } from "../../types/types";
import Paginator from '../common/Paginator/Paginator';
import Preloader from "../common/Preloader/Preloader";
import { Search } from "./Search/Search";
import s from "./Users.module.scss";

type PropsUsersType = {
   totalUserCount: number
   pageSize: number
   currentPage: number
   users: Array<UsersType> | null | any
   isFollowing: boolean
   isAuth: boolean
   isFetching: boolean

   onPageChanged: (p: number) => void
   onFollowUsers: (id: number) => void
   onUnfollowUsers: (id: number) => void
   onFilterChanged: (filter: FilterTypes) => void

}
type PropsItemsType = {
   id: number
   photos: PhotosType
   isAuth: boolean
   followed: boolean
   isFollowing: any
   status: string
   name: string

   onFollowUsers: (id: number) => void
   onUnfollowUsers: (id: number) => void
}


export const Users: React.FC<PropsUsersType> = React.memo((props) => {

   const { totalUserCount, pageSize, isFetching, currentPage, users, isFollowing, isAuth, onPageChanged, onFollowUsers, onUnfollowUsers, onFilterChanged } = props

   let itemsArr = users.map((u: UsersType) => < UserItem
      onUnfollowUsers={onUnfollowUsers}
      onFollowUsers={onFollowUsers}
      isFollowing={isFollowing}
      isAuth={isAuth}

      key={u.id}
      photos={u.photos}
      id={u.id}
      status={u.status}
      name={u.name}
      followed={u.followed}

   />)

   return (
      <div className={s.wrapper}>
         <div className={s.content}>
            <h1 className={s.title}>Users</h1>
            <Search onFilterChanged={onFilterChanged} />
            {
               isFetching ? <Preloader /> :
                  <div className={s.items} >
                     {itemsArr.length != 0 ? itemsArr : <p className={s.notFound}>User is not found...</p>}
                  </div>
            }
            <Paginator
               totalUserCount={totalUserCount}
               pageSize={pageSize}
               currentPage={currentPage}
               onPageChanged={onPageChanged}
            />
         </div>
      </div >
   );
})

const UserItem: React.FC<PropsItemsType> = React.memo((props) => {

   const { onFollowUsers, onUnfollowUsers, id, photos, isAuth, followed, isFollowing, status, name } = props

   return (
      <div className={s.item} key={id}>
         <div className={s.ava}>
            <NavLink className={s.avaLink} to={'/profile/' + id}>
               <img src={photos.small != null ? photos.small : userPhoto} alt="" />
            </NavLink>
         </div>
         <div className={s.info}>
            <div className={s.infoUser}>
               <h2 className={s.name}>{name}</h2>
               <p className={s.status}>{status != null ? status : "Something about user"}</p>
            </div>
            {isAuth &&
               <div className={s.btns}>
                  {
                     followed
                        ? <button disabled={isFollowing.some((id: number | null) => id === id)}
                           className={s.followedBtn} onClick={() => { onUnfollowUsers(id) }}>unfollow</button>
                        : <button disabled={isFollowing.some((id: number | null) => id === id)}
                           className={s.followedBtn} onClick={() => { onFollowUsers(id) }}>follow</button>
                  }
               </div>
            }
         </div>
      </div>
   )

})





