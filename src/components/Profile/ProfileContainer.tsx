import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, withRouter } from 'react-router';
import { compose } from 'redux';
import { actions, getStatus, getUserProfile, updatePhoto } from '../../redux/profile-reducer';
import { getUserId } from '../../selectors/auth-selectors';
import { getEditMode, getIsFetching, getLocalIsFetching, getProfile } from '../../selectors/profile-selectors';
import Preloader from '../common/Preloader/Preloader';
import { Profile } from './Profile';



type OwnProps = {
  match: any
  history: any
  isOwner: boolean
}


const ProfileContainer: React.FC<OwnProps> = React.memo((props) => {

  const profile = useSelector(getProfile)
  const isFetching = useSelector(getIsFetching)
  const authId = useSelector(getUserId)
  const editMode = useSelector(getEditMode)
  const localIsFetching = useSelector(getLocalIsFetching)
  const params = useParams<{ userId?: string }>()


  let dispatch = useDispatch()
  let { onEditMode } = actions


  let onUpdatePhoto = (file: any) => {
    dispatch(updatePhoto(file))
  }


  let onEditUserMode = () => {
    dispatch(onEditMode())
  }

  let refreshProfile = () => {
    let user = props.match.params.userId;
    if (!user) {
      user = authId;
    };
    dispatch(getUserProfile(user))
    dispatch(getStatus(user))
  }

  useEffect(() => {
    refreshProfile()
  }, [props.match.params.userId]);

  if (isFetching) {
    return <Preloader />
  }
  if (!profile) {
    return <Preloader />
  }
  return (
    < Profile
      isOwner={!props.match.params.userId}
      editMode={editMode}
      profile={profile}
      localIsFetching={localIsFetching}
      updatePhoto={onUpdatePhoto}
      onEditUserMode={onEditUserMode}
    />
  )
})


export default compose<React.ComponentType>(
  withRouter,
)(ProfileContainer);