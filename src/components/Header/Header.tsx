import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../../src/assets/images/logo.png';
import userPhoto from '../../assets/images/user.png';
import { authUserLogOut } from '../../redux/auth-reducer';
import { getIsAuth, getLogin } from '../../selectors/auth-selectors';
import s from './Header.module.scss';

type PropsType = {
  isAuth: boolean
  login: string | null
  authUserLogOut: () => void
}


export const HeaderContainer: React.FC = React.memo(() => {
  const isAuth = useSelector(getIsAuth);
  const login = useSelector(getLogin);
  const dispatch = useDispatch();

  let onLogOutUser = () => {
    dispatch(authUserLogOut());
  }

  return (
    <Header
      isAuth={isAuth}
      login={login}
      authUserLogOut={onLogOutUser}
    />
  )
})


const Header: React.FC<PropsType> = React.memo((props) => {
  const { isAuth, login, authUserLogOut } = props
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.headerBody}>
          <div className={s.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={s.loginBlock}>
            {isAuth ?
              <div className={s.login_wrapper}>
                <div className={s.login_ava}>
                  <img src={userPhoto} />
                </div>
                <p className={s.login}>{login}</p>
                <Link onClick={authUserLogOut} className={s.btn} to={'/users'}>Log Out</Link>
              </div>
              : <Link to={'/login'}>Log In</Link>}
          </div>
        </div>
      </div>
    </header>
  );
})




