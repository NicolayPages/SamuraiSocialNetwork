import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.scss'

type PropsType = {
   id: number
   name: string
}

const Dialog: React.FC<PropsType> = (props) => {
   let path = "/dialogs/" + props.id;
   return (
      <li className={s.link}><NavLink to={path} activeClassName="selected" >{props.name}</NavLink></li>
   );
}

export default Dialog;