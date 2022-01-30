import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addPostActionCreator, deletePost, likePost } from '../../../redux/profile-reducer'
import Post from './Post/Post';
import s from './Posts.module.scss'
import { reduxForm, Field, reset } from 'redux-form';
import { Textarea } from './../../common/FormElements/FormElements';
import { maxLengthCreator, required } from '../../../utilits/validators/validators';
import { getPosts } from '../../../selectors/profile-selectors';
import { getProfile } from '../../../selectors/profile-selectors';
import { getUserId } from '../../../selectors/auth-selectors';

const maxLength200 = maxLengthCreator(200);

class PostsComponent extends React.Component {
   constructor(props) {
      super(props)
   }
   onAddPost = (values, dispatch,) => {
      this.props.addPostActionCreator(values.postsFormMessage,);
      dispatch(reset("postsForm"));
   };
   render() {
      return (
         <Posts
            posts={this.props.posts}
            ava={this.props.ava}
            onAddPost={this.onAddPost}
            deletePost={this.props.deletePost}
            likePost={this.props.likePost}
            profileId={this.props.profile.userId}
            authId={this.props.authId}
            photo={this.props.profile.photos.small}
         />
      );
   }
}



const Posts = (props) => {
   let postElements = props.posts.map(p => <Post likePost={props.likePost} deletePost={props.deletePost} id={p.id} message={p.message} likes={p.likes} photo={props.photo} profileId={props.profileId} authId={props.authId} />);
   return (
      <div className={s.Posts}>
         <h2 className={s.Posts__title}>My posts</h2>
         {props.profileId == props.authId && <PostsReduxForm onSubmit={props.onAddPost} />}
         <div className={s.Posts__wrapper}>
            {postElements}
         </div>
      </div>
   );
};

const PostsForm = (props) => {

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


let mapStateToProps = (state) => {
   return {
      posts: getPosts(state),
      profile: getProfile(state),
      authId: getUserId(state),
   }
};

export default compose(
   connect(mapStateToProps, { addPostActionCreator, deletePost, likePost }),
)(PostsComponent);