import { AppStateType } from "../redux/redux-store";

export const getProfile = (state: AppStateType) => {
   return state.profilePage.profile
};
export const getIsFetching = (state: AppStateType) => {
   return state.profilePage.isFetching
};
export const getUserStatus = (state: AppStateType) => {
   return state.profilePage.status
};
export const getPosts = (state: AppStateType) => {
   return state.profilePage.posts
};

