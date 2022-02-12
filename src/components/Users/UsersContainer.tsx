import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterTypes, followUsers, requestUsers, unfollowUsers } from "../../redux/users-reducer";
import { getIsAuth } from '../../selectors/auth-selectors';
import { getCurrentPage, getFilter, getIsFetching, getIsFollowing, getPageSize, getTotalUserCount, getUsers } from "../../selectors/users-selectors";
import { Users } from "./Users";


export type PropsType = {}


const UsersContainer: React.FC<PropsType> = React.memo(() => {

   const users = useSelector(getUsers)
   const pageSize = useSelector(getPageSize)
   const totalUserCount = useSelector(getTotalUserCount)
   const currentPage = useSelector(getCurrentPage)
   const isFetching = useSelector(getIsFetching)
   const isFollowing = useSelector(getIsFollowing)
   const isAuth = useSelector(getIsAuth)
   const filter = useSelector(getFilter)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(requestUsers(currentPage, pageSize, filter))
   }, []);

   let onPageChanged = (p: number) => {
      dispatch(requestUsers(p, pageSize, filter))
   };
   let onFilterChanged = (filter: FilterTypes) => {
      dispatch(requestUsers(1, pageSize, filter))
   }
   let onFollowUsers = (userId: number) => {
      dispatch(followUsers(userId))
   }
   let onUnfollowUsers = (userId: number) => {
      dispatch(unfollowUsers(userId))
   }

   return (<>
      <Users
         totalUserCount={totalUserCount}
         pageSize={pageSize}
         currentPage={currentPage}
         users={users}
         isFollowing={isFollowing}
         isAuth={isAuth}
         isFetching={isFetching}

         onPageChanged={onPageChanged}
         onFilterChanged={onFilterChanged}
         onFollowUsers={onFollowUsers}
         onUnfollowUsers={onUnfollowUsers}
      />
   </>
   );
})



export default UsersContainer
