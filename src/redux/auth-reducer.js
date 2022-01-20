import { stopSubmit } from 'redux-form';
import { authAPI, securityAPI } from './../api';
import { showError } from './errors-reducer';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN = 'SET_LOGIN';
const SET_LOGOUT = 'SET_LOGOUT';
const SET_CAPTCHA = 'SET_CAPTCHA';

let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
   captcha: null,
};

const authReducer = (state = initialState, action) => {
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

export const setAuthUserData = (userId, email, login, captcha) => ({ type: SET_USER_DATA, data: { userId, email, login, captcha } });
export const setAuthLogin = (email, password, rememberMe) => ({ type: SET_LOGIN, formData: { email, password, rememberMe } });
export const setAuthLogout = (userId, email, login, isAuth) => ({ type: SET_LOGOUT, data: { userId, email, login, isAuth, } });
export const setSecurityCaptcha = (captcha) => ({ type: SET_CAPTCHA, captcha });


export const authUserData = () => async (dispatch) => {
   try {
      let data = await authAPI.getUserData();
      if (data.resultCode === 0) {
         let { id, login, email } = data.data;
         dispatch(setAuthUserData(id, email, login));
      }
   } catch (error) {
      dispatch(showError(error.message));
   }
};

export const authUserLogIn = (email, password, rememberMe, captcha) => async (dispatch) => {
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
   } catch (error) {
      dispatch(showError(error.message));
   }

};

export const authUserLogOut = () => async (dispatch) => {
   try {
      let data = await authAPI.logOutUser();
      if (data.resultCode == 0) {
         dispatch(setAuthLogout(null, null, null, false));
      }
   } catch (error) {
      dispatch(showError(error.message));
   }
};

export const getCapthchaUrl = () => async (dispatch) => {
   try {
      let data = await securityAPI.getCaptcha();
      const captchaUrl = data.data.url;
      dispatch(setSecurityCaptcha(captchaUrl));
   } catch (error) {
      dispatch(showError(error.message));
   }
};

export default authReducer;