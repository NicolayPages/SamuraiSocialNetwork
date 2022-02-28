import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinksType, requestFriends } from '../../redux/sidebar-reducer';
import { getIsAuth } from '../../selectors/auth-selectors';
import { getCurrentPage, getFriends, getIsFetching, getLinks, getPageSize } from '../../selectors/sidebar-selectors';
import { UsersType } from '../../types/types';
import { Friends } from './Friends/Friends';
import { Menu_link } from './Menu_link/Menu_link';
import s from './Sidebar.module.scss';

type PropsType = {
  links: [] | Array<LinksType>
  friends: [] | Array<UsersType>
  isAuth: boolean,
  isFetching: boolean
}


export const SidebarContainer: React.FC = React.memo(() => {
  const links = useSelector(getLinks)
  const friends = useSelector(getFriends)
  const isAuth = useSelector(getIsAuth)
  const isFetching = useSelector(getIsFetching)
  const currentPage = useSelector(getCurrentPage)
  const pageSize = useSelector(getPageSize)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestFriends(currentPage, pageSize))
  }, []);

  return (
    <Sidebar
      links={links}
      friends={friends}
      isAuth={isAuth}
      isFetching={isFetching}
    />
  )
})


const Sidebar: React.FC<PropsType> = React.memo((props) => {
  let menuElements = props.links.map((l: LinksType) => <Menu_link key={l.id} name={l.name} address={l.address} icon={l.icon} />)
  return (
    <nav className={s.Sidebar}>
      <ul className={s.Sidebar__list}>
        {menuElements}
      </ul>
      {props.isAuth && <Friends
        isFetching={props.isFetching}
        friends={props.friends}
      />}
    </nav >
  );
})