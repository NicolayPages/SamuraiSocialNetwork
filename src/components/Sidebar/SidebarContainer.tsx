import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { FriendsType, LinksType } from '../../redux/sidebar-reducer';
import { getIsAuth } from '../../selectors/auth-selectors';
import { getFriends, getLinks } from '../../selectors/sidebar-selectors';
import Sidebar from './Sidebar'

type MapStateToPropsType = {
  links: [] | Array<LinksType>
  friends: [] | Array<FriendsType>
  isAuth: boolean,
}
type MapDispatchToPropsType = {

}
export type PropsType = MapStateToPropsType & MapDispatchToPropsType


class SidebarContainer extends React.Component<PropsType> {
  render() {
    return (
      <Sidebar {...this.props} />
    );
  }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    links: getLinks(state),
    friends: getFriends(state),
    isAuth: getIsAuth(state),
  };
};

export default compose(
  connect(mapStateToProps, {})
)(SidebarContainer);