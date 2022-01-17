import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { getUserId } from '../../redux/auth-selectors';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { getStatus, getUserProfile, updateStatus } from './../../redux/profile-reducer';
import { getIsFetching, getProfile, getUserStatus } from './../../redux/profile-selectors';
import { followUsers, getUsersTest, unfollowUsers } from './../../redux/users-reducer';
import { getIsFollowing, getUsers } from './../../redux/users-selectors';
import Profile from './Profile';


class ProfileContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let user = this.props.match.params.userId;
    if (!user) {
      user = this.props.AuthUserId
      if (!user) {
        this.props.history.push('/login');
      }
    };
    this.props.getUsersTest()
    this.props.getUserProfile(user)
    this.props.getStatus(user)
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        < Profile {...this.props} />
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
  };
};


export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, followUsers, unfollowUsers, getUsersTest }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);