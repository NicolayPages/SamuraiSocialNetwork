import React, { Component } from 'react';
import s from './Sidebar.module.scss'
import Menu_link from './Menu_link/Menu_link';
import Friends from './Friends/Friends';
import { PropsType } from './SidebarContainer';


const Sidebar: React.FC<PropsType> = (props) => {
  let menuElements = props.links.map(l => <Menu_link key={l.id} name={l.name} adress={l.adress} />)
  return (
    <nav className={s.Sidebar}>
      <ul className={s.Sidebar__list}>
        {menuElements}
      </ul>
      {props.isAuth && <Friends friends={props.friends} />}
    </nav >
  );
}

export default Sidebar;
