import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../redux/profile-reducer';
import { getUserId } from '../../../selectors/auth-selectors';
import { getPosts, getProfile } from '../../../selectors/profile-selectors';
import { ProfileType } from '../../../types/types';
import { Post } from './Post/Post';
import s from './Posts.module.scss';



type PostsType = {
   posts: Array<PostsType> | any
   authId: number | null
   profile: ProfileType | null

   onLikePost: (id: number, like: number) => void
   onDeletePost: (id: number) => void
   onAddPost: (values: any, dispatch: any) => void
}

export const PostsContainer: React.FC = React.memo(() => {

   const posts = useSelector(getPosts)
   const profile = useSelector(getProfile)
   const authId = useSelector(getUserId)
   const dispatch = useDispatch()

   const { addPostActionCreator, deletePost, likePost } = actions

   let onAddPost = (newMessage: string) => {
      dispatch(addPostActionCreator(newMessage))
   };
   let onDeletePost = (id: number) => {
      dispatch(deletePost(id))
   }
   let onLikePost = (id: number, like: number) => {
      dispatch(likePost(id, like))
   }
   return (
      <Posts
         profile={profile}
         posts={posts}
         authId={authId}

         onAddPost={onAddPost}
         onDeletePost={onDeletePost}
         onLikePost={onLikePost}
      />
   );
})

const Posts: React.FC<PostsType> = React.memo((props) => {
   const { profile, posts, authId, onAddPost, onDeletePost, onLikePost } = props

   let postElements = posts.map((p: any) => <Post
      profile={profile}
      onLikePost={onLikePost}
      onDeletePost={onDeletePost}
      authId={authId}
      id={p.id}
      key={p.id}
      message={p.message}
      likes={p.likes}
   />);
   return (
      <div className={s.Posts}>
         <h2 className={s.Posts__title}>My posts</h2>
         {profile?.userId == authId && <PostsForm onAddPost={onAddPost} />}
         <div className={s.Posts__wrapper}>
            {postElements}
         </div>
      </div>
   );
})



const PostsForm: React.FC<any> = React.memo((props) => {
   let initialValues = { postsFormMessage: '' }
   let onSubmit = (values: any, actions: any) => {
      props.onAddPost(values.postsFormMessage)
      actions.resetForm(true)
   }
   return (
      <div>
         <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            className={s.formWrapper}
         >
            <Form className={s.form}>
               <Field
                  component={'textarea'}
                  name={'postsFormMessage'}
                  type="text"
                  className={s.area}
                  placeholder="your news..."
               />
               <ErrorMessage name="email" component="div" />
               <button className={s.btn}>send</button>
            </Form>
         </Formik>
      </div>
   )
})




