import { ThunkAction } from 'redux-thunk';
import { authUserData } from './auth-reducer';
import { showError } from './errors-reducer';
import { AppStateType, InferActionsTypes } from './redux-store';


let initialState = {
   initialized: false,
};
type initialStateType = typeof initialState

type ActionTypes = InferActionsTypes<typeof actions>

const appReducer = (state = initialState, action: ActionTypes): initialStateType => {
   switch (action.type) {
      case 'INITIALIZED_SUCCESS': {
         return {
            ...state,
            initialized: true,
         };
      };
      default:
         return state;
   };
};


export const actions = {
   setInitialized: () => ({ type: 'INITIALIZED_SUCCESS' } as const),
}



type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>

export const initializedApp = (): ThunkType => {
   return (dispatch) => {
      try {
         let promise = dispatch(authUserData());
         Promise.all([promise])
            .then(() => {
               dispatch(actions.setInitialized());
            });
      } catch (error: any) {
         dispatch(showError(error.message));
      }
   }
};


export default appReducer;