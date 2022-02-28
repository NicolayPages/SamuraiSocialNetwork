import React from 'react';
import axios from "axios";
import { PhotosType, ProfileType, UsersType } from '../types/types';


const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': "81df0079-0492-4de1-a05f-7da3384208ab"
   },
});

export const usersAPI = {
   getUsers(currentPage: number = 1, pageSize: number = 5, term: string = '', friend: null | boolean = null) {
      return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend == null ? '' : `&friend=${friend}`))
         .then(response => {
            return response.data;
         })
   },
   followUser(id = 2) {
      return instance.post<FollowType>(`follow/${id}`)
         .then(response => {
            return response.data;
         })
   },
   unfollowUser(id = 2) {
      return instance.delete<FollowType>(`follow/${id}`)
         .then(response => {
            return response.data;
         })
   },
   getFiends(currentPage = 1, pageSize = 3) {
      return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}&friend=true`)
         .then(response => {
            return response.data;
         })
   },
};

export const profileAPI = {
   getProfile(userId: number) {
      return instance.get<ProfileType>(`profile/${userId}`)
   },
   getStatus(userId: number) {
      return instance.get<string>(`profile/status/${userId}`)
   },
   updateStatus(status: string) {
      return instance.put<UpdateStatusType>(`profile/status`, { status });
   },
   getUsersForProfile() {
      return instance.get<GetUsersType>(`users`)
         .then(response => {
            return response.data;
         })
   },
   updatePhoto(photoFile: any) {
      const formData = new FormData();
      formData.append('image', photoFile)
      return instance.put<UpdatePhotoType>(`profile/photo`, formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      });
   },
   updateProfile(newData: ProfileType) {
      return instance.put<UpdateProfileType>(`profile`, newData);
   },
};

export const authAPI = {
   getUserData() {
      return instance.get<GetUserDataType>(`auth/me`)
         .then(response => {
            return response.data;
         })
   },
   getUserPhoto() {
      return instance.get<GetPhotoDataType>(`profile/`)
         .then(response => {
            return response.data;
         })
   },
   logInUser(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null,) {
      return instance.post<LogInUserType>(`auth/login`, { email, password, rememberMe, captcha })
         .then(response => {
            return response.data;
         })
   },
   logOutUser() {
      return instance.delete<LogOutUserType>(`auth/login`)
         .then(response => {
            return response.data;
         })
   },
};

export const securityAPI = {
   getCaptcha() {
      return instance.get<GetCaptchaType>(`security/get-captcha-url`).then(response => {
         return response.data
      })
   },
};

export const dialogsAPI = {
   startChatting(userId: number) {
      return instance.put(`dialogs/${userId}`, userId).then(response => {
         return response
      })
   },
   getMessages(userId: number) {
      return instance.get<any>(`dialogs/${userId}/messages`)
         .then(response => {
            return response.data
         })
   }
}




export enum ResultCodeEnum {
   Success = 0,
   Error = 1,
   CaptchaIsRequired = 10
}

type GetUserDataType = {
   data: {
      id: number
      email: string
      login: string
      captcha: string | null
   }
   resultCode: ResultCodeEnum
   messages: Array<string>
}
type GetPhotoDataType = {
   data: PhotosType
   resultCode: ResultCodeEnum
   messages: Array<string>
}
type LogInUserType = {
   data: {
      email: string
      password: string
      rememberMe: boolean
      captcha: string | null
   }
   resultCode: ResultCodeEnum
   messages: Array<string>
}
type LogOutUserType = {
   data: {}
   resultCode: ResultCodeEnum
   messages: Array<string>
}
type UpdateStatusType = {
   status: string
   resultCode: ResultCodeEnum
   messages: Array<string>
}
type GetUsersType = {
   error: null | string
   items: Array<UsersType>
   totalCount: number
}
type FollowType = {
   data: any
   fieldsErrors: Array<any>
   messages: Array<string>
   resultCode: number
}
type GetCaptchaType = {
   url: string
}
type UpdateProfileType = {
   data: ProfileType
   resultCode: ResultCodeEnum
   messages: Array<string>
}
type UpdatePhotoType = {
   data: {
      photos: PhotosType
   }
   resultCode: ResultCodeEnum
   messages: Array<string>
}