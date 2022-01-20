import { authUserData } from './auth-reducer';
import { showError } from './errors-reducer';


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
   initialized: false,
};

const appReducer = (state = initialState, action) => {
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
   return (dispatch) => {
      try {
         let promise = dispatch(authUserData());
         Promise.all([promise])
            .then(() => {
               dispatch(setInitialized());
            });
      } catch (error) {
         dispatch(showError(error.message));
      }
   }
};


export default appReducer;