import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import { compose } from 'redux';
import './App.scss';
import ErrorPopup from './components/common/ErrorPopup/ErrorPopup';
import Preloader from './components/common/Preloader/Preloader';
import { Footer } from './components/Footer/Footer';
import { HeaderContainer } from './components/Header/Header';
import { SidebarContainer } from './components/Sidebar/Sidebar';
import { initializedApp } from './redux/app-reducer';
import { getInitialized } from './selectors/auth-selectors';



const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const LoginContainer = React.lazy(() => import('./components/Login/Login'));
const NotFound = React.lazy(() => import('./components/NotFound/NotFound'));
const ChatPage = React.lazy(() => import('./components/Chat/ChatPage'));


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
    <div className="App" >
      <ErrorPopup />
      <HeaderContainer />
      <SidebarContainer />
      <div className="app__wrapper_content">
        <Suspense fallback={<Preloader />}>
          <Switch>
            <Route exact path='/' component={ProfileContainer} />
            <Route path='/profile/:userId?' component={ProfileContainer} />
            <Route path='/dialogs' component={DialogsContainer} />
            <Route path='/users' component={UsersContainer} />
            <Route path='/login' component={LoginContainer} />
            <Route path='/chat' component={ChatPage} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}


export default compose<React.ComponentType>(
  withRouter,
)(App)