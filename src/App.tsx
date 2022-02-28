import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import './assets/styles/App.scss';
import AppRoutes from './components/AppRoutes/AppRoutes';
import ErrorPopup from './components/common/ErrorPopup/ErrorPopup';
import Preloader from './components/common/Preloader/Preloader';
import { HeaderContainer } from './components/Header/Header';
import { SidebarContainer } from './components/Sidebar/Sidebar';
import { initializedApp } from './redux/app-reducer';
import { getInitialized } from './selectors/auth-selectors';



const App: React.FC = () => {
  const initialized = useSelector(getInitialized)
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializedApp())
  }, []);

  if (!initialized) {
    return <Preloader />
  }

  return (
    <div className='App'>
      <HeaderContainer />
      <SidebarContainer />
      <div className="app__wrapper_content">
        <AppRoutes />
      </div>
      <ErrorPopup />
    </div>
  );
}


export default compose<React.ComponentType>(
  withRouter,
)(App)