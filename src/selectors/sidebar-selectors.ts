import { AppStateType } from "../redux/redux-store";

export const getLinks = (state: AppStateType) => {
   return state.sidebar.links
};
export const getFriends = (state: AppStateType) => {
   return state.sidebar.friends
};

export const getPageSize = (state: AppStateType) => {
   return state.sidebar.pageSize
};

export const getCurrentPage = (state: AppStateType) => {
   return state.sidebar.currentPage
};

export const getTotalUserCount = (state: AppStateType) => {
   return state.sidebar.totalUserCount
};

export const getIsFetching = (state: AppStateType) => {
   return state.sidebar.isFetching
}