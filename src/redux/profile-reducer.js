import { profileAPI } from './../api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const IS_FETCHING = 'IS_FETCHING';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE-POST';
const LIKE_POST = 'LIKE_POST';

let initialState = {
   posts: [
      { id: 1, message: "Hi, how are you", likes: 2, },
      { id: 2, message: "Hello everything", likes: 12, },
      { id: 3, message: "Goodbye", likes: 5, },
   ],
   profile: null,
   isFetching: false,
   status: '',
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: state.posts.length + 1,
            message: action.postMessage,
            likes: 0,
         };
         return {
            ...state,
            posts: [newPost, ...state.posts],
         };
      };
      case SET_USER_PROFILE: {
         return {
            ...state,
            profile: [action.profile],
         }
      };
      case IS_FETCHING:
         return {
            ...state, isFetching: action.isFetching
         };
      case SET_STATUS:
         return {
            ...state,
            status: action.status
         };
      case DELETE_POST:
         return {
            ...state,
            posts: state.posts.filter(p => p.id != action.postId),
         };
      case LIKE_POST:
         return {
            ...state,
            posts: state.posts.map(p => {
               if (p.id === action.postId) {
                  return { ...p, likes: action.postLike, }
               }
               return p;
            }),
         };
      default:
         return state;
   }
};

export const addPostActionCreator = (postMessage) => ({ type: ADD_POST, postMessage });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile, });
export const toggleIsFetching = (isFetching) => ({ type: IS_FETCHING, isFetching });
export const setStatus = (status) => ({ type: SET_STATUS, status, });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const likePost = (postId, postLike) => ({ type: LIKE_POST, postLike, postId });

export const getUserProfile = (userId) => async (dispatch) => {
   dispatch(toggleIsFetching(true));
   let data = await profileAPI.getProfile(userId);
   dispatch(setUserProfile(data));
   dispatch(toggleIsFetching(false));
};

export const getStatus = (userId) => async (dispatch) => {
   let response = await profileAPI.getStatus(userId);
   dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
   let response = await profileAPI.updateStatus(status)
   if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
   }
};


export default profileReducer;