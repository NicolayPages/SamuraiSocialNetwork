import { showError } from './errors-reducer';
import { updateObjectInArray } from '../utilits/validators/object-helpers';
import { usersAPI, profileAPI } from '../api';
import { UsersType } from '../types/types';

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = "SET_PAGE";
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const IS_FETCHING = 'IS_FETCHING';
const IS_FOLLOWING = 'IS_FOLLOWING';


type FollowingType = {
   isFollowing: boolean
   userId: number
}

let initialState = {
   users: [] as Array<UsersType>,
   pageSize: 10,
   totalUserCount: 0,
   currentPage: 1,
   isFetching: false,
   isFollowing: [] as Array<FollowingType> | [],
};

type InitialStateType = typeof initialState


type ActionType = followActionType | unfollowActionType | setUsersActionType | setPageActionType | setTotalCountActionType | toggleIsFetchingActionType | toggleIsFollowingActionType

const usersReducer = (state = initialState, action: any): InitialStateType => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, 'id', { followed: true }),
         };
      case UN_FOLLOW:
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, 'id', { followed: false }),
         };
      case SET_USERS:
         return {
            ...state,
            users: action.users,
         };
      case SET_PAGE:
         return {
            ...state, currentPage: action.currentPage,
         };
      case SET_TOTAL_COUNT:
         return {
            ...state, totalUserCount: action.totalCount,
         };
      case IS_FETCHING:
         return {
            ...state, isFetching: action.isFetching
         };
      case IS_FOLLOWING:
         return {
            ...state,
            isFollowing: action.isFollowing
               ? [...state.isFollowing, action.userId]
               : state.isFollowing.filter(id => id != action.userId)
         };
      default:
         return state;
   }
};

type followActionType = {
   type: typeof FOLLOW
   userId: number
}
export const follow = (userId: number): followActionType => ({ type: FOLLOW, userId });

type unfollowActionType = {
   type: typeof UN_FOLLOW
   userId: number
}
export const unfollow = (userId: number): unfollowActionType => ({ type: UN_FOLLOW, userId });

type setUsersActionType = {
   type: typeof SET_USERS
   users: Array<UsersType>
}
export const setUsers = (users: Array<UsersType>): setUsersActionType => ({ type: SET_USERS, users });

type setPageActionType = {
   type: typeof SET_PAGE
   currentPage: number
}
export const setPage = (currentPage: number): setPageActionType => ({ type: SET_PAGE, currentPage });

type setTotalCountActionType = {
   type: typeof SET_TOTAL_COUNT
   totalCount: number
}
export const setTotalCount = (totalCount: number): setTotalCountActionType => ({ type: SET_TOTAL_COUNT, totalCount });

type toggleIsFetchingActionType = {
   type: typeof IS_FETCHING
   isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({ type: IS_FETCHING, isFetching });

type toggleIsFollowingActionType = {
   type: typeof IS_FOLLOWING
   isFollowing: boolean
   userId: number
}
export const toggleIsFollowing = (isFollowing: boolean, userId: number): toggleIsFollowingActionType => ({ type: IS_FOLLOWING, isFollowing, userId });







const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
   try {
      dispatch(toggleIsFollowing(true, userId));
      let data = await apiMethod(userId)
      if (data.resultCode == 0) {
         dispatch(actionCreator(userId))
      }
      dispatch(toggleIsFollowing(false, userId));
   } catch (error: any) {
      dispatch(showError(error.message));
   }
};

export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
   try {
      dispatch(toggleIsFetching(true));
      let data = await usersAPI.getUsers(currentPage, pageSize);
      dispatch(setUsers(data.items));
      dispatch(setTotalCount(data.totalCount));
      dispatch(toggleIsFetching(false));
   } catch (error: any) {
      dispatch(showError(error.message));
   }
};

export const setUsersPage = (p: number, pageSize: number) => async (dispatch: any) => {
   try {
      dispatch(setPage(p));
      dispatch(toggleIsFetching(true));
      let data = await usersAPI.getUsers(p, pageSize);
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
   } catch (error: any) {
      dispatch(showError(error.message));
   }
};

export const followUsers = (userId: number) => {
   return async (dispatch: any) => {
      try {
         followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), follow)
      } catch (error: any) {
         dispatch(showError(error.message));
      }
   }
};

export const unfollowUsers = (userId: number) => {
   return async (dispatch: any) => {
      try {
         followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollow)
      } catch (error: any) {
         dispatch(showError(error.message));
      }
   }
};

export const getUsersTest = () => async (dispatch: any) => {
   try {
      dispatch(toggleIsFetching(true));
      let data = await profileAPI.getUsersForProfile();
      dispatch(setUsers(data.items));
      dispatch(toggleIsFetching(false));
   } catch (error: any) {
      dispatch(showError(error.message));
   }
};

export default usersReducer;