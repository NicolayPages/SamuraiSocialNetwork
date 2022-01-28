import React, { Component } from 'react';
import s from '../Sidebar.module.scss'
import { NavLink } from 'react-router-dom';

type PropsType = {
   adress: string
   name: string
}

const Menu_link: React.FC<PropsType> = (props) => {
   let path = "/" + props.adress;
   return (
      <li className={s.sidebar__link}>
         <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
      </li>
   );
}

export default Menu_link;
