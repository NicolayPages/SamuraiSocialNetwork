import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getDialogs, getMessages } from '../../selectors/dialogs-selectors';
import { DialogsType, MessagesType } from '../../redux/dialogs-reducer';
import { AppStateType } from '../../redux/redux-store';


type MapStateToPropsType = {
   dialogs: Array<DialogsType>
   messages: Array<MessagesType>
}
type MapDispatchToPropsType = {
}
export type PropsType = MapStateToPropsType & MapDispatchToPropsType


class DialogsContainer extends React.Component<PropsType> {
   render() {
      return (
         <Dialogs {...this.props} />
      );
   }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
   return {
      dialogs: getDialogs(state),
      messages: getMessages(state),
   };
};




export default compose(
   connect(mapStateToProps, {}),
   withAuthRedirect,
)(DialogsContainer);
