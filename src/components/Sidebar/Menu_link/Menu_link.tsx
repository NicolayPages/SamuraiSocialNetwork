import React, { Component } from 'react';
import s from '../Sidebar.module.scss'
import { NavLink } from 'react-router-dom';


type PropsType = {
   address: string
   name: string
   icon: any
}

export const Menu_link: React.FC<PropsType> = React.memo((props) => {
   const { address, name } = props
   let path = "/" + address;
   return (
      <li className={s.sidebar__link}>
         <span className={s.icon}>{<props.icon />}</span>
         <NavLink to={path} className={s.link} activeClassName={s.active}>{name}</NavLink>
      </li>
   );
})


