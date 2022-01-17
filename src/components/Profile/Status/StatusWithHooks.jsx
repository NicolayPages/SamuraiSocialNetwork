import React, { useState, useEffect } from 'react';
import s from './Status.module.scss'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { updateStatus } from '../../../redux/profile-reducer';
import { getProfile, getUserStatus } from '../../../redux/profile-selectors';
import { getUserId } from './../../../redux/auth-selectors';

const Status = (props) => {
   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);

   let activateEditMode = () => {
      setEditMode(true);
   }
   let deactivateEditMode = () => {
      setEditMode(false);
      props.updateStatus(status);
   }
   let onStatusChange = (e) => {
      setStatus(e.currentTarget.value)
   }

   useEffect(() => {
      setStatus(props.status)
   }, [props.status]);

   return (
      <div>
         {!editMode &&
            <div className={s.status}>
               <p onDoubleClick={props.authId == props.profile[0].userId && activateEditMode}>{props.status || '------------'}</p>
            </div>
         }
         {editMode &&
            <div className={s.input}>
               <input
                  autoFocus={true}
                  type="text"
                  onBlur={deactivateEditMode}
                  onChange={onStatusChange}
                  value={status}
               />
            </div>
         }
      </div>
   );
}


let mapStateToProps = (state) => {
   return {
      status: getUserStatus(state),
      profile: getProfile(state),
      authId: getUserId(state),
   }
};

export default compose(
   connect(mapStateToProps, { updateStatus }),
)(Status)