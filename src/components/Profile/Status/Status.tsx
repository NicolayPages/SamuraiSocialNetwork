import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateStatus } from '../../../redux/profile-reducer';
import { getUserId } from '../../../selectors/auth-selectors';
import { getProfile, getUserStatus } from '../../../selectors/profile-selectors';
import s from './Status.module.scss';


export const Status: React.FC = React.memo(() => {

   const status = useSelector(getUserStatus)
   const profile = useSelector(getProfile)
   const authId = useSelector(getUserId)
   let dispatch = useDispatch()

   let [editMode, setEditMode] = useState(false)
   let [newStatus, setNewStatus] = useState(status)

   let activateEditMode = () => {
      setEditMode(true);
   }
   let deactivateEditMode = () => {
      setEditMode(false);
      dispatch(updateStatus(newStatus))
   }
   let onStatusChange = (e: any) => {
      setNewStatus(e.currentTarget.value)
   }
   useEffect(() => {
      setNewStatus(status)
   }, [status]);

   return (
      <div>
         {!editMode &&
            <div className={s.status}>
               <p onDoubleClick={authId == profile?.userId ? activateEditMode : undefined}>
                  {status || '--------------'}</p>
            </div>
         }
         {editMode &&
            <div className={s.input}>
               <input
                  autoFocus={true}
                  type="text"
                  onBlur={deactivateEditMode}
                  onChange={onStatusChange}
                  value={newStatus}
               />
            </div>
         }
      </div>
   );
})
