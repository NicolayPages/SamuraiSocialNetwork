import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIsAuth, getLogin } from '../../redux/auth-selectors';
import { authUserLogOut } from '../../redux/auth-reducer';
import { getProfile } from '../../redux/profile-selectors';
import { getUserProfile } from '../../redux/profile-reducer';
import s from './Header.module.scss'
import { Link } from 'react-router-dom';
import userPhoto from '../../assets/images/user.png'
import logo from '../../../src/assets/images/logo.png'
import { getUserId } from '../../redux/auth-selectors';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withRouter } from 'react-router';



class HeaderContainer extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    return (<>
      <Header {...this.props} />
    </>)
  }
};


const Header = (props) => {
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
              <button onClick={onLogOutUser} className={s.btn}>Log Out</button>
            </div>
            : <Link to={'/login'}>Log In</Link>}
        </div>
      </div>
    </header>
  );
}




let mapStateToProps = (state) => ({
  isAuth: getIsAuth(state),
  login: getLogin(state),
  profile: getProfile(state),
  userId: getUserId(state),
});


export default compose(
  connect(mapStateToProps, { authUserLogOut, getUserProfile }),
  withRouter,
)(HeaderContainer);



