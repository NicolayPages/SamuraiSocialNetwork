import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { actions, updateProfile } from '../../../redux/profile-reducer';
import { getIsFetching, getProfile, getProfileError } from '../../../selectors/profile-selectors';
import { ProfileType } from '../../../types/types';
import Preloader from '../../common/Preloader/Preloader';
import s from './EditForm.module.scss';

type PropsType = {
   onSubmit: (values: any) => void
   offUserEditMode: () => void
   profile: ProfileType | null
   errorMessage: string | null
}

export const Edit = React.memo(() => {

   const profile = useSelector(getProfile)
   const isFetching = useSelector(getIsFetching)
   const errorMessage = useSelector(getProfileError)

   const dispatch = useDispatch()
   let { offEditMode } = actions

   let onSubmit = (formData: any) => {
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
            <EditForm profile={profile} onSubmit={onSubmit} offUserEditMode={offUserEditMode} errorMessage={errorMessage} />
         </div>
      </div>
   );
})



const EditForm: React.FC<PropsType> = (props) => {

   const updateSchema = Yup.object().shape({
      fullName: Yup.string()
         .max(30, 'Your name is too long')
         .required('Field is required'),
      aboutMe: Yup.string()
         .max(100, 'Your description is too long')
         .required('Field is required'),
      lookingForAJobDescription: Yup.string()
         .max(200, 'Your description is too long')
         .required('Field is required'),
   });

   const { onSubmit, offUserEditMode, profile, errorMessage } = props

   let initValues = {
      fullName: '',
      aboutMe: '',
      lookingForAJob: false,
      lookingForAJobDescription: '',
      contacts: {
         github: '',
         vk: '',
         facebook: '',
         instagram: '',
         twitter: '',
         website: '',
         youtube: '',
         mainLink: ''
      }
   };

   let updateProfile = (values: any) => {
      onSubmit(values)
   }

   let init = profile ? profile : initValues

   return (
      <Formik
         initialValues={init}
         validationSchema={updateSchema}
         onSubmit={updateProfile}
      >
         {({ errors, touched }) => (
            <Form className={s.form}>
               <div className={s.header} >
                  <h2 className={s.subtitle}>Edit profile data</h2>
                  <p className={s.cancel} onClick={offUserEditMode}>X</p>
               </div>
               <div className={s.flex}>
                  <div className={s.inputWrapper}>
                     <Field
                        component={'input'}
                        className={s.input + ' ' + (errors.fullName && touched.fullName ? s.error : null)}
                        type={'text'}
                        placeholder={errors.fullName && touched.fullName ? errors.fullName : 'Full name'}
                        tabIndex={1}
                        name={'fullName'}
                     />
                  </div>
                  <div className={s.inputWrapper}>
                     <Field
                        component={'input'}
                        className={s.input + ' ' + (errors.aboutMe && touched.aboutMe ? s.error : null)}
                        type={'text'}
                        placeholder={errors.aboutMe && touched.aboutMe ? errors.aboutMe : 'About me'}
                        tabIndex={1}
                        name={'aboutMe'}
                     />
                  </div>
               </div>
               <div className={s.inputWrapperCheckbox}>
                  <Field
                     component={'input'}
                     className={s.inputCheckbox}
                     type={'checkbox'}
                     tabIndex={2}
                     name={'lookingForAJob'}
                  />
                  <span>Are you looking a job?</span>
               </div>
               <div className={s.inputWrapper}>
                  <Field
                     component={'textarea'}
                     className={s.textarea + ' ' + (errors.lookingForAJobDescription &&
                        touched.lookingForAJobDescription ? s.error : null)}
                     placeholder={errors.lookingForAJobDescription && touched.lookingForAJobDescription ? errors.lookingForAJobDescription : 'Description your skills'}
                     tabIndex={3}
                     name={'lookingForAJobDescription'}

                  />
               </div >
               <h3 className={s.contactTitle}>My contacts</h3>
               <div className={s.contacts}>
                  <div className={s.inputWrapper}>
                     <Field
                        component={'input'}
                        className={s.input}
                        type={'text'}
                        placeholder={'Link to your github'}
                        tabIndex={4}
                        name={'contacts.github'}

                     />
                  </div>
                  <div className={s.inputWrapper}>
                     <Field
                        component={'input'}
                        className={s.input}
                        type={'text'}
                        placeholder={'Link to your vk'}
                        tabIndex={5}
                        name={'contacts.vk'}

                     />
                  </div>
                  <div className={s.inputWrapper}>
                     <Field
                        component={'input'}
                        className={s.input}
                        type={'text'}
                        placeholder={'Link to your facebook'}
                        tabIndex={6}
                        name={'contacts.facebook'}

                     />
                  </div>
                  <div className={s.inputWrapper}>
                     <Field
                        component={'input'}
                        className={s.input}
                        type={'text'}
                        placeholder={'Link to your instagram'}
                        tabIndex={7}
                        name={'contacts.instagram'}

                     />
                  </div>
                  <div className={s.inputWrapper}>
                     <Field
                        component={'input'}
                        className={s.input}
                        type={'text'}
                        placeholder={'Link to your twitter'}
                        tabIndex={8}
                        name={'contacts.twitter'}

                     />
                  </div>
                  <div className={s.inputWrapper}>
                     <Field
                        component={'input'}
                        className={s.input}
                        type={'text'}
                        placeholder={'Link to your website'}
                        tabIndex={9}
                        name={'contacts.website'}

                     />
                  </div>
                  <div className={s.inputWrapper}>
                     <Field
                        component={'input'}
                        className={s.input}
                        type={'text'}
                        placeholder={'Link to your youtube'}
                        tabIndex={10}
                        name={'contacts.youtube'}

                     />
                  </div>
                  <div className={s.inputWrapper}>
                     <Field
                        component={'input'}
                        className={s.input}
                        type={'text'}
                        placeholder={'Link to your mainLink'}
                        tabIndex={11}
                        name={'contacts.mainLink'}

                     />
                  </div>
               </div>
               {errorMessage && <p className={s.error}>{errorMessage}</p>}
               <div className={s.btnWrapper}>
                  <button className={s.btn}>Update profile data</button>
               </div>
            </Form>
         )}
      </Formik>
   )
}




