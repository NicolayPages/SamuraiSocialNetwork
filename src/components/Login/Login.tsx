import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import { authUserLogIn } from '../../redux/auth-reducer';
import { getAuthError, getCaptcha, getIsAuth } from '../../selectors/auth-selectors';
import s from './Login.module.scss';


type MyFormValues = {
   email: string
   password: string
   rememberMe: boolean
   captcha: string
}


const LoginContainer: React.FC = React.memo(() => {
   const isAuth = useSelector(getIsAuth)
   const captcha = useSelector(getCaptcha)
   const authError = useSelector(getAuthError)
   const dispatch = useDispatch()


   let onSubmitForm = (formData: any) => {
      dispatch(authUserLogIn(formData.email, formData.password, formData.rememberMe, formData.captcha))
   };

   if (isAuth) {
      return <Redirect to={'/profile'} />
   }

   return (
      <Login onSubmitForm={onSubmitForm} captcha={captcha} authError={authError} />
   );
})

const Login: React.FC<any> = React.memo((props) => {
   return (
      <div className={s.container}>
         <h1 className={s.title}>Login</h1>
         < LoginForm onSubmit={props.onSubmitForm} captcha={props.captcha} authError={props.authError} />
      </div>
   )
})


const LoginForm: React.FC<any> = React.memo((props) => {
   const { onSubmit, captcha, authError, } = props

   let onSubmitForm = (values: any, actions: any) => {
      onSubmit(values)
   };

   const SignupSchema = Yup.object().shape({
      email: Yup.string()
         .required('Field is required'),
      password: Yup.string()
         .required('Field is required'),
   });

   let initialValues: MyFormValues = { email: '', password: '', rememberMe: false, captcha: '' };

   return (
      <Formik
         initialValues={initialValues}
         onSubmit={onSubmitForm}
         validationSchema={SignupSchema}
      >
         {({ errors, touched }) =>
            <Form className={s.form} >
               <div>
                  <Field
                     component={'input'}
                     className={s.input + ' ' + (errors.email && touched.email ? s.error : null)}
                     type="email"
                     name='email'
                     placeholder={errors.email && touched.email ? errors.email : 'Email'}
                     tabIndex={1}
                  />
               </div>
               <div>
                  <Field
                     component={'input'}
                     className={s.input + ' ' + (errors.password && touched.password ? s.error : null)}
                     type="password"
                     name='password'
                     placeholder={errors.password && touched.password ? errors.password : 'Password'}
                     tabIndex={2}
                  />
               </div>
               {captcha && <div>
                  <img className={s.captcha} src={captcha} />
                  <Field
                     component={'input'}
                     className={s.input}
                     type="text"
                     name='captcha'
                     placeholder='Captcha' />
               </div>}
               <div className={s.flex}>
                  <Field
                     component={'input'}
                     className={s.checkbox}
                     type="checkbox"
                     name='rememberMe'
                     tabIndex={3} />
                  <span> Remember me</span>
               </div>
               {authError && <p className={s.formSummeryError}>{authError}</p>}
               <div className={s.buttonWrapper}>
                  <button className={s.button} tabIndex={4}>Login</button>
               </div>
            </Form>
         }

      </Formik>
   );
})


export default LoginContainer