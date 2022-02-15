import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../../redux/dialogs-reducer';
import s from './MessageForm.module.scss';
import * as Yup from 'yup';

interface MyFormValues {
   newMessage: string;
}


export const MessageForm: React.FC = React.memo(() => {

   const dispatch = useDispatch();

   const addMessageActionCreator = actions.addMessageActionCreator

   let onAddMessage = (values: any, actions: any) => {
      dispatch(addMessageActionCreator(values.newMessage))
      actions.resetForm(true);
   };

   const SignupSchema = Yup.object().shape({
      newMessage: Yup.string().required('Field is required'),
   });

   const initialValues: MyFormValues = { newMessage: '' };

   return (
      <Formik
         className={s.wrapper}
         initialValues={initialValues}
         onSubmit={onAddMessage}
         validationSchema={SignupSchema}
      >
         {({ errors, touched }) =>
            <Form className={s.messageForm}>
               <Field
                  component={'textarea'}
                  name={'newMessage'}
                  className={s.messageArea}
                  placeholder={'Write message...'}
               />
               <button className={s.messageSend}>Send</button>

            </Form>
         }

      </Formik>
   );
})


