import React from 'react';
import s from './Login.module.scss';
import { reduxForm, Field, reset } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { authUserLogIn } from '../../redux/auth-reducer';
import { Input } from '../common/FormElements/FormElements';
import { maxLengthCreator, required } from '../../utilits/validators/validators';
import { Redirect } from 'react-router-dom';
import { getIsAuth } from '../../selectors/auth-selectors';
import { AppStateType } from '../../redux/redux-store';
import Preloader from '../common/Preloader/Preloader';

const maxLength30 = maxLengthCreator(30)

type MapStateToPropsType = {
   isAuth: boolean
   captcha: string | null
   isFetching?: boolean
}
type MapDispatchToPropsType = {
   authUserLogIn: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType



class LoginContainer extends React.Component<PropsType> {
   onSubmit = (formData: any, dispatch: any) => {
      this.props.authUserLogIn(formData.email, formData.password, formData.rememberMe, formData.captcha);
   };
   render() {
      if (this.props.isAuth) {
         return <Redirect to={'/profile'} />
      }
      return (
         <div className={s.container}>
            <h1 className={s.title}>Login</h1>
            <LoginReduxForm onSubmit={this.onSubmit} {...this.props} />
         </div>
      );
   };
};


const LoginForm: React.FC<any> = (props: any) => {
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
            <span> remember me</span>
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
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
   return {
      isAuth: getIsAuth(state),
      captcha: state.auth.captcha,
   };
};

export default compose(
   connect(mapStateToProps, { authUserLogIn })
)(LoginContainer);