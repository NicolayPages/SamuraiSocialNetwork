import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { compose } from 'redux';
import './App.scss';
import Preloader from './components/common/Preloader/Preloader';
import Footer from './components/Footer/Footer.jsx';
import HeaderContainer from './components/Header/HeaderContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer.jsx';
import { initializedApp } from './redux/app-reducer';
import { withRouter } from 'react-router';
import Home from './components/Home/Home';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));
const Music = React.lazy(() => import('./components/Music/Music'));
const News = React.lazy(() => import('./components/News/News'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));





class App extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.initializedApp()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="App" >
        <HeaderContainer />
        <SidebarContainer />
        <div className="app__wrapper_content">
          <Suspense fallback={<Preloader />}>
            <Route path='/' component={Home} />
            <Route path='/profile/:userId?' component={ProfileContainer} />
            <Route path='/dialogs' component={DialogsContainer} />
            <Route path='/users' component={UsersContainer} />
            <Route path='/login' component={Login} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
          </Suspense>
        </div>
        <Footer />
      </div>
    );
  }
};

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { initializedApp, }),
)(App)