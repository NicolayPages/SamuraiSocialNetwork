import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getIsAuth } from '../../redux/auth-selectors';
import { getFriends, getLinks } from '../../redux/sidebar-selectors';
import Sidebar from './Sidebar'

class SidebarContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Sidebar {...this.props} />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    links: getLinks(state),
    friends: getFriends(state),
    isAuth: getIsAuth(state),
  };
};

export default compose(
  connect(mapStateToProps, {})
)(SidebarContainer);