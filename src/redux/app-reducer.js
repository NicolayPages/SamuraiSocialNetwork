import { authUserData } from './auth-reducer';


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
      let promise = dispatch(authUserData());
      Promise.all([promise])
         .then(() => {
            dispatch(setInitialized());
         });
   }
};


export default appReducer;