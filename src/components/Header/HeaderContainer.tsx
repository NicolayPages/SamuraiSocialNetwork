import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIsAuth, getLogin } from '../../selectors/auth-selectors';
import { authUserLogOut } from '../../redux/auth-reducer';
import { getProfile } from '../../selectors/profile-selectors';
import { getUserProfile } from '../../redux/profile-reducer';
import s from './Header.module.scss'
import { Link } from 'react-router-dom';
import userPhoto from '../../assets/images/user.png'
import logo from '../../../src/assets/images/logo.png'
import { getUserId } from '../../selectors/auth-selectors';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { ProfileType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';


type MapStateToPropsType = {
  isAuth: boolean
  login: string | null
  userId: number | null
}
type MapDispatchToPropsType = {
  authUserLogOut: () => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<PropsType> {
  render() {
    return (<>
      <Header {...this.props} />
    </>)
  }
};


const Header: React.FC<PropsType> = (props) => {
  let onLogOutUser = () => {
    props.authUserLogOut();
  }
  return (
    <header className={s.Header}>
      <div className={s.container}>
        <img className={s.Header__logo} src={logo} alt="logo" />
        <div className={s.loginBlock}>
          {props.isAuth ?
            <div className={s.login_wrapper}>
              <div className={s.login_ava}>
                <img src={userPhoto} />
              </div>
              <p className={s.login}>{props.login}</p>
              <Link onClick={onLogOutUser} className={s.btn} to={'/login'}>Log Out</Link>
            </div>
            : <Link to={'/login'}>Log In</Link>}
        </div>
      </div>
    </header>
  );
}




let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  isAuth: getIsAuth(state),
  login: getLogin(state),
  userId: getUserId(state),
});


export default compose(
  connect(mapStateToProps, { authUserLogOut }),
  withRouter,
)(HeaderContainer);



