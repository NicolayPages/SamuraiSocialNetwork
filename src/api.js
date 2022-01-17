import React from 'react';
import * as axios from "axios";


const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': "81df0079-0492-4de1-a05f-7da3384208ab"
   },
});

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 5) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => {
            return response.data;
         })
   },
   followUser(id = 2) {
      return instance.post(`follow/${id}`)
         .then(response => {
            return response.data;
         })
   },
   unfollowUser(id = 2) {
      return instance.delete(`follow/${id}`)
         .then(response => {
            return response.data;
         })
   },
};

export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/${userId}`)
         .then(response => {
            return response.data;
         })
   },
   getStatus(userId) {
      return instance.get(`profile/status/${userId}`)
   },
   updateStatus(status) {
      return instance.put(`profile/status`, { status });
   },
   getUsersForProfile() {
      return instance.get(`users`)
         .then(response => {
            return response.data;
         })
   },
};

export const authAPI = {
   getUserData() {
      return instance.get(`auth/me`)
         .then(response => {
            return response.data;
         })
   },
   getUserPhoto() {
      return instance.get(`profile/`)
         .then(response => {
            return response.data;
         })
   },
   logInUser(email, password, rememberMe = false) {
      return instance.post(`auth/login`, { email, password, rememberMe })
         .then(response => {
            return response.data;
         })
   },
   logOutUser() {
      return instance.delete(`auth/login`)
         .then(response => {
            return response.data;
         })
   },
};