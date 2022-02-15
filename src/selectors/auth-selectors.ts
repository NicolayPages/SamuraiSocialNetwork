import { AppStateType } from "../redux/redux-store";

export const getIsAuth = (state: AppStateType) => {
   return state.auth.isAuth
};
export const getLogin = (state: AppStateType) => {
   return state.auth.login
};
export const getUserId = (state: AppStateType) => {
   return state.auth.userId
};
export const getCaptcha = (state: AppStateType) => {
   return state.auth.captcha
};
export const getAuthError = (state: AppStateType) => {
   return state.auth.authError
};

export const getInitialized = (state: AppStateType) => {
   return state.app.initialized
};
