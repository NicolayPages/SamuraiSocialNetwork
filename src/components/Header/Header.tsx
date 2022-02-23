import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../../src/assets/images/logo.png';
import userPhoto from '../../assets/images/user.png';
import { authUserLogOut } from '../../redux/auth-reducer';
import { getUserProfile } from '../../redux/profile-reducer';
import { getIsAuth, getLogin, getUserId } from '../../selectors/auth-selectors';
import { getProfile } from '../../selectors/profile-selectors';
import { ProfileType } from '../../types/types';
import s from './Header.module.scss';

type PropsType = {
  isAuth: boolean
  login: string | null
  profile: ProfileType | null
  authUserLogOut: () => void
}


export const HeaderContainer: React.FC = React.memo(() => {
  const isAuth = useSelector(getIsAuth);
  const login = useSelector(getLogin);
  const userId = useSelector(getUserId)
  const profile = useSelector(getProfile)
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId == null) {
      return;
    }
    dispatch(getUserProfile(userId))
  }, []);

  let onLogOutUser = () => {
    dispatch(authUserLogOut());
  }

  return (
    <Header
      isAuth={isAuth}
      login={login}
      authUserLogOut={onLogOutUser}
      profile={profile}
    />
  )
})


const Header: React.FC<PropsType> = React.memo((props) => {
  const { isAuth, login, authUserLogOut, profile } = props


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
                  <img src={profile?.photos.small || userPhoto} />
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




