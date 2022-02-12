import { AppStateType } from "../redux/redux-store";


export const getErrorMessage = (state: AppStateType) => {
   return state.errors.errorMessage
}