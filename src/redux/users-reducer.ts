import { showError } from './errors-reducer';
import { updateObjectInArray } from '../utilits/validators/object-helpers';
import { usersAPI, profileAPI } from '../api';
import { UsersType } from '../types/types';
import { AppStateType, InferActionsTypes } from './redux-store';
import { ThunkAction } from 'redux-thunk';


type InitialStateType = typeof initialState
export type FilterTypes = typeof initialState.filter
type ActionTypes = InferActionsTypes<typeof actions>;



let initialState = {
   users: [] as Array<UsersType>,
   pageSize: 10,
   totalUserCount: 0,
   currentPage: 1,
   isFetching: false,
   isFollowing: [] as any,
   filter: {
      term: '',
      friend: null as null | boolean
   }
};

const usersReducer = (state = initialState, action: ActionTypes): InitialStateType => {
   switch (action.type) {
      case 'FOLLOW':
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, 'id', { followed: true }),
         };
      case 'UN_FOLLOW':
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, 'id', { followed: false }),
         };
      case 'SET_USERS':
         return {
            ...state,
            users: action.users,
         };
      case 'SET_PAGE':
         return {
            ...state, currentPage: action.currentPage,
         };
      case 'SET_TOTAL_COUNT':
         return {
            ...state, totalUserCount: action.totalCount,
         };
      case 'IS_FETCHING':
         return {
            ...state, isFetching: action.isFetching
         };
      case 'IS_FOLLOWING':
         return {
            ...state,
            isFollowing: action.isFollowing
               ? [...state.isFollowing, action.userId]
               : state.isFollowing.filter((id: number) => id != action.userId)
         };
      case 'SET_FILTER':
         return {
            ...state, filter: action.filter
         };
      default:
         return state;
   }
};

export const actions = {
   follow: (userId: number) => ({ type: 'FOLLOW', userId } as const),
   unfollow: (userId: number) => ({ type: 'UN_FOLLOW', userId } as const),
   setUsers: (users: Array<UsersType>) => ({ type: 'SET_USERS', users } as const),
   filterUsers: (filter: FilterTypes) => ({ type: 'SET_FILTER', filter } as const),
   setPage: (currentPage: number) => ({ type: 'SET_PAGE', currentPage } as const),
   setTotalCount: (totalCount: number) => ({ type: 'SET_TOTAL_COUNT', totalCount } as const),
   toggleIsFetching: (isFetching: boolean) => ({ type: 'IS_FETCHING', isFetching } as const),
   toggleIsFollowing: (isFollowing: boolean, userId: number) => ({ type: 'IS_FOLLOWING', isFollowing, userId } as const),
}



type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
   try {
      dispatch(actions.toggleIsFollowing(true, userId));
      let data = await apiMethod(userId)
      if (data.resultCode == 0) {
         dispatch(actionCreator(userId))
      }
      dispatch(actions.toggleIsFollowing(false, userId));
   } catch (error: any) {
      dispatch(showError(error.message));
   }
};

export const requestUsers = (currentPage: number, pageSize: number, filter: { term: string, friend: null | boolean }): ThunkType => async (dispatch) => {
   try {
      dispatch(actions.toggleIsFetching(true));
      dispatch(actions.filterUsers(filter));
      dispatch(actions.setPage(currentPage));
      let data = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend);
      dispatch(actions.setUsers(data.items));
      dispatch(actions.setTotalCount(data.totalCount));
      dispatch(actions.toggleIsFetching(false));
   } catch (error: any) {
      dispatch(showError(error.message));
   }
};

export const followUsers = (userId: number): ThunkType => {
   return async (dispatch: any) => {
      try {
         followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), actions.follow)
      } catch (error: any) {
         dispatch(showError(error.message));
      }
   }
};

export const unfollowUsers = (userId: number): ThunkType => {
   return async (dispatch) => {
      try {
         followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), actions.unfollow)
      } catch (error: any) {
         dispatch(showError(error.message));
      }
   }
};

export const getUsersTest = () => async (dispatch: any) => {
   try {
      dispatch(actions.toggleIsFetching(true));
      let data = await profileAPI.getUsersForProfile();
      dispatch(actions.setUsers(data.items));
      dispatch(actions.toggleIsFetching(false));
   } catch (error: any) {
      dispatch(showError(error.message));
   }
};

export default usersReducer;