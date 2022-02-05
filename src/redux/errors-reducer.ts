import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./redux-store";

const ON_MODE = 'ON_MODE';
const OFF_MODE = 'OFF_MODE';

let initialState = {
   errorMessage: null as string | null,
   errorsMode: true,
};
type initialStateType = typeof initialState;

type ActionTypes = activateModeActionType | deactivateModeActionType

const errorsReducer = (state = initialState, action: ActionTypes): initialStateType => {
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

type activateModeActionType = {
   type: typeof ON_MODE
   errorMessage: string | null
}
export const activateMode = (errorMessage: string | null): activateModeActionType => ({ type: ON_MODE, errorMessage });

type deactivateModeActionType = {
   type: typeof OFF_MODE
}
export const deactivateMode = (): deactivateModeActionType => ({ type: OFF_MODE });

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>

export const showError = (errorMessage: string | null): ThunkType => (dispatch) => {
   dispatch(activateMode(errorMessage));
};

export default errorsReducer;