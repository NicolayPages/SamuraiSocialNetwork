import React, { Component } from 'react';
import s from '../Sidebar.module.scss'
import { NavLink } from 'react-router-dom';

const Menu_link = (props) => {
   let path = "/" + props.adress;
   return (
      <li className={s.sidebar__link}>
         <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
      </li>
   );
}

export default Menu_link;
