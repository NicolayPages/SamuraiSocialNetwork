import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../../redux/dialogs-reducer';
import s from './MessageForm.module.scss';


type PropsType = {}
interface MyFormValues {
   newMessage: string;
}


export const MessageForm: React.FC<PropsType> = React.memo((props) => {

   const dispatch = useDispatch();

   const addMessageActionCreator = actions.addMessageActionCreator

   let onAddMessage = (values: any, actions: any) => {
      dispatch(addMessageActionCreator(values.newMessage))
      actions.resetForm(true);
   };

   const initialValues: MyFormValues = { newMessage: '' };

   return (
      <Formik className={s.wrapper} initialValues={initialValues} onSubmit={onAddMessage}>
         <Form className={s.messageForm}>
            <Field component={'textarea'} name={'newMessage'} className={s.messageArea} placeholder="Write message..." />
            <button className={s.messageSend}>Send</button>
         </Form>
      </Formik>
   );
})


