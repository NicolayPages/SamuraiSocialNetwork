import { authUserData } from './auth-reducer';
import { showError } from './errors-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

type initialStateType = {
   initialized: boolean,
}
let initialState: initialStateType = {
   initialized: false,
};


const appReducer = (state = initialState, action: any) => {
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


export const setInitialized = () => ({ type: INITIALIZED_SUCCESS, });


export const initializedApp = () => {
   return (dispatch: any) => {
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