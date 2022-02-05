import { Dispatch } from 'redux';
import { stopSubmit } from 'redux-form';
import { ThunkAction } from 'redux-thunk';
import { profileAPI, ResultCodeEnum } from '../api';
import { PhotosType, ProfileType } from '../types/types';
import { showError } from './errors-reducer';
import { AppStateType } from './redux-store';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const IS_FETCHING = 'IS_FETCHING';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE-POST';
const LIKE_POST = 'LIKE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const ON_EDIT_MODE = 'ON_EDIT_MODE';
const OFF_EDIT_MODE = 'OFF_EDIT_MODE';
const LOCAL_IS_FETCHING = 'LOCAL_IS_FETCHING';


export type PostsType = {
   id: number
   message: string
   likes: number
}

let initialState = {
   posts: [
      { id: 1, message: "Hi, how are you", likes: 2, },
      { id: 2, message: "Hello everything", likes: 12, },
      { id: 3, message: "Goodbye", likes: 5, },
   ] as Array<PostsType>,
   profile: null as ProfileType | null,
   isFetching: false,
   status: '',
   editMode: false,
   localIsFetching: false
};
type InitialStateType = typeof initialState;

type ActionTypes = addPostActionCreatorType | setUserProfileActionType | toggleIsFetchingActionType | setStatusActionType | deletePostActionType | likePostActionType | setPhotoActionType | toggleIsLocalFetchingActionType | onEditModeActionType | offEditModeActionType

const profileReducer = (state = initialState, action: ActionTypes): InitialStateType => {
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
         return { ...state, profile: action.profile, }
      };
      case IS_FETCHING:
         return {
            ...state, isFetching: action.isFetching
         };
      case LOCAL_IS_FETCHING:
         return {
            ...state, localIsFetching: action.localIsFetching
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
            profile: { ...state.profile, photos: action.photosFiles } as ProfileType,
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


type addPostActionCreatorType = {
   type: typeof ADD_POST
   postMessage: string
}
export const addPostActionCreator = (postMessage: string): addPostActionCreatorType => ({ type: ADD_POST, postMessage });

type setUserProfileActionType = {
   type: typeof SET_USER_PROFILE
   profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): setUserProfileActionType => ({ type: SET_USER_PROFILE, profile, });

type toggleIsFetchingActionType = {
   type: typeof IS_FETCHING
   isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({ type: IS_FETCHING, isFetching });

type setStatusActionType = {
   type: typeof SET_STATUS
   status: string
}
export const setStatus = (status: string): setStatusActionType => ({ type: SET_STATUS, status, });

type deletePostActionType = {
   type: typeof DELETE_POST
   postId: number
}
export const deletePost = (postId: number): deletePostActionType => ({ type: DELETE_POST, postId });

type likePostActionType = {
   type: typeof LIKE_POST
   postId: number
   postLike: number
}
export const likePost = (postId: number, postLike: number): likePostActionType => ({ type: LIKE_POST, postId, postLike });

type setPhotoActionType = {
   type: typeof SAVE_PHOTO_SUCCESS
   photosFiles: PhotosType
}
export const setPhoto = (photosFiles: PhotosType): setPhotoActionType => ({ type: SAVE_PHOTO_SUCCESS, photosFiles });

type toggleIsLocalFetchingActionType = {
   type: typeof LOCAL_IS_FETCHING
   localIsFetching: boolean
}
export const toggleLocalIsFetching = (localIsFetching: boolean): toggleIsLocalFetchingActionType => ({ type: LOCAL_IS_FETCHING, localIsFetching });

type onEditModeActionType = {
   type: typeof ON_EDIT_MODE
}
export const onEditMode = (): onEditModeActionType => ({ type: ON_EDIT_MODE });


type offEditModeActionType = {
   type: typeof OFF_EDIT_MODE
}
export const offEditMode = (): offEditModeActionType => ({ type: OFF_EDIT_MODE });




type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
   dispatch(toggleIsFetching(true));
   let response = await profileAPI.getProfile(userId);
   dispatch(setUserProfile(response.data));
   dispatch(toggleIsFetching(false));
};

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
   let response = await profileAPI.getStatus(userId);
   dispatch(setStatus(response.data));
};

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
   try {
      let response = await profileAPI.updateStatus(status)
      if (response.data.resultCode === ResultCodeEnum.Success) {
         dispatch(setStatus(status));
      }
   } catch (error: any) {
      dispatch(showError(error.message));
   }
};

export const updatePhoto = (photoFile: PhotosType): ThunkType => async (dispatch) => {
   try {
      dispatch(toggleLocalIsFetching(true))
      let response = await profileAPI.updatePhoto(photoFile)
      if (response.data.resultCode === ResultCodeEnum.Success) {
         dispatch(setPhoto(response.data.data.photos));
      }
      dispatch(toggleLocalIsFetching(false))
   } catch (error: any) {
      dispatch(showError(error.message));
   }
};

export const updateProfile = (profileData: ProfileType): ThunkType => async (dispatch, getState: any) => {
   try {
      const userId = getState().auth.userId
      let response = await profileAPI.updateProfile(profileData)
      if (response.data.resultCode === ResultCodeEnum.Success) {
         dispatch(getUserProfile(userId));
         dispatch(offEditMode());
      } else {
         let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
         dispatch(stopSubmit('editForm', { _error: errorMessage }));
      }
   } catch (error: any) {
      dispatch(showError(error.message));
   }
};

export default profileReducer;