import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../../src/assets/images/logo.png';
import userPhoto from '../../assets/images/user.png';
import { authUserLogOut } from '../../redux/auth-reducer';
import { getOwnerPhoto } from '../../redux/profile-reducer';
import { getIsAuth, getLogin, getUserId } from '../../selectors/auth-selectors';
import { getPhoto } from '../../selectors/profile-selectors';
import s from './Header.module.scss';

type PropsType = {
  isAuth: boolean
  login: string | null
  ownerPhoto: string | null
  authUserLogOut: () => void
}


export const HeaderContainer: React.FC = React.memo(() => {
  const isAuth = useSelector(getIsAuth)
  const login = useSelector(getLogin)
  const authId = useSelector(getUserId)
  const ownerPhoto = useSelector(getPhoto)
  const dispatch = useDispatch();

  useEffect(() => {
    if (authId == null) {
      return;
    }
    dispatch(getOwnerPhoto(authId))
  }, []);

  let onLogOutUser = () => {
    dispatch(authUserLogOut());
  }

  return (
    <Header
      ownerPhoto={ownerPhoto}
      isAuth={isAuth}
      login={login}
      authUserLogOut={onLogOutUser}
    />
  )
})


const Header: React.FC<PropsType> = React.memo((props) => {
  const { isAuth, login, authUserLogOut, ownerPhoto } = props


  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.headerBody}>
          <div className={s.logo}>
            <div><img src={logo} alt="logo" /></div>
            <p>SamuraiNetwork</p>
          </div>
          <div className={s.loginBlock}>
            {isAuth ?
              <div className={s.login_wrapper}>
                <div className={s.login_ava}>
                  <img src={ownerPhoto || userPhoto} />
                </div>
                <p className={s.login}>{login}</p>
                <button onClick={authUserLogOut} className={s.btn}>Log Out</button>
              </div>
              : <Link to={'/login'}>Log In</Link>}
          </div>
        </div>
      </div>
    </header>
  );
})




