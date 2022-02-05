import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addPostActionCreator, deletePost, likePost } from '../../../redux/profile-reducer'
import Post from './Post/Post';
import s from './Posts.module.scss'
import { reduxForm, Field, reset } from 'redux-form';
import { Textarea } from '../../common/FormElements/FormElements';
import { maxLengthCreator, required } from '../../../utilits/validators/validators';
import { getPosts } from '../../../selectors/profile-selectors';
import { getProfile } from '../../../selectors/profile-selectors';
import { getUserId } from '../../../selectors/auth-selectors';
import { PhotosType, ProfileType } from '../../../types/types';
import { AppStateType } from '../../../redux/redux-store';

const maxLength200 = maxLengthCreator(200);

type MapStateToProps = {
   posts: any
   profile: ProfileType | null
   authId: number | null
}
type MapDispatchToProps = {
   addPostActionCreator: (postsFormMessage: any) => void
   deletePost: (id: number) => void
   likePost: (id: number, like: number) => void
   onAddPost: (values: any, dispatch: any) => void
}
type PostsType = {
   posts: any
   authId: number | null
   profile: ProfileType | null

   likePost: (id: number, like: number) => void
   deletePost: (id: number) => void
   onAddPost: (values: any, dispatch: any) => void
}
type PropsType = MapStateToProps & MapDispatchToProps


class PostsComponent extends React.Component<any> {
   onAddPost = (values: any, dispatch: any,) => {
      this.props.addPostActionCreator(values.postsFormMessage,);
      dispatch(reset("postsForm"));
   };
   render() {
      return (
         <Posts
            profile={this.props.profile}
            posts={this.props.posts}
            onAddPost={this.onAddPost}
            deletePost={this.props.deletePost}
            likePost={this.props.likePost}
            authId={this.props.authId}
         />
      );
   }
}



const Posts: React.FC<PostsType> = (props) => {
   let postElements = props.posts.map((p: any) => <Post profile={props.profile} likePost={props.likePost}
      deletePost={props.deletePost} id={p.id} message={p.message} likes={p.likes} authId={props.authId} />);
   return (
      <div className={s.Posts}>
         <h2 className={s.Posts__title}>My posts</h2>
         {props.profile?.userId == props.authId && <PostsReduxForm onSubmit={props.onAddPost} />}
         <div className={s.Posts__wrapper}>
            {postElements}
         </div>
      </div>
   );
};

const PostsForm: React.FC<any> = (props) => {

   return (
      <form className={s.Posts__sending} onSubmit={props.handleSubmit}>
         <Field
            component={Textarea}
            name={'postsFormMessage'}
            type="text"
            className={s.input}
            placeholder="your news..."
            validate={[required, maxLength200]}
         />
         <button className={s.btn}>send</button>
      </form>
   );
};

const PostsReduxForm = reduxForm({ form: 'postsForm', })(PostsForm);

let mapStateToProps = (state: AppStateType): MapStateToProps => {
   return {
      posts: getPosts(state),
      profile: getProfile(state),
      authId: getUserId(state),
   }
};

export default compose(
   connect(mapStateToProps, { addPostActionCreator, deletePost, likePost }),
)(PostsComponent);