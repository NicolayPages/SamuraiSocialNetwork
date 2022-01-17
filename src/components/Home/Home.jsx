import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { compose } from 'redux';
import { getIsAuth } from './../../redux/auth-selectors';

const Home = (props) => {
   if (props.isAuth) {
      return <Redirect to={'/profile'} />
   }
   if (!props.isAuth) {
      return <Redirect to={'/login'} />
   }

}


let mapStateToProps = (state) => {
   return {
      isAuth: getIsAuth(state),
   }
}


export default compose(
   connect(mapStateToProps, {}),
)(Home);