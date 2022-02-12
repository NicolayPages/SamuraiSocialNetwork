import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { authUserLogIn } from '../../redux/auth-reducer';
import { getCaptcha, getIsAuth } from '../../selectors/auth-selectors';
import { maxLengthCreator, required } from '../../utilits/validators/validators';
import { Input } from '../common/FormElements/FormElements';
import s from './Login.module.scss';

type PropsType = {
   onSubmitForm: (email: string, password: string, rememberMe: boolean, captcha?: any) => void
   captcha: any
}
const maxLength30 = maxLengthCreator(30)


const LoginContainer: React.FC = React.memo(() => {
   const isAuth = useSelector(getIsAuth)
   const captcha = useSelector(getCaptcha)
   const dispatch = useDispatch()

   let onSubmitForm = (formData: any) => {
      dispatch(authUserLogIn(formData.email, formData.password, formData.rememberMe, formData.captcha))
   };

   if (isAuth) {
      return <Redirect to={'/profile'} />
   }

   return (
      <Login onSubmitForm={onSubmitForm} captcha={captcha} />
   );
})

const Login: React.FC<any> = React.memo((props) => {
   return (
      <div className={s.container}>
         <h1 className={s.title}>Login</h1>
         <LoginReduxForm onSubmit={props.onSubmitForm} {...props} />
      </div>
   )
})

const LoginForm: React.FC<any> = React.memo((props) => {
   return (
      <form className={s.form} onSubmit={props.handleSubmit}>
         <div>
            <Field
               component={Input}
               className={s.input}
               type="text"
               name='email'
               placeholder='Email'
               tabIndex={1}
               validate={[required, maxLength30]} />
         </div>
         <div>
            <Field component={Input} className={s.input} type="password" name='password' placeholder='Password' tabIndex={2} validate={[required, maxLength30]} />
         </div>
         <div className={s.flex}>
            <Field component={'input'} className={s.checkbox} type="checkbox" name='rememberMe' tabIndex={3} />
            <span> Remember me</span>
         </div>
         {props.error && <span className={s.formSummeryError}>{props.error}</span>}
         {props.captcha && <div>
            <img className={s.captcha} src={props.captcha} />
            <Field component={Input} className={s.input} type="text" name='captcha' placeholder='Captcha' />
         </div>}
         <div className={s.buttonWrapper}>
            <button className={s.button} tabIndex={4}>Login</button>
         </div>
      </form >
   );
})
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)


export default LoginContainer