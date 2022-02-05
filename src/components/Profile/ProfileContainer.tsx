import React from 'react';
import { connect } from 'react-redux';
import { withRouter, } from 'react-router';
import { compose } from 'redux';
import { getUserId } from '../../selectors/auth-selectors';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getStatus, getUserProfile, updateStatus, updatePhoto, actions } from '../../redux/profile-reducer';
import { getIsFetching, getProfile, getUserStatus } from '../../selectors/profile-selectors';
import { followUsers, getUsersTest, unfollowUsers } from '../../redux/users-reducer';
import { getIsFollowing, getUsers } from '../../selectors/users-selectors';
import Profile from './Profile';
import { getIsAuth } from '../../selectors/auth-selectors';
import { AppStateType } from '../../redux/redux-store';
import { ProfileType } from '../../types/types'
import { Redirect } from 'react-router-dom';

type OwnProps = {
  match: any
  history: any
  isOwner: boolean
}
type MapStateToPropsType = {
  profile: ProfileType | null,
  isFetching: boolean
  status?: any
  isFollowing: any
  authId: number | null
  editMode: boolean
  isAuth: boolean
  localIsFetching: boolean
}
type MapDispatchToPropsType = {
  getUserProfile: (user: number) => void
  getStatus: (user: number) => void
  updateStatus: () => void
  followUsers: (userId: number) => void
  unfollowUsers: (userId: number) => void
  updatePhoto: (file: any) => void
  onEditMode: () => void
}
export type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnProps

class ProfileContainer extends React.Component<PropsType> {
  refreshProfile() {
    let user = this.props.match.params.userId;
    if (!user) {
      user = this.props.authId;
      if (!user) {
        this.props.history.push('/login');
      }
    };
    this.props.getUserProfile(user);
    this.props.getStatus(user);
  }
  componentDidMount() {
    this.refreshProfile();
  };
  componentDidUpdate(prevProps: any) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        < Profile {...this.props}
          isOwner={!this.props.match.params.userId}
          updatePhoto={this.props.updatePhoto}
          editMode={this.props.editMode}
          onEditMode={this.props.onEditMode}
          profile={this.props.profile}
          isAuth={this.props.isAuth}
          isFetching={this.props.isFetching}
          localIsFetching={this.props.localIsFetching} />
      </>
    )
  };
};


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    profile: getProfile(state),
    isFetching: getIsFetching(state),
    status: getUserStatus(state),
    isFollowing: getIsFollowing(state),
    authId: getUserId(state),
    editMode: state.profilePage.editMode,
    isAuth: getIsAuth(state),
    localIsFetching: state.profilePage.localIsFetching,
  };
};


export default compose(
  connect(mapStateToProps, {
    getUserProfile, getStatus, updateStatus, followUsers, unfollowUsers, updatePhoto,
    ...actions,
  }),
  withRouter,
)(ProfileContainer);