import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, reset } from 'redux-form';
import s from './MessageForm.module.scss'
import { compose } from 'redux';
import { addMessageActionCreator } from '../../../redux/dialogs-reducer';
import { maxLengthCreator, required } from '../../../utilits/validators/validators';
import { Textarea } from '../../common/FormElements/FormElements';
import { AppStateType } from '../../../redux/redux-store';

const maxLength200 = maxLengthCreator(200);



class MessageFormComponent extends React.Component<any> {
   onAddMessage = (values: any, dispatch: any) => {
      this.props.addMessageActionCreator(values.addNewMessage);
      dispatch(reset('MessageForm'));
   };
   render() {
      return (
         <MessageReduxForm onSubmit={this.onAddMessage} />
      );
   }
}

const MessageForm = (props: any) => {
   return (
      <form className={s.messageForm} onSubmit={props.handleSubmit}>
         <Field
            component={Textarea}
            className={s.messageArea}
            placeholder="Write message..."
            name={'addNewMessage'}
            validate={[required, maxLength200]} />
         <button className={s.messageSend}>Send</button>
      </form>
   );
};



let mapStateToProps = (state: any) => {
   return {
      newText: state.dialogsPage.messageNewText,
   }
};

const MessageReduxForm = reduxForm({ form: 'MessageForm' })(MessageForm);


export default compose(
   connect(mapStateToProps, { addMessageActionCreator }),
)(MessageFormComponent);