import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { FilterTypes, followUsers, requestUsers, unfollowUsers } from "../../redux/users-reducer";
import { getIsAuth } from '../../selectors/auth-selectors';
import { getCurrentPage, getFilter, getIsFetching, getIsFollowing, getPageSize, getTotalUserCount, getUsers } from "../../selectors/users-selectors";
import { Users } from "./Users";

const queryString = require('query-string');
export type QueryTypeParams = { term: string, page: string, friend: string }


const UsersContainer: React.FC = React.memo(() => {

   const users = useSelector(getUsers)
   const pageSize = useSelector(getPageSize)
   const totalUserCount = useSelector(getTotalUserCount)
   const currentPage = useSelector(getCurrentPage)
   const isFetching = useSelector(getIsFetching)
   const isFollowing = useSelector(getIsFollowing)
   const isAuth = useSelector(getIsAuth)
   const filter = useSelector(getFilter)
   const dispatch = useDispatch()
   const history = useHistory()

   useEffect(() => {
      const parsed = queryString.parse(history.location.search) as QueryTypeParams
      let actualPage = currentPage
      let actualFilter = filter

      if (!!parsed.page) actualPage = Number(parsed.page)
      if (!!parsed.term) actualFilter = { ...actualFilter, term: parsed.term as string }

      switch (parsed.friend) {
         case 'null':
            actualFilter = { ...actualFilter, friend: null }
            break;
         case 'false':
            actualFilter = { ...actualFilter, friend: false }
            break;
         case 'true':
            actualFilter = { ...actualFilter, friend: true }
            break;
      }

      dispatch(requestUsers(actualPage, pageSize, actualFilter))

   }, []);

   useEffect(() => {

      const query: any = {}

      if (!!filter.term) query.term = filter.term
      if (filter.friend !== null) query.friend = String(filter.friend)
      if (currentPage !== 1) query.page = String(currentPage)

      history.push({
         pathname: '/users',
         search: queryString.stringify(query)
      })

   }, [filter, currentPage]);


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
