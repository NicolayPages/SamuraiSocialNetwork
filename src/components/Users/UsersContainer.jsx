import React from "react";
import { connect } from "react-redux";
import { requestUsers, setUsersPage, unfollowUsers, followUsers, getUsersTest } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { getCurrentPage, getIsFetching, getIsFollowing, getPageSize, getTotalUserCount, getUsers } from "../../selectors/users-selectors";
import { getIsAuth } from '../../selectors/auth-selectors';

class UsersContainer extends React.Component {
   constructor(props) {
      super(props);
   };
   componentDidMount() {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize);
   };
   onPageChanged = (p) => {
      this.props.setUsersPage(p, this.props.pageSize);
   };
   render() {
      return (<>
         {this.props.isFetching ? <Preloader /> : null}
         <Users
            totalUserCount={this.props.totalUserCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            isFollowing={this.props.isFollowing}
            toggleIsFollowing={this.props.toggleIsFollowing}
            unfollowUsers={this.props.unfollowUsers}
            followUsers={this.props.followUsers}
            getUsersTest={this.props.getUsersTest}
            isAuth={this.props.isAuth}
         />
      </>
      );
   };
};

let mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUserCount: getTotalUserCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      isFollowing: getIsFollowing(state),
      isAuth: getIsAuth(state)
   };
};


export default compose(
   connect(mapStateToProps, { requestUsers, setUsersPage, unfollowUsers, followUsers, getUsersTest }),
)(UsersContainer);


