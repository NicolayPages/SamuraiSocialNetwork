import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Dialogs from './Dialogs';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { getDialogs, getMessages } from '../../redux/dialogs-selectors';
import { getIsAuth } from './../../redux/auth-selectors';

class DialogsContainer extends React.Component {
   constructor(props) {
      super(props)
   }
   render() {
      return (
         <Dialogs {...this.props} />
      );
   }
}

let mapStateToProps = (state) => {
   return {
      dialogs: getDialogs(state),
      messages: getMessages(state),
   };
};




export default compose(
   connect(mapStateToProps, {}),
   withAuthRedirect,
)(DialogsContainer);
