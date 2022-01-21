import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { deactivateMode } from '../../../redux/errors-reducer';
import s from './ErrorPopup.module.scss';
import errorIcon from '../../../assets/images/error.jpg'

const ErrorPopup = (props) => {
   let deactivateMode = () => {
      props.deactivateMode();
   }
   let showError = props.errorMessage != null;
   return (
      <div className={showError ? s.wrapper : s.wrapperNone}>
         <div className={s.wrapperBody}>
            <div className={s.header}>
               <h1 className={s.title}>Oops, something is wrong!</h1>
               <div className={s.closeWrapper}><p className={s.close} onClick={deactivateMode}>x</p></div>
            </div>
            <div className={s.content}>
               <h2 className={s.subtitle}>{props.errorMessage}</h2>
               <div className={s.image}><img src={errorIcon} alt="" /></div>
            </div>
         </div>
      </div>
   );
};



let mapStateToProps = (state) => {
   return {
      errorMessage: state.errors.errorMessage,
   }
}

export default compose(
   connect(mapStateToProps, { deactivateMode }),
)(ErrorPopup)

