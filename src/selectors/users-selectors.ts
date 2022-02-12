import { createSelector } from "reselect";
import { AppStateType } from "../redux/redux-store";

export const getUsers = (state: AppStateType) => {
   return state.usersPage.users
};
export const getPageSize = (state: AppStateType) => {
   return state.usersPage.pageSize
};
export const getTotalUserCount = (state: AppStateType) => {
   return state.usersPage.totalUserCount
};
export const getIsFetching = (state: AppStateType) => {
   return state.usersPage.isFetching
};
export const getIsFollowing = (state: AppStateType) => {
   return state.usersPage.isFollowing
};
export const getCurrentPage = (state: AppStateType) => {
   return state.usersPage.currentPage
};
export const getFilter = (state: AppStateType) => {
   return state.usersPage.filter
};


//test 
export const getUsersSelector = (state: AppStateType) => {
   return getUsers(state).filter(u => true)
};
export const getUsersSuperSelector = createSelector(getUsers, getIsFetching,
   (users) => {
      return users.filter(u => true)
   })