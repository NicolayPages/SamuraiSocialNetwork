import React from 'react';
import { addPostActionCreator, profileReducer } from './profile-reducer';

it('length of posts should be incremented', () => {
   //1.test data 
   let action = addPostActionCreator('it-kama test reducer')
   let state = {
      posts: [
         { id: 1, message: "Hi, how are you", likes: 2, },
         { id: 2, message: "Hello everything", likes: 12, },
         { id: 3, message: "Goodbye", likes: 5, },
      ],
   };
   //2. action
   let newState = profileReducer(state, action);
   //3.expectation
   expect(newState.posts.length).toBe(4);
})