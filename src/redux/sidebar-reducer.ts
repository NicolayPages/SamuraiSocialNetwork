import { ThunkAction } from "redux-thunk";
import { usersAPI } from "../api/api";
import { UsersType } from "../types/types";
import { showError } from "./errors-reducer";
import { AppStateType, InferActionsTypes } from "./redux-store";
import { CommentOutlined, MessageOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';


export type LinksType = {
   id: number
   address: string
   name: string
   icon: any
}

let initialState = {
   links: [
      { id: 1, address: "profile", name: "Profile", icon: UserOutlined },
      { id: 2, address: "dialogs", name: "Dialogs", icon: MessageOutlined },
      { id: 3, address: "chat", name: "Chat", icon: CommentOutlined },
      { id: 4, address: "users", name: "Users", icon: TeamOutlined },
   ] as Array<LinksType>,
   friends: [] as Array<UsersType>,
   pageSize: 3,
   totalUserCount: 0,
   currentPage: 1,
   isFetching: false
};

type initialStateType = typeof initialState

type ActionsTypes = InferActionsTypes<typeof actions>


const sidebarReducer = (state = initialState, action: ActionsTypes): initialStateType => {
   switch (action.type) {
      case "SET_FRIENDS": {
         return {
            ...state,
            friends: action.friends
         }
      };
      case 'SET_PAGE':
         return {
            ...state, currentPage: action.currentPage,
         };
      case 'SET_TOTAL_COUNT':
         return {
            ...state, totalUserCount: action.totalCount,
         };
      case 'SET_IS_FETCHING':
         return {
            ...state, isFetching: action.isFetching,
         };
      default:
         return state
   }
}


export const actions = {
   setFriends: (friends: Array<UsersType>) => ({ type: 'SET_FRIENDS', friends } as const),
   setPage: (currentPage: number) => ({ type: 'SET_PAGE', currentPage } as const),
   setTotalCount: (totalCount: number) => ({ type: 'SET_TOTAL_COUNT', totalCount } as const),
   setIsFetching: (isFetching: boolean) => ({ type: 'SET_IS_FETCHING', isFetching } as const),
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestFriends = (currentPage: number, pageSize: number): ThunkType => async (dispatch) => {
   try {
      dispatch(actions.setIsFetching(true));
      let data = await usersAPI.getFiends(currentPage, pageSize);
      dispatch(actions.setFriends(data.items));
      dispatch(actions.setTotalCount(data.totalCount));
   } catch (error: any) {
      dispatch(showError(error.message));
   } finally {
      dispatch(actions.setIsFetching(false));
   }
};
export const setFriendsPage = (p: number, pageSize: number): ThunkType => async (dispatch) => {
   try {
      dispatch(actions.setIsFetching(true));
      dispatch(actions.setPage(p));
      let data = await usersAPI.getFiends(p, pageSize);
      dispatch(actions.setFriends(data.items));
   } catch (error: any) {
      dispatch(showError(error.message));
   } finally {
      dispatch(actions.setIsFetching(false));
   }
};

export default sidebarReducer;