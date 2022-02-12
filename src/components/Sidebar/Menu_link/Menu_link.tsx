import React, { Component } from 'react';
import s from '../Sidebar.module.scss'
import { NavLink } from 'react-router-dom';

type PropsType = {
   address: string
   name: string
}

export const Menu_link: React.FC<PropsType> = React.memo((props) => {
   let path = "/" + props.address;
   return (
      <li className={s.sidebar__link}>
         <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
      </li>
   );
})


