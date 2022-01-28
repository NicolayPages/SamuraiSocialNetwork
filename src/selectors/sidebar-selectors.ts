import { AppStateType } from "../redux/redux-store";

export const getLinks = (state: AppStateType) => {
   return state.sidebar.links
};
export const getFriends = (state: AppStateType) => {
   return state.sidebar.friends
};

