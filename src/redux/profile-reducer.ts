import { ThunkAction } from 'redux-thunk';
import { profileAPI, ResultCodeEnum } from '../api';
import { PhotosType, ProfileType } from '../types/types';
import { showError } from './errors-reducer';
import { AppStateType, InferActionsTypes } from './redux-store';


export type PostsType = {
   id: number
   message: string
   likes: number
}
type ActionTypes = InferActionsTypes<typeof actions>

let initialState = {
   posts: [
      { id: 1, message: "Hi, how are you", likes: 2, },
      { id: 2, message: "Hello everyone", likes: 12, },
      { id: 3, message: "My pet project", likes: 5, },
   ] as Array<PostsType>,
   profile: null as ProfileType | null,
   isFetching: false,
   status: '',
   editMode: false,
   localIsFetching: false,
   errorMessage: null as string | null
};

type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: ActionTypes): InitialStateType => {
   switch (action.type) {
      case 'ADD_POST': {
         let newPost = {
            id: state.posts.length + 2,
            message: action.postMessage,
            likes: 0,
         };
         return {
            ...state,
            posts: [newPost, ...state.posts],
         };
      };
      case 'SET_USER_PROFILE': {
         return { ...state, profile: action.profile, }
      };
      case 'IS_FETCHING':
         return {
            ...state, isFetching: action.isFetching
         };
      case 'LOCAL_IS_FETCHING':
         return {
            ...state, localIsFetching: action.localIsFetching
         };
      case 'SET_STATUS':
         return {
            ...state,
            status: action.status
         };
      case 'DELETE_POST':
         return {
            ...state,
            posts: state.posts.filter(p => p.id != action.postId),
         };
      case 'LIKE_POST':
         return {
            ...state,
            posts: state.posts.map(p => {
               if (p.id === action.postId) {
                  return { ...p, likes: action.postLike, }
               }
               return p;
            }),
         };
      case 'SAVE_PHOTO_SUCCESS':
         return {
            ...state,
            profile: { ...state.profile, photos: action.photosFiles } as ProfileType,
         };
      case 'ON_EDIT_MODE':
         return {
            ...state,
            editMode: true,
         };
      case 'OFF_EDIT_MODE':
         return {
            ...state,
            editMode: false,
         };
      case 'SET_PROFILE_ERROR':
         return {
            ...state,
            errorMessage: action.errorMessage
         };
      default:
         return state;
   }
};


export const actions = {
   addPostActionCreator: (postMessage: string) => ({ type: 'ADD_POST', postMessage } as const),
   setUserProfile: (profile: ProfileType) => ({ type: 'SET_USER_PROFILE', profile, } as const),
   toggleIsFetching: (isFetching: boolean) => ({ type: 'IS_FETCHING', isFetching } as const),
   setStatus: (status: string) => ({ type: 'SET_STATUS', status, } as const),
   deletePost: (postId: number) => ({ type: 'DELETE_POST', postId } as const),
   likePost: (postId: number, postLike: number) => ({ type: 'LIKE_POST', postId, postLike } as const),
   setPhoto: (photosFiles: PhotosType) => ({ type: 'SAVE_PHOTO_SUCCESS', photosFiles } as const),
   toggleLocalIsFetching: (localIsFetching: boolean) => ({ type: 'LOCAL_IS_FETCHING', localIsFetching } as const),
   onEditMode: () => ({ type: 'ON_EDIT_MODE' } as const),
   offEditMode: () => ({ type: 'OFF_EDIT_MODE' } as const),
   setProfileError: (errorMessage: string) => ({ type: 'SET_PROFILE_ERROR', errorMessage } as const),
}





type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
   dispatch(actions.toggleIsFetching(true));
   let response = await profileAPI.getProfile(userId);
   dispatch(actions.setUserProfile(response.data));
   dispatch(actions.toggleIsFetching(false));
};

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
   let response = await profileAPI.getStatus(userId);
   dispatch(actions.setStatus(response.data));
};

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
   try {
      let response = await profileAPI.updateStatus(status)
      if (response.data.resultCode === ResultCodeEnum.Success) {
         dispatch(actions.setStatus(status));
      }
   } catch (error: any) {
      dispatch(showError(error.message));
   }
};

export const updatePhoto = (photoFile: PhotosType): ThunkType => async (dispatch) => {
   try {
      dispatch(actions.toggleLocalIsFetching(true))
      let response = await profileAPI.updatePhoto(photoFile)
      if (response.data.resultCode === ResultCodeEnum.Success) {
         dispatch(actions.setPhoto(response.data.data.photos));
      }
      dispatch(actions.toggleLocalIsFetching(false))
   } catch (error: any) {
      dispatch(showError(error.message));
   }
};

export const updateProfile = (profileData: ProfileType): ThunkType => async (dispatch, getState: any) => {
   try {
      dispatch(actions.toggleIsFetching(true))
      const userId = getState().auth.userId
      let response = await profileAPI.updateProfile(profileData)
      if (response.data.resultCode === ResultCodeEnum.Success) {
         dispatch(getUserProfile(userId));
         dispatch(actions.offEditMode());
      } else {
         let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
         dispatch(actions.setProfileError(errorMessage));
      }
      dispatch(actions.toggleIsFetching(false))
   } catch (error: any) {
      dispatch(showError(error.message));
   }
};


export default profileReducer;