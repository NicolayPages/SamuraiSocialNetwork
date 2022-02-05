import { ThunkAction } from 'redux-thunk';
import { authUserData } from './auth-reducer';
import { showError } from './errors-reducer';
import { AppStateType } from './redux-store';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
   initialized: false,
};
type initialStateType = typeof initialState

type ActionTypes = setInitializedType

const appReducer = (state = initialState, action: ActionTypes): initialStateType => {
   switch (action.type) {
      case INITIALIZED_SUCCESS: {
         return {
            ...state,
            initialized: true,
         };
      };
      default:
         return state;
   };
};



type setInitializedType = {
   type: typeof INITIALIZED_SUCCESS
}
export const setInitialized = (): setInitializedType => ({ type: INITIALIZED_SUCCESS });

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>

export const initializedApp = (): ThunkType => {
   return (dispatch) => {
      try {
         let promise = dispatch(authUserData());
         Promise.all([promise])
            .then(() => {
               dispatch(setInitialized());
            });
      } catch (error: any) {
         dispatch(showError(error.message));
      }
   }
};


export default appReducer;