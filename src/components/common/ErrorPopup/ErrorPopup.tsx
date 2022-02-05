import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { actions } from '../../../redux/errors-reducer';
import s from './ErrorPopup.module.scss';
import errorIcon from '../../../assets/images/error.jpg'
import { AppStateType } from '../../../redux/redux-store';


type MapStateToProps = {
   errorMessage: string | null
}
type MapDispatchToProps = {
   deactivateMode: () => void
}

type PropsType = MapStateToProps & MapDispatchToProps


const ErrorPopup: React.FC<PropsType> = (props) => {
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



let mapStateToProps = (state: AppStateType): MapStateToProps => {
   return {
      errorMessage: state.errors.errorMessage,
   }
}

export default compose(
   connect(mapStateToProps, { ...actions }),
)(ErrorPopup)

