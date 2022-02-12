import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { actions, updateProfile } from '../../../redux/profile-reducer';
import { getIsFetching, getProfile } from '../../../selectors/profile-selectors';
import { Input, Textarea } from '../../common/FormElements/FormElements';
import Preloader from '../../common/Preloader/Preloader';
import s from './EditForm.module.scss';


export const Edit = React.memo(() => {

   const profile = useSelector(getProfile)
   const isFetching = useSelector(getIsFetching)

   const dispatch = useDispatch()
   let { offEditMode } = actions

   let onSubmit = (formData) => {
      dispatch(updateProfile(formData))
   }

   let offUserEditMode = () => {
      dispatch(offEditMode())
   }

   if (isFetching) {
      return <Preloader />
   }

   return (
      <div className={s.wrapper}>
         <div className={s.userSettings}>
            <EditReduxForm initialValues={profile} onSubmit={onSubmit} offUserEditMode={offUserEditMode} />
         </div>
      </div>
   );
})

const EditForm = React.memo((props) => {
   return (
      <form className={s.form} onSubmit={props.handleSubmit}>
         <div className={s.header} >
            <h2 className={s.subtitle}>Edit profile data</h2>
            <p className={s.cancel} onClick={props.offUserEditMode}>X</p>
         </div>
         <div className={s.flex}>
            <div className={s.inputWrapper}>
               <Field
                  component={Input}
                  className={s.input}
                  type={'text'}
                  placeholder={'Full name'}
                  tabIndex={1}
                  name={'fullName'}
               />
            </div>
            <div className={s.inputWrapper}>
               <Field
                  component={Input}
                  className={s.input}
                  type={'text'}
                  placeholder={'About me'}
                  tabIndex={1}
                  name={'aboutMe'}
               />
            </div>
         </div>
         <div className={s.inputWrapperCheckbox}>
            <Field
               component={Input}
               className={s.inputCheckbox}
               type={'checkbox'}
               tabIndex={2}
               name={'lookingForAJob'}
               onChange={props.onEditArea}
            />
            <span>Are you looking a job?</span>
         </div>
         <div className={s.inputWrapper}>
            <Field
               component={Textarea}
               className={s.textarea}
               placeholder={'Description your skills'}
               tabIndex={3}
               name={'lookingForAJobDescription'}

            />
         </div >
         <h3 className={s.contactTitle}>My contacts</h3>
         <div className={s.contacts}>
            <div className={s.inputWrapper}>
               <Field
                  component={Input}
                  className={s.input}
                  type={'text'}
                  placeholder={'Link to your github'}
                  tabIndex={4}
                  name={'contacts.github'}

               />
            </div>
            <div className={s.inputWrapper}>
               <Field
                  component={Input}
                  className={s.input}
                  type={'text'}
                  placeholder={'Link to your vk'}
                  tabIndex={5}
                  name={'contacts.vk'}

               />
            </div>
            <div className={s.inputWrapper}>
               <Field
                  component={Input}
                  className={s.input}
                  type={'text'}
                  placeholder={'Link to your facebook'}
                  tabIndex={6}
                  name={'contacts.facebook'}

               />
            </div>
            <div className={s.inputWrapper}>
               <Field
                  component={Input}
                  className={s.input}
                  type={'text'}
                  placeholder={'Link to your instagram'}
                  tabIndex={7}
                  name={'contacts.instagram'}

               />
            </div>
            <div className={s.inputWrapper}>
               <Field
                  component={Input}
                  className={s.input}
                  type={'text'}
                  placeholder={'Link to your twitter'}
                  tabIndex={8}
                  name={'contacts.twitter'}

               />
            </div>
            <div className={s.inputWrapper}>
               <Field
                  component={Input}
                  className={s.input}
                  type={'text'}
                  placeholder={'Link to your website'}
                  tabIndex={9}
                  name={'contacts.website'}

               />
            </div>
            <div className={s.inputWrapper}>
               <Field
                  component={Input}
                  className={s.input}
                  type={'text'}
                  placeholder={'Link to your youtube'}
                  tabIndex={10}
                  name={'contacts.youtube'}

               />
            </div>
            <div className={s.inputWrapper}>
               <Field
                  component={Input}
                  className={s.input}
                  type={'text'}
                  placeholder={'Link to your mainLink'}
                  tabIndex={11}
                  name={'contacts.mainLink'}

               />
            </div>
         </div>
         {props.error && <span className={s.formSummeryError}>{props.error}</span>}
         <div className={s.btnWrapper}>
            <button className={s.btn}>Update profile data</button>
         </div>
      </form>
   )
})


const EditReduxForm = reduxForm({ form: 'editForm' })(EditForm);



