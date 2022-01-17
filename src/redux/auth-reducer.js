import { stopSubmit } from 'redux-form';
import { authAPI } from './../api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN = 'SET_LOGIN';
const SET_LOGOUT = 'SET_LOGOUT';

let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
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
      case SET_LOGOUT: {
         return {
            ...state,
            isAuth: false,
         };
      };
      default:
         return state;
   };
};

export const setAuthUserData = (userId, email, login,) => ({ type: SET_USER_DATA, data: { userId, email, login, } });
export const setAuthLogin = (email, password, rememberMe) => ({ type: SET_LOGIN, formData: { email, password, rememberMe } });
export const setAuthLogout = () => ({ type: SET_LOGOUT, });


export const authUserData = () => async (dispatch) => {
   let data = await authAPI.getUserData();
   if (data.resultCode === 0) {
      let { id, login, email } = data.data;
      dispatch(setAuthUserData(id, email, login));
   }
}
export const authUserLogIn = (email, password, rememberMe) => async (dispatch) => {
   let data = await authAPI.logInUser(email, password, rememberMe)
   if (data.resultCode == 0) {
      dispatch(authUserData())
   } else {
      let errorMessage = data.messages.length > 0 ? data.messages[0] : "Some error";
      dispatch(stopSubmit('login', { _error: errorMessage }));
   }
};
export const authUserLogOut = () => async (dispatch) => {
   let data = await authAPI.logOutUser();
   if (data.resultCode == 0) {
      dispatch(setAuthLogout(null, null, null, false));
   }
};


export default authReducer;