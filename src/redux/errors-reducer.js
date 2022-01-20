
const ON_MODE = 'ON_MODE';
const OFF_MODE = 'OFF_MODE';

let initialState = {
   errorMessage: null,
   errorsMode: true,
};

const errorsReducer = (state = initialState, action) => {
   switch (action.type) {
      case ON_MODE:
         return {
            ...state,
            errorsMode: true,
            errorMessage: action.errorMessage,
         };
      case OFF_MODE:
         return {
            ...state,
            errorsMode: false,
            errorMessage: null,
         };
      default:
         return state;
   }
};


export const activateMode = (errorMessage) => ({ type: ON_MODE, errorMessage });
export const deactivateMode = () => ({ type: OFF_MODE });


export const showError = (errorMessage) => (dispatch) => {
   dispatch(activateMode(errorMessage));
};

export default errorsReducer;