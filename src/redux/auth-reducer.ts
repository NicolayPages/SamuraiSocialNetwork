import { authAPI, securityAPI } from '../api';
import { showError } from './errors-reducer';
import { stopSubmit } from 'redux-form';


const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN = 'SET_LOGIN';
const SET_LOGOUT = 'SET_LOGOUT';
const SET_CAPTCHA = 'SET_CAPTCHA';

let initialState = {
   userId: null as number | null,
   email: null as string | null,
   login: null as string | null,
   isAuth: false,
   captcha: null as string | null,
};
type initialStateType = typeof initialState


const authReducer = (state = initialState, action: any): initialStateType => {
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


type setAuthUserDataActionType = {
   type: typeof SET_USER_DATA,
   data: { userId: number | null, email: string | null, login: string | null, captcha: string | null }
}
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, captcha: string | null): setAuthUserDataActionType =>
   ({ type: SET_USER_DATA, data: { userId, email, login, captcha } });


type setAuthLoginActionType = {
   type: typeof SET_LOGIN,
   formData: { email: string | null, password: string | null, rememberMe: boolean }
}
export const setAuthLogin = (email: string | null, password: string | null, rememberMe: boolean): setAuthLoginActionType =>
   ({ type: SET_LOGIN, formData: { email, password, rememberMe } });


type setAuthLogoutActionType = {
   type: typeof SET_LOGOUT,
   data: { userId: null, email: null, login: null, isAuth: boolean }
}
export const setAuthLogout = (userId: null, email: null, login: null, isAuth: boolean): setAuthLogoutActionType =>
   ({ type: SET_LOGOUT, data: { userId, email, login, isAuth, } });


type setSecurityCaptchaActionType = {
   type: typeof SET_CAPTCHA
   captcha: string | null
}
export const setSecurityCaptcha = (captcha: string | null): setSecurityCaptchaActionType =>
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
         dispatch(setAuthLogout(null, null, null, false));
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