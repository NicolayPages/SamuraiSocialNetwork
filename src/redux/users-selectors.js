import { createSelector } from "reselect";

export const getUsers = (state) => {
   return state.usersPage.users
};
export const getPageSize = (state) => {
   return state.usersPage.pageSize
};
export const getTotalUserCount = (state) => {
   return state.usersPage.totalUserCount
};
export const getIsFetching = (state) => {
   return state.usersPage.isFetching
};
export const getIsFollowing = (state) => {
   return state.usersPage.isFollowing
};
export const getCurrentPage = (state) => {
   return state.usersPage.currentPage
};

//test 
export const getUsersSelector = (state) => {
   return getUsers(state).filter(u => true)
};
export const getUsersSuperSelector = createSelector(getUsers, getIsFetching,
   (users) => {
      return users.filter(u => true)
   })