import React from "react";
import { connect } from "react-redux";
import { requestUsers, setUsersPage, unfollowUsers, followUsers, } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { getCurrentPage, getIsFetching, getIsFollowing, getPageSize, getTotalUserCount, getUsers } from "../../selectors/users-selectors";
import { getIsAuth } from '../../selectors/auth-selectors';
import { UsersType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";


type MapStateToPropsType = {
   users: Array<UsersType> | any
   pageSize: number
   totalUserCount: number
   currentPage: number
   isFetching: boolean
   isFollowing: any
   isAuth: boolean
}
type MapDispatchToPropsType = {
   requestUsers: (currentPage: number, pageSize: number) => void
   setUsersPage: (p: number, pageSize: number) => void
   unfollowUsers: (id: number) => Promise<void>
   followUsers: (id: number) => Promise<void>
   toggleIsFollowing: () => void
   onPageChanged: (p: number) => void
}
export type PropsType = MapStateToPropsType & MapDispatchToPropsType


class UsersContainer extends React.Component<PropsType> {
   componentDidMount() {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize);
   };
   onPageChanged = (p: number) => {
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
            isFollowing={this.props.isFollowing}
            unfollowUsers={this.props.unfollowUsers}
            followUsers={this.props.followUsers}
            isAuth={this.props.isAuth}
         />
      </>
      );
   };
};





let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
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
   connect(mapStateToProps, { requestUsers, setUsersPage, unfollowUsers, followUsers, }),
)(UsersContainer);


