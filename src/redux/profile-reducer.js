import { stopSubmit } from 'redux-form';
import { profileAPI } from './../api';
import { showError } from './errors-reducer';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const IS_FETCHING = 'IS_FETCHING';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE-POST';
const LIKE_POST = 'LIKE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const ON_EDIT_MODE = 'ON_EDIT_MODE';
const OFF_EDIT_MODE = 'OFF_EDIT_MODE';

let initialState = {
   posts: [
      { id: 1, message: "Hi, how are you", likes: 2, },
      { id: 2, message: "Hello everything", likes: 12, },
      { id: 3, message: "Goodbye", likes: 5, },
   ],
   profile: null,
   isFetching: false,
   status: '',
   editMode: false,
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
      case SAVE_PHOTO_SUCCESS:
         return {
            ...state,
            profile: { ...state.profile, photos: action.photosFiles },
         };
      case ON_EDIT_MODE:
         return {
            ...state,
            editMode: true,
         };
      case OFF_EDIT_MODE:
         return {
            ...state,
            editMode: false,
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
export const setPhoto = (photosFiles) => ({ type: SAVE_PHOTO_SUCCESS, photosFiles });

export const onEditMode = () => ({ type: ON_EDIT_MODE });
export const offEditMode = () => ({ type: OFF_EDIT_MODE });


export const getUserProfile = (userId) => async (dispatch) => {
   try {
      dispatch(toggleIsFetching(true));
      let data = await profileAPI.getProfile(userId);
      dispatch(setUserProfile(data));
      dispatch(toggleIsFetching(false));
   } catch (error) {
      dispatch(showError(error.message));
   }
};

export const getStatus = (userId) => async (dispatch) => {
   try {
      let response = await profileAPI.getStatus(userId);
      dispatch(setStatus(response.data));
   } catch (error) {
      dispatch(showError(error.message));
   }
};

export const updateStatus = (status) => async (dispatch) => {
   try {
      let response = await profileAPI.updateStatus(status)
      if (response.data.resultCode === 0) {
         dispatch(setStatus(status));
      }
   } catch (error) {
      dispatch(showError(error.message));
   }
};

export const updatePhoto = (photoFile) => async (dispatch) => {
   try {
      let response = await profileAPI.updatePhoto(photoFile)
      if (response.data.resultCode === 0) {
         dispatch(setPhoto(response.data.data.photos));
      }
   } catch (error) {
      dispatch(showError(error.message));
   }
};

export const updateProfile = (profileData) => async (dispatch, getState) => {
   try {
      const userId = getState().auth.userId
      let response = await profileAPI.updateProfile(profileData)
      if (response.data.resultCode === 0) {
         dispatch(getUserProfile(userId));
         dispatch(offEditMode());
      } else {
         let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
         dispatch(stopSubmit('editForm', { _error: errorMessage }));
      }
   } catch (error) {
      dispatch(showError(error.message));
   }
};

export default profileReducer;