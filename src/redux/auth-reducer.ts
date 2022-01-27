import { authAPI, securityAPI } from '../api';
import { showError } from './errors-reducer';
import { stopSubmit } from 'redux-form';


const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN = 'SET_LOGIN';
const SET_LOGOUT = 'SET_LOGOUT';
const SET_CAPTCHA = 'SET_CAPTCHA';

type initialStateType = {
   userId: null | number,
   email: null | string,
   login: null | string,
   isAuth: boolean,
   captcha: null | string,
}

let initialState: initialStateType = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
   captcha: null,
};



const authReducer = (state = initialState, action: any) => {
   switch (action.type) {
      case SET_USER_DATA: {
         return {
            ...state,
            ...action.data,
            isAuth: true,
         };
      };
      case SET_CAPTCHA: {
         return {
            ...state,
            captcha: action.captcha,
         }
      };
      case SET_LOGOUT: {
         return {
            ...state,
            ...action.data,
         };
      };
      default:
         return state;
   };
};



export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, captcha: string | null) =>
   ({ type: SET_USER_DATA, data: { userId, login, email, captcha } });

export const setAuthLogin = (email: string | null, password: string | null, rememberMe: boolean) =>
   ({ type: SET_LOGIN, formData: { email, password, rememberMe } });

export const setAuthLogout = (userId: number | null, email: string | null, login: string | null, isAuth: boolean, captcha: string | null) =>
   ({ type: SET_LOGOUT, data: { userId, email, login, isAuth, captcha } });

export const setSecurityCaptcha = (captcha: string | null) =>
   ({ type: SET_CAPTCHA, captcha });



export const authUserData = () => async (dispatch: any) => {
   try {
      let data = await authAPI.getUserData();
      if (data.resultCode === 0) {
         let { id, email, login, captcha } = data.data;
         dispatch(setAuthUserData(id, email, login, captcha));
      }
   } catch (error: any) {
      dispatch(showError(error.message));
   }
};

export const authUserLogIn = (email: string | null, password: string | null, rememberMe: boolean, captcha: any) => async (dispatch: any) => {
   try {
      let data = await authAPI.logInUser(email, password, rememberMe, captcha)
      if (data.resultCode == 0) {
         dispatch(authUserData())
      } else {
         if (data.resultCode == 10) {
            dispatch(getCapthchaUrl())
         }
         let errorMessage = data.messages.length > 0 ? data.messages[0] : "Some error";
         dispatch(stopSubmit('login', { _error: errorMessage }));
      }
   } catch (error: any) {
      dispatch(showError(error.message));
   }

};

export const authUserLogOut = () => async (dispatch: any) => {
   try {
      let data = await authAPI.logOutUser();
      if (data.resultCode == 0) {
         dispatch(setAuthLogout(null, null, null, false, null));
      }
   } catch (error: any) {
      dispatch(showError(error.message));
   }
};

export const getCapthchaUrl = () => async (dispatch: any) => {
   try {
      let data = await securityAPI.getCaptcha();
      const captchaUrl = data.data.url;
      dispatch(setSecurityCaptcha(captchaUrl));
   } catch (error: any) {
      dispatch(showError(error.message));
   }
};



export default authReducer;