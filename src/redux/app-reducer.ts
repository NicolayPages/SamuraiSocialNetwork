import { authUserData } from './auth-reducer';
import { showError } from './errors-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
   initialized: false,
};
type initialStateType = typeof initialState


const appReducer = (state = initialState, action: any): initialStateType => {
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