import { showError } from './errors-reducer';
import { updateObjectInArray } from '../utilits/validators/object-helpers';
import { usersAPI, profileAPI } from './../api';

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = "SET_PAGE";
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const IS_FETCHING = 'IS_FETCHING';
const IS_FOLLOWING = 'IS_FOLLOWING';

let initialState = {
   users: [],
   pageSize: 10,
   totalUserCount: 0,
   currentPage: 1,
   isFetching: false,
   isFollowing: [],
};

const usersReducer = (state = initialState, action) => {
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

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UN_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setPage = (currentPage) => ({ type: SET_PAGE, currentPage });
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export const toggleIsFetching = (isFetching) => ({ type: IS_FETCHING, isFetching });
export const toggleIsFollowing = (isFollowing, userId) => ({ type: IS_FOLLOWING, isFollowing, userId });


const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
   try {
      dispatch(toggleIsFollowing(true, userId));
      let data = await apiMethod(userId)
      if (data.resultCode == 0) {
         dispatch(actionCreator(userId))
      }
      dispatch(toggleIsFollowing(false, userId));
   } catch (error) {
      dispatch(showError(error.message));
   }
};

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
   try {
      dispatch(toggleIsFetching(true));
      let data = await usersAPI.getUsers(currentPage, pageSize);
      dispatch(setUsers(data.items));
      dispatch(setTotalCount(data.totalCount));
      dispatch(toggleIsFetching(false));
   } catch (error) {
      dispatch(showError(error.message));
   }
};

export const setUsersPage = (p, pageSize) => async (dispatch) => {
   try {
      dispatch(setPage(p));
      dispatch(toggleIsFetching(true));
      let data = await usersAPI.getUsers(p, pageSize);
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
   } catch (error) {
      dispatch(showError(error.message));
   }
};

export const followUsers = (userId) => {
   return async (dispatch) => {
      try {
         followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), follow)
      } catch (error) {
         dispatch(showError(error.message));
      }
   }
};

export const unfollowUsers = (userId) => {
   return async (dispatch) => {
      try {
         followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollow)
      } catch (error) {
         dispatch(showError(error.message));
      }
   }
};

export const getUsersTest = () => async (dispatch) => {
   try {
      dispatch(toggleIsFetching(true));
      let data = await profileAPI.getUsersForProfile();
      dispatch(setUsers(data.items));
      dispatch(toggleIsFetching(false));
   } catch (error) {
      dispatch(showError(error.message));
   }
};

export default usersReducer;