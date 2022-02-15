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

export const getEditMode = (state: AppStateType) => {
   return state.profilePage.editMode
};
export const getLocalIsFetching = (state: AppStateType) => {
   return state.profilePage.localIsFetching
};

export const getProfileError = (state: AppStateType) => {
   return state.profilePage.errorMessage
};