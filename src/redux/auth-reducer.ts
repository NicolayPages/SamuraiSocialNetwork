import { authAPI, ResultCodeEnum, securityAPI } from '../api';
import { showError } from './errors-reducer';
import { stopSubmit } from 'redux-form';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './redux-store';
import { InferActionsTypes } from "./redux-store";


let initialState = {
   userId: null as number | null,
   email: null as string | null,
   login: null as string | null,
   isAuth: false,
   captcha: null as string | null,
};
type initialStateType = typeof initialState


const authReducer = (state = initialState, action: ActionTypes): initialStateType => {
   switch (action.type) {
      case 'SET_USER_DATA': {
         return {
            ...state,
            ...action.data,
            isAuth: true,
         };
      };
      case 'SET_CAPTCHA': {
         return {
            ...state,
            captcha: action.captcha,
         }
      };
      case 'SET_LOGOUT': {
         return {
            ...state,
            ...action.data,
         };
      };
      default:
         return state;
   };
};


type ActionTypes = InferActionsTypes<typeof actions>

export const actions = {
   setAuthUserData: (userId: number | null, email: string | null, login: string | null, captcha: string | null) => ({ type: 'SET_USER_DATA', data: { userId, email, login, captcha } } as const),

   setAuthLogin: (email: string | null, password: string | null, rememberMe: boolean) => ({ type: 'SET_LOGIN', formData: { email, password, rememberMe } } as const),

   setAuthLogout: (userId: null, email: null, login: null, isAuth: boolean) => ({ type: 'SET_LOGOUT', data: { userId, email, login, isAuth, } } as const),

   setSecurityCaptcha: (captcha: string) => ({ type: 'SET_CAPTCHA', captcha } as const),


}





type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>

export const authUserData = (): ThunkType => async (dispatch) => {
   try {
      let data = await authAPI.getUserData();
      if (data.resultCode === ResultCodeEnum.Success) {
         let { id, email, login, captcha } = data.data;
         dispatch(actions.setAuthUserData(id, email, login, captcha));
      }
   } catch (error: any) {
      dispatch(showError(error.message));
   }
};

export const authUserLogIn = (email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkType => async (dispatch: any) => {
   try {
      let data = await authAPI.logInUser(email, password, rememberMe, captcha)
      if (data.resultCode == ResultCodeEnum.Success) {
         dispatch(authUserData())
      } else {
         if (data.resultCode == ResultCodeEnum.CaptchaIsRequired) {
            dispatch(getCapthchaUrl())
         }
         let errorMessage = data.messages.length > 0 ? data.messages[0] : "Some error";
         dispatch(stopSubmit('login', { _error: errorMessage }));
      }
   } catch (error: any) {
      dispatch(showError(error.message));
   }

};

export const authUserLogOut = (): ThunkType => async (dispatch) => {
   try {

      let data = await authAPI.logOutUser();
      if (data.resultCode == ResultCodeEnum.Success) {
         dispatch(actions.setAuthLogout(null, null, null, false,));
      }
   } catch (error: any) {
      dispatch(showError(error.message));
   }
};

export const getCapthchaUrl = (): ThunkType => async (dispatch) => {
   try {
      let data = await securityAPI.getCaptcha();
      dispatch(actions.setSecurityCaptcha(data.url));
   } catch (error: any) {
      dispatch(showError(error.message));
   }
};



export default authReducer;