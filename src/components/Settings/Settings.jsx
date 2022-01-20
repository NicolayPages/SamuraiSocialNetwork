import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import s from './Settings.module.scss'
import { updateProfile } from './../../redux/profile-reducer';
import { getProfile } from './../../redux/profile-selectors';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


const Settings = (props) => {

   return (
      <h1 className={s.title}>Settings</h1>
   );
};


let mapStateToProps = (state) => {
   return {
      profile: getProfile(state),
   }
}

export default compose(
   connect(mapStateToProps, { updateProfile }),
   withAuthRedirect,
)(Settings)


