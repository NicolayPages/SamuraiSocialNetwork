import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { compose } from 'redux';
import { getUserId } from '../../redux/auth-selectors';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { getStatus, getUserProfile, updateStatus, updatePhoto, onEditMode, offEditMode } from './../../redux/profile-reducer';
import { getIsFetching, getProfile, getUserStatus } from './../../redux/profile-selectors';
import { followUsers, getUsersTest, unfollowUsers } from './../../redux/users-reducer';
import { getIsFollowing, getUsers } from './../../redux/users-selectors';
import Profile from './Profile';
import { getIsAuth } from './../../redux/auth-selectors';


class ProfileContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  refreshProfile() {
    let user = this.props.match.params.userId;
    if (!user) {
      user = this.props.AuthUserId;
      if (!user) {
        this.props.history.push('/login');
      }
    };
    this.props.getUserProfile(user);
    this.props.getStatus(user);
    this.props.getUsersTest();
  }
  componentDidMount() {
    this.refreshProfile();
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        < Profile {...this.props} isOwner={!this.props.match.params.userId} updatePhoto={this.props.updatePhoto}
          editMode={this.props.editMode} onEditMode={this.props.onEditMode} isAuth={this.props.isAuth} />
      </>
    )
  };
};


let mapStateToProps = (state) => {
  return {
    profile: getProfile(state),
    isFetching: getIsFetching(state),
    status: getUserStatus(state),
    AuthUserId: getUserId(state),
    users: getUsers(state),
    isFollowing: getIsFollowing(state),
    authId: getUserId(state),
    editMode: state.profilePage.editMode,
    isAuth: getIsAuth(state),
  };
};


export default compose(
  connect(mapStateToProps, {
    getUserProfile, getStatus, updateStatus, followUsers, unfollowUsers, getUsersTest, updatePhoto,
    onEditMode,
  }),
  withRouter,
)(ProfileContainer);